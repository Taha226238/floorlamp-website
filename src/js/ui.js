/**
 * FLOORLAMP.AE — UI Module
 * Navigation, Accordions, Toast, Animations, Misc UI.
 */

const UI = (() => {

  /* ── Navigation ─────────────────────────────────────── */
  function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    // Scroll effect
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile hamburger
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileMenu = document.querySelector('.nav__mobile-menu');

    hamburger?.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu?.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileMenu?.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger?.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Active link — match against just the filename
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(link => {
      const href = link.getAttribute('href');
      const hrefFile = href ? href.split('/').pop().split('?')[0] : '';
      if (hrefFile === currentPath || (currentPath === '' && hrefFile === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ── Accordions ─────────────────────────────────────── */
  function initAccordions() {
    // Use event delegation on the document to avoid double-binding
    // when initAccordions() is called multiple times after dynamic render.
    // Only add the delegated listener once.
    if (initAccordions._bound) return;
    initAccordions._bound = true;

    document.addEventListener('click', e => {
      const trigger = e.target.closest('.accordion-trigger');
      if (!trigger) return;

      const item    = trigger.closest('.accordion-item');
      const content = item?.querySelector('.accordion-content');
      if (!item || !content) return;

      const isOpen = item.classList.contains('open');

      // Close siblings in same group
      const group = item.closest('[data-accordion-group], .accordion-group');
      if (group) {
        group.querySelectorAll('.accordion-item.open').forEach(sibling => {
          if (sibling === item) return;
          sibling.classList.remove('open');
          const sc = sibling.querySelector('.accordion-content');
          if (sc) sc.style.maxHeight = null;
          const st = sibling.querySelector('.accordion-trigger');
          if (st) st.setAttribute('aria-expanded', 'false');
        });
      }

      if (isOpen) {
        item.classList.remove('open');
        content.style.maxHeight = null;
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /* ── Toast Notifications ────────────────────────────── */
  function showToast(message, type = 'default') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-atomic', 'true');
      document.body.appendChild(container);
    }

    const icons = {
      success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      error:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
      default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    };

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `${icons[type] || icons.default}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      toast.addEventListener('animationend', () => toast.remove(), { once: true });
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /* ── Scroll Reveal ──────────────────────────────────── */
  function initScrollReveal() {
    // Only observe elements not already visible — safe to call multiple times
    const elements = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /* ── Filter Tabs ────────────────────────────────────── */
  function initFilters() {
    document.querySelectorAll('[data-filter-group]').forEach(group => {
      const tags = group.querySelectorAll('.filter-tag');
      tags.forEach(tag => {
        tag.addEventListener('click', () => {
          tags.forEach(t => t.classList.remove('active'));
          tag.classList.add('active');

          const filter = tag.dataset.filter;
          const grid = document.querySelector('[data-product-grid]');
          if (!grid) return;

          grid.querySelectorAll('[data-category]').forEach(card => {
            const match = !filter || filter === 'all' || card.dataset.category === filter;
            card.style.display = match ? '' : 'none';
          });
        });
      });
    });
  }

  /* ── Product Tabs ───────────────────────────────────── */
  function initProductTabs() {
    const nav = document.querySelector('.product-tabs__nav');
    if (!nav) return;

    nav.querySelectorAll('.product-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        nav.querySelectorAll('.product-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.product-tab-content').forEach(panel => {
          const panelId = panel.dataset.tabPanel || panel.dataset.tab;
          panel.classList.toggle('active', panelId === target);
        });
      });
    });
  }

  /* ── Quantity Selector ──────────────────────────────── */
  function initQtySelectors() {
    document.querySelectorAll('.qty-selector').forEach(selector => {
      const valEl  = selector.querySelector('.qty-value');
      const decBtn = selector.querySelector('[data-qty="dec"]');
      const incBtn = selector.querySelector('[data-qty="inc"]');
      if (!valEl) return;

      // Read stock limit from data attribute if available
      const stock  = parseInt(selector.dataset.stock) || 99;
      let qty      = parseInt(valEl.textContent) || 1;

      decBtn?.addEventListener('click', () => {
        qty = Math.max(1, qty - 1);
        valEl.textContent = qty;
      });

      incBtn?.addEventListener('click', () => {
        if (qty >= stock) {
          showToast(`Only ${stock} available in stock`, 'error');
          return;
        }
        qty = qty + 1;
        valEl.textContent = qty;
      });
    });
  }

  /* ── Smooth Scroll ──────────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ── Gallery Thumbnails ─────────────────────────────── */
  function initGallery() {
    const thumbs = document.querySelectorAll('.product-gallery__thumb');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        // Image swap would happen here when real images are added
      });
    });
  }

  /* ── Newsletter Form ────────────────────────────────── */
  function initNewsletter() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const input = form.querySelector('.newsletter-input');
        if (!input?.value.trim()) return;
        showToast('Thank you for subscribing!', 'success');
        input.value = '';
      });
    });
  }

  /* ── Contact Form ───────────────────────────────────── */
  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Message sent! We\'ll be in touch shortly.', 'success');
      form.reset();
    });
  }

  /* ── Init All ───────────────────────────────────────── */
  function init() {
    initNav();
    initAccordions();
    initScrollReveal();
    initFilters();
    initProductTabs();
    initQtySelectors();
    initSmoothScroll();
    initGallery();
    initNewsletter();
    initContactForm();
  }

  return { init, showToast, initScrollReveal, initAccordions };
})();
