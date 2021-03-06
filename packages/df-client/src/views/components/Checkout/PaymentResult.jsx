import React from 'react';

const PaymentResult = ({ message }) => {
  return (
    <div id="confirmation">
      <div className="status processing">
        <h1>Completing your order…</h1>
        <p>
          We’re just waiting for the confirmation from your bank… This might take a moment but feel
          free to close this page.
        </p>
        <p>We’ll send your receipt via email shortly.</p>
      </div>
      <div className="status success">
        <h1>Thanks for your order!</h1>
        <p>Woot! You successfully made a payment with Stripe.</p>
        <p className="note">
          We just sent your receipt to your email address, and your items will be on their way
          shortly.
        </p>
      </div>
      <div className="status receiver">
        <h1>Thanks! One last step!</h1>
        <p>Please make a payment using the details below to complete your order.</p>
        <div className="info">{message}</div>
      </div>
      <div className="status error">
        <h1>Oops, payment failed.</h1>
        <p>
          It looks like your order could not be paid at this time. Please try again or select a
          different payment option.
        </p>
        <p className="error-message">{message}</p>
      </div>
    </div>
  );
};

export default PaymentResult;
