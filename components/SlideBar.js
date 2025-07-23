// components/Slidebar.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import './Slidebar.css';

export default function Slidebar({ isOpen, onClose }) {
  return (
    <>
      {/* backdrop */}
      <div
        className={`slide-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />

      {/* panel */}
      <nav className={`slidebar ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="inner">
          <header id="header">
            <nav id="nav">
              <ul onClick={onClose}>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/we">WHAT WE DO</Link></li>
                <li><Link href="/who">WHO WE ARE</Link></li>
                <li><Link href="/business">BUSINESS CONSULTING &amp; DEVELOPMENT</Link></li>
                <li><Link href="/partnership">STRATEGIC PARTNERSHIP</Link></li>
                <li className="banrdBusinessFont">
                  <Link href="/brand">Brand Management Business</Link>
                </li>
                <li><Link href="/news">NEWS</Link></li>
                <li><Link href="/recruit">RECRUIT</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
              </ul>
            </nav>
          </header>

          <footer id="footer">
            <address>
              #201, 125, Bongeunsa-ro, <br />
              Gangnam-gu, Seoul, Korea<br />
              <a href="tel:+82-10-2880-0721">
                Tel +82-10-2880-0721 / Fax +82-303-3441-6747
              </a>
            </address>
            <ul className="contact_mail">
              <li>
                <a href="mailto:contact@yogico.kr">contact@yogico.kr</a>
              </li>
            </ul>
          </footer>
        </div>
      </nav>
    </>
  );
}
