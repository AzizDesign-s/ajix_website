import Image from "next/image";

export function ImageGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, index) => (
        <div
          key={index}
          className="group border-border/40 bg-surface/30 relative aspect-4/3 overflow-hidden rounded-xl border"
        >
          <Image
            src={src}
            alt={`${alt} ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
