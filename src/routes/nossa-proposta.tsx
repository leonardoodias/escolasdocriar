import { createFileRoute } from "@tanstack/react-router";

import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { propostaEtapas, pilares } from "@/content/site";
import { educacaoFinanceiraAtividades } from "@/content/projetos";

export const Route = createFileRoute("/nossa-proposta")({
  head: () => ({
    meta: [
      { title: "Nossa Proposta Pedagógica — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Conhecer, experimentar, refletir, escolher, planejar e realizar: a proposta pedagógica da Escola Castelo do Criar.",
      },
      { property: "og:title", content: "Nossa Proposta Pedagógica — Castelo do Criar" },
      {
        property: "og:description",
        content: "Um percurso de aprendizagem que une conhecimento, prática e autonomia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NossaProposta,
});

function NossaProposta() {
  return (
    <>
      <PageHero
        eyebrow="Proposta pedagógica"
        title="Aprender com sentido, do início ao fim"
        text="Nosso percurso pedagógico organiza a aprendizagem em etapas que levam o aluno do primeiro contato com o conhecimento até a realização de projetos próprios."
      />

      <section className="section">
        <Container>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {propostaEtapas.map((etapa, i) => (
              <li
                key={etapa.title}
                className="card-hover rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="font-display grid size-11 place-items-center rounded-full gradient-accent text-lg font-extrabold text-accent-foreground">
                  {i + 1}
                </span>
                <h2 className="mt-4 text-lg font-extrabold text-primary-deep">{etapa.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{etapa.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section bg-sand">
        <Container>
          <SectionHeading
            eyebrow="Pilares"
            title="O que sustenta nossa prática"
            text="Cada decisão pedagógica passa por estes princípios."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pilares.map((p) => (
              <article
                key={p.title}
                className="rounded-3xl bg-background p-6 shadow-soft"
              >
                <h3 className="text-lg font-extrabold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Na prática"
            title="Educação financeira integrada ao currículo"
            text="Atividades que atravessam os segmentos e trabalham escolhas, planejamento e responsabilidade."
          />
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3">
            {educacaoFinanceiraAtividades.map((a) => (
              <li
                key={a}
                className="rounded-2xl bg-secondary/70 px-5 py-4 text-sm font-semibold text-foreground/85"
              >
                {a}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaMatriculas />
    </>
  );
}
