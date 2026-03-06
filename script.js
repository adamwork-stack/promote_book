/**
 * Life Punch - Book Promotion Website
 * JavaScript for interactivity
 */

(function () {
  'use strict';

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });

    // Close menu when clicking a link (mobile)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('active') && 
          !navMenu.contains(e.target) && 
          !navToggle.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Contact form - basic client-side handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // For demo: form has no action, so prevent default
      // Replace with your backend/Formspree/Netlify Forms endpoint
      const action = contactForm.getAttribute('action');
      if (!action || action === '#') {
        e.preventDefault();
        alert('Form submitted! Connect this form to your preferred backend (Formspree, Netlify Forms, etc.) or add a mailto link.');
      }
    });
  }

  // Lazy load images for performance (optional enhancement)
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach(function (img) { imageObserver.observe(img); });
  }
})();
