import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "InterLex Global Hub",
    short_name: "InterLex",
    description: "Multilingual global hub routing legal and business mandates into Kazakhstan and Georgia.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ea",
    theme_color: "#08152e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
