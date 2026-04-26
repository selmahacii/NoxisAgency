import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StartSection } from "@/components/sections/StartSection";
import { Services } from "@/components/sections/Services";
import { FeaturesChess } from "@/components/sections/FeaturesChess";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaFooter } from "@/components/sections/CtaFooter";
import { Portfolio } from "@/components/sections/Portfolio";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Noxis — Tech Agency Building Software, Apps & Platforms" },
      {
        name: "description",
        content:
          "Noxis is a senior tech agency designing and engineering websites, web apps, mobile apps, and custom software. Strategy, design, and engineering under one roof.",
      },
      { property: "og:title", content: "Noxis — Tech Agency" },
      {
        property: "og:description",
        content:
          "Websites, web apps, mobile, and bespoke platforms. Senior teams shipping production-grade software.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Reveal><Services /></Reveal>
      <Portfolio />
      <Reveal><StartSection /></Reveal>
      <Reveal><FeaturesChess /></Reveal>
      <Reveal><FeaturesGrid /></Reveal>
      <Reveal><Stats /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><CtaFooter /></Reveal>
    </main>
  );
}
