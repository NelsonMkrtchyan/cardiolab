import React, { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { useOptimizedImage } from "~/hooks/useOptimizedImage";

interface ImageWithCacheProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
  cacheKey?: string;
  disableOptimization?: boolean;
}

/**
 * ImageWithCache component that implements advanced caching strategies
 * to reduce image cache writes in Next.js
 */
export default function ImageWithCache({
  src,
  alt,
  width = 800,
  height = 600,
  quality = 80,
  priority = false,
  fallbackSrc = "/images/placeholder.jpg",
  cacheKey,
  disableOptimization = false,
  className,
  style,
  ...props
}: ImageWithCacheProps) {
  // Use our custom hook for image optimization
  const { optimizedSrc, blurDataUrl, isLoaded, handleLoad, handleError } =
    useOptimizedImage({
      src: disableOptimization ? src : src,
      width: typeof width === "number" ? width : 800,
      height: typeof height === "number" ? height : 600,
      quality: typeof quality === "number" ? quality : 80,
      priority,
    });

  // State to track if image is in browser cache
  const [isInCache, setIsInCache] = useState(false);

  // Check if image is already in browser cache
  useEffect(() => {
    if (!src || typeof window === "undefined") return;

    const checkCache = async () => {
      try {
        const cache = await caches.open("next-image-cache");
        const cachedResponse = await cache.match(optimizedSrc);
        setIsInCache(!!cachedResponse);
      } catch (e) {
        // Cache API might not be available or other error
        setIsInCache(false);
      }
    };

    checkCache().catch(console.error);
  }, [optimizedSrc, src]);

  // Generate a stable key for the image to improve cache hits
  const imageKey =
    cacheKey ??
    (typeof src === "string"
      ? (src.split("/").pop()?.split("?")[0] ??
        src.replace(/[^a-zA-Z0-9]/g, ""))
      : "image");

  return (
    <Image
      src={optimizedSrc}
      alt={alt || "Image"}
      width={width}
      height={height}
      quality={quality}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      placeholder={!priority && blurDataUrl ? "blur" : "empty"}
      blurDataURL={!priority && !isLoaded ? blurDataUrl : undefined}
      onLoad={handleLoad}
      onError={handleError}
      className={className}
      style={style}
      // Use consistent sizes to improve cache hits
      sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw`}
      // Add key to help React identify the image and improve caching
      key={`img-${imageKey}`}
      {...props}
    />
  );
}
