"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { services } from "@/lib/services-data"

const navLinks = [
  { href: "/", label: "Accueil" },
  { 
    href: "/services", 
    label: "Services",
    dropdown: services.map(s => ({
      href: `/services/${s.slug}`,
      label: s.title,
      icon: s.icon
    }))
  },
  { href: "/organisation", label: "Organisation" },
  { href: "/#apropos", label: "À Propos" },
  { href: "/#contact", label: "Contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="NEVIDEC Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div 
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-background border border-border rounded-xl shadow-lg py-2 min-w-[220px]">
                        {link.dropdown.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors"
                            >
                              <Icon size={18} className="text-primary" />
                              <span>{item.label}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              href="/#contact"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Contactez-nous
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon size={16} className="text-primary" />
                            {item.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link
                href="/#contact"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Contactez-nous
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
