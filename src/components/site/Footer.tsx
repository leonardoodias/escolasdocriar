import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import logo from "@/assets/logo-castelo.png";
import { school, whatsappLink } from "@/content/site";

const quickLinks = [
  { label: "A Escola", to: "/a-escola" },
  { label: "Segmentos", to: "/segmentos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Matrículas", to: "/matriculas" },
  { label: "Contato", to: "/contato" },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Logo da Escola Castelo do Criar"
            width={64}
            height={64}
            loading="lazy"
            className="h-16 w-16 object-contain"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Educação Infantil, Ensino Fundamental e Ensino Médio em{" "}
            {school.address.city}. Conhecimento, afeto e criatividade em cada etapa.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={school.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da escola"
              className="grid size-11 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={school.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da escola"
              className="grid size-11 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Facebook className="size-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Links rápidos">
          <h2 className="font-display text-lg font-bold text-primary">Links rápidos</h2>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((l) => (
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
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp {school.whatsapp}
              </a>
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
          <p>© {new Date().getFullYear()} Escola Castelo do Criar — Todos os direitos reservados.</p>
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
