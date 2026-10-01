// PERSISTENCE MODULE - localStorage
// Solely responsible for saving and retrieving browser data.
// This module holds no form-validation or DOM-manipulation logic,
// ensuring high cohesion and low coupling with the interactions module.

// Append signup data to localStorage, keeping a history
function saveToLocalStorage(data) {
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('signup-history') || '[]');
    if (!Array.isArray(history)) history = [];
  } catch (e) {
    history = [];
  }
  history.push(data);
  localStorage.setItem('signup-history', JSON.stringify(history));
}

// Retrieve the latest signup stored in localStorage
function getLastSignup() {
  const latest = localStorage.getItem('last-signup');
  if (!latest) return null;
  try {
    return JSON.parse(latest);
  } catch (e) {
    return null;
  }
}

// Restore the user interface from the signup history.
// Shows a welcome-back banner only on the home route, so it never
// overrides the content of other routes (e.g. /signup or /projects).
function restoreInterface() {
  const hash = window.location.hash.slice(1) || '/';
  if (hash !== '/') return;

  const lastSignup = getLastSignup();
  if (!lastSignup || !lastSignup.name) return;

  const app = document.getElementById('app');
  if (!app) return;

  const banner = document.createElement('div');
  banner.className = 'alert alert-success';
  banner.setAttribute('role', 'status');

  const strong = document.createElement('strong');
  strong.textContent = 'Welcome back, ' + lastSignup.name + '!';
  banner.appendChild(strong);

  const date = document.createElement('small');
  date.textContent = 'Your last signup was on ' + new Date(lastSignup.signedUpAt).toLocaleDateString('en-US');
  banner.appendChild(document.createElement('br'));
  banner.appendChild(date);

  app.prepend(banner);
}
