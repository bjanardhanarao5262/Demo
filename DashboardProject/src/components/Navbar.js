import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState('');
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">Dashboard Overview</h1>
        <p className="navbar-sub">Welcome back, Janardhana 👋</p>
      </div>
      <div className="navbar-center">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search anything..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <div className="navbar-right">
        <button className="icon-btn" aria-label="Notifications">
          🔔
          <span className="notif-badge">3</span>
        </button>
        <button className="icon-btn" aria-label="Settings">⚙️</button>
        <div className="navbar-profile">
          <div className="profile-avatar">J</div>
          <div className="profile-text">
            <span className="profile-name">Janardhana</span>
            <span className="profile-role">Admin</span>
          </div>
          <span className="profile-chevron">▾</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
