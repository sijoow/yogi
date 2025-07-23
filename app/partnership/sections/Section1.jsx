'use client';

import { useRef, useEffect } from 'react';
import './PartnerSection_01.css';

export default function PartnerSection_01({ id = 'partnerSec01' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? el.classList.add('play') : el.classList.remove('play');
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="ps01">
      {/* 1. 헤더 라인 */}
      <h2 className="ps01-title">Strategic Partnership</h2>

      {/* 2. 상단 소개 블럭 */}
      <div className="ps01-top">
        <div className="ps01-logos">
          <img src="https://yogibo.kr/yogico/img/icon/symbol.png" alt="Yogi" className="ps01-logo yogi" />
          <span className="ps01-x">×</span>
          <img src="/imgs/orchesta_logo.svg" alt="Orchesta" className="ps01-logo orchesta" />
        </div>

        <p className="ps01-intro">
          <strong>Yogi Corporation</strong> is pursuing international market expansion through a
          strategic partnership with <strong>Orchesta</strong>. Led by <strong>Gilad Kroner</strong>,
          Orchesta is a business development and consulting firm comprised of seasoned experts who
          have spearheaded marketing initiatives for leading global brands such as H&amp;M,
          Mars‑Wrigley, Toyota, De’Longhi, and Pepsi and etc.
        </p>
      </div>

      {/* 3. 인물 카드 */}
      <div className="ps01-card">
        <div className="ps01-photo">
          <img src="/imgs/gilad.jpg" alt="Gilad Kroner" />
        </div>

        <div className="ps01-card-body">
          <h3 className="ps01-name">Gilad Kroner</h3>

          <div className="ps01-columns">
            <ul>
              <li><span>2024 – Present</span><br/>Founder and CEO of <strong>Orchesta</strong> Ra’anana, Israel</li>
              <li><span>2020 – 2024</span><br/>CEO in <strong>Material</strong>, Israel<br/>VP International Operations in <strong>Laline Global</strong></li>
              <li><span>2006 – 2017</span><br/>CEO in <strong>H&amp;M</strong> Israel<br/>VP Marketing in <strong>Toyota</strong> Israel</li>
            </ul>

            <ul>
              <li><span>1993 – 2006</span><br/>Marketing Director in <strong>Wrigley Mars</strong><br/>Europe, Middle East, Asia (30 countries)</li>
              <li><span>Education</span><br/>Erasmus University, Rotterdam School of Management MBA<br/><br/>The Hebrew University of Jerusalem. B.A.<br/>Business and Economics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
