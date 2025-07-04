// src/hooks/useSmoothScrollTrigger.js
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScrollTrigger(sectionSelector = '.snap-start') {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const sections  = container.querySelectorAll(sectionSelector);

    // 스크롤 컨테이너 스타일 보장
    container.style.overflowY = 'auto';
    container.style.height    = '100vh';

    ScrollTrigger.create({
      trigger: container,
      start:    'top top',
      end:      () => `+=${container.scrollHeight - window.innerHeight}`,
      scrub:    1.2,                       // 스크럽 지연 시간 (초): 높일수록 부드러워짐
      snap:     1 / (sections.length - 1),// 섹션 개수만큼 균등 분할
      invalidateOnRefresh: true,
    });

    return () => ScrollTrigger.kill();
  }, [sectionSelector]);

  return containerRef;
}
