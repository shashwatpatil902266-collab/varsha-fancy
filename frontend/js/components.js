/**
 * VARSHA FANCY STORE — Shared Components
 * Header injection, footer injection, toast system, 
 * WhatsApp FAB, scroll-to-top, announcement banner
 */

/* ─────────────────────────────────────────────
   TOAST SYSTEM
───────────────────────────────────────────── */

const Toast = {
  _container: null,
  _queue: [],
  _active: [],
  MAX_ACTIVE: 3,

  init() {
    if (!this._container) {
      this._container = document.getElementById('toast-container');
      if (!this._container) {
        this._container = document.createElement('div');
        this._container.id = 'toast-container';
        document.body.appendChild(this._container);
      }
    }
  },

  show(title, message = '', type = 'info', duration = 4000) {
    this.init();

    const icons = {
      success: `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
      error: `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
      warning: `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>`,
      info: `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
    };

    if (this._active.length >= this.MAX_ACTIVE) {
      this._queue.push({ title, message, type, duration });
      return;
    }

    const id = Date.now() + Math.random();
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `
      ${icons[type] || icons.info}
      <div class="toast__body">
        <div class="toast__title">${title}</div>
        ${message ? `<div class="toast__message">${message}</div>` : ''}
      </div>
      <button class="toast__close" aria-label="Dismiss notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      ${type !== 'error' ? `<div class="toast__progress"></div>` : ''}
    `;

    this._container.appendChild(toast);
    this._active.push({ id, el: toast });

    // Close button
    toast.querySelector('.toast__close').addEventListener('click', () => this._dismiss(id));

    // Auto-dismiss (not for errors)
    if (type !== 'error' && duration > 0) {
      setTimeout(() => this._dismiss(id), duration);
    }
  },

  _dismiss(id) {
    const index = this._active.findIndex(t => t.id === id);
    if (index < 0) return;

    const { el } = this._active[index];
    el.classList.add('removing');
    setTimeout(() => {
      el.remove();
      this._active.splice(index, 1);
      // Process queue
      if (this._queue.length > 0) {
        const next = this._queue.shift();
        this.show(next.title, next.message, next.type, next.duration);
      }
    }, 300);
  },

  success(title, message, duration) { this.show(title, message, 'success', duration); },
  error(title, message) { this.show(title, message, 'error', 0); },
  warning(title, message, duration) { this.show(title, message, 'warning', duration); },
  info(title, message, duration) { this.show(title, message, 'info', duration); }
};


/* ─────────────────────────────────────────────
   ANNOUNCEMENT BANNER
───────────────────────────────────────────── */

function renderAnnouncementBar() {
  let currentIdx = 0;
  const banner = document.getElementById('announcement-bar');
  if (!banner || !ANNOUNCEMENTS || !ANNOUNCEMENTS.length) return;

  document.body.classList.add('has-announcement');

  const textEl = banner.querySelector('.announcement-text');
  if (!textEl) return;

  textEl.textContent = ANNOUNCEMENTS[0];

  if (ANNOUNCEMENTS.length > 1) {
    setInterval(() => {
      textEl.style.opacity = '0';
      setTimeout(() => {
        currentIdx = (currentIdx + 1) % ANNOUNCEMENTS.length;
        textEl.textContent = ANNOUNCEMENTS[currentIdx];
        textEl.style.opacity = '1';
      }, 300);
    }, 4000);
  }
}


/* ─────────────────────────────────────────────
   HEADER
───────────────────────────────────────────── */

function renderHeader(activePage = '') {
  const headerEl = document.getElementById('site-header');
  if (!headerEl) return;

  const navLinks = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'categories.html', label: 'Categories', id: 'categories' },
    { href: 'products.html', label: 'All Products', id: 'products' },
    { href: 'about.html', label: 'About Us', id: 'about' },
    { href: 'contact.html', label: 'Contact', id: 'contact' }
  ];

  headerEl.innerHTML = `
    <div class="header__inner">
      <a href="index.html" class="header__logo" aria-label="Varsha Fancy Store - Home">
        <img src="assets/store/logo.png" alt="Varsha Fancy Store" class="header__logo-img" width="140" height="48" style="object-fit: contain; transform: scale(1.4); transform-origin: left center;" />
      </a>

      <div class="header__search">
        <div class="search-bar">
          <svg class="search-bar__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input 
            id="header-search" 
            class="search-bar__input" 
            type="search" 
            placeholder="Search cosmetics, skincare, lipsticks..." 
            aria-label="Search products"
            autocomplete="off"
          />
          <button class="search-bar__clear" id="header-search-clear" aria-label="Clear search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <nav class="header__nav" role="navigation" aria-label="Main navigation">
        ${navLinks.map(link => `
          <a href="${link.href}" class="header__nav-link ${activePage === link.id ? 'active' : ''}" aria-current="${activePage === link.id ? 'page' : 'false'}">
            ${link.label}
          </a>
        `).join('')}
      </nav>

      <div class="header__actions">
        <button class="header__action-btn" id="account-btn" aria-label="My Account" onclick="openAccountModal()">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
          </svg>
        </button>

        <a href="cart.html" class="header__action-btn" id="cart-btn" aria-label="View cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span class="header__cart-badge" id="cart-badge" aria-live="polite">0</span>
        </a>

        <button class="header__hamburger" id="hamburger-btn" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 12) {
      headerEl.classList.add('scrolled');
    } else {
      headerEl.classList.remove('scrolled');
    }
  }, { passive: true });

  // Hamburger
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on nav link click
    mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Search functionality
  const searchInput = document.getElementById('header-search');
  const searchClear = document.getElementById('header-search-clear');

  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      if (searchClear) searchClear.classList.toggle('visible', query.length > 0);

      clearTimeout(searchTimeout);
      if (query.length > 2) {
        searchTimeout = setTimeout(() => {
          window.location.href = `products.html?q=${encodeURIComponent(query)}`;
        }, 800);
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) window.location.href = `products.html?q=${encodeURIComponent(query)}`;
      }
    });

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchClear.classList.remove('visible');
        searchInput.focus();
      });
    }
  }

  // Update cart badge
  updateCartBadge();

  // Subscribe to cart changes
  Cart.subscribe((state) => {
    updateCartBadge(state.count);
  });
}


function updateCartBadge(count = null) {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;

  const cartCount = count !== null ? count : Cart.getCount();
  badge.textContent = cartCount;
  badge.style.display = cartCount === 0 ? 'none' : 'flex';

  if (count !== null && count > 0) {
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
  }
}


/* ─────────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────────── */

function renderMobileNav(activePage = '') {
  const el = document.getElementById('mobile-nav');
  if (!el) return;

  const navLinks = [
    { href: 'index.html', label: '🏠 Home', id: 'home' },
    { href: 'categories.html', label: '📦 Categories', id: 'categories' },
    { href: 'products.html', label: '🛍️ All Products', id: 'products' },
    { href: 'about.html', label: '💛 About Us', id: 'about' },
    { href: 'contact.html', label: '📞 Contact', id: 'contact' },
    { href: 'cart.html', label: '🛒 My Cart', id: 'cart' },
    { href: '#', label: '👤 My Account', id: 'account', action: 'onclick="event.preventDefault(); openAccountModal();"' }
  ];

  el.innerHTML = `
    <div class="mobile-nav__inner">
      <div class="mobile-nav__search">
        <div class="search-bar">
          <svg class="search-bar__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input class="search-bar__input" type="search" placeholder="Search products..." id="mobile-search" aria-label="Search products" />
        </div>
      </div>
      <nav class="mobile-nav__links" role="navigation" aria-label="Mobile navigation">
        ${navLinks.map(link => `
          <a href="${link.href}" class="mobile-nav__link ${activePage === link.id ? 'active' : ''}" ${link.action || ''}>
            ${link.label}
          </a>
        `).join('')}
        <div class="mobile-nav__divider"></div>
        <a href="https://wa.me/${STORE_INFO.whatsapp}" class="mobile-nav__link" target="_blank" rel="noopener">
          💬 WhatsApp Us
        </a>
      </nav>
    </div>
  `;

  const mobileSearch = document.getElementById('mobile-search');
  if (mobileSearch) {
    mobileSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) window.location.href = `products.html?q=${encodeURIComponent(query)}`;
      }
    });
  }
}


/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;

  el.innerHTML = `
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="assets/store/logo.png" alt="Varsha Fancy Store" class="footer__logo-img" width="160" height="54" style="object-fit: contain; transform: scale(1.2); transform-origin: left center;" />
          </div>
          <p class="footer__desc">
            A 16-year legacy of bringing joy through beautiful ethnic accessories, premium cosmetics, and skincare products. 
            Rooted in tradition, loved by thousands of happy customers across Chennai and beyond.
          </p>
          <div class="footer__social">
            <a href="${STORE_INFO.instagram}" class="footer__social-btn" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="${STORE_INFO.facebook}" class="footer__social-btn" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://wa.me/${STORE_INFO.whatsapp}" class="footer__social-btn" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 class="footer__col-title">Quick Links</h3>
          <ul class="footer__links">
            <li><a href="index.html" class="footer__link">🏠 Home</a></li>
            <li><a href="categories.html" class="footer__link">📦 All Categories</a></li>
            <li><a href="products.html" class="footer__link">🛍️ Shop All Products</a></li>
            <li><a href="about.html" class="footer__link">💛 Our Story</a></li>
            <li><a href="contact.html" class="footer__link">📞 Contact Us</a></li>
            <li><a href="cart.html" class="footer__link">🛒 My Cart</a></li>
          </ul>
        </div>

        <div>
          <h3 class="footer__col-title">Categories</h3>
          <ul class="footer__links">
            <li><a href="products.html?cat=cosmetics" class="footer__link">Luxury Cosmetics</a></li>
            <li><a href="products.html?cat=lipsticks" class="footer__link">Lipsticks & Kadas</a></li>
            <li><a href="products.html?cat=cosmetics" class="footer__link">Premium Cosmetics</a></li>
            <li><a href="products.html?cat=facecare" class="footer__link">Organic Face Care</a></li>
            <li><a href="products.html?cat=gifts" class="footer__link">Gifts & Hampers</a></li>
            <li><a href="products.html?cat=homedecor" class="footer__link">Home Decor</a></li>
            <li><a href="products.html?cat=purses" class="footer__link">Ladies & Gents Purses</a></li>
          </ul>
        </div>

        <div>
          <h3 class="footer__col-title">Get in Touch</h3>
          <ul class="footer__links">
            <li><a href="tel:${STORE_INFO.phone}" class="footer__link">📞 ${STORE_INFO.phone}</a></li>
            <li><a href="mailto:${STORE_INFO.email}" class="footer__link">✉️ ${STORE_INFO.email}</a></li>
            <li><span class="footer__link" style="cursor:default">📍 ${STORE_INFO.address}</span></li>
            <li><span class="footer__link" style="cursor:default">⏰ ${STORE_INFO.hours}</span></li>
          </ul>

          <div class="footer__col-title" style="margin-top: var(--space-6)">Newsletter</div>
          <p style="font-size: var(--text-sm); color: rgba(255,255,255,0.5); margin-bottom: var(--space-3);">Get exclusive offers & new arrivals</p>
          <form class="footer__newsletter-form" id="newsletter-form" novalidate>
            <input 
              type="email" 
              class="footer__newsletter-input" 
              placeholder="Your email address" 
              id="newsletter-email"
              aria-label="Email address for newsletter"
              required
            />
            <button type="submit" class="footer__newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          © ${new Date().getFullYear()} Varsha Fancy Store. All rights reserved. Est. 2008, Chennai.
        </p>
        <div class="footer__bottom-links">
          <a href="#" class="footer__bottom-link">Privacy Policy</a>
          <a href="#" class="footer__bottom-link">Terms of Service</a>
          <a href="#" class="footer__bottom-link">Shipping Policy</a>
        </div>
      </div>
    </div>
  `;

  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Toast.error('Invalid email', 'Please enter a valid email address.');
        return;
      }
      Toast.success('Subscribed! 🎉', 'You\'ll receive our latest offers and new arrivals.');
      newsletterForm.reset();
    });
  }
}


/* ─────────────────────────────────────────────
   WHATSAPP FAB
───────────────────────────────────────────── */

function renderWhatsAppFAB() {
  const existing = document.getElementById('whatsapp-fab');
  if (existing) return;

  const fab = document.createElement('a');
  fab.id = 'whatsapp-fab';
  fab.href = `https://wa.me/${STORE_INFO.whatsapp}?text=Hi! I'm interested in shopping at Varsha Fancy Store.`;
  fab.target = '_blank';
  fab.rel = 'noopener noreferrer';
  fab.setAttribute('aria-label', 'Chat on WhatsApp');
  fab.innerHTML = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span class="tooltip">Chat with us</span>
  `;
  document.body.appendChild(fab);
}


/* ─────────────────────────────────────────────
   SCROLL TO TOP
───────────────────────────────────────────── */

function renderScrollTop() {
  const existing = document.getElementById('scroll-top');
  if (existing) return;

  const btn = document.createElement('button');
  btn.id = 'scroll-top';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
    </svg>
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ─────────────────────────────────────────────
   PRODUCT CARD TEMPLATE
───────────────────────────────────────────── */

function renderProductCard(product) {
  const isOutOfStock = product.stock === 0;
  const discount = product.discount ? product.discount : 
    (product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0);

  return `
    <article class="product-card" data-product-id="${product.id}" role="article">
      <a href="product.html?id=${product.id}" style="text-decoration:none;display:block">
        <div class="product-card__image-wrap">
          <img 
            src="${product.image}" 
            alt="${product.name}"
            loading="lazy"
            width="400" height="400"
            onerror="this.src='https://picsum.photos/seed/fallback/400/400'"
          />
          ${isOutOfStock ? `
            <div class="product-card__out-of-stock">
              <span>Out of Stock</span>
            </div>
          ` : ''}
          <div class="product-card__badge">
            ${product.isNew ? '<span class="badge badge--gold">New</span>' : ''}
            ${discount > 0 && !product.isNew ? `<span class="badge badge--error">${discount}% OFF</span>` : ''}
          </div>
          <div class="product-card__actions">
            <button class="product-card__action-btn" onclick="event.preventDefault(); wishlistAdd(${product.id})" aria-label="Add to wishlist">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>
        </div>
      </a>
      <div class="product-card__body">
        <div class="product-card__category">${product.category}</div>
        <a href="product.html?id=${product.id}" style="text-decoration:none">
          <h3 class="product-card__name">${product.name}</h3>
        </a>
        <div class="product-card__rating">
          <div class="stars">${getStarHTML(product.rating)}</div>
          <span class="rating-count">(${product.reviewCount})</span>
        </div>
        <div class="product-card__price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
          ${discount > 0 ? `<span class="price-discount">${discount}% OFF</span>` : ''}
        </div>
        <button 
          class="product-card__add-btn"
          onclick="addToCartFromCard(${product.id})"
          ${isOutOfStock ? 'disabled' : ''}
          aria-label="${isOutOfStock ? 'Out of stock' : `Add ${product.name} to cart`}"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          ${isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </article>
  `;
}

// Global add to cart from card
function addToCartFromCard(productId) {
  const product = getProductById(productId);
  if (!product) return;

  if (product.stock === 0) {
    Toast.warning('Out of Stock', 'This item is currently out of stock.');
    return;
  }

  const success = Cart.add(product, 1);
  if (success) {
    Toast.success('Added to cart! 🛒', `${product.name} has been added.`, 3000);
  }
}

// Global wishlist (localStorage for demo)
function wishlistAdd(productId) {
  const product = getProductById(productId);
  if (!product) return;
  Toast.info('Added to Wishlist ❤️', `${product.name} saved to your wishlist.`, 3000);
}


/* ─────────────────────────────────────────────
   SKELETON LOADERS
───────────────────────────────────────────── */

function renderProductCardSkeleton() {
  return `
    <div class="product-card" aria-busy="true" aria-label="Loading product">
      <div class="skeleton" style="aspect-ratio:1/1; border-radius: var(--radius-xl) var(--radius-xl) 0 0;"></div>
      <div class="product-card__body">
        <div class="skeleton" style="height:12px; width:40%; margin-bottom:8px; border-radius:4px;"></div>
        <div class="skeleton" style="height:16px; width:100%; margin-bottom:4px; border-radius:4px;"></div>
        <div class="skeleton" style="height:16px; width:70%; margin-bottom:12px; border-radius:4px;"></div>
        <div class="skeleton" style="height:24px; width:50%; margin-bottom:12px; border-radius:4px;"></div>
        <div class="skeleton" style="height:38px; width:100%; border-radius:8px;"></div>
      </div>
    </div>
  `;
}


/* ─────────────────────────────────────────────
   CONFIRM DIALOG
───────────────────────────────────────────── */

function showConfirmDialog({ title, description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', confirmVariant = 'danger', onConfirm, onCancel }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'confirm-title');

  overlay.innerHTML = `
    <div class="modal" role="document">
      <div class="modal__header">
        <h2 class="modal__title" id="confirm-title">${title}</h2>
        <button class="modal__close" id="dialog-dismiss" aria-label="Close dialog">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <p class="modal__desc">${description}</p>
      <div class="modal__actions">
        <button class="btn btn-ghost" id="dialog-cancel">${cancelLabel}</button>
        <button class="btn ${confirmVariant === 'danger' ? 'btn-primary' : 'btn-outline'}" id="dialog-confirm">${confirmLabel}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('open'));

  const close = () => {
    overlay.classList.remove('open');
    setTimeout(() => overlay.remove(), 300);
  };

  overlay.querySelector('#dialog-cancel').addEventListener('click', () => {
    close();
    if (onCancel) onCancel();
  });

  overlay.querySelector('#dialog-confirm').addEventListener('click', () => {
    close();
    if (onConfirm) onConfirm();
  });

  overlay.querySelector('#dialog-dismiss').addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

  // Trap focus
  overlay.querySelector('#dialog-cancel').focus();
}


/* ─────────────────────────────────────────────
   MY ACCOUNT MODAL
───────────────────────────────────────────── */

function openAccountModal() {
  let overlay = document.getElementById('account-modal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'account-modal';
    overlay.className = 'modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML = `
      <div class="modal" role="document">
        <div class="modal__header">
          <h2 class="modal__title">My Account</h2>
          <button class="modal__close" onclick="closeAccountModal()" aria-label="Close dialog">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <p class="modal__desc">Welcome back! Since we process all secure orders directly over WhatsApp, your order history and tracking are securely available through your WhatsApp chat with us.</p>
        <div class="modal__actions" style="justify-content: center; margin-top: var(--space-6);">
          <a href="https://wa.me/${typeof STORE_INFO !== 'undefined' ? STORE_INFO.whatsapp : '919131902266'}?text=Hi! I want to check my order history." target="_blank" rel="noopener" class="btn btn-whatsapp" style="width: 100%; justify-content: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Track Orders on WhatsApp
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeAccountModal(); });
  }
  requestAnimationFrame(() => overlay.classList.add('open'));
}

function closeAccountModal() {
  const overlay = document.getElementById('account-modal');
  if (overlay) overlay.classList.remove('open');
}


/* ─────────────────────────────────────────────
   INIT ALL SHARED COMPONENTS
───────────────────────────────────────────── */

function initSharedComponents(activePage = '') {
  renderAnnouncementBar();
  renderHeader(activePage);
  renderMobileNav(activePage);
  renderFooter();
  renderWhatsAppFAB();
  renderScrollTop();
}
