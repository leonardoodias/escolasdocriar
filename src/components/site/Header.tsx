import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo-castelo.png";
import { Button } from "@/components/ui/button";
import { navLinks, school, whatsappLink } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-2"
          aria-label="Escola Castelo do Criar — página inicial"
        >
          <img
            src={logo}
            alt="Logo da Escola Castelo do Criar"
            width={48}
            height={48}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="font-display text-base font-extrabold text-primary">
              Castelo do Criar
            </span>
            <span className="truncate text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
              Santa Rosa de Viterbo/SP
            </span>
          </span>
        </Link>

        <nav aria-label="Menu principal" className="ml-auto hidden xl:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "bg-primary-soft text-primary" }}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-2">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="hidden min-h-11 min-w-11 rounded-full border-primary/30 text-primary sm:grid sm:place-items-center"
          >
            <a
              href={school.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da escola"
            >
              <Instagram className="size-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="hidden min-h-11 min-w-11 rounded-full border-primary/30 text-primary sm:grid sm:place-items-center"
          >
            <a
              href={school.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da escola"
            >
              <Facebook className="size-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="min-h-11 min-w-11 rounded-full border-primary/30 text-primary"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a escola pelo WhatsApp"
            >
              <MessageCircle className="size-5" />
            </a>
          </Button>
          <Button
            asChild
            className="hidden min-h-11 rounded-full gradient-accent px-5 font-bold text-accent-foreground shadow-soft hover:opacity-90 sm:inline-flex"
          >
            <Link to="/matriculas">Agende uma visita</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11 xl:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Menu mobile"
          className="border-t border-border bg-background xl:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground/85 hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                asChild
                className="min-h-11 w-full rounded-full gradient-accent font-bold text-accent-foreground"
              >
                <Link to="/matriculas" onClick={() => setOpen(false)}>
                  Agende uma visita
                </Link>
              </Button>
            </li>
            <li className="grid grid-cols-2 gap-3 pt-2">
              <Button
                asChild
                variant="outline"
                className="min-h-12 w-full rounded-full border-primary/30 font-bold text-primary"
              >
                <a
                  href={school.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Instagram className="mr-2 size-5" />
                  Instagram
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-12 w-full rounded-full border-primary/30 font-bold text-primary"
              >
                <a
                  href={school.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Facebook className="mr-2 size-5" />
                  Facebook
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
