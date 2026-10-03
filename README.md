# Escolas do Criar

Site institucional do grupo **Escolas do Criar** — Castelo do Criar e Castelinho —, em Santa Rosa de Viterbo/SP.

**App em produção:** https://escolasdocriar.lovable.app
**Editor Lovable:** https://lovable.dev/projects/e162fcbe-ab02-4bfb-89e3-23747fc847d5

> [!IMPORTANT]
> Este projeto está conectado ao [Lovable](https://lovable.dev). Commits enviados para `main`
> sincronizam automaticamente com o editor Lovable. Nunca reescreva histórico já publicado
> (sem `force push`, `rebase`/`amend`/`squash` de commits já enviados) — veja [AGENTS.md](./AGENTS.md).

## Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (SSR) + TanStack Router (file-based routing)
- **UI:** React 19 + TypeScript (strict)
- **Estilo:** Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) (style `new-york`) sobre Radix UI
- **Dados/formulários:** TanStack Query, React Hook Form + Zod
- **Build:** Vite + Nitro, via `@lovable.dev/vite-tanstack-config` (já inclui TanStack Start, React, Tailwind, path alias `@/*` e dedupe — não duplicar esses plugins manualmente em `vite.config.ts`)
- **Deploy target padrão do Nitro:** Cloudflare (não há integração com Vercel neste projeto)
- **Gerenciador de pacotes:** [Bun](https://bun.sh) (`bun.lock` / `bunfig.toml`)

## Estrutura de diretórios

```
src/
  assets/        imagens e logos
  components/
    site/        componentes específicos do site (Header, Footer, seções da home, etc.)
    ui/          componentes shadcn/ui
  content/       conteúdo institucional centralizado (contatos, notícias, projetos, segmentos...)
  hooks/         hooks customizados
  lib/           utilitários, captura e relato de erro para a Lovable
  routes/        rotas file-based do TanStack Router (uma página por arquivo)
  routeTree.gen.ts  gerado automaticamente — não editar à mão
  router.tsx     factory do router (QueryClient + context)
  server.ts      entry SSR customizado (normaliza erros 500 do h3/Nitro)
  start.ts       bootstrap do TanStack Start
  styles.css     estilos globais e tokens Tailwind
```

Todo o conteúdo institucional (textos, notícias, projetos, contatos, dados de cada escola) fica
isolado em `src/content/*.ts`, separado dos componentes, para facilitar uma futura migração a um
painel administrativo.

As rotas seguem a convenção de file-based routing do TanStack Router — ver
[src/routes/README.md](./src/routes/README.md) para detalhes (ex: `index.tsx` → `/`,
`$id.tsx` → segmento dinâmico, `__root.tsx` → layout raiz). `routeTree.gen.ts` é gerado
automaticamente e não deve ser editado manualmente.

## Desenvolvimento

O projeto usa [Bun](https://bun.sh/docs/installation) como gerenciador oficial (`bun.lock`).
Se preferir ou não tiver o Bun instalado, os mesmos scripts funcionam normalmente com Node.js
(18+) e npm.

```bash
# com Bun (recomendado — mantém o bun.lock como referência)
bun install
bun dev          # ambiente de desenvolvimento em http://localhost:8080
bun run build    # build de produção
bun run preview  # preview do build de produção

# com npm
npm install
npm run dev
npm run build
npm run preview
```

> Rodar `npm install` gera um `package-lock.json` próprio — não é necessário versioná-lo, já
> que `bun.lock` é o lockfile oficial do projeto.

## Lint e formatação

```bash
bun run lint     # eslint .
bun run format   # prettier --write .
```

(substitua `bun run` por `npm run` se estiver usando npm)

Não há testes automatizados configurados no projeto atualmente.

## Diretrizes de projeto

As diretrizes de UI/UX, identidade visual de cada escola, controle de escopo e fluxo Git estão
documentadas no skill de projeto em
[.agents/skills/escolas-do-criar-ui/SKILL.md](./.agents/skills/escolas-do-criar-ui/SKILL.md).
