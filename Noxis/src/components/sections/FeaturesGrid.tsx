import { Zap, Users, BarChart3, Shield, type LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Zap,
    title: "Équipes 100% Senior",
    body: "Chaque ingénieur a plus de 8 ans d'expérience. Pas de juniors, pas d'apprentissage à vos frais.",
  },
  {
    icon: Users,
    title: "Squads Intégrées",
    body: "Des pods pluridisciplinaires (design, produit, ingénierie) qui s'intègrent parfaitement à votre équipe.",
  },
  {
    icon: BarChart3,
    title: "Axés sur les résultats",
    body: "Nous mesurons le succès par les fonctionnalités livrées et les revenus générés — pas par les heures.",
  },
  {
    icon: Shield,
    title: "Prêt pour l'entreprise",
    body: "Conformité RGPD et architecture sécurisée. La sécurité est intégrée dès la première ligne de code.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="px-6 lg:px-16 py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
          Pourquoi Noxis ?
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
          Un partenaire, pas un prestataire.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="liquid-glass rounded-2xl p-6">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-5">
              <Icon className="h-4 w-4 text-foreground" />
            </div>
            <h3 className="text-foreground font-body font-medium text-base mb-2">{title}</h3>
            <p className="text-foreground/60 font-body font-light text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
