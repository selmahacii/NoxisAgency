import { ArrowUpRight } from "lucide-react";
import engineeringImg from "@/assets/image copy 3.png";
import designSystemImg from "@/assets/image copy 4.png";

const rows = [
  {
    reverse: false,
    badge: "Ingénierie Produit",
    title: "Du code de niveau production dès le premier jour.",
    body: "TypeScript d'abord, APIs typées, tests automatisés et CI/CD intégrés. Nous ne livrons pas de prototypes jetables — chaque ligne est conçue pour évoluer avec votre business.",
    cta: "Explorer l'ingénierie",
    img: engineeringImg,
  },
  {
    reverse: true,
    badge: "Systèmes de Design",
    title: "Des interfaces que les clients veulent utiliser.",
    body: "Systèmes de design, motion et interactions affinés par la recherche utilisateur. Beau, accessible et cohérent sur chaque écran et chaque surface.",
    cta: "Voir nos designs",
    img: designSystemImg,
  },
];

export function FeaturesChess() {
  return (
    <section className="px-6 lg:px-16 py-32 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
          Compétences
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
          L'art rencontre l'ingénierie.
        </h2>
      </div>

      <div className="space-y-24">
        {rows.map((r, i) => (
          <div
            key={i}
            className={`flex flex-col ${r.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
          >
            <div className="flex-1 space-y-6">
              <div className="liquid-glass inline-block rounded-full px-3 py-1 text-[11px] font-medium text-foreground/80 font-body">
                {r.badge}
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-foreground tracking-tight leading-[0.95]">
                {r.title}
              </h3>
              <p className="text-foreground/60 font-body font-light text-base max-w-md">
                {r.body}
              </p>
              <a
                href="#"
                className="liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                {r.cta} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
