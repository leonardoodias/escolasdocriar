import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { segmentos } from "@/content/segmentos";

export function SegmentoCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {segmentos.map((seg) => (
        <article
          key={seg.slug}
          className="card-hover group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
        >
          <img
            src={seg.imagem}
            alt={`Alunos do segmento ${seg.nome} da Escola Castelo do Criar`}
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-extrabold tracking-widest text-accent uppercase">
              {seg.faixa}
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-primary-deep">{seg.nome}</h3>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{seg.resumo}</p>
            <Link
              to={seg.to}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 hover:text-primary-deep"
            >
              {seg.chamada}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
