import React from 'react';
import '../styles/ChartPanel.css';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const VALUES = [42,54,44,66,62,76,70,88,64,82,70,92];
const MAX = Math.max(...VALUES);

const ChartPanel = () => (
  <div className="panel chart-panel">
    <div className="panel-header">
      <div>
        <h3>Revenue Overview</h3>
        <span className="panel-sub">Jan – Dec 2025</span>
      </div>
      <div className="chart-legend">
        <span className="legend-dot" />
        <span className="legend-label">Monthly Revenue</span>
      </div>
    </div>
    <div className="chart-area">
      <div className="y-axis">
        {['$100k','$75k','$50k','$25k','$0'].map(l => (
          <span key={l} className="y-label">{l}</span>
        ))}
      </div>
      <div className="bars-wrap">
        {VALUES.map((v, i) => (
          <div key={i} className="bar-col">
            <div
              className={`chart-bar ${i === VALUES.length - 1 ? 'chart-bar--active' : ''}`}
              style={{ height: `${(v / MAX) * 100}%` }}
              title={`${MONTHS[i]}: $${v}k`}
            />
            <span className="x-label">{MONTHS[i][0]}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ChartPanel;
