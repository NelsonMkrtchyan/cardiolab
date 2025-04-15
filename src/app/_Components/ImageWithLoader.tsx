"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function ImageWithLoader({
  src,
  alt,
  width,
  height,
  className = "",
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
        fill={!width}
        onLoad={() => setIsLoading(false)}
        className={`object-fit-cover transition-opacity ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
        style={{ transition: "opacity 0.5s" }}
      />
    </>
  );
}
