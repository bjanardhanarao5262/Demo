import React from 'react';
import '../styles/BottomNav.css';

const NAV_ITEMS = [
  { id: 'home',    label: 'Home',    icon: '🏠' },
  { id: 'history', label: 'History', icon: '📋' },
  { id: 'scan',    label: 'Scan',    icon: '📷' },
  { id: 'cards',   label: 'Cards',   icon: '💳' },
];

const BottomNav = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map(item => (
        <button
          key={item.id}
          className={`nav-item ${activeTab === item.id ? 'nav-item--active' : ''}`}
          onClick={() => onTabChange(item.id)}
        >
          {activeTab === item.id && <span className="nav-active-bar" />}
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
