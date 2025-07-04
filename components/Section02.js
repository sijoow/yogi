'use client';
import React, { useEffect, useRef } from 'react';
import './Section02.css';

export default function Section02() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // animate 클래스가 붙은 줄만 관찰
    const items = sectionRef.current.querySelectorAll('.sec02-line.animate');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
            void entry.target.offsetWidth; // 리플로우 강제
          }
        });
      },
      { threshold: 0.5 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="main03" className="sec02 snap-start" ref={sectionRef}>
      <div className="sec02-bg sec02-fullvh">
        <div className="sec02-inner">
            {/* 1st line: ALLROUND (static) */}
            <span className="sec02-line sec02-line1 static">
              <img
                src="https://www.boosterz.co.kr/img/content/main03_tit01.png"
                alt="ALLROUND"
                className="sec02-img1"
              />
            </span>
            {/* 2nd line: MKTG. (animate down) */}
            <span className="sec02-line sec02-line2 animate">
              <img
                src="https://www.boosterz.co.kr/img/content/main03_tit02.png"
                alt="MKTG."
                className="sec02-img2"
              />
            </span>
            {/* 3rd line: PARTNER + arrow (animate down + blink) */}
            <span className="sec02-line sec02-line3 animate">
              <img
                src="https://www.boosterz.co.kr/img/content/main03_tit03.png"
                alt="PARTNER"
                className="sec02-img3"
              />
              <img
                src="https://www.boosterz.co.kr/img/content/main_arr02.png"
                alt="Arr"
                className="sec02-arr"
              />
            </span>
        </div>
      </div>
    </section>
  );
}
