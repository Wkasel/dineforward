/* eslint-disable camelcase */
import Stripe from 'stripe';

import { CURRENCY, MIN_AMOUNT, MAX_AMOUNT } from '~config';
import { formatAmountForStripe } from '~utils/stripe/stripeHelpers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2019-12-03',
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { amount } = req.body;
    try {
      // Validate the amount that was passed from the client.
      // if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
      //   throw new Error('Invalid amount.');
      // }
      // Create PaymentIntent from body params.
      const params = {
        payment_method_types: ['card'],
        amount: `$${amount}`,
        currency: 'USD',
      };
      const payment_intent = await stripe.paymentIntents.create(params);

      res.status(200).json(payment_intent);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
