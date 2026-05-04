import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

import kahootVideo from "@/assets/Kahoot/IMG_5234.MP4";
import kahootImg from "@/assets/Kahoot/image.png";
import kahootG1 from "@/assets/Kahoot/image copy.png";
import kahootG2 from "@/assets/Kahoot/image copy 2.png";
import kahootG3 from "@/assets/Kahoot/image copy 3.png";
import kahootG4 from "@/assets/Kahoot/image copy 4.png";
import kahootG5 from "@/assets/Kahoot/image copy 5.png";

import moistleafVideo from "@/assets/Moistleaf/Moistleaf.mp4";
import moistleafImg from "@/assets/Moistleaf/image.png";
import moistleafG1 from "@/assets/Moistleaf/image copy.png";
import moistleafG2 from "@/assets/Moistleaf/image copy 2.png";
import moistleafG3 from "@/assets/Moistleaf/image copy 3.png";

import maisonOrelieVideo from "@/assets/MaisonOrélie/MaisonOrelie.mp4";
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

import elMalikaVideo from "@/assets/Elmalika/Elmalika.mp4";
import elMalikaImg from "@/assets/Elmalika/image.png";
import elMalikaG1 from "@/assets/Elmalika/image copy.png";
import elMalikaG2 from "@/assets/Elmalika/image copy 2.png";
import elMalikaG3 from "@/assets/Elmalika/image copy 3.png";
import elMalikaG4 from "@/assets/Elmalika/image copy 4.png";

import meeyNailshopVideo from "@/assets/MeeyNailshop/MeeyNailshop.mp4";
import meeyNailshopImg from "@/assets/MeeyNailshop/image.png";
import meeyNailshopG1 from "@/assets/MeeyNailshop/image copy.png";
import meeyNailshopG2 from "@/assets/MeeyNailshop/image copy 2.png";
import meeyNailshopG3 from "@/assets/MeeyNailshop/image copy 3.png";
import meeyNailshopG4 from "@/assets/MeeyNailshop/image copy 4.png";
import meeyNailshopG5 from "@/assets/MeeyNailshop/image copy 5.png";
import meeyNailshopG6 from "@/assets/MeeyNailshop/image copy 6.png";
import meeyNailshopG7 from "@/assets/MeeyNailshop/image copy 7.png";
import meeyNailshopG8 from "@/assets/MeeyNailshop/image copy 8.png";

import furniSpaceVideo from "@/assets/FurniSpace/FurniSpace.mp4";
import furniSpaceImg from "@/assets/FurniSpace/image.png";

import fiscAlgerieImg from "@/assets/FiscAlgerie/image.png";
import fiscAlgerieG1 from "@/assets/FiscAlgerie/image copy.png";
import fiscAlgerieG2 from "@/assets/FiscAlgerie/image copy 2.png";

import earioImg from "@/assets/earo/image.png";
import earioG1 from "@/assets/earo/image copy.png";
import earioG2 from "@/assets/earo/image copy 2.png";
import earioG3 from "@/assets/earo/image copy 3.png";
import earioG4 from "@/assets/earo/image copy 4.png";
import earioG5 from "@/assets/earo/image copy 5.png";
import earioG6 from "@/assets/earo/image copy 6.png";
import earioG7 from "@/assets/earo/image copy 7.png";
import earioG8 from "@/assets/earo/image copy 8.png";
import earioG9 from "@/assets/earo/image copy 9.png";
import earioG10 from "@/assets/earo/image copy 10.png";
import earioG11 from "@/assets/earo/image copy 11.png";
import earioG12 from "@/assets/earo/image copy 12.png";
import earioG13 from "@/assets/earo/image copy 13.png";

import soleVideo from "@/assets/sole/Screen Video (28).mp4";
import soleImg from "@/assets/sole/image.png";
import soleG1 from "@/assets/sole/image copy.png";
import soleG2 from "@/assets/sole/image copy 2.png";
import soleG3 from "@/assets/sole/image copy 3.png";
import soleG4 from "@/assets/sole/image copy 4.png";
import soleG5 from "@/assets/sole/image copy 5.png";
import soleG6 from "@/assets/sole/image copy 6.png";
import soleG7 from "@/assets/sole/image copy 7.png";
import soleG8 from "@/assets/sole/image copy 8.png";
import soleG9 from "@/assets/sole/image copy 9.png";

import zenMedImg from "@/assets/ZenMed/image.png";
import zenMedG1 from "@/assets/ZenMed/image copy.png";
import zenMedG2 from "@/assets/ZenMed/image copy 2.png";
import zenMedG3 from "@/assets/ZenMed/image copy 3.png";
import zenMedG4 from "@/assets/ZenMed/image copy 4.png";
import zenMedG5 from "@/assets/ZenMed/image copy 5.png";
import zenMedG6 from "@/assets/ZenMed/image copy 6.png";
import zenMedG7 from "@/assets/ZenMed/image copy 7.png";
import zenMedG8 from "@/assets/ZenMed/image copy 8.png";
import zenMedG9 from "@/assets/ZenMed/image copy 9.png";

import medicareVideo from "@/assets/Medicaredz/Screen Video (29).mp4";
import medicareImg from "@/assets/Medicaredz/image.png";
import medicareG1 from "@/assets/Medicaredz/image copy.png";
import medicareG2 from "@/assets/Medicaredz/image copy 2.png";
import medicareG3 from "@/assets/Medicaredz/image copy 3.png";
import medicareG4 from "@/assets/Medicaredz/image copy 4.png";
import medicareG5 from "@/assets/Medicaredz/image copy 5.png";
import medicareG6 from "@/assets/Medicaredz/image copy 6.png";
import medicareG7 from "@/assets/Medicaredz/image copy 7.png";
import medicareG8 from "@/assets/Medicaredz/image copy 8.png";

import noxisLogisticsVideo from "@/assets/Noxis/Screen Video (30).mp4";
import noxisLogisticsImg from "@/assets/Noxis/image.png";
import noxisLogisticsG1 from "@/assets/Noxis/image copy.png";
import noxisLogisticsG2 from "@/assets/Noxis/image copy 2.png";
import noxisLogisticsG3 from "@/assets/Noxis/image copy 3.png";
import noxisLogisticsG4 from "@/assets/Noxis/image copy 4.png";
import noxisLogisticsG5 from "@/assets/Noxis/image copy 5.png";
import noxisLogisticsG6 from "@/assets/Noxis/image copy 6.png";

import teraImg from "@/assets/Tera/image.png";
import teraG1 from "@/assets/Tera/image copy.png";
import teraG2 from "@/assets/Tera/image copy 2.png";
import teraG3 from "@/assets/Tera/image copy 3.png";
import teraG4 from "@/assets/Tera/image copy 4.png";
import teraG5 from "@/assets/Tera/image copy 5.png";
import teraG6 from "@/assets/Tera/image copy 6.png";
import teraG7 from "@/assets/Tera/image copy 7.png";

import atlasImg from "@/assets/concepts/atlas.png";
import meridianImg from "@/assets/concepts/meridian.png";
import saharaImg from "@/assets/concepts/sahara.png";

import pAtelierVideo from "@/assets/pAtelierpilates/Screen Video (35).mp4";
import pAtelierImg from "@/assets/pAtelierpilates/image.png";
import pAtelierG1 from "@/assets/pAtelierpilates/image copy.png";
import pAtelierG2 from "@/assets/pAtelierpilates/image copy 2.png";
import pAtelierG3 from "@/assets/pAtelierpilates/image copy 3.png";
import pAtelierG4 from "@/assets/pAtelierpilates/image copy 4.png";

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
  isConcept?: boolean;
}

export const projects: Project[] = [
  {
    id: "p-atelier-pilates",
    title: "Atelier Pilates",
    category: "Luxury Wellness — Pilates Studio",
    year: "2026",
    client: "P Atelier",
    duration: "4 semaines",
    image: pAtelierImg,
    video: pAtelierVideo,
    gallery: [pAtelierImg, pAtelierG1, pAtelierG2, pAtelierG3, pAtelierG4],
    summary: "Prototype de site web premium pour un studio de Pilates, axé sur le luxe calme et le minimalisme.",
    challenge: "Récréer l'expérience immersive d'un studio de Pilates haut de gamme à travers un mouvement fluide, une esthétique terreuse et une typographie éditoriale.",
    description: "Une vitrine numérique haute fidélité avec une UX narrative, des animations sur mesure et une palette de couleurs soignée (blanc cassé chaud, sable). Le design privilégie l'espace et la clarté pour refléter la discipline et la sérénité du Pilates.",
    services: ["Stratégie Digitale", "Design UI/UX", "Branding de Luxe", "Motion Design"],
    stack: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    results: [
      { label: "Esthétique", value: "Éditoriale" },
      { label: "UX", value: "Immersive" },
      { label: "Vitesse", value: "Optimisée" },
    ],
  },
  {
    id: "dar-al-malika",
    title: "Dar Al Malika",
    category: "Full-Stack — E-commerce Mode Modeste de Luxe",
    year: "2025",
    client: "Dar Al Malika",
    duration: "18 semaines",
    image: elMalikaImg,
    video: elMalikaVideo,
    gallery: [elMalikaImg, elMalikaG1, elMalikaG2, elMalikaG3, elMalikaG4],
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
    gallery: [moistleafImg, moistleafG1, moistleafG2, moistleafG3],
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
    id: "nora-furniture",
    title: "Nora Furniture",
    category: "Décoration — Design d'Intérieur",
    year: "2024",
    client: "Nora Designs",
    duration: "10 semaines",
    image: noraFurnitureImg,
    gallery: [noraFurnitureImg, noraFurnitureG1, noraFurnitureG2, noraFurnitureG3, noraFurnitureG4, noraFurnitureG5, noraFurnitureG6],
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
    gallery: [meeyNailshopImg, meeyNailshopG1, meeyNailshopG2, meeyNailshopG3, meeyNailshopG4, meeyNailshopG5, meeyNailshopG6, meeyNailshopG7, meeyNailshopG8],
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
    id: "fisc-algerie",
    title: "FiscAlgérie",
    category: "Fintech — Dashboard de Gestion",
    year: "2025",
    client: "FiscAlgérie",
    duration: "16 semaines",
    image: fiscAlgerieImg,
    gallery: [fiscAlgerieImg, fiscAlgerieG1, fiscAlgerieG2],
    summary: "Solution SaaS de gestion fiscale et financière pour les entreprises.",
    challenge: "Digitaliser et simplifier la gestion fiscale complexe pour les entreprises algériennes via une interface intuitive.",
    description: "Développement d'un tableau de bord robuste permettant de suivre les déclarations, les échéances et les flux financiers. Le système intègre des calculs automatisés et un archivage sécurisé des documents fiscaux.",
    services: ["Fintech Dashboard", "Architecture Cloud", "Sécurité de Données"],
    stack: ["React", "Go", "PostgreSQL", "Docker"],
    results: [
      { label: "Précision", value: "95%" },
      { label: "Gain Temps", value: "x4" },
      { label: "Utilisateurs", value: "200+" },
    ],
    onlyWorkPage: true,
  },
  {
    id: "eario",
    title: "Eario.ai",
    category: "SaaS — ERP & CRM Intelligent",
    year: "2025",
    client: "Eario.ai",
    duration: "15 semaines",
    image: earioImg,
    gallery: [earioImg, earioG1, earioG2, earioG3, earioG4, earioG5, earioG6, earioG7, earioG8, earioG9, earioG10, earioG11, earioG12, earioG13],
    summary: "Plateforme unifiée de gestion d’entreprise remplaçant la fragmentation des outils par un système intelligent centralisé.",
    challenge: "Supprimer la complexité des outils déconnectés (CRM, ERP, finance) en créant un hub opérationnel unique où chaque donnée circule en temps réel.",
    description: "Eario.ai est structuré autour de 5 piliers : Sales Pipeline, Clients, Invoices, Inventory et Finance, avec une couche d'IA (Insights) pour les prévisions et recommandations business. La plateforme transforme les données brutes en actions concrètes.",
    services: ["Architecture SaaS", "Design UI/UX", "Intelligence Artificielle", "Gestion de Données"],
    stack: ["Next.js", "Python (AI)", "PostgreSQL", "Tailwind CSS"],
    results: [
      { label: "Productivité", value: "+40%" },
      { label: "Visibilité", value: "Temps Réel" },
      { label: "Décisions", value: "IA Assistée" },
    ],
    onlyWorkPage: true,
  },
  {
    id: "sole",
    title: "Sole",
    category: "Full-Stack — E-commerce de Chaussures Premium",
    year: "2025",
    client: "Sole Global",
    duration: "14 semaines",
    image: soleImg,
    video: soleVideo,
    gallery: [soleImg, soleG1, soleG2, soleG3, soleG4, soleG5, soleG6, soleG7, soleG8, soleG9],
    summary: "Plateforme e-commerce moderne pour chaussures avec une interface minimaliste inspirée de Framer.",
    challenge: "Créer un écosystème de vente complet alliant performance extrême, animations fluides et gestion d'inventaire multi-catégories (Homme, Femme, Enfant).",
    description: "Sole redéfinit l'achat de chaussures en ligne avec des transitions fluides, un filtrage avancé et un tunnel d'achat optimisé pour la conversion. Le système inclut un dashboard complet pour la gestion des stocks et des commandes.",
    services: ["UX/UI Design", "E-commerce Architecture", "Motion Design", "Admin Dashboard"],
    stack: ["React", "Framer Motion", "Node.js", "Tailwind CSS", "PostgreSQL"],
    results: [
      { label: "Conversion", value: "+45%" },
      { label: "Performance", value: "99/100" },
      { label: "Mobile First", value: "100%" },
    ],
    onlyWorkPage: true,
  },
  {
    id: "medicaredz",
    title: "Medicare.dz",
    category: "HealthTech — Système de Gestion de Santé Intégré",
    year: "2024",
    client: "Medicare Algeria",
    duration: "20 semaines",
    image: medicareImg,
    video: medicareVideo,
    gallery: [medicareImg, medicareG1, medicareG2, medicareG3, medicareG4, medicareG5, medicareG6, medicareG7, medicareG8],
    summary: "Plateforme de gestion hospitalière et de prise de rendez-vous médicaux pour le marché algérien.",
    challenge: "Digitaliser le parcours de soin en Algérie en créant une interface unifiée pour les patients, les médecins et les hôpitaux.",
    description: "Medicare.dz est une solution full-stack permettant la gestion des dossiers patients, la planification des ressources hospitalières et une prise de rendez-vous simplifiée. L'architecture garantit la sécurité des données de santé et une accessibilité optimale.",
    services: ["Architecture Cloud", "Dossier Médical Partagé", "SaaS Médical", "UI/UX Santé"],
    stack: ["Next.js", "PostgreSQL", "Redis", "Docker", "Go"],
    results: [
      { label: "Patients", value: "+100k" },
      { label: "Temps Attente", value: "-70%" },
      { label: "Disponibilité", value: "99.9%" },
    ],
    onlyWorkPage: true,
  },
  {
    id: "zenmed",
    title: "ZenMed",
    category: "HealthTech — Plateforme de Soins Préventifs",
    year: "2025",
    client: "ZenMed Healthcare US",
    duration: "18 semaines",
    image: zenMedImg,
    gallery: [zenMedImg, zenMedG1, zenMedG2, zenMedG3, zenMedG4, zenMedG5, zenMedG6, zenMedG7, zenMedG8, zenMedG9],
    summary: "Solution haut de gamme de gestion de rendez-vous et de suivi médical axée sur l'expérience patient aux États-Unis.",
    challenge: "Concevoir une interface minimaliste qui réduit l'anxiété liée aux rendez-vous médicaux tout en respectant les normes HIPAA.",
    description: "ZenMed combine une gestion intelligente des agendas médicaux avec des outils de télémédecine et de suivi post-consultation. La plateforme offre une navigation ultra-fluide pour les patients et un tableau de bord analytique puissant.",
    services: ["Design UI/UX Zen", "Conformité HIPAA", "Télémédecine", "Système de Rappels IA"],
    stack: ["React", "Node.js", "AWS HealthLake", "Tailwind CSS", "Framer Motion"],
    results: [
      { label: "No-Show Rate", value: "-40%" },
      { label: "Satisfaction", value: "4.9/5" },
      { label: "Booking Speed", value: "30s" },
    ],
  },
  {
    id: "noxis-logistics",
    title: "Noxis Logistics",
    category: "SaaS — OS de Logistique & Last-Mile",
    year: "2025",
    client: "Noxis Solutions",
    duration: "22 semaines",
    image: noxisLogisticsImg,
    video: noxisLogisticsVideo,
    gallery: [noxisLogisticsImg, noxisLogisticsG1, noxisLogisticsG2, noxisLogisticsG3, noxisLogisticsG4, noxisLogisticsG5, noxisLogisticsG6],
    summary: "Solution SaaS de gestion de flotte et de livraison dernier kilomètre optimisée pour le marché algérien.",
    challenge: "Gérer le suivi en temps réel des chauffeurs, l'optimisation des tournées et la réconciliation financière des paiements à la livraison (COD) à grande échelle.",
    description: "Noxis Logistics est un système d'exploitation complet pour les prestataires de livraison. Il intègre un suivi GPS haute précision, un algorithme de routage intelligent et une passerelle de paiement automatisée pour BaridiMob et CIB.",
    services: ["Architecture SaaS", "Optimisation Temps Réel", "Système de Paiement COD", "Fleet Tracking"],
    stack: ["React", "Node.js", "Redis", "Google Maps API", "PostgreSQL"],
    results: [
      { label: "Efficacité", value: "+35%" },
      { label: "Suivi COD", value: "100%" },
      { label: "Livraisons/jour", value: "5k+" },
    ],
  },
  {
    id: "tera",
    title: "Tera",
    category: "PropTech — Plateforme d'Investissement Immobilier",
    year: "2025",
    client: "Tera Group",
    duration: "16 semaines",
    image: teraImg,
    gallery: [teraImg, teraG1, teraG2, teraG3, teraG4, teraG5, teraG6, teraG7],
    summary: "Écosystème numérique pour la promotion immobilière de luxe et la gestion d'actifs.",
    challenge: "Simplifier l'accès à l'investissement immobilier via une interface architecturale et des outils de suivi transparents.",
    description: "Tera redéfinit l'expérience immobilière avec un dashboard investisseur complet, des visualisations haute fidélité et une gestion dématérialisée des dossiers d'acquisition.",
    services: ["UX/UI Design Architecturel", "SaaS Immobilier", "Architecture Cloud", "Dashboard Investisseur"],
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    results: [
      { label: "Réservations", value: "+30%" },
      { label: "Satisfaction", value: "4.8/5" },
      { label: "Transparence", value: "100%" },
    ],
    onlyWorkPage: true,
  },
  {
    id: "atlas-banking",
    title: "ATLAS Banking OS",
    category: "Fintech — Concept Studio",
    year: "2026",
    client: "Concept R&D",
    duration: "Concept",
    image: atlasImg,
    summary: "Système d'exploitation bancaire nouvelle génération pour le pilotage stratégique.",
    challenge: "Moderniser l'infrastructure de pilotage des banques algériennes avec une visualisation temps réel des indicateurs critiques.",
    description: "Une interface Liquid-Glass style Bloomberg Terminal conçue pour les DG et DAF. Architecture microservices avec WebSocket pour un monitoring sans latence des flux financiers.",
    services: ["Architecture Fintech", "Data Visualization", "Systèmes Temps Réel"],
    stack: ["React", "Go", "WebSockets", "PostgreSQL"],
    results: [
      { label: "Vitesse Flux", value: "<10ms" },
      { label: "Conformité", value: "BAFI" },
      { label: "Pilotage", value: "IA" },
    ],
    isConcept: true,
  },
  {
    id: "meridian-retail",
    title: "MERIDIAN Platform",
    category: "Retail Tech — Concept Studio",
    year: "2026",
    client: "Concept R&D",
    duration: "Concept",
    image: meridianImg,
    summary: "Retail Intelligence Platform pour la grande distribution algérienne.",
    challenge: "Optimiser la supply chain et le parcours client en magasin via l'IoT et l'IA prédictive.",
    description: "Cartographie 3D interactive with overlay of heatmaps. Analyse du trafic par Computer Vision et forecasting intelligent des ruptures de stock.",
    services: ["IoT Distribution", "Computer Vision", "IA Prédictive"],
    stack: ["Python", "Three.js", "MQTT", "TensorFlow"],
    results: [
      { label: "Optimisation", value: "+25%" },
      { label: "Précision Stock", value: "99%" },
      { label: "Insight", value: "Temps Réel" },
    ],
    isConcept: true,
    onlyWorkPage: true,
  },
  {
    id: "sahara-data",
    title: "SAHARA Economic Dashboard",
    category: "Data Viz — Moonshot Studio",
    year: "2026",
    client: "Open Source / Public",
    duration: "In Progress",
    image: saharaImg,
    summary: "Dashboard d'intelligence économique sur la macroéconomie algérienne.",
    challenge: "Faire parler les données économiques de l'Algérie via une interface WebGL immersive et des pipelines automatisés.",
    description: "Un globe 3D interactif visualisant les flux commerciaux, l'inflation et les indicateurs ONS. Un outil d'autorité pour les décideurs et chercheurs.",
    services: ["Economic Intelligence", "WebGL / Three.js", "Data Engineering"],
    stack: ["Three.js", "D3.js", "Python Scraping", "Vercel"],
    results: [
      { label: "Indicateurs", value: "50+" },
      { label: "Mise à jour", value: "Auto" },
      { label: "Portée", value: "Nationale" },
    ],
    onlyWorkPage: true,
    isConcept: true,
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
    gallery: [kahootImg, kahootG1, kahootG2, kahootG3, kahootG4, kahootG5],
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

function ProjectCard({ p, onClick }: { p: Project; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative liquid-glass rounded-[2rem] overflow-hidden text-left w-full block transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3"
    >
      <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
        {/* Static Image */}
        <motion.img
          src={p.image}
          alt={p.title}
          loading="lazy"
          animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered && p.video ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Video Reveal on Hover */}
        {p.video && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              ref={videoRef}
              src={p.video}
              poster={p.image}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        )}

        {/* Overlays */}
        {/* Overlays removed for full visibility */}
        
        {/* Top Right Action Button */}
        <div className="absolute top-8 right-8 liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
          <ArrowUpRight className="h-6 w-6 text-foreground" />
        </div>
        
        {/* Content Info moved below for full visibility */}
      </div>

      <div className="p-10 pt-6">
        <motion.div 
           animate={{ y: isHovered ? 0 : 5, opacity: isHovered ? 1 : 0.8 }}
           className="text-[10px] uppercase tracking-[0.4em] text-primary font-body mb-3 font-bold"
        >
          {p.category}
        </motion.div>
        <h3 className="text-3xl md:text-4xl font-heading italic text-foreground leading-none tracking-tight">
          {p.title}
        </h3>
        
        <div className="mt-6 flex items-center gap-6 opacity-60 group-hover:opacity-100 transition-all duration-700">
           <div className="flex flex-col">
             <span className="text-[9px] uppercase tracking-widest text-foreground/30 font-body mb-1">Year</span>
             <span className="text-[10px] uppercase tracking-widest text-foreground/60 font-body">{p.year}</span>
           </div>
           <div className="h-6 w-px bg-foreground/10" />
           <div className="flex flex-col">
             <span className="text-[9px] uppercase tracking-widest text-foreground/30 font-body mb-1">Client</span>
             <span className="text-[10px] uppercase tracking-widest text-foreground/60 font-body">{p.client}</span>
           </div>
        </div>
      </div>
        
        {/* Concept Badge */}
        {p.isConcept && (
          <div className="absolute top-8 left-8">
            <span className="bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-bold px-5 py-2 rounded-full backdrop-blur-xl shadow-lg">
              Concept Studio
            </span>
          </div>
        )}
      </div>
    </button>
  );
}

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

  const filteredProjects = projects.filter(p => !p.onlyWorkPage);
  // Duplicate for infinite marquee
  const marqueeProjects = [...filteredProjects, ...filteredProjects, ...filteredProjects];

  return (
    <section className="px-6 lg:px-16 py-32 max-w-screen-2xl mx-auto overflow-hidden">
      <Reveal>
        <div className="text-center mb-24">
          <div className="liquid-glass inline-block rounded-full px-5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground font-body mb-8 border border-foreground/5 shadow-sm">
            {t("portfolio.badge")}
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-foreground tracking-tighter leading-[0.85] mb-8">
            {t("portfolio.title")}
          </h2>
          <p className="text-foreground/50 font-body font-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t("portfolio.subtitle")}
          </p>
        </div>
      </Reveal>

      {showAll ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.filter(p => !p.onlyWorkPage || showAll).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <ProjectCard p={p} onClick={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="relative -mx-6 lg:-mx-16">
          {/* Main Scrolling Container */}
          <div className="flex overflow-hidden group">
            <motion.div
              className="flex gap-8 px-4"
              animate={{
                x: ["0%", "-33.333%"], // Since we tripled the list, we move 1/3 of the width
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ transition: { duration: 120 } }} // Slow down on hover
            >
              {marqueeProjects.map((p, i) => (
                <div
                  key={`${p.id}-${i}`}
                  className="flex-shrink-0 w-[85vw] sm:w-[500px] md:w-[650px]"
                >
                  <ProjectCard p={p} onClick={() => setActive(p)} />
                </div>
              ))}
            </motion.div>
          </div>
          
          
          <div className="mt-16 flex justify-center opacity-40 hover:opacity-100 transition-opacity">
             <div className="flex items-center gap-4 py-2 px-6 rounded-full border border-foreground/5 bg-foreground/[0.02]">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-[9px] uppercase tracking-[0.4em] text-foreground/60 font-bold">
                   Infinite Rolling Billboard — Click to Explore
                </p>
             </div>
          </div>
        </div>
      )}

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
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative liquid-glass rounded-[2.5rem] overflow-hidden max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-background shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-foreground/5"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-6 right-6 z-10 liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="relative overflow-hidden bg-background/50">
                {active.video ? (
                  <video
                    src={active.video}
                    poster={active.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full object-cover"
                  />
                ) : (
                  <img src={active.image} alt={active.title} className="w-full h-auto max-h-[70vh] object-contain mx-auto" />
                )}
                {/* Shade removed for full visibility */}
              </div>

              <div className="p-12 pb-0">
                <div className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-body mb-4 font-semibold">
                  {active.category} · {active.year}
                </div>
                <h3 className="text-5xl md:text-7xl font-heading italic text-foreground leading-none tracking-tighter">
                  {active.title}
                </h3>
                <div className="flex gap-4 mt-10">
                  {active.isConcept && (
                    <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold px-5 py-2 rounded-full shadow-lg">
                      Concept Studio
                    </span>
                  )}
                  {active.id === "p-atelier-pilates" && (
                    <a
                      href="/work/p-atelier"
                      target="_blank"
                      className="bg-[#C2A98A] text-white text-[10px] uppercase tracking-widest font-bold px-8 py-3 rounded-full hover:bg-[#A78B6D] transition-all hover:scale-105 shadow-lg"
                    >
                      View Live Prototype
                    </a>
                  )}
                </div>
              </div>

              <div className="p-10 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
                  {/* Left Column: Story & Media */}
                  <div className="lg:col-span-2 space-y-16">
                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-foreground/5 pb-16">
                      {[
                        { l: t("portfolio.client"), v: active.client },
                        { l: t("portfolio.year"), v: active.year },
                        { l: t("portfolio.duration"), v: active.duration },
                        { l: t("portfolio.category"), v: active.category },
                      ].map((m) => (
                        <div key={m.l} className="space-y-2">
                          <div className="text-[9px] uppercase tracking-[0.2em] text-foreground/30 font-body font-bold">{m.l}</div>
                          <div className="text-foreground font-body text-sm font-medium">{m.v}</div>
                        </div>
                      ))}
                    </div>

                    {/* Brief Sections */}
                    <div className="space-y-16">
                      <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-primary font-body font-bold">
                          01 / Le Défi
                        </h4>
                        <p className="text-3xl md:text-5xl font-heading italic text-foreground leading-[1.1] tracking-tight">
                          {active.challenge}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-primary font-body font-bold">
                          02 / L'Approche
                        </h4>
                        <p className="text-foreground/70 font-body font-light text-lg md:text-xl leading-relaxed max-w-3xl">
                          {active.description}
                        </p>
                      </div>
                    </div>

                    {/* Video Demo Section */}
                    {active.video && (
                      <div className="space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-primary font-body font-bold">
                          03 / Immersion
                        </h4>
                        <div className="liquid-glass rounded-[2rem] overflow-hidden aspect-video border border-foreground/5 shadow-2xl">
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
                      <div className="space-y-8 pt-8">
                        <div className="flex justify-between items-end">
                          <div className="space-y-2">
                            <h4 className="text-[10px] uppercase tracking-[0.4em] text-primary font-body font-bold">04 / Artefacts</h4>
                            <p className="text-sm text-foreground/40 font-body">Sélection visuelle du projet</p>
                          </div>
                          <div className="flex gap-2 mb-2">
                            {active.gallery.map((_, i) => (
                              <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-700 ${i === galleryIndex ? 'w-8 bg-primary' : 'w-2 bg-foreground/10'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
                          <motion.div
                            className="flex gap-6"
                            animate={{ x: `-${galleryIndex * 80}%` }}
                            transition={{ type: "spring", stiffness: 120, damping: 25 }}
                            drag="x"
                            dragConstraints={{ left: -2000, right: 0 }}
                            onDragEnd={(_, info) => {
                              if (info.offset.x < -100 && galleryIndex < (active.gallery?.length || 1) - 1) {
                                setGalleryIndex(prev => prev + 1);
                              } else if (info.offset.x > 100 && galleryIndex > 0) {
                                setGalleryIndex(prev => prev - 1);
                              }
                            }}
                          >
                            {active.gallery.map((g, i) => (
                              <motion.div
                                key={i}
                                className="flex-[0_0_90%] sm:flex-[0_0_80%] min-w-0"
                                whileTap={{ scale: 0.98 }}
                              >
                                <button
                                  onClick={() => setEnlarge(g)}
                                  className="group/gallery liquid-glass rounded-[1.5rem] overflow-hidden aspect-[16/10] relative cursor-zoom-in w-full block border border-foreground/5"
                                >
                                  <img
                                    src={g}
                                    alt={`${active.title} ${i + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/gallery:scale-105"
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
                  <div className="space-y-16">
                    {/* Stats Grid */}
                    <div className="space-y-8">
                      <h4 className="text-[10px] uppercase tracking-[0.4em] text-foreground/30 font-body font-bold">Performance</h4>
                      <div className="space-y-8">
                        {active.results.map((r) => (
                          <div key={r.label} className="group border-b border-foreground/5 pb-8 last:border-0 transition-all hover:translate-x-2">
                            <div className="text-5xl md:text-6xl font-heading italic text-foreground leading-none mb-3 group-hover:text-primary transition-colors">
                              {r.value}
                            </div>
                            <div className="text-foreground/40 font-body font-medium text-[9px] uppercase tracking-[0.3em]">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services & Stack */}
                    <div className="space-y-12">
                      <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-foreground/30 font-body font-bold">Savoir-faire</h4>
                        <div className="flex flex-wrap gap-2">
                          {active.services.map((s) => (
                            <span key={s} className="bg-foreground/[0.03] text-foreground/70 rounded-full px-5 py-2 text-xs font-medium font-body border border-foreground/5 hover:bg-foreground/5 transition-colors">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-foreground/30 font-body font-bold">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {active.stack.map((s) => (
                            <span key={s} className="bg-primary/[0.03] text-primary rounded-full px-5 py-2 text-xs font-semibold font-body border border-primary/5 hover:bg-primary/[0.07] transition-colors">
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
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/98 backdrop-blur-3xl cursor-zoom-out"
            onClick={() => setEnlarge(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              onClick={() => setEnlarge(null)}
            >
              <X className="h-10 w-10" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              src={enlarge}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
