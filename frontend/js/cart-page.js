/**
 * VARSHA FANCY STORE — Cart Page
 */

document.addEventListener('DOMContentLoaded', () => {
  initSharedComponents('cart');
  renderCartPage();

  // Subscribe to cart changes
  Cart.subscribe(() => {
    renderCartPage();
  });

  // Clear all button
  document.getElementById('clear-cart-btn').addEventListener('click', () => {
    if (Cart.isEmpty()) { Toast.warning('Cart is empty', 'Nothing to clear.'); return; }
    showConfirmDialog({
      title: 'Clear Cart?',
      description: 'This will remove all items from your cart. This action cannot be undone.',
      confirmLabel: 'Clear Cart',
      onConfirm: () => {
        Cart.clear();
        Toast.success('Cart cleared!', 'All items have been removed.');
      }
    });
  });

  // Coupon
  document.getElementById('coupon-apply-btn').addEventListener('click', () => {
    const code = document.getElementById('coupon-input').value.trim().toUpperCase();
    if (!code) { Toast.warning('No code entered', 'Please enter a coupon code.'); return; }
    Toast.info('Coming Soon', 'Coupon codes are not available yet. Stay tuned!');
  });

  // Render recommendations
  renderRecommendations();
});

function renderCartPage() {
  const empty = document.getElementById('empty-cart');
  const layout = document.getElementById('cart-layout');
  const countEl = document.getElementById('cart-item-count');

  const state = Cart.getState();

  if (state.count === 0) {
    empty.style.display = 'flex';
    layout.style.display = 'none';
    if (countEl) countEl.textContent = '';
    return;
  }

  empty.style.display = 'none';
  layout.style.display = 'grid';
  if (countEl) countEl.textContent = `(${state.count} item${state.count !== 1 ? 's' : ''})`;

  renderCartItems(state.items);
  renderSummary(state);
  buildCheckoutMessage(state.items);
}

function renderCartItems(items) {
  const container = document.getElementById('cart-items-list');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="cart-row" data-uid="${item._uid}">
      <a href="product.html?id=${item.id}">
        <img 
          class="cart-row__img" 
          src="${item.image}" 
          alt="${item.name}"
          loading="lazy"
          onerror="this.src='https://picsum.photos/seed/fallback/90/90'"
        />
      </a>
      <div class="cart-row__body">
        <a href="product.html?id=${item.id}" style="text-decoration:none">
          <div class="cart-row__name">${item.name}</div>
        </a>
        <div class="cart-row__variant">
          ${item.category}
          ${item.variant ? ` · ${Object.values(item.variant).join(', ')}` : ''}
        </div>
        <div class="cart-row__controls">
          <div class="qty-stepper" style="height:36px;padding:0 var(--space-2)" role="group" aria-label="Quantity for ${item.name}">
            <button class="qty-stepper__btn" style="width:28px;height:28px" onclick="changeQty('${item._uid}', ${item.qty - 1})" aria-label="Decrease quantity">−</button>
            <span class="qty-stepper__value" style="width:32px;font-size:var(--text-sm);border:none;background:none;display:flex;align-items:center;justify-content:center" aria-label="${item.qty} items">${item.qty}</span>
            <button class="qty-stepper__btn" style="width:28px;height:28px" onclick="changeQty('${item._uid}', ${item.qty + 1})" aria-label="Increase quantity">+</button>
          </div>
          <span style="font-size:var(--text-sm);color:var(--color-text-secondary)">${formatPrice(item.price)} each</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:var(--space-3)">
        <span class="cart-row__price">${formatPrice(item.price * item.qty)}</span>
        <button class="cart-row__remove" onclick="removeItem('${item._uid}')" aria-label="Remove ${item.name} from cart">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/><path d="m19 6-.867 12.142A2 2 0 0 1 16.138 20H7.862a2 2 0 0 1-1.995-1.858L5 6m5 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

function renderSummary(state) {
  document.getElementById('summary-subtotal').textContent = formatPrice(state.subtotal);

  const shippingEl = document.getElementById('summary-shipping');
  if (state.shipping === 0) {
    shippingEl.innerHTML = '<span class="free">FREE</span>';
  } else {
    shippingEl.textContent = formatPrice(state.shipping);
  }

  document.getElementById('summary-tax').textContent = formatPrice(state.tax);
  document.getElementById('summary-total').textContent = formatPrice(state.total);

  // Free shipping progress
  const FREE_SHIPPING_THRESHOLD = 499;
  const progressTextEl = document.getElementById('shipping-progress-text');
  const progressFillEl = document.getElementById('shipping-progress-fill');

  if (state.subtotal >= FREE_SHIPPING_THRESHOLD) {
    progressTextEl.innerHTML = `🎉 You've unlocked <strong>FREE Shipping</strong>!`;
    progressFillEl.style.width = '100%';
  } else {
    const remaining = FREE_SHIPPING_THRESHOLD - state.subtotal;
    progressTextEl.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more to get free shipping`;
    const pct = Math.round((state.subtotal / FREE_SHIPPING_THRESHOLD) * 100);
    progressFillEl.style.width = `${pct}%`;
  }
}

function buildCheckoutMessage(items) {
  const waBtn = document.getElementById('checkout-wa-btn');
  if (!waBtn) return;

  const state = Cart.getState();
  let msg = `Hi! I'd like to place an order at Varsha Fancy Store:\n\n`;

  items.forEach((item, i) => {
    msg += `${i + 1}. ${item.name}`;
    if (item.variant) msg += ` (${Object.values(item.variant).join(', ')})`;
    msg += ` x${item.qty} = ${formatPrice(item.price * item.qty)}\n`;
  });

  msg += `\nSubtotal: ${formatPrice(state.subtotal)}`;
  msg += `\nShipping: ${state.shipping === 0 ? 'FREE' : formatPrice(state.shipping)}`;
  msg += `\nTotal: ${formatPrice(state.total)}`;
  msg += `\n\nPlease confirm availability and payment details. Thank you!`;

  waBtn.href = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function changeQty(uid, newQty) {
  Cart.updateQty(uid, newQty);
}

function removeItem(uid) {
  const item = Cart.getState().items.find(i => i._uid === uid);
  Cart.remove(uid);
  if (item) Toast.info('Item removed', `${item.name} removed from cart.`, 3000);
}

function renderRecommendations() {
  const grid = document.getElementById('cart-recommendations');
  if (!grid) return;

  const cartItems = Cart.getState().items;
  const cartIds = cartItems.map(i => i.id);
  const recs = PRODUCTS.filter(p => !cartIds.includes(p.id) && p.featured).slice(0, 4);

  grid.innerHTML = recs.map(p => renderProductCard(p)).join('');
}
