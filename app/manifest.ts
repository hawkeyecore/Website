import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hawkeye Core",
    short_name: "Hawkeye",
    description: "Innovative technology solutions for businesses",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0055b3",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/hawkeye-core-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/hawkeye-core-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
