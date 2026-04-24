import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BlurText } from "@/components/BlurText";
import heroVideo from "@/assets/IMG_5290.MP4";
import nanoBananaImg from "@/assets/nano_banana.png";
import { useI18n } from "@/lib/i18n";

const partners = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

export function Hero() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let direction = 1; // 1 for forward, -1 for backward
    let rafId: number;
    let lastTime = performance.now();

    const update = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (direction === 1) {
        // Forward: Let the video play naturally
        // Use a small offset from duration to ensure smooth transition
        if (video.duration && video.currentTime >= video.duration - 0.1) {
          direction = -1;
          video.pause();
        }
      } else {
        // Backward: Manually scrub
        video.currentTime = Math.max(0, video.currentTime - delta);
        if (video.currentTime <= 0.05) {
          direction = 1;
          video.play();
        }
      }

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: 1000 }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        src={heroVideo}
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale brightness-[1.15] contrast-[0.85] opacity-40"
      />
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] z-0" />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,220,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(180,220,255,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
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

        <div className="relative mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden liquid-glass border border-white/10"
          >
            <img src={nanoBananaImg} alt="Nano Banana" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full -z-10 animate-pulse" />
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-3xl tracking-[-4px] mb-8">
          <BlurText text={t("hero.title")} delay={100} />
        </h1>

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm md:text-base text-foreground/70 font-body font-light leading-tight max-w-md mb-8"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-5"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-planner"))}
            className="liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            {t("hero.cta1")} <ArrowUpRight className="h-4 w-4" />
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80"
          >
            <Play className="h-4 w-4 fill-foreground" /> {t("hero.cta2")}
          </a>
        </motion.div>

        <div className="mt-auto pb-8 pt-16 flex flex-col items-center gap-6 w-full">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground/60 font-body">
            {t("hero.partners")}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {partners.map((p) => (
              <span
                key={p}
                className="text-2xl md:text-3xl font-heading italic text-foreground/40"
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
