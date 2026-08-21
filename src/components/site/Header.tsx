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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        {/* Brand Identity (Text-only) */}
        <Link
          to="/"
          className="flex min-w-0 flex-col text-left leading-none transition-opacity hover:opacity-90"
          aria-label="Escolas do Criar — página inicial"
        >
          <span className="truncate font-display text-[17px] font-bold tracking-tight text-primary sm:text-lg">
            {grupo.nome}
          </span>
          <span className="mt-0.5 truncate text-[10px] font-medium tracking-wider text-muted-foreground uppercase sm:text-[11px]">
            {grupo.cidade}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "bg-primary-soft text-primary font-bold" }}
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="size-9 rounded-full border-primary/30 text-primary transition-colors hover:bg-primary-soft hover:text-primary"
          >
            <ExternalLink href={whatsappLink} aria-label="Falar pelo WhatsApp">
              <MessageCircle className="size-4" />
            </ExternalLink>
          </Button>

          <Button
            asChild
            size="sm"
            className="hidden h-9 rounded-full gradient-accent px-4 text-xs font-bold text-accent-foreground shadow-soft transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Link to="/matriculas">
              <CalendarCheck className="mr-1.5 size-3.5" aria-hidden="true" />
              Agende uma visita
            </Link>
          </Button>

          {/* Hamburger toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="size-9 lg:hidden text-foreground hover:bg-muted"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <nav
          aria-label="Menu mobile"
          className="border-t border-border/70 bg-background/98 px-4 py-3 shadow-lg lg:hidden"
        >
          <ul className="mx-auto flex max-w-md flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "bg-primary-soft text-primary font-bold" }}
                  className="block rounded-xl px-3.5 py-2.5 text-base font-semibold text-foreground/85 transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-border/60">
              <Button
                asChild
                className="h-11 w-full rounded-full gradient-accent font-bold text-accent-foreground shadow-soft"
              >
                <Link to="/matriculas" onClick={() => setOpen(false)}>
                  <CalendarCheck className="mr-2 size-4" aria-hidden="true" />
                  Agende uma visita
                </Link>
              </Button>
            </li>
            <li className="pt-1">
              <Button
                asChild
                variant="outline"
                className="h-11 w-full rounded-full border-primary/30 font-bold text-primary"
              >
                <ExternalLink href={whatsappLink} onClick={() => setOpen(false)}>
                  <MessageCircle className="mr-2 size-4" />
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
