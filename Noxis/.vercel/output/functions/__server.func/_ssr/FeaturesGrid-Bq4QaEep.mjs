import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as ArrowUpRight, Z as Zap, U as Users, h as ChartColumn, i as Shield } from "../_libs/lucide-react.mjs";
const methodologyImg = "/assets/image%20copy%202-b5Um_6pT.png";
function StartSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -top-1/3 -left-1/4 w-[70%] h-[70%] rounded-full opacity-50 blur-3xl animate-blob-slow",
          style: { background: "radial-gradient(circle, oklch(0.55 0.22 240) 0%, transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full opacity-40 blur-3xl animate-blob-slower",
          style: { background: "radial-gradient(circle, oklch(0.7 0.18 220) 0%, transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -bottom-1/4 left-1/4 w-[60%] h-[60%] rounded-full opacity-40 blur-3xl animate-blob-slow",
          style: { background: "radial-gradient(circle, oklch(0.45 0.2 250) 0%, transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.04]",
          style: {
            backgroundImage: "linear-gradient(oklch(0.95 0.05 230) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95 0.05 230) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }
        }
      )
    ] }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative z-20 flex flex-col items-center justify-center text-center px-6 py-32",
        style: { minHeight: 500 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6", children: "Notre Méthodologie" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6 max-w-3xl", children: "Découvrir. Concevoir. Créer. Déployer." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body font-light text-sm md:text-base max-w-xl mb-8", children: "Un modèle de livraison en quatre étapes basé sur des itérations hebdomadaires et des démos en direct — pour voir du vrai logiciel dès la première semaine." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 relative max-w-4xl w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass rounded-3xl overflow-hidden aspect-[21/9]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: methodologyImg,
                alt: "Notre Méthodologie",
                className: "w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-primary/5 blur-2xl rounded-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#",
              className: "liquid-glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-foreground",
              children: [
                "Voir notre approche ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const items = [
  {
    icon: Zap,
    title: "Équipes 100% Senior",
    body: "Chaque ingénieur a plus de 8 ans d'expérience. Pas de juniors, pas d'apprentissage à vos frais."
  },
  {
    icon: Users,
    title: "Squads Intégrées",
    body: "Des pods pluridisciplinaires (design, produit, ingénierie) qui s'intègrent parfaitement à votre équipe."
  },
  {
    icon: ChartColumn,
    title: "Axés sur les résultats",
    body: "Nous mesurons le succès par les fonctionnalités livrées et les revenus générés — pas par les heures."
  },
  {
    icon: Shield,
    title: "Prêt pour l'entreprise",
    body: "Conformité RGPD et architecture sécurisée. La sécurité est intégrée dès la première ligne de code."
  }
];
function FeaturesGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 lg:px-16 py-32 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6", children: "Pourquoi Noxis ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]", children: "Un partenaire, pas un prestataire." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: items.map(({ icon: Icon, title, body }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-foreground font-body font-medium text-base mb-2", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body font-light text-sm leading-relaxed", children: body })
    ] }, title)) })
  ] });
}
export {
  FeaturesGrid as F,
  StartSection as S
};
