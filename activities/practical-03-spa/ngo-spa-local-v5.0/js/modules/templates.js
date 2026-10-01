/* ===========================================
   TEMPLATES - each function returns the HTML (as a string) of a "page"
   Keeps markup logic separate from routing logic
   =========================================== */

const Templates = {};

Templates.renderHome = function () {
  return `
    <section id="about">
        <h1>Hands That Help</h1>
        <img src="../images/equipe-voluntarios.png" alt="Illustration of NGO volunteers gathered for a community action" loading="lazy">
        <p>We are a non-profit organization dedicated to transforming
        lives through solidarity, connecting donors and volunteers
        to causes that make a difference in the Franca community and region.</p>
    </section>

    <section id="mission">
        <h2>Our Mission</h2>
        <p>To expand social reach through community projects,
        promoting dignity and opportunities for those who need them most.</p>
    </section>

    <aside>
        <h2>Why donate?</h2>
        <p>Over 820 thousand third-sector organizations operate in Brazil,
        but only 30% have an adequate digital presence. Your contribution
        helps change that reality.</p>
    </aside>
  `;
}

/* ---- Helper sub-templates: build ONE card and ONE modal from
   ONE campaign object. Combined via .map() in renderProjects(). ---- */

function templateCard(campaign) {
  return `
    <article>
        <span class="badge ${campaign.badgeClass}">${campaign.badgeText}</span>
        <h3>${campaign.title}</h3>
        <img src="${campaign.image}" alt="${campaign.imageAlt}" loading="lazy">
        <p>${campaign.summary}</p>
        <button type="button" class="btn-modal" data-modal="${campaign.id}">Learn more</button>
    </article>
  `;
}

function templateModal(campaign) {
  return `
    <div class="modal-overlay" id="modal-${campaign.id}" hidden>
        <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-${campaign.id}-title">
            <button type="button" class="modal-close" data-close-modal aria-label="Close dialog">&times;</button>
            <h3 id="modal-${campaign.id}-title">${campaign.title}</h3>
            <span class="badge ${campaign.badgeClass}">${campaign.badgeText}</span>
            <p>${campaign.details}</p>
            <button type="button" class="btn-fechar" data-close-modal>Close</button>
        </div>
    </div>
  `;
}

Templates.renderProjects = function () {
  // Build N cards and N modals by iterating the data array (data.js) with
  // .map(), and join everything into a single string with .join('') before
  // injecting it into the DOM via innerHTML (done by the router, in app.innerHTML = html).
  const cardsHTML = campaigns.map(templateCard).join('');
  const modalsHTML = campaigns.map(templateModal).join('');

  return `
    <h1>Our Projects</h1>

    <section id="campaigns">
        <h2>Ongoing Campaigns</h2>
        <div class="grid-12">
            ${cardsHTML}
        </div>
    </section>

    <section id="how-to-donate">
        <h2>How to Donate</h2>
        <p>You can contribute financially via bank transfer,
        or donate items such as clothes, non-perishable food and
        school supplies.</p>
        <ul>
            <li>Email: contact@handsthathelp.org</li>
            <li>Drop-off points: NGO headquarters, Monday to Friday, 9am to 5pm</li>
        </ul>
    </section>

    <section id="cta">
        <h2>Want to be part of this change?</h2>
        <p><a href="#/signup">Sign up now as a donor or volunteer</a></p>
    </section>

    ${modalsHTML}
  `;
}

Templates.renderSignup = function () {
  return `
    <h1>Donor and Volunteer Signup</h1>
    <p>Fill in the form below to join our support network.</p>

    <div class="alert alert-info" role="status">
        <strong>Note:</strong> all fields are required.
    </div>

    <div id="form-feedback"></div>

    <form id="form-signup" novalidate>
        <fieldset>
            <legend>Personal Details</legend>

            <label for="name">Full name</label>
            <input type="text" id="name" name="name" required placeholder="Type your full name" autocomplete="name">
            <span class="field-error" id="error-name"></span>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="youremail@example.com" autocomplete="email">
            <span class="field-error" id="error-email"></span>

            <label for="birthdate">Date of birth</label>
            <input type="date" id="birthdate" name="birthdate" required autocomplete="bday">
            <span class="field-error" id="error-birthdate"></span>

            <label for="cpf">Individual Taxpayer ID (CPF)</label>
            <input type="text" id="cpf" name="cpf" required maxlength="14" placeholder="000.000.000-00" inputmode="numeric">
            <span class="field-error" id="error-cpf"></span>
        </fieldset>

        <fieldset>
            <legend>Address</legend>

            <label for="zip">ZIP code</label>
            <input type="text" id="zip" name="zip" required maxlength="9" placeholder="00000-000" inputmode="numeric" autocomplete="postal-code">
            <span class="field-error" id="error-zip"></span>

            <label for="city">City</label>
            <input type="text" id="city" name="city" required placeholder="Type your city" autocomplete="address-level2">
            <span class="field-error" id="error-city"></span>

            <label for="state">State</label>
            <select id="state" name="state" required autocomplete="address-level1">
                <option value="">Select</option>
                <option value="SP">São Paulo</option>
                <option value="MG">Minas Gerais</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="PR">Paraná</option>
                <option value="other">Other</option>
            </select>
            <span class="field-error" id="error-state"></span>
        </fieldset>

        <fieldset>
            <legend>Contact and Profile</legend>

            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required placeholder="(00) 00000-0000" inputmode="tel" autocomplete="tel">
            <span class="field-error" id="error-phone"></span>

            <span id="profile-label">I want to be a:</span>
            <div class="radio-group" role="radiogroup" aria-labelledby="profile-label">
                <span class="radio-option">
                    <input type="radio" id="donor" name="profile" value="donor" required>
                    <label for="donor">Donor</label>
                </span>
                <span class="radio-option">
                    <input type="radio" id="volunteer" name="profile" value="volunteer">
                    <label for="volunteer">Volunteer</label>
                </span>
            </div>
            <span class="field-error" id="error-profile"></span>
        </fieldset>

        <div class="form-actions">
            <button type="submit">Submit signup</button>
        </div>
    </form>
  `;
}

Templates.renderNotFound = function () {
  return `
    <h1>Page not found</h1>
    <p>The content you are looking for does not exist. <a href="#/">Back to home</a></p>
  `;
}
