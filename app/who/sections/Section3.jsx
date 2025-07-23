// components/sections/Section03.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './whoSection_03.css';

export default function Section03({ id = 'sec3' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('play');
        } else {
          el.classList.remove('play'); // 다시 숨기지 않으려면 이 줄 삭제
        }
      },
      { threshold: 0.45 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="whoSection_03">
      <div className="ws3-wrap">
        <h2 className="ws3-title ws3-1">BUSINESS CONSULTING</h2>
        <h2 className="ws3-title ws3-2">&amp; DEVELOPMENT</h2>

        <p className="ws3-desc">
          We provide end‑to‑end business consulting services to help companies enter,
          scale and thrive in global markets. Our services span market entry strategy,
          finding partners, localization, strategic alliances, business negotiations,
          post‑entry growth acceleration and investment.
        </p>
      </div>
    </section>
  );
}
