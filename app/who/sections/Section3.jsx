'use client';

import { useEffect, useRef } from 'react';
import './whoSection_03.css';

export default function Section3({ id = 'sec3' }) {
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
    <section id={id} ref={ref} className="whoSection_03">
      <h2 className="ws3-heading">Managing Team</h2>

      <div className="ws3-cards">

        {/* 1 */}
        <article className="ws3-card">
          <div className="ws3-avatar">
            {/* 이미지가 있다면 <img src="/path/jay.jpg" alt="Jaehong (Jay) Lee" /> */}
          </div>
          <h3 className="ws3-name">Jaehong (Jay) Lee</h3>
          <p className="ws3-role">Co‑Founder &amp; COO</p>
          <p className="ws3-bio">
            Jay has over a decade of expertise in materials research and product innovation.
            He spent 11 years as a researcher at KCG, specializing in advanced materials and
            industrial applications. With a strong background in Materials Engineering from
            Hongik University, he combines technical depth with operational leadership in
            building forward‑thinking businesses.
          </p>
        </article>

        {/* 2 */}
        <article className="ws3-card">
          <div className="ws3-avatar">
            {/* <img src="/path/kim.jpg" alt="Kyungsoo Kim" /> */}
          </div>
          <h3 className="ws3-name">Kyungsoo Kim</h3>
          <p className="ws3-role">CRO</p>
          <p className="ws3-bio">
            Dr. Kim is a R&amp;D leader with a Ph.D. in Chemical Engineering from Wayne State
            University and over 30 years of experience in industrial research and technology
            development. His extensive background in both academia and industry enables him
            to lead innovation in advanced materials and sustainable energy solutions.
          </p>
        </article>

        {/* 3 */}
        <article className="ws3-card">
          <div className="ws3-avatar">
            {/* <img src="/path/tim.jpg" alt="Dukhee (Tim) Hong" /> */}
          </div>
          <h3 className="ws3-name">Dukhee (Tim) Hong</h3>
          <p className="ws3-role">CPO</p>
          <p className="ws3-bio">
            Tim is a seasoned operations and finance professional with over 16 years of experience
            leading corporate support functions, including finance, HR, and administration. His
            strength lies in creating efficient, scalable support systems aligned with business
            growth, while fostering cross‑functional collaboration and organizational stability.
          </p>
        </article>

      </div>
    </section>
  );
}
