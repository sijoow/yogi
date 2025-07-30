'use client';
import React, { useEffect, useRef } from 'react';
import './BrandSection_00.css';

export default function BrandSection_00() {
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
    <section id="BrandSection_00" ref={sectionRef}>
      <div className="BrandSection_00_text">
        <h1 className="BrandSection_00_line1">BRAND</h1>
        <h1 className="BrandSection_00_line2">MANAGEMENT</h1>
        <h1 className="BrandSection_00_line3">BUSINESS</h1>
      </div>
    </section>
  );
}
