import Image from "next/image"
import { Facebook, Linkedin, Mail, MessageCircle } from "lucide-react"
import type { Member } from "@/lib/organisation-data"

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function MemberCard({ member }: { member: Member }) {
  const { social } = member

  const socialItems = [
    { key: "facebook", href: social.facebook, label: "Facebook", icon: <Facebook size={18} /> },
    { key: "whatsapp", href: social.whatsapp, label: "WhatsApp", icon: <MessageCircle size={18} /> },
    { key: "linkedin", href: social.linkedin, label: "LinkedIn", icon: <Linkedin size={18} /> },
    { key: "x", href: social.x, label: "X", icon: <XIcon size={16} /> },
    { key: "mail", href: social.mail, label: "Email", icon: <Mail size={18} /> },
  ].filter((item) => Boolean(item.href))

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={`Photo de ${member.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold">{member.name}</h3>
        <p className="text-sm text-primary font-medium mt-1">{member.title}</p>

        <div className="flex items-center justify-center gap-2 mt-4">
          {socialItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} de ${member.name}`}
              className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
