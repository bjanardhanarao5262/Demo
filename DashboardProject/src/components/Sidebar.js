import React from 'react';
import '../styles/Sidebar.css';

const NAV_MAIN = [
  { icon: '⊞', label: 'Dashboard' },
  { icon: '👥', label: 'Employees' },
  { icon: '📊', label: 'Reports' },
  { icon: '🔔', label: 'Alerts' },
  { icon: '⚙️', label: 'Settings' },
];

const NAV_ANALYTICS = [
  { icon: '📈', label: 'Growth' },
  { icon: '💰', label: 'Revenue' },
  { icon: '🗂️', label: 'Audit' },
];

const Sidebar = ({ activeNav, onNavChange }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">A</div>
        <div className="logo-text">
          <span className="logo-name">AdminX</span>
          <span className="logo-sub">Dashboard Suite</span>
        </div>
      </div>
      <div className="sidebar-divider" />
      <nav className="sidebar-nav">
        {NAV_MAIN.map(item => (
          <button
            key={item.label}
            className={`nav-item ${activeNav === item.label ? 'nav-item--active' : ''}`}
            onClick={() => onNavChange(item.label)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-divider" />
      <span className="sidebar-section-label">ANALYTICS</span>
      <nav className="sidebar-nav">
        {NAV_ANALYTICS.map(item => (
          <button
            key={item.label}
            className="nav-item"
            onClick={() => onNavChange(item.label)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-profile">
        <div className="sidebar-divider" />
        <div className="profile-row">
          <div className="profile-avatar">J</div>
          <div className="profile-info">
            <span className="profile-name">Janardhana Rao</span>
            <span className="profile-role">Administrator</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
