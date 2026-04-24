import { ArrowUpRight, Code2, Smartphone, Globe, Cpu, Layers, BarChart3, type LucideIcon } from "lucide-react";
import bananaImg from "@/assets/banana.png";
import techLayersImg from "@/assets/tech_layers.png";

const services: { icon?: LucideIcon; title: string; body: string; image?: string }[] = [
  {
    icon: Globe,
    title: "Sites Web & Plateformes Marketing",
    body: "Des sites marketing à haute conversion conçus pour la performance, le SEO et la durabilité.",
  },
  {
    icon: Layers,
    title: "Applications Web",
    body: "Plateformes SaaS full-stack, tableaux de bord et outils internes basés sur des technologies modernes.",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    body: "Expériences iOS et Android de niveau natif avec des bases de code partagées et une UX soignée.",
  },
  {
    icon: Code2,
    title: "Logiciels Sur-Mesure",
    body: "Systèmes personnalisés adaptés à vos opérations — APIs, automatisations, intégrations.",
  },
  {
    icon: BarChart3,
    title: "Tableaux de Bord de Données",
    body: "Interfaces analytiques personnalisées, intégrations BI (Tableau, Power BI) et visualisation de données en temps réel.",
  },
  {
    image: bananaImg,
    title: "Banana Labs — Special Projects",
    body: "Des initiatives expérimentales alliant design d'avant-garde et technologies émergentes pour des marques audacieuses.",
  },
];

export function Services() {
  return (
    <section className="px-6 lg:px-16 py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
          What we do
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9] max-w-3xl mx-auto">
          Une seule équipe. Chaque couche de la tech.
        </h2>
        <p className="text-foreground/60 font-body font-light text-base max-w-xl mx-auto mt-6">
          Every engagement combines strategy, design, and engineering — so your roadmap never waits on a handoff.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, body, image }) => (
          <div key={title} className="liquid-glass rounded-2xl p-7 flex flex-col gap-5 group">
            <div className="flex items-center justify-between">
              {image ? (
                <div className="w-11 h-11 rounded-full overflow-hidden border border-foreground/10">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
              ) : Icon ? (
                <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
              ) : null}
              <ArrowUpRight className="h-4 w-4 text-foreground/40 group-hover:text-foreground transition" />
            </div>
            <div>
              <h3 className="text-foreground font-body font-medium text-base mb-2">{title}</h3>
              <p className="text-foreground/60 font-body font-light text-sm leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
