import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "ar";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.work": "Réalisations",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.cta": "Démarrer",

    "hero.badge": "What we do",
    "hero.title": "Services built for ambitious teams.",
    "hero.subtitle":
      "Every engagement combines strategy, design, and engineering — so your roadmap never waits on a handoff.",
    "hero.cta1": "Lancer un projet",
    "hero.cta2": "Voir le showreel",
    "hero.partners": "Ils nous font confiance",

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
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.work": "أعمالنا",
    "nav.process": "منهجيتنا",
    "nav.contact": "تواصل",
    "nav.cta": "ابدأ الآن",

    "hero.badge": "وكالة تقنية تبني المستقبل.",
    "hero.title": "نبني برمجيات تدفع علاماتك التجارية إلى الأمام",
    "hero.subtitle":
      "مواقع، تطبيقات ويب، تطبيقات جوال ومنصات مخصصة. استراتيجية، تصميم وهندسة تحت سقف واحد — بسرعة عملك الحقيقية.",
    "hero.cta1": "ابدأ مشروعاً",
    "hero.cta2": "شاهد العرض",
    "hero.partners": "يثقون بنا",

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
  },
};

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("noxis-lang") as Lang | null) : null;
    if (stored === "fr" || stored === "ar") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("noxis-lang", l);
  };

  const t = (key: string) => dictionaries[lang][key] ?? key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
