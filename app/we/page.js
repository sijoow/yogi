// app/we/page.js
'use client';

import './we.css';
import SectionIndicator from '@/components/SectionIndicator';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import BusinessSection_01 from '../business/sections/Section1'
import BusinessSection_02 from '../business/sections/Section2'

// import Section5 from '../brand/sections/Section1'
import Section6 from '../brand/sections/Section2'
import Section7 from '../brand/sections/Section3'




const sectionIds = ['sec1', 'sec2', 'sec3','sec4','sec6','sec7','sec8'];

export default function WePage() {
  return (
    <div className="relative">
      {/* 오른쪽 스크롤 인디케이터 */}
      <SectionIndicator sectionIds={sectionIds} />

      {/* 실제 섹션들 */}
      <Section1 id="sec1" />
      <Section2 id="sec4" />
      <Section3 id="sec5" />
      <Section4 id="sec6" />
      {/* <Section5 id="sec5" /> */}
      <Section6 id="sec7" />
      <Section7 id="sec8" />
      <BusinessSection_01 id="sec2"/>
      <BusinessSection_02 id="sec3"/>


    </div>
  );
}
