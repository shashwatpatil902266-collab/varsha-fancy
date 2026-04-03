/**
 * VARSHA FANCY STORE — Product Detail Page
 */

let currentProduct = null;
let selectedColor = null;
let selectedSize = null;
let qty = 1;

document.addEventListener('DOMContentLoaded', () => {
  initSharedComponents('products');

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  if (!productId) {
    showNotFound();
    return;
  }

  const product = getProductById(productId);

  if (!product) {
    showNotFound();
    return;
  }

  currentProduct = product;
  renderProduct(product);
});

function showNotFound() {
  document.getElementById('product-skeleton').style.display = 'none';
  document.getElementById('product-not-found').style.display = 'flex';
}

function renderProduct(product) {
  // Hide skeleton
  document.getElementById('product-skeleton').style.display = 'none';
  document.getElementById('product-content').style.display = 'block';

  // Update page title
  document.title = `${product.name} — Varsha Fancy Store`;

  // Breadcrumb
  const breadcrumbEl = document.getElementById('product-breadcrumb');
  if (breadcrumbEl) {
    breadcrumbEl.innerHTML = `
      <a href="index.html">Home</a>
      <span class="breadcrumb__sep">›</span>
      <a href="products.html?cat=${product.categorySlug}">${product.category}</a>
      <span class="breadcrumb__sep">›</span>
      <span class="breadcrumb__current">${product.name}</span>
    `;
  }

  // Gallery
  const mainImg = document.getElementById('gallery-main-img');
  const thumbsEl = document.getElementById('gallery-thumbs');
  const images = product.images || [product.image];

  mainImg.src = images[0];
  mainImg.alt = product.name;

  thumbsEl.innerHTML = images.map((img, i) => `
    <div class="gallery__thumb ${i === 0 ? 'active' : ''}" onclick="switchImage('${img}', ${i})" role="button" tabindex="0" aria-label="Product image ${i + 1}">
      <img src="${img}" alt="${product.name} — view ${i + 1}" loading="lazy" width="80" height="80" onerror="this.src='https://picsum.photos/seed/fallback/80/80'" />
    </div>
  `).join('');

  // Info
  document.getElementById('info-category').textContent = product.category;
  document.getElementById('info-title').textContent = product.name;
  document.getElementById('info-stars').innerHTML = getStarHTML(product.rating);
  document.getElementById('info-rating').textContent = product.rating.toFixed(1);
  document.getElementById('info-reviews').textContent = `${product.reviewCount} reviews`;
  document.getElementById('info-reviews').href = '#reviews';
  document.getElementById('info-price').textContent = formatPrice(product.price);

  const origEl = document.getElementById('info-original-price');
  const discEl = document.getElementById('info-discount');
  if (product.originalPrice) {
    origEl.textContent = formatPrice(product.originalPrice);
    origEl.style.display = 'inline';
  } else {
    origEl.style.display = 'none';
  }

  if (product.discount > 0 || (product.originalPrice && product.originalPrice > product.price)) {
    const pct = product.discount || Math.round((1 - product.price / product.originalPrice) * 100);
    discEl.textContent = `${pct}% OFF`;
    discEl.style.display = 'inline';
  } else {
    discEl.style.display = 'none';
  }

  // Stock
  const stockEl = document.getElementById('info-stock');
  if (product.stock === 0) {
    stockEl.innerHTML = `<div class="stock-dot stock-dot--red"></div><span style="color:var(--color-error)">Out of Stock</span>`;
  } else if (product.stock <= 5) {
    stockEl.innerHTML = `<div class="stock-dot stock-dot--yellow"></div><span style="color:var(--color-warning)">Only ${product.stock} left!</span>`;
  } else {
    stockEl.innerHTML = `<div class="stock-dot stock-dot--green"></div><span style="color:var(--color-success)">In Stock</span>`;
  }

  // Color options
  if (product.colors && product.colors.length > 0) {
    document.getElementById('color-group').style.display = 'block';
    const colorOpts = document.getElementById('color-options');
    colorOpts.innerHTML = product.colors.map(c => `
      <button class="color-option" data-color="${c}" onclick="selectColor('${c}')" aria-label="Color: ${c}">${c}</button>
    `).join('');
  }

  // Size options
  if (product.sizes && product.sizes.length > 0) {
    document.getElementById('size-group').style.display = 'block';
    const sizeOpts = document.getElementById('size-options');
    sizeOpts.innerHTML = product.sizes.map(s => `
      <button class="size-option" data-size="${s}" onclick="selectSize('${s}')" aria-label="Size: ${s}">${s}</button>
    `).join('');
  }

  // Add to cart button
  const addBtn = document.getElementById('add-to-cart-btn');
  const mobileAddBtn = document.getElementById('mobile-add-to-cart-btn');
  if (product.stock === 0) {
    addBtn.disabled = true;
    addBtn.textContent = 'Out of Stock';
    if (mobileAddBtn) { mobileAddBtn.disabled = true; mobileAddBtn.textContent = 'Out of Stock'; }
  } else {
    addBtn.addEventListener('click', addToCart);
    if (mobileAddBtn) mobileAddBtn.addEventListener('click', addToCart);
  }

  // Quantity steppers (desktop)
  setupQtyStepper('qty-minus', 'qty-plus', 'qty-value');
  setupQtyStepper('mobile-qty-minus', 'mobile-qty-plus', 'mobile-qty-value');

  // WhatsApp button
  const waBtn = document.getElementById('whatsapp-order-btn');
  if (waBtn) {
    waBtn.href = `https://wa.me/${STORE_INFO.whatsapp}?text=Hi! I'm interested in: ${encodeURIComponent(product.name)} (Price: ${formatPrice(product.price)}). Can you help me?`;
  }

  // Description
  document.getElementById('desc-content').innerHTML = `<p>${product.description}</p>`;

  // Specs table
  const specs = product.specifications || {};
  const specsTable = document.getElementById('specs-table');
  if (specs && Object.keys(specs).length > 0) {
    specsTable.innerHTML = Object.entries(specs).map(([key, val]) => `
      <tr><td>${key}</td><td>${val}</td></tr>
    `).join('');
  } else {
    specsTable.innerHTML = '<tr><td colspan="2" style="color:var(--color-text-disabled);text-align:center;">No specifications available</td></tr>';
  }

  // Reviews
  renderReviews(product.id);

  // Setup review form
  setupReviewForm(product);

  // Related products
  renderRelated(product);

  // Tab navigation
  setupTabs();
}

function switchImage(src, idx) {
  document.getElementById('gallery-main-img').src = src;
  document.querySelectorAll('.gallery__thumb').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
}

function selectColor(color) {
  selectedColor = color;
  document.getElementById('selected-color').textContent = color;
  document.querySelectorAll('.color-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.color === color);
  });
}

function selectSize(size) {
  selectedSize = size;
  document.getElementById('selected-size').textContent = size;
  document.querySelectorAll('.size-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === size);
  });
}

function setupQtyStepper(minusId, plusId, valueId) {
  const minus = document.getElementById(minusId);
  const plus = document.getElementById(plusId);
  const val = document.getElementById(valueId);
  if (!minus || !plus || !val) return;

  minus.addEventListener('click', () => {
    const current = parseInt(val.value) || 1;
    if (current > 1) { val.value = current - 1; qty = current - 1; syncQty(); }
  });

  plus.addEventListener('click', () => {
    const current = parseInt(val.value) || 1;
    if (current < Math.min(10, currentProduct?.stock || 10)) {
      val.value = current + 1;
      qty = current + 1;
      syncQty();
    }
  });
}

function syncQty() {
  const qty1 = document.getElementById('qty-value');
  const qty2 = document.getElementById('mobile-qty-value');
  const v = qty.toString();
  if (qty1) qty1.value = v;
  if (qty2) qty2.value = v;
}

function addToCart() {
  if (!currentProduct) return;

  const variant = {};
  if (selectedColor) variant.color = selectedColor;
  if (selectedSize) variant.size = selectedSize;

  const successObj = Object.keys(variant).length > 0 ? variant : null;
  const success = Cart.add(currentProduct, qty, successObj);

  if (success) {
    Toast.success('Added to Cart! 🛒', `${qty}x ${currentProduct.name}`, 3000);
  }
}

function renderReviews(productId) {
  const reviewsEl = document.getElementById('reviews-list');
  if (!reviewsEl) return;

  const productReviews = REVIEWS[productId] || [];
  const tabBtn = document.getElementById('tab-reviews');
  if (tabBtn) tabBtn.textContent = `Reviews (${productReviews.length})`;

  if (productReviews.length === 0) {
    reviewsEl.innerHTML = `<p style="color:var(--color-text-secondary);font-style:italic;padding:var(--space-4) 0;">No reviews yet. Be the first to review!</p>`;
    return;
  }

  const avg = productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
  reviewsEl.innerHTML = `
    <div style="display:flex;align-items:center;gap:var(--space-6);padding:var(--space-6);background:var(--color-bg-surface);border-radius:var(--radius-xl);margin-bottom:var(--space-6)">
      <div style="text-align:center">
        <div style="font-size:var(--text-5xl);font-weight:800;color:var(--color-text-primary)">${avg.toFixed(1)}</div>
        <div style="color:#F59E0B;font-size:24px;letter-spacing:2px">${getStarHTML(avg)}</div>
        <div style="font-size:var(--text-sm);color:var(--color-text-secondary)">${productReviews.length} reviews</div>
      </div>
    </div>
    ${productReviews.map(r => `
    <div class="review-card">
      <div class="review-card__header">
        <div>
          <div class="review-card__author">${r.user}</div>
          <div style="color:#F59E0B;font-size:14px">${getStarHTML(r.rating)}</div>
          <div class="review-card__date">${r.date}</div>
        </div>
        <button class="btn btn-ghost" style="font-size:var(--text-xs);padding:4px 8px;">Helpful (${r.helpful})</button>
      </div>
      <p class="review-card__body">${r.comment}</p>
    </div>
  `).join('')}
  `;
}

function setupReviewForm(product) {
  let reviewRating = 0;
  const stars = document.querySelectorAll('.star-rating__star');

  stars.forEach((star) => {
    star.addEventListener('click', () => {
      reviewRating = parseInt(star.dataset.value);
      stars.forEach((s, i) => s.classList.toggle('filled', i < reviewRating));
    });

    star.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        star.click();
      }
    });
  });

  const form = document.getElementById('review-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    const name = document.getElementById('review-name').value.trim();
    const text = document.getElementById('review-text').value.trim();

    if (reviewRating === 0) {
      document.getElementById('rating-error').style.display = 'block';
      valid = false;
    } else {
      document.getElementById('rating-error').style.display = 'none';
    }

    if (name.length < 2) {
      document.getElementById('name-error').style.display = 'block';
      valid = false;
    } else {
      document.getElementById('name-error').style.display = 'none';
    }

    if (text.length < 20) {
      document.getElementById('review-text-error').style.display = 'block';
      valid = false;
    } else {
      document.getElementById('review-text-error').style.display = 'none';
    }

    if (!valid) return;

    Toast.success('Review Submitted! 🎉', 'Thank you for your feedback. Your review is under review.', 4000);
    form.reset();
    reviewRating = 0;
    stars.forEach(s => s.classList.remove('filled'));
  });
}

function renderRelated(product) {
  const related = PRODUCTS
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  if (related.length === 0) return;

  const section = document.getElementById('related-section');
  const grid = document.getElementById('related-grid');
  if (section) section.style.display = 'block';
  if (grid) grid.innerHTML = related.map(p => renderProductCard(p)).join('');
}

function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(`panel-${target}`);
      if (panel) panel.classList.add('active');
    });
  });
}
