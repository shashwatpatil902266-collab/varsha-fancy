require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_mock_key_if_you_want_to_test');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// Mock database to get prices server-side (optional but better for security)
// For now, we will simply trust the client data, but in production, we should look up real prices here.

app.post('/api/checkout', async (req, res) => {
  try {
    const { items } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    // Map items to Stripe's format
    const line_items = items.map(item => {
      // price is a number in data.js (e.g., 2999)
      const unitAmount = Math.round(Number(item.price) * 100); // converting to paise/cents
      
      return {
        price_data: {
          currency: 'inr', // Using INR since it's an Indian store
          product_data: {
            name: item.name || item.title || 'Product',
          },
          unit_amount: unitAmount,
        },
        quantity: item.qty || 1,
      };
    });

    // If using the mock key, bypass Stripe to allow the user to test the UI flow
    if ((process.env.STRIPE_SECRET_KEY || '').includes('MockStripeKey')) {
      console.log('Skipping real Stripe call due to mock API key. Redirecting to success page...');
      return res.json({ id: 'mock_session_id', url: '/success.html' });
    }

    // Create a real Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/success.html`,
      cancel_url: `${req.protocol}://${req.get('host')}/cancel.html`,
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: error.message || 'Checkout session creation failed.' });
  }
});

// Serve frontend for all other routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
