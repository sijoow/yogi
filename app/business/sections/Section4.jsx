'use client';

import React, { useRef, useEffect } from 'react';
import './BusinessSection_04.css';

const endorsements = [
  {
    name: 'Eli Berger, former CEO of Ledico Lift',
    quote: `“To be 100% honest, David is like a son to me. Having worked with him for over 15 years,
he has always acted in my best interest and did his utmost to navigate even the most challenging
situations. He and his professional team are trustworthy, responsive, and truly know how to get
things done. I’ve been enjoying working with him and his great team ”`,
    img: '/img/endorse/eli.png',
  },
  {
    name: 'Dr. Sobhi Basheer, CTO of Enzymofit',
    quote: `“I had the opportunity to meet David, the founder and CEO of KOISRA, and his team, through which
we successfully established the world’s largest enzyme‑based biodiesel production facility in Korea
in collaboration with a Korean partner company. This project turned into a highly successful business
case, and I am truly grateful for the chance to work with him and his team”`,
    img: '/img/endorse/sobhi.png',
  },
  {
    name: 'Eyal Levy, CEO of Cookbash',
    quote: `“Since first meeting David in 2014, we have worked together to explore new markets and build
business opportunities, sharing an enjoyable journey of overcoming various challenges along the way.
He is forward‑thinking, optimistic, and truly one of the best global business partners I have had
the pleasure of working with. I am grateful for the opportunity to collaborate with him and his
awesome team”`,
    img: '/img/endorse/eyal.png',
  },
];

export default function BusinessSection_04({ id = 'bizSec4' }) {
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
    <section id={id} ref={ref} className="BusinessSection_04">
      <h2 className="bs4-title">Partner Endorsements</h2>

      <ul className="bs4-list">
        {endorsements.map((e, i) => (
          <li key={i} className="bs4-item">
            <div className="bs4-photo">
              {/* 이미지가 없으면 배경만 사각형 유지 */}
              {e.img ? <img src={e.img} alt={e.name} /> : null}
            </div>

            <div className="bs4-text">
              <h3 className="bs4-name">{e.name}</h3>
              <p className="bs4-quote">{e.quote}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
