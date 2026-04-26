import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BlurText } from "@/components/BlurText";
import heroVideo from "@/assets/IMG_5290.MP4";
import nanoBananaImg from "@/assets/nano_banana.png";
import { useI18n } from "@/lib/i18n";

const partners = ["Fisc Algérie", "Medicare.dz", "Noxis Logistics"];

export function Hero() {
  const { t, lang } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, handled by autoPlay/muted props
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90svh] lg:min-h-[1000px]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={heroVideo}
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale brightness-[1.15] contrast-[0.85] opacity-40"
      />
      <div className="absolute inset-0 bg-background/20 z-0" />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,220,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(180,220,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{ height: 300, background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center px-6 h-full"
        style={{ paddingTop: 150 }}
      >
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 mb-8"
        >
          <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold font-body">
            v2026
          </span>
          <span className="text-xs text-foreground/90 font-body pr-3">
            {t("hero.badge")}
          </span>
        </motion.div>


        <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-heading italic text-foreground leading-[0.85] max-w-5xl tracking-[-3px] mb-12">
          <BlurText text={t("hero.title")} delay={100} />
        </h1>

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base md:text-lg text-foreground/70 font-body font-light leading-tight max-w-2xl mb-12"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-5"
        >
          <a
            href="/process"
            className="liquid-glass-strong rounded-full px-7 py-3 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-all hover:scale-105 active:scale-95"
          >
            {t("hero.cta1")} <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80"
          >
            <Play className="h-4 w-4 fill-foreground" /> {t("hero.cta2")}
          </a>
        </motion.div>

        <div className="mt-auto pb-16 pt-16 flex flex-col items-center gap-8 w-full">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground/60 font-body">
            {t("hero.partners")}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            {partners.map((p) => (
              <span
                key={p}
                className="text-xl md:text-2xl font-heading italic text-foreground/30 hover:text-foreground/60 transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
