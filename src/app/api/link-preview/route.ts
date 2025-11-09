import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 }
    );
  }

  // Validate URL format
  try {
    new URL(url);
  } catch {
    return NextResponse.json(
      { error: 'Invalid URL format' },
      { status: 400 }
    );
  }

  try {
    // Fetch the URL with a timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkPreview/1.0)',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch URL' },
        { status: response.status }
      );
    }

    const html = await response.text();

    // Extract metadata from HTML
    const metadata = extractMetadata(html, url);

    return NextResponse.json(metadata);
  } catch (error) {
    console.error('Error fetching link preview:', error);
    return NextResponse.json(
      { error: 'Failed to fetch link preview' },
      { status: 500 }
    );
  }
}

function extractMetadata(html: string, url: string) {
  const metadata: {
    url: string;
    title?: string;
    description?: string;
    image?: string;
    siteName?: string;
  } = { url };

  // Extract Open Graph tags
  const ogTitle = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i);
  const ogDescription = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i);
  const ogImage = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  const ogSiteName = html.match(/<meta\s+property=["']og:site_name["']\s+content=["']([^"']+)["']/i);

  // Extract Twitter Card tags as fallback
  const twitterTitle = html.match(/<meta\s+name=["']twitter:title["']\s+content=["']([^"']+)["']/i);
  const twitterDescription = html.match(/<meta\s+name=["']twitter:description["']\s+content=["']([^"']+)["']/i);
  const twitterImage = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i);

  // Extract standard meta tags as fallback
  const metaDescription = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const titleTag = html.match(/<title>([^<]+)<\/title>/i);

  // Set metadata with priority: OG > Twitter > Standard
  metadata.title = ogTitle?.[1] || twitterTitle?.[1] || titleTag?.[1];
  metadata.description = ogDescription?.[1] || twitterDescription?.[1] || metaDescription?.[1];
  metadata.image = ogImage?.[1] || twitterImage?.[1];
  metadata.siteName = ogSiteName?.[1];

  // Handle relative image URLs
  if (metadata.image && !metadata.image.startsWith('http')) {
    try {
      const baseUrl = new URL(url);
      metadata.image = new URL(metadata.image, baseUrl.origin).toString();
    } catch {
      // If URL parsing fails, remove the image
      delete metadata.image;
    }
  }

  // Decode HTML entities
  if (metadata.title) {
    metadata.title = decodeHtmlEntities(metadata.title);
  }
  if (metadata.description) {
    metadata.description = decodeHtmlEntities(metadata.description);
  }

  return metadata;
}

function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
  };

  return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
}
