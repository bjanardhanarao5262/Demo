import React, { useState } from 'react';
import '../styles/Transactions.css';

const ALL_TRANSACTIONS = [
  { id: 1, name: 'Amazon Pay',      sub: 'Online Shopping', amount: '-₹1,299',  type: 'debit',  icon: '🛒', date: 'Today, 10:32 AM'    },
  { id: 2, name: 'Swiggy',          sub: 'Food & Drinks',   amount: '-₹349',    type: 'debit',  icon: '🍔', date: 'Today, 01:15 PM'    },
  { id: 3, name: 'Salary Credit',   sub: 'HDFC Bank',       amount: '+₹52,000', type: 'credit', icon: '💼', date: 'Yesterday, 09:00 AM' },
  { id: 4, name: 'Electricity Bill', sub: 'BESCOM',         amount: '-₹820',    type: 'debit',  icon: '⚡', date: 'Apr 9, 06:45 PM'    },
  { id: 5, name: 'Netflix',         sub: 'Subscription',    amount: '-₹649',    type: 'debit',  icon: '🎬', date: 'Apr 8, 11:00 PM'    },
  { id: 6, name: 'Zepto',           sub: 'Groceries',       amount: '-₹423',    type: 'debit',  icon: '🛍️', date: 'Apr 8, 08:20 AM'    },
];

const Transactions = () => {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? ALL_TRANSACTIONS : ALL_TRANSACTIONS.slice(0, 4);

  return (
    <section className="tx-section">
      <div className="tx-header">
        <h2 className="section-title">Recent Transactions</h2>
        <button className="see-all-btn" onClick={() => setShowAll(v => !v)}>
          {showAll ? 'Show Less ↑' : 'See All →'}
        </button>
      </div>
      <ul className="tx-list">
        {list.map(tx => (
          <li key={tx.id} className="tx-item">
            <div className={`tx-icon-wrap tx-icon-wrap--${tx.type}`}>
              <span className="tx-icon">{tx.icon}</span>
            </div>
            <div className="tx-info">
              <span className="tx-name">{tx.name}</span>
              <span className="tx-sub">{tx.sub} · {tx.date}</span>
            </div>
            <span className={`tx-amount tx-amount--${tx.type}`}>{tx.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Transactions;
