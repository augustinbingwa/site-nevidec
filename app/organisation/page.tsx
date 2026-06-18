import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MemberCard } from "@/components/member-card"
import { organisation } from "@/lib/organisation-data"

export const metadata: Metadata = {
  title: "Organisation | NEVIDEC",
  description:
    "Découvrez la structure organisationnelle de NEVIDEC : le conseil, la direction générale et les directions de chaque domaine d'activité.",
}

export default function OrganisationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-transparent border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Notre <span className="text-primary">Organisation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Une structure claire et des équipes d&apos;experts à chaque niveau pour piloter
              l&apos;ensemble de nos domaines d&apos;activité avec rigueur et engagement.
            </p>
          </div>
        </section>

        {/* Organisation levels */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
            {organisation.map((level) => (
              <div key={level.id}>
                <div className="max-w-3xl mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                    {level.title}
                  </h2>
                  <div className="h-1 w-16 bg-primary rounded-full mb-4" />
                  <p className="text-muted-foreground text-pretty">{level.description}</p>
                </div>

                <div
                  className={`grid gap-6 sm:gap-8 ${
                    level.members.length === 1
                      ? "max-w-xs"
                      : "sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {level.members.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
