/* ===========================================
   INTERACTIONS.JS - user event listeners (reactivity)

   Strategy: EVENT DELEGATION.
   Because router.js recreates the #app content on every route change
   (app.innerHTML = html), any listener attached directly to a
   dynamically generated element (a card, a modal button) would be
   destroyed on the next navigation. Instead of re-attaching listeners
   on every render, we register ONE single listener on document, which
   is never recreated, and check the real click target through
   event.target.closest(selector). This covers even elements that do
   not exist yet when the listener is registered.
   =========================================== */

function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (!modal) return;
  modal.hidden = false;
  modal.classList.add('is-open');
}

function closeModal(modalElement) {
  if (!modalElement) return;
  modalElement.classList.remove('is-open');
  modalElement.hidden = true;
}

function initGlobalEvents() {
  // --- Click delegation: covers "Learn more" buttons, modal close (X and
  //     "Close") and clicks outside the box (on the dark overlay) ---
  document.addEventListener('click', function (event) {
    // 1. Click on a button that OPENS a modal (data-modal="id")
    const openBtn = event.target.closest('[data-modal]');
    if (openBtn) {
      openModal(openBtn.dataset.modal);
      return;
    }

    // 2. Click on a button that CLOSES the modal (X or "Close")
    const closeBtn = event.target.closest('[data-close-modal]');
    if (closeBtn) {
      const modal = closeBtn.closest('.modal-overlay');
      if (modal) closeModal(modal);
      return;
    }

    // 3. Click on the overlay dark background (outside the white box) also closes
    if (event.target.classList.contains('modal-overlay')) {
      closeModal(event.target);
    }
  });

  // --- Close the open modal when pressing Esc (accessibility) ---
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      const openModalEl = document.querySelector('.modal-overlay.is-open');
      if (openModalEl) closeModal(openModalEl);
    }
  });

  // --- Automatically close the hamburger menu when clicking a menu
  //     link (prevents the mobile menu from staying open after navigating) ---
  document.addEventListener('click', function (event) {
    const link = event.target.closest('nav a[data-route]');
    const menuToggle = document.getElementById('menu-toggle');
    if (link && menuToggle) {
      menuToggle.checked = false;
    }
  });
}

/* ===========================================
   Signup form events (route /signup)
   Registered via Router.registerAfterRender, i.e. re-attached
   every time this route renders (unlike the global events
   above, which use delegation and only need one registration).
   =========================================== */

const rules = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  zip: /^\d{5}-\d{3}$/,
  phone: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
  email: /^\S+@\S+\.\S+$/
};

function validateField(field) {
  const errorEl = document.getElementById('error-' + field.name);
  let message = '';

  if (field.hasAttribute('required') && field.value.trim() === '') {
    message = 'This field is required.';
  } else if (rules[field.name] && field.value && !rules[field.name].test(field.value)) {
    message = 'Invalid format.';
  }

  if (errorEl) errorEl.textContent = message;
  field.classList.toggle('field-invalid', message !== '');
  field.classList.toggle('field-valid', message === '' && field.value.trim() !== '');

  return message === '';
}

function validateProfileSelection(form) {
  const checked = form.querySelector('input[name="profile"]:checked');
  const errorEl = document.getElementById('error-profile');
  if (errorEl) errorEl.textContent = checked ? '' : 'Please select an option.';
  return Boolean(checked);
}

function validateForm(form) {
  const fields = form.querySelectorAll('input[name], select[name]');
  let allValid = true;

  fields.forEach(function (field) {
    if (field.type === 'radio') return; // handled separately
    const valid = validateField(field);
    if (!valid) allValid = false;
  });

  if (!validateProfileSelection(form)) {
    allValid = false;
  }

  return allValid;
}

function initFormEvents() {
  const form = document.getElementById('form-signup');
  if (!form) return; // this function only makes sense on the /signup route

  // SUBMIT event: fires on "Submit signup" click or Enter key
  form.addEventListener('submit', function (event) {
    // Prevent the browser default (full page reload), since the SPA
    // router — not the browser — controls navigation here
    event.preventDefault();

    const feedback = document.getElementById('form-feedback');
    const valid = validateForm(form);

    if (valid) {
      // Prepare the payload for localStorage persistence
      const signupData = {
        name: form.name.value,
        email: form.email.value,
        cpf: form.cpf.value,
        birthdate: form.birthdate.value,
        zip: form.zip.value,
        city: form.city.value,
        state: form.state.value,
        phone: form.phone.value,
        profile: form.profile.value,
        signedUpAt: new Date().toISOString()
      };

      // Persist before resetting the form
      saveToLocalStorage(signupData);
      // Also store the latest signup for the welcome-back banner
      localStorage.setItem('last-signup', JSON.stringify(signupData));

      feedback.innerHTML = '<div class="alert alert-success" role="status">'
        + '<strong>Signup submitted successfully!</strong> Our team will be in touch soon.</div>';
      form.reset();
      form.querySelectorAll('.field-valid, .field-invalid').forEach(function (el) {
        el.classList.remove('field-valid', 'field-invalid');
      });
      form.querySelectorAll('.field-error').forEach(function (el) {
        el.textContent = '';
      });
    } else {
      feedback.innerHTML = '<div class="alert alert-error" role="alert">'
        + '<strong>Submission error:</strong> please check the highlighted fields below.</div>';
      const firstInvalid = form.querySelector('.field-invalid');
      if (firstInvalid) firstInvalid.focus();
    }
  });

  // INPUT event (delegated inside the form): validates each field in
  // real time as the user types, without waiting for submission
  form.addEventListener('input', function (event) {
    if (event.target.matches('input, select')) {
      validateField(event.target);
    }
  });

  // CHANGE event on profile radios (input does not fire consistently
  // for radios across browsers the way change does)
  form.addEventListener('change', function (event) {
    if (event.target.name === 'profile') {
      validateProfileSelection(form);
    }
  });
}

// Global object exposed to other modules (main.js calls initGlobalEvents
// once; router.js calls initFormEvents after rendering /signup)
const Interactions = { initGlobalEvents, initFormEvents };
