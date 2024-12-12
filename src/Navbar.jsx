import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Navbar({ OpenSidebar }) {
  return (
    <header className="navbar">
      {/* Sidebar Menu Icon */}
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>

      {/* Logo Section */}
      <div className="logo">
        <h1 className="logo-text">AUTO STREAM</h1>
      </div>

      {/* Search Icon */}
      <div className="navbar-left">
        <BsSearch className="icon" />
      </div>

      {/* Notification and Profile Icons */}
      <div className="navbar-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Navbar;
