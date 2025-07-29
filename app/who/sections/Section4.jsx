'use client';

import { useRef, useEffect } from 'react';
import './whoSection_04.css';

export default function Section4({ id = 'sec4' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? el.classList.add('play') : el.classList.remove('play');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="whoSection_04">
      <h2 className="ws4-heading">Market Analysis &amp; Marketing</h2>

      <div className="ws4-cards">

        <article className="ws4-card">
          <div className="ws4-avatar">
            <img src="https://yogibo.kr/yogico/step/Y_s_step_02.png" alt="Junsoo Han" />
          </div>
          <h3 className="ws4-name">Junsoo Han</h3>
          <p className="ws4-role">Analysis Manager</p>
          <p className="ws4-bio">
            Junsoo is a versatile marketing and content strategist with over 7 years of experience
            across in‑house, agency, and freelance roles. His strength lies in combining creative
            execution with data‑driven strategy, delivering real business impact in fast‑paced,
            cross‑functional environments.
          </p>
        </article>

        <article className="ws4-card">
          <div className="ws4-avatar">
            <img src="https://yogibo.kr/yogico/step/Y_s_step_01.png" alt="Ihyeon Kim" />
          </div>
          <h3 className="ws4-name">Ihyeon Kim</h3>
          <p className="ws4-role">Marketing Director</p>
          <p className="ws4-bio">
            Ihyeon Kim is a seasoned marketing and HRD professional with over 11 years of experience,
            including 8+ years at Lotte Cinema. Her unique blend of marketing, design, and team
            leadership skills makes her an ideal bridge between creative execution and strategic
            business goals.
          </p>
        </article>

        <article className="ws4-card">
          <div className="ws4-avatar">
             <img src="https://yogibo.kr/yogico/step/Y_s_step_03.png" alt="Yubin Lee" /> 
          </div>
          <h3 className="ws4-name">Yubin Lee</h3>
          <p className="ws4-role">Marketing Manager</p>
          <p className="ws4-bio">
            Yubin is a versatile content and marketing professional with 4+ years of experience in
            content planning, production, and digital marketing. Her strengths lie in trend‑driven
            execution, performance analysis, and campaign management driving engagement and measurable
            business results.
          </p>
        </article>

      </div>
    </section>
  );
}
