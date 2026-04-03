/**
 * VARSHA FANCY STORE — Cart State Management
 * Persistent via localStorage
 */

const CART_KEY = 'varsha_cart';
const MAX_CART_ITEMS = 20;
const MAX_QTY_PER_ITEM = 10;

const Cart = {
  // ─── State ───
  _items: [],
  _listeners: [],

  // ─── Initialize ───
  init() {
    try {
      const stored = localStorage.getItem(CART_KEY);
      this._items = stored ? JSON.parse(stored) : [];
    } catch (e) {
      this._items = [];
    }
  },

  // ─── Subscribe to changes ───
  subscribe(fn) {
    this._listeners.push(fn);
    return () => {
      this._listeners = this._listeners.filter(l => l !== fn);
    };
  },

  _notify() {
    this._save();
    this._listeners.forEach(fn => fn(this.getState()));
  },

  _save() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(this._items));
    } catch (e) {
      console.warn('Cart: localStorage save failed');
    }
  },

  // ─── Getters ───
  getState() {
    return {
      items: [...this._items],
      count: this.getCount(),
      subtotal: this.getSubtotal(),
      shipping: this.getShipping(),
      tax: this.getTax(),
      total: this.getTotal()
    };
  },

  getCount() {
    return this._items.reduce((sum, item) => sum + item.qty, 0);
  },

  getSubtotal() {
    return this._items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  getShipping() {
    const subtotal = this.getSubtotal();
    if (this._items.length === 0) return 0;
    return subtotal >= 499 ? 0 : 49;
  },

  getTax() {
    return Math.round(this.getSubtotal() * 0.05); // 5% GST
  },

  getTotal() {
    return this.getSubtotal() + this.getShipping() + this.getTax();
  },

  // ─── Actions ───
  add(product, qty = 1, variant = null) {
    const uniqueId = this._uniqueId(product.id, variant);
    const existingIndex = this._items.findIndex(i => i._uid === uniqueId);

    if (existingIndex >= 0) {
      const newQty = Math.min(
        this._items[existingIndex].qty + qty,
        MAX_QTY_PER_ITEM,
        product.stock || MAX_QTY_PER_ITEM
      );
      this._items[existingIndex].qty = newQty;
    } else {
      if (this._items.length >= MAX_CART_ITEMS) {
        Toast.show('Cart is full', 'Maximum ' + MAX_CART_ITEMS + ' different items allowed', 'warning');
        return false;
      }
      this._items.push({
        _uid: uniqueId,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        variant: variant,
        qty: Math.min(qty, MAX_QTY_PER_ITEM, product.stock || MAX_QTY_PER_ITEM),
        stock: product.stock || 999
      });
    }

    this._notify();
    return true;
  },

  remove(uid) {
    this._items = this._items.filter(i => i._uid !== uid);
    this._notify();
  },

  updateQty(uid, qty) {
    const item = this._items.find(i => i._uid === uid);
    if (!item) return;

    if (qty <= 0) {
      this.remove(uid);
      return;
    }

    item.qty = Math.min(qty, MAX_QTY_PER_ITEM, item.stock);
    this._notify();
  },

  clear() {
    this._items = [];
    this._notify();
  },

  isEmpty() {
    return this._items.length === 0;
  },

  _uniqueId(productId, variant) {
    return variant ? `${productId}_${JSON.stringify(variant)}` : `${productId}`;
  }
};

// Initialize on load
Cart.init();
