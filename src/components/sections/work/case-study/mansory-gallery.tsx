"use client";

import { useState } from "react";
import { ImageFrame } from "@/components/sections/work/case-study/image-frame";
import { Lightbox } from "@/components/sections/work/case-study/lightbox";
import type { GalleryImage } from "@/types/project";

export function MasonryGallery({
  images,
  alt,
}: {
  images: GalleryImage[];
  alt: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {images.map((image, index) => (
          <ImageFrame
            key={index}
            src={image.src}
            alt={`${alt} ${index + 1}`}
            aspect={image.orientation}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images.map((img) => img.src)}
          alt={alt}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </>
  );
}
