import { createFileRoute } from "@tanstack/react-router";

import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { DestaquesSection } from "@/components/site/DestaquesSection";
import { DiferenciaisSection } from "@/components/site/DiferenciaisSection";
import { EscolasSection } from "@/components/site/EscolasSection";
import { HeroGrupo } from "@/components/site/HeroGrupo";
import { PropositoSection } from "@/components/site/PropositoSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Escolas do Criar — Castelo do Criar e Castelinho" },
      {
        name: "description",
        content:
          "Grupo Escolas do Criar em Santa Rosa de Viterbo/SP: Castelo do Criar e Castelinho. Educação com acolhimento, criatividade e desenvolvimento.",
      },
      {
        property: "og:title",
        content: "Escolas do Criar — Castelo do Criar e Castelinho",
      },
      {
        property: "og:description",
        content:
          "Duas escolas, um propósito em comum: educar com acolhimento, criatividade e desenvolvimento.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroGrupo />
      <EscolasSection />
      <DestaquesSection />
      <PropositoSection />
      <DiferenciaisSection />
      <CtaMatriculas />
    </>
  );
}
