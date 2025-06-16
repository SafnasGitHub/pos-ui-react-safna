import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search Products..." />
      </div>
      <div className="header-actions">
        <span className="notification">🔔</span>
        <span className="user-icon">👤</span>
        <span className="bill-label">Bill</span>
      </div>
    </header>
  );
} 