/* ===========================================
   DATA.JS - application data source
   Keeps content separate from markup: to add a new
   campaign, just append an object to this array, without
   touching any HTML template.
   =========================================== */

const campaigns = [
  {
    id: 'winter',
    title: 'Winter Clothing Drive',
    badgeText: 'Urgent',
    badgeClass: 'badge-urgent',
    image: '../images/campanha-agasalho.png',
    imageAlt: 'Illustration of folded coats representing the winter clothing drive',
    summary: 'Collecting warm clothes for vulnerable families during the winter.',
    details: 'We are collecting coats, blankets and warm clothes in good condition until the end of winter. Drop-off points open Monday to Friday, 9am to 5pm, at the NGO headquarters.'
  },
  {
    id: 'tutoring',
    title: 'After-School Tutoring',
    badgeText: 'Active',
    badgeClass: 'badge-active',
    image: '../images/reforco-escolar.png',
    imageAlt: 'Illustration of a whiteboard with notes representing the tutoring project',
    summary: 'Free Portuguese and Math tutoring for public-school children and teens.',
    details: 'Free Portuguese and Math classes, twice a week, for public-school children and teens with learning difficulties.'
  },
  {
    id: 'food',
    title: 'Solidarity Food Basket',
    badgeText: 'Active',
    badgeClass: 'badge-active',
    image: '../images/campanha-agasalho.png',
    imageAlt: 'Illustration representing the non-perishable food drive',
    summary: 'Monthly collection of non-perishable food for families in our support network.',
    details: 'We assemble and deliver food baskets monthly to about 60 families. We accept rice, beans, oil, sugar and hygiene items at our drop-off points.'
  }
];
