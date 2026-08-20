import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Section";
import { ExternalLink } from "@/components/site/ExternalLink";
import { whatsappLink } from "@/content/site";

export function CtaMatriculas() {
  return (
    <section className="section">
      <Container>
        <div className="gradient-hero relative overflow-hidden rounded-4xl px-6 py-14 text-center md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-10 size-56 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-12 size-64 rounded-full bg-white/10"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
              Venha conhecer as Escolas do Criar
            </h2>
            <p className="mt-5 text-base text-primary-foreground/90 md:text-lg">
              Agende uma visita e descubra qual das nossas escolas é o melhor caminho para
              seu filho.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full bg-background font-bold text-primary hover:bg-background/90"
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
                className="min-h-12 rounded-full border-white/60 bg-transparent font-bold text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              >
                <ExternalLink href={whatsappLink}>
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Fale no WhatsApp
                </ExternalLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="min-h-12 rounded-full font-bold text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              >
                <Link to="/matriculas">
                  Saiba mais sobre matrículas
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
