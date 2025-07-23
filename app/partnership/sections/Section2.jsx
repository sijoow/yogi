'use client';

import React, { useRef, useEffect } from 'react';
import './PartnerSection_02.css';

const IMGS = [
  '/imgs/sample1.jpg','/imgs/sample2.jpg','/imgs/sample3.jpg',
  '/imgs/sample4.jpg','/imgs/sample5.jpg','/imgs/sample6.jpg',
  '/imgs/sample7.jpg','/imgs/sample8.jpg','/imgs/sample9.jpg',
]; // 실제 경로로 교체

export default function PartnerSection_02({ id = 'partnerSec2' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting ? el.classList.add('play') : el.classList.remove('play'),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="PartnerSection_02">
      <div className="ps2-wrap">
        {/* 좌측 텍스트 */}
        <div className="ps2-text">
          <img src="https://yogibo.kr/web/img/icon/new2/main_logo_off.png" alt="yogibo" className="ps2-logo" />
          <span className="ps2-present">presented by Yogi Corporation</span>

          <p className="ps2-p">
            Yogibo is a lifestyle brand offering bean bags, living accessories, body pillows,
            cushions, and stuffed animals featuring various character designs.
          </p>
          <p className="ps2-p">
            What sets Yogibo apart is its patented technology that allows a single product to
            transform into multiple forms.
          </p>
          <p className="ps2-p">
            Founded in 2009 in the USA, Yogibo became the world’s No.1 bean bag sofa brand within
            just seven years. Today, Yogibo has over 160 stores worldwide, including the USA,
            Canada, Japan, South Korea, Taiwan, Thailand, Singapore, and various countries across Europe.
          </p>

          <a href="https://www.yogibo.kr" target="_blank" rel="noreferrer" className="ps2-link">
            www.yogibo.kr
          </a>
        </div>

        {/* 우측 이미지 그리드 */}
        <div className="ps2-grid">
          {IMGS.map((src, i) => (
            <div key={i} className="ps2-card">
              <img src={src} alt={`yogibo-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
