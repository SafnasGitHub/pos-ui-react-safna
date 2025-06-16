import React from 'react';
import './Sidebar.css';

const navItems = [
  { label: 'Home', icon: '🏠' },
  { label: 'Sales', icon: '💰' },
  { label: 'Products', icon: '📦', active: true },
  { label: 'Utilities', icon: '🛠️' },
  { label: 'Stocks', icon: '📊' },
  { label: 'Reports', icon: '📄' },
  { label: 'Users', icon: '👤' },
  { label: 'Suppliers', icon: '🚚' },
  { label: 'Settings', icon: '⚙️' },
  { label: 'Exit', icon: '🚪', exit: true },
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-title">POS NAME</div>
      <ul>
        {navItems.map((item) => (
          <li key={item.label} className={item.active ? 'active' : ''}>
            <span className="icon">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
} 