// BusinessSection_04.jsx
'use client';

import React, { useRef, useEffect } from 'react';
import './BusinessSection_04.css';

export default function BusinessSection_04({ id = 'bizSec4' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting
        ? el.classList.add('play')
        : el.classList.remove('play'),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="BusinessSection_04">
      <h2 className="bs4-title">STRATEGIC PARTNERSHIP</h2>

      <div className="bs4-top">
        <div className="bs4-logos">
          {/* YOGI 로고 */}
          <img className="bs4-logo yogi" src="https://yogibo.kr/yogico/img/icon/symbol.png" alt="Yogi" />
          <span className="bs4-multiply">×</span>
          {/* Orchestra 로고 */}
          <img className="bs4-logo" src="https://yogibo.kr/yogico/img/icon/orchesta.png" alt="Orchesta" />
        </div>
        <p className="bs4-desc">
          Yogi Corporation is pursuing international market expansion through a strategic partnership with
          Orchestra. Led by Gilad Kroner, Orchestra is a business development and consulting firm
          comprised of seasoned experts who have spearheaded marketing initiatives for leading global brands
          such as H&M, Mars‐Wrigley, Toyota, De’Longhi, and Pepsi etc.
        </p>
      </div>

      <div className="bs4-cards">
        <div className="bs4-card"></div>
        <div className="bs4-card"></div>
        <div className="bs4-card"></div>
      </div>
    </section>
  );
}
