'use client';

import React, { useRef, useEffect } from 'react';
import './BusinessSection_04.css';

// 각 파트너의 데이터를 여기에 정의합니다.
const partners = [
  {
    name: 'Gilad Kroner',
    avatar: 'https://yogibo.openhost.cafe24.com/yogico/img/partners/Gilad Kroner.png',
    experiences: [
      { period: '2024 – Present', role: 'Founder and CEO of Orchestra Ra’anana Israel' },
      { period: '2020 – 2024',    role: 'CEO in Naterial, Israel · VP International Operations in Laline Global' },
      { period: '2006 – 2017',    role: 'CEO in H&M Israel · VP Marketing in Toyota Israel' },
      { period: '1993 – 2006',    role: 'Marketing Director in Wrigley Mars Europe, Middle East, Asia (30 countries)' }
    ],
    education: [
      'Erasmus University, Rotterdam School of Management MBA',
      'The Hebrew University of Jerusalem B.A. Business and Economics'
    ]
  },
  {
    name: 'Nimrod Moyal',
    avatar: 'https://yogibo.openhost.cafe24.com/yogico/img/partners/Nimrod Moyal.png',
    experiences: [
      { period: '2024 – Present', role: 'Global Partner of Orchestra · Global Project Director in NM REAL Intelligence (Partnership With Dynata Group) Hague, Netherlands' },
      { period: '1994 – 2024',    role: 'Managing Director in ADK INSIGHTS Hoofddorp, Netherlands' }
    ],
    education: [
      'Erasmus University, Rotterdam School of Management MBA'
    ]
  },
  {
    name: 'Ran Landau',
    avatar: 'https://yogibo.openhost.cafe24.com/yogico/img/partners/Ran Landau.png',
    experiences: [
      { period: '2025 – Present', role: 'Global Partner of Orchestra' },
      { period: '2023 – Present', role: 'Global Sales And Business Development Director In Mommy Care International Yavne Israel' },
      { period: '2013 – 2020',    role: 'Founder And Managing Partner Of Bura International Trade Ramat HaSharon Israel' }
    ],
    education: [
      'Tel Aviv University MBA',
      'Tel Aviv University B.A. Economics & Management'
    ]
  }
];

export default function BusinessSection_04({ id = 'bizSec4' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting
          ? el.classList.add('play')
          : el.classList.remove('play'),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="BusinessSection_04">
      <h2 className="bs4-title">STRATEGIC PARTNERSHIP</h2>

      <div className="bs4-top">
        <div className="bs4-logos">
          <img
            className="bs4-logo yogi"
            src="https://yogibo.kr/yogico/img/icon/symbol.png"
            alt="Yogi"
          />
          <span className="bs4-multiply">×</span>
          <img
            className="bs4-logo"
            src="https://yogibo.kr/yogico/img/icon/orchesta.png"
            alt="Orchestra"
          />
        </div>
        <p className="bs4-desc">
          Yogi Corporation is pursuing international market expansion through a strategic partnership with
          Orchestra. Led by Gilad Kroner, Orchestra is a business development and consulting firm comprised
          of seasoned experts who have spearheaded marketing initiatives for leading global brands such as
          H&M, Mars‐Wrigley, Toyota, De’Longhi, and Pepsi etc.
        </p>
      </div>

      <div className="bs4-cards">
        {partners.map((p, i) => (
          <div className="bs4-card_profile" key={i}>
            <div className="bs4-card_avatar">
              <img src={p.avatar} alt={p.name} />
            </div>
            <h3 className="bs4-card_name">{p.name}</h3>
            <div className="bs4-card_exps">
              {p.experiences.map((exp, j) => (
                <p key={j}>
                  <span className="bs4-card_period">{exp.period}</span> {exp.role}
                </p>
              ))}
            </div>
            <div className="bs4-card_edu">
              <strong>Education</strong>
              {p.education.map((edu, k) => (
                <p key={k}>{edu}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
