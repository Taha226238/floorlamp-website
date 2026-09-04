/**
 * lamporia.ae — Search Module
 * Live product search with modal overlay.
 */

const Search = (() => {
  let overlay, input, resultsContainer;
  let debounceTimer;

  function open() {
    overlay = document.querySelector('.search-overlay');
    input   = document.querySelector('.search-input');
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input?.focus(), 100);
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (input) input.value = '';
    clearResults();
  }

  function clearResults() {
    resultsContainer = document.querySelector('.search-results');
    if (resultsContainer) resultsContainer.innerHTML = '';
  }

  function render(products, query) {
    resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer) return;

    if (products.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          No products found for "<strong>${query}</strong>"
        </div>`;
      return;
    }

    resultsContainer.innerHTML = `
      <div class="search-results__label">Products (${products.length})</div>
      ${products.map(p => `
        <a href="${window.location.pathname.includes('/pages/') ? 'product.html' : 'pages/product.html'}?id=${p.slug}" class="search-result-item" data-close-search>
          <div class="search-result-item__img img-placeholder" aria-label="${p.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 3a6 6 0 0 0-6 6v1H4l1 11h14l1-11h-2V9a6 6 0 0 0-6-6z"/></svg>
          </div>
          <div class="search-result-item__info">
            <div class="search-result-item__cat">${p.categoryLabel}</div>
            <div class="search-result-item__name">${p.name}</div>
          </div>
          <div class="search-result-item__price">${formatPrice(p.price)}</div>
        </a>`).join('')}`;

    resultsContainer.querySelectorAll('[data-close-search]').forEach(el => {
      el.addEventListener('click', close);
    });
  }

  function handleInput(e) {
    const query = e.target.value.trim();
    clearTimeout(debounceTimer);
    if (query.length < 2) { clearResults(); return; }
    debounceTimer = setTimeout(() => {
      const results = searchProducts(query);
      render(results, query);
    }, 200);
  }

  function init() {
    // Open triggers — use querySelectorAll so it catches the injected button
    document.querySelectorAll('[data-search-open]').forEach(btn => {
      btn.addEventListener('click', open);
    });

    // Close via X button
    document.querySelector('.search-overlay__close')?.addEventListener('click', close);

    // Input handler
    document.querySelector('.search-input')?.addEventListener('input', handleInput);

    // Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        const so = document.querySelector('.search-overlay');
        if (so?.classList.contains('open')) close();
      }
    });
  }

  return { init, open, close };
})();
