/* ===========================================
   ROUTER - roteamento via hash (#/rota)
   Intercepta a navegação, limpa o contêiner #app e injeta o HTML
   correspondente, sem recarregar a página.
   =========================================== */

import { renderHome, renderProjetos, renderCadastro, renderNotFound } from './templates.js';

// Mapa de rotas: associa cada caminho à função de template correspondente
const routes = {
  '/': renderHome,
  '/projetos': renderProjetos,
  '/cadastro': renderCadastro
};

// Funções que precisam rodar DEPOIS que o HTML da rota é injetado no DOM
// (ex.: anexar listeners de validação no formulário recém-criado)
const afterRenderHooks = {};

export function registerAfterRender(path, callback) {
  afterRenderHooks[path] = callback;
}

function getCurrentPath() {
  // Remove o "#" do início do hash; "" ou "/" viram a rota inicial "/"
  const hash = window.location.hash.slice(1);
  return hash === '' ? '/' : hash;
}

function updateActiveLink(path) {
  document.querySelectorAll('nav a[data-route]').forEach((link) => {
    link.classList.toggle('active', link.dataset.route === path);
  });
}

export function router() {
  const path = getCurrentPath();
  const view = routes[path] || renderNotFound;
  const app = document.getElementById('app');

  // 1. Limpa o conteúdo atual do contêiner alvo
  app.innerHTML = '';

  // 2. Gera o novo fragmento HTML a partir do template da rota
  const html = view();

  // 3. Injeta o novo conteúdo
  app.innerHTML = html;

  // 4. Atualiza o estado visual do menu (link ativo) e volta ao topo
  updateActiveLink(path);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 5. Executa a lógica extra da rota (validação de formulário, modais etc.),
  //    se houver alguma registrada para esse caminho
  if (afterRenderHooks[path]) {
    afterRenderHooks[path]();
  }
}

export function initRouter() {
  // Reage a cada mudança de hash (clique em link, botão voltar do navegador...)
  window.addEventListener('hashchange', router);
  // Garante que a rota correta seja renderizada no primeiro carregamento
  window.addEventListener('DOMContentLoaded', router);
}
