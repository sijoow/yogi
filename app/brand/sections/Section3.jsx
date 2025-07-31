'use client';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './BrandSection_03.css';

const IMGS = [
  'https://yogibo.openhost.cafe24.com/yogico/img/banner/img_01.png',
  'https://yogibo.openhost.cafe24.com/yogico/img/banner/img_01.png',
  'https://yogibo.openhost.cafe24.com/yogico/img/banner/img_01.png',
  'https://yogibo.openhost.cafe24.com/yogico/img/banner/img_01.png',
  'https://yogibo.openhost.cafe24.com/yogico/img/banner/img_01.png',

];

export default function BrandSection_03({ id = 'BrandSec2' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting ? el.classList.add('play') : el.classList.remove('play'),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="BrandSection_03">
      <div className="ps3-wrap">
        {/* 1) 텍스트 블록 */}
        <div className="ps3-text">
          <img
            src="//ecimg.cafe24img.com/pg978b90438673018/sallyfeel/web/img/icon/gnb_logo24.png"
            alt="yogibo"
            className="ps3-logo"
          />
          <span className="ps3-present">Presented by Yogi Corporation</span>
          <p className="ps3-p">
                SallyFeel is the first "Well-Living" brand, inspired by the belief that good things happen—even by chance. We aim to bring moments of delightful serendipity into everyday life. 
                By combining wellness and living, SallyFeel goes beyond simply promoting a healthy lifestyly, proposing a holistic Well-Living way of life that enhances quality of life and encourages harmony in daily routines.
                SallyFeel embraces a positive worldview where abundance flows naturally and good things find their way into our customers’ lives.            
          </p>
        </div>

        {/* 3) Swiper 슬라이더 */}
        <div className="ps3-swiper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            loop
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0:   { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 4 },
            }}
          >
            {IMGS.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="ps3-card">
                  <img src={src} alt={`yogibo-${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 2) 버튼: 슬라이더 바로 위로 */}
        <a
          href="https://www.sallyfeel.com"
          target="_blank"
          rel="noreferrer"
          className="ps3-see-more"
        >
          VISIT SITE
        </a>       

      </div>
    </section>
  );
}
