// app/we/page.js
'use client';

import '../we/we.css';
import SectionIndicator from '@/components/SectionIndicator';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';


const sectionIds = ['sec1', 'sec2'];

export default function WePage() {
  return (
    <div className="relative">
      {/* 오른쪽 스크롤 인디케이터 */}
      <SectionIndicator sectionIds={sectionIds} />

      {/* 실제 섹션들 */}
      <Section1 id="sec1" />
      <Section2 id="sec2" />
    </div>
  );
}
