import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, R as Reveal, C as CtaFooter } from "./CtaFooter-BJCDhyYk.mjs";
import { u as useI18n } from "./router-CYeveTGJ.mjs";
import { S as StartSection, F as FeaturesGrid } from "./FeaturesGrid-Bq4QaEep.mjs";
import { S as Services, F as FeaturesChess } from "./FeaturesChess-COKoGttU.mjs";
import { P as Portfolio, S as Stats, T as Testimonials } from "./Testimonials-Dh-6XCSc.mjs";
import "../_libs/hls.js.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, P as Play } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "./Screen Video (35)-CUp0gEmd.mjs";
import "./image copy 4-Cy_gY3vC.mjs";
function BlurText({
  text,
  className = "",
  delay = 200,
  animateBy = "words",
  direction = "bottom"
}) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  const fromY = direction === "bottom" ? 50 : -50;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, className, style: { display: "inline-block" }, children: elements.map((el, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.span,
    {
      style: { display: "inline-block", willChange: "transform, filter, opacity" },
      initial: { filter: "blur(10px)", opacity: 0, y: fromY },
      animate: inView ? {
        filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
        opacity: [0, 0.5, 1],
        y: [fromY, -5, 0]
      } : {},
      transition: {
        duration: 0.7,
        times: [0, 0.5, 1],
        ease: "easeOut",
        delay: i * delay / 1e3
      },
      children: [
        el,
        animateBy === "words" && i < elements.length - 1 ? " " : ""
      ]
    },
    i
  )) });
}
const heroVideo = "/assets/IMG_5290-HgK_ivdy.MP4";
const partners = ["Fisc Algérie", "Medicare.dz", "Noxis Logistics"];
function Hero() {
  const { t, lang } = useI18n();
  const videoRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden min-h-[90svh] lg:min-h-[1000px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        ref: videoRef,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        preload: "auto",
        src: heroVideo,
        className: "absolute inset-0 w-full h-full object-cover z-0 grayscale brightness-[1.15] contrast-[0.85] opacity-40"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/20 z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 z-0 pointer-events-none opacity-10",
        style: {
          backgroundImage: "linear-gradient(rgba(180,220,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(180,220,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute bottom-0 left-0 right-0 z-0 pointer-events-none",
        style: { height: 300, background: "linear-gradient(to bottom, transparent, var(--background))" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative z-10 flex flex-col items-center text-center px-6 h-full",
        style: { paddingTop: 150 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { filter: "blur(10px)", opacity: 0, y: 20 },
              animate: { filter: "blur(0px)", opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.4 },
              className: "liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 mb-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold font-body", children: "v2026" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/90 font-body pr-3", children: t("hero.badge") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-6xl md:text-7xl lg:text-[5rem] font-heading italic text-foreground leading-[0.85] max-w-5xl tracking-[-3px] mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlurText, { text: t("hero.title"), delay: 100 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { filter: "blur(10px)", opacity: 0, y: 20 },
              animate: { filter: "blur(0px)", opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.8 },
              className: "text-base md:text-lg text-foreground/70 font-body font-light leading-tight max-w-2xl mb-12",
              children: t("hero.subtitle")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { filter: "blur(10px)", opacity: 0, y: 20 },
              animate: { filter: "blur(0px)", opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 1.1 },
              className: "flex items-center gap-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "/process",
                    className: "liquid-glass-strong rounded-full px-7 py-3 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-all hover:scale-105 active:scale-95",
                    children: [
                      t("hero.cta1"),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#",
                    className: "inline-flex items-center gap-2 text-sm font-medium text-foreground/80",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 fill-foreground" }),
                      " ",
                      t("hero.cta2")
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pb-16 pt-16 flex flex-col items-center gap-8 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground/60 font-body", children: t("hero.partners") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-10 md:gap-20", children: partners.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xl md:text-2xl font-heading italic text-foreground/30 hover:text-foreground/60 transition-colors",
                children: p
              },
              p
            )) })
          ] })
        ]
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground w-full overflow-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StartSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesChess, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesGrid, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaFooter, {}) })
  ] });
}
export {
  Index as component
};
