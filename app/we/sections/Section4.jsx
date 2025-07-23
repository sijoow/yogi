// app/we/sections/Section4.jsx
'use client';

import { useRef, useEffect } from 'react';
import './weSection_04.css';

export default function Section4({ id = 'sec4' }) {   // ← 인디케이터용 id 기본값
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('play');
        else el.classList.remove('play'); // 다시 숨기지 않으려면 이 줄 지우세요
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className="weSection_04">
      <h2 className="weSec04_title">BRAND MANAGEMENT BUSINESS</h2>

      <p className="weSec04_desc">
        We are the official distributor and manufacturer of Yogibo in Korea, the internationally
        recognized lifestyle and comfort brand, and the creator of SallyFeel, the first “well-living”
        brand focused on both mental and physical wellness. Through these brands, we bring emotionally
        resonant, design-forward products that elevate everyday life.
      </p>
    </section>
  );
}
