// Section02.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './whoSection_02.css';

export default function Section02({ id = 'sec2' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          el.classList.add('play');
          observer.unobserve(el);
        }
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="whoSection_02">
      <div className="whoSection_02__inner">
        {/* 1. 로고 */}
        <div className="w2-logo-box">
          <img src="https://yogibo.kr/yogico/img/icon/Signature03.png" alt="YOGI CORPORATION" />
        </div>

        {/* 2. CEO 이미지 */}
        <div className="w2-ceo-img">
          <img src="https://yogibo.kr/yogico/step/Representative_bg2.png" alt="CEO" />
        </div>

        {/* 3. 첫 번째 소개 */}
        <div className="w2-intro1">
          Founded in 2016, Yogi Corporation is headquartered in Gangnam, Seoul, South Korea.<br className="br"/> Yogi Corporation is powered by a team of seasoned professionals with diverse industry expertise and extensive International<br className="br"/>  experience, enabling us to deliver high-impact strategic consulting and business development Solutions.
        </div>

        {/* 4. 두 번째 소개 */}
        <div className="w2-intro2">
         We operate our own manufacturing facility and logistics center, ensuring consistent product quality, streamlined Operations,<br className="br"/> and agile supply chain management.In addition, as a fully integrated retail brand operator, we maintain a strong Omnichannel <br className="br"/> presence through a nationwide network of offline stores and dynamic e-commerce platforms. In essence, Yogi Corporation<br className="br"/> Operates across two core business pillars:
        </div>

        {/* 5. 사업 분야 리스트 */}
        <ul className="w2-pillar-list">
          <li>Business Consulting and Development</li>
          <li>Brand Management Business</li>
        </ul>

        {/* 6. CEO 설명 */}
        <div className="w2-ceo-desc">
          <strong>Daejin (David) Park, Founder and CEO</strong>
          <p>
          After gaining 15 years of expertise across academia and industry in Israel, including his working at KOTRA, David returned to South Korea and launched KOISRA, a consulting firm specializing in facilitating cross-border business development between Korea, Israel, and other global markets. He later co-founded KOISRA Seed Partners, a startup accelerator that invests in and mentors early-stage startups led by serial entrepreneurs. In addition to his entrepreneurial activities, David authored the Korean-language book "Inside Business in Israel." Expanding his career into the retail sector, he established infrastructure for import, manufacturing, distribution, and export, for building a portfolio of lifestyle brands. David currently serves as CEO of Yogi Corporation, overseeing multiple businesses that reflect his broad experience in international business and brand development.
          </p>
        </div>
      </div>
    </section>

  );
}
