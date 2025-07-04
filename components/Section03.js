'use client';
import React, { useEffect, useRef } from 'react';
import './Section03.css';

export default function Section03() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lines = sectionRef.current.querySelectorAll('.sec03-line');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('visible');
          } else {
            el.classList.remove('visible');
            void el.offsetWidth; // 리플로우 강제
          }
        });
      },
      { threshold: 0.5 }
    );
    lines.forEach((line) => observer.observe(line));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="main04" className="sec03 snap-start" ref={sectionRef}>
      <div className="sec03-bg sec03-fullvh">
        <div className="sec03-inner">
          <h3 className="sec03-tit">
            {/* 1st line: PARTNER */}
            <span className="sec03-line sec03-line1">
              <img
                src="https://www.boosterz.co.kr/img/content/main04_tit01.png"
                alt="PARTNER"
                className="sec03-img1"
              />
            </span>
            {/* 2nd line: SHIP + arrow */}
            <span className="sec03-line sec03-line2">
              <img
                src="https://www.boosterz.co.kr/img/content/main04_tit02.png"
                alt="SHIP"
                className="sec03-img2"
              />
              <img
                src="https://www.boosterz.co.kr/img/content/main_arr01.png"
                alt="Arr"
                className="sec03-arr"
              />
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
