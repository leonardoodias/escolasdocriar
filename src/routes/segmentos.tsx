import { createFileRoute } from "@tanstack/react-router";

import { Container, PageHero } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { SegmentoCards } from "@/components/site/SegmentoCards";

export const Route = createFileRoute("/segmentos")({
  head: () => ({
    meta: [
      { title: "Segmentos de ensino — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Educação Infantil, Ensino Fundamental e Ensino Médio em Santa Rosa de Viterbo/SP: conheça cada segmento do Castelo do Criar.",
      },
      { property: "og:title", content: "Segmentos de ensino — Castelo do Criar" },
      {
        property: "og:description",
        content: "Da Educação Infantil ao Ensino Médio, com acompanhamento em cada fase.",
      },
      { property: "og:url", content: "/segmentos" },
    ],
    links: [{ rel: "canonical", href: "/segmentos" }],
  }),
  component: Segmentos,
});

function Segmentos() {
  return (
    <>
      <PageHero
        eyebrow="Segmentos"
        title="Uma escola para todas as etapas"
        text="Cada segmento tem sua identidade, sua rotina e seus objetivos de aprendizagem — sempre com o mesmo cuidado com o desenvolvimento integral do aluno."
      />
      <section className="section">
        <Container>
          <SegmentoCards />
        </Container>
      </section>
      <CtaMatriculas />
    </>
  );
}
