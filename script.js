/* Site customization and progressively enhanced interactions. */
(() => {
  'use strict';
  const cfg = window.PORTFOLIO || {};
  const cleanText = (v) => typeof v === 'string' ? v.trim() : '';
  const textFields = ['name', 'role', 'intro', 'about', 'location', 'degree', 'institution', 'graduationYear', 'certifications', 'languages', 'experienceTitle', 'experienceDates'];
  if (cleanText(cfg.name) && !document.body.classList.contains('case-page')) {
    document.title = `${cleanText(cfg.name)} | Data & Business Analytics Portfolio`;
  }
  for (const key of textFields) {
    const value = cleanText(cfg[key]);
    if (!value) continue;
    document.querySelectorAll(`[data-text="${key}"]`).forEach(el => { el.textContent = value; });
  }
  // Optional profile items are displayed only when the user fills them in.
  for (const key of ['certifications', 'languages', 'experienceTitle', 'experienceDates']) {
    const value = cleanText(cfg[key]);
    document.querySelectorAll(`[data-profile-item="${key}"]`).forEach(el => { el.hidden = !value; });
  }
  const educationVisible = ['degree', 'institution', 'graduationYear'].some(k => cleanText(cfg[k]));
  document.querySelectorAll('[data-profile-item="degree"]').forEach(el => { el.hidden = !educationVisible; });
  const profileSection = document.getElementById('profile-details');
  if (profileSection) profileSection.hidden = !educationVisible && !cleanText(cfg.certifications) && !cleanText(cfg.languages);
  // Only allow http(s) URLs, relative local links, or mailto: for outbound anchors.
  const allowedLink = (value) => {
    if (!value || typeof value !== 'string') return '';
    const s = value.trim();
    if (s.startsWith('https://') || s.startsWith('http://')) return s;
    if (/^(?:\.\/?|assets\/)[a-zA-Z0-9_./-]+$/.test(s)) return s;
    return '';
  };
  document.querySelectorAll('[data-link]').forEach(el => {
    const key = el.dataset.link;
    let href = '';
    if (key === 'email') {
      const email = cleanText(cfg.email);
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) href = `mailto:${email}`;
    } else {
      href = allowedLink(cfg[key]);
    }
    if (href) { el.href = href; el.hidden = false; }
    else { el.hidden = true; }
  });
  // The photo is optional. The reserved frame remains until an image successfully loads.
  const photoPath = allowedLink(cfg.photo);
  document.querySelectorAll('[data-profile-photo]').forEach(img => {
    const frame = img.closest('.portrait-frame');
    const placeholder = frame && frame.querySelector('[data-photo-placeholder]');
    if (!photoPath) return;
    img.addEventListener('load', () => {
      img.hidden = false;
      if (placeholder) placeholder.hidden = true;
    }, {once: true});
    img.addEventListener('error', () => {
      img.hidden = true;
      if (placeholder) placeholder.hidden = false;
    }, {once: true});
    img.src = photoPath;
  });
  document.querySelectorAll('#year').forEach(el => {el.textContent = String(new Date().getFullYear()); });

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menu && nav) {
    const close = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Open navigation'); };
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') === 'true';
      nav.classList.toggle('open', !expanded);
      menu.setAttribute('aria-expanded', String(!expanded));
      menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    window.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 760) close(); });
  }
  if (window.IntersectionObserver && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver((items, obs) => {
      items.forEach(item => {if (item.isIntersecting) {item.target.classList.add('in-view'); obs.unobserve(item.target); }});
    }, {threshold: 0.06, rootMargin: '0px 0px -15px 0px'});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  const sectionEls = document.querySelectorAll('main section[id]');
  if (sectionEls.length && window.IntersectionObserver) {
    const navLinks = [...document.querySelectorAll('#primary-nav a[href^="#"]')];
    const sectionObserver = new IntersectionObserver(items => {
      items.forEach(item => {
        if (!item.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${item.target.id}`));
      });
    }, {rootMargin:'-18% 0px -60% 0px'});
    sectionEls.forEach(section => sectionObserver.observe(section));
  }
})();
