import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Phone, Mail } from "lucide-react"
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    return { title: "Service non trouvé | NEVIDEC" }
  }

  return {
    title: `${service.title} | NEVIDEC`,
    description: service.longDescription,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon
  const currentIndex = services.findIndex(s => s.slug === slug)
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <>
      <Header />
      <main className="pt-20">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${service.color} py-20 lg:py-32 border-b border-border`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Retour aux services
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="p-6 bg-background/50 rounded-2xl">
              <Icon size={64} className="text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Services */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Nos <span className="text-primary">Services</span>
          </h2>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {service.subServices.map((sub, index) => (
              <div
                key={index}
                className="bg-secondary/30 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6">
                  <sub.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{sub.title}</h3>
                <p className="text-muted-foreground mb-6">{sub.description}</p>
                
                {sub.details && (
                  <ul className="space-y-3">
                    {sub.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Pourquoi choisir <span className="text-primary">NEVIDEC</span> ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty leading-relaxed">
                Nous nous engageons à fournir des services de qualité supérieure, 
                adaptés à vos besoins spécifiques. Notre équipe d&apos;experts est 
                dédiée à votre satisfaction.
              </p>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Check size={20} className="text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12 border border-border">
              <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
              <p className="text-muted-foreground mb-8">
                Intéressé par nos services {service.title.toLowerCase()} ? 
                N&apos;hésitez pas à nous contacter pour discuter de votre projet.
              </p>
              <div className="space-y-4 mb-8">
                <a 
                  href="tel:+123456789" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={20} className="text-primary" />
                  <span>+1 234 567 89</span>
                </a>
                <a 
                  href="mailto:contact@nevidec.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={20} className="text-primary" />
                  <span>contact@nevidec.com</span>
                </a>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Demander un devis
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Découvrez nos <span className="text-primary">autres services</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter(s => s.slug !== slug)
              .slice(0, 3)
              .map((otherService) => {
                const OtherIcon = otherService.icon
                return (
                  <Link
                    key={otherService.id}
                    href={`/services/${otherService.slug}`}
                    className={`group bg-gradient-to-br ${otherService.color} rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:scale-[1.02]`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-background/50 rounded-lg">
                        <OtherIcon size={24} className="text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">{otherService.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{otherService.description}</p>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Découvrir
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-sm block">Précédent</span>
                  <span className="font-semibold">{prevService.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextService ? (
              <Link
                href={`/services/${nextService.slug}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group text-right"
              >
                <div>
                  <span className="text-sm block">Suivant</span>
                  <span className="font-semibold">{nextService.title}</span>
                </div>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
