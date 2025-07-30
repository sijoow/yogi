'use client';

import React, { useEffect, useRef } from 'react';
import './BusinessSection_01.css';

export default function BusinessSection_01() {
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
    <section id="BusinessSection_01" ref={sectionRef}>
      <h1 className="BusinessSection_01_line1">BUSINESS <br className="mobile-br" />CONSULTING</h1>
      <h1 className="BusinessSection_01_line2">&amp; DEVELOPMENT</h1>
    </section>
  );
}
