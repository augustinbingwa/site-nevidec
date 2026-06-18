import { 
  Monitor, 
  Building2, 
  Wrench, 
  GraduationCap, 
  Palette,
  HeartPulse,
  Network,
  HardDrive,
  Code,
  Home,
  Building,
  Car,
  Cog,
  Users,
  BookOpen,
  Brush,
  PenTool,
  Stethoscope,
  Database,
  MessageSquare,
  type LucideIcon
} from "lucide-react"

export interface SubService {
  icon: LucideIcon
  title: string
  description: string
  details?: string[]
}

export interface Service {
  id: string
  slug: string
  icon: LucideIcon
  title: string
  description: string
  longDescription: string
  color: string
  bgImage?: string
  subServices: SubService[]
  features: string[]
}

export const services: Service[] = [
  {
    id: "informatique",
    slug: "informatique",
    icon: Monitor,
    title: "Informatique",
    description: "Solutions numériques complètes pour votre entreprise",
    longDescription: "NEVIDEC propose des solutions informatiques complètes et personnalisées pour accompagner la transformation digitale de votre entreprise. Notre équipe d'experts maîtrise les technologies les plus récentes pour développer des applications performantes, sécuriser vos infrastructures réseau et assurer la maintenance de vos systèmes.",
    color: "from-blue-500/20 to-cyan-500/20",
    subServices: [
      { 
        icon: Code, 
        title: "Développement Logiciel", 
        description: "Applications web, mobiles et logiciels sur mesure",
        details: [
          "Applications web modernes (React, Next.js, Vue.js)",
          "Applications mobiles iOS et Android",
          "Logiciels de gestion sur mesure",
          "API et services backend",
          "Intégration de systèmes existants"
        ]
      },
      { 
        icon: Network, 
        title: "Réseau", 
        description: "Installation, configuration et sécurisation de réseaux",
        details: [
          "Architecture réseau entreprise",
          "Configuration de routeurs et switches",
          "Mise en place de VPN sécurisés",
          "Audit de sécurité réseau",
          "Solutions Wi-Fi professionnelles"
        ]
      },
      { 
        icon: HardDrive, 
        title: "Maintenance", 
        description: "Support technique et maintenance informatique",
        details: [
          "Maintenance préventive et curative",
          "Support technique 24/7",
          "Gestion de parc informatique",
          "Sauvegarde et récupération de données",
          "Mises à jour et optimisation"
        ]
      },
    ],
    features: [
      "Équipe certifiée et expérimentée",
      "Technologies de pointe",
      "Support réactif 24/7",
      "Solutions évolutives",
      "Sécurité renforcée"
    ]
  },
  {
    id: "construction",
    slug: "construction",
    icon: Building2,
    title: "Construction",
    description: "Projets de construction publics et privés",
    longDescription: "Fort de plusieurs années d'expérience dans le secteur du BTP, NEVIDEC réalise des projets de construction de qualité, qu'ils soient publics ou privés. Notre expertise couvre l'ensemble du processus de construction, de la conception à la livraison finale.",
    color: "from-orange-500/20 to-amber-500/20",
    subServices: [
      { 
        icon: Building, 
        title: "Projets Publics", 
        description: "Infrastructures et bâtiments publics",
        details: [
          "Bâtiments administratifs",
          "Établissements scolaires",
          "Infrastructures de santé",
          "Équipements sportifs",
          "Ouvrages d'art"
        ]
      },
      { 
        icon: Home, 
        title: "Projets Privés", 
        description: "Résidences et locaux commerciaux",
        details: [
          "Maisons individuelles",
          "Immeubles résidentiels",
          "Locaux commerciaux",
          "Entrepôts et usines",
          "Rénovation et extension"
        ]
      },
    ],
    features: [
      "Respect des délais",
      "Qualité des matériaux",
      "Normes de sécurité strictes",
      "Suivi personnalisé",
      "Garantie décennale"
    ]
  },
  {
    id: "mecanique",
    slug: "mecanique",
    icon: Wrench,
    title: "Mécanique",
    description: "Services automobiles professionnels",
    longDescription: "Notre département mécanique automobile offre des services complets pour l'entretien, la réparation et le diagnostic de tous types de véhicules. Nos techniciens qualifiés utilisent des équipements de pointe pour garantir un service de qualité.",
    color: "from-red-500/20 to-rose-500/20",
    subServices: [
      { 
        icon: Car, 
        title: "Automobile", 
        description: "Réparation et entretien de véhicules",
        details: [
          "Entretien périodique",
          "Réparation moteur",
          "Système de freinage",
          "Climatisation",
          "Pneumatiques"
        ]
      },
      { 
        icon: Cog, 
        title: "Diagnostic", 
        description: "Diagnostic électronique et mécanique",
        details: [
          "Diagnostic électronique complet",
          "Analyse des pannes",
          "Contrôle technique",
          "Mise à jour logicielle",
          "Rapport détaillé"
        ]
      },
    ],
    features: [
      "Techniciens certifiés",
      "Équipements modernes",
      "Pièces d'origine",
      "Devis gratuit",
      "Garantie sur les réparations"
    ]
  },
  {
    id: "incubation",
    slug: "incubation",
    icon: GraduationCap,
    title: "Incubation",
    description: "Formation et accompagnement professionnel",
    longDescription: "NEVIDEC accompagne les entrepreneurs et professionnels dans leur développement à travers des programmes de formation et d'incubation sur mesure. Notre objectif est de vous fournir les compétences et outils nécessaires pour réussir vos projets.",
    color: "from-green-500/20 to-emerald-500/20",
    subServices: [
      { 
        icon: Users, 
        title: "Formation", 
        description: "Programmes de formation professionnelle",
        details: [
          "Formation en informatique",
          "Gestion de projet",
          "Entrepreneuriat",
          "Marketing digital",
          "Compétences techniques"
        ]
      },
      { 
        icon: BookOpen, 
        title: "Accompagnement", 
        description: "Mentorat et suivi de projets",
        details: [
          "Coaching personnalisé",
          "Mentorat d'affaires",
          "Accès aux ressources",
          "Mise en réseau",
          "Suivi de progression"
        ]
      },
    ],
    features: [
      "Formateurs experts",
      "Programmes certifiants",
      "Approche pratique",
      "Suivi personnalisé",
      "Réseau de partenaires"
    ]
  },
  {
    id: "art",
    slug: "art-design",
    icon: Palette,
    title: "Art & Design",
    description: "Créativité et design pour votre image",
    longDescription: "Notre équipe créative vous accompagne dans tous vos projets artistiques et de design. De l'identité visuelle aux créations artistiques, nous donnons vie à vos idées avec passion et professionnalisme.",
    color: "from-purple-500/20 to-pink-500/20",
    subServices: [
      { 
        icon: Brush, 
        title: "Design Graphique", 
        description: "Identité visuelle et supports marketing",
        details: [
          "Création de logos",
          "Charte graphique",
          "Supports print",
          "Design web",
          "Packaging"
        ]
      },
      { 
        icon: PenTool, 
        title: "Création Artistique", 
        description: "Œuvres d'art et décoration",
        details: [
          "Peintures et illustrations",
          "Sculptures",
          "Décoration intérieure",
          "Art mural",
          "Installations artistiques"
        ]
      },
    ],
    features: [
      "Créativité sans limite",
      "Approche personnalisée",
      "Artistes talentueux",
      "Matériaux de qualité",
      "Délais respectés"
    ]
  },
  {
    id: "sante",
    slug: "sante",
    icon: HeartPulse,
    title: "Santé",
    description: "Solutions numériques et technologiques pour le secteur de la santé",
    longDescription: "NEVIDEC accompagne les établissements et professionnels de santé dans leur transformation numérique. Nous concevons des logiciels métiers dédiés à la santé, assurons la maintenance des équipements médicaux, déployons des solutions de gestion et de collecte de données de santé sécurisées, et mettons en place des outils de communication en temps réel entre les services de santé et les patients.",
    color: "from-teal-500/20 to-emerald-500/20",
    subServices: [
      { 
        icon: Stethoscope, 
        title: "Logiciels de Santé", 
        description: "Applications et logiciels métiers pour les professionnels de santé",
        details: [
          "Dossier patient informatisé (DPI)",
          "Logiciels de gestion de cabinet et de clinique",
          "Systèmes de prise de rendez-vous en ligne",
          "Applications de télémédecine et téléconsultation",
          "Solutions de prescription électronique"
        ]
      },
      { 
        icon: Wrench, 
        title: "Maintenance des Équipements", 
        description: "Maintenance et support des équipements médicaux",
        details: [
          "Maintenance préventive et curative des dispositifs médicaux",
          "Calibrage et contrôle de conformité des appareils",
          "Support technique des équipements connectés",
          "Mises à jour logicielles des dispositifs",
          "Gestion du parc d'équipements biomédicaux"
        ]
      },
      { 
        icon: Database, 
        title: "Gestion des Données de Santé", 
        description: "Collecte, stockage et analyse sécurisée des données de santé",
        details: [
          "Collecte structurée des données patients",
          "Stockage sécurisé et conforme (confidentialité médicale)",
          "Tableaux de bord et analyse statistique",
          "Interopérabilité entre systèmes de santé",
          "Sauvegarde et protection des données sensibles"
        ]
      },
      { 
        icon: MessageSquare, 
        title: "Communication en Temps Réel", 
        description: "Communication instantanée entre services de santé et patients",
        details: [
          "Messagerie sécurisée patient-soignant",
          "Notifications et rappels de rendez-vous automatisés",
          "Suivi à distance et alertes en temps réel",
          "Partage instantané d'informations entre services",
          "Plateforme de coordination des soins"
        ]
      },
    ],
    features: [
      "Conformité et confidentialité des données médicales",
      "Solutions interopérables et évolutives",
      "Équipements suivis et fiables",
      "Communication instantanée et sécurisée",
      "Support technique disponible 24/7"
    ]
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug)
}
