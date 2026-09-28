import { ExternalLink } from "@/components/site/ExternalLink";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Bot,
  Calculator,
  CalendarCheck,
  Compass,
  Dice5,
  Drama,
  Facebook,
  Globe,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import casteloImg from "@/assets/hero-escola.jpg";
import ensinoFundamentalImg from "@/assets/ensino-fundamental.jpg";
import ensinoMedioImg from "@/assets/ensino-medio.jpg";
import logoCastelo3d from "@/assets/logo-castelo-3d.png.asset.json";
import { Container, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { unidades } from "@/content/contatos";
import type { Escola } from "@/content/grupo";

const casteloContact = {
  address: "Rua Coronel Garcia, 158 — Centro, Santa Rosa de Viterbo/SP — CEP: 14270-077",
  facebookUrl: "https://www.facebook.com/castelodocriar",
  instagramUrl: "https://www.instagram.com/castelo_do_criar",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Coronel+Garcia,+158,+Santa+Rosa+de+Viterbo,+Sao+Paulo,+14270-077&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Rua+Coronel+Garcia,+158,+Santa+Rosa+de+Viterbo,+Sao+Paulo,+14270-077",
};

const pilaresProposta = [
  {
    icon: GraduationCap,
    title: "Excelência acadêmica",
    description: "Desenvolvimento consistente dos conhecimentos e competências acadêmicas.",
  },
  {
    icon: Compass,
    title: "Autonomia",
    description:
      "Incentivo para que o estudante desenvolva responsabilidade sobre sua própria aprendizagem.",
  },
  {
    icon: HeartHandshake,
    title: "Formação humana",
    description: "Desenvolvimento de valores, convivência, respeito e responsabilidade.",
  },
  {
    icon: Globe,
    title: "Consciência social",
    description: "Formação de estudantes capazes de compreender seu papel na sociedade.",
  },
];

const experienciasEstendido = [
  { icon: Drama, name: "Teatro" },
  { icon: Bot, name: "Robótica" },
  { icon: Dice5, name: "Jogos de tabuleiro" },
  { icon: Languages, name: "Libras" },
  { icon: BookOpen, name: "Reforço em Língua Portuguesa" },
  { icon: Calculator, name: "Reforço em Matemática" },
  { icon: Globe, name: "Inglês" },
  { icon: Activity, name: "Treinos esportivos" },
];

export function CasteloDoCriarPage({ escola }: { escola: Escola }) {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-primary-deep py-16 text-primary-foreground md:py-24">
        <div aria-hidden="true" className="gradient-hero absolute inset-0 opacity-90" />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 size-80 rounded-full bg-white/10 blur-2xl"
        />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.18em] text-accent uppercase">
              Escola Castelo do Criar
            </p>
            <h1 className="mt-4 text-3xl leading-tight font-extrabold text-primary-foreground sm:text-4xl md:text-5xl">
              Educação com propósito. Formação com excelência.
            </h1>
            <p className="mt-5 text-base text-primary-foreground/85 sm:text-lg">
              A Escola Castelo do Criar oferece Ensino Fundamental e Ensino Médio com uma
              proposta voltada à formação integral, unindo excelência acadêmica, desenvolvimento
              humano e construção de valores.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full gradient-accent px-7 font-bold text-accent-foreground shadow-lift hover:opacity-90"
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
                className="min-h-12 rounded-full border-white/40 bg-transparent px-7 font-bold text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              >
                <ExternalLink href={unidades.castelo.whatsappUrl}>
                  <MessageCircle className="mr-2 size-5" aria-hidden="true" />
                  Fale com a secretaria
                </ExternalLink>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-4xl border border-white/15 shadow-lift">
              <img
                src={casteloImg}
                alt="Ambiente da Escola Castelo do Criar"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute right-4 bottom-4 flex items-center gap-3 rounded-2xl bg-background/95 p-3 shadow-soft backdrop-blur-md">
                <img
                  src={logoCastelo3d.url}
                  alt="Logo 3D Castelo do Criar"
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-display text-sm font-bold text-primary-deep">
                    Castelo do Criar
                  </span>
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                    Fundamental e Médio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. QUEM SOMOS */}
      <section className="section bg-background">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
                Quem Somos
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-primary-deep sm:text-3xl md:text-4xl">
                Uma escola para aprender, crescer e construir novos caminhos
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                A Escola Castelo do Criar, localizada em Santa Rosa de Viterbo, é uma
                instituição particular de ensino que oferece Ensino Fundamental e Ensino Médio
                com foco na formação integral dos estudantes.
              </p>
              <p>
                Sua proposta pedagógica une excelência acadêmica, desenvolvimento humano e
                construção de valores, preparando os alunos para aprender com autonomia,
                responsabilidade e consciência social.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. PROPOSTA PEDAGÓGICA */}
      <section className="section bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="Proposta Pedagógica"
            title="Formação que vai além do conteúdo"
            text="Princípios que orientam a prática diária e preparam nossos estudantes para todas as etapas da vida."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilaresProposta.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={pilar.title}
                  className="card-hover flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary-deep">{pilar.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {pilar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. SEGMENTOS */}
      <section className="section bg-background">
        <Container>
          <SectionHeading
            eyebrow="Segmentos"
            title="Nossos segmentos de ensino"
            text="Acompanhamento consistente do Ensino Fundamental até a conclusão do Ensino Médio."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Ensino Fundamental */}
            <article className="card-hover group flex flex-col overflow-hidden rounded-4xl border border-border bg-card shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={ensinoFundamentalImg}
                  alt="Alunos do Ensino Fundamental do Castelo do Criar"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-xs font-extrabold tracking-[0.14em] text-accent uppercase">
                  Anos Iniciais e Finais
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-primary-deep">
                  Ensino Fundamental
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Desenvolvimento sólido de competências fundamentais, raciocínio lógico,
                  vivências práticas e consolidação da autonomia nos estudos.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="min-h-11 rounded-full border-primary/30 font-bold text-primary hover:bg-primary-soft"
                  >
                    <Link to="/ensino-fundamental">
                      Saiba mais sobre o Fundamental
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>

            {/* Ensino Médio */}
            <article className="card-hover group flex flex-col overflow-hidden rounded-4xl border border-border bg-card shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={ensinoMedioImg}
                  alt="Alunos do Ensino Médio do Castelo do Criar"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-xs font-extrabold tracking-[0.14em] text-accent uppercase">
                  Preparação e Futuro
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-primary-deep">
                  Ensino Médio
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Aprofundamento acadêmico, preparação consistente para vestibulares e Enem,
                  desenvolvimento do pensamento crítico e projeto de vida.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="min-h-11 rounded-full border-primary/30 font-bold text-primary hover:bg-primary-soft"
                  >
                    <Link to="/ensino-medio">
                      Saiba mais sobre o Ensino Médio
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* 5. PERÍODO ESTENDIDO */}
      <section className="section bg-sand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
              Diferencial
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary-deep sm:text-4xl">
              Mais experiências, mais possibilidades
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Como diferencial, o Castelo do Criar oferece período estendido com experiências que
              ampliam o aprendizado e contribuem para o desenvolvimento intelectual, físico, social
              e emocional dos estudantes.
            </p>
            <p className="mt-2 text-sm font-semibold text-primary">
              Entre as experiências oferecidas estão:
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-4">
            {experienciasEstendido.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.name}
                  className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-background p-4 shadow-soft transition-all hover:border-primary/30"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold text-foreground/90">{exp.name}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. CONTATO E LOCALIZAÇÃO */}
      <section className="section bg-background">
        <Container>
          <SectionHeading
            eyebrow="Localização e Contato"
            title="Venha conhecer o Castelo do Criar"
            text="Nossa equipe está pronta para receber você e apresentar nossa estrutura completa."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <ul className="space-y-5 text-sm sm:text-base">
                <li className="flex gap-3.5">
                  <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground/85 leading-relaxed">
                    {casteloContact.address}
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <Phone className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground block uppercase">
                      Telefone
                    </span>
                    <a
                      href={unidades.castelo.telefoneHref}
                      className="font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {unidades.castelo.telefone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <MessageCircle className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground block uppercase">
                      WhatsApp da Secretaria
                    </span>
                    <ExternalLink
                      href={unidades.castelo.whatsappUrl}
                      className="font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {unidades.castelo.whatsapp}
                    </ExternalLink>
                  </div>
                </li>
              </ul>

              {/* Redes sociais */}
              <div className="mt-6 flex items-center gap-3">
                <ExternalLink
                  href={casteloContact.instagramUrl}
                  aria-label="Instagram do Castelo do Criar"
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-colors hover:bg-primary-soft"
                >
                  <Instagram className="size-4.5" />
                </ExternalLink>
                <ExternalLink
                  href={casteloContact.facebookUrl}
                  aria-label="Facebook do Castelo do Criar"
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-colors hover:bg-primary-soft"
                >
                  <Facebook className="size-4.5" />
                </ExternalLink>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="min-h-12 rounded-full gradient-accent font-bold text-accent-foreground shadow-soft hover:opacity-90"
                >
                  <ExternalLink href={unidades.castelo.whatsappUrl}>
                    <MessageCircle className="mr-2 size-4" />
                    Falar no WhatsApp
                  </ExternalLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="min-h-12 rounded-full border-primary/30 font-bold text-primary hover:bg-primary-soft"
                >
                  <Link to="/matriculas">
                    <CalendarCheck className="mr-2 size-4" />
                    Agendar uma visita
                  </Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-border shadow-lift">
              <iframe
                src={casteloContact.mapsEmbed}
                title="Localização da Escola Castelo do Criar no mapa"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 lg:h-96"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 7. CTA FINAL */}
      <section className="section bg-primary-deep text-primary-foreground relative overflow-hidden">
        <div aria-hidden="true" className="gradient-hero absolute inset-0 opacity-80" />
        <Container className="relative text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Conheça de perto o Castelo do Criar
            </h2>
            <p className="mt-4 text-base text-primary-foreground/85 sm:text-lg">
              Agende uma visita, conheça nossa proposta e descubra como podemos acompanhar o
              desenvolvimento do seu filho em cada nova etapa.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full gradient-accent px-8 font-bold text-accent-foreground shadow-lift hover:opacity-90"
              >
                <Link to="/matriculas">
                  <CalendarCheck className="mr-2 size-5" aria-hidden="true" />
                  Agendar uma visita
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 rounded-full border-white/40 bg-transparent px-8 font-bold text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              >
                <ExternalLink href={unidades.castelo.whatsappUrl}>
                  <MessageCircle className="mr-2 size-5" aria-hidden="true" />
                  Falar com a secretaria
                </ExternalLink>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
