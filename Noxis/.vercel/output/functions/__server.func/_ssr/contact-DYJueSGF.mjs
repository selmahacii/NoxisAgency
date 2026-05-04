import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, C as CtaFooter } from "./CtaFooter-BJCDhyYk.mjs";
import { f as Send, M as Mail, g as MapPin } from "../_libs/lucide-react.mjs";
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
const contactHeroImg = "/assets/image%20copy%207-Dwfa3ALM.png";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground overflow-x-hidden min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-20 px-6 lg:px-16 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6", children: "Contactez-nous" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6", children: "Discutons de votre projet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body font-light text-base md:text-lg max-w-xl mx-auto mb-12", children: "Parlez-nous de votre idée. Nous revenons vers vous sous 24h avec une proposition claire." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto liquid-glass rounded-3xl overflow-hidden aspect-[21/9] mb-8 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: contactHeroImg, alt: "Contact Noxis", className: "w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          setSent(true);
        }, className: "liquid-glass rounded-3xl p-8 md:p-10 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom", name: "name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Entreprise", name: "company" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Budget estimé", name: "budget", placeholder: "ex. 200.000 DZD – 1.000.000 DZD" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-foreground/50 font-body mb-2", children: "Détails du projet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, required: true, className: "w-full bg-foreground/5 border border-foreground/15 rounded-2xl px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition resize-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "bg-primary text-primary-foreground rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium hover:opacity-90 transition", children: [
            sent ? "Merci — nous vous recontacterons" : "Envoyer le message",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.15, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-2xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-foreground mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-foreground/40 font-body mb-1", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:selmaahacii@gmail.com", className: "text-foreground font-body text-sm", children: "selmaahacii@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-2xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-foreground mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-foreground/40 font-body mb-1", children: "Téléphone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+213780125700", className: "text-foreground font-body text-sm", children: "+213 (0) 780 12 57 00" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-2xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-foreground/40 font-body mb-1", children: "Délai de réponse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground font-body text-sm", children: "Sous 24 heures" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaFooter, {}) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-foreground/50 font-body mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, placeholder, required, className: "w-full bg-foreground/5 border border-foreground/15 rounded-full px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition" })
  ] });
}
export {
  ContactPage as component
};
