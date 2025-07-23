// app/we/page.js
'use client';

import './we.css';
import SectionIndicator from '@/components/SectionIndicator';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';


const sectionIds = ['sec1', 'sec2', 'sec3','sec4'];

export default function WePage() {
  return (
    <div className="relative">
      {/* 오른쪽 스크롤 인디케이터 */}
      <SectionIndicator sectionIds={sectionIds} />

      {/* 실제 섹션들 */}
      <Section1 id="sec1" />
      <Section2 id="sec2" />
      <Section3 id="sec3" />
      <Section4 id="sec4" />

    </div>
  );
}
