import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { StartSection } from "@/components/sections/StartSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { CtaFooter } from "@/components/sections/CtaFooter";
import { Reveal } from "@/components/Reveal";
import processHeroImg from "@/assets/image copy 6.png";

const steps = [
  {
    n: "01",
    title: "Découverte",
    body: "Workshops, audits et interviews. Nous cartographions le problème avant de toucher au moindre pixel.",
  },
  {
    n: "02",
    title: "Conception",
    body: "Wireframes, prototypes et systèmes de design. Nous testons nos idées avec de vrais utilisateurs.",
  },
  {
    n: "03",
    title: "Ingénierie",
    body: "Incréments hebdomadaires, démos en direct, code de niveau production. Vous voyez du vrai logiciel dès la première semaine.",
  },
  {
    n: "04",
    title: "Évolutivité",
    body: "Lancement, surveillance, itération. Nous restons votre partenaire pour mesurer, optimiser et faire évoluer.",
  },
];

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Process — Studio Tech Agency" },
      {
        name: "description",
        content:
          "How we deliver: a four-stage process — Discover, Design, Engineer, Scale — built around weekly increments.",
      },
      { property: "og:title", content: "Process — Studio Tech Agency" },
      {
        property: "og:description",
        content: "Discover. Design. Engineer. Scale. Weekly increments and live demos.",
      },
    ],
  }),
});

function ProcessPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-32 pb-12 px-6 lg:px-16 max-w-7xl mx-auto text-center">
        <Reveal>
          <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
            Notre Méthode
          </div>
          <h1 className="text-5xl md:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6">
            Un processus conçu pour livrer.
          </h1>
          
          <div className="max-w-5xl mx-auto liquid-glass rounded-3xl overflow-hidden aspect-[21/9] mt-12 mb-8 relative">
            <img 
              src={processHeroImg} 
              alt="Processus" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </div>
      <Reveal><StartSection /></Reveal>
      <section className="px-6 lg:px-16 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="liquid-glass rounded-2xl p-8 h-full">
              <div className="text-5xl font-heading italic text-foreground/20 mb-4">{s.n}</div>
              <h3 className="text-2xl font-heading italic text-foreground mb-3">{s.title}</h3>
              <p className="text-foreground/60 font-body font-light text-sm leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <Reveal><FeaturesGrid /></Reveal>
      <Reveal><CtaFooter /></Reveal>
    </main>
  );
}
