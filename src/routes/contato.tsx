import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UnidadesContato } from "@/components/site/ContatoDialog";
import { Container, PageHero } from "@/components/site/Section";
import { school } from "@/content/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Fale com a Escola Castelo do Criar: endereço na Rua Coronel Garcia, 158 — Centro, Santa Rosa de Viterbo/SP, telefone, WhatsApp e e-mail.",
      },
      { property: "og:title", content: "Contato — Castelo do Criar" },
      {
        property: "og:description",
        content: "Endereço, telefone, WhatsApp, e-mail e horários de atendimento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a nossa equipe"
        text="Estamos à disposição para tirar dúvidas, apresentar a proposta pedagógica e receber sua família para uma visita."
      />

      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <UnidadesContato titleAs="h2" />

              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground/85">
                    <strong className="font-semibold">Castelo do Criar</strong>
                    <br />
                    {school.address.street}
                    <br />
                    {school.address.city} — {school.address.zip}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <a
                    href={`mailto:${school.email}`}
                    className="font-semibold hover:text-primary"
                  >
                    {school.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground/85">{school.hours}</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="outline" className="min-h-12 rounded-full font-bold">
                  <a href={school.mapsDirections} target="_blank" rel="noopener noreferrer">
                    Ver rota no mapa
                  </a>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl shadow-lift">
              <iframe
                src={school.mapsEmbed}
                title="Mapa da localização da Escola Castelo do Criar"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 lg:h-full"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
