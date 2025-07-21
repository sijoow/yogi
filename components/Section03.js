'use client';
import React, { useEffect, useRef } from 'react';
import './Section03.css';

export default function Section03() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('play');
        else el.classList.remove('play');
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="section03" ref={sectionRef}>
      <div className="section03_text">
        <h1 className="section03_line1">BRAND</h1>
        <h1 className="section03_line2">MANAGEMENT</h1>
        <h1 className="section03_line3">BUSINESS</h1>
      </div>
    </section>
  );
}
