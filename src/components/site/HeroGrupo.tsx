import { ExternalLink } from "@/components/site/ExternalLink";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImg from "@/assets/hero-escola.jpg";
import { Container } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";

export interface HeroCta {
  label: string;
  to?: string;
  href?: string;
  variant: "primary" | "outline" | "ghost";
  icon?: "calendar" | "whatsapp" | "arrow";
}

export interface HeroBanner {
  id: string;
  tag?: string;
  title: string;
  subtitle: string;
  escolasInfo?: {
    nome: string;
    segmento: string;
  }[];
  image: string;
  imageAlt: string;
  cardBadge: {
    eyebrow: string;
    title: string;
    ctaLabel?: string;
    ctaTo?: string;
  };
  ctas: HeroCta[];
}

export const heroBanners: HeroBanner[] = [
  {
    id: "institucional",
    title: "Duas escolas, um propósito em comum",
    subtitle:
      "Educar com acolhimento, criatividade e desenvolvimento — do primeiro passo na escola até a formação para o futuro.",
    image: heroImg,
    imageAlt: "Escolas do Criar — Castelo do Criar e Castelinho",
    cardBadge: {
      eyebrow: "Escolas do Criar",
      title: "Castelo do Criar & Castelinho",
      ctaLabel: "Conhecer escolas",
      ctaTo: "/escolas",
    },
    ctas: [
      {
        label: "Agende uma visita",
        to: "/matriculas",
        variant: "primary",
        icon: "calendar",
      },
      {
        label: "Conhecer as escolas",
        to: "/escolas",
        variant: "outline",
        icon: "arrow",
      },
    ],
  },
  {
    id: "matriculas-2027",
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
    cardBadge: {
      eyebrow: "Ano Letivo 2027",
      title: "Garanta a vaga do seu filho",
      ctaLabel: "Saiba mais",
      ctaTo: "/matriculas",
    },
    ctas: [
      {
        label: "Agende uma visita",
        to: "/matriculas",
        variant: "primary",
        icon: "calendar",
      },
      {
        label: "Fale no WhatsApp",
        href: whatsappLink,
        variant: "outline",
        icon: "whatsapp",
      },
      {
        label: "Conheça nossas escolas",
        to: "/escolas",
        variant: "ghost",
        icon: "arrow",
      },
    ],
  },
];

function RenderCta({ cta }: { cta: HeroCta }) {
  const iconElement =
    cta.icon === "calendar" ? (
      <CalendarCheck className="mr-2 size-5" aria-hidden="true" />
    ) : cta.icon === "whatsapp" ? (
      <MessageCircle className="mr-2 size-5" aria-hidden="true" />
    ) : cta.icon === "arrow" ? (
      <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
    ) : null;

  if (cta.variant === "primary") {
    return (
      <Button
        asChild
        size="lg"
        className="min-h-12 rounded-full gradient-accent px-6 font-bold text-accent-foreground shadow-lift hover:opacity-95"
      >
        <Link to={cta.to ?? "/matriculas"}>
          {iconElement}
          {cta.label}
        </Link>
      </Button>
    );
  }

  if (cta.variant === "outline") {
    if (cta.href) {
      return (
        <Button
          asChild
          size="lg"
          variant="outline"
          className="min-h-12 rounded-full border-white/40 bg-transparent px-6 font-bold text-white hover:bg-white/15 hover:text-white"
        >
          <ExternalLink href={cta.href}>
            {iconElement}
            {cta.label}
          </ExternalLink>
        </Button>
      );
    }
    return (
      <Button
        asChild
        size="lg"
        variant="outline"
        className="min-h-12 rounded-full border-white/40 bg-transparent px-6 font-bold text-white hover:bg-white/15 hover:text-white"
      >
        <Link to={cta.to ?? "/"}>
          {cta.label}
          {iconElement}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      size="lg"
      variant="ghost"
      className="min-h-12 rounded-full px-5 font-bold text-white hover:bg-white/15 hover:text-white"
    >
      <Link to={cta.to ?? "/"}>
        {cta.label}
        {iconElement}
      </Link>
    </Button>
  );
}

export function HeroGrupo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = heroBanners.length;

  useEffect(() => {
    if (isPaused || total < 2) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const currentBanner = (heroBanners[currentIndex] ?? heroBanners[0]) as HeroBanner;

  return (
    <section
      className="relative overflow-hidden bg-primary-deep py-14 text-primary-foreground md:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Destaques e Campanhas das Escolas do Criar"
    >
      <div aria-hidden="true" className="gradient-hero absolute inset-0 opacity-95" />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-80 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 size-72 rounded-full bg-accent/15 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)] lg:gap-12 min-h-[460px]">
          {/* Lado do Conteúdo com transição suave */}
          <div
            key={`content-${currentBanner.id}`}
            className="max-w-2xl animate-in fade-in duration-500"
          >
            {/* Tag de Campanha (opcional) */}
            {currentBanner.tag ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-extrabold tracking-wide text-accent-foreground backdrop-blur-sm">
                <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                <span className="text-white/95 uppercase">{currentBanner.tag}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-extrabold tracking-wide text-white/90 backdrop-blur-sm">
                <span className="uppercase">Escolas do Criar</span>
              </div>
            )}

            {/* Título Principal */}
            <h1 className="mt-4 text-3xl leading-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {currentBanner.title}
            </h1>

            {/* Subtítulo */}
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              {currentBanner.subtitle}
            </p>

            {/* Informações de apoio das escolas (quando disponível) */}
            {currentBanner.escolasInfo && currentBanner.escolasInfo.length > 0 && (
              <div className="mt-6 space-y-2.5 rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                {currentBanner.escolasInfo.map((info) => (
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
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {currentBanner.ctas.map((cta) => (
                <RenderCta key={cta.label} cta={cta} />
              ))}
            </div>
          </div>

          {/* Lado visual: Card de Imagem com transição suave */}
          <div
            key={`visual-${currentBanner.id}`}
            className="relative flex justify-center lg:justify-end animate-in fade-in duration-500"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl md:rounded-4xl border border-white/20 shadow-lift">
              <img
                src={currentBanner.image}
                alt={currentBanner.imageAlt}
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-background/95 p-3.5 shadow-soft backdrop-blur-md">
                <div>
                  <p className="text-xs font-extrabold text-accent uppercase tracking-wider">
                    {currentBanner.cardBadge.eyebrow}
                  </p>
                  <p className="text-sm font-bold text-primary-deep">
                    {currentBanner.cardBadge.title}
                  </p>
                </div>
                {currentBanner.cardBadge.ctaLabel && (
                  <Button
                    asChild
                    size="sm"
                    className="h-9 rounded-full gradient-accent px-4 text-xs font-bold text-accent-foreground shadow-sm"
                  >
                    <Link to={currentBanner.cardBadge.ctaTo ?? "/matriculas"}>
                      {currentBanner.cardBadge.ctaLabel}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Controles de Navegação e Indicadores */}
        <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/10 sm:justify-center sm:gap-6">
          {/* Botão Anterior */}
          <Button
            variant="outline"
            size="icon"
            aria-label="Banner anterior"
            className="size-9 rounded-full border-white/30 bg-white/5 text-white hover:bg-white/20 hover:text-white"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
          >
            <ChevronLeft className="size-4.5" />
          </Button>

          {/* Indicadores / Dots */}
          <div className="flex items-center gap-2.5">
            {heroBanners.map((banner, i) => (
              <button
                key={banner.id}
                type="button"
                aria-label={`Ir para banner ${i + 1}: ${banner.title}`}
                aria-current={i === currentIndex}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  i === currentIndex
                    ? "w-8 bg-accent shadow-sm"
                    : "w-2.5 bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
          </div>

          {/* Botão Próximo */}
          <Button
            variant="outline"
            size="icon"
            aria-label="Próximo banner"
            className="size-9 rounded-full border-white/30 bg-white/5 text-white hover:bg-white/20 hover:text-white"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
          >
            <ChevronRight className="size-4.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
