// components/sections/whoSection_01.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './whoSection_01.css';

export default function whoSection_01() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // 최초 진입 시 애니메이션 실행
    el.classList.add('play');

    // 스크롤 재진입 시 토글
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting
          ? el.classList.add('play')
          : el.classList.remove('play');
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="whoSection_01" ref={sectionRef}>
      <div className="whoSection_01_text">
        <h1 className="whoSection_01_line1">
          WE<br className="mobile-br" /> KNOW
        </h1>
        <h1 className="whoSection_01_line2">
          WHAT<br className="mobile-br" /> WE DO
        </h1>
      </div>
    </section>
  );
}
