# GitFlow + Conventional Commits + SemVer — how to use in this repo

## Branches
- `main` — stable production. Only receives merges from `develop` (release) or `hotfix/`. Tags `v1.0.0`, `v1.1.0`, `v2.0.0`.
- `develop` — continuous integration. Origin of every `feature/*`.
- `feature/name` — e.g. `feature/validation`, `feature/localstorage`, `feature/accessibility`. Merge back into `develop`.
- `hotfix/name` — branched from `main`, merged into `main` + `develop`.

## First commands (run at repo root)

```powershell
git init
git branch -M main
git add .
git commit -m "feat: scaffold frontend web portfolio with 4 assignments"
git checkout -b develop
git checkout -b feature/validation
# ... work ...
git add .
git commit -m "feat: CPF/CEP/email validation with visual feedback"
git checkout develop
git merge feature/validation
```

## Commits (Conventional Commits)
`feat:` new feature · `fix:` bug fix · `refactor:` restructuring without behavior change · `perf:` performance · `docs:` documentation · `style:` formatting.

Real examples from this project:
- `feat: localStorage persistence and full validation`
- `refactor: GitFlow modularization and separation of concerns`
- `perf: WCAG AA production optimization and Lighthouse`

## Releases (SemVer MAJOR.MINOR.PATCH)
- `v0.1.0` initial scaffold · `v0.2.0` JS modules + SPA routing
- `v1.0.0` localStorage + validation · `v1.1.0` modularization · `v2.0.0` WCAG AA + performance + deploy

```powershell
git checkout main
git merge develop
git tag -a v2.0.0 -m "release: accessible SPA ready for production"
```

## Publish to your GitHub

```powershell
gh repo create frontend-portfolio --public --source=. --remote=origin
git push -u origin main
git push -u origin develop
git push --tags
# without gh: create the empty repo at github.com/talesmferreiral first, then:
# git remote add origin https://github.com/talesmferreiral/frontend-portfolio.git
```

## Suggested CI/CD (GitHub Pages)
Settings > Pages > Deploy from branch > `main` / `/(root)`. Every push to `main` redeploys automatically. PRs from `feature/*` → `develop` run Lighthouse/axe checks.

---

# GitFlow + Conventional Commits + SemVer — como usar neste repo

## Branches
- `main` — produção estável. Só recebe merge de `develop` (release) ou `hotfix/`. Tags `v1.0.0`, `v1.1.0`, `v2.0.0`.
- `develop` — integração contínua. Origem de toda `feature/*`.
- `feature/nome` — ex: `feature/validacao`, `feature/localstorage`, `feature/acessibilidade`. Merge de volta para `develop`.
- `hotfix/nome` — a partir de `main`, merge em `main` + `develop`.

## Primeiros comandos (rode na raiz do repo)

```powershell
git init
git branch -M main
git add .
git commit -m "feat: scaffold portfolio frontend web com 4 atividades"
git checkout -b develop
git checkout -b feature/validacao
# ... trabalhar ...
git add .
git commit -m "feat: validacao CPF/CEP/email com feedback visual"
git checkout develop
git merge feature/validacao
```

## Commits (Conventional Commits)
`feat:` nova funcionalidade · `fix:` correção · `refactor:` reestruturação sem mudar comportamento · `perf:` performance · `docs:` documentação · `style:` formatação.

## Releases (SemVer MAJOR.MINOR.PATCH)
- `v0.1.0` scaffold inicial · `v0.2.0` módulos JS + roteamento SPA
- `v1.0.0` localStorage + validação · `v1.1.0` modularização · `v2.0.0` WCAG AA + performance + deploy
