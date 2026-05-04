import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { p as pAtelierVideo } from "./Screen Video (35)-CUp0gEmd.mjs";
import { a as pAtelierG1, b as pAtelierG2, c as pAtelierG3, d as pAtelierG4, p as pAtelierImg } from "./image copy 4-Cy_gY3vC.mjs";
import { m as motion, a as useScroll, b as useTransform, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { k as ArrowRight, d as ChevronLeft, e as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const COLORS = {
  bg: "#F7F6F3",
  textPrimary: "#1A1A1A"
};
function PAtelierShowcase() {
  const containerRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: "min-h-screen font-body selection:bg-[#C2A98A]/30 selection:text-[#1A1A1A]",
      style: { backgroundColor: COLORS.bg, color: COLORS.textPrimary },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Philosophy, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Classes, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CtaSection, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
      ]
    }
  );
}
function Navbar() {
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.nav,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      className: `fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 py-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-heading tracking-widest uppercase", children: "Atelier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-12 items-center text-[10px] uppercase tracking-[0.2em] font-medium", children: ["Home", "About", "Classes", "Book"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `#${item.toLowerCase()}`,
            className: "relative group overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block transition-transform duration-500 group-hover:-translate-y-full", children: item }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-[#C2A98A]", children: item }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C2A98A] group-hover:w-full transition-all duration-500"
                }
              )
            ]
          },
          item
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-[#1A1A1A] text-white px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-[#C2A98A] transition-colors duration-500 rounded-full", children: "Reserve Now" })
      ]
    }
  );
}
function Hero() {
  const videoRef = reactExports.useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1e3], [0, 200]);
  const scale = useTransform(scrollY, [0, 1e3], [1, 1.1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen overflow-hidden flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { y, scale }, className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          ref: videoRef,
          src: pAtelierVideo,
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          className: "w-full h-full object-cover grayscale-[0.2]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#F7F6F3]/20 via-transparent to-[#F7F6F3]/40" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 0.2 },
          className: "block text-[10px] uppercase tracking-[0.4em] mb-6 opacity-60",
          children: "Mindful Movement · Calm Luxury"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, delay: 0.4 },
          className: "text-6xl md:text-9xl font-heading italic tracking-tight leading-[0.85] mb-12",
          children: [
            "Elevate Your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-12 md:ml-24", children: "Practice" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay: 1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group relative px-12 py-5 overflow-hidden rounded-full border border-[#1A1A1A]/20 transition-all duration-700 hover:border-[#C2A98A]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 text-[10px] uppercase tracking-widest font-medium transition-colors duration-500 group-hover:text-white", children: "Discover the Studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#C2A98A] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { y: [0, 10, 0] },
        transition: { duration: 2, repeat: Infinity },
        className: "absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1px] h-16 bg-[#1A1A1A]" })
      }
    )
  ] });
}
function Philosophy() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-32 px-6 lg:px-16 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-24 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-[#C2A98A]", children: "01 / Philosophy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-heading italic leading-tight", children: [
              "A space designed ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " for silent progress."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "text-lg font-light leading-relaxed text-[#6B6B6B] max-w-lg",
          children: "Atelier is more than a studio. It is an editorial approach to fitness. We believe in the beauty of controlled movement, the power of breath, and the luxury of focused time. Our method combines classical Pilates with modern physiological insights."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.4 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-4 text-[10px] uppercase tracking-widest font-semibold group", children: [
            "Our Story ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-2" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scale: 0.9, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 1.2 },
          className: "aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pAtelierG1, alt: "Pilates Session", className: "w-full h-full object-cover" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { y: 50, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.5, duration: 1 },
          className: "absolute -bottom-12 -left-12 w-64 aspect-square rounded-2xl overflow-hidden border-8 border-[#F7F6F3] shadow-xl hidden md:block",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pAtelierG2, alt: "Detail", className: "w-full h-full object-cover" })
        }
      )
    ] })
  ] }) });
}
function Classes() {
  const classes = [
    { title: "Reformer Core", level: "All Levels", duration: "50 min", img: pAtelierG3 },
    { title: "Sculpt & Flow", level: "Intermediate", duration: "60 min", img: pAtelierG4 },
    { title: "Foundation", level: "Beginner", duration: "45 min", img: pAtelierImg }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "classes", className: "py-32 bg-[#EFEDE8]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 lg:px-16 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-end mb-20 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-[#C2A98A]", children: "02 / The Classes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl font-heading italic", children: "Curated Sessions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B6B6B] max-w-xs mb-2", children: "Tailored movements for every body. Each session is limited to 6 guests for personalized guidance." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: classes.map((cls, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: idx * 0.2 },
        className: "group cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: cls.img,
                alt: cls.title,
                className: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest px-6 py-3 rounded-full", children: "View Details" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-heading mb-1", children: cls.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-[#6B6B6B] uppercase tracking-widest", children: [
                cls.level,
                " · ",
                cls.duration
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[#C2A98A]" })
          ] })
        ]
      },
      cls.title
    )) })
  ] }) });
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[80vh] flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pAtelierG2, alt: "Atmosphere", className: "w-full h-full object-cover fixed-attachment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 px-6 lg:px-16 max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "space-y-8 text-white",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] opacity-80", children: "03 / The Experience" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-7xl font-heading italic leading-tight", children: [
            "Immersion in silence ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            " and light."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-light opacity-80 leading-relaxed", children: "Our studio is designed as a sanctuary. Neutral tones, natural materials, and diffused lighting create an environment where the mind can focus entirely on the body's precision." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-10 py-4 bg-white text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold hover:bg-[#C2A98A] hover:text-white transition-colors duration-500 rounded-full", children: "Tour the Studio" })
        ]
      }
    ) })
  ] });
}
function Testimonials() {
  const [index, setIndex] = reactExports.useState(0);
  const items = [
    { text: "The atmosphere here is unlike any other studio. It's a true retreat from the city noise. My practice has never been more focused.", author: "Elena R." },
    { text: "Sophisticated, minimal, and highly professional.  Atelier has redefined my understanding of Pilates and body awareness.", author: "Marc L." },
    { text: "Every detail is considered. From the lighting to the equipment, it's a masterpiece of wellness design.", author: "Sophia V." }
  ];
  const next = () => setIndex((prev2) => (prev2 + 1) % items.length);
  const prev = () => setIndex((prev2) => (prev2 - 1 + items.length) % items.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-32 px-6 lg:px-16 max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 opacity-30 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-[1px] bg-[#1A1A1A]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-64 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.8, ease: "easeInOut" },
        className: "absolute inset-0 flex flex-col justify-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl md:text-3xl font-heading italic leading-relaxed mb-8", children: [
            '"',
            items[index].text,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-[#C2A98A]", children: items[index].author })
        ]
      },
      index
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-8 mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prev, className: "p-4 rounded-full border border-[#E3E1DC] hover:border-[#1A1A1A] transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: next, className: "p-4 rounded-full border border-[#E3E1DC] hover:border-[#1A1A1A] transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" }) })
    ] })
  ] });
}
function CtaSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "book", className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 1.2 },
      className: "max-w-5xl mx-auto bg-[#EFEDE8] rounded-[3rem] py-24 px-8 text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] mb-8 block opacity-60", children: "Begin Your Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-8xl font-heading italic tracking-tight leading-none mb-12", children: [
          "Find Your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " Balance."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-[#1A1A1A] text-white px-12 py-5 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#C2A98A] transition-colors duration-500", children: "Book a Session" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-transparent border border-[#1A1A1A] text-[#1A1A1A] px-12 py-5 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors duration-500", children: "View Pricing" })
        ] })
      ]
    }
  ) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-20 px-6 lg:px-16 border-t border-[#E3E1DC]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-heading tracking-widest uppercase", children: " Atelier" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-12 text-[10px] uppercase tracking-[0.2em] opacity-60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#C2A98A]", children: "Instagram" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#C2A98A]", children: "Journal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#C2A98A]", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest opacity-40", children: "© 2026  Atelier Pilates. All Rights Reserved." })
  ] }) });
}
const SplitComponent = PAtelierShowcase;
export {
  SplitComponent as component
};
