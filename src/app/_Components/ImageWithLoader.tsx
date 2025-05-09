"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  onLoad?: () => void;
}

export default function ImageWithLoader({
  src,
  alt = "",
  width = undefined,
  height = undefined,
  fill = false,
  className = "",
  priority = undefined,
  onLoad,
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div
          className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center bg-light start-0 top-0"
          style={{ zIndex: 10 }}
        >
          <div className="spinner-border text-secondary" role="status" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={!width || fill}
        priority={priority}
        onLoad={() => {
          setIsLoading(false);
          if (onLoad) onLoad();
        }}
        className={`transition-opacity ${isLoading ? "opacity-0" : "opacity-100"} ${className} object-fit-contain`}
        style={{ transition: "opacity 0.5s" }}
      />
    </>
  );
}
