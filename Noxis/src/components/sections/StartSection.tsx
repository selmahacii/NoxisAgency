import { ArrowUpRight } from "lucide-react";
import methodologyImg from "@/assets/image copy 2.png";

export function StartSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/3 -left-1/4 w-[70%] h-[70%] rounded-full opacity-50 blur-3xl animate-blob-slow"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.22 240) 0%, transparent 70%)" }}
        />
        <div className="absolute top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full opacity-40 blur-3xl animate-blob-slower"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.18 220) 0%, transparent 70%)" }}
        />
        <div className="absolute -bottom-1/4 left-1/4 w-[60%] h-[60%] rounded-full opacity-40 blur-3xl animate-blob-slow"
          style={{ background: "radial-gradient(circle, oklch(0.45 0.2 250) 0%, transparent 70%)" }}
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(oklch(0.95 0.05 230) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95 0.05 230) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Top & bottom fades to blend with surrounding sections */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to top, transparent, var(--background))" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />

      <div
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-32"
        style={{ minHeight: 500 }}
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
          Notre Méthodologie
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6 max-w-3xl">
          Découvrir. Concevoir. Créer. Déployer.
        </h2>
        <p className="text-foreground/60 font-body font-light text-sm md:text-base max-w-xl mb-8">
          Un modèle de livraison en quatre étapes basé sur des itérations hebdomadaires et des démos en direct — pour voir du vrai logiciel dès la première semaine.
        </p>

        <div className="mb-12 relative max-w-4xl w-full">
          <div className="liquid-glass rounded-3xl overflow-hidden aspect-[21/9]">
            <img 
              src={methodologyImg} 
              alt="Notre Méthodologie" 
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          {/* Subtle glow effect behind image */}
          <div className="absolute inset-0 -z-10 bg-primary/5 blur-2xl rounded-full" />
        </div>
        <a
          href="#"
          className="liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          Voir notre approche <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
