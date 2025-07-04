// components/MainSection.jsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import './MainSection.css';

const ALT_TEXTS = ['로','켓','을','우','주','로','보','냅','니','다'];
const TITLES = Array.from({ length: 10 }, (_, i) =>
  `https://www.boosterz.co.kr/img/content/main00_tit${String(i+1).padStart(2,'0')}.png`
);

export default function MainSection({
  className = '',
  ...restProps
}) {
  const [isOn, setIsOn] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target !== el) return;

          if (entry.isIntersecting) {
            // 화면에 보이면 on 클래스 붙이기
            setIsOn(true);
          } else {
            // 보이지 않으면 on 클래스 제거 후 리플로우 → 다음에 다시 on
            setIsOn(false);
            void el.offsetWidth;
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      {...restProps}
      ref={sectionRef}
      className={`${className} ${isOn ? 'on' : ''}`}
    >
      <div className="content">
        <div className="inner">
          <h3>
            {TITLES.map((src, idx) => (
              <span key={idx}>
                <img src={src} alt={ALT_TEXTS[idx]} />
              </span>
            ))}
          </h3>
          <p />
        </div>
      </div>
    </section>
  );
}
