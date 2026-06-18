import Image from "next/image"
import Link from "next/link"
import { services } from "@/lib/services-data"

const footerLinks = {
  services: services.map(s => ({
    label: s.title,
    href: `/services/${s.slug}`
  })),
  company: [
    { label: "À Propos", href: "/#apropos" },
    { label: "Contact", href: "/#contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="NEVIDEC Logo"
                width={180}
                height={50}
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-muted-foreground max-w-md mb-6 text-pretty">
              NEVIDEC - Votre partenaire de confiance pour tous vos projets en 
              informatique, construction, mécanique, santé, incubation et art & design.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NEVIDEC. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
