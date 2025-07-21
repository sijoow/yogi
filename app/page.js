'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainSection from '@/components/MainSection';
import Section01 from '../components/Section01';
import Section02 from '../components/Section02';
import Section03 from '@/components/Section03';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="snap-container">
      <MainSection />
      <Section01 />
      <Section02 />
      <Section03 />

    </div>
  );
}
