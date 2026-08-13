import { createFileRoute } from "@tanstack/react-router";

import { SegmentoPage } from "@/components/site/SegmentoPage";
import { segmentos } from "@/content/segmentos";

const segmento = segmentos[2]!;

export const Route = createFileRoute("/ensino-medio")({
  head: () => ({
    meta: [
      { title: "Ensino Médio — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Ensino Médio em Santa Rosa de Viterbo/SP: preparação acadêmica, projeto de vida e protagonismo estudantil.",
      },
      { property: "og:title", content: "Ensino Médio — Castelo do Criar" },
      {
        property: "og:description",
        content: "Preparação para vestibulares e ENEM com projeto de vida e autonomia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SegmentoPage segmento={segmento} />,
});
