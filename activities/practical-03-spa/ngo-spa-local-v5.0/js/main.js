/* ===========================================
   MAIN.JS - application entry point
   Only orchestrates module initialization; it holds no business
   logic of its own (that lives inside each specialized module).

   Loaded last (after templates.js and router.js), since it
   depends on the globals defined in them.
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  // Global (delegated) events only need one registration,
  // since they keep working even after #app is recreated
  Interactions.initGlobalEvents();

  // Register the callback that must run every time the /signup route
  // renders (the form is recreated on each navigation, so its
  // specific listeners must be re-attached as well)
  Router.registerAfterRender('/signup', Interactions.initFormEvents);

  // Initialize the router - this reads the URL hash and injects
  // the matching content into #app
  Router.initRouter();

  // Restore persisted UI state (e.g. welcome-back banner) AFTER the
  // router renders, so it never gets overwritten by route content.
  // The function itself is route-aware (home only).
  if (typeof restoreInterface === 'function') {
    restoreInterface();
  }
});
