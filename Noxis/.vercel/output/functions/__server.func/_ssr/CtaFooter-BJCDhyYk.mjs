import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n, l as logo } from "./router-CYeveTGJ.mjs";
import { G as Globe, A as ArrowUpRight, j as Menu, X } from "../_libs/lucide-react.mjs";
import { u as useInView, m as motion } from "../_libs/framer-motion.mjs";
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const { t, lang, setLang } = useI18n();
  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/work", label: t("nav.work") },
    { to: "/process", label: t("nav.process") },
    { to: "/contact", label: t("nav.contact") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "fixed top-4 left-0 right-0 z-50 px-6 lg:px-16 py-3 flex items-center justify-between pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center pointer-events-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Noxis", className: "h-7 md:h-8 w-auto", height: 32 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center gap-1 pointer-events-auto", children: [
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            className: "px-3 py-2 text-sm font-medium text-foreground/70 font-body hover:text-foreground transition-colors",
            activeOptions: { exact: true },
            activeProps: { className: "px-3 py-2 text-sm font-medium text-foreground font-body" },
            children: l.label
          },
          l.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setLang(lang === "fr" ? "ar" : "fr"),
            className: "ml-1 inline-flex items-center gap-1 text-foreground/70 hover:text-foreground px-2.5 py-2 text-xs font-medium font-body uppercase tracking-wider transition",
            "aria-label": "Switch language",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
              lang === "fr" ? "AR" : "FR"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => window.dispatchEvent(new CustomEvent("open-planner")),
            className: "ml-1 inline-flex items-center gap-1 liquid-glass rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground hover:bg-foreground/5 transition",
            children: t("nav.quote")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contact",
            className: "ml-1 inline-flex items-center gap-1 bg-primary text-primary-foreground rounded-full px-3.5 py-1.5 text-sm font-medium hover:bg-primary/90 transition",
            children: [
              t("nav.cta"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen(true),
          className: "md:hidden liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-foreground pointer-events-auto",
          "aria-label": "Open menu",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[60] md:hidden bg-background/95 backdrop-blur-md flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen(false),
          className: "liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-foreground",
          "aria-label": "Close menu",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center gap-6", children: [
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            onClick: () => setOpen(false),
            className: "text-3xl font-heading italic text-foreground",
            children: l.label
          },
          l.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setOpen(false);
              window.dispatchEvent(new CustomEvent("open-planner"));
            },
            className: "mt-4 bg-primary text-primary-foreground rounded-full px-6 py-3 text-base font-medium font-body",
            children: t("nav.quote")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setLang(lang === "fr" ? "ar" : "fr"),
            className: "mt-4 liquid-glass rounded-full px-4 py-2 text-sm text-foreground font-body inline-flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
              lang === "fr" ? "العربية" : "Français"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Reveal({ children, delay = 0, y = 30, className }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
      className,
      style: { willChange: "transform, opacity" },
      children
    }
  );
}
const cinematicVideo = "/assets/z-CmFx-x1q.mp4";
function CtaFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        src: cinematicVideo,
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        className: "absolute inset-0 w-full h-full object-cover grayscale brightness-[1.1] contrast-[0.9] opacity-25 mix-blend-multiply"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/20 z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-0 left-0 right-0 pointer-events-none z-10",
        style: { height: 200, background: "linear-gradient(to top, transparent, var(--background))" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute bottom-0 left-0 right-0 pointer-events-none z-10",
        style: { height: 200, background: "linear-gradient(to bottom, transparent, var(--background))" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 px-6 lg:px-16 pt-40 pb-12 max-w-6xl mx-auto flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground leading-[0.85] mb-8 max-w-3xl", children: "Construisons ce qui vient ensuite." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 font-body font-light text-base max-w-xl mb-10", children: "Parlez-nous de votre produit, plateforme ou idée. Nous reviendrons vers vous sous 24h avec une vision claire — périmètre, équipe et délais." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4 mb-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => window.dispatchEvent(new CustomEvent("open-planner")),
            className: "liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-foreground",
            children: "Réserver un appel découverte"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/work",
            className: "bg-primary text-primary-foreground rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium hover:bg-primary/90 transition",
            children: "Voir les réalisations"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "w-full pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-xs font-body", children: "© 2026 Noxis. Ingénierie depuis 2022." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6", children: ["Services", "Réalisations", "Carrières", "Contact"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-foreground/40 text-xs font-body hover:text-foreground transition", children: l }, l)) })
      ] })
    ] })
  ] });
}
export {
  CtaFooter as C,
  Navbar as N,
  Reveal as R
};
