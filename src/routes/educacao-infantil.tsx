import { createFileRoute } from "@tanstack/react-router";

import { SegmentoPage } from "@/components/site/SegmentoPage";
import { segmentos } from "@/content/segmentos";

const segmento = segmentos[0]!;

export const Route = createFileRoute("/educacao-infantil")({
  head: () => ({
    meta: [
      { title: "Educação Infantil — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Educação Infantil em Santa Rosa de Viterbo/SP: brincar, acolhimento e primeiras descobertas no Castelo do Criar.",
      },
      { property: "og:title", content: "Educação Infantil — Castelo do Criar" },
      {
        property: "og:description",
        content: "Rotina acolhedora, brincadeira e aprendizagem para crianças de 2 a 5 anos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SegmentoPage segmento={segmento} />,
});
