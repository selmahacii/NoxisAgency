import { ArrowUpRight } from "lucide-react";
import methodologyImg from "@/assets/image copy 2.png";

export function StartSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Clean background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(oklch(0.95 0.05 230) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95 0.05 230) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Removed fades for absolute clarity */}

      <div
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-32"
        style={{ minHeight: 500 }}
      >
        <div className="rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6 border border-foreground/10 bg-foreground/5">
          Notre Méthodologie
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6 max-w-3xl">
          Découvrir. Concevoir. Créer. Déployer.
        </h2>
        <p className="text-foreground/60 font-body font-light text-sm md:text-base max-w-xl mb-8">
          Un modèle de livraison en quatre étapes basé sur des itérations hebdomadaires et des démos en direct — pour voir du vrai logiciel dès la première semaine.
        </p>

        <div className="mb-12 relative max-w-4xl w-full">
          <div className="rounded-3xl overflow-hidden aspect-[21/9] border border-foreground/5 shadow-lg">
            <img 
              src={methodologyImg} 
              alt="Notre Méthodologie" 
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          {/* Glow removed for full visibility */}
        </div>
        <a
          href="#"
          className="bg-primary text-primary-foreground rounded-full px-8 py-4 inline-flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform shadow-xl"
        >
          Voir notre approche <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
