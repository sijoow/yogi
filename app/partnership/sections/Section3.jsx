'use client';

import React, { useRef, useEffect } from 'react';
import './PartnerSection_03.css';

const IMGS = [
  '/imgs/sf_01.jpg','/imgs/sf_02.jpg','/imgs/sf_03.jpg',
  '/imgs/sf_04.jpg','/imgs/sf_05.jpg','/imgs/sf_06.jpg',
  '/imgs/sf_07.jpg','/imgs/sf_08.jpg','/imgs/sf_09.jpg',
]; // 실제 경로로 교체

export default function PartnerSection_03({ id = 'partnerSec3' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('play');
        else el.classList.remove('play');   // 다시 올라갈 때 숨기지 않으려면 제거
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="PartnerSection_03">
      <div className="ps3-wrap">
        {/* 왼쪽 텍스트 */}
        <div className="ps3-text">
          <img src="//ecimg.cafe24img.com/pg978b90438673018/sallyfeel/web/img/icon/gnb_logo24.png" alt="SallyFeel" className="ps3-logo" />
          <span className="ps3-present">presented by Yogi Corporation</span>

          <p className="ps3-p">
            SallyFeel is the first "Well‑Living" brand, inspired by the belief that good things happen—even by chance.
            We aim to bring moments of delightful serendipity into everyday life.
          </p>
          <p className="ps3-p">
            By combining wellness and living, SallyFeel goes beyond simply promoting a healthy lifestyle, proposing a
            holistic Well‑Living way of life that enhances quality of life and encourages harmony in daily routines.
          </p>
          <p className="ps3-p">
            SallyFeel embraces a positive worldview where abundance flows naturally and good things find their way into
            our customers’ lives.
          </p>

          <a href="https://www.sallyfeel.com" className="ps3-link" target="_blank" rel="noreferrer">
            www.sallyfeel.com
          </a>
        </div>

        {/* 오른쪽 이미지 그리드 */}
        <div className="ps3-grid">
          {IMGS.map((src, i) => (
            <div key={i} className="ps3-card">
              <img src={src} alt={`sally-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
