// components/BrandSection_01.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './BrandSection_01.css';

export default function BrandSection_01() {
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
    <section id="BrandSection_01" ref={sectionRef}>
      <h1 className="main_line1 ">MAKING</h1>
      <h1 className="main_line2">LIFESTYLE</h1>
      <h1 className="main_line3">BETTER</h1>      
    </section>
  );
}
