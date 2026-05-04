import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, C as CtaFooter } from "./CtaFooter-BJCDhyYk.mjs";
import { S as StartSection, F as FeaturesGrid } from "./FeaturesGrid-Bq4QaEep.mjs";
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
const processHeroImg = "/assets/image%20copy%206-DTEbgz42.png";
const steps = [{
  n: "01",
  title: "Découverte",
  body: "Workshops, audits et interviews. Nous cartographions le problème avant de toucher au moindre pixel."
}, {
  n: "02",
  title: "Conception",
  body: "Wireframes, prototypes et systèmes de design. Nous testons nos idées avec de vrais utilisateurs."
}, {
  n: "03",
  title: "Ingénierie",
  body: "Incréments hebdomadaires, démos en direct, code de niveau production. Vous voyez du vrai logiciel dès la première semaine."
}, {
  n: "04",
  title: "Évolutivité",
  body: "Lancement, surveillance, itération. Nous restons votre partenaire pour mesurer, optimiser et faire évoluer."
}];
function ProcessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-32 pb-12 px-6 lg:px-16 max-w-7xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6", children: "Notre Méthode" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6", children: "Un processus conçu pour livrer." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto liquid-glass rounded-3xl overflow-hidden aspect-[21/9] mt-12 mb-8 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: processHeroImg, alt: "Processus", className: "w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StartSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 lg:px-16 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-2xl p-8 h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-heading italic text-foreground/20 mb-4", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-heading italic text-foreground mb-3", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body font-light text-sm leading-relaxed", children: s.body })
    ] }) }, s.n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesGrid, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaFooter, {}) })
  ] });
}
export {
  ProcessPage as component
};
