// components/MainSection.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './MainSection.css';

export default function MainSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('play');
        } else {
          el.classList.remove('play');
        }
      },
      {
        root: null,        // viewport
        threshold: 0.5,    // 50% 보이면 트리거
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mainSection" ref={sectionRef}>
      <h1 className="main_line1">TOWARD</h1>
      <h1 className="main_line2">OPPORTUNITIES</h1>
      <h1 className="main_line3">&amp; POSSIBILITIES</h1>      
    </section>
  );
}
