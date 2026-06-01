// ---- RÉALISATIONS TABS — global function ----
window.showReal = function(id, btn) {
  document.querySelectorAll('[id^="real-"]').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.real-tab').forEach(t => t.classList.remove('real-tab--active'));
  var el = document.getElementById('real-' + id);
  if (el) el.style.display = 'block';
  btn.classList.add('real-tab--active');
};

// TERRAXCO — Script principal

let lang = 'fr';

// ---- LANGUE ----
function setLang(l) {
  lang = l;
  document.getElementById('langToggle').textContent = lang === 'fr' ? 'EN' : 'FR';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-fr]').forEach(el => {
    const txt = el.getAttribute('data-' + lang);
    if (!txt) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
    if (txt.includes('<br>')) el.innerHTML = txt;
    else el.textContent = txt;
  });
  document.title = lang === 'fr'
    ? 'TERRAXCO — Aménagement, Terrassement & Déneigement | Québec'
    : 'TERRAXCO — Landscaping, Earthwork & Snow Removal | Quebec';
}
document.getElementById('langToggle').addEventListener('click', () => setLang(lang === 'fr' ? 'en' : 'fr'));

// ---- NAV SCROLL ----
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

// ---- BURGER ----
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  const s = burger.querySelectorAll('span');
  s[0].style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
  s[1].style.opacity = open ? '0' : '';
  s[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}));

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ---- FORMSPREE FORM ----
async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.btn-submit');
  const success = document.getElementById('formSuccess');
  const error = document.getElementById('formError');

  // UI feedback
  btn.textContent = lang === 'fr' ? 'Envoi en cours...' : 'Sending...';
  btn.disabled = true;
  if (success) success.style.display = 'none';
  if (error) error.style.display = 'none';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // Success
      form.reset();
      btn.textContent = lang === 'fr' ? 'Envoyer ma demande' : 'Send my request';
      btn.disabled = false;
      if (success) {
        success.style.display = 'block';
        success.textContent = lang === 'fr'
          ? '✅ Demande envoyée! Nous vous contacterons dans les 24h.'
          : '✅ Request sent! We\'ll contact you within 24h.';
        setTimeout(() => success.style.display = 'none', 6000);
      }
    } else {
      throw new Error('Erreur serveur');
    }
  } catch (err) {
    btn.textContent = lang === 'fr' ? 'Envoyer ma demande' : 'Send my request';
    btn.disabled = false;
    if (error) {
      error.style.display = 'block';
      error.textContent = lang === 'fr'
        ? '❌ Erreur d\'envoi. Appelez-nous au 438-531-0734.'
        : '❌ Send error. Please call us at 438-531-0734.';
    }
  }
}

// ---- SCROLL ANIMATIONS ----
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.svc-card, .temo-card, .apropos-card-big, .apropos-card-sm, .gal-item, .contact-block, .equipe-card').forEach(el => {
  el.classList.add('fade-in');
  obs.observe(el);
});
