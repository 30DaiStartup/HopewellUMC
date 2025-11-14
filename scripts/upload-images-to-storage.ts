/**
 * Script to upload images from old-site-downloads to Firebase Storage
 *
 * Usage:
 *   npx tsx scripts/upload-images-to-storage.ts
 *
 * This will upload:
 * - Staff photos to /staff-photos/
 * - Carousel images to /carousel/
 * - PDFs to /documents/
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import * as fs from 'fs';
import * as path from 'path';

// Initialize Firebase Admin
// Uses GOOGLE_APPLICATION_CREDENTIALS env var or Application Default Credentials
const app = initializeApp({
  storageBucket: 'hopewellumc-a9b0a.firebasestorage.app'
});
const storage = getStorage(app);
const bucket = storage.bucket();

const BASE_DIR = path.join(__dirname, '../old-site-downloads');

interface UploadResult {
  success: boolean;
  file: string;
  url?: string;
  error?: string;
}

/**
 * Upload a single file to Firebase Storage
 */
async function uploadFile(
  localPath: string,
  storagePath: string
): Promise<UploadResult> {
  try {
    const file = bucket.file(storagePath);

    await bucket.upload(localPath, {
      destination: storagePath,
      metadata: {
        cacheControl: 'public, max-age=31536000', // 1 year cache
      },
    });

    // Make the file publicly readable
    await file.makePublic();

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${storagePath}`;

    return {
      success: true,
      file: path.basename(localPath),
      url: publicUrl,
    };
  } catch (error) {
    return {
      success: false,
      file: path.basename(localPath),
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Upload all files from a directory
 */
async function uploadDirectory(
  localDir: string,
  storagePrefix: string,
  extensions: string[] = ['.jpg', '.jpeg', '.png', '.pdf']
): Promise<UploadResult[]> {
  const results: UploadResult[] = [];

  if (!fs.existsSync(localDir)) {
    console.log(`Directory not found: ${localDir}`);
    return results;
  }

  const files = fs.readdirSync(localDir);

  console.log(`\n📁 Uploading from ${path.basename(localDir)}...`);
  console.log(`   Found ${files.length} files`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    if (!extensions.includes(ext)) {
      continue; // Skip non-image/pdf files
    }

    const localPath = path.join(localDir, file);
    const storagePath = `${storagePrefix}/${file}`;

    console.log(`   Uploading ${file}...`);
    const result = await uploadFile(localPath, storagePath);
    results.push(result);

    if (result.success) {
      console.log(`   ✅ ${file}`);
    } else {
      console.log(`   ❌ ${file}: ${result.error}`);
    }
  }

  return results;
}

/**
 * Main upload function
 */
async function main() {
  console.log('🚀 Starting upload to Firebase Storage...\n');
  console.log(`📂 Base directory: ${BASE_DIR}\n`);

  const allResults: UploadResult[] = [];

  // Upload staff photos
  const staffResults = await uploadDirectory(
    path.join(BASE_DIR, 'staff-photos'),
    'staff-photos',
    ['.jpg', '.jpeg', '.png']
  );
  allResults.push(...staffResults);

  // Upload carousel images
  const carouselResults = await uploadDirectory(
    path.join(BASE_DIR, 'carousel-images'),
    'carousel',
    ['.jpg', '.jpeg', '.png']
  );
  allResults.push(...carouselResults);

  // Upload PDFs
  const pdfResults = await uploadDirectory(
    path.join(BASE_DIR, 'pdfs'),
    'documents',
    ['.pdf']
  );
  allResults.push(...pdfResults);

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 UPLOAD SUMMARY');
  console.log('='.repeat(50));

  const successful = allResults.filter(r => r.success).length;
  const failed = allResults.filter(r => !r.success).length;

  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📁 Total: ${allResults.length}`);

  if (failed > 0) {
    console.log('\n❌ Failed uploads:');
    allResults
      .filter(r => !r.success)
      .forEach(r => console.log(`   - ${r.file}: ${r.error}`));
  }

  // Save URL mapping
  const urlMapping = allResults
    .filter(r => r.success)
    .map(r => ({ file: r.file, url: r.url }));

  const mappingPath = path.join(BASE_DIR, 'firebase-storage-urls.json');
  fs.writeFileSync(mappingPath, JSON.stringify(urlMapping, null, 2));
  console.log(`\n💾 URL mapping saved to: firebase-storage-urls.json`);

  console.log('\n✨ Upload complete!');
}

// Run the script
main().catch(console.error);
