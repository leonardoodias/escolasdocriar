import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";

import { Container } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { grupo } from "@/content/grupo";

export function HeroGrupo() {
  return (
    <section className="relative overflow-hidden bg-primary-deep">
      <div aria-hidden="true" className="gradient-hero absolute inset-0 opacity-90" />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-80 rounded-full bg-white/10 blur-2xl"
      />
      <Container className="relative py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.2em] text-primary-foreground/80 uppercase">
              {grupo.nome} — {grupo.cidade}
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-extrabold text-primary-foreground md:text-5xl lg:text-6xl">
              Duas escolas, um propósito em comum
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 md:text-xl">
              Educar com acolhimento, criatividade e desenvolvimento — do primeiro passo
              na escola até a formação para o futuro.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full gradient-accent px-7 font-bold text-accent-foreground shadow-lift hover:opacity-90"
              >
                <Link to="/matriculas">
                  <CalendarCheck className="size-5" aria-hidden="true" />
                  Agende uma visita
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 rounded-full border-white/50 bg-transparent px-7 font-bold text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              >
                <Link to="/escolas">
                  Conhecer as escolas
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <img
            src={grupo.logo}
            alt="Logo Castelo do Criar"
            className="mx-auto w-56 drop-shadow-2xl md:w-72 lg:w-80"
          />
        </div>
      </Container>
    </section>
  );
}
