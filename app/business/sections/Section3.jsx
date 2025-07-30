'use client';

import React, { useRef, useEffect } from 'react';
import './BusinessSection_03.css';

const partners = [
  // 이미지가 있으면 src에 넣고, 없으면 텍스트만 표기
  { name: 'LOTTE', src: '/img/partners/lotte.png' },
  { name: 'Panasonic', src: '/img/partners/panasonic.png' },
  { name: 'DHL', src: '/img/partners/dhl.png' },
  { name: 'KLM', src: '/img/partners/klm.png' },
  { name: 'LEDICO', src: '/img/partners/ledico.png' },
  { name: 'Guame', src: '/img/partners/guame.png' },
  { name: 'HYUNDAI', src: '/img/partners/hyundai.png' },
  { name: 'KIA', src: '/img/partners/kia.png' },
  { name: 'NISSAN', src: '/img/partners/nissan.png' },
  { name: 'TOYOTA', src: '/img/partners/toyota.png' },
  { name: 'BOSCH', src: '/img/partners/bosch.png' },
  { name: 'DOOSAN', src: '/img/partners/doosan.png' },
  { name: 'H&M', src: '/img/partners/hm.png' },
  { name: 'HYUNDAI (Dept.)', src: '/img/partners/hyundai_dept.png' },
  { name: 'SHINSEGAE', src: '/img/partners/shinsegae.png' },
  { name: 'L’ORÉAL', src: '/img/partners/loreal.png' },
  { name: 'MARS WRIGLEY', src: '/img/partners/mars.png' },
  { name: 'KOTRA', src: '/img/partners/kotra.png' },
  { name: 'MOEF', src: '/img/partners/moef.png' },
  { name: 'Arugot', src: '/img/partners/arugot.png' },
  { name: 'Zenlife Wellness', src: '/img/partners/zenlife.png' },
  { name: 'THE CELL LAB', src: '/img/partners/celllab.png' },
  { name: 'VEGAN SUPER', src: '/img/partners/vegansuper.png' },
  { name: 'MUZIGAE MANSION', src: '/img/partners/muzigae.png' },
];

export default function BusinessSection_03({ id = 'bizSec3' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        e.isIntersecting ? el.classList.add('play') : el.classList.remove('play');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="BusinessSection_03">
      <h2 className="bs3-title">PARTNERS</h2>
      <p className="bs3-sub">
        Our clients are called as partners, not customers. Because their success is our success.
      </p>

      <div className="bs3-grid">
        {partners.map((p, i) => (
          <div key={i} className="bs3-box">
            {p.src ? (
              <img src={p.src} alt={p.name} />
            ) : (
              <span>{p.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
