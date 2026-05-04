import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useI18n } from "./router-CYeveTGJ.mjs";
import { G as Globe, L as Layers, h as ChartColumn, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
function Services() {
  const { t } = useI18n();
  const services = [
    {
      icon: Globe,
      title: t("services.1.title"),
      body: t("services.1.desc")
    },
    {
      icon: Layers,
      title: t("services.2.title"),
      body: t("services.2.desc")
    },
    {
      icon: ChartColumn,
      title: t("services.3.title"),
      body: t("services.3.desc")
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 lg:px-16 py-32 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6", children: t("services.badge") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9] max-w-3xl mx-auto", children: t("services.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body font-light text-base max-w-xl mx-auto mt-6", children: t("services.subtitle") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: services.map(({ icon: Icon, title, body }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-2xl p-7 flex flex-col gap-5 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-foreground/40 group-hover:text-foreground transition" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-foreground font-body font-medium text-lg mb-3 leading-tight", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body font-light text-sm leading-relaxed", children: body })
      ] })
    ] }, title)) })
  ] });
}
const engineeringImg = "/assets/image%20copy%203-KHnWKGz9.png";
const designSystemImg = "/assets/image%20copy%204-CfhuVgxU.png";
const rows = [
  {
    reverse: false,
    badge: "Ingénierie Produit",
    title: "Du code de niveau production dès le premier jour.",
    body: "TypeScript d'abord, APIs typées, tests automatisés et CI/CD intégrés. Nous ne livrons pas de prototypes jetables — chaque ligne est conçue pour évoluer avec votre business.",
    cta: "Explorer l'ingénierie",
    img: engineeringImg
  },
  {
    reverse: true,
    badge: "Systèmes de Design",
    title: "Des interfaces que les clients veulent utiliser.",
    body: "Systèmes de design, motion et interactions affinés par la recherche utilisateur. Beau, accessible et cohérent sur chaque écran et chaque surface.",
    cta: "Voir nos designs",
    img: designSystemImg
  }
];
function FeaturesChess() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 lg:px-16 py-32 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6", children: "Compétences" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]", children: "L'art rencontre l'ingénierie." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-24", children: rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `flex flex-col ${r.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass inline-block rounded-full px-3 py-1 text-[11px] font-medium text-foreground/80 font-body", children: r.badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl lg:text-5xl font-heading italic text-foreground tracking-tight leading-[0.95]", children: r.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body font-light text-base max-w-md", children: r.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#",
                className: "liquid-glass-strong rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-sm font-medium text-foreground",
                children: [
                  r.cta,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass rounded-2xl overflow-hidden aspect-[4/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: r.img,
              alt: r.title,
              loading: "lazy",
              className: "w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
            }
          ) }) })
        ]
      },
      i
    )) })
  ] });
}
export {
  FeaturesChess as F,
  Services as S
};
