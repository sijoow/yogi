'use client';
import React, { useEffect, useRef } from 'react';
import './Section01.css';

export default function Section01() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lines = sectionRef.current.querySelectorAll('.line');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting) {
            // 진입 시 visible 클래스 붙이기 (애니메이션 실행)
            el.classList.add('visible');
          } else {
            // 이탈 시 visible 클래스 제거 (다음 진입 때 다시 실행)
            el.classList.remove('visible');
            // 리플로우 강제: remove → reflow → add
            // 이렇게 하면 same-class 재추가 시에도 애니메이션이 다시 동작합니다.
            void el.offsetWidth;
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 50% 보일 때 트리거
      }
    );

    lines.forEach(line => observer.observe(line));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="main02" className="sec01 snap-start" ref={sectionRef}>
      <div className="bg-black fullvh">
        <div className="inner-tit">
            {/* 첫 번째 줄 */}
            <span className="line line1">
              <img
                src="https://www.boosterz.co.kr/img/content/main02_tit01.png"
                alt="NO" className="img_section1"
              />
              <img
                src="https://www.boosterz.co.kr/img/content/main02_tit02.png"
                alt="SALES" className="img_section2"
              />
            </span>

            {/* 두 번째 줄 */}
            <span className="line line2">
              <img
                src="https://www.boosterz.co.kr/img/content/main02_tit03.png"
                alt="NO" className="img_section3"
              />
             
              <img
                src="https://www.boosterz.co.kr/img/content/main02_tit04.png"
                alt="GAIN" className="img_section4" 
              />
                <img
                src="https://www.boosterz.co.kr/img/content/main_arr01.png"
                alt="Arr" className="arr" 
              />
            </span>
        </div>
      </div>
    </section>
  );
}
