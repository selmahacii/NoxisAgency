import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { p as pAtelierVideo } from "./Screen Video (35)-CUp0gEmd.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function MarketingSpotlight() {
  const [step, setStep] = reactExports.useState(0);
  const videoRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-screen w-full bg-[#1A1A1A] overflow-hidden flex items-center justify-center font-heading italic", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          ref: videoRef,
          src: pAtelierVideo,
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          className: "w-full h-full object-cover opacity-40 grayscale"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/80" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          rotate: 360,
          scale: [1, 1.1, 1]
        },
        transition: { duration: 20, repeat: Infinity, ease: "linear" },
        className: "absolute w-[800px] h-[800px] border border-white/5 rounded-full z-0"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 text-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9, letterSpacing: "1em" },
          animate: { opacity: 1, scale: 1, letterSpacing: "0.2em" },
          exit: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
          transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white text-5xl md:text-8xl uppercase tracking-widest font-light opacity-80", children: "Atelier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#C2A98A] text-sm uppercase tracking-[0.5em] font-body font-medium", children: "The Science of Silence" })
          ]
        },
        "step0"
      ),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 },
          transition: { duration: 1.5, ease: "easeInOut" },
          className: "space-y-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-white text-4xl md:text-7xl font-heading leading-tight max-w-4xl", children: [
              "Precision in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#C2A98A]", children: "Every Breath." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                animate: { width: 100 },
                transition: { delay: 1, duration: 1 },
                className: "h-[1px] bg-white/20 mt-4"
              }
            ) })
          ]
        },
        "step1"
      ),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, filter: "blur(20px)" },
          animate: { opacity: 1, filter: "blur(0px)" },
          exit: { opacity: 0, scale: 0.8 },
          transition: { duration: 1.5 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#C2A98A] text-xs uppercase tracking-[0.6em]", children: "Premium Equipment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-white text-5xl md:text-9xl font-heading italic", children: [
              "Artisanal ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " Movement"
            ] })
          ]
        },
        "step2"
      ),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 2 },
          className: "space-y-12",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full border border-[#C2A98A] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] },
                transition: { duration: 3, repeat: Infinity },
                className: "w-2 h-2 bg-[#C2A98A] rounded-full"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white text-3xl md:text-5xl uppercase tracking-[0.3em] font-light", children: "A Noxis Production" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-[1px] bg-white/20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[#C2A98A] text-[10px] uppercase tracking-widest opacity-60 max-w-xs leading-relaxed", children: [
              "Crafting premium digital experiences ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " for the wellness industry."
            ] })
          ] })
        },
        "step3"
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { x: "-100%" },
        animate: { x: "0%" },
        transition: { duration: 5, ease: "linear" },
        className: "w-full h-full bg-[#C2A98A]"
      },
      step
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-12 right-12 flex gap-1 items-end h-4", children: [0.4, 0.8, 0.5, 0.9, 0.3, 0.7].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { height: ["20%", "100%", "20%"] },
        transition: { duration: 1.5 + i * 0.2, repeat: Infinity },
        className: "w-[2px] bg-white/30"
      },
      i
    )) })
  ] });
}
const SplitComponent = MarketingSpotlight;
export {
  SplitComponent as component
};
