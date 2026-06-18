import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border px-4 py-2 rounded-full text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Innovation & Excellence Multi-Sectorielle
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Votre Partenaire pour{" "}
            <span className="text-primary">Tous Vos Projets</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            De l&apos;informatique à la construction, de la mécanique à l&apos;art, NEVIDEC 
            vous accompagne avec expertise et professionnalisme dans tous vos projets.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#services"
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              Découvrir nos services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 rounded-lg font-semibold border border-border hover:bg-secondary transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border">
          {[
            { value: "5+", label: "Domaines d'expertise" },
            { value: "100+", label: "Projets réalisés" },
            { value: "50+", label: "Clients satisfaits" },
            { value: "10+", label: "Années d'expérience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
