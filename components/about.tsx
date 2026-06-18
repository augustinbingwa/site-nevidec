import { CheckCircle, Target, Eye, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, en dépassant les attentes de nos clients."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Une approche collaborative pour comprendre et répondre à vos besoins spécifiques."
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Nous adoptons les dernières technologies et méthodes pour des solutions modernes."
  },
  {
    icon: CheckCircle,
    title: "Intégrité",
    description: "Transparence et honnêteté sont au cœur de toutes nos relations professionnelles."
  },
]

export function About() {
  return (
    <section id="apropos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              À Propos de <span className="text-primary">NEVIDEC</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              NEVIDEC est une entreprise multi-sectorielle dédiée à fournir des solutions 
              professionnelles de haute qualité dans cinq domaines clés : l&apos;informatique, 
              la construction, la mécanique automobile, l&apos;incubation et l&apos;art & design.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Notre équipe d&apos;experts passionnés s&apos;engage à accompagner chaque client 
              avec professionnalisme, innovation et un souci constant de la satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Équipe multidisciplinaire",
                "Solutions sur mesure",
                "Support continu",
                "Prix compétitifs",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
