'use client';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './BrandSection_02.css';

const IMGS = [
  'https://yogibo.kr/web/product/big/202505/b7f68d4caec1c86288b4c60f571db81c.png',
  'https://yogibo.kr/web/product/big/202502/61b2d64c466bd82135bba11c08afac36.png',
  'https://yogibo.kr/web/product/big/202505/32af69df1404b428ae691c5c38e7d106.png',
  'https://yogibo.kr/web/product/big/202412/1cf4d954f314ad51c5b04b09394bad6b.png',
  'https://yogibo.kr/web/product/big/202502/68a4304d3420f20611c3114d5eba1255.png',
  'https://yogibo.kr/web/product/big/202502/60a0fd8e620b53386dd440f4f635e0c1.png',
  'https://yogibo.kr/web/product/big/202502/52d448cd509dec86ade7d89744677acb.png',
  'https://yogibo.kr/web/product/big/202502/be77824a51fcf9fda40b49e45450d09e.png',


];

export default function BrandSection_02({ id = 'BrandSec2' }) {
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
    <section id={id} ref={ref} className="BrandSection_02">
      <div className="ps2-wrap">
        {/* 1) 텍스트 블록 */}
        <div className="ps2-text">
          <img
            src="https://yogibo.kr/web/img/icon/new2/main_logo_off.png"
            alt="yogibo"
            className="ps2-logo"
          />
          <span className="ps2-present">Presented by Yogi Corporation</span>
          <p className="ps2-p">
            <strong>Yogibo is</strong> a lifestyle brand offering bean bags, living Accessories,<br className="br"/>
            body pillows, cushions, and stuffed animals featuring various character designs.
            What sets Yogibo apart is its patented technology that allows a single product to transform into multiple forms. 
            Founded in 2009 in the USA, Yogibo Became<br className="br"/> the world’s No.1 bean bag sofa brand within just seven years. Today, Yogibo has over 160
            stores worldwide, including the USA, Canada, Japan, South Korea, Taiwan, Thailand, Singapore, and various countries across Europe. 
          </p>
        </div>

        {/* 3) Swiper 슬라이더 */}
        <div className="ps2-swiper">
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
                <div className="ps2-card">
                  <img src={src} alt={`yogibo-${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 2) 버튼: 슬라이더 바로 위로 */}
        <a
          href="https://www.yogibo.kr"
          target="_blank"
          rel="noreferrer"
          className="ps2-see-more"
        >
          VISIT SITE
        </a>       

      </div>
    </section>
  );
}
