import { createFileRoute } from "@tanstack/react-router";

import { SegmentoPage } from "@/components/site/SegmentoPage";
import { segmentos } from "@/content/segmentos";

const segmento = segmentos[1]!;

export const Route = createFileRoute("/ensino-fundamental")({
  head: () => ({
    meta: [
      { title: "Ensino Fundamental — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Ensino Fundamental do 1º ao 9º ano em Santa Rosa de Viterbo/SP: base acadêmica sólida e desenvolvimento socioemocional.",
      },
      { property: "og:title", content: "Ensino Fundamental — Castelo do Criar" },
      {
        property: "og:description",
        content: "Conhecimento, autonomia nos estudos e acompanhamento próximo de cada turma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SegmentoPage segmento={segmento} />,
});
