import { ExternalLink } from "@/components/site/ExternalLink";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";

import heroImg from "@/assets/hero-escola.jpg";
import { Container } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/content/site";

/**
 * Estrutura configurável do banner principal da Home.
 * Permite alternar ou atualizar campanhas institucionais facilmente no futuro.
 */
export interface HeroBannerConfig {
  tag: string;
  title: string;
  subtitle: string;
  escolasInfo: {
    nome: string;
    segmento: string;
  }[];
  image: string;
  imageAlt: string;
}

export const activeHeroBanner: HeroBannerConfig = {
  tag: "Campanha 2027",
  title: "Matrículas Abertas 2027",
  subtitle:
    "Do Castelinho ao Castelo do Criar, acompanhamos cada etapa do desenvolvimento com afeto, propósito e formação de qualidade.",
  escolasInfo: [
    {
      nome: "Castelinho do Criar",
      segmento: "Primeira Infância",
    },
    {
      nome: "Castelo do Criar",
      segmento: "Ensino Fundamental I, Ensino Fundamental II e Ensino Médio",
    },
  ],
  image: heroImg,
  imageAlt: "Alunos das Escolas do Criar — Matrículas Abertas 2027",
};

export function HeroGrupo() {
  const banner = activeHeroBanner;

  return (
    <section className="relative overflow-hidden bg-primary-deep py-14 text-primary-foreground md:py-20">
      <div aria-hidden="true" className="gradient-hero absolute inset-0 opacity-95" />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-80 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 size-72 rounded-full bg-accent/15 blur-3xl"
      />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)] lg:gap-12">
        <div className="max-w-2xl">
          {/* Tag de Campanha */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-extrabold tracking-wide text-accent-foreground backdrop-blur-sm">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            <span className="text-white/95 uppercase">{banner.tag}</span>
          </div>

          {/* Título Principal */}
          <h1 className="mt-4 text-3xl leading-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {banner.title}
          </h1>

          {/* Subtítulo */}
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            {banner.subtitle}
          </p>

          {/* Informações de apoio das escolas */}
          <div className="mt-6 space-y-2.5 rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:p-5">
            {banner.escolasInfo.map((info) => (
              <div key={info.nome} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <p className="text-white/95">
                  <strong className="font-bold text-white">{info.nome}</strong> —{" "}
                  <span className="text-white/85">{info.segmento}</span>
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-full gradient-accent px-6 font-bold text-accent-foreground shadow-lift hover:opacity-95"
            >
              <Link to="/matriculas">
                <CalendarCheck className="mr-2 size-5" aria-hidden="true" />
                Agende uma visita
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-12 rounded-full border-white/40 bg-transparent px-6 font-bold text-white hover:bg-white/15 hover:text-white"
            >
              <ExternalLink href={whatsappLink}>
                <MessageCircle className="mr-2 size-5" aria-hidden="true" />
                Fale no WhatsApp
              </ExternalLink>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="min-h-12 rounded-full px-5 font-bold text-white hover:bg-white/15 hover:text-white"
            >
              <Link to="/escolas">
                Conheça nossas escolas
                <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Lado visual: Imagem real com card de apoio */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl md:rounded-4xl border border-white/20 shadow-lift">
            <img
              src={banner.image}
              alt={banner.imageAlt}
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-background/95 p-3.5 shadow-soft backdrop-blur-md">
              <div>
                <p className="text-xs font-extrabold text-accent uppercase tracking-wider">
                  Ano Letivo 2027
                </p>
                <p className="text-sm font-bold text-primary-deep">
                  Garanta a vaga do seu filho
                </p>
              </div>
              <Button
                asChild
                size="sm"
                className="h-9 rounded-full gradient-accent px-4 text-xs font-bold text-accent-foreground shadow-sm"
              >
                <Link to="/matriculas">Saiba mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
