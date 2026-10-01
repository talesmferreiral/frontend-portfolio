# Reflexão sobre a aprendizagem — Front-End para WEB

## Pontos fortes
Evoluí de páginas estáticas para uma SPA completa da ONG “Mãos que Ajudam”: hash router sem reload, validação com regex em tempo real e no submit com feedback visual (`.campo-valido`/`.campo-invalido` + `.erro-campo`), persistência em `localStorage` com `stringify/parse` e restauração da UI, e arquitetura modular (`data`, `templates`, `router`, `interactions`, `storage`, `main`). Apliquei WCAG 2.1 AA (landmarks, ARIA, foco visível, contraste ≥4.5:1) e GitFlow com Conventional Commits e SemVer.

## Oportunidades de melhoria
Automatizar checks (Lighthouse/axe em Actions) em vez de depender só de teste manual; aprofundar testes com NVDA/VoiceOver reais; refinar `prefers-color-scheme` e `forced-colors`; adicionar testes unitários para `validarCampo()` e `salvarNoLocalStorage()`.

## Contribuição profissional
Aprendi o ciclo completo: codar, versionar, documentar (README, issues, milestones, PRs), otimizar (minificação ~65%, WebP + srcset + lazy) e publicar (GitHub Pages + CI/CD). Entendi que acessibilidade e performance são requisitos, não opcionais — essencial para ONGs com público diverso e conexão limitada. Saio apto a entregar front-end acessível, rápido e pronto para produção em times ágeis.
