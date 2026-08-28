/**
 * FLOORLAMP.AE — Shared HTML Components
 * Injects nav, search overlay, cart drawer, and footer
 * into every page automatically via placeholder divs.
 *
 * Execution order guarantee:
 * This script runs synchronously when parsed. By the time
 * DOMContentLoaded fires in main.js, all placeholders have
 * already been replaced, so Cart.init() / Search.init() /
 * UI.init() will always find the injected elements.
 */

(function () {
  'use strict';

  // Detect if we are inside the pages/ subfolder.
  // If so, links to other pages stay relative (same folder).
  // Links to index.html and assets need ../
  const inPages = window.location.pathname.includes('/pages/');
  const inBlog  = window.location.pathname.includes('/blog/');
  const root    = (inPages || inBlog) ? '../' : '';
  const pg      = inBlog ? '../pages/' : (inPages ? '' : 'pages/');

  const NAV_HTML = `
<header>
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="container nav__inner">
      <a href="${root}index.html" class="nav__logo" aria-label="Floorlamp.ae — Home">
        <img src="${root}src/images/lo.png" alt="Floorlamp.ae" class="nav__logo-img">
      </a>
      <ul class="nav__links" role="list">
        <li><a href="${root}index.html"          class="nav__link">Home</a></li>
        <li><a href="${pg}shop.html"              class="nav__link">Shop</a></li>
        <li><a href="${pg}floor-lamps.html"       class="nav__link">Floor Lamps</a></li>
        <li><a href="${pg}wall-lamps.html"         class="nav__link">Wall Lamps</a></li>
        <li><a href="${pg}about.html"             class="nav__link">About</a></li>
      </ul>
      <div class="nav__actions">
        <button class="nav__action-btn" data-search-open aria-label="Search products">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button class="nav__action-btn" data-cart-open aria-label="Open cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span class="cart-badge" aria-label="Cart items">0</span>
        </button>
        <button class="nav__hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span class="nav__hamburger-line"></span>
          <span class="nav__hamburger-line"></span>
          <span class="nav__hamburger-line"></span>
        </button>
      </div>
    </div>
  </nav>
</header>
<div class="nav__mobile-menu" id="mobile-menu" role="dialog" aria-label="Mobile navigation">
  <ul class="nav__mobile-links" role="list">
    <li><a href="${root}index.html"       class="nav__mobile-link">Home <span>→</span></a></li>
    <li><a href="${pg}shop.html"           class="nav__mobile-link">Shop <span>→</span></a></li>
    <li><a href="${pg}floor-lamps.html"    class="nav__mobile-link">Floor Lamps <span>→</span></a></li>
    <li><a href="${pg}wall-lamps.html"      class="nav__mobile-link">Wall Lamps <span>→</span></a></li>
    <li><a href="${pg}about.html"          class="nav__mobile-link">About <span>→</span></a></li>
    <li><a href="${pg}faq.html"            class="nav__mobile-link">FAQ <span>→</span></a></li>
    <li><a href="${pg}contact.html"        class="nav__mobile-link">Contact <span>→</span></a></li>
  </ul>
  <div class="nav__mobile-actions">
    <a href="${pg}shop.html" class="btn btn--primary btn--full">Shop Now</a>
  </div>
</div>`;

  const SEARCH_HTML = `
<div class="search-overlay" role="dialog" aria-label="Search" aria-modal="true">
  <div class="container">
    <div class="search-overlay__header">
      <span class="eyebrow">Search Products</span>
      <button class="search-overlay__close" aria-label="Close search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="search-form" role="search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="search" class="search-input" placeholder="Search lamps…" aria-label="Search for products" autocomplete="off">
    </div>
    <div class="search-results" aria-live="polite"></div>
  </div>
</div>`;

  const CART_HTML = `
<div class="cart-overlay" aria-hidden="true"></div>
<aside class="cart-drawer" role="complementary" aria-label="Shopping cart">
  <div class="cart-drawer__header">
    <div>
      <div class="cart-drawer__title">Your Cart</div>
      <div class="cart-drawer__count">0 items</div>
    </div>
    <button class="cart-drawer__close" aria-label="Close cart">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <div class="cart-drawer__body"></div>
  <div class="cart-drawer__footer" style="display:none">
    <div class="cart-subtotal">
      <span class="cart-subtotal__label">Subtotal</span>
      <span class="cart-subtotal__value">AED 0</span>
    </div>
    <p class="cart-drawer__shipping-note">Free shipping on all orders</p>
    <a href="#" class="btn btn--primary btn--full" id="cart-checkout-btn">Proceed to Checkout</a>
    <button class="btn btn--secondary btn--full" data-cart-continue>Continue Shopping</button>
  </div>
</aside>`;

  const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">
      <div>
        <a href="${root}index.html" class="footer__brand-logo" aria-label="Floorlamp.ae">Floorlamp<span>.</span>ae</a>
        <p class="footer__brand-desc">A UAE-based lighting store bringing modern, functional and beautiful lighting into everyday spaces.</p>
        <nav class="footer__social" aria-label="Social media">
          <a href="https://www.instagram.com/floorlamp.ae?igsi=a3U3aHFlbmVodTF3&utm_source=qr" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Follow us on Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://www.tiktok.com/@lamporia.ae?_r=1&_t=ZS-9963S5Xg3l6" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Follow us on TikTok">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
          </a>
        </nav>
      </div>
      <nav aria-label="Shop links">
        <div class="footer__col-title">Shop</div>
        <ul class="footer__links" role="list">
          <li><a href="${pg}shop.html"        class="footer__link">All Products</a></li>
          <li><a href="${pg}floor-lamps.html" class="footer__link">Floor Lamps</a></li>
          <li><a href="${pg}wall-lamps.html"  class="footer__link">Wall Lamps</a></li>
          <li><a href="${pg}about.html"       class="footer__link">About</a></li>
          <li><a href="${pg}blog.html"        class="footer__link">Blog</a></li>
        </ul>
      </nav>
      <nav aria-label="Customer care links">
        <div class="footer__col-title">Customer Care</div>
        <ul class="footer__links" role="list">
          <li><a href="${pg}faq.html"      class="footer__link">FAQ</a></li>
          <li><a href="${pg}contact.html"  class="footer__link">Contact Us</a></li>
          <li><a href="${pg}shipping.html" class="footer__link">Shipping Policy</a></li>
          <li><a href="${pg}returns.html"  class="footer__link">Returns</a></li>
        </ul>
      </nav>
      <nav aria-label="Legal links">
        <div class="footer__col-title">Legal</div>
        <ul class="footer__links" role="list">
          <li><a href="${pg}privacy.html" class="footer__link">Privacy Policy</a></li>
          <li><a href="${pg}terms.html"   class="footer__link">Terms &amp; Conditions</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">&copy; 2026 Floorlamp.ae. All rights reserved.</p>
      <nav class="footer__legal" aria-label="Legal pages">
        <a href="${pg}privacy.html" class="footer__legal-link">Privacy</a>
        <a href="${pg}terms.html"   class="footer__legal-link">Terms</a>
      </nav>
    </div>
  </div>
</footer>`;

  // ── Inject into placeholder elements ──────────────────
  // Use a helper so we can safely handle elements that don't
  // exist on a given page without throwing.
  function inject(id, html) {
    const el = document.getElementById(id);
    if (!el) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = html.trim();
    // Replace the placeholder with all injected nodes
    while (tmp.firstChild) {
      el.parentNode.insertBefore(tmp.firstChild, el);
    }
    el.parentNode.removeChild(el);
  }

  inject('nav-placeholder',    NAV_HTML);
  inject('search-placeholder', SEARCH_HTML);
  inject('cart-placeholder',   CART_HTML);
  inject('footer-placeholder', FOOTER_HTML);

})();
