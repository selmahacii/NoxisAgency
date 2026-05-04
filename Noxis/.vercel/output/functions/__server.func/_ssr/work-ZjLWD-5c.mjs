import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, C as CtaFooter } from "./CtaFooter-BJCDhyYk.mjs";
import { P as Portfolio, S as Stats, T as Testimonials } from "./Testimonials-Dh-6XCSc.mjs";
import "../_libs/hls.js.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lucide-react.mjs";
import "./Screen Video (35)-CUp0gEmd.mjs";
import "./image copy 4-Cy_gY3vC.mjs";
const workHeroImg = "/assets/image%20copy%205-D5ZsEz0J.png";
function WorkPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-32 pb-4 px-6 lg:px-16 max-w-7xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6", children: "Études de cas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6", children: "Des réalisations dont nous sommes fiers." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body font-light text-base md:text-lg max-w-2xl mx-auto mb-16", children: "Cliquez sur un projet pour découvrir le brief, la stack et les résultats." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto liquid-glass rounded-3xl overflow-hidden aspect-[21/9] mb-20 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workHeroImg, alt: "Réalisations", className: "w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, { showAll: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaFooter, {}) })
  ] });
}
export {
  WorkPage as component
};
