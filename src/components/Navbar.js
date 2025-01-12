//import React from 'react';
import React, { useState, useRef } from 'react'; 
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const navRef = useRef(true); 
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (    
    <nav className='nav' onMouseOver={handleSubmenu}>
      <h1>Library System</h1>
            <ul>
                <li><a href="/login">Giriş Yap</a></li>
                <li><a href="/register">Kayıt Ol</a></li>
            </ul>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Ödünç AL
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              İade ET
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Kitap ARA
            </button>
          </li>
        </ul>
        <button
          className="btn signin-btn"
          onClick={() => window.location.href='https://web.whatsapp.com/'}
        >
          Giriş Yap
        </button>
        <button
          className="btn signin-btn"
          onClick={() => window.location.href='https://www.chess.com/home'}
        >
          Kayıt Ol
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
