// components/sections/Section1.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import './NewsSection_02.css';

export default function Section1({ id = 'news' }) {
  const newsItems = [
    {
      id: 1,
      imgSrc: 'https://yogibo.openhost.cafe24.com/yogico/img/banner/HDC%EC%98%81%EC%B0%BD.png',
      title: 'Yogibo Participates as a Sponsor at the 2024 Seoul Beauty Travel Week',
      excerpt:
        'HDC Youngchang and Yogibo held a joint Family Month event from May 10 to 18 at Starfield Hanam. The venue featured Kurzweil digital piano experience zones and Yogibo relaxation areas. On the opening day, live performances included a K-pop band and a jazz pianist-led band.',
      link: 'https://www.mk.co.kr/news/business/11310368',
    },
    {
      id: 2,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/봄꽃.jpg',
      title: 'Discover the Unique Beauty of Seoul at 2024 Beauty Travel Week',
      excerpt:
        'Yogibo, the global beanbag brand, sponsored the 2025 Yeouido Spring Flower Festival in Yeongdeungpo held from April 4 to 8. As an official supporter, Yogibo offered special programs and branded relaxation zones during the festival.',
      link: 'https://www.sisunnews.co.kr/news/articleView.html?idxno=222683',
    },
    {
      id: 3,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/뷰티트래블.jpg',
      title: 'Yogibo Participates in the 2024 Seoul Beauty Travel Week as a Sponsor.',
      excerpt:
        'Yogibo is sponsoring the 2024 Seoul Beauty Travel Week, partnering with Haru Meditation to debut a signature beanbag wellness program. Held at Seoul Forest, the event features yoga, music, singing bowls, dance meditations, and exclusive giveaways.',
      link: 'http://www.kdpress.co.kr/news/articleView.html?idxno=132087',
    },


    
  ];

  return (
    <section id={id} className="NewsSection_02">
      <div className="NewsSection_02_header">
        <h1 className="NewsSection_02_title"></h1>
      </div>
      <div className="NewsSection_02_grid">
        {newsItems.map(item => (
          <div key={item.id} className="NewsSection_02_card">
            <div className="NewsSection_02_image">
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <h2 className="NewsSection_02_cardTitle">{item.title}</h2>
            <p className="NewsSection_02_cardExcerpt">{item.excerpt}</p>
            <Link href={item.link} className="NewsSection_02_button">
            Read full article
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
