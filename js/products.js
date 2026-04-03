/**
 * VARSHA FANCY STORE — Products Listing Page
 * Handles filtering, sorting, search, and pagination
 */

const PRODUCTS_PER_PAGE = 12;

// State
let state = {
  allProducts: [...PRODUCTS],
  filtered: [...PRODUCTS],
  currentPage: 1,
  activeFilters: {
    category: null,
    minPrice: null,
    maxPrice: null,
    minRating: 0,
    inStockOnly: false,
    search: null
  },
  sortBy: 'popular'
};

document.addEventListener('DOMContentLoaded', () => {
  // Init shared
  initSharedComponents('products');

  // Read URL params
  const params = new URLSearchParams(window.location.search);
  if (params.get('cat')) {
    state.activeFilters.category = params.get('cat');
  }
  if (params.get('q')) {
    state.activeFilters.search = params.get('q');
  }

  // Update breadcrumb
  const breadcrumb = document.getElementById('breadcrumb-current');
  if (breadcrumb) {
    if (state.activeFilters.category) {
      const cat = CATEGORIES.find(c => c.slug === state.activeFilters.category);
      if (cat) breadcrumb.textContent = cat.name;
    } else if (state.activeFilters.search) {
      breadcrumb.textContent = `Search: "${state.activeFilters.search}"`;
    }
  }

  // Render category filters
  renderCategoryFilters();

  // Set up event listeners
  setupFilters();

  // Initial render
  applyFiltersAndRender();

  // Mobile filter drawer
  const mobileFilterBtn = document.getElementById('mobile-filter-btn');
  const filterSidebar = document.getElementById('filter-sidebar');
  const filterOverlay = document.getElementById('filter-overlay');

  if (mobileFilterBtn && filterSidebar) {
    mobileFilterBtn.addEventListener('click', () => {
      filterSidebar.classList.add('open');
      if (filterOverlay) filterOverlay.classList.add('open');
      mobileFilterBtn.setAttribute('aria-expanded', 'true');
    });

    if (filterOverlay) {
      filterOverlay.addEventListener('click', closeFilterSidebar);
    }
  }
});

function closeFilterSidebar() {
  const sidebar = document.getElementById('filter-sidebar');
  const overlay = document.getElementById('filter-overlay');
  const btn = document.getElementById('mobile-filter-btn');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <label class="filter-checkbox">
      <input 
        type="checkbox" 
        name="cat-filter" 
        value="${cat.slug}"
        ${state.activeFilters.category === cat.slug ? 'checked' : ''}
        aria-label="Filter by ${cat.name}"
      />
      <span>${cat.name}</span>
      <span class="count">${cat.count}</span>
    </label>
  `).join('');
}

function setupFilters() {
  // Category checkboxes
  document.getElementById('category-filters').addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      const slug = e.target.value;
      if (e.target.checked) {
        state.activeFilters.category = slug;
        // Uncheck others
        document.querySelectorAll('[name="cat-filter"]').forEach(cb => {
          if (cb.value !== slug) cb.checked = false;
        });
      } else {
        state.activeFilters.category = null;
      }
      state.currentPage = 1;
      applyFiltersAndRender();
    }
  });

  // Price
  document.getElementById('apply-price-btn').addEventListener('click', () => {
    const min = parseInt(document.getElementById('price-min').value) || null;
    const max = parseInt(document.getElementById('price-max').value) || null;
    state.activeFilters.minPrice = min;
    state.activeFilters.maxPrice = max;
    state.currentPage = 1;
    applyFiltersAndRender();
  });

  // Rating
  document.getElementById('rating-filters').addEventListener('change', (e) => {
    if (e.target.name === 'rating') {
      state.activeFilters.minRating = parseFloat(e.target.value) || 0;
      state.currentPage = 1;
      applyFiltersAndRender();
    }
  });

  // In stock
  document.getElementById('in-stock-toggle').addEventListener('change', (e) => {
    state.activeFilters.inStockOnly = e.target.checked;
    state.currentPage = 1;
    applyFiltersAndRender();
  });

  // Sort
  document.getElementById('sort-select').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFiltersAndRender();
  });

  // Clear all
  document.getElementById('clear-filters-btn').addEventListener('click', resetFilters);
}

function applyFiltersAndRender() {
  let products = [...state.allProducts];

  // Search
  if (state.activeFilters.search) {
    const q = state.activeFilters.search.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  // Category
  if (state.activeFilters.category) {
    products = products.filter(p => p.categorySlug === state.activeFilters.category);
  }

  // Price
  if (state.activeFilters.minPrice !== null) {
    products = products.filter(p => p.price >= state.activeFilters.minPrice);
  }
  if (state.activeFilters.maxPrice !== null) {
    products = products.filter(p => p.price <= state.activeFilters.maxPrice);
  }

  // Rating
  if (state.activeFilters.minRating > 0) {
    products = products.filter(p => p.rating >= state.activeFilters.minRating);
  }

  // In stock
  if (state.activeFilters.inStockOnly) {
    products = products.filter(p => p.stock > 0);
  }

  // Sort
  switch (state.sortBy) {
    case 'price-asc': products.sort((a, b) => a.price - b.price); break;
    case 'price-desc': products.sort((a, b) => b.price - a.price); break;
    case 'rating': products.sort((a, b) => b.rating - a.rating); break;
    case 'newest': products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    default: products.sort((a, b) => b.reviewCount - a.reviewCount); // popular
  }

  state.filtered = products;
  renderProducts();
  renderActiveFilters();
  renderPagination();
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const emptyEl = document.getElementById('products-empty');
  const shownEl = document.getElementById('products-shown');
  const totalEl = document.getElementById('products-total');

  if (!grid) return;

  const total = state.filtered.length;
  const start = (state.currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = Math.min(start + PRODUCTS_PER_PAGE, total);
  const pageProducts = state.filtered.slice(start, end);

  if (totalEl) totalEl.textContent = total;
  if (shownEl) shownEl.textContent = `${start + 1}–${end}`;

  if (pageProducts.length === 0) {
    grid.innerHTML = '';
    grid.style.display = 'none';
    if (emptyEl) emptyEl.style.display = 'flex';
    return;
  }

  grid.style.display = 'grid';
  if (emptyEl) emptyEl.style.display = 'none';
  grid.innerHTML = pageProducts.map(p => renderProductCard(p)).join('');
}

function renderActiveFilters() {
  const container = document.getElementById('active-filters');
  if (!container) return;

  const tags = [];
  const { activeFilters } = state;

  if (activeFilters.category) {
    const cat = CATEGORIES.find(c => c.slug === activeFilters.category);
    if (cat) tags.push({ label: cat.name, key: 'category' });
  }
  if (activeFilters.minPrice !== null || activeFilters.maxPrice !== null) {
    const label = `₹${activeFilters.minPrice || 0} – ₹${activeFilters.maxPrice || '∞'}`;
    tags.push({ label, key: 'price' });
  }
  if (activeFilters.minRating > 0) {
    tags.push({ label: `${activeFilters.minRating}+ Stars`, key: 'rating' });
  }
  if (activeFilters.inStockOnly) {
    tags.push({ label: 'In Stock Only', key: 'stock' });
  }
  if (activeFilters.search) {
    tags.push({ label: `"${activeFilters.search}"`, key: 'search' });
  }

  container.innerHTML = tags.map(tag => `
    <button class="filter-tag" onclick="removeFilter('${tag.key}')" aria-label="Remove filter: ${tag.label}">
      ${tag.label} <span class="filter-tag__remove">×</span>
    </button>
  `).join('');
}

function renderPagination() {
  const container = document.getElementById('pagination');
  if (!container) return;

  const total = state.filtered.length;
  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  const current = state.currentPage;
  let html = '';

  // Prev
  html += `<button class="pagination__btn" onclick="goToPage(${current - 1})" ${current === 1 ? 'disabled' : ''} aria-label="Previous page">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
  </button>`;

  // Pages
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - current) <= 1) {
      html += `<button class="pagination__btn ${i === current ? 'active' : ''}" onclick="goToPage(${i})" aria-label="Page ${i}" ${i === current ? 'aria-current="page"' : ''}>${i}</button>`;
    } else if (Math.abs(i - current) === 2) {
      html += `<span class="pagination__dots">…</span>`;
    }
  }

  // Next
  html += `<button class="pagination__btn" onclick="goToPage(${current + 1})" ${current === totalPages ? 'disabled' : ''} aria-label="Next page">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
  </button>`;

  container.innerHTML = html;
}

function goToPage(page) {
  const totalPages = Math.ceil(state.filtered.length / PRODUCTS_PER_PAGE);
  if (page < 1 || page > totalPages) return;
  state.currentPage = page;
  renderProducts();
  renderPagination();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function removeFilter(key) {
  switch (key) {
    case 'category':
      state.activeFilters.category = null;
      document.querySelectorAll('[name="cat-filter"]').forEach(cb => cb.checked = false);
      break;
    case 'price':
      state.activeFilters.minPrice = null;
      state.activeFilters.maxPrice = null;
      document.getElementById('price-min').value = '';
      document.getElementById('price-max').value = '';
      break;
    case 'rating':
      state.activeFilters.minRating = 0;
      const anyRating = document.querySelector('[name="rating"][value="0"]');
      if (anyRating) anyRating.checked = true;
      break;
    case 'stock':
      state.activeFilters.inStockOnly = false;
      document.getElementById('in-stock-toggle').checked = false;
      break;
    case 'search':
      state.activeFilters.search = null;
      break;
  }
  state.currentPage = 1;
  applyFiltersAndRender();
}

function resetFilters() {
  state.activeFilters = { category: null, minPrice: null, maxPrice: null, minRating: 0, inStockOnly: false, search: null };
  state.currentPage = 1;

  document.querySelectorAll('[name="cat-filter"]').forEach(cb => cb.checked = false);
  document.getElementById('price-min').value = '';
  document.getElementById('price-max').value = '';
  const anyRating = document.querySelector('[name="rating"][value="0"]');
  if (anyRating) anyRating.checked = true;
  document.getElementById('in-stock-toggle').checked = false;
  document.getElementById('sort-select').value = 'popular';
  state.sortBy = 'popular';

  applyFiltersAndRender();
}
