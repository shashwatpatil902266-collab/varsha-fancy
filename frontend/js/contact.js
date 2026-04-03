/**
 * VARSHA FANCY STORE — Contact Page
 */

const FAQS = [
  {
    q: 'Do you ship pan-India?',
    a: 'Yes! We deliver all across India. Orders above ₹499 qualify for free shipping. Delivery typically takes 3–7 business days depending on your location.'
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 7-day hassle-free return policy for unused items in their original packaging. Sarees and custom orders may have different policies. Contact us on WhatsApp to initiate a return.'
  },
  {
    q: 'Can I order custom or bulk quantities?',
    a: 'Absolutely! We accept bulk orders for weddings, events, and resellers. WhatsApp us with your requirements and we\'ll provide a customized quote with special pricing.'
  },
  {
    q: 'How do I place an order via WhatsApp?',
    a: 'Simply click any "Order via WhatsApp" button on a product page, or message us directly at +91 91319 02266. Share the product name, quantity, and your delivery address — we\'ll handle the rest!'
  },
  {
    q: 'Are all your products authentic and genuine?',
    a: 'Yes, 100%. We source directly from artisans and reputed manufacturers across India. Every product is personally verified by our team before it reaches our shelves or website.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'For WhatsApp orders, we accept UPI (GPay, PhonePe, Paytm), Bank Transfer, and Cash on Delivery (select areas). Payment details are shared after order confirmation.'
  },
  {
    q: 'Can I visit the store in Chennai?',
    a: 'Of course! We\'d love to see you. Our store at 123, Main Bazaar Road, T. Nagar, Chennai is open Mon–Sat (9 AM–9 PM) and Sunday (10 AM–7 PM). No prior appointment needed.'
  },
  {
    q: 'How do I track my order?',
    a: 'Once your order is shipped, we\'ll send the tracking details via WhatsApp. You can also contact us anytime to get a real-time update on your order status.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initSharedComponents('contact');
  renderFAQs();
  setupContactForm();
});

function renderFAQs() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  list.innerHTML = FAQS.map((faq, i) => `
    <div class="faq-item">
      <button
        class="faq-question"
        id="faq-btn-${i}"
        aria-expanded="false"
        aria-controls="faq-answer-${i}"
        onclick="toggleFAQ(${i})"
      >
        <span>${faq.q}</span>
        <span class="faq-question__icon" aria-hidden="true">+</span>
      </button>
      <div
        class="faq-answer"
        id="faq-answer-${i}"
        role="region"
        aria-labelledby="faq-btn-${i}"
      >
        ${faq.a}
      </div>
    </div>
  `).join('');
}

function toggleFAQ(idx) {
  const btn = document.getElementById(`faq-btn-${idx}`);
  const answer = document.getElementById(`faq-answer-${idx}`);
  if (!btn || !answer) return;

  const isOpen = btn.getAttribute('aria-expanded') === 'true';

  // Close all
  FAQS.forEach((_, i) => {
    const b = document.getElementById(`faq-btn-${i}`);
    const a = document.getElementById(`faq-answer-${i}`);
    if (b) b.setAttribute('aria-expanded', 'false');
    if (a) a.classList.remove('open');
  });

  // Toggle current
  if (!isOpen) {
    btn.setAttribute('aria-expanded', 'true');
    answer.classList.add('open');
  }
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    // Name
    const name = document.getElementById('c-name').value.trim();
    const nameError = document.getElementById('c-name-error');
    if (name.length < 2) { nameError.style.display = 'block'; valid = false; }
    else { nameError.style.display = 'none'; }

    // Email
    const email = document.getElementById('c-email').value.trim();
    const emailError = document.getElementById('c-email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { emailError.style.display = 'block'; valid = false; }
    else { emailError.style.display = 'none'; }

    // Message
    const message = document.getElementById('c-message').value.trim();
    const msgError = document.getElementById('c-msg-error');
    if (message.length < 20) { msgError.style.display = 'block'; valid = false; }
    else { msgError.style.display = 'none'; }

    // Consent
    const consent = document.getElementById('c-consent').checked;
    const consentError = document.getElementById('c-consent-error');
    if (!consent) { consentError.style.display = 'block'; valid = false; }
    else { consentError.style.display = 'none'; }

    if (!valid) return;

    // Build WhatsApp message
    const subjectEl = document.getElementById('c-subject');
    const subject = subjectEl.options[subjectEl.selectedIndex].text || 'General Enquiry';
    const waMsg = `Hello Varsha Store, I have an inquiry:%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A%0A*Message:*%0A${message}`;

    // Redirect to WhatsApp
    const phone = typeof STORE_INFO !== 'undefined' ? STORE_INFO.whatsapp : '919131902266';
    window.open(`https://wa.me/${phone}?text=${waMsg.replace(/\n/g, '%0A')}`, '_blank');

    document.getElementById('form-success').style.display = 'block';
    form.reset();
  });
}
