/**
 * Banners e destaques da home (área de campanhas e comunicação).
 * Basta editar esta lista para atualizar o carrossel e a página /destaques.
 * Estrutura pensada para migrar futuramente para banco de dados/painel admin.
 */

import familiaImg from "@/assets/familia-escola.jpg";
import financeiraImg from "@/assets/educacao-financeira.jpg";
import casteloImg from "@/assets/hero-escola.jpg";

export type Destaque = {
  id: string;
  tag: string;
  titulo: string;
  texto: string;
  data?: string;
  imagem: string;
  cta: { label: string; to?: string; href?: string };
};

export const destaques: Destaque[] = [
  {
    id: "festa-da-familia",
    tag: "Evento",
    titulo: "Festa da Família",
    texto:
      "Um dia de encontro, brincadeiras e apresentações para celebrar quem caminha com a gente.",
    data: "Setembro",
    imagem: familiaImg,
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
  {
    id: "matriculas-2027",
    tag: "Matrículas",
    titulo: "Matrículas 2027 abertas",
    texto:
      "Garanta a vaga do seu filho no Castelo do Criar ou no Castelinho. Agende uma visita e conheça de perto.",
    imagem: casteloImg,
    cta: { label: "Quero me matricular", to: "/matriculas" },
  },
  {
    id: "projetos-especiais",
    tag: "Projetos",
    titulo: "Projetos que preparam para a vida",
    texto:
      "Educação financeira, cultura e vivências práticas fazem parte da rotina das nossas escolas.",
    imagem: financeiraImg,
    cta: { label: "Conhecer as escolas", to: "/escolas" },
  },
];
