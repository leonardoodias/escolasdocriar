# Ajuste de tamanho do nome da escola no header

## Objetivo
Deixar o nome "Escolas do Criar" mais visível no header, sem quebrar a responsividade ou o alinhamento com o logo.

## Alteração proposta
Em `src/components/site/Header.tsx`, aumentar a tipografia da marca:
- Nome da escola (`grupo.nome`): de `text-base` para `text-lg sm:text-xl`.
- Cidade (`grupo.cidade`): de `text-[11px]` para `text-xs sm:text-sm`, mantendo hierarquia.
- Garantir que `truncate` continue funcionando em telas pequenas (o container já tem `min-w-0`).

## Critério de aceitação
- O nome da escola fica perceptivelmente maior no desktop.
- No mobile continua enxuto, sem cortar ou empurrar os botões do header.
- Typecheck e build permanecem limpos.
