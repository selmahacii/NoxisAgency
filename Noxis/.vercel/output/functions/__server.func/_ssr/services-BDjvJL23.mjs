import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, C as CtaFooter } from "./CtaFooter-BJCDhyYk.mjs";
import { S as Services, F as FeaturesChess } from "./FeaturesChess-COKoGttU.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-CYeveTGJ.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const techLayersImg = "/assets/tech_layers-D5qB6fzT.png";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-32 pb-24 px-6 lg:px-16 max-w-7xl mx-auto flex flex-col items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6", children: "What we do" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-8 max-w-4xl", children: "Une seule équipe. Chaque couche de la tech." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body font-light text-base md:text-lg max-w-2xl mx-auto mb-16", children: "Every engagement combines strategy, design, and engineering — so your roadmap never waits on a handoff." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-3xl aspect-[16/9] mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.95,
          y: 20
        }, animate: {
          opacity: 1,
          scale: 1,
          y: 0
        }, transition: {
          duration: 1.2,
          ease: "easeOut"
        }, className: "w-full h-full rounded-[40px] overflow-hidden liquid-glass border border-foreground/5 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: techLayersImg, alt: "Tech Layers", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-10 bg-primary/5 blur-[100px] rounded-full -z-10" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesChess, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaFooter, {}) })
  ] });
}
export {
  ServicesPage as component
};
