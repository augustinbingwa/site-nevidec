import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Nos Services | NEVIDEC",
  description: "Découvrez tous les services proposés par NEVIDEC : informatique, construction, mécanique, santé, incubation et art & design.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-transparent border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Nos <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Une expertise diversifiée pour répondre à tous vos besoins professionnels. 
            Découvrez nos six domaines d&apos;activité et trouvez la solution adaptée à votre projet.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className={`group bg-gradient-to-br ${service.color} rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:scale-[1.02]`}
                >
                  <div className="p-4 bg-background/50 rounded-xl w-fit mb-6">
                    <Icon size={40} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.subServices.slice(0, 3).map((sub, index) => (
                      <span
                        key={index}
                        className="text-xs bg-background/50 px-3 py-1 rounded-full"
                      >
                        {sub.title}
                      </span>
                    ))}
                  </div>

                  <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight size={18} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Vous avez un <span className="text-primary">projet</span> en tête ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 text-pretty">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins. 
            Notre équipe d&apos;experts est prête à vous accompagner dans la réalisation de vos projets.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contactez-nous
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
