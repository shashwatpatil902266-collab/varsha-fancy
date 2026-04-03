/**
 * VARSHA FANCY STORE — Home Page
 */

document.addEventListener('DOMContentLoaded', () => {
  // Init shared components (announcement, header, footer, FAB, scroll-top)
  initSharedComponents('home');

  // Render category strip
  renderCategoryStrip();

  // Render featured products (with simulated loading delay)
  setTimeout(() => {
    renderFeaturedProducts();
  }, 600);
});

function renderCategoryStrip() {
  const container = document.getElementById('categories-strip');
  if (!container) return;

  const featured = CATEGORIES.filter(c => c.featured).slice(0, 6);
  container.innerHTML = featured.map(cat => `
    <a href="products.html?cat=${cat.slug}" class="cat-pill" aria-label="Shop ${cat.name}">
      <img 
        class="cat-pill__img" 
        src="${cat.image}" 
        alt="${cat.name}"
        loading="lazy"
        width="72" height="72"
        onerror="this.src='https://picsum.photos/seed/fallback/100/100'"
      />
      <span class="cat-pill__name">${cat.name}</span>
    </a>
  `).join('');
}

function renderFeaturedProducts() {
  const container = document.getElementById('featured-products');
  if (!container) return;

  const featured = getFeaturedProducts().slice(0, 8);
  container.innerHTML = featured.map(product => renderProductCard(product)).join('');
}
