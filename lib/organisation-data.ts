export interface SocialLinks {
  facebook?: string
  whatsapp?: string
  linkedin?: string
  x?: string
  mail?: string
}

export interface Member {
  name: string
  title: string
  image: string
  social: SocialLinks
}

export interface OrgLevel {
  id: string
  title: string
  description: string
  members: Member[]
}

export const organisation: OrgLevel[] = [
  {
    id: "conseil",
    title: "Membres du Conseil",
    description: "Le conseil d'administration définit la vision stratégique et assure la gouvernance de NEVIDEC.",
    members: [
      {
        name: "Amadou Diallo",
        title: "Président du Conseil",
        image: "/team/conseil-president.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:a.diallo@nevidec.com",
        },
      },
      {
        name: "Fatou Koné",
        title: "Membre du Conseil",
        image: "/team/conseil-membre1.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:f.kone@nevidec.com",
        },
      },
      {
        name: "Ibrahim Traoré",
        title: "Membre du Conseil",
        image: "/team/conseil-membre2.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:i.traore@nevidec.com",
        },
      },
    ],
  },
  {
    id: "direction-generale",
    title: "Direction Générale",
    description: "La direction générale pilote l'ensemble des activités et coordonne les différentes directions.",
    members: [
      {
        name: "Moussa Bamba",
        title: "Directeur Général",
        image: "/team/directeur-general.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:dg@nevidec.com",
        },
      },
    ],
  },
  {
    id: "direction-informatique",
    title: "Direction Informatique",
    description: "Pilotage des projets de développement logiciel, réseau et maintenance.",
    members: [
      {
        name: "Yves Kouassi",
        title: "Directeur du Domaine Informatique",
        image: "/team/dir-informatique.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:informatique@nevidec.com",
        },
      },
    ],
  },
  {
    id: "direction-construction",
    title: "Direction Construction",
    description: "Gestion des projets de construction publics et privés.",
    members: [
      {
        name: "Seydou Ouattara",
        title: "Directeur du Domaine Construction",
        image: "/team/dir-construction.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:construction@nevidec.com",
        },
      },
    ],
  },
  {
    id: "direction-mecanique",
    title: "Direction Mécanique",
    description: "Supervision des activités de mécanique et de maintenance automobile.",
    members: [
      {
        name: "Karim Sanogo",
        title: "Directeur du Domaine Mécanique",
        image: "/team/dir-mecanique.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:mecanique@nevidec.com",
        },
      },
    ],
  },
  {
    id: "direction-sante",
    title: "Direction Santé",
    description: "Pilotage des solutions numériques et technologiques pour le secteur de la santé.",
    members: [
      {
        name: "Aïcha Cissé",
        title: "Directrice du Domaine Santé",
        image: "/team/dir-sante.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:sante@nevidec.com",
        },
      },
    ],
  },
  {
    id: "direction-incubation",
    title: "Direction Incubation",
    description: "Gestion des programmes de formation et d'incubation de projets.",
    members: [
      {
        name: "Mariam Touré",
        title: "Directrice du Domaine Incubation",
        image: "/team/dir-incubation.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:incubation@nevidec.com",
        },
      },
    ],
  },
  {
    id: "direction-art-design",
    title: "Direction Art et Design",
    description: "Supervision des projets de création artistique et de design.",
    members: [
      {
        name: "Olivier N'Guessan",
        title: "Directeur du Domaine Art et Design",
        image: "/team/dir-art-design.png",
        social: {
          facebook: "https://facebook.com",
          whatsapp: "https://wa.me/22500000000",
          linkedin: "https://linkedin.com",
          x: "https://x.com",
          mail: "mailto:art-design@nevidec.com",
        },
      },
    ],
  },
]
