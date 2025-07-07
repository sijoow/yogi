// section1.js
import React, { useEffect, useRef, useState } from 'react';
import './section1.css';

export default function Section1() {
  const ref = useRef(null);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOn(true);
        } else {
          setIsOn(false);
          void el.offsetWidth; // reflow to retrigger
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="section1"
      ref={ref}
      className={isOn ? 'on' : ''}
    >
      <img
        className="section-text"
        src="https://yogibo.openhost.cafe24.com/yogico/img/section/text_test.png"
        alt="섹션 텍스트"
      />
    </section>
  );
}
