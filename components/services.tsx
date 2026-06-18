"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"

export function Services() {
  const [activeService, setActiveService] = useState(services[0].id)
  const currentService = services.find(s => s.id === activeService)

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Nos <span className="text-primary">Domaines</span> d&apos;Activité
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Une expertise diversifiée pour répondre à tous vos besoins professionnels
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all ${
                  activeService === service.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                <Icon size={20} />
                <span className="hidden sm:inline">{service.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Service Content */}
        {currentService && (
          <div className="animate-in fade-in duration-300">
            <div className={`bg-gradient-to-br ${currentService.color} rounded-2xl p-8 lg:p-12 border border-border`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-background/50 rounded-xl">
                    <currentService.icon size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold">{currentService.title}</h3>
                    <p className="text-muted-foreground">{currentService.description}</p>
                  </div>
                </div>
                <Link
                  href={`/services/${currentService.slug}`}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
                >
                  En savoir plus
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentService.subServices.map((sub, index) => (
                  <div
                    key={index}
                    className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
                  >
                    <sub.icon size={24} className="text-primary mb-4" />
                    <h4 className="font-semibold text-lg mb-2">{sub.title}</h4>
                    <p className="text-muted-foreground text-sm">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Services Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Tous nos services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className={`group bg-gradient-to-br ${service.color} rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-background/50 rounded-lg">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg">{service.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Découvrir
                    <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
