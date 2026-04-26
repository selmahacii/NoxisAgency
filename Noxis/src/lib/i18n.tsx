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
    "nav.quote": "Obtenir un devis",

    "hero.badge": "Studio Tech Senior",
    "hero.title": "Nous ne construisons pas des logiciels. Nous construisons votre avantage concurrentiel.",
    "hero.subtitle":
      "Studio technique senior basé à Alger — spécialisé dans les systèmes critiques pour la Fintech, la Santé et la Distribution.",
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
    "hero.subtitle":
      "ستوديو تقني خبير مقره الجزائر العاصمة — متخصص في الأنظمة الحيوية للتكنولوجيا المالية، الصحة والتوزيع.",
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
