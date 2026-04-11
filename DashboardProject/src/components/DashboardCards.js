import React from 'react';
import '../styles/DashboardCards.css';

const CARDS = [
  { label:'Total Users',   value:'24,521', delta:'+12.5%', up:true,  icon:'👥', color:'#4E74FF', soft:'#E7EAFF', bars:[28,38,30,50,42,58] },
  { label:'Total Revenue', value:'$84,320',delta:'+8.3%',  up:true,  icon:'💰', color:'#1ABD80', soft:'#E0F8EE', bars:[22,44,36,52,48,64] },
  { label:'Total Orders',  value:'3,847',  delta:'-2.1%',  up:false, icon:'📦', color:'#FD9A32', soft:'#FFF0E0', bars:[40,30,48,26,44,34] },
  { label:'Growth Rate',   value:'18.7%',  delta:'+4.2%',  up:true,  icon:'📈', color:'#9A55FF', soft:'#F0E5FF', bars:[24,40,32,56,44,62] },
];

const DashboardCards = () => (
  <div className="cards-grid">
    {CARDS.map(card => (
      <div key={card.label} className="stat-card">
        <div className="card-left">
          <div className="card-icon-wrap" style={{ background: card.soft }}>
            <span className="card-icon">{card.icon}</span>
          </div>
          <div className="card-info">
            <span className="card-value">{card.value}</span>
            <span className="card-label">{card.label}</span>
            <span className={`card-delta ${card.up ? 'card-delta--up' : 'card-delta--down'}`}>
              {card.up ? '▲' : '▼'} {card.delta}
            </span>
          </div>
        </div>
        <div className="card-bars">
          {card.bars.map((h, i) => (
            <div key={i} className="mini-bar" style={{ height: h, background: card.color, opacity: 0.15 + i * 0.13 }} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default DashboardCards;
