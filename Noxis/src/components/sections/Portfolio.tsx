import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence, useMotionValue } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";
import kahootVideo from "@/assets/Kahoot/IMG_5234.MP4";
import kahootImg from "@/assets/Kahoot/image.png";
import kahootG1 from "@/assets/Kahoot/image copy.png";
import kahootG2 from "@/assets/Kahoot/image copy 2.png";
import kahootG3 from "@/assets/Kahoot/image copy 3.png";
import kahootG4 from "@/assets/Kahoot/image copy 4.png";
import kahootG5 from "@/assets/Kahoot/image copy 5.png";

import moistleafVideo from "@/assets/Moistleaf/Screen Video (19).mp4";
import moistleafImg from "@/assets/Moistleaf/image.png";
import moistleafG1 from "@/assets/Moistleaf/image copy.png";
import moistleafG2 from "@/assets/Moistleaf/image copy 2.png";
import moistleafG3 from "@/assets/Moistleaf/image copy 3.png";

import maisonOrelieVideo from "@/assets/MaisonOrélie/Screen Video (22).mp4";
import maisonOrelieImg from "@/assets/MaisonOrélie/image.png";
import maisonOrelieG1 from "@/assets/MaisonOrélie/image copy.png";
import maisonOrelieG2 from "@/assets/MaisonOrélie/image copy 2.png";
import maisonOrelieG3 from "@/assets/MaisonOrélie/image copy 3.png";
import maisonOrelieG4 from "@/assets/MaisonOrélie/image copy 4.png";
import maisonOrelieG5 from "@/assets/MaisonOrélie/image copy 5.png";

import noraFurnitureImg from "@/assets/NoraFurniture/image.png";
import noraFurnitureG1 from "@/assets/NoraFurniture/image copy.png";
import noraFurnitureG2 from "@/assets/NoraFurniture/image copy 2.png";
import noraFurnitureG3 from "@/assets/NoraFurniture/image copy 3.png";
import noraFurnitureG4 from "@/assets/NoraFurniture/image copy 4.png";
import noraFurnitureG5 from "@/assets/NoraFurniture/image copy 5.png";
import noraFurnitureG6 from "@/assets/NoraFurniture/image copy 6.png";



import elMalikaVideo from "@/assets/Elmalika/Screen Video (26).mp4";
import elMalikaImg from "@/assets/Elmalika/image.png";
import elMalikaG1 from "@/assets/Elmalika/image copy.png";
import elMalikaG2 from "@/assets/Elmalika/image copy 2.png";
import elMalikaG3 from "@/assets/Elmalika/image copy 3.png";
import elMalikaG4 from "@/assets/Elmalika/image copy 4.png";

import meeyNailshopVideo from "@/assets/MeeyNailshop/Screen Video (27).mp4";
import meeyNailshopImg from "@/assets/MeeyNailshop/image.png";
import meeyNailshopG1 from "@/assets/MeeyNailshop/image copy.png";
import meeyNailshopG2 from "@/assets/MeeyNailshop/image copy 2.png";
import meeyNailshopG3 from "@/assets/MeeyNailshop/image copy 3.png";
import meeyNailshopG4 from "@/assets/MeeyNailshop/image copy 4.png";
import meeyNailshopG5 from "@/assets/MeeyNailshop/image copy 5.png";
import meeyNailshopG6 from "@/assets/MeeyNailshop/image copy 6.png";
import meeyNailshopG7 from "@/assets/MeeyNailshop/image copy 7.png";
import meeyNailshopG8 from "@/assets/MeeyNailshop/image copy 8.png";

import furniSpaceVideo from "@/assets/FurniSpace/FurniSpace (2).mp4";

import fiscAlgerieImg from "@/assets/FiscAlgerie/image.png";
import fiscAlgerieG1 from "@/assets/FiscAlgerie/image copy.png";
import fiscAlgerieG2 from "@/assets/FiscAlgerie/image copy 2.png";



export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  image: string;
  summary: string;
  challenge: string;
  description: string;
  services: string[];
  stack: string[];
  results: { label: string; value: string }[];
  duration: string;
  gallery?: string[];
  video?: string;
  onlyWorkPage?: boolean;
}

export const projects: Project[] = [
  {
    id: "dar-al-malika",
    title: "Dar Al Malika",
    category: "Full-Stack — E-commerce Mode Modeste de Luxe",
    year: "2025",
    client: "Dar Al Malika",
    duration: "18 semaines",
    image: elMalikaImg,
    video: elMalikaVideo,
    gallery: [elMalikaG1, elMalikaG2, elMalikaG3, elMalikaG4],
    summary: "Écosystème e-commerce complet avec inventaire en temps réel et esthétique haute couture.",
    challenge: "Développer une solution de vente en ligne complète alliant une interface 'Couture' à une infrastructure backend robuste capable de gérer un inventaire complexe.",
    description: "Une plateforme e-commerce haute performance intégrant une logique de panier complexe, une synchronisation d'inventaire en temps réel et une architecture de données optimisée pour la conversion et le storytelling fluide.",
    services: ["Architecture Full-Stack", "E-commerce Couture", "Gestion d'Inventaire", "Optimisation Conversion"],
    stack: ["React", "Node.js", "PostgreSQL", "Framer Motion", "Stripe"],
    results: [
      { label: "Conversion", value: "+65%" },
      { label: "Inventaire", value: "Temps Réel" },
      { label: "Satisfaction UX", value: "4.9/5" },
    ],
  },
  {
    id: "moistleaf",
    title: "Moistleaf",
    category: "Santé & Bien-être — IoT",
    year: "2025",
    client: "Moistleaf Systems",
    duration: "16 semaines",
    image: moistleafImg,
    video: moistleafVideo,
    gallery: [moistleafG1, moistleafG2, moistleafG3],
    summary: "Système intelligent de surveillance de l'hydratation et du soin des plantes pour les espaces urbains.",
    challenge: "Traduire des données complexes de capteurs environnementaux en une interface simple et élégante qui encourage une interaction consciente avec la nature.",
    description: "Développement d'une application mobile complète et d'un tableau de bord connectés au matériel IoT de Moistleaf, fournissant des alertes d'hydratation en temps réel et des analyses environnementales.",
    services: ["Intégration IoT", "Design Mobile", "Visualisation de Données"],
    stack: ["React Native", "MQTT", "InfluxDB", "AWS IoT"],
    results: [
      { label: "Survie Plantes", value: "98%" },
      { label: "Usage Quotidien", value: "85%" },
      { label: "Connectivité", value: "99.9%" },
    ],
  },
  {
    id: "maison-orelie",
    title: "Maison Orélie",
    category: "Haute Couture — E-commerce",
    year: "2025",
    client: "Maison Orélie Paris",
    duration: "14 semaines",
    image: maisonOrelieImg,
    video: maisonOrelieVideo,
    gallery: [maisonOrelieG1, maisonOrelieG2, maisonOrelieG3, maisonOrelieG4, maisonOrelieG5],
    summary: "Flagship numérique pour une maison de mode parisienne de luxe.",
    challenge: "Créer une expérience numérique qui reflète l'exclusivité et le savoir-faire de leur boutique physique tout en maintenant des taux de conversion élevés.",
    description: "Une solution de commerce headless avec storytelling cinématographique, visualisation de produits en 3D immersive et un processus de paiement mondial fluide.",
    services: ["Branding de Luxe", "Stratégie UX", "Commerce Headless"],
    stack: ["Next.js", "Shopify Hydrogen", "Three.js", "Sanity"],
    results: [
      { label: "Conversion", value: "+52%" },
      { label: "Panier Moyen", value: "+40%" },
      { label: "Engagement", value: "x3" },
    ],
  },
  {
    id: "nora-furniture",
    title: "Nora Furniture",
    category: "Décoration — Design d'Intérieur",
    year: "2024",
    client: "Nora Designs",
    duration: "10 semaines",
    image: noraFurnitureImg,
    gallery: [noraFurnitureG1, noraFurnitureG2, noraFurnitureG3, noraFurnitureG4, noraFurnitureG5, noraFurnitureG6],
    summary: "Marque de mobilier durable mettant l'accent sur l'artisanat et l'impact environnemental.",
    challenge: "Présenter les textures uniques et les origines durables de chaque meuble via un support numérique.",
    description: "Conception d'une plateforme e-commerce éditoriale qui met en avant l'histoire de chaque matériau, utilisant des images haute résolution et un storytelling interactif.",
    services: ["Stratégie de Marque", "Design Éditorial", "Développement E-commerce"],
    stack: ["Astro", "Tailwind CSS", "Payload CMS", "Vercel"],
    results: [
      { label: "Revenus", value: "+75%" },
      { label: "Score Durable", value: "A+" },
      { label: "Trafic Mobile", value: "+60%" },
    ],
  },
  {
    id: "meey-nailshop",
    title: "Meey Nailshop",
    category: "Beauté — E-commerce & Booking",
    year: "2024",
    client: "Meey Nailshop Paris",
    duration: "10 semaines",
    image: meeyNailshopImg,
    video: meeyNailshopVideo,
    gallery: [meeyNailshopG1, meeyNailshopG2, meeyNailshopG3, meeyNailshopG4, meeyNailshopG5, meeyNailshopG6, meeyNailshopG7, meeyNailshopG8],
    summary: "Expérience numérique élégante pour un salon de manucure haut de gamme, intégrant réservation et boutique.",
    challenge: "Concevoir une plateforme fluide qui permet aux clientes de prendre rendez-vous facilement tout en découvrant les produits exclusifs du salon.",
    description: "Une solution hybride alliant un système de réservation temps réel et une boutique e-commerce optimisée. L'interface mise sur des tons doux et des animations subtiles pour refléter l'ambiance du salon.",
    services: ["Design UI/UX", "Système de Réservation", "E-commerce Hybride"],
    stack: ["Vite", "React", "Supabase", "Stripe"],
    results: [
      { label: "Rendez-vous", value: "+120%" },
      { label: "Ventes Produits", value: "+45%" },
      { label: "Temps Booking", value: "-60%" },
    ],
    onlyWorkPage: true,
  },
  {
    id: "furnispace",
    title: "FurniSpace",
    category: "E-commerce — Mobilier 3D",
    year: "2024",
    client: "FurniSpace Global",
    duration: "12 semaines",
    image: "", // Video will be used as primary
    video: furniSpaceVideo,
    summary: "Plateforme immersive de vente de mobilier avec rendu haute fidélité.",
    challenge: "Créer une expérience d'achat immersive pour du mobilier haut de gamme avec visualisation spatiale et fluidité extrême.",
    description: "Noxis a développé une plateforme e-commerce innovante mettant l'accent sur le rendu visuel. L'interface minimaliste laisse place aux produits, tandis qu'une infrastructure backend solide gère des milliers de références en temps réel.",
    services: ["Design UI/UX", "E-commerce Performance", "Motion Design"],
    stack: ["Next.js", "Three.js", "Tailwind CSS", "Sanity"],
    results: [
      { label: "Engagement", value: "+85%" },
      { label: "Conversion", value: "+30%" },
      { label: "Vitesse", value: "98/100" },
    ],
  },
  {
    id: "fisc-algerie",
    title: "Fisc Algérie",
    category: "Fintech — Dashboard de Gestion",
    year: "2025",
    client: "Fisc Algérie",
    duration: "16 semaines",
    image: fiscAlgerieImg,
    gallery: [fiscAlgerieG1, fiscAlgerieG2],
    summary: "Solution SaaS de gestion fiscale et financière pour les entreprises.",
    challenge: "Digitaliser et simplifier la gestion fiscale complexe pour les entreprises algériennes via une interface intuitive.",
    description: "Développement d'un tableau de bord robuste permettant de suivre les déclarations, les échéances et les flux financiers. Le système intègre des calculs automatisés et un archivage sécurisé des documents fiscaux.",
    services: ["Fintech Dashboard", "Architecture Cloud", "Sécurité de Données"],
    stack: ["React", "Go", "PostgreSQL", "Docker"],
    results: [
      { label: "Précision", value: "100%" },
      { label: "Gain Temps", value: "x4" },
      { label: "Utilisateurs", value: "500+" },
    ],
    onlyWorkPage: true,
  },
];

export const hiddenProjects: Project[] = [
  {
    id: "kahoot",
    title: "Kahoot Réimaginé",
    category: "EdTech — Apprentissage Interactif",
    year: "2025",
    client: "Kahoot! Global",
    duration: "12 semaines",
    image: kahootImg,
    video: kahootVideo,
    gallery: [kahootG1, kahootG2, kahootG3, kahootG4, kahootG5],
    summary: "Plateforme d'apprentissage interactive de nouvelle génération avec engagement en temps réel amélioré.",
    challenge: "Réimaginer l'expérience Kahoot pour l'enseignement supérieur et la formation en entreprise, nécessitant une esthétique sophistiquée et un suivi de données avancé.",
    description: "Noxis a conçu un nouveau langage visuel et un tableau de bord en temps réel pour Kahoot, axé sur les interactions rapides et les résultats éducatifs clairs.",
    services: ["Direction Créative", "Architecture UI", "Systèmes Temps Réel"],
    stack: ["React", "WebSocket", "Node.js", "Redis"],
    results: [
      { label: "Engagement", value: "+45%" },
      { label: "Rétention", value: "+30%" },
      { label: "Latence", value: "<10ms" },
    ],
  },
];


export function Portfolio({ showAll = false }: { showAll?: boolean }) {
  const [active, setActive] = useState<Project | null>(null);
  const [enlarge, setEnlarge] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const { t } = useI18n();

  // Reset gallery index when changing project
  useEffect(() => {
    setGalleryIndex(0);
  }, [active]);

  // External trigger for hidden projects
  useEffect(() => {
    const handleOpenProject = (e: any) => {
      const projectId = e.detail;
      const project = [...projects, ...hiddenProjects].find(p => p.id === projectId);
      if (project) {
        setActive(project);
      }
    };

    window.addEventListener("open-project", handleOpenProject);
    return () => window.removeEventListener("open-project", handleOpenProject);
  }, []);

  // Auto-play gallery
  useEffect(() => {
    if (!active || !active.gallery || active.gallery.length <= 1) return;
    
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % active.gallery!.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="px-6 lg:px-16 py-32 max-w-screen-2xl mx-auto">
      <Reveal>
        <div className="text-center mb-16">
          <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
            {t("portfolio.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
            {t("portfolio.title")}
          </h2>
          <p className="text-foreground/60 font-body font-light text-base max-w-xl mx-auto mt-6">
            {t("portfolio.subtitle")}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.filter(p => showAll || !p.onlyWorkPage).map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <button
              onClick={() => setActive(p)}
              className="group liquid-glass rounded-2xl overflow-hidden text-left w-full block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4 liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-body mb-2">
                    {p.category} · {p.year}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading italic text-foreground leading-tight">
                    {p.title}
                  </h3>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative liquid-glass rounded-3xl overflow-hidden max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-background"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[16/9] overflow-hidden">
                {active.video ? (
                  <video
                    src={active.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-xs uppercase tracking-widest text-foreground/60 font-body mb-2">
                    {active.category} · {active.year} · {active.client}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-heading italic text-foreground leading-tight">
                    {active.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
                  {/* Left Column: Story & Media */}
                  <div className="lg:col-span-2 space-y-12">
                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { l: t("portfolio.client"), v: active.client },
                        { l: t("portfolio.year"), v: active.year },
                        { l: t("portfolio.duration"), v: active.duration },
                        { l: t("portfolio.category"), v: active.category },
                      ].map((m) => (
                        <div key={m.l} className="space-y-1">
                          <div className="text-[10px] uppercase tracking-[0.15em] text-foreground/40 font-body">{m.l}</div>
                          <div className="text-foreground font-body text-sm font-medium">{m.v}</div>
                        </div>
                      ))}
                    </div>

                    {/* Brief Sections */}
                    <div className="space-y-10">
                      <div className="space-y-4">
                        <h4 className="text-sm uppercase tracking-widest text-primary font-body font-semibold">
                          01 / Le Défi
                        </h4>
                        <p className="text-xl md:text-2xl font-heading italic text-foreground leading-snug">
                          {active.challenge}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm uppercase tracking-widest text-primary font-body font-semibold">
                          02 / Ce qu'on a livré
                        </h4>
                        <p className="text-foreground/70 font-body font-light text-base md:text-lg leading-relaxed">
                          {active.description}
                        </p>
                      </div>
                    </div>

                    {/* Video Demo Section */}
                    {active.video && (
                      <div className="space-y-4">
                        <h4 className="text-sm uppercase tracking-widest text-primary font-body font-semibold">
                          03 / Démo
                        </h4>
                        <div className="liquid-glass rounded-3xl overflow-hidden aspect-video border border-foreground/5 shadow-2xl">
                          <video
                            src={active.video}
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* Gallery Section */}
                    {active.gallery && active.gallery.length > 0 && (
                      <div className="space-y-6 pt-6">
                        <div className="flex justify-between items-center">
                          <h4 className="text-sm uppercase tracking-widest text-foreground/40 font-body">Galerie</h4>
                          <div className="flex gap-1.5">
                            {active.gallery.map((_, i) => (
                              <div 
                                key={i} 
                                className={`h-1 rounded-full transition-all duration-500 ${i === galleryIndex ? 'w-4 bg-primary' : 'w-1 bg-foreground/10'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
                          <motion.div
                            className="flex gap-4"
                            animate={{ x: `-${galleryIndex * 75}%` }}
                            transition={{ type: "spring", stiffness: 150, damping: 25 }}
                            drag="x"
                            dragConstraints={{ left: -1000, right: 0 }}
                            onDragEnd={(_, info) => {
                              if (info.offset.x < -50 && galleryIndex < (active.gallery?.length || 1) - 1) {
                                setGalleryIndex(prev => prev + 1);
                              } else if (info.offset.x > 50 && galleryIndex > 0) {
                                setGalleryIndex(prev => prev - 1);
                              }
                            }}
                          >
                            {active.gallery.map((g, i) => (
                              <motion.div 
                                key={i} 
                                className="flex-[0_0_85%] sm:flex-[0_0_70%] min-w-0"
                                whileTap={{ scale: 0.98 }}
                              >
                                <button
                                  onClick={() => setEnlarge(g)}
                                  className="group/gallery liquid-glass rounded-2xl overflow-hidden aspect-[16/10] relative cursor-zoom-in w-full block"
                                >
                                  <img
                                    src={g}
                                    alt={`${active.title} ${i + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/gallery:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-white/0 group-hover/gallery:bg-white/5 transition-colors duration-500" />
                                </button>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Stats & Tech */}
                  <div className="space-y-12">
                    {/* Stats Grid */}
                    <div className="space-y-4">
                      <h4 className="text-sm uppercase tracking-widest text-foreground/40 font-body">Résultats</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {active.results.map((r) => (
                          <div key={r.label} className="liquid-glass rounded-2xl p-5 border border-foreground/5 hover:border-primary/20 transition-colors">
                            <div className="text-3xl font-heading italic text-foreground leading-none mb-1">
                              {r.value}
                            </div>
                            <div className="text-foreground/50 font-body font-light text-xs uppercase tracking-wider">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services & Stack */}
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-sm uppercase tracking-widest text-foreground/40 font-body">Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {active.services.map((s) => (
                            <span key={s} className="bg-foreground/5 text-foreground/70 rounded-full px-4 py-1.5 text-xs font-medium font-body border border-foreground/5">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm uppercase tracking-widest text-foreground/40 font-body">Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {active.stack.map((s) => (
                            <span key={s} className="bg-primary/5 text-primary rounded-full px-4 py-1.5 text-xs font-medium font-body border border-primary/10">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {enlarge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setEnlarge(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setEnlarge(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={enlarge}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
