# Checklist WCAG 2.1 AA aplicado — projeto ONG v5.0

## Landmarks e semântica
- `<header>` — cabeçalho. Leitores pulam direto ao conteúdo. Melhora estrutura documental.
- `<nav aria-label="Navegação principal">` — menu. Tratado como landmark, não conteúdo comum. Tab navega por links.
- `<main id="app">` — conteúdo dinâmico do router. Foco do SPA; leitores ignoram header/footer repetidos.
- `<footer>` — rodapé/contato. Ponto de encerramento claro.
- `<label for>` associado a inputs — clique foca o campo; nome acessível para leitores (critério 1.3.1).

## WAI-ARIA em interativos
- Botão hambúrguer: `aria-label="Abrir menu de navegação"`, `:focus-visible` visível, fecha ao navegar.
- Modal “Saiba mais”: `role="dialog"` + `aria-modal="true"`, foco preso ao abrir, `Esc` fecha e devolve foco ao botão de origem.
- Formulário: `aria-describedby`/`erro-campo` com `role="alert"` implícito via texto dinâmico; validação anunciada.
- Imagens: `alt` descritivos (ex: casacos da campanha do agasalho). Critério 1.1.1.

## Teclado e foco
- Ordem de tab lógica: nav → main → form → footer. Sem `tabindex` positivo.
- `:focus-visible` com outline de 3px em links, inputs, botões e radios. Nunca apenas `outline:none`.
- `Esc` fecha modal; Enter submete o form.

## Contraste (validados com Lighthouse + axe DevTools)
- `header nav a` — texto #ffffff / fundo #0d3b66 — 8.5:1 — Lighthouse.
- `body` — texto #1a1a1a / fundo #f7f9fb — 7.2:1 — axe.
- `article` — texto #555555 / fundo #ffffff — 4.5:1 — Lighthouse.
- Títulos `h1-h3` (#0d3b66 sobre fundo claro) — ≥4.5:1 — axe.

## Ferramentas
Lighthouse (modo anônimo, throttling 3G simulado) + axe DevTools. Meta: score ≥90 e zero violações críticas.
