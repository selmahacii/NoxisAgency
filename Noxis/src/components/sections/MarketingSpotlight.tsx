import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";

// Assets
import pAtelierVideo from "@/assets/pAtelierpilates/Screen Video (35).mp4";
import pAtelierImg from "@/assets/pAtelierpilates/image.png";
import pAtelierG1 from "@/assets/pAtelierpilates/image copy.png";
import pAtelierG2 from "@/assets/pAtelierpilates/image copy 2.png";
import pAtelierG3 from "@/assets/pAtelierpilates/image copy 3.png";

export function MarketingSpotlight() {
  const [step, setStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#1A1A1A] overflow-hidden flex items-center justify-center font-heading italic">
      {/* Background Cinematic Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={pAtelierVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/80" />
      </div>

      {/* Floating Abstract Elements */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] border border-white/5 rounded-full z-0"
      />
      
      {/* Cinematic Typography Sequence */}
      <div className="relative z-10 text-center px-6">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, scale: 0.9, letterSpacing: "1em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.2em" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <h2 className="text-white text-5xl md:text-8xl uppercase tracking-widest font-light opacity-80">
                 Atelier
              </h2>
              <p className="text-[#C2A98A] text-sm uppercase tracking-[0.5em] font-body font-medium">
                The Science of Silence
              </p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="space-y-8"
            >
              <h2 className="text-white text-4xl md:text-7xl font-heading leading-tight max-w-4xl">
                Precision in <span className="text-[#C2A98A]">Every Breath.</span>
              </h2>
              <div className="flex justify-center gap-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 100 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-[1px] bg-white/20 mt-4" 
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.5 }}
              className="space-y-6"
            >
              <span className="text-[#C2A98A] text-xs uppercase tracking-[0.6em]">Premium Equipment</span>
              <h2 className="text-white text-5xl md:text-9xl font-heading italic">
                Artisanal <br /> Movement
              </h2>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="space-y-12"
            >
              <div className="flex flex-col items-center gap-8">
                <div className="w-16 h-16 rounded-full border border-[#C2A98A] flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-2 h-2 bg-[#C2A98A] rounded-full" 
                  />
                </div>
                <h2 className="text-white text-3xl md:text-5xl uppercase tracking-[0.3em] font-light">
                  A Noxis Production
                </h2>
                <div className="h-20 w-[1px] bg-white/20" />
                <p className="text-[#C2A98A] text-[10px] uppercase tracking-widest opacity-60 max-w-xs leading-relaxed">
                  Crafting premium digital experiences <br /> for the wellness industry.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/10 overflow-hidden">
        <motion.div 
          key={step}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="w-full h-full bg-[#C2A98A]"
        />
      </div>

      {/* Audio Indicator (Visual Only) */}
      <div className="absolute bottom-12 right-12 flex gap-1 items-end h-4">
        {[0.4, 0.8, 0.5, 0.9, 0.3, 0.7].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: ["20%", "100%", "20%"] }}
            transition={{ duration: 1.5 + i * 0.2, repeat: Infinity }}
            className="w-[2px] bg-white/30"
          />
        ))}
      </div>
    </div>
  );
}
