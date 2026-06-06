import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Airbrush Istanbul",
    short_name: "Airbrush Istanbul",
    description: "Premium custom paint and airbrush portfolio studio in Istanbul.",
    start_url: "/tr",
    display: "standalone",
    background_color: "#0b0b0b",
    theme_color: "#c1121f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
