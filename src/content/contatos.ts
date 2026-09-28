/**
 * Canais de atendimento por unidade — fonte única de telefones e WhatsApp.
 * Castelinho do Criar e Castelo do Criar têm números diferentes.
 */

export type Unidade = {
  nome: string;
  /** Número formatado para exibição */
  whatsapp: string;
  whatsappUrl: string;
  /** Telefone fixo formatado para exibição */
  telefone: string;
  telefoneHref: string;
};

function whatsappUrl(numero: string, mensagem: string) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

export const unidades = {
  castelinho: {
    nome: "Castelinho do Criar",
    whatsapp: "(16) 99248-2891",
    whatsappUrl: whatsappUrl(
      "5516992482891",
      "Olá! Acessei o site e gostaria de informações sobre o Castelinho do Criar.",
    ),
    telefone: "(16) 3954-6158",
    telefoneHref: "tel:+551639546158",
  },
  castelo: {
    nome: "Castelo do Criar",
    whatsapp: "(16) 99444-2252",
    whatsappUrl: whatsappUrl(
      "5516994442252",
      "Olá! Acessei o site e gostaria de informações sobre o Castelo do Criar.",
    ),
    telefone: "(16) 3954-5223",
    telefoneHref: "tel:+551639545223",
  },
} satisfies Record<string, Unidade>;

export type UnidadeId = keyof typeof unidades;

export const listaUnidades: Unidade[] = [unidades.castelinho, unidades.castelo];
