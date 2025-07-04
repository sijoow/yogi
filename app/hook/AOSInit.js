// src/hooks/AOSInit.js
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,                   // 한 번만 애니메이션 실행
      mirror: false,                // 위 스크롤 시 재실행 안 함
      disableMutationObserver: true // DOM 변화 자동 리프레시 비활성
    });
  }, []);

  return null;
}
