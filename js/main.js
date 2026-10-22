// Halbert Insurance Services — site scripts

// ---------- Mobile menu toggle ----------
// The button tells screen readers whether the menu is open via aria-expanded.
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close the menu with the Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      navToggle.focus();
    }
  });
}

// ---------- Footer year ----------
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ---------- Quote form (Formspree) ----------
// Submits in the background with fetch() so the visitor stays on the page
// and sees a success or error message instead of being redirected.
const quoteForm = document.querySelector('[data-quote-form]');

if (quoteForm) {
  const status = quoteForm.querySelector('.form-status');
  const submitBtn = quoteForm.querySelector('button[type="submit"]');

  const showStatus = (message, type) => {
    status.textContent = message;
    status.className = `form-status is-${type}`;
    status.hidden = false;
  };

  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (quoteForm.action.includes('YOUR_FORM_ID')) {
      showStatus('The form isn\'t connected yet. Please call or text (321) 514-1692.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const response = await fetch(quoteForm.action, {
        method: 'POST',
        body: new FormData(quoteForm),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Request failed');

      quoteForm.reset();
      showStatus('Thanks! A licensed agent will reach out within one business day.', 'success');
    } catch {
      showStatus('Something went wrong. Please call or text us at (321) 514-1692.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request My Free Quote';
    }
  });
}
