/**
 * lamporia.ae — Cart Module
 * Manages cart state with localStorage persistence.
 * Cart drawer UI, add / remove / update operations.
 */

const Cart = (() => {
  'use strict';

  const STORAGE_KEY = 'lamporia_cart';
  let items = [];

  /* ── Persistence ──────────────────────────────────────── */
  function load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      items = stored ? JSON.parse(stored) : [];
    } catch (_) {
      items = [];
    }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  /* ── Operations ───────────────────────────────────────── */
  /**
   * Add a product to the cart.
   * @param {Object} product  - product object from data.js
   * @param {number} [qty=1]  - quantity to add
   */
  function addItem(product, qty) {
    qty = Math.max(1, parseInt(qty, 10) || 1);
    const stock = product.stock || 99;
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      const newQty = existing.qty + qty;
      if (existing.qty >= stock) {
        UI.showToast(`Only ${stock} available in stock`, 'error');
        return;
      }
      existing.qty = Math.min(newQty, stock);
      if (newQty > stock) {
        UI.showToast(`Only ${stock} available in stock`, 'error');
      }
    } else {
      const clampedQty = Math.min(qty, stock);
      items.push({
        id:       product.id,
        slug:     product.slug,
        name:     product.name,
        category: product.categoryLabel,
        price:    product.price,
        stock:    stock,
        qty:      clampedQty,
      });
      if (qty > stock) {
        UI.showToast(`Only ${stock} available in stock`, 'error');
      }
    }
    save();
    updateUI();
    showCartDrawer();
    if (qty <= stock) UI.showToast(`${product.name} added to cart`, 'success');
  }

  function removeItem(id) {
    items = items.filter(i => i.id !== id);
    save();
    updateUI();
  }

  function updateQty(id, qty) {
    if (qty <= 0) { removeItem(id); return; }
    const item = items.find(i => i.id === id);
    if (!item) return;
    const stock = item.stock || 99;
    if (qty > stock) {
      UI.showToast(`Only ${stock} available in stock`, 'error');
      item.qty = stock;
    } else {
      item.qty = qty;
    }
    save();
    updateUI();
  }

  function getTotal() {
    return items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function getTotalItems() {
    return items.reduce((sum, i) => sum + i.qty, 0);
  }

  /* ── UI Update ────────────────────────────────────────── */
  function updateUI() {
    renderDrawer();
    updateBadge();
  }

  function updateBadge() {
    const badge = document.querySelector('.cart-badge');
    if (!badge) return;
    const count = getTotalItems();
    badge.textContent = count > 9 ? '9+' : count;
    badge.classList.toggle('has-items', count > 0);
  }

  function renderDrawer() {
    const body   = document.querySelector('.cart-drawer__body');
    const footer = document.querySelector('.cart-drawer__footer');
    const countEl = document.querySelector('.cart-drawer__count');
    if (!body) return;

    const totalItems = getTotalItems();
    if (countEl) countEl.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;

    if (items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p>Your cart is empty.</p>
          <a href="${window.location.pathname.includes('/pages/') ? 'shop.html' : 'pages/shop.html'}" class="btn btn--primary btn--sm">Browse Lamps</a>
        </div>`;
      if (footer) footer.style.display = 'none';
      return;
    }

    if (footer) footer.style.display = '';

    body.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item__img">
          <div class="img-placeholder" role="img" aria-label="${item.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 3a6 6 0 0 0-6 6v1H4l1 11h14l1-11h-2V9a6 6 0 0 0-6-6z"/></svg>
          </div>
        </div>
        <div class="cart-item__details">
          <span class="cart-item__category">${item.category}</span>
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__price">${formatPrice(item.price)}</div>
          <div class="cart-item__controls">
            <div class="cart-item__qty">
              <button class="cart-item__qty-btn" data-action="dec" data-id="${item.id}" aria-label="Decrease quantity">−</button>
              <span class="cart-item__qty-val" aria-live="polite">${item.qty}</span>
              <button class="cart-item__qty-btn" data-action="inc" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item__remove" data-id="${item.id}" aria-label="Remove ${item.name}">Remove</button>
          </div>
        </div>
      </div>`).join('');

    const subtotalEl = document.querySelector('.cart-subtotal__value');
    if (subtotalEl) subtotalEl.textContent = formatPrice(getTotal());

    // Bind qty buttons
    body.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id   = btn.dataset.id;
        const item = items.find(i => i.id === id);
        if (!item) return;
        updateQty(id, item.qty + (btn.dataset.action === 'inc' ? 1 : -1));
      });
    });

    // Bind remove buttons
    body.querySelectorAll('.cart-item__remove').forEach(btn => {
      btn.addEventListener('click', () => removeItem(btn.dataset.id));
    });
  }

  /* ── Drawer Toggle ────────────────────────────────────── */
  function showCartDrawer() {
    const drawer  = document.querySelector('.cart-drawer');
    const overlay = document.querySelector('.cart-overlay');
    if (drawer)  drawer.classList.add('open');
    if (overlay) { overlay.classList.add('open'); overlay.removeAttribute('aria-hidden'); }
    document.body.style.overflow = 'hidden';
    setTimeout(() => drawer?.querySelector('.cart-drawer__close')?.focus(), 50);
  }

  function hideCartDrawer() {
    const drawer  = document.querySelector('.cart-drawer');
    const overlay = document.querySelector('.cart-overlay');
    if (drawer)  drawer.classList.remove('open');
    if (overlay) { overlay.classList.remove('open'); overlay.setAttribute('aria-hidden', 'true'); }
    document.body.style.overflow = '';
  }

  /* ── Init ─────────────────────────────────────────────── */
  function init() {
    load();
    updateUI();

    // Open cart
    document.querySelectorAll('[data-cart-open]').forEach(btn => {
      btn.addEventListener('click', showCartDrawer);
    });

    // Close via X button
    document.querySelector('.cart-drawer__close')
      ?.addEventListener('click', hideCartDrawer);

    // Close via overlay click
    document.querySelector('.cart-overlay')
      ?.addEventListener('click', hideCartDrawer);

    // Close via "Continue Shopping" button (data-attribute, no inline JS)
    document.querySelector('[data-cart-continue]')
      ?.addEventListener('click', hideCartDrawer);

    // Close via Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        const drawer = document.querySelector('.cart-drawer');
        if (drawer?.classList.contains('open')) hideCartDrawer();
      }
    });
  }

  function getItems() { return [...items]; }

  return { init, addItem, removeItem, updateQty, getTotal, getTotalItems, getItems, showCartDrawer, hideCartDrawer };
})();
