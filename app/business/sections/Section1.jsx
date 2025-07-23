// components/sections/Section1.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './BusinessSection_01.css';

export default function Section1({ id = 'sec1' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // 1) 첫 로드 즉시 노출
    el.classList.add('play');

    // 2) 스크롤 재진입 시만 다시 트리거하고 싶을 때
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('play');
        } else {
          // 다시 숨기기 원치 않으면 아래 줄 주석
          el.classList.remove('play');
        }
      },
      { rootMargin: '-10% 0px -90% 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);
//
  return (
    <section id={id} ref={sectionRef} className="BusinessSection_01">
      <div className="BusinessSection_01_text">
        <h1 className="BusinessSection_01_line1">SCALING UP</h1>
        <h1 className="BusinessSection_01_line2">BUSINESS</h1>
      </div>
    </section>
  );
}
