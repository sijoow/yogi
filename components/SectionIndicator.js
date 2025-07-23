// components/SectionIndicator.jsx
'use client';

import { useState, useEffect } from 'react';

export default function SectionIndicator({ sectionIds }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observers = sections.map((el, idx) => {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(idx);
        },
        { rootMargin: '-45% 0px -55% 0px', threshold: 0 }
      );
      io.observe(el);
      return io;
    });

    // 맨 위/아래 보정
    const onScroll = () => {
      if (window.scrollY <= 1) {
        setActiveIndex(0);
        return;
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1;
      if (atBottom) setActiveIndex(sections.length - 1);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observers.forEach(o => o.disconnect());
      window.removeEventListener('scroll', onScroll);
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
