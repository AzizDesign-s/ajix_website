import Image from "next/image";
import { techIconSlugs } from "@/config/tech-icons";

export function TechStackRow({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => {
        const slug = techIconSlugs[tech];

        return (
          <div
            key={tech}
            className="border-border/50 bg-surface/50 flex items-center gap-2 rounded-full border px-4 py-2"
          >
            {slug ? (
              <Image
                src={`https://cdn.simpleicons.org/${slug}`}
                alt={tech}
                width={18}
                height={18}
                unoptimized
                className="h-4.5 w-4.5"
              />
            ) : (
              <span className="bg-accent/20 text-accent flex h-4.5 w-4.5 items-center justify-center rounded-full text-[9px] font-bold">
                {tech.slice(0, 2).toUpperCase()}
              </span>
            )}
            <span className="text-foreground/80 text-sm font-medium">
              {tech}
            </span>
          </div>
        );
      })}
    </div>
  );
}
