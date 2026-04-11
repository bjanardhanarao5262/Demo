import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardCards from './components/DashboardCards';
import ChartPanel from './components/ChartPanel';
import EmployeeTable from './components/EmployeeTable';
import './styles/App.css';

const App = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="app-layout">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      <div className="main-area">
        <Navbar />
        <main className="content">
          <DashboardCards />
          <div className="mid-row">
            <ChartPanel />
            <TrafficPanel />
          </div>
          <EmployeeTable />
        </main>
      </div>
    </div>
  );
};

const TRAFFIC = [
  { label: 'Organic',  pct: '42%', width: '42%', color: '#4E74FF' },
  { label: 'Referral', pct: '28%', width: '28%', color: '#1ABD80' },
  { label: 'Social',   pct: '18%', width: '18%', color: '#FD9A32' },
  { label: 'Direct',   pct: '12%', width: '12%', color: '#9A55FF' },
];

const TrafficPanel = () => (
  <div className="panel traffic-panel">
    <div className="panel-header">
      <div>
        <h3>Traffic Sources</h3>
        <span className="panel-sub">This month</span>
      </div>
    </div>
    <div className="traffic-list">
      {TRAFFIC.map(t => (
        <div key={t.label} className="traffic-item">
          <div className="traffic-top">
            <span className="traffic-label">{t.label}</span>
            <span className="traffic-pct" style={{ color: t.color }}>{t.pct}</span>
          </div>
          <div className="traffic-track">
            <div className="traffic-fill" style={{ width: t.width, background: t.color }} />
          </div>
        </div>
      ))}
    </div>
    <div className="metric-row">
      {[
        { label: 'Bounce Rate', val: '38.2%', color: '#4E74FF' },
        { label: 'Avg Session', val: '4m 32s', color: '#1ABD80' },
        { label: 'Conversion',  val: '6.8%',  color: '#FD9A32' },
      ].map(m => (
        <div key={m.label} className="metric-chip" style={{ borderTop: `3px solid ${m.color}` }}>
          <span className="metric-val" style={{ color: m.color }}>{m.val}</span>
          <span className="metric-label">{m.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default App;
