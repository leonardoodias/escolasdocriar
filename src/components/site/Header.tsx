import { ExternalLink } from "@/components/site/ExternalLink";
import { Link } from "@tanstack/react-router";
import { CalendarCheck, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { grupo } from "@/content/grupo";
import { navLinks, whatsappLink } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Escolas do Criar — página inicial"
        >
          <img
            src={grupo.logo}
            alt="Logo Escolas do Criar"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-base font-extrabold text-primary">
              {grupo.nome}
            </span>
            <span className="truncate text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
              {grupo.cidade}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Menu principal" className="hidden lg:block">
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

          <Button
            asChild
            variant="outline"
            size="icon"
            className="min-h-11 min-w-11 rounded-full border-primary/30 text-primary"
          >
            <ExternalLink href={whatsappLink} aria-label="Falar pelo WhatsApp">
              <MessageCircle className="size-5" />
            </ExternalLink>
          </Button>

          <Button
            asChild
            className="hidden min-h-11 rounded-full gradient-accent px-5 font-bold text-accent-foreground shadow-soft hover:opacity-90 sm:inline-flex"
          >
            <Link to="/matriculas">
              <CalendarCheck className="size-4" aria-hidden="true" />
              Agende uma visita
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11 lg:hidden"
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
          className="border-t border-border bg-background lg:hidden"
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
                className="min-h-12 w-full rounded-full gradient-accent font-bold text-accent-foreground"
              >
                <Link to="/matriculas" onClick={() => setOpen(false)}>
                  Agende uma visita
                </Link>
              </Button>
            </li>
            <li className="pt-3">
              <Button
                asChild
                variant="outline"
                className="min-h-12 w-full rounded-full border-primary/30 font-bold text-primary"
              >
                <ExternalLink href={whatsappLink} onClick={() => setOpen(false)}>
                  <MessageCircle className="mr-2 size-5" />
                  WhatsApp
                </ExternalLink>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
