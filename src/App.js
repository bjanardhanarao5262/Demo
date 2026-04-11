import React, { useState } from 'react';
import Header from './components/Header';
import WalletCard from './components/WalletCard';
import ActionGrid from './components/ActionGrid';
import Transactions from './components/Transactions';
import BottomNav from './components/BottomNav';
import './styles/App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-wrapper">
      <div className="phone-frame">
        <Header />
        <div className="scroll-content">
          <WalletCard />
          <ActionGrid />
          <Transactions />
        </div>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default App;
