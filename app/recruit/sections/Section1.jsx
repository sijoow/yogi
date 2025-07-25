// components/sections/Section1.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './RecrutSection_01.css';

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
    <section id={id} ref={sectionRef} className="BrandSection_01">
      <div className="BrandSection_01_text">
        <h1 className="BrandSection_01_line1">recruit</h1>
      </div>
    </section>
  );
}
