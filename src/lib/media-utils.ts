import imageCompression from 'browser-image-compression';

/**
 * Compress an image file before upload
 * @param file - The image file to compress
 * @returns Compressed image file
 */
export async function compressImage(file: File): Promise<File> {
  const options = {
    maxSizeMB: 1, // Maximum file size in MB
    maxWidthOrHeight: 1920, // Maximum width or height
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    console.log('Original file size:', file.size / 1024 / 1024, 'MB');
    console.log('Compressed file size:', compressedFile.size / 1024 / 1024, 'MB');
    return compressedFile;
  } catch (error) {
    console.error('Error compressing image:', error);
    return file; // Return original file if compression fails
  }
}

/**
 * Get video duration
 * @param file - The video file
 * @returns Promise with duration in seconds
 */
export function getVideoDuration(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'metadata';

    video.onloadedmetadata = () => {
      window.URL.revokeObjectURL(video.src);
      resolve(video.duration);
    };

    video.onerror = () => {
      reject(new Error('Failed to load video metadata'));
    };

    video.src = URL.createObjectURL(file);
  });
}

/**
 * Validate video file
 * @param file - The video file to validate
 * @param maxDuration - Maximum duration in seconds (default: 15)
 * @returns Object with validation result and error message
 */
export async function validateVideo(
  file: File,
  maxDuration: number = 15
): Promise<{ valid: boolean; error?: string; duration?: number }> {
  try {
    const duration = await getVideoDuration(file);

    if (duration > maxDuration) {
      return {
        valid: false,
        error: `Video is too long. Maximum duration is ${maxDuration} seconds.`,
        duration,
      };
    }

    return { valid: true, duration };
  } catch (error) {
    return {
      valid: false,
      error: 'Failed to validate video file.',
    };
  }
}

/**
 * Read file as data URL
 * @param file - The file to read
 * @returns Promise with data URL
 */
export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
