import { ImageLoaderProps } from 'next/image';

/**
 * Custom image loader that helps reduce image cache writes
 * by implementing consistent URL parameters and caching strategies
 */
const customImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  // For remote images (from utfs.io or ufs.sh domains)
  if (src.includes('utfs.io') || src.includes('ufs.sh')) {
    // Apply consistent width parameters to improve cache hits
    // Round width to nearest standard size to improve cache reuse
    const standardWidth = getNearestStandardSize(width);
    
    // Use consistent quality parameter
    const consistentQuality = quality || 80;
    
    // Add cache buster that changes only when content actually changes
    // Extract file ID from URL to use as cache key
    const fileId = extractFileId(src);
    
    // Create URL with consistent parameters
    const url = new URL(src);
    url.searchParams.set('w', standardWidth.toString());
    url.searchParams.set('q', consistentQuality.toString());
    
    if (fileId) {
      url.searchParams.set('v', fileId);
    }
    
    return url.toString();
  }
  
  // For local images, just return the src
  return src;
};

/**
 * Get the nearest standard size to improve cache hits
 */
const getNearestStandardSize = (width: number): number => {
  // Standard sizes that match Next.js config
  const standardSizes = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920];
  
  // Find the closest standard size
  return standardSizes.reduce((prev, curr) => {
    return Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev;
  }, standardSizes[0] || 640); // Provide fallback of 640 if array is empty
};

/**
 * Extract file ID from URL to use as cache key
 */
const extractFileId = (url: string): string | null => {
  // Extract file ID from utfs.io or ufs.sh URLs
  // Example: https://x41q9wll8l.ufs.sh/f/kPqN7718CWlugMSJuoviePapmd4fjRNBXFSt1CEhgvq2b0rM
  const match = url.match(/\/f\/([a-zA-Z0-9]+)/);
  return match && match[1] ? match[1] : null;
};

/**
 * Generate a consistent blur data URL for images
 */
export const generateBlurDataURL = (width: number, height: number): string => {
  const aspectRatio = height / width;
  const svgWidth = 100;
  const svgHeight = Math.round(svgWidth * aspectRatio);
  
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${svgWidth} ${svgHeight}'%3E%3Crect width='${svgWidth}' height='${svgHeight}' fill='%23f0f0f0'/%3E%3C/svg%3E`;
};

// Export the image loader as default export for Next.js
export default customImageLoader;

// Also export as named export for direct imports
export { customImageLoader };
