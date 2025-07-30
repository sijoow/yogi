'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Slidebar.css';

const menuItems = [
  { href: '/', label: 'HOME' },
  { href: '/who', label: 'WHO WE ARE' },
  { href: '/we', label: 'WHAT WE DO' },
  { href: '/news', label: 'NEWS' },
  { href: '/recruit', label: 'RECRUIT' },
  
];

export default function Slidebar({ isOpen, onClose }) {
  const pathname = usePathname();

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
                {menuItems.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={pathname === item.href ? 'active' : ''}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <footer id="footer">
            <address style={{fontFamily:'Roboto Condensed'}}>
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
