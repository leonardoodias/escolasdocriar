import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContatoDialog } from "@/components/site/ContatoDialog";
import { Container, PageHero } from "@/components/site/Section";
import { segmentos } from "@/content/segmentos";
import { school } from "@/content/site";

export const Route = createFileRoute("/matriculas")({
  head: () => ({
    meta: [
      { title: "Matrículas e Agendamento de Visita — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Matrículas abertas na Escola Castelo do Criar, em Santa Rosa de Viterbo/SP. Agende uma visita e conheça a escola de perto.",
      },
      { property: "og:title", content: "Matrículas — Castelo do Criar" },
      {
        property: "og:description",
        content: "Agende uma visita, conheça a proposta pedagógica e garanta a vaga.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Matriculas,
});

const etapas = [
  "Entre em contato e agende uma visita",
  "Conheça a escola, a equipe e a proposta pedagógica",
  "Receba as informações de vagas, turnos e valores",
  "Entregue a documentação e finalize a matrícula",
];

const documentos = [
  "Certidão de nascimento do aluno",
  "RG e CPF dos responsáveis",
  "Comprovante de residência",
  "Declaração de transferência e histórico escolar (quando houver)",
  "Carteira de vacinação (Educação Infantil)",
];

type Erros = Partial<Record<"responsavel" | "aluno" | "telefone" | "email" | "segmento", string>>;

function Matriculas() {
  const [erros, setErros] = useState<Erros>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const proximos: Erros = {};
    if (get("responsavel").length < 3) proximos.responsavel = "Informe o nome do responsável.";
    if (get("aluno").length < 2) proximos.aluno = "Informe o nome do aluno.";
    if (get("telefone").replace(/\D/g, "").length < 10)
      proximos.telefone = "Informe um telefone com DDD.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
      proximos.email = "Informe um e-mail válido.";
    if (!get("segmento")) proximos.segmento = "Selecione o segmento de interesse.";

    setErros(proximos);
    if (Object.keys(proximos).length > 0) {
      toast.error("Revise os campos destacados.");
      return;
    }

    toast.success("Solicitação enviada! Entraremos em contato em breve.");
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Matrículas abertas"
        title="Agende uma visita ao Castelo do Criar"
        text="Preencha o formulário e nossa equipe entrará em contato para apresentar a escola, tirar dúvidas e organizar sua visita."
      />

      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <form onSubmit={onSubmit} noValidate className="rounded-4xl border border-border bg-card p-6 shadow-soft md:p-8">
              <h2 className="text-2xl font-extrabold text-primary-deep">
                Solicitar contato
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <Label htmlFor="responsavel">Nome do responsável *</Label>
                  <Input id="responsavel" name="responsavel" className="mt-2 min-h-11" />
                  {erros.responsavel && (
                    <p className="mt-1 text-xs font-semibold text-destructive">
                      {erros.responsavel}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="aluno">Nome do aluno *</Label>
                  <Input id="aluno" name="aluno" className="mt-2 min-h-11" />
                  {erros.aluno && (
                    <p className="mt-1 text-xs font-semibold text-destructive">{erros.aluno}</p>
                  )}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="telefone">Telefone / WhatsApp *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      inputMode="tel"
                      className="mt-2 min-h-11"
                    />
                    {erros.telefone && (
                      <p className="mt-1 text-xs font-semibold text-destructive">
                        {erros.telefone}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" name="email" type="email" className="mt-2 min-h-11" />
                    {erros.email && (
                      <p className="mt-1 text-xs font-semibold text-destructive">
                        {erros.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="segmento">Segmento de interesse *</Label>
                  <select
                    id="segmento"
                    name="segmento"
                    defaultValue=""
                    className="mt-2 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Selecione…</option>
                    {segmentos.map((s) => (
                      <option key={s.slug} value={s.nome}>
                        {s.nome} — {s.faixa}
                      </option>
                    ))}
                  </select>
                  {erros.segmento && (
                    <p className="mt-1 text-xs font-semibold text-destructive">
                      {erros.segmento}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea id="mensagem" name="mensagem" rows={4} className="mt-2" />
                </div>
              </div>

              <Button
                type="submit"
                className="mt-8 min-h-12 w-full rounded-full gradient-accent font-bold text-accent-foreground hover:opacity-90"
              >
                Enviar solicitação
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Prefere falar agora?{" "}
                <ContatoDialog>
                  <button
                    type="button"
                    className="cursor-pointer font-bold text-primary hover:underline"
                  >
                    Fale com a nossa equipe
                  </button>
                </ContatoDialog>
                .
              </p>
            </form>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-extrabold text-primary-deep">
                  Como funciona a matrícula
                </h2>
                <ol className="mt-6 space-y-4">
                  {etapas.map((etapa, i) => (
                    <li key={etapa} className="flex gap-4 rounded-3xl bg-secondary/70 p-5">
                      <span className="font-display grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold text-foreground/85">{etapa}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-primary-deep">
                  Documentos necessários
                </h2>
                <ul className="mt-6 space-y-3">
                  {documentos.map((d) => (
                    <li
                      key={d}
                      className="rounded-2xl bg-background px-5 py-4 text-sm font-semibold text-foreground/85 shadow-soft"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Atendimento: {school.hours}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
