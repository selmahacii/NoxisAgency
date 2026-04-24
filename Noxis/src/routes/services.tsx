import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Services } from "@/components/sections/Services";
import { FeaturesChess } from "@/components/sections/FeaturesChess";
import { CtaFooter } from "@/components/sections/CtaFooter";
import { Reveal } from "@/components/Reveal";

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
      <div className="pt-32 pb-12 px-6 lg:px-16 max-w-7xl mx-auto text-center">
        <Reveal>
          <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            What we do
          </div>
          <h1 className="text-5xl md:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
            Services built for ambitious teams.
          </h1>
          <p className="text-white/60 font-body font-light text-base md:text-lg max-w-2xl mx-auto">
            Every engagement combines strategy, design, and engineering — so your roadmap
            never waits on a handoff.
          </p>
        </Reveal>
      </div>
      <Reveal><Services /></Reveal>
      <Reveal><FeaturesChess /></Reveal>
      <Reveal><CtaFooter /></Reveal>
    </main>
  );
}
