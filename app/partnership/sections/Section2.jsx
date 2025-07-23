'use client';

import { useRef, useEffect } from 'react';
import './PartnerSection_02.css';

export default function PartnerSection_02({ id = 'partnerSec02' }) {
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
    <section id={id} ref={ref} className="ps02">
      {/* 헤더 */}
      <h2 className="ps02-title">Strategic Partnership</h2>
      <div className="ps02-logos">
        <img src="/imgs/yogi_logo_black.svg" alt="Yogi" className="ps02-logo yogi" />
        <span className="ps02-x">×</span>
        <img src="/imgs/orchesta_logo.svg" alt="Orchesta" className="ps02-logo orchesta" />
      </div>

      {/* 카드 두 개 */}
      <div className="ps02-cards">
        {/* Nimrod */}
        <article className="ps02-card">
          <div className="ps02-photo">
            <img src="/imgs/nimrod.jpg" alt="Nimrod Moyal" />
          </div>
          <div className="ps02-info">
            <h3 className="ps02-name">Nimrod Moyal</h3>

            <ul className="ps02-history">
              <li>
                <span>2024 – Present</span><br/>
                Global Partner of <strong>Orchesta</strong>
              </li>
              <li>
                Global Project Director in <strong>NM REAL Intelligence</strong>,<br/>
                (Partnership with <strong>Dynata Group</strong>) Hague, Netherlands
              </li>
              <li>
                <span>1994 – 2024</span><br/>
                Managing Director in <strong>ADK INSIGHTS</strong> Hoofddorp, Netherlands
              </li>
              <li>
                <span>Education</span><br/>
                Erasmus University, Rotterdam School of Management MBA
              </li>
            </ul>
          </div>
        </article>

        {/* Ran */}
        <article className="ps02-card">
          <div className="ps02-photo">
            <img src="/imgs/ran.jpg" alt="Ran Landau" />
          </div>
          <div className="ps02-info">
            <h3 className="ps02-name">Ran Landau</h3>

            <ul className="ps02-history">
              <li>
                <span>2025 – Present</span><br/>
                Global Partner of <strong>Orchesta</strong>
              </li>
              <li>
                <span>2023 – Present</span><br/>
                Global Sales and Business Development Director in<br/>
                <strong>Mommy Care International</strong>, Yavne Israel
              </li>
              <li>
                <span>2013 – 2020</span><br/>
                Founder and Managing Partner of <strong>Bura International Trade</strong>,<br/>
                Ramat HaSharon Israel
              </li>
              <li>
                <span>Education</span><br/>
                Tel Aviv University MBA<br/>
                Tel Aviv University B.A. Economics &amp; Management
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
