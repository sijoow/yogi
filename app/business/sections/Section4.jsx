'use client';

import React, { useRef, useEffect } from 'react';
import './BusinessSection_04.css';

export default function BusinessSection_04({ id = 'bizSec4' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? el.classList.add('play') : el.classList.remove('play');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="BusinessSection_04">
      <h2 className="bs4-title">Strategic Partnership</h2>
    </section>
  );
}
