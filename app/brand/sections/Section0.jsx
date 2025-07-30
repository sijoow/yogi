'use client';

import React, { useEffect, useRef } from 'react';
import './BrandSection_00.css';

export default function BrandSection_00() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // IntersectionObserver로 스크롤 진입 시 애니메이션 재생
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('play');
        } else {
          el.classList.remove('play');
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="BrandSection_00" ref={sectionRef}>
      <h1 className="BrandSection_00_line1">BRAND <br className="mobile-br" />MANAGEMENT</h1>
      <h1 className="BrandSection_00_line2">&amp; BUSINESS</h1>
    </section>
  );
}
