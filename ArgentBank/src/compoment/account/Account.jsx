import './Account.css';
import React from 'react';

const Account = ({ type, number, amount, balance }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h2 className="account-title">{type} (Account {number})</h2>
        <p className="account-amount">Amount: {amount}</p>
        <p className="account-amount-description">{balance}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
