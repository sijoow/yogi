// components/sections/Section02.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './whoSection_02.css';

export default function Section02({ id = 'sec2' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('play');
        } else {
          el.classList.remove('play'); // 다시 올라갈 때 숨기지 않으려면 이 줄 지우세요
        }
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="whoSection_02">
      <div className="ws2-wrap">
        <h2 className="ws2-line ws2-1">YOGI CORPORATION IS</h2>

        <h2 className="ws2-line ws2-2">MAKING BUSINESS SCALE UP</h2>
        <p  className="ws2-sub  ws2-2s">BUSINESS CONSULTING &amp; DEVELOPMENT</p>

        <h2 className="ws2-line ws2-3">MAKING BRANDS THRIVE</h2>
        <p  className="ws2-sub  ws2-3s">BRAND MANAGEMENT BUSINESS</p>
      </div>
    </section>
  );
}
