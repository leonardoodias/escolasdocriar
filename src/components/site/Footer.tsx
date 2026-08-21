import { ExternalLink } from "@/components/site/ExternalLink";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

import { grupo } from "@/content/grupo";
import { school, whatsappLink } from "@/content/site";

const casteloDetails = {
  nome: "Castelo do Criar",
  faixa: "Fundamental I, II e Médio",
  endereco: "Rua Coronel Garcia, 158 — Centro, Santa Rosa de Viterbo/SP — CEP 14270-077",
  telefone: "(16) 3954-5223",
  telefoneHref: "tel:+551639545223",
  whatsapp: "(16) 99444-2252",
  whatsappUrl: "https://wa.me/5516994442252",
  instagram: "https://www.instagram.com/castelo_do_criar",
  facebook: "https://www.facebook.com/castelodocriar",
};

const castelinhoDetails = {
  nome: "Castelinho do Criar",
  faixa: "Primeira Infância",
  cidade: "Santa Rosa de Viterbo/SP",
  telefone: "(16) 99444-2252",
  telefoneHref: "tel:+5516994442252",
  whatsapp: "(16) 99444-2252",
  whatsappUrl: whatsappLink,
  instagram: school.social.instagram,
  facebook: school.social.facebook,
};

const linksRapidos = [
  { label: "Nossas Escolas", to: "/escolas" },
  { label: "Matrículas", to: "/matriculas" },
  { label: "Contato", to: "/contato" },
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
] as const;

export function Footer() {
  return (
    <footer className="mt-4 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Coluna 1 — Escolas do Criar */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <img
              src={grupo.logo}
              alt="Logo Escolas do Criar"
              width={44}
              height={44}
              loading="lazy"
              className="h-11 w-11 object-contain"
            />
            <div>
              <span className="font-display text-base font-extrabold text-primary-deep block leading-tight">
                {grupo.nome}
              </span>
              <span className="text-[10.5px] font-semibold tracking-wide text-muted-foreground uppercase">
                {grupo.cidade}
              </span>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {grupo.descricao}
          </p>
          <div className="mt-4 flex gap-2">
            <ExternalLink
              href={school.social.instagram}
              aria-label="Instagram do grupo"
              className="grid size-9 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-4" />
            </ExternalLink>
            <ExternalLink
              href={school.social.facebook}
              aria-label="Facebook do grupo"
              className="grid size-9 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Facebook className="size-4" />
            </ExternalLink>
          </div>
        </div>

        {/* Coluna 2 — Castelinho do Criar */}
        <div className="flex flex-col">
          <h3 className="font-display text-sm font-bold text-primary-deep uppercase tracking-wider">
            {castelinhoDetails.nome}
          </h3>
          <span className="mt-0.5 text-xs font-semibold text-accent uppercase">
            {castelinhoDetails.faixa}
          </span>
          <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>{castelinhoDetails.cidade}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <a href={castelinhoDetails.telefoneHref} className="hover:text-primary transition-colors">
                {castelinhoDetails.telefone}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <ExternalLink href={castelinhoDetails.whatsappUrl} className="hover:text-primary transition-colors">
                WhatsApp {castelinhoDetails.whatsapp}
              </ExternalLink>
            </li>
          </ul>
          <div className="mt-3 flex gap-2">
            <ExternalLink
              href={castelinhoDetails.instagram}
              aria-label="Instagram do Castelinho"
              className="grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-3.5" />
            </ExternalLink>
            <ExternalLink
              href={castelinhoDetails.facebook}
              aria-label="Facebook do Castelinho"
              className="grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Facebook className="size-3.5" />
            </ExternalLink>
          </div>
        </div>

        {/* Coluna 3 — Castelo do Criar */}
        <div className="flex flex-col">
          <h3 className="font-display text-sm font-bold text-primary-deep uppercase tracking-wider">
            {casteloDetails.nome}
          </h3>
          <span className="mt-0.5 text-xs font-semibold text-accent uppercase">
            {casteloDetails.faixa}
          </span>
          <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>{casteloDetails.endereco}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <a href={casteloDetails.telefoneHref} className="hover:text-primary transition-colors">
                {casteloDetails.telefone}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
              <ExternalLink href={casteloDetails.whatsappUrl} className="hover:text-primary transition-colors">
                WhatsApp {casteloDetails.whatsapp}
              </ExternalLink>
            </li>
          </ul>
          <div className="mt-3 flex gap-2">
            <ExternalLink
              href={casteloDetails.instagram}
              aria-label="Instagram do Castelo do Criar"
              className="grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Instagram className="size-3.5" />
            </ExternalLink>
            <ExternalLink
              href={casteloDetails.facebook}
              aria-label="Facebook do Castelo do Criar"
              className="grid size-8 place-items-center rounded-full bg-background text-primary shadow-soft transition-colors hover:bg-primary-soft"
            >
              <Facebook className="size-3.5" />
            </ExternalLink>
          </div>
        </div>

        {/* Coluna 4 — Links rápidos */}
        <div className="flex flex-col">
          <h3 className="font-display text-sm font-bold text-primary-deep uppercase tracking-wider">
            Links rápidos
          </h3>
          <ul className="mt-3 space-y-2">
            {linksRapidos.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-xs font-semibold text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {grupo.nome} — Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
