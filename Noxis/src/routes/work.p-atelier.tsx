import { createFileRoute } from "@tanstack/react-router";
import PAtelierShowcase from "@/components/projects/PAtelierShowcase";

export const Route = createFileRoute("/work/p-atelier")({
  component: PAtelierShowcase,
  head: () => ({
    meta: [
      { title: "P Atelier Pilates — Premium Prototype by Noxis" },
      {
        name: "description",
        content: "A pixel-perfect prototype of a premium Pilates studio website focusing on calm luxury and minimalism.",
      },
    ],
  }),
});
