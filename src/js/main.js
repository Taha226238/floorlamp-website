/**
 * lamporia.ae — Main Entry Point
 * Load order: data.js → components.js → cart.js → search.js → ui.js → main.js
 */

/* ── Image path resolver ──────────────────────────────────
   Works from both root (index.html) and pages/ subfolder.
   Strips any existing prefix from data.js paths and rebuilds
   with the correct root for the current page depth.
──────────────────────────────────────────────────────────── */
function getImgRoot() {
  const p = window.location.pathname;
  if (p.includes('/pages/')) return '../src/images/';
  if (p.includes('/blog/'))  return '../src/images/';
  return 'src/images/';
}

function resolveImg(path) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  // Strip any src/images/ or ../src/images/ or images/ prefix
  const clean = path.replace(/^(\.\.\/)*src\/images\//, '').replace(/^images\//, '');
  return getImgRoot() + clean;
}

document.addEventListener('DOMContentLoaded', () => {
  UI.init();
  Cart.init();
  Search.init();

  // Image path prefix — works from both root and pages/ subfolder
  // (getImgRoot() is defined at top level)

  const page = document.body.dataset.page;
  switch (page) {
    case 'home':        initHome();                  break;
    case 'shop':        initShop();                  break;
    case 'floor-lamps': initCategory('floor-lamps'); break;
    case 'wall-lamps':  initCategory('wall-lamps');  break;
    case 'product':     initProductPage();           break;
  }

  document.querySelector('main')?.classList.add('page-enter');
});

/* ================================================================
   HOME
================================================================ */
function initHome() {
  renderProductGrid('[data-featured-grid]', PRODUCTS.slice(0, 4));

  const best = PRODUCTS
    .filter(p => p.badge === 'Best Seller' || p.rating >= 4.7)
    .slice(0, 4);
  renderProductGrid('[data-bestseller-grid]', best);
}

/* ================================================================
   SHOP PAGE
================================================================ */
function initShop() {
  const grid    = document.querySelector('[data-product-grid]');
  const countEl = document.querySelector('.results-count');
  const sortSel = document.querySelector('.sort-select');
  if (!grid) return;

  let activeFilter = 'all';

  function getFiltered() {
    return activeFilter === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter(p => p.category === activeFilter);
  }

  function render(list) {
    grid.innerHTML = list.length
      ? list.map(buildProductCard).join('')
      : '<div class="product-grid__empty">No products found.</div>';
    bindProductCards(grid);
    if (countEl) countEl.textContent = list.length + ' product' + (list.length !== 1 ? 's' : '');
    UI.initScrollReveal();
  }

  render(getFiltered());

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      activeFilter = btn.dataset.filter;
      render(sortProducts(getFiltered(), sortSel?.value));
    });
  });

  sortSel?.addEventListener('change', () => render(sortProducts(getFiltered(), sortSel.value)));
}

/* ================================================================
   CATEGORY PAGES  (floor-lamps / wall-lamps)
================================================================ */
function initCategory(category) {
  const grid    = document.querySelector('[data-product-grid]');
  const countEl = document.querySelector('.results-count');
  const sortSel = document.querySelector('.sort-select');
  if (!grid) return;

  const base = getProducts(category);

  function render(list) {
    grid.innerHTML = list.length
      ? list.map(buildProductCard).join('')
      : '<div class="product-grid__empty">No products found.</div>';
    bindProductCards(grid);
    if (countEl) countEl.textContent = list.length + ' product' + (list.length !== 1 ? 's' : '');
    UI.initScrollReveal();
  }

  render(base);
  sortSel?.addEventListener('change', () => render(sortProducts(base, sortSel.value)));
}

function sortProducts(arr, val) {
  const list = [...arr];
  if (val === 'price-asc')  return list.sort((a, b) => (a.price || 999999) - (b.price || 999999));
  if (val === 'price-desc') return list.sort((a, b) => (b.price || 0) - (a.price || 0));
  if (val === 'newest')     return list.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
  return list;
}

/* ================================================================
   PRODUCT PAGE
================================================================ */
function initProductPage() {
  const slug = new URLSearchParams(window.location.search).get('id');
  const shopUrl = (window.location.pathname.includes('/pages/')) ? 'shop.html' : 'pages/shop.html';
  if (!slug) { window.location.href = shopUrl; return; }

  const product = getProductBySlug(slug);
  if (!product) { window.location.href = shopUrl; return; }

  populateProductPage(product);

  const relGrid = document.getElementById('related-grid');
  if (relGrid) {
    relGrid.innerHTML = getRelatedProducts(product.id, 4).map(buildProductCard).join('');
    bindProductCards(relGrid);
    UI.initScrollReveal();
  }

  updateRecentlyViewed(product.id);
  renderRecentlyViewed();
}

/* ── populateProductPage ──────────────────────────────── */
function populateProductPage(product) {
  const BASE    = 'https://lamporia.ae';
  const pageUrl = BASE + '/product.html?id=' + product.slug;

  /* SEO head */
  document.title = product.seoTitle || product.name + ' | lamporia.ae';
  setMeta('meta-desc',     product.metaDesc || product.shortDesc, true);
  setMeta('canonical-tag', pageUrl, false, 'href');
  setMeta('og-url',   pageUrl);
  setMeta('og-title', product.seoTitle || product.name);
  setMeta('og-desc',  product.metaDesc || product.shortDesc);
  setMeta('tw-title', (product.seoTitle || product.name).split('|')[0].trim());
  setMeta('tw-desc',  product.shortDesc);

  /* Schemas */
  const bcSchema = document.getElementById('schema-breadcrumb');
  if (bcSchema) {
    bcSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',  item: BASE + '/' },
        { '@type': 'ListItem', position: 2, name: product.categoryLabel, item: BASE + '/' + product.category + '.html' },
        { '@type': 'ListItem', position: 3, name: product.name, item: pageUrl },
      ],
    });
  }

  const prodSchema = document.getElementById('product-schema');
  if (prodSchema) {
    prodSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Product',
      name: product.name,
      description: product.description,
      brand: { '@type': 'Brand', name: 'lamporia.ae' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: product.rating, reviewCount: product.reviewCount },
      offers: {
        '@type': 'Offer', priceCurrency: 'AED',
        availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        url: pageUrl,
        seller: { '@type': 'Organization', name: 'lamporia.ae' },
      },
    });
  }

  /* Breadcrumb DOM */
  const bcLink = document.getElementById('bc-category-link');
  const bcCurr = document.getElementById('bc-current');
  if (bcLink) { bcLink.textContent = product.categoryLabel; bcLink.href = product.category + '.html'; }
  if (bcCurr)   bcCurr.textContent = product.name;
  /* Core fields */
  setText('product-category',     product.categoryLabel);
  setText('product-title',        product.name);
  setText('product-desc',         product.shortDesc);
  setText('product-price',        formatPrice(product.price));
  setHTML('product-rating',       generateStars(product.rating));
  setText('product-review-count', product.reviewCount + ' review' + (product.reviewCount !== 1 ? 's' : ''));

  const oldPriceEl = document.getElementById('product-old-price');
  if (oldPriceEl) {
    if (product.oldPrice) { oldPriceEl.textContent = formatPrice(product.oldPrice); oldPriceEl.style.display = ''; }
    else oldPriceEl.style.display = 'none';
  }

  /* Availability */
  const availEl = document.getElementById('product-availability');
  if (availEl) {
    if (product.inStock) {
      availEl.style.color = '';
      availEl.innerHTML = '<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><circle cx="5" cy="5" r="5" fill="currentColor"/></svg> In Stock — UAE Delivery Available';
    } else {
      availEl.style.color = 'var(--color-err)';
      availEl.innerHTML = '<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><circle cx="5" cy="5" r="5" fill="currentColor"/></svg> Sold Out';
    }
  }

  /* Disable add to cart and buy now if sold out */
  if (!product.inStock) {
    const addBtn = document.querySelector('[data-add-to-cart]');
    const buyBtn = document.querySelector('[data-buy-now]');
    const waBtn  = document.querySelector('.btn--wa');
    if (addBtn) { addBtn.disabled = true; addBtn.textContent = 'Sold Out'; addBtn.style.opacity = '0.5'; addBtn.style.cursor = 'not-allowed'; }
    if (buyBtn) { buyBtn.disabled = true; buyBtn.textContent = 'Sold Out'; buyBtn.style.opacity = '0.5'; buyBtn.style.cursor = 'not-allowed'; }
    if (waBtn)  { waBtn.style.display = 'none'; }
  }

  /* Feature bullets */
  const featEl = document.getElementById('product-features');
  if (featEl && product.features) {
    featEl.innerHTML = product.features.map(f => `
      <li class="product-info__feature">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        ${f}
      </li>`).join('');
  }

  /* Gallery */
  const galleryMain   = document.getElementById('gallery-main-img');
  const galleryThumbs = document.querySelectorAll('.product-gallery__thumb');
  const imagePaths = product.images && product.images.length
    ? product.images.map(resolveImg)
    : [1,2,3,4].map(n => getImgRoot() + 'products/' + product.slug + '-' + n + '.jpg');

  if (galleryMain) {
    galleryMain.innerHTML = `
      <img src="${imagePaths[0]}" alt="${product.imageAlt || product.name}"
           id="gallery-main-img-el" style="width:100%;height:100%;object-fit:cover;display:block;position:absolute;inset:0">`;
    galleryMain.setAttribute('aria-label', product.imageAlt || product.name);
  }

  galleryThumbs.forEach((thumb, i) => {
    thumb.innerHTML = `
      <img src="${imagePaths[i]}" alt="${product.name} — image ${i + 1}"
           style="width:100%;height:100%;object-fit:cover;display:block">`;

    thumb.addEventListener('click', () => {
      galleryThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const mainImg = document.getElementById('gallery-main-img-el');
      if (mainImg) mainImg.src = imagePaths[i];
    });
    thumb.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); thumb.click(); }
    });
  });

  /* Arrow navigation */
  let currentIndex = 0;

  function goToImage(index) {
    const total = imagePaths.length;
    currentIndex = (index + total) % total;
    const mainImg = document.getElementById('gallery-main-img-el');
    if (mainImg) mainImg.src = imagePaths[currentIndex];
    galleryThumbs.forEach((t, i) => t.classList.toggle('active', i === currentIndex));
  }

  document.getElementById('gallery-prev')?.addEventListener('click', () => goToImage(currentIndex - 1));
  document.getElementById('gallery-next')?.addEventListener('click', () => goToImage(currentIndex + 1));

  /* Description tab */
  setText('tab-full-desc', product.description);

  const bulletsEl = document.getElementById('tab-bullets');
  if (bulletsEl && product.bullets) {
    bulletsEl.innerHTML = '<span class="tab-section-title">Key Benefits</span>' +
      product.bullets.map(b => '<div class="tab-bullet-item">' + b + '</div>').join('');
  }

  const perfectEl = document.getElementById('tab-perfect-for');
  if (perfectEl && product.perfectFor) {
    perfectEl.innerHTML = '<span class="tab-section-title">Perfect For</span>' +
      '<div style="display:flex;flex-wrap:wrap;gap:var(--s2)">' +
      product.perfectFor.map(p =>
        '<span style="background:var(--color-surface);padding:var(--s2) var(--s4);border-radius:var(--r-pill);font-size:var(--t-sm);color:var(--color-muted)">' + p + '</span>'
      ).join('') + '</div>';
  }

  const includedEl = document.getElementById('tab-whats-included');
  if (includedEl && product.whatsIncluded) {
    includedEl.innerHTML = '<span class="tab-section-title">What\'s Included</span>' +
      '<ul style="display:flex;flex-direction:column;gap:var(--s2)">' +
      product.whatsIncluded.map(item =>
        '<li style="display:flex;align-items:center;gap:var(--s2);font-size:var(--t-sm);color:var(--color-muted)">' +
        '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style="color:var(--color-gold)" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' +
        item + '</li>'
      ).join('') + '</ul>';
  }

  /* Specs tab */
  const specsBody = document.getElementById('specs-table-body');
  if (specsBody && product.specs) {
    specsBody.innerHTML = Object.entries(product.specs)
      .map(([k, v]) => '<tr><td>' + k + '</td><td>' + v + '</td></tr>').join('');
  }

  /* FAQ tab */
  const faqList = document.getElementById('product-faq-list');
  if (faqList) {
    const allFaqs = [
      ...(product.faqs || []),
      { q: 'How long does delivery take?',   a: 'Standard delivery takes 2–5 business days across the UAE. A tracking number is sent by email once dispatched.' },
      { q: 'What is the return policy?',     a: 'We accept returns within 3 days of delivery for unused items in original packaging. Contact our team with your order number.' },
      { q: 'Do you offer Cash on Delivery?', a: 'Yes. Cash on Delivery is available across the UAE. See the checkout page for all payment options.' },
    ];
    faqList.innerHTML = allFaqs.map(f => `
      <div class="accordion-item" role="listitem">
        <button class="accordion-trigger" aria-expanded="false">${f.q}<span class="accordion-icon" aria-hidden="true"></span></button>
        <div class="accordion-content"><div class="accordion-content__inner">${f.a}</div></div>
      </div>`).join('');
    /* Accordions are handled by the global delegated listener in UI.init() */
  }

  /* Qty selector */
  initQtySelector(product);

  /* Add to Cart */
  document.querySelector('[data-add-to-cart]')?.addEventListener('click', () => Cart.addItem(product, getQty()));

  /* Buy Now — open checkout modal */
  document.querySelector('[data-buy-now]')?.addEventListener('click', () => {
    openCheckout(product, getQty());
  });
}

/* ── Qty selector ─────────────────────────────────────── */
function initQtySelector(product) {
  const dec  = document.querySelector('[data-qty="dec"]');
  const inc  = document.querySelector('[data-qty="inc"]');
  const disp = document.querySelector('.qty-value');
  if (!dec || !inc || !disp) return;
  const stock = (product && product.stock) ? product.stock : 99;
  let qty = 1;
  inc.addEventListener('click', () => {
    if (qty >= stock) {
      UI.showToast('Only ' + stock + ' available in stock', 'error');
      return;
    }
    qty++;
    disp.textContent = qty;
  });
  dec.addEventListener('click', () => { if (qty > 1) { qty--; disp.textContent = qty; } });
}

function getQty() {
  return Math.max(1, parseInt(document.querySelector('.qty-value')?.textContent || '1', 10) || 1);
}

/* ── Recently viewed ──────────────────────────────────── */
function updateRecentlyViewed(id) {
  try {
    let rv = JSON.parse(localStorage.getItem('lamporia_rv') || '[]');
    rv = rv.filter(x => x !== id);
    rv.unshift(id);
    localStorage.setItem('lamporia_rv', JSON.stringify(rv.slice(0, 5)));
  } catch (_) {}
}

function renderRecentlyViewed() {
  const section = document.getElementById('recently-viewed-section');
  const grid    = document.getElementById('rv-grid');
  if (!section || !grid) return;
  try {
    const ids      = JSON.parse(localStorage.getItem('lamporia_rv') || '[]');
    const products = ids.map(getProductById).filter(Boolean).slice(0, 4);
    if (!products.length) { section.style.display = 'none'; return; }
    section.style.display = '';
    grid.innerHTML = products.map(buildProductCard).join('');
    bindProductCards(grid);
    UI.initScrollReveal();
  } catch (_) { section.style.display = 'none'; }
}

/* ================================================================
   PRODUCT CARD BUILDER
================================================================ */
function buildProductCard(product) {
  if (!product) return '';

  // Works from both root (index.html) and pages/ subfolder
  const productBase = window.location.pathname.includes('/pages/') ? 'product.html' : 'pages/product.html';
  const imgBase     = getImgRoot() + 'products/';

  const badge = product.badge
    ? '<span class="product-card__badge' + (product.new ? ' product-card__badge--new' : '') + (product.badge === 'Sold Out' ? ' product-card__badge--soldout' : '') + '">' + product.badge + '</span>'
    : '';

  const oldPrice = product.oldPrice
    ? '<span class="product-card__price-old">' + formatPrice(product.oldPrice) + '</span>'
    : '';

  const addToCartBtn = product.inStock
    ? `<button class="btn btn--primary btn--sm" data-add-to-cart-quick="${product.id}" aria-label="Add ${product.name} to cart">Add to Cart</button>`
    : `<button class="btn btn--primary btn--sm" disabled style="opacity:0.45;cursor:not-allowed" aria-label="${product.name} is sold out">Sold Out</button>`;

  const imgSrc = product.images && product.images[0]
    ? resolveImg(product.images[0])
    : (getImgRoot() || 'src/images/') + 'products/' + product.slug + '-1.jpg';

  return `
<article class="product-card reveal" data-product-id="${product.id}" data-category="${product.category}"
  itemscope itemtype="https://schema.org/Product">
  <a href="${productBase}?id=${product.slug}" class="product-card__img-link" tabindex="-1" aria-hidden="true">
    <div class="product-card__image-wrap">
      <img src="${imgSrc}" alt="${product.imageAlt || product.name}" loading="lazy">
      ${badge}
    </div>
  </a>
  <div class="product-card__body">
    <span class="product-card__category" itemprop="category">${product.categoryLabel}</span>
    <a href="${productBase}?id=${product.slug}" class="product-card__name-link">
      <h3 class="product-card__name" itemprop="name">${product.name}</h3>
    </a>
    <div class="product-card__rating">${generateStars(product.rating)}<span>(${product.reviewCount})</span></div>
  </div>
  <div class="product-card__footer">
    <div class="product-card__price">
      <span class="product-card__price-current">${formatPrice(product.price)}</span>
      ${oldPrice}
    </div>
    <div class="product-card__actions">
      <a href="${productBase}?id=${product.slug}" class="btn btn--secondary btn--sm"
         aria-label="View ${product.name}">View</a>
      ${addToCartBtn}
    </div>
  </div>
</article>`;
}

/* ── Render a product grid ────────────────────────────── */
function renderProductGrid(selector, products) {
  const grid = document.querySelector(selector);
  if (!grid || !products?.length) return;
  grid.innerHTML = products.map(buildProductCard).join('');
  bindProductCards(grid);
  UI.initScrollReveal();
}

/* ── Bind card interactions ───────────────────────────── */
function bindProductCards(container) {
  container.querySelectorAll('[data-add-to-cart-quick]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const p = getProductById(btn.dataset.addToCartQuick);
      if (p) Cart.addItem(p, 1);
    });
  });
}

/* ── DOM helpers ──────────────────────────────────────── */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value || '';
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value || '';
}

function setMeta(id, value, isContent, attr) {
  const el = document.getElementById(id);
  if (!el || !value) return;
  if (attr) el.setAttribute(attr, value);
  else      el.content = value;
}

/* ================================================================
   CHECKOUT MODAL
================================================================ */

const WHATSAPP_NUMBER = '971526398653'; // +971 52 639 8653

/* ── Open from Buy Now (single product) ── */
function openCheckout(product, qty) {
  _openCheckoutModal(
    [{ name: product.name, price: product.price, qty, imgSrc: resolveImg((product.images && product.images[0]) || 'images/products/' + product.slug + '-1.jpg') }],
    product.price * qty
  );
}

/* ── Open from cart (multiple products) ── */
function openCheckoutFromCart() {
  const cartItems = Cart.getItems();
  if (!cartItems || !cartItems.length) return;
  const total = Cart.getTotal();
  const items = cartItems.map(i => {
    const p = getProductById(i.id);
    return {
      name:   i.name,
      price:  i.price,
      qty:    i.qty,
      imgSrc: resolveImg((p && p.images && p.images[0]) || 'images/products/' + (i.slug || i.id) + '-1.jpg'),
    };
  });
  Cart.hideCartDrawer();
  _openCheckoutModal(items, total);
}

/* ── Core open ── */
function _openCheckoutModal(items, total) {
  const overlay = document.getElementById('checkout-overlay');
  const modal   = document.getElementById('checkout-modal');
  if (!overlay || !modal) return;

  // Summary HTML — one row per item
  document.getElementById('co-summary-item').innerHTML = items.map(item => `
    <div class="co-summary-product" style="border-bottom:none;padding-bottom:8px">
      <div class="co-sum-img"><img src="${item.imgSrc}" alt="${item.name}"></div>
      <div class="co-sum-info">
        <span class="co-sum-name">${item.name}</span>
        <span class="co-sum-qty">Qty: ${item.qty}</span>
      </div>
      <span class="co-sum-price">${formatPrice(item.price * item.qty)}</span>
    </div>`).join('');

  document.getElementById('co-subtotal').textContent = formatPrice(total);
  document.getElementById('co-total').textContent    = formatPrice(total);

  overlay.classList.add('open');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.removeAttribute('aria-hidden');
  modal.removeAttribute('aria-hidden');
  setTimeout(() => document.getElementById('co-name')?.focus(), 100);

  modal._items = items;
  modal._total = total;
}

function closeCheckout() {
  const overlay = document.getElementById('checkout-overlay');
  const modal   = document.getElementById('checkout-modal');
  if (!overlay || !modal) return;
  overlay.classList.remove('open');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  overlay.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-hidden', 'true');
}

// Bind checkout events once DOM is ready
document.addEventListener('DOMContentLoaded', () => {

  // Close button
  document.getElementById('checkout-close')?.addEventListener('click', closeCheckout);

  // Overlay click closes
  document.getElementById('checkout-overlay')?.addEventListener('click', closeCheckout);

  // Escape key closes
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('checkout-modal');
      if (modal?.classList.contains('open')) closeCheckout();
    }
  });

  // Cart — Proceed to Checkout (delegated — cart HTML injected dynamically)
  document.addEventListener('click', e => {
    if (e.target.closest('#cart-checkout-btn')) {
      e.preventDefault();
      openCheckoutFromCart();
    }
  });

  // Form submit — validate then send to WhatsApp
  document.getElementById('checkout-form')?.addEventListener('submit', e => {
    e.preventDefault();

    const modal    = document.getElementById('checkout-modal');
    const errorEl  = document.getElementById('co-error');
    const errorTxt = document.getElementById('co-error-text');
    const items    = modal._items || [];
    const total    = modal._total || 0;

    // Gather values
    const name     = document.getElementById('co-name').value.trim();
    const phone    = document.getElementById('co-phone').value.trim();
    const email    = document.getElementById('co-email').value.trim();
    const city     = document.getElementById('co-city').value.trim();
    const emirate  = document.getElementById('co-emirate').value;
    const address  = document.getElementById('co-address').value.trim();
    const apt      = document.getElementById('co-apt').value.trim();
    const notes    = document.getElementById('co-notes').value.trim();

    // Validation
    const errors = [];
    if (!name)    errors.push('Full name is required.');
    if (!phone)   errors.push('Phone number is required.');
    if (!emirate) errors.push('Please select an Emirate.');
    if (!address) errors.push('Street address is required.');
    if (!city)    errors.push('City is required.');

    if (errors.length) {
      if (errorTxt) errorTxt.textContent = errors[0];
      if (errorEl)  errorEl.hidden = false;
      ['co-name','co-phone','co-city','co-address'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.toggle('is-error', !el.value.trim());
      });
      const emirateEl = document.getElementById('co-emirate');
      if (emirateEl) emirateEl.classList.toggle('is-error', !emirate);
      return;
    }
    if (errorEl) errorEl.hidden = true;

    // Build WhatsApp message
    const productLines = items.map(item =>
      '*Product:* ' + item.name + '\n*Qty:* ' + item.qty + ' x ' + formatPrice(item.price) + ' = ' + formatPrice(item.price * item.qty)
    ).join('\n\n');

    const lines = [
      '*New Order — lamporia.ae*',
      '',
      productLines,
      '',
      '*Order Total:* ' + formatPrice(total),
      '',
      '*Customer Details*',
      '*Name:* ' + name,
      '*Phone:* ' + phone,
      (email ? '*Email:* ' + email : null),
      '',
      '*Delivery Address*',
      '*Address:* ' + address,
      (apt ? '*Apt/Villa:* ' + apt : null),
      '*City:* ' + city,
      '*Emirate:* ' + emirate,
      '*Country:* United Arab Emirates',
      '',
      '*Payment:* Cash on Delivery (COD)',
      (notes ? '*Notes:* ' + notes : null),
    ].filter(l => l !== null).join('\n');

    const waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines);

    const submitBtn = document.getElementById('co-submit');
    if (submitBtn) { submitBtn.textContent = 'Opening WhatsApp…'; submitBtn.disabled = true; }

    window.open(waUrl, '_blank');

    setTimeout(() => {
      closeCheckout();
      document.getElementById('checkout-form').reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> Complete Order via WhatsApp';
      }
      UI.showToast('Order sent! We will confirm via WhatsApp shortly.', 'success');
    }, 800);
  });

  // Remove error styling on input
  document.querySelectorAll('.co-field').forEach(input => {
    input.addEventListener('input', () => input.classList.remove('is-error'));
  });
});
