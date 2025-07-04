'use client';
import React, { useState } from 'react';
import './Slidebar.css';          
import Slidebar from './SlideBar';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = e => {
    e.preventDefault();
    setMenuOpen(o => !o);
  };

  return (
    <>
      <header className="navbar">
        <h1 className="logo">
          <Link href="/"></Link>
        </h1>
        <button
          className={`menu btn_tl ${menuOpen ? 'open_btn' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </button>
      </header>

      <Slidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
