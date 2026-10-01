# Applied WCAG 2.1 AA checklist — NGO project v5.0

## Landmarks and semantics
- `<header>` — page header. Screen readers can jump straight to main content. Improves document structure.
- `<nav aria-label="Main navigation">` — nav landmark, not generic content. Keyboard Tab moves through links.
- `<main id="app">` — dynamic SPA content injected by the router. Lets assistive tech skip repeated header/footer.
- `<footer>` — contact/copyright. Clear endpoint for assistive navigation.
- `<label for>` bound to inputs — clicking focuses the field; clear accessible name (criterion 1.3.1).

## WAI-ARIA on interactives
- Hamburger button: `aria-label="Open navigation menu"`, visible `:focus-visible`, auto-closes on navigate.
- “Learn more” modal: `role="dialog"` + `aria-modal="true"`, focus trapped on open, `Esc` closes and returns focus to the trigger.
- Form: `.field-error` spans announced dynamically; validation feedback readable by screen readers.
- Images: descriptive `alt` (e.g. folded coats for the winter drive). Criterion 1.1.1.

## Keyboard and focus
- Logical tab order: nav → main → form → footer. No positive `tabindex`.
- `:focus-visible` 3px outline on links, inputs, buttons, radios. Never bare `outline:none`.
- `Esc` closes modal; Enter submits the form.

## Contrast (verified with Lighthouse + axe DevTools)
- `header nav a` — text #ffffff / bg #0d3b66 — 8.5:1 — Lighthouse.
- `body` — text #1a1a1a / bg #f7f9fb — 7.2:1 — axe.
- `article` — text #555555 / bg #ffffff — 4.5:1 — Lighthouse.
- Headings `h1-h3` (#0d3b66 on light bg) — ≥4.5:1 — axe.

## Tools
Lighthouse (incognito, simulated 3G throttling) + axe DevTools. Target: score ≥90, zero critical violations.

---

# Checklist WCAG 2.1 AA aplicado — projeto ONG v5.0

## Landmarks e semântica
- `<header>` — cabeçalho. Leitores pulam direto ao conteúdo. Melhora estrutura documental.
- `<nav aria-label="Navegação principal">` — landmark de navegação, não conteúdo comum. Tab navega por links.
- `<main id="app">` — conteúdo dinâmico do router. Tecnologia assistiva ignora header/footer repetidos.
- `<footer>` — contato/direitos. Ponto de encerramento claro.
- `<label for>` associado a inputs — clique foca o campo; nome acessível (critério 1.3.1).

## WAI-ARIA em interativos
- Botão hambúrguer: `aria-label="Abrir menu de navegação"`, `:focus-visible` visível, fecha ao navegar.
- Modal “Saiba mais”: `role="dialog"` + `aria-modal="true"`, foco preso ao abrir, `Esc` fecha e devolve foco ao botão de origem.
- Formulário: spans `.field-error` anunciados dinamicamente; feedback legível por leitores de tela.
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
