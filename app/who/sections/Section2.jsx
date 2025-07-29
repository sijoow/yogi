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
      {/* 이 div만 애니메이트 */}
      <div className="whoSection_02__inner">
        {/* ───────── 로고 박스 ───────── */}
        <div className="w2-logo-box">
          <img
            src="https://yogibo.kr/yogico/img/icon/Signature03.png"
            alt="YOGI CORPORATION"
          />
        </div>

        {/* ───────── 회사 소개 텍스트 ───────── */}
        <div className="w2-intro">
          Founded in 2016, Yogi Corporation is headquartered in Gangnam, Seoul, South Korea.
          Yogi Corporation is powered by a team of seasoned professionals with diverse industry
          expertise and extensive international experience, enabling us to deliver high-impact
          strategic consulting and business development solutions.</div>

        <div className="w2-desc">
          We operate our own manufacturing facility and logistics center, ensuring consistent
          product quality, streamlined operations, and agile supply chain management. In addition,
          as a fully integrated retail brand operator, we maintain a strong omnichannel presence
          through a nationwide network of offline stores and dynamic e-commerce platforms. In
          essence, Yogi Corporation operates across two core business pillars:
          <br />
          <br />
          1. Business Consulting and Development
          <br />
          2. Brand Management Business
        </div>

        {/* ───────── CEO 이미지 ───────── */}
        <div className="w2-ceo-img">
          <img src="https://yogibo.kr/yogico/step/Y_step_00.jpg" alt="CEO" />
        </div>

        {/* ───────── CEO 설명 ───────── */}
        <div className="w2-ceo-desc">
          <strong>Daejin (David) Park, Founder and CEO</strong>
          <br />
          <br />
          After gaining 15 years of expertise across academia and industry in Israel, including his
          working at KOTRA, David returned to South Korea and launched KOISRA, a consulting firm
          specializing in facilitating cross-border business development between Korea, Israel, and
          other global markets. He later co-founded KOISRA Seed Partners, a startup accelerator
          that invests in and mentors early-stage startups led by serial entrepreneurs. In
          addition to his entrepreneurial activities, David authored the Korean-language book
          "Inside Business in Israel." Expanding his career into the retail sector, he established
          infrastructure for import, manufacturing, distribution, and export, building a portfolio
          of lifestyle brands. David currently serves as CEO of Yogi Corporation, overseeing
          multiple businesses that reflect his broad experience in international business and
          brand development.
        </div>
      </div>
    </section>
  );
}
