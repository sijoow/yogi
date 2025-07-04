// app/page.js
"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import MainSection from "../components/MainSection";
import Section01   from "../components/Section01";
import Section02   from "../components/Section02";
import Section03   from "../components/Section03";


export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      disableMutationObserver: true,
    });

    const cont     = containerRef.current;
    const secs     = cont.querySelectorAll(".snap-start");
    let   busy     = false;
    const duration = 800;

    const handleWheel = (e) => {
      if (busy || e.deltaY === 0) return;
      e.preventDefault();
      busy = true;

      const vh      = window.innerHeight;
      const scrollT = cont.scrollTop;
      const idx     = e.deltaY > 0
        ? Math.floor(scrollT / vh)
        : Math.ceil(scrollT  / vh);

      let next = idx + (e.deltaY > 0 ? 1 : -1);
      next = Math.max(0, Math.min(secs.length - 1, next));

      cont.scrollTo({
        top:      next * vh,
        behavior: "smooth",
      });

      // 스크롤 끝난 뒤에 AOS를 리프레시 시켜서 .aos-animate 붙이기
      setTimeout(() => {
        AOS.refresh();
        busy = false;
      }, duration);
    };

    cont.addEventListener("wheel", handleWheel, { passive: false });
    return () => cont.removeEventListener("wheel", handleWheel);
  }, []);

  return (
  <div ref={containerRef} className="snap-container">
    
    <MainSection
      id="main01"
      className="h-screen snap-start"
    />
    <Section01 className="h-screen snap-start" />
    <Section02 className="h-screen snap-start" />
    <Section03 className="h-screen snap-start" />

  </div>
  );
}
