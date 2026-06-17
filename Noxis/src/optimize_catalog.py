import re

file_path = r"c:\Users\ZBOOK\Downloads\NoxisAgency\Noxis\src\components\sections\Portfolio.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

replacements = {
    # P Atelier
    r'summary: "Prototype de site web premium pour un studio de Pilates, axé sur le luxe calme et le minimalisme."':
    r'summary: "Plateforme digitale et vitrine premium pour un studio de Pilates, axée sur le luxe calme et la conversion."',
    
    r'challenge: "Récréer l\'expérience immersive d\'un studio de Pilates haut de gamme à travers un mouvement fluide, une esthétique terreuse et une typographie éditoriale."':
    r'challenge: "Récréer l\'expérience exclusive d\'un studio haut de gamme avec une infrastructure numérique performante et une UX narrative captivante."',
    
    r'description: "Une vitrine numérique haute fidélité avec une UX narrative, des animations sur mesure et une palette de couleurs soignée \(blanc cassé chaud, sable\). Le design privilégie l\'espace et la clarté pour refléter la discipline et la sérénité du Pilates."':
    r'description: "Une solution digitale haute fidélité intégrant une esthétique éditoriale soignée et des animations fluides. Conçue pour maximiser l\'engagement, l\'interface reflète la sérénité du Pilates tout en offrant une navigation ultra-optimisée."',

    # El Huyam
    r'summary: "Écosystème e-commerce complet avec inventaire en temps réel et esthétique haute couture."':
    r'summary: "Écosystème e-commerce haute couture avec gestion d\'inventaire en temps réel et infrastructure orientée conversion."',
    
    r'challenge: "Développer une solution de vente en ligne complète alliant une interface \'Couture\' à une infrastructure backend robuste capable de gérer un inventaire complexe."':
    r'challenge: "Bâtir une architecture de vente de luxe capable de scaler, alliant une vitrine digitale premium à un backend logistique robuste."',
    
    r'description: "Une plateforme e-commerce haute performance intégrant une logique de panier complexe, une synchronisation d\'inventaire en temps réel et une architecture de données optimisée pour la conversion et le storytelling fluide."':
    r'description: "Plateforme e-commerce sur-mesure ultra-rapide. L\'intégration de processus de paiement fluides, d\'une synchronisation d\'inventaire stricte et d\'un tableau de bord de gestion avancé permet de maximiser le ROI tout en offrant une expérience client sans friction."',

    # Moistleaf
    r'summary: "Système intelligent de surveillance de l\'hydratation et du soin des plantes pour les espaces urbains."':
    r'summary: "Système IoT intelligent et interface SaaS de surveillance environnementale pour l\'optimisation des espaces verts urbains."',

    r'challenge: "Traduire des données complexes de capteurs environnementaux en une interface simple et élégante qui encourage une interaction consciente avec la nature."':
    r'challenge: "Convertir des flux de données IoT complexes en une interface décisionnelle élégante, fiable et centrée sur l\'engagement utilisateur."',
    
    r'description: "Développement d\'une application mobile complète et d\'un tableau de bord connectés au matériel IoT de Moistleaf, fournissant des alertes d\'hydratation en temps réel et des analyses environnementales."':
    r'description: "Développement d\'une infrastructure cloud et d\'une application de pointe connectées au matériel IoT Moistleaf. Une architecture résiliente assurant des alertes en temps réel et des analyses prédictives."',

    # Nora Furniture
    r'summary: "Marque de mobilier durable mettant l\'accent sur l\'artisanat et l\'impact environnemental."':
    r'summary: "Plateforme e-commerce haut de gamme de mobilier durable, optimisée pour un storytelling immersif et des performances de vente."',
    
    r'challenge: "Présenter les textures uniques et les origines durables de chaque meuble via un support numérique."':
    r'challenge: "Transposer le luxe et la texture de l\'artisanat durable dans une expérience numérique ultra-rapide et génératrice de revenus."',
    
    r'description: "Conception d\'une plateforme e-commerce éditoriale qui met en avant l\'histoire de chaque matériau, utilisant des images haute résolution et un storytelling interactif."':
    r'description: "Conception d\'une architecture e-commerce moderne et éditoriale (Headless). L\'accent est mis sur des visuels haute résolution et un tunnel de conversion sans friction, offrant une expérience premium qui fidélise."',

    # Meey Nailshop
    r'summary: "Expérience numérique élégante pour un salon de manucure haut de gamme, intégrant réservation et boutique."':
    r'summary: "Infrastructure digitale hybride (E-commerce & Réservation) ultra-performante pour un salon de beauté haut de gamme."',
    
    r'challenge: "Concevoir une plateforme fluide qui permet aux clientes de prendre rendez-vous facilement tout en découvrant les produits exclusifs du salon."':
    r'challenge: "Fusionner un système de réservation temps réel complexe et une boutique de produits premium dans une interface unifiée, fluide et sécurisée."',
    
    r'description: "Une solution hybride alliant un système de réservation temps réel et une boutique e-commerce optimisée. L\'interface mise sur des tons doux et des animations subtiles pour refléter l\'ambiance du salon."':
    r'description: "Une solution e-commerce robuste misant sur des performances de pointe et une esthétique soignée. L\'automatisation des flux de rendez-vous et des paiements réduit drastiquement les frictions et booste la rentabilité."',

    # FiscAlgerie
    r'summary: "Solution SaaS de gestion fiscale et financière pour les entreprises."':
    r'summary: "Infrastructure SaaS souveraine de gestion fiscale et financière, conçue pour les systèmes critiques d\'entreprise."',
    
    r'challenge: "Digitaliser et simplifier la gestion fiscale complexe pour les entreprises algériennes via une interface intuitive."':
    r'challenge: "Développer une plateforme hautement sécurisée capable d\'automatiser et de simplifier des données fiscales complexes à grande échelle."',
    
    r'description: "Développement d\'un tableau de bord robuste permettant de suivre les déclarations, les échéances et les flux financiers. Le système intègre des calculs automatisés et un archivage sécurisé des documents fiscaux."':
    r'description: "Déploiement d\'un tableau de bord décisionnel de niveau entreprise garantissant la conformité, l\'archivage sécurisé et l\'automatisation des déclarations financières, offrant un gain de temps massif aux dirigeants."',

    # Eario
    r'summary: "Plateforme unifiée de gestion d’entreprise remplaçant la fragmentation des outils par un système intelligent centralisé."':
    r'summary: "Système ERP & CRM intelligent unifié, propulsé par l\'IA pour automatiser les opérations d\'entreprise."',
    
    r'challenge: "Supprimer la complexité des outils déconnectés \(CRM, ERP, finance\) en créant un hub opérationnel unique où chaque donnée circule en temps réel."':
    r'challenge: "Architecturer un hub opérationnel centralisé éliminant la fragmentation logicielle et offrant une visibilité financière en temps réel."',
    
    r'description: "Eario.ai est structuré autour de 5 piliers : Sales Pipeline, Clients, Invoices, Inventory et Finance, avec une couche d\'IA \(Insights\) pour les prévisions et recommandations business. La plateforme transforme les données brutes en actions concrètes."':
    r'description: "Une plateforme SaaS sur-puissante intégrant Ventes, CRM, Facturation et Inventaire. Le moteur IA prédictif transforme des données massives en recommandations stratégiques instantanées, décuplant l\'agilité business."',

    # Sole
    r'summary: "Plateforme e-commerce moderne pour chaussures avec une interface minimaliste inspirée de Framer."':
    r'summary: "Plateforme e-commerce ultra-performante pour sneakers premium, avec interface motion design et conversion optimisée."',
    
    r'challenge: "Créer un écosystème de vente complet alliant performance extrême, animations fluides et gestion d\'inventaire multi-catégories \(Homme, Femme, Enfant\)."':
    r'challenge: "Déployer une architecture e-commerce capable de supporter de forts pics de trafic tout en offrant des animations fluides dignes d\'une app native."',
    
    r'description: "Sole redéfinit l\'achat de chaussures en ligne avec des transitions fluides, un filtrage avancé et un tunnel d\'achat optimisé pour la conversion. Le système inclut un dashboard complet pour la gestion des stocks et des commandes."':
    r'description: "Une vitrine digitale radicale au tunnel d\'achat millimétré. Filtrage avancé, gestion de stock en temps réel et dashboard administrateur complet font de Sole une machine de vente redoutable."',

    # Medicare.dz
    r'summary: "Plateforme de gestion hospitalière et de prise de rendez-vous médicaux pour le marché algérien."':
    r'summary: "Infrastructure HealthTech souveraine de gestion hospitalière et de télémédecine sécurisée."',

    # Noxis Logistics
    r'summary: "Solution SaaS de gestion de flotte et de livraison dernier kilomètre optimisée pour le marché algérien."':
    r'summary: "OS Logistique de niveau entreprise pour la gestion de flotte, le tracking temps réel et l\'optimisation du dernier kilomètre."',

    # Tera
    r'summary: "Écosystème numérique pour la promotion immobilière de luxe et la gestion d\'actifs."':
    r'summary: "Écosystème PropTech ultra-sécurisé pour la promotion immobilière de luxe et la gestion de portefeuilles d\'actifs."'
}

for old, new in replacements.items():
    content = re.sub(re.escape(old), new, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updates applied.")
