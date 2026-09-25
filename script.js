// ===== Theme: dark by default, choice remembered for this browsing session =====
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  try { sessionStorage.setItem('theme', theme); } catch (e) { /* storage unavailable */ }
}
let saved = 'dark';
try { saved = sessionStorage.getItem('theme') || 'dark'; } catch (e) {}
setTheme(saved);
toggle.addEventListener('click', () => setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

// ===== Mobile menu =====
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// ===== Highlight the nav link of the section in view =====
const links = [...nav.querySelectorAll('a')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));

// ===== Contact form: opens Gmail compose (no backend), mailto as fallback =====
const TO = 'poojasrivastavakkt@gmail.com';
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    note.textContent = 'Please fill in every field with a valid email address.';
    form.reportValidity();
    return;
  }
  const d = new FormData(form);
  const subject = d.get('subject').trim();
  const body = `Name:\n${d.get('name').trim()}\n\nEmail:\n${d.get('email').trim()}\n\nMessage:\n${d.get('message').trim()}\n\nSubject:\n${subject}`;
  const gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(TO) +
    '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  const mailto = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  const win = window.open(gmail, '_blank', 'noopener');
  if (!win) window.location.href = mailto; // popup blocked → default mail app
  note.textContent = 'Your email draft is ready to review and send from your mail app.';
});
