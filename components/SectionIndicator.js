// components/SectionIndicator.jsx
'use client';

import { useState, useEffect } from 'react';

export default function SectionIndicator({ sectionIds }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers = sectionIds.map((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          }
        },
        {
          rootMargin: '0px 0px 50% 0px',  // 위쪽만 감지 폭 축소 → 좀 더 빨리 인식
          threshold: 0.5,                  // 50% 이상 보일 때도 교차로 판단
        }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs && obs.disconnect());
    };
  }, [sectionIds]);

  return (
    <div className="section-indicator">
      {sectionIds.map((_, idx) => (
        <div
          key={idx}
          className={`section-indicator__bar ${
            idx === activeIndex ? 'section-indicator__bar--active' : ''
          }`}
        />
      ))}
    </div>
  );
}