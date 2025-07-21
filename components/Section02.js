'use client';
import React, { useEffect, useRef } from 'react';
import './Section02.css';

export default function Section02() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
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
    <section id="section02" ref={sectionRef}>
      <div className="section02_text">
        <h1 className="section02_line1">NO SUCCESS</h1>
        <h1 className="section02_line2">NO BUSINESS</h1>
      </div>
    </section>
  );
}
