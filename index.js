const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_MockStripeKey_Fallback');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/checkout', async (req, res) => {
  try {
    const { items } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const line_items = items.map(item => {
      const unitAmount = Math.round(Number(item.price) * 100); 
      return {
        price_data: {
          currency: 'inr', 
          product_data: { name: item.name || item.title || 'Product' },
          unit_amount: unitAmount,
        },
        quantity: item.qty || 1,
      };
    });

    if ((process.env.STRIPE_SECRET_KEY || 'MockStripeKey').includes('MockStripeKey')) {
      console.log('Mock API Key detected. Bypassing Stripe for Vercel demo...');
      return res.json({ id: 'mock_session_id', url: '/success.html' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `https://${req.headers.host}/success.html`,
      cancel_url: `https://${req.headers.host}/cancel.html`,
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: error.message || 'Checkout session failed.' });
  }
});

module.exports = app;
