/* ===========================================
   ROUTER - hash-based routing (#/route)
   Intercepts navigation, clears the #app container and injects the
   matching HTML, without reloading the page.

   Note: this project uses plain <script> tags (not type="module") on
   purpose, so it works even when opening index.html directly in the
   browser (file://), with no local server needed. Functions are therefore
   exposed on global objects (Templates, Router) instead of import/export.
   =========================================== */

// Route map: associates each path with its template function
const routes = {
  '/': Templates.renderHome,
  '/projects': Templates.renderProjects,
  '/signup': Templates.renderSignup
};

// Callbacks that must run AFTER the route HTML is injected into the DOM
// (e.g. attaching validation listeners to the freshly created form)
const afterRenderHooks = {};

function registerAfterRender(path, callback) {
  afterRenderHooks[path] = callback;
}

function getCurrentPath() {
  // Strip the leading "#" from the hash; "" becomes the home route "/"
  const hash = window.location.hash.slice(1);
  return hash === '' ? '/' : hash;
}

function updateActiveLink(path) {
  document.querySelectorAll('nav a[data-route]').forEach((link) => {
    link.classList.toggle('active', link.dataset.route === path);
  });
}

function router() {
  const path = getCurrentPath();
  const view = routes[path] || Templates.renderNotFound;
  const app = document.getElementById('app');
  if (!app) return;

  // 1. Clear the current target container content
  app.innerHTML = '';

  // 2. Build the new HTML fragment from the route template
  const html = view();

  // 3. Inject the new content
  app.innerHTML = html;

  // 4. Update the menu visual state (active link) and scroll back to top
  updateActiveLink(path);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 5. Run the route extra logic (form validation, modals, etc.),
  //    if any is registered for this path
  if (afterRenderHooks[path]) {
    afterRenderHooks[path]();
  }
}

function initRouter() {
  // React to every hash change (link clicks, browser back button...)
  window.addEventListener('hashchange', router);
  // Render the correct route as soon as the script loads
  router();
}

// Global object exposed to main.js
const Router = { initRouter, registerAfterRender };
