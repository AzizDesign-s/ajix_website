import { ImageFrame } from "@/components/sections/work/case-study/image-frame";

export function LogoShowcase({
  logoImage,
  logoOnDarkImage,
}: {
  logoImage: string;
  logoOnDarkImage?: string;
}) {
  if (!logoOnDarkImage) {
    return (
      <div className="mx-auto max-w-md">
        <ImageFrame
          src={logoImage}
          alt="Logo"
          aspect="landscape"
          className="bg-background/40"
        />
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <ImageFrame
        src={logoImage}
        alt="Logo on light background"
        aspect="landscape"
        className="bg-white"
      />
      <ImageFrame
        src={logoOnDarkImage}
        alt="Logo on dark background"
        aspect="landscape"
        className="bg-neutral-950"
      />
    </div>
  );
}
