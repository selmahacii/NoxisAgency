import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Portfolio } from "@/components/sections/Portfolio";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaFooter } from "@/components/sections/CtaFooter";
import { Reveal } from "@/components/Reveal";
import workHeroImg from "@/assets/image copy 5.png";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Work — Studio Tech Agency" },
      {
        name: "description",
        content:
          "Selected work: fintech dashboards, luxury commerce, mobile apps, and enterprise SaaS shipped by Studio.",
      },
      { property: "og:title", content: "Work — Studio Tech Agency" },
      {
        property: "og:description",
        content: "Selected projects across fintech, commerce, mobile, and enterprise SaaS.",
      },
    ],
  }),
});

function WorkPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-32 pb-4 px-6 lg:px-16 max-w-7xl mx-auto text-center">
        <Reveal>
          <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
            Études de cas
          </div>
          <h1 className="text-5xl md:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6">
            Des réalisations dont nous sommes fiers.
          </h1>
          <p className="text-foreground/60 font-body font-light text-base md:text-lg max-w-2xl mx-auto mb-16">
            Cliquez sur un projet pour découvrir le brief, la stack et les résultats.
          </p>

          <div className="max-w-5xl mx-auto liquid-glass rounded-3xl overflow-hidden aspect-[21/9] mb-20 relative">
            <img 
              src={workHeroImg} 
              alt="Réalisations" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </div>
      <Portfolio showAll={true} />
      <Reveal><Stats /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><CtaFooter /></Reveal>
    </main>
  );
}
