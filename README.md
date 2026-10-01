# Front-End Portfolio — Unifran | Computer Science, 2nd Semester

**Author:** Tales M. Ferreira — https://github.com/talesmferreiral
**Course:** Front-End Web Development
**Flagship project:** “Hands That Help” NGO — SPA in Vanilla JavaScript

This repository consolidates the 4 hands-on course assignments, evolving from static HTML/CSS to a modular SPA that is accessible (WCAG 2.1 AA), persists data locally, uses GitFlow versioning and is production-ready.

## Structure

```
frontend-portfolio/
├── index.html                  # Portfolio landing page (open in browser)
├── assets/style.css            # Portfolio styles
├── activities/
│   ├── practical-01-basics/    # HTML/CSS foundations — ngo-project
│   ├── practical-02-layout/    # Layout & responsiveness — ngo-project v2/v3
│   ├── practical-03-spa/       # SPA + validation + localStorage + modular (v2.0 to v5.0)
│   └── practical-04-production/# Versioning, accessibility, performance, deploy
├── docs/
│   ├── learning.md             # Consolidated critical reflection
│   ├── gitflow.md              # Branch, commit and release strategy
│   └── accessibility.md        # Applied WCAG 2.1 AA checklist
└── .gitignore
```

## Technical highlights (Assignment III v5.0 + IV)

- **Hash-router SPA** (`#/`, `#/projects`, `#/signup`), no reload, via `Router.initRouter()` and `registerAfterRender`.
- **Real-time + submit validation**: regex CPF `000.000.000-00`, CEP `00000-000`, phone `(00) 00000-0000`, email; `.field-valid` / `.field-invalid` classes + `.field-error` spans.
- **`localStorage` persistence**: `JSON.stringify` on `setItem` (`signup-history`, `last-signup`) and `JSON.parse` on `get`, with UI restore and “Welcome back” banner.
- **Modularization**: `data.js` (data) · `templates.js` (HTML) · `router.js` (navigation) · `interactions.js` (events/validation) · `storage.js` (persistence) · `main.js` (orchestrator).
- **WCAG 2.1 AA accessibility**: `<header>`, `<nav>`, `<main>`, `<footer>` landmarks; `aria-label`, `role="dialog"` + `aria-modal` on modals; `:focus-visible`; contrast ≥ 4.5:1 verified with Lighthouse/axe.
- **Production/performance**: minification (Vite/Terser ~60–70%), WebP images + `srcset` + `lazy`, static deploy via GitHub Pages with CI/CD on `main` push.

## Run locally

```bash
cd activities/practical-03-spa/ngo-spa-local-v5.0
python -m http.server 8000
# open http://localhost:8000/html/index.html
```

Visual portfolio: open root `index.html` in the browser.

## Suggested versioning (GitFlow)

- `main` — stable production (tags `v1.0.0`, `v1.1.0`, `v2.0.0`)
- `develop` — continuous integration
- `feature/*` — new features branched from `develop`
- `hotfix/*` — urgent fixes branched from `main`
- Conventional Commits (`feat:`, `fix:`, `refactor:`, `perf:`, `docs:`).

See `docs/gitflow.md` for the step-by-step.

## License

Educational use — Unifran. MIT for SPA code reuse.

---

# Portfólio Front-End para WEB — Unifran | Ciência da Computação 2º Semestre

**Autor:** Tales M. Ferreira — https://github.com/talesmferreiral
**Disciplina:** Desenvolvimento Front-End para WEB
**Projeto âncora:** ONG “Mãos que Ajudam” — SPA em Vanilla JavaScript

Este repositório consolida as 4 Experiências Práticas da disciplina, evoluindo de HTML/CSS estático até uma SPA modular, acessível (WCAG 2.1 AA), com persistência local, versionamento GitFlow e pronta para produção.

## Estrutura

```
frontend-portfolio/
├── index.html                  # Landing page do portfólio (abra no navegador)
├── assets/style.css            # Estilos do portfólio
├── activities/
│   ├── practical-01-basics/    # Base HTML/CSS — ngo-project
│   ├── practical-02-layout/    # Layout e responsividade — ngo-project v2/v3
│   ├── practical-03-spa/       # SPA + validação + localStorage + modular (v2.0 a v5.0)
│   └── practical-04-production/# Versionamento, acessibilidade, performance, deploy
├── docs/
│   ├── learning.md             # Reflexão crítica consolidada (EN + PT)
│   ├── gitflow.md              # Estratégia de branches, commits e releases (EN + PT)
│   └── accessibility.md        # Checklist WCAG 2.1 AA aplicado (EN + PT)
└── .gitignore
```

## Destaque técnico (Atividade III v5.0 + IV)

- **SPA com hash router** (`#/`, `#/projects`, `#/signup`), sem reload, com `Router.initRouter()` e `registerAfterRender`.
- **Validação em tempo real + submit**: regex CPF `000.000.000-00`, CEP `00000-000`, telefone `(00) 00000-0000`, e-mail; classes `.field-valid` / `.field-invalid` + spans `.field-error`.
- **Persistência `localStorage`**: `JSON.stringify` no `setItem` (`signup-history`, `last-signup`) e `JSON.parse` no `get`, com restauração da UI e mensagem “Welcome back”.
- **Modularização**: `data.js` (dados) · `templates.js` (HTML) · `router.js` (navegação) · `interactions.js` (eventos/validação) · `storage.js` (persistência) · `main.js` (orquestrador).
- **Acessibilidade WCAG 2.1 AA**: landmarks `<header>`, `<nav>`, `<main>`, `<footer>`; `aria-label`, `role="dialog"` + `aria-modal`; foco `:focus-visible`; contraste ≥ 4.5:1 validado com Lighthouse/axe.
- **Performance/produção**: minificação (Vite/Terser ~60-70%), imagens WebP + `srcset` + `lazy`, deploy estático via GitHub Pages com CI/CD no push da `main`.

## Como rodar

```bash
cd activities/practical-03-spa/ngo-spa-local-v5.0
python -m http.server 8000
# abrir http://localhost:8000/html/index.html
```

Portfólio visual: abra `index.html` na raiz deste repo no navegador.

## Versionamento sugerido (GitFlow)

- `main` — produção estável (tags `v1.0.0`, `v1.1.0`, `v2.0.0`)
- `develop` — integração contínua
- `feature/*` — novas funcionalidades a partir de `develop`
- `hotfix/*` — correções urgentes a partir de `main`
- Commits no padrão Conventional Commits (`feat:`, `fix:`, `refactor:`, `perf:`, `docs:`).

Veja `docs/gitflow.md` para o passo a passo.

## Licença

Uso educacional — Unifran. MIT para reaproveitamento do código da SPA.
