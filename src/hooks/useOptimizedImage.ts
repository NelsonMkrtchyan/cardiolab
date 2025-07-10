import { useState, useEffect } from 'react';
import { generateBlurDataURL } from '~/utils/imageLoader';

interface UseOptimizedImageProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
}

/**
 * Custom hook for optimizing image loading and reducing cache writes
 */
export function useOptimizedImage({
  src,
  width = 800,
  height = 600,
  quality = 80,
  priority = false,
}: UseOptimizedImageProps) {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [blurDataUrl, setBlurDataUrl] = useState<string | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Skip optimization for data URLs, SVGs, and local images in public folder
    if (
      src.startsWith('data:') ||
      src.endsWith('.svg') ||
      src.startsWith('/') ||
      !src.includes('://')
    ) {
      setOptimizedSrc(src);
      return;
    }

    // For remote images, apply consistent parameters to improve cache hits
    try {
      // Create a URL object to manipulate parameters
      const url = new URL(src);
      
      // Only add width parameter if it's not already present
      if (!url.searchParams.has('w')) {
        url.searchParams.set('w', width.toString());
      }
      
      // Only add quality parameter if it's not already present
      if (!url.searchParams.has('q')) {
        url.searchParams.set('q', quality.toString());
      }
      
      // Add a cache version parameter that doesn't change frequently
      // This prevents unnecessary cache invalidation
      if (!url.searchParams.has('v')) {
        // Extract a stable identifier from the URL to use as version
        const pathParts = url.pathname.split('/');
        const lastPart = pathParts[pathParts.length - 1] || '';
        const fileIdentifier = lastPart.split('.')[0];
        if (fileIdentifier) {
          url.searchParams.set('v', fileIdentifier);
        }
      }
      
      setOptimizedSrc(url.toString());
    } catch (e) {
      // If URL parsing fails, fall back to original source
      setOptimizedSrc(src);
    }

    // Generate blur data URL for non-priority images
    if (!priority) {
      setBlurDataUrl(generateBlurDataURL(width, height));
    }
  }, [src, width, height, quality, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fall back to placeholder on error
    setOptimizedSrc('/images/placeholder.jpg');
  };

  return {
    optimizedSrc,
    blurDataUrl,
    isLoaded,
    handleLoad,
    handleError,
    imageProps: {
      src: optimizedSrc,
      width,
      height,
      quality,
      priority,
      placeholder: !priority && blurDataUrl ? 'blur' : 'empty',
      blurDataURL: !priority && !isLoaded ? blurDataUrl : undefined,
      onLoad: handleLoad,
      onError: handleError,
    },
  };
}
