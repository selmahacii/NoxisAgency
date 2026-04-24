const testimonials = [
  {
    q: "Ils ont reconstruit notre plateforme en trois mois. La vitesse a augmenté de 70%, et notre équipe technique a enfin un code qu'elle adore maintenir.",
    n: "Sarah Chen",
    r: "CTO, Luminary",
  },
  {
    q: "De la conception au lancement, ils ont agi comme une équipe interne. L'application mobile qu'ils ont livrée génère désormais 60% de nos revenus.",
    n: "Marcus Webb",
    r: "VP Product, Arcline",
  },
  {
    q: "Engagés au départ pour un site, ils gèrent désormais tout : notre design system, nos outils internes et toute notre stratégie IA.",
    n: "Elena Voss",
    r: "Fondatrice & CEO, Helix",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 lg:px-16 py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
          Témoignages
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
          Leur succès est notre priorité.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-8 flex flex-col gap-6">
            <p className="text-foreground/80 font-body font-light text-sm italic leading-relaxed">
              "{t.q}"
            </p>
            <div className="mt-auto">
              <div className="text-foreground font-body font-medium text-sm">{t.n}</div>
              <div className="text-foreground/50 font-body font-light text-xs">{t.r}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
