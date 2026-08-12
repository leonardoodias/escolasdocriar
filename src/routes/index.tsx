import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";

import heroImg from "@/assets/hero-escola.jpg";
import familiaImg from "@/assets/familia-escola.jpg";
import financeiraImg from "@/assets/educacao-financeira.jpg";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { SegmentoCards } from "@/components/site/SegmentoCards";
import { eventosFamilia, pilares, propostaEtapas } from "@/content/site";
import { educacaoFinanceiraTopicos } from "@/content/projetos";
import { noticias, formatarData } from "@/content/noticias";
import { fotos } from "@/content/galeria";

const iconMap = { BookOpen, Sprout, Lightbulb, HeartHandshake, Users } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Escola Castelo do Criar — Escola em Santa Rosa de Viterbo/SP" },
      {
        name: "description",
        content:
          "Escola em Santa Rosa de Viterbo/SP com Educação Infantil, Ensino Fundamental e Ensino Médio. Agende uma visita e conheça o Castelo do Criar.",
      },
      {
        property: "og:title",
        content: "Escola Castelo do Criar — Santa Rosa de Viterbo/SP",
      },
      {
        property: "og:description",
        content:
          "Conhecimento, afeto, criatividade e desenvolvimento em cada etapa da vida escolar.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const ultimas = noticias.slice(0, 3);
  const previaFotos = fotos.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Alunos da Escola Castelo do Criar conversando no pátio da escola"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div aria-hidden="true" className="gradient-hero absolute inset-0 -z-10" />
        <Container className="py-20 md:py-32">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-extrabold tracking-widest text-primary-foreground uppercase backdrop-blur">
              <Sparkles className="size-4" aria-hidden="true" />
              Santa Rosa de Viterbo/SP
            </p>
            <h1 className="mt-6 text-4xl leading-tight font-extrabold text-primary-foreground sm:text-5xl md:text-6xl">
              Educar é criar possibilidades para o futuro.
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/90 md:text-lg">
              No Castelo do Criar, conhecimento, afeto, criatividade e desenvolvimento
              caminham juntos em cada etapa da vida escolar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full bg-background font-bold text-primary hover:bg-background/90"
              >
                <Link to="/a-escola">Conheça nossa escola</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full gradient-accent font-bold text-accent-foreground hover:opacity-90"
              >
                <Link to="/matriculas">Agende uma visita</Link>
              </Button>
            </div>
          </div>
        </Container>
        <div className="border-t border-white/20 bg-white/10 backdrop-blur">
          <Container>
            <ul className="grid divide-white/20 sm:grid-cols-3 sm:divide-x">
              {[
                { nome: "Educação Infantil", faixa: "2 a 5 anos", to: "/educacao-infantil" },
                { nome: "Ensino Fundamental", faixa: "1º ao 9º ano", to: "/ensino-fundamental" },
                { nome: "Ensino Médio", faixa: "1ª à 3ª série", to: "/ensino-medio" },
              ].map((s) => (
                <li key={s.nome} className="px-2 py-5 sm:px-6">
                  <Link to={s.to} className="group block">
                    <p className="font-display text-lg font-bold text-primary-foreground">
                      {s.nome}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-primary-foreground/85">
                      {s.faixa}
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* CONHEÇA */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Conheça o Castelo do Criar"
            title="Muito além da sala de aula"
            text="Nossa escola trabalha o desenvolvimento integral dos alunos: conhecimento acadêmico, autonomia, responsabilidade, criatividade, convivência e preparação para a vida."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pilares.map((p) => {
              const Icon = iconMap[p.icon as keyof typeof iconMap];
              return (
                <article
                  key={p.title}
                  className="card-hover rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-primary-deep">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SEGMENTOS */}
      <section className="section bg-secondary/50">
        <Container>
          <SectionHeading
            eyebrow="Segmentos de ensino"
            title="Uma escola para todas as etapas"
            text="Da primeira infância à conclusão do Ensino Médio, com acompanhamento próximo em cada fase."
          />
          <div className="mt-12">
            <SegmentoCards />
          </div>
        </Container>
      </section>

      {/* PROPOSTA */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Nossa proposta"
            title="Aprender, experimentar, escolher e realizar"
            text="Valorizamos a aprendizagem prática e a participação do aluno. Não basta memorizar conteúdos: é preciso compreender como utilizá-los na vida real."
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {propostaEtapas.map((etapa, i) => (
              <li
                key={etapa.title}
                className="card-hover rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="font-display grid size-11 place-items-center rounded-full gradient-accent text-lg font-extrabold text-accent-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-primary-deep">{etapa.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{etapa.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="min-h-12 rounded-full font-bold">
              <Link to="/nossa-proposta">Veja a proposta pedagógica</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* EDUCAÇÃO FINANCEIRA */}
      <section className="section bg-sand">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src={financeiraImg}
              alt="Alunos aprendendo educação financeira com jogos e cofrinhos"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-3/2 w-full rounded-4xl object-cover shadow-lift"
            />
            <div>
              <p className="mb-3 text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
                Educação Financeira na Prática
              </p>
              <h2 className="text-3xl font-extrabold text-primary-deep md:text-4xl">
                Escolher, planejar e realizar
              </h2>
              <p className="mt-4 text-muted-foreground">
                A educação financeira começa cedo. Com atividades práticas e jogos
                educacionais, crianças e adolescentes aprendem a lidar com escolhas,
                prioridades e objetivos.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {educacaoFinanceiraTopicos.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-background px-4 py-2 text-sm font-semibold text-primary-deep shadow-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 min-h-12 rounded-full gradient-accent font-bold text-accent-foreground hover:opacity-90"
              >
                <Link to="/projetos">Conheça nossos projetos</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAMÍLIA E ESCOLA */}
      <section className="section">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="mb-3 text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
                Comunidade escolar
              </p>
              <h2 className="text-3xl font-extrabold text-primary-deep md:text-4xl">
                Família e escola, juntas na educação
              </h2>
              <p className="mt-4 text-muted-foreground">
                Acreditamos que os melhores resultados acontecem quando escola e família
                caminham lado a lado. Por isso, valorizamos momentos de convivência,
                diálogo, participação e construção de vínculos.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {eventosFamilia.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-foreground/85">
                    <HeartHandshake
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={familiaImg}
              alt="Famílias e alunos reunidos em evento da Escola Castelo do Criar"
              width={1200}
              height={800}
              loading="lazy"
              className="order-1 aspect-3/2 w-full rounded-4xl object-cover shadow-lift lg:order-2"
            />
          </div>
        </Container>
      </section>

      {/* GALERIA */}
      <section className="section bg-secondary/50">
        <Container>
          <SectionHeading
            eyebrow="Galeria"
            title="O dia a dia no Castelo"
            text="Registros das turmas, dos projetos e dos momentos com as famílias."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {previaFotos.map((f) => (
              <img
                key={f.id}
                src={f.src}
                alt={f.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover shadow-soft"
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="min-h-12 rounded-full font-bold">
              <Link to="/galeria">Ver galeria completa</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* NOTÍCIAS */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Acontece no Castelo"
            title="Notícias e comunicados"
            text="Fique por dentro dos projetos, eventos e avisos da escola."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ultimas.map((n) => (
              <article
                key={n.slug}
                className="card-hover flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <img
                  src={n.imagem}
                  alt={n.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-3/2 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <span className="rounded-full bg-primary-soft px-3 py-1 text-primary">
                      {n.categoria}
                    </span>
                    <time dateTime={n.data} className="text-muted-foreground">
                      {formatarData(n.data)}
                    </time>
                  </div>
                  <h3 className="mt-3 text-lg font-extrabold text-primary-deep">{n.titulo}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{n.resumo}</p>
                  <Link
                    to="/noticias/$slug"
                    params={{ slug: n.slug }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3"
                  >
                    Ler notícia
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaMatriculas />
    </>
  );
}
