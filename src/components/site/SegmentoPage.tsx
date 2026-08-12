import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, PageHero } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import type { Segmento } from "@/content/segmentos";

export function SegmentoPage({ segmento }: { segmento: Segmento }) {
  return (
    <>
      <PageHero eyebrow={segmento.faixa} title={segmento.nome} text={segmento.resumo}>
        <Button
          asChild
          className="min-h-12 rounded-full gradient-accent font-bold text-accent-foreground hover:opacity-90"
        >
          <Link to="/matriculas">Agende uma visita</Link>
        </Button>
      </PageHero>

      <section className="section">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <img
              src={segmento.imagem}
              alt={`Alunos do segmento ${segmento.nome} em atividade`}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-4/3 w-full rounded-4xl object-cover shadow-lift"
            />
            <div>
              <h2 className="text-2xl font-extrabold text-primary-deep md:text-3xl">
                O que caracteriza esta etapa
              </h2>
              <div className="mt-6 space-y-5">
                {segmento.destaques.map((d) => (
                  <article key={d.title} className="rounded-3xl bg-secondary/70 p-6">
                    <h3 className="text-lg font-extrabold text-primary">{d.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-sand">
        <Container>
          <h2 className="text-2xl font-extrabold text-primary-deep md:text-3xl">
            Como é o dia a dia
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {segmento.rotina.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-background p-5 text-sm font-semibold text-foreground/85 shadow-soft"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaMatriculas />
    </>
  );
}
