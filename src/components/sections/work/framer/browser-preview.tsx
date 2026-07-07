import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GlowPanel } from "@/components/ui/work/glow-panel";
import { Button } from "@/components/ui/button";

export function BrowserPreview({
  image,
  liveUrl,
  title,
}: {
  image: string;
  liveUrl: string;
  title: string;
}) {
  const displayUrl = liveUrl.replace(/^https?:\/\//, "");

  return (
    <div>
      <GlowPanel className="bg-background/60 overflow-hidden">
        {/* Browser chrome bar */}
        <div className="border-border/40 bg-surface/60 flex items-center gap-3 border-b px-4 py-3">
          <div className="flex gap-1.5">
            <span className="bg-danger/70 h-2.5 w-2.5 rounded-full" />
            <span className="bg-warning/70 h-2.5 w-2.5 rounded-full" />
            <span className="bg-success/70 h-2.5 w-2.5 rounded-full" />
          </div>
          <div className="bg-background/60 text-muted-foreground flex-1 truncate rounded-full px-3 py-1 text-center text-xs">
            {displayUrl}
          </div>
        </div>

        {/* Site preview */}
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={`${title} live preview`}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
      </GlowPanel>

      <div className="mt-6 flex justify-center">
        <Button asChild variant="gradient" size="lg">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Visit Live Site
            <ExternalLink size={16} className="ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
}
