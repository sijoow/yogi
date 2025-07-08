// src/components/Section1.jsx
import React, { useEffect, useRef, useState } from 'react';
import './section1.css';

const TEXT_IMAGES = [
  'https://yogibo.openhost.cafe24.com/yogico/txt/txt1.png',
  'https://yogibo.openhost.cafe24.com/yogico/txt/txt2.png',
  'https://yogibo.openhost.cafe24.com/yogico/txt/txt3.png',
];

export default function Section1() {
  const ref = useRef(null);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    setIsOn(true); // 마운트 직후에도 실행

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsOn(true);
        else {
          setIsOn(false);
          void el.offsetWidth;
        }
      },
      { threshold: 0 } // 0으로 낮춤
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="section1" ref={ref} className={isOn ? 'on' : ''}>
      <div className="txt-wrap">
        {TEXT_IMAGES.map((src, idx) => (
          <img
            key={idx}
            className="txt-img"
            src={src}
            alt={`메인 텍스트 ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
