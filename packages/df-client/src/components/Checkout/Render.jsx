import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Header from './Header';
import Aside from './Aside';
import Checkout from './Checkout';
import PaymentResult from './PaymentResult';

function App() {
  const [config, setCOnfig] = useState();
  const [cart, setCart] = useState();
  const [status, setStatus] = useState();
  useEffect(() => {
      // Fetch config object
      const config = await fetch('/api/config').then(res => res.json());
      config.stripePromise = loadStripe(config.stripePublishableKey);
      setCOnfig(config);
      // Fetch the products from the API.
      const res = await fetch('/products').then(res => res.json());
      const products = res.data;
      const items = products.map(product => ({
        price: product.skus.data[0].price,
        quantity: randomQuantity(1, 2),
        type: 'sku',
        id: product.id,
        name: product.name,
        parent: product.skus.data[0].id,
        attributes: product.skus.data[0].attributes,
      }));
      const { paymentIntent } = await fetch('/payment_intents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currency: config.currency,
          items,
        }),
      }).then(res => res.json());
      setCart({
        currency: config.currency,
        items,
        total: items.reduce((sum, item) => sum + item.quantity * item.price, 0),
        paymentIntent,
        setStatus,
      });
  }, []);

  return (
    <Elements stripe={config?.stripePromise ?? null}>
      <main
        id="main"
        className={cart ? (status ? `checkout ${status.class}` : 'checkout') : 'loading'}
      >
        <Header />
        <Checkout config={config} cart={cart} />
        <PaymentResult message={status?.message} />
      </main>
      <Aside cart={cart} />
    </Elements>
  );
}

export default App;
