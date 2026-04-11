import React from 'react';
import '../styles/ActionGrid.css';

const ACTIONS = [
  { id: 1, label: 'Send Money',   icon: '💸' },
  { id: 2, label: 'Scan & Pay',   icon: '📷' },
  { id: 3, label: 'Recharge',     icon: '📱' },
  { id: 4, label: 'Pay Bills',    icon: '🧾' },
  { id: 5, label: 'Insurance',    icon: '🛡️' },
  { id: 6, label: 'Loans',        icon: '🏦' },
  { id: 7, label: 'Invest',       icon: '📈' },
  { id: 8, label: 'More',         icon: '⋯'  },
];

const ActionGrid = () => {
  const handleAction = (label) => alert(`Tapped: ${label}`);

  return (
    <section className="action-section">
      <h2 className="section-title">Quick Actions</h2>
      <div className="action-grid">
        {ACTIONS.map(a => (
          <button
            key={a.id}
            className="action-tile"
            onClick={() => handleAction(a.label)}
          >
            <span className="action-icon">{a.icon}</span>
            <span className="action-label">{a.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ActionGrid;
