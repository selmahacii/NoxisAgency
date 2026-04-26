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
    "services.badge": "Expertise",
    "services.title": "Une seule équipe. Chaque couche de la tech.",
    "services.subtitle": "Nous transformons votre ambition en infrastructure numérique robuste. Pas de compromis, juste des résultats business.",
    "services.1.title": "Actifs Numériques & Croissance",
    "services.1.desc": "Nous concevons l'interface entre votre ambition et vos clients — des expériences qui retiennent, fidélisent, et convertissent.",
    "services.2.title": "Infrastructures SaaS & Métier",
    "services.2.desc": "Nous construisons vos avantages concurrentiels durables : des systèmes critiques qui automatisent vos opérations et accélèrent votre time-to-market.",
    "services.3.title": "Intelligence Data & IoT",
    "services.3.desc": "Transformez vos données en décisions stratégiques. Visualisation temps réel pour piloter votre entreprise sur la base de la réalité.",
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
    "services.badge": "خبراتنا",
    "services.title": "فريق واحد. لكل طبقات التكنولوجيا.",
    "services.subtitle": "نحول طموحاتكم إلى بنية تحتية رقمية قوية. لا تنازلات، فقط نتائج ملموسة لأعمالكم.",
    "services.1.title": "الأصول الرقمية والنمو",
    "services.1.desc": "نصمم الواجهة بين طموحكم وعملائكم — تجارب مستخدم تضمن الولاء، الاستمرارية والتحويل الفعلي.",
    "services.2.title": "أنظمة SaaS وبرمجيات الأعمال",
    "services.2.desc": "نبني مزاياكم التنافسية المستدامة: أنظمة حيوية تساهم في أتمتة عملياتكم وتسريع وصولكم للسوق.",
    "services.3.title": "ذكاء البيانات وإنترنت الأشياء",
    "services.3.desc": "حولوا بياناتكم إلى قرارات استراتيجية. عرض مباشر للبيانات لقيادة مؤسستكم بناءً على الواقع وليس التخمين.",
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
