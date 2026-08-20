import { ExternalLink } from "@/components/site/ExternalLink";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { grupo, escolas } from "@/content/grupo";
import { navLinks, school, whatsappLink } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={grupo.logo}
            alt="Logo Escolas do Criar"
            width={72}
            height={72}
            loading="lazy"
            className="h-18 w-18 object-contain"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {grupo.nome} — {escolas.map((e) => e.nome).join(" e ")}. {grupo.descricao}
          </p>
          <div className="mt-5 flex gap-3">
            <ExternalLink
              href={school.social.instagram}
              aria-label="Instagram das escolas"
              className="grid size-11 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-5" />
            </ExternalLink>
            <ExternalLink
              href={school.social.facebook}
              aria-label="Facebook das escolas"
              className="grid size-11 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Facebook className="size-5" />
            </ExternalLink>
          </div>
        </div>

        <nav aria-label="Links rápidos">
          <h2 className="font-display text-lg font-bold text-primary">Links rápidos</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.slice(1).map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-bold text-primary">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {school.address.street}
                <br />
                {school.address.city} — {school.address.zip}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={school.phoneHref} className="hover:text-primary">
                {school.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle
                className="mt-0.5 size-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <ExternalLink href={whatsappLink} className="hover:text-primary">
                WhatsApp {school.whatsapp}
              </ExternalLink>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${school.email}`} className="hover:text-primary">
                {school.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {grupo.nome} — Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-primary">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-primary">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
