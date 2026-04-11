import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="avatar">J</div>
        <div className="header-text">
          <span className="greeting">Good Morning, Janardhana 👋</span>
          <span className="sub-greeting">Manage your money easily</span>
        </div>
      </div>
      <button className="notif-btn" aria-label="Notifications">🔔</button>
    </header>
  );
};

export default Header;
