import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  fallbackSrc?: string;
  lowQualityPlaceholder?: boolean;
  lazyBoundary?: string;
}

/**
 * OptimizedImage component that extends Next.js Image with additional optimizations
 * to reduce image cache writes and improve performance
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fallbackSrc = '/images/placeholder.jpg',
  lowQualityPlaceholder = true,
  lazyBoundary = '200px',
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoaded(false);
  }, [src]);

  // Generate a consistent quality parameter based on the image URL
  // This helps with cache reuse for the same image
  const getQualityParam = (url: string) => {
    if (typeof url !== 'string') return 75; // Default quality
    
    // Generate a consistent quality between 75-85 based on URL
    // This helps with cache hits for the same image
    const hash = url.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    return 75 + Math.abs(hash % 10); // Quality between 75-85
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      quality={getQualityParam(typeof src === 'string' ? src : '')}
      onLoadingComplete={() => setIsLoaded(true)}
      onError={() => setImgSrc(fallbackSrc)}
      placeholder={lowQualityPlaceholder && !priority ? 'blur' : 'empty'}
      blurDataURL={
        lowQualityPlaceholder && !priority && !isLoaded
          ? 'data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZjBmMGYwIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2U2ZTZlNiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmMGYwZjAiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiNmMGYwZjAiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=='
          : undefined
      }
      lazyBoundary={lazyBoundary}
      {...props}
    />
  );
}
