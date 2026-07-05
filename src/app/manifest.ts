import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AJIX — Enterprise Product Designer",
    short_name: "AJIX",
    description: "Enterprise Product Designer portfolio and case studies.",
    start_url: "/",
    display: "standalone",
    background_color: "#01040E",
    theme_color: "#01040E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
