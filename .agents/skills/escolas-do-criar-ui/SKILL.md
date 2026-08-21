---
name: escolas-do-criar-ui
description: Diretrizes, padrões visuais, controle de escopo e fluxo Git para o desenvolvimento e manutenção do site Escolas do Criar.
---

# Escolas do Criar — Diretrizes de UI/UX e Desenvolvimento

## Contexto do projeto

O site representa o grupo **Escolas do Criar**, formado por:

- **Castelinho do Criar**
- **Castelo do Criar**

- **Domínio:** `escolasdocriar`
- **Stack:** React, TypeScript, Tailwind CSS, GitHub
- **Branch principal:** `main`
- **Remote:** `origin`

---

## Forma de trabalho

Sempre trabalhar em uma feature por vez.

**Antes de alterar:**
1. Identificar previamente os arquivos e componentes envolvidos;
2. Avaliar se componentes existentes podem ser reutilizados;
3. Evitar mudanças fora do escopo solicitado.

- Não realizar refatorações amplas sem solicitação explícita.
- Não alterar componentes, páginas, estilos globais ou dependências que não sejam estritamente necessários para a feature.

---

## UI / UX

Priorizar:
- Interface clean, moderna e acolhedora;
- Boa hierarquia visual e tipográfica;
- Consistência entre seções e páginas;
- Espaçamentos proporcionais e redução de espaços vazios desnecessários;
- Responsividade e layout equilibrado em desktop, tablet e mobile;
- Acessibilidade e componentes reutilizáveis;
- Containers consistentes (preferencialmente entre ~1180px e 1280px de `max-width` quando aplicável).

Evitar:
- Excesso de cards e poluição visual;
- Blocos excessivamente longos de texto;
- Elementos desproporcionalmente pequenos em áreas grandes;
- Seções excessivamente longas ou redundantes;
- Repetição desnecessária de títulos e mensagens institucionais;
- Alterações globais não solicitadas.

---

## Identidade visual

Manter como base da paleta:
- **Azul** (primária / institucional);
- **Laranja** (accent / destaque e CTAs);
- **Branco** (fundo e respiro);
- **Tons claros de apoio** (fundos suaves e cartões).

O grupo deve transmitir uma imagem institucional, moderna e acolhedora. As duas escolas possuem personalidade própria, mantendo coerência com o ecossistema Escolas do Criar.

---

## Castelinho do Criar

- **Posicionamento:** *"Desenvolvendo os primeiros passos com afeto, cuidado, estímulo e intencionalidade."*
- **Conceitos principais:** Primeira Infância, afeto, cuidado, brincar, estímulo, desenvolvimento, descobertas, experiências, vínculos.
- **Ordem na interface:** O Castelinho deve aparecer antes do Castelo do Criar sempre que a interface representar a jornada educacional cronológica.

---

## Castelo do Criar

- **Posicionamento:** *"Educação com propósito. Formação com excelência."*
- **Segmentos:** Ensino Fundamental I, Ensino Fundamental II e Ensino Médio.
- **Conceitos principais:** Excelência acadêmica, formação integral, autonomia, responsabilidade, protagonismo, desenvolvimento humano, consciência social, preparação para o futuro.
- **Período estendido (experiências oferecidas):**
  - Teatro;
  - Robótica;
  - Jogos de tabuleiro;
  - Libras;
  - Reforço em Língua Portuguesa;
  - Reforço em Matemática;
  - Inglês;
  - Treinos esportivos.
- **Regra de conteúdo:** Não inventar serviços, horários ou informações institucionais não cadastrados.

---

## Validação visual

Depois de cada alteração relevante:
1. Validar a página no navegador;
2. Conferir exibição em desktop;
3. Conferir exibição em mobile;
4. Verificar ausência de overflow horizontal;
5. Verificar alinhamentos e grids;
6. Verificar espaçamentos e paddings;
7. Verificar legibilidade e contraste;
8. Garantir que não houve regressão visual em elementos ou páginas relacionadas.

Se for identificado qualquer problema provocado pela alteração, corrigir antes de finalizar.

---

## Controle de escopo

Quando uma alteração for solicitada:
- Modificar somente o necessário para atender ao objetivo;
- Preservar rotas existentes do projeto;
- Preservar funcionalidades existentes;
- Não instalar dependências sem real necessidade;
- Não modificar `package-lock.json` se nenhuma dependência tiver sido alterada;
- Não criar funcionalidades adicionais ou escopo não solicitado.

---

## Fluxo Git

Após concluir cada feature:
1. Revisar o `git diff`;
2. Adicionar via `git add` apenas os arquivos relacionados à alteração;
3. Não incluir arquivos não relacionados ou temporários;
4. Criar mensagem de commit curta, clara e objetiva (ex: `feat: ...`, `fix: ...`, `chore: ...`);
5. Executar o commit;
6. Executar push para a branch principal:
   ```bash
   git push origin main
   ```
7. Nunca finalizar uma feature com alterações apenas locais, salvo solicitação explícita do usuário.

---

## Resposta ao final

Ao concluir uma feature, responder de forma objetiva informando somente:
1. Arquivos alterados;
2. Resumo da mudança;
3. Hash do commit;
4. Confirmação do push para `origin/main`;
5. Eventuais pendências ou riscos.

*Não propor ou sugerir novas features automaticamente.*
