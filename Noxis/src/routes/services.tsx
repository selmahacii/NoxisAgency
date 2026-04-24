import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Services } from "@/components/sections/Services";
import { FeaturesChess } from "@/components/sections/FeaturesChess";
import { CtaFooter } from "@/components/sections/CtaFooter";
import { Reveal } from "@/components/Reveal";
import techLayersImg from "@/assets/tech_layers.png";
import { motion } from "motion/react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Studio Tech Agency" },
      {
        name: "description",
        content:
          "Websites, web apps, mobile apps, custom software, AI, and cloud — full-stack delivery from a senior team.",
      },
      { property: "og:title", content: "Services — Studio Tech Agency" },
      {
        property: "og:description",
        content: "Full-stack delivery: websites, web apps, mobile, custom software, AI, cloud.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-32 pb-24 px-6 lg:px-16 max-w-7xl mx-auto flex flex-col items-center text-center">
        <Reveal>
          <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
            What we do
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-8 max-w-4xl">
            Une seule équipe. Chaque couche de la tech.
          </h1>
          <p className="text-foreground/60 font-body font-light text-base md:text-lg max-w-2xl mx-auto mb-16">
            Every engagement combines strategy, design, and engineering — so your roadmap
            never waits on a handoff.
          </p>
          
          <div className="relative w-full max-w-3xl aspect-[16/9] mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full rounded-[40px] overflow-hidden liquid-glass border border-foreground/5 shadow-2xl"
            >
              <img src={techLayersImg} alt="Tech Layers" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full -z-10" />
          </div>
        </Reveal>
      </div>
      <Reveal><Services /></Reveal>
      <Reveal><FeaturesChess /></Reveal>
      <Reveal><CtaFooter /></Reveal>
    </main>
  );
}
