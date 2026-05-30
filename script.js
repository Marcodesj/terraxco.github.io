// ============================================
// TERRAXCO — Script principal
// ============================================

let lang = 'fr';

// ---- LANGUE ----
function setLang(newLang) {
  lang = newLang;
  document.getElementById('langToggle').textContent = lang === 'fr' ? 'EN' : 'FR';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-fr]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (!text) return;
    if (el.tagName === 'INPUT' && el.placeholder) {
      // skip placeholders for now
    } else if (el.innerHTML.includes('<br>')) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  // Update page title & meta
  document.title = lang === 'fr'
    ? 'TERRAXCO — Aménagement & Déneigement | Québec'
    : 'TERRAXCO — Landscaping & Snow Removal | Quebec';
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLang(lang === 'fr' ? 'en' : 'fr');
});

// ---- BURGER MENU ----
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = burger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = burger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ---- NAV SCROLL ----
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- FORM ----
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  const success = document.getElementById('formSuccess');

  btn.textContent = lang === 'fr' ? 'Envoi en cours...' : 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    e.target.reset();
    btn.textContent = lang === 'fr' ? 'Envoyer ma demande' : 'Send my request';
    btn.disabled = false;
    success.style.display = 'block';
    success.textContent = lang === 'fr'
      ? '✅ Message envoyé ! Nous vous contacterons sous 24h.'
      : '✅ Message sent! We\'ll contact you within 24h.';
    setTimeout(() => { success.style.display = 'none'; }, 5000);
  }, 1200);
}

// ---- INTERSECTION OBSERVER (fade-in on scroll) ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .why-card, .contact-block').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
