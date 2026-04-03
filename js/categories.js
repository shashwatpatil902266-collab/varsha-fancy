/**
 * VARSHA FANCY STORE — Categories Page
 */

document.addEventListener('DOMContentLoaded', () => {
  initSharedComponents('categories');
  renderAllCategories(CATEGORIES);

  // Search
  const searchInput = document.getElementById('cat-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      const filtered = q
        ? CATEGORIES.filter(c => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
        : CATEGORIES;
      renderAllCategories(filtered);
    });
  }
});

function renderAllCategories(cats) {
  const grid = document.getElementById('categories-grid');
  const countEl = document.getElementById('cats-count');
  const emptyEl = document.getElementById('cats-empty');

  if (!grid) return;

  if (cats.length === 0) {
    grid.style.display = 'none';
    if (emptyEl) emptyEl.style.display = 'flex';
    if (countEl) countEl.textContent = 'No categories found';
    return;
  }

  grid.style.display = 'grid';
  if (emptyEl) emptyEl.style.display = 'none';
  if (countEl) countEl.textContent = `Showing ${cats.length} categor${cats.length === 1 ? 'y' : 'ies'}`;

  grid.innerHTML = cats.map(cat => `
    <a href="products.html?cat=${cat.slug}" class="category-big-card" aria-label="Shop ${cat.name} - ${cat.count} products">
      <div class="category-big-card__img-wrap">
        <img 
          class="category-big-card__img" 
          src="${cat.image}" 
          alt="${cat.name}"
          loading="lazy"
          width="400" height="533"
          onerror="this.src='https://picsum.photos/seed/fallback/400/533'"
        />
      </div>
      <div class="category-big-card__arrow" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>
      <div class="category-big-card__overlay">
        <div class="category-big-card__name">${cat.name}</div>
        <div class="category-big-card__count">${cat.count} products</div>
      </div>
    </a>
  `).join('');
}

function clearCatSearch() {
  const searchInput = document.getElementById('cat-search');
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  renderAllCategories(CATEGORIES);
}
