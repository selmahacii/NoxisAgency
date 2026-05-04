import { createFileRoute } from "@tanstack/react-router";
import { MarketingSpotlight } from "@/components/sections/MarketingSpotlight";

export const Route = createFileRoute("/marketing/p-atelier")({
  component: MarketingSpotlight,
  head: () => ({
    meta: [
      { title: "Marketing | P Atelier Pilates — A Noxis Production" },
      {
        name: "description",
        content: "A cinematic marketing showcase for the P Atelier Pilates project.",
      },
    ],
  }),
});
