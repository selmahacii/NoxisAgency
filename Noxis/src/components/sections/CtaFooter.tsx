import cinematicVideo from "@/assets/z.mp4";
import { Link } from "@tanstack/react-router";

export function CtaFooter() {
  return (
    <section className="relative overflow-hidden bg-background">
      <video
        src={cinematicVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-[1.1] contrast-[0.9] opacity-25 mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-background/20 z-0" />
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to top, transparent, var(--background))" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />
      <div className="relative z-20 px-6 lg:px-16 pt-40 pb-12 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground leading-[0.85] mb-8 max-w-3xl">
          Construisons ce qui vient ensuite.
        </h2>
        <p className="text-foreground/70 font-body font-light text-base max-w-xl mb-10">
          Parlez-nous de votre produit, plateforme ou idée. Nous reviendrons vers vous sous 24h avec une vision claire — périmètre, équipe et délais.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-32">
          <a
            href="tel:+213780125700"
            className="liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            Réserver un appel découverte
          </a>
          <Link
            to="/work"
            className="bg-primary text-primary-foreground rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium hover:bg-primary/90 transition"
          >
            Voir les réalisations
          </Link>
        </div>

        <footer className="w-full pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-xs font-body">© 2026 Noxis. Ingénierie depuis 2014.</p>
          <div className="flex items-center gap-6">
            {["Services", "Réalisations", "Carrières", "Contact"].map((l) => (
              <a key={l} href="#" className="text-foreground/40 text-xs font-body hover:text-foreground transition">
                {l}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
