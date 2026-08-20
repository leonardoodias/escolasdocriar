/**
 * Conteúdo do grupo Escolas do Criar (marca guarda-chuva) e das suas escolas.
 * Toda informação editável fica aqui — os componentes apenas consomem.
 * Para adicionar uma nova escola, basta incluir um item em `escolas`.
 */

import castelinhoImg from "@/assets/castelinho.jpg";
import casteloImg from "@/assets/hero-escola.jpg";
import logoCastelo3d from "@/assets/logo-castelo-3d.png.asset.json";

export const grupo = {
  nome: "Escolas do Criar",
  tagline: "Duas escolas, um propósito em comum",
  descricao:
    "Educar com acolhimento, criatividade e desenvolvimento — do primeiro passo na escola até a formação para o futuro.",
  cidade: "Santa Rosa de Viterbo/SP",
  /** Marca do grupo. Substitua quando houver logo próprio do grupo. */
  logo: logoCastelo3d.url,
};

export type Escola = {
  slug: string;
  to: string;
  nome: string;
  faixa: string;
  resumo: string;
  descricao: string;
  /** Logo 3D da escola. Deixe `null` até o asset ficar disponível. */
  logo: string | null;
  imagem: string;
  destaques: { title: string; text: string }[];
  proposta: string[];
};

export const escolas: Escola[] = [
  {
    slug: "castelo-do-criar",
    to: "/escolas/castelo-do-criar",
    nome: "Castelo do Criar",
    faixa: "Educação Infantil, Fundamental e Médio",
    resumo:
      "Formação sólida, projetos criativos e acompanhamento próximo em todas as etapas da vida escolar.",
    descricao:
      "No Castelo do Criar, o conhecimento é construído com propósito: base acadêmica consistente, vivências práticas e uma equipe que conhece cada aluno pelo nome.",
    logo: logoCastelo3d.url,
    imagem: casteloImg,
    destaques: [
      {
        title: "Base acadêmica sólida",
        text: "Currículo estruturado, acompanhamento individual e preparo para os próximos passos.",
      },
      {
        title: "Projetos e vivências",
        text: "Educação financeira, cultura, esportes e projetos que dão sentido ao aprendizado.",
      },
      {
        title: "Parceria com a família",
        text: "Comunicação aberta e encontros ao longo do ano para caminhar junto com cada família.",
      },
    ],
    proposta: [
      "Educação Infantil, Ensino Fundamental e Ensino Médio",
      "Turmas com acompanhamento pedagógico próximo",
      "Projetos interdisciplinares e vivências práticas",
      "Formação em valores e protagonismo do aluno",
    ],
  },
  {
    slug: "castelinho",
    to: "/escolas/castelinho",
    nome: "Castelinho",
    faixa: "Primeira infância",
    resumo:
      "Um ambiente seguro e afetuoso para os primeiros anos, onde brincar é a principal forma de aprender.",
    descricao:
      "No Castelinho, cada criança encontra rotina previsível, cuidado atento e experiências que ampliam linguagem, movimento e imaginação.",
    logo: null,
    imagem: castelinhoImg,
    destaques: [
      {
        title: "Acolhimento em primeiro lugar",
        text: "Adaptação respeitosa, vínculo com os educadores e escuta atenta desde o primeiro dia.",
      },
      {
        title: "Brincar como aprendizado",
        text: "Experiências lúdicas planejadas que desenvolvem autonomia, linguagem e convivência.",
      },
      {
        title: "Ambiente preparado",
        text: "Espaços seguros, materiais adequados à faixa etária e rotina de cuidados.",
      },
    ],
    proposta: [
      "Foco na primeira infância",
      "Rotina de cuidados e autonomia",
      "Experiências com arte, música, natureza e movimento",
      "Comunicação diária com as famílias",
    ],
  },
];

export function getEscola(slug: string) {
  return escolas.find((e) => e.slug === slug);
}

export const propositoGrupo = [
  "Educação com acolhimento",
  "Desenvolvimento integral",
  "Parceria com as famílias",
  "Aprendizagem significativa",
  "Ambiente seguro e estimulante",
];

export const diferenciais = [
  {
    icon: "HeartHandshake",
    title: "Acolhimento",
    text: "Cada aluno é conhecido pelo nome, com escuta e cuidado no dia a dia.",
  },
  {
    icon: "BookOpen",
    title: "Proposta pedagógica",
    text: "Currículo estruturado com sentido prático e clareza de objetivos.",
  },
  {
    icon: "Sprout",
    title: "Desenvolvimento integral",
    text: "Aprendizagem acadêmica, socioemocional e corporal caminhando juntas.",
  },
  {
    icon: "Users",
    title: "Parceria com a família",
    text: "Comunicação aberta e encontros ao longo de todo o ano.",
  },
  {
    icon: "Lightbulb",
    title: "Projetos e vivências",
    text: "Experiências que despertam curiosidade e protagonismo.",
  },
  {
    icon: "GraduationCap",
    title: "Formação para o futuro",
    text: "Autonomia, valores e preparo para os próximos desafios.",
  },
];
