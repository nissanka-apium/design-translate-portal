
import { useState } from 'react';
import { Menu, ArrowUp, ArrowDown, ChevronRight } from 'lucide-react';

const WalletDashboard = () => {
  const [activeTab, setActiveTab] = useState('assets');
  
  const transactions = [
    {
      id: 1,
      type: 'BNB',
      email: 'lawson@gmail.com',
      amount: '0.117',
      trend: 'up',
      usdValue: '84.80'
    },
    {
      id: 2,
      type: 'SOL',
      email: 'dq20i8dp..f244vdzb',
      amount: '0.996',
      trend: 'down',
      usdValue: '228.83'
    },
    {
      id: 3,
      type: 'BNB',
      email: 'mtrc@gmail.com',
      amount: '0.089',
      trend: 'down',
      usdValue: '43.34'
    }
  ];

  return (
    <div className="min-h-screen p-6 md:p-8 animate-in">
      <header className="flex items-center justify-between mb-8">
        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-medium">My Wallet</h1>
        <div className="w-6" /> {/* Spacer for alignment */}
      </header>

      <div className="glass-panel p-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-wallet-accent/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-wallet-accent" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-sm text-wallet-muted">USD</span>
        </div>
        
        <h2 className="text-4xl font-semibold mb-8">271,297.35</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <button className="action-button">
            <ArrowUp className="w-5 h-5" />
            Send
          </button>
          <button className="action-button">
            <ArrowDown className="w-5 h-5" />
            Receive
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex border-b border-white/10">
          <button
            className={`tab-button ${activeTab === 'assets' ? 'active' : ''}`}
            onClick={() => setActiveTab('assets')}
          >
            Assets
          </button>
          <button
            className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            History
          </button>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-medium">Recent Transactions</h3>
        <button className="text-sm text-wallet-accent flex items-center gap-1 hover:opacity-80 transition-opacity">
          View all
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="glass-panel divide-y divide-white/10">
        <p className="p-4 text-sm text-wallet-muted">Today</p>
        
        {transactions.map((tx) => (
          <div key={tx.id} className="transaction-item animate-in" style={{animationDelay: `${tx.id * 100}ms`}}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-wallet-accent/20 flex items-center justify-center">
                {tx.type === 'BNB' ? (
                  <svg className="w-6 h-6 text-wallet-accent" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-wallet-accent" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
                    <path fill="currentColor" d="M8 12h8M12 8v8"/>
                  </svg>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{tx.type}</span>
                  {tx.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                </div>
                <p className="text-sm text-wallet-muted">{tx.email}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{tx.amount} {tx.type}</p>
              <p className="text-sm text-wallet-muted">${tx.usdValue} USD</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletDashboard;
