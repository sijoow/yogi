// components/sections/Section1.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './NewsSection_01.css';

export default function Section1({ id = 'sec1' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('play');
        } else {
          el.classList.remove('play');
        }
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className="NewsSection_01">
      <div className="NewsSection_01_text">
        <h1 className="NewsSection_01_line1">NEWS</h1>
      </div>
    </section>
  );
}
