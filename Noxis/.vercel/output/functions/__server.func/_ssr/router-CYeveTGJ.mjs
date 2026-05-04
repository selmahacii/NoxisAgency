import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X, G as Globe, S as Smartphone, L as Layers, C as Cpu, a as Check, b as Coins, c as Clock, d as ChevronLeft, e as ChevronRight, f as Send } from "../_libs/lucide-react.mjs";
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
const dictionaries = {
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.work": "Réalisations",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.cta": "Démarrer",
    "nav.quote": "Obtenir un devis",
    "hero.badge": "Studio Tech Senior",
    "hero.title": "Nous ne construisons pas des logiciels. Nous construisons votre avantage concurrentiel.",
    "hero.subtitle": "Studio technique senior basé à Alger — spécialisé dans les systèmes critiques pour la Fintech, la Santé et la Distribution.",
    "hero.cta1": "Voir notre approche",
    "hero.cta2": "Voir le showreel",
    "hero.partners": "Expertise prouvée avec",
    "portfolio.badge": "Réalisations",
    "portfolio.title": "Projets récents.",
    "portfolio.subtitle": "Cliquez sur un projet pour explorer le brief, la stack et les résultats.",
    "portfolio.challenge": "Le défi",
    "portfolio.shipped": "Ce qu'on a livré",
    "portfolio.gallery": "Galerie",
    "portfolio.demo": "Démo",
    "portfolio.client": "Client",
    "portfolio.year": "Année",
    "portfolio.duration": "Durée",
    "portfolio.category": "Catégorie",
    "portfolio.services": "Services",
    "portfolio.stack": "Stack",
    "services.badge": "Expertise",
    "services.title": "Une seule équipe. Chaque couche de la tech.",
    "services.subtitle": "Nous transformons votre ambition en infrastructure numérique robuste. Pas de compromis, juste des résultats business.",
    "services.1.title": "Actifs Numériques & Croissance",
    "services.1.desc": "Nous concevons l'interface entre votre ambition et vos clients — des expériences qui retiennent, fidélisent, et convertissent.",
    "services.2.title": "Infrastructures SaaS & Métier",
    "services.2.desc": "Nous construisons vos avantages concurrentiels durables : des systèmes critiques qui automatisent vos opérations et accélèrent votre time-to-market.",
    "services.3.title": "Intelligence Data & IoT",
    "services.3.desc": "Transformez vos données en décisions stratégiques. Visualisation temps réel pour piloter votre entreprise sur la base de la réalité."
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.work": "أعمالنا",
    "nav.process": "منهجيتنا",
    "nav.contact": "تواصل",
    "nav.cta": "ابدأ الآن",
    "nav.quote": "طلب تسعيرة",
    "hero.badge": "ستوديو تقني خبير",
    "hero.title": "نحن لا نبني برمجيات فقط. نحن نبني ميزتكم التنافسية.",
    "hero.subtitle": "ستوديو تقني خبير مقره الجزائر العاصمة — متخصص في الأنظمة الحيوية للتكنولوجيا المالية، الصحة والتوزيع.",
    "hero.cta1": "اكتشف منهجيتنا",
    "hero.cta2": "شاهد العرض",
    "hero.partners": "خبرة مثبتة مع",
    "portfolio.badge": "أعمالنا",
    "portfolio.title": "مشاريع حديثة.",
    "portfolio.subtitle": "انقر على أي مشروع لاستكشاف الفكرة والتقنيات والنتائج.",
    "portfolio.challenge": "التحدي",
    "portfolio.shipped": "ما قمنا بتسليمه",
    "portfolio.gallery": "المعرض",
    "portfolio.demo": "عرض",
    "portfolio.client": "العميل",
    "portfolio.year": "السنة",
    "portfolio.duration": "المدة",
    "portfolio.category": "الفئة",
    "portfolio.services": "الخدمات",
    "portfolio.stack": "التقنيات",
    "services.badge": "خبراتنا",
    "services.title": "فريق واحد. لكل طبقات التكنولوجيا.",
    "services.subtitle": "نحول طموحاتكم إلى بنية تحتية رقمية قوية. لا تنازلات، فقط نتائج ملموسة لأعمالكم.",
    "services.1.title": "الأصول الرقمية والنمو",
    "services.1.desc": "نصمم الواجهة بين طموحكم وعملائكم — تجارب مستخدم تضمن الولاء، الاستمرارية والتحويل الفعلي.",
    "services.2.title": "أنظمة SaaS وبرمجيات الأعمال",
    "services.2.desc": "نبني مزاياكم التنافسية المستدامة: أنظمة حيوية تساهم في أتمتة عملياتكم وتسريع وصولكم للسوق.",
    "services.3.title": "ذكاء البيانات وإنترنت الأشياء",
    "services.3.desc": "حولوا بياناتكم إلى قرارات استراتيجية. عرض مباشر للبيانات لقيادة مؤسستكم بناءً على الواقع وليس التخمين."
  }
};
const I18nContext = reactExports.createContext(null);
function I18nProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("fr");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("noxis-lang") : null;
    if (stored === "fr" || stored === "ar") setLangState(stored);
  }, []);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("noxis-lang", l);
  };
  const t = (key) => dictionaries[lang][key] ?? key;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nContext.Provider, { value: { lang, setLang, t, dir: lang === "ar" ? "rtl" : "ltr" }, children });
}
function useI18n() {
  const ctx = reactExports.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
const steps = [
  {
    id: "services",
    title: "Quel type de projet avez-vous ?",
    subtitle: "Sélectionnez un ou plusieurs domaines d'expertise."
  },
  {
    id: "budget",
    title: "Quel est votre budget estimé ?",
    subtitle: "Cela nous aide à calibrer la meilleure équipe pour vous."
  },
  {
    id: "timeline",
    title: "Quel est votre délai ?",
    subtitle: "Quand souhaiteriez-vous lancer le projet ?"
  },
  {
    id: "contact",
    title: "Parlons de vous",
    subtitle: "Comment pouvons-nous vous recontacter ?"
  }
];
const serviceOptions = [
  { id: "web", label: "Site Web & Plateforme", icon: Globe },
  { id: "mobile", label: "Application Mobile", icon: Smartphone },
  { id: "saas", label: "Logiciel SaaS / ERP", icon: Layers },
  { id: "ai", label: "Intelligence Artificielle", icon: Cpu }
];
const budgetOptions = [
  { id: "starter", label: "3M - 5M DZD", desc: "MVP ou projet ciblé" },
  { id: "growth", label: "5M - 20M DZD", desc: "Produit complet" },
  { id: "enterprise", label: "20M+ DZD", desc: "Écosystème complexe" }
];
const timelineOptions = [
  { id: "asap", label: "Dès que possible", desc: "Urgent" },
  { id: "3months", label: "1 à 3 mois", desc: "Planning standard" },
  { id: "flexible", label: "Flexible", desc: "Exploration" }
];
function ProjectPlanner({ isOpen, onClose }) {
  const [step, setStep] = reactExports.useState(0);
  const [formData, setFormData] = reactExports.useState({
    services: [],
    budget: "",
    timeline: "",
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSuccess, setIsSuccess] = reactExports.useState(false);
  const toggleService = (id) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(id) ? prev.services.filter((s) => s !== id) : [...prev.services, id]
    }));
  };
  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2e3);
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/80 backdrop-blur-xl", onClick: onClose }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.95, opacity: 0, y: 20 },
            animate: { scale: 1, opacity: 1, y: 0 },
            exit: { scale: 0.95, opacity: 0, y: 20 },
            className: "relative w-full max-w-2xl bg-background border border-foreground/5 rounded-[32px] overflow-hidden shadow-2xl shadow-primary/10",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-foreground/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "h-full bg-primary",
                  initial: { width: "0%" },
                  animate: { width: `${(step + 1) / steps.length * 100}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "absolute top-6 right-6 text-foreground/40 hover:text-foreground transition-colors z-10",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 md:p-12", children: !isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.2em] text-primary font-bold", children: [
                    "Étape ",
                    step + 1,
                    " sur ",
                    steps.length
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-heading italic text-foreground tracking-tight", children: steps[step].title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 font-body font-light text-sm", children: steps[step].subtitle })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                    transition: { duration: 0.3 },
                    children: [
                      step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: serviceOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => toggleService(opt.id),
                          className: `flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${formData.services.includes(opt.id) ? "bg-primary/5 border-primary text-foreground" : "bg-foreground/[0.02] border-foreground/5 text-foreground/60 hover:bg-foreground/[0.05]"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-lg ${formData.services.includes(opt.id) ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(opt.icon, { className: "h-4 w-4" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body font-medium text-sm", children: opt.label }),
                            formData.services.includes(opt.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "ml-auto h-4 w-4 text-primary" })
                          ]
                        },
                        opt.id
                      )) }),
                      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: budgetOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => setFormData({ ...formData, budget: opt.id }),
                          className: `flex items-center gap-4 w-full p-6 rounded-2xl border transition-all text-left ${formData.budget === opt.id ? "bg-primary/5 border-primary text-foreground" : "bg-foreground/[0.02] border-foreground/5 text-foreground/60 hover:bg-foreground/[0.05]"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-lg ${formData.budget === opt.id ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "h-4 w-4" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body font-medium text-sm", children: opt.label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-foreground/40", children: opt.desc })
                            ] }),
                            formData.budget === opt.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "ml-auto h-4 w-4 text-primary" })
                          ]
                        },
                        opt.id
                      )) }),
                      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: timelineOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => setFormData({ ...formData, timeline: opt.id }),
                          className: `flex items-center gap-4 w-full p-6 rounded-2xl border transition-all text-left ${formData.timeline === opt.id ? "bg-primary/5 border-primary text-foreground" : "bg-foreground/[0.02] border-foreground/5 text-foreground/60 hover:bg-foreground/[0.05]"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-lg ${formData.timeline === opt.id ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body font-medium text-sm", children: opt.label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-foreground/40", children: opt.desc })
                            ] }),
                            formData.timeline === opt.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "ml-auto h-4 w-4 text-primary" })
                          ]
                        },
                        opt.id
                      )) }),
                      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-foreground/40 px-1", children: "Nom Complet" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: "text",
                                value: formData.name,
                                onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                                placeholder: "Nom complet",
                                className: "w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary/40 transition"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-foreground/40 px-1", children: "Email Business" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: "email",
                                value: formData.email,
                                onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                                placeholder: "votre@email.com",
                                className: "w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary/40 transition"
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-foreground/40 px-1", children: "Détails optionnels" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "textarea",
                            {
                              value: formData.message,
                              onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                              placeholder: "Parlez-nous brièvement de votre vision...",
                              rows: 3,
                              className: "w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary/40 transition resize-none"
                            }
                          )
                        ] })
                      ] })
                    ]
                  },
                  step
                ) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "flex items-center justify-between pt-6 border-t border-foreground/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: handleBack,
                      disabled: step === 0,
                      className: `flex items-center gap-2 text-sm font-medium transition ${step === 0 ? "opacity-0 pointer-events-none" : "text-foreground/40 hover:text-foreground"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
                        " Retour"
                      ]
                    }
                  ),
                  step < steps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: handleNext,
                      disabled: step === 0 && formData.services.length === 0 || step === 1 && !formData.budget || step === 2 && !formData.timeline,
                      className: "bg-foreground text-background px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:opacity-90 transition disabled:opacity-30 disabled:cursor-not-allowed",
                      children: [
                        "Continuer ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: handleSubmit,
                      disabled: !formData.name || !formData.email || isSubmitting,
                      className: "bg-primary text-primary-foreground px-8 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-primary/90 transition disabled:opacity-30",
                      children: [
                        isSubmitting ? "Envoi..." : "Envoyer ma demande",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  className: "py-12 flex flex-col items-center text-center space-y-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-heading italic text-foreground tracking-tight", children: "Demande reçue !" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 font-body font-light text-base max-w-xs mx-auto", children: "Nous analysons vos besoins et reviendrons vers vous sous 24h avec une vision claire." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: onClose,
                        className: "bg-foreground text-background px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition",
                        children: "Fermer"
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        )
      ]
    }
  ) });
}
const appCss = "/assets/styles-DZpOxLKC.css";
const logo = "/assets/noxis-logo-rfaT3q9F.png";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Noxis Studio" },
      { name: "description", content: "High-end Digital Studio & Creative Agency" },
      { name: "author", content: "Noxis" },
      { property: "og:title", content: "Noxis Studio" },
      { property: "og:description", content: "High-end Digital Studio & Creative Agency" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@NoxisStudio" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        href: logo
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const [isPlannerOpen, setIsPlannerOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleToggle = () => setIsPlannerOpen(true);
    window.addEventListener("open-planner", handleToggle);
    return () => window.removeEventListener("open-planner", handleToggle);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(I18nProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectPlanner, { isOpen: isPlannerOpen, onClose: () => setIsPlannerOpen(false) })
  ] });
}
const $$splitComponentImporter$6 = () => import("./work-ZjLWD-5c.mjs");
const Route$6 = createFileRoute("/work")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Work — Studio Tech Agency"
    }, {
      name: "description",
      content: "Selected work: fintech dashboards, luxury commerce, mobile apps, and enterprise SaaS shipped by Studio."
    }, {
      property: "og:title",
      content: "Work — Studio Tech Agency"
    }, {
      property: "og:description",
      content: "Selected projects across fintech, commerce, mobile, and enterprise SaaS."
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./services-BDjvJL23.mjs");
const Route$5 = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Services — Studio Tech Agency"
    }, {
      name: "description",
      content: "Websites, web apps, mobile apps, custom software, AI, and cloud — full-stack delivery from a senior team."
    }, {
      property: "og:title",
      content: "Services — Studio Tech Agency"
    }, {
      property: "og:description",
      content: "Full-stack delivery: websites, web apps, mobile, custom software, AI, cloud."
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./process-BD10onbg.mjs");
const Route$4 = createFileRoute("/process")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Process — Studio Tech Agency"
    }, {
      name: "description",
      content: "How we deliver: a four-stage process — Discover, Design, Engineer, Scale — built around weekly increments."
    }, {
      property: "og:title",
      content: "Process — Studio Tech Agency"
    }, {
      property: "og:description",
      content: "Discover. Design. Engineer. Scale. Weekly increments and live demos."
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./contact-DYJueSGF.mjs");
const Route$3 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Contact — Noxis Tech Agency"
    }, {
      name: "description",
      content: "Parlez-nous de votre projet. Nous répondons sous 24h avec une vision claire."
    }, {
      property: "og:title",
      content: "Contact — Noxis Tech Agency"
    }, {
      property: "og:description",
      content: "Démarrez un projet avec nous. Réponse sous 24 heures."
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./index-D1Om5bSZ.mjs");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Noxis — Tech Agency Building Software, Apps & Platforms"
    }, {
      name: "description",
      content: "Noxis is a senior tech agency designing and engineering websites, web apps, mobile apps, and custom software. Strategy, design, and engineering under one roof."
    }, {
      property: "og:title",
      content: "Noxis — Tech Agency"
    }, {
      property: "og:description",
      content: "Websites, web apps, mobile, and bespoke platforms. Senior teams shipping production-grade software."
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./work.p-atelier-BPVKyHEu.mjs");
const Route$1 = createFileRoute("/work/p-atelier")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "P Atelier Pilates — Premium Prototype by Noxis"
    }, {
      name: "description",
      content: "A pixel-perfect prototype of a premium Pilates studio website focusing on calm luxury and minimalism."
    }]
  })
});
const $$splitComponentImporter = () => import("./marketing.p-atelier-DKWHHmYa.mjs");
const Route = createFileRoute("/marketing/p-atelier")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Marketing | P Atelier Pilates — A Noxis Production"
    }, {
      name: "description",
      content: "A cinematic marketing showcase for the P Atelier Pilates project."
    }]
  })
});
const WorkRoute = Route$6.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$7
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const ProcessRoute = Route$4.update({
  id: "/process",
  path: "/process",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const WorkPAtelierRoute = Route$1.update({
  id: "/p-atelier",
  path: "/p-atelier",
  getParentRoute: () => WorkRoute
});
const MarketingPAtelierRoute = Route.update({
  id: "/marketing/p-atelier",
  path: "/marketing/p-atelier",
  getParentRoute: () => Route$7
});
const WorkRouteChildren = {
  WorkPAtelierRoute
};
const WorkRouteWithChildren = WorkRoute._addFileChildren(WorkRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  ProcessRoute,
  ServicesRoute,
  WorkRoute: WorkRouteWithChildren,
  MarketingPAtelierRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  logo as l,
  router as r,
  useI18n as u
};
