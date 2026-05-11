import { motion } from "motion/react";
import { ArrowUpRight, Play, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BlurText } from "@/components/BlurText";
import heroVideo from "@/assets/IMG_5290.MP4";
import { useI18n } from "@/lib/i18n";

const partners = [
  { name: "Fisc Algérie", industry: "Fintech" },
  { name: "Medicare.dz", industry: "Health" },
  { name: "Noxis Logistics", industry: "Distribution" }
];

export function Hero() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center bg-background">
      {/* Atmospheric Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={heroVideo}
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[1.1] contrast-[0.9] opacity-25 scale-105"
        />
        {/* Subtle radial gradient to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
        {/* Bottom fade for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pt-20 pb-12">
        <div className="flex flex-col items-center text-center">
          {/* Studio Badge with Pulsing Aura */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mb-12"
          >
            <div className="absolute inset-[-4px] bg-primary/10 blur-xl rounded-full group-hover:bg-primary/20 transition-all duration-700" />
            <div className="relative rounded-full px-5 py-1.5 border border-foreground/10 bg-background/40 backdrop-blur-xl flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-primary relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-foreground/80">
                {t("hero.badge")}
              </span>
            </div>
          </motion.div>

          {/* Hero Headline - Using BlurText for Cinematic Entrance */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-foreground leading-[0.9] max-w-5xl tracking-tight mb-10">
            <BlurText text={t("hero.title")} delay={80} />
          </h1>

          {/* Descriptive Subtitle / Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-foreground/60 font-body font-light max-w-3xl mb-14 leading-relaxed text-balance"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-8 mb-24"
          >
            <a
              href="/process"
              className="group relative bg-foreground text-background rounded-full px-12 py-5 inline-flex items-center gap-3 text-sm font-bold transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-[0.98]"
            >
              <span>{t("hero.cta1")}</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            
            <a
              href="#"
              className="group flex items-center gap-4 text-sm font-semibold text-foreground/70 hover:text-foreground transition-all"
            >
              <div className="w-14 h-14 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-foreground/30 group-hover:bg-foreground/5 transition-all">
                <Play className="h-5 w-5 fill-foreground/70 group-hover:fill-foreground ml-1" />
              </div>
              <span className="tracking-widest uppercase text-[10px] font-bold">{t("hero.cta2")}</span>
            </a>
          </motion.div>

          {/* Social Proof / Partner Ecosystem */}
          <motion.div 
             initial={{ opacity: 0, filter: "blur(10px)" }}
             animate={{ opacity: 1, filter: "blur(0px)" }}
             transition={{ duration: 1.5, delay: 2 }}
             className="w-full pt-12 border-t border-foreground/5"
          >
            <div className="flex flex-col items-center gap-10">
              <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-foreground/5 border border-foreground/5">
                <Shield className="h-3 w-3 text-primary" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40">
                  {t("hero.partners")}
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                {partners.map((p, i) => (
                  <motion.div 
                    key={p.name} 
                    whileHover={{ y: -5, opacity: 1 }}
                    className="flex flex-col items-center gap-1.5 opacity-30 transition-all duration-500 hover:opacity-100"
                  >
                    <span className="text-2xl md:text-3xl font-heading italic text-foreground tracking-tight">
                      {p.name}
                    </span>
                    <div className="h-[1px] w-8 bg-primary/40" />
                    <span className="text-[8px] uppercase tracking-[0.2em] font-black text-foreground/40">
                      {p.industry}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-[0.2em] text-foreground/20 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/20 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
