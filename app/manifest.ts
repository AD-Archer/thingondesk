import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "thingondesk",
    short_name: "thingondesk",
    description:
      "Build a desk thing that shows time, progress, or growth and win desk prizes.",
    start_url: "/",
    display: "standalone",
    background_color: "#ded6c4",
    theme_color: "#251605",
    icons: [
      {
        src: "/branding/icon-rounded.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/branding/icon-rounded.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/branding/icon-rounded.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
