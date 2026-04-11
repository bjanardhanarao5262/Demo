import React, { useState } from 'react';
import '../styles/WalletCard.css';

const WalletCard = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="wallet-card">
      <div className="wallet-top">
        <span className="wallet-label">PhonePe Wallet</span>
        <button
          className="toggle-btn"
          onClick={() => setVisible(v => !v)}
          aria-label="Toggle balance"
        >
          {visible ? '👁️' : '🙈'}
        </button>
      </div>
      <div className="wallet-balance">
        {visible ? '₹ 24,500.00' : '₹ ••••••'}
      </div>
      <div className="wallet-actions">
        <button className="wallet-btn wallet-btn--secondary">+ Add Money</button>
        <button className="wallet-btn wallet-btn--outline">Withdraw</button>
      </div>
      <span className="wallet-card-icon">💳</span>
    </div>
  );
};

export default WalletCard;
