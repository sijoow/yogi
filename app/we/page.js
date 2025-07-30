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
import BusinessSection_03 from '../business/sections/Section3'
import BusinessSection_04 from '../business/sections/Section4'

// import Section5 from '../brand/sections/Section1'

import Brand0 from '../brand/sections/Section0'
import Brand1 from '../brand/sections/Section1'
import Brand2 from '../brand/sections/Section4'

import Section6 from '../brand/sections/Section2'
import Section7 from '../brand/sections/Section3'




const sectionIds = ['sec1', 'sec2', 'sec3','sec4','sec6','sec7','sec8','sec9','sec10'];

export default function WePage() {
  return (
    <div className="relative">
      {/* 오른쪽 스크롤 인디케이터 */}
      <SectionIndicator sectionIds={sectionIds} />

      {/* 실제 섹션들 */}
      <Section1 id="sec1" />
      <BusinessSection_01 id="sec7"/>
      <BusinessSection_02 id="sec8"/>
      <BusinessSection_03 id="sec9"/>
      <BusinessSection_04 id="sec10"/>
      {/* <Section2 id="sec2" />
      <Section3 id="sec3" />
      <Section4 id="sec4" /> */}
      {/* <Section5 id="sec5" /> */}
        <Brand0 id="sec5" />
        <Brand1 id="sec5" />
        <Section6 id="sec5" />
        <Section7 id="sec6" />
        <Brand2 id="sec5" /> 
    </div>
  );
}
