import Image from "next/image";
import { GlowPanel } from "@/components/ui/work/glow-panel";
import { cn } from "@/lib/utils";

type FrameAspect = "video" | "square" | "portrait" | "landscape";

const aspectClasses: Record<FrameAspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

interface ImageFrameProps {
  src: string;
  alt: string;
  aspect?: FrameAspect;
  onClick?: () => void;
  priority?: boolean;
  className?: string;
}

export function ImageFrame({
  src,
  alt,
  aspect = "video",
  onClick,
  priority,
  className,
}: ImageFrameProps) {
  return (
    <GlowPanel
      onClick={onClick}
      className={cn(
        "bg-background/60 overflow-hidden",
        aspectClasses[aspect],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={priority}
        className="object-contain p-4"
      />
    </GlowPanel>
  );
}
