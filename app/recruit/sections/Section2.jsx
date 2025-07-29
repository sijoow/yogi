'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './RecrutSection_02.css';

export default function Section2({ id = 'sec2' }) {
  const sectionRef = useRef(null);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section id={id} ref={sectionRef} className="careers_section">
      {/* 탭 네비게이션 */}
      <div className="uitab">
        <ul>
          <li
            className={activeTab === 'tab1' ? 'active' : ''}
            onClick={() => setActiveTab('tab1')}
          >
            회사 소개
          </li>
          <li
            className={activeTab === 'tab2' ? 'active' : ''}
            onClick={() => setActiveTab('tab2')}
          >
            채용 정보
          </li>
        </ul>
      </div>
      <div id="tab1" className={`tabcontent ${activeTab === 'tab1' ? 'active' : ''}`}>
        <div className="careers_wrapper">
          <div className="section_01_inner" style={{ padding: 0 }}>
            <div className="careers_search">
              <div className="careers_search_inner">
                <div className="careers_search_title">인재상</div>

                {[
                  ['목적적 사고', '반복의 일상에서 벗어나기 위해 분명한 목적을 가지고 최선을 다하는 분'],
                  ['풍부한 상상력', '멋진 라이프스타일을 만들기 위해 다양한 사고와 시각의 상상을 현실로 이뤄내고 싶은 분'],
                  ['타협없는 정직', '자신과 동료, 회사를 속이지 않고 정직을 최우선으로 하는 분'],
                  ['행복의 가치', '신선한 행복의 가치를 만들고 선물하고 싶은 분'],
                  ['새로운 도전', '도전을 두려워하지 않고 실행에 옮기는 분'],
                  ['Work is Play', '일을 놀이로 생각하고 그 과정 자체를 즐기고 싶은 분'],
                  ['함께 성장', '동료애를 바탕으로 함께 일하며 시너지를 내고 싶은 분'],
                ].map(([title, desc]) => (
                  <div className="careers_search_sub" key={title}>
                    <dl>
                      <dt>{title}</dt>
                      <dd>{desc}</dd>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="middle_visual">
          <img
            src="https://yogibo.kr/yogico/img/careers/middle_banner.jpg"
            alt="Middle Banner"
            style={{ width: '100%' }}
          />
        </div>
        <div className="section_01_inner">
          <div className="welfare">
            <div className="welfare_wrapper">
              {[
                ['근무시간', '본사(유연근무제 적용)', '출근 09:00~10:00 | 퇴근 18:00~19:00', '물류센터 출근 08:30 | 퇴근 17:30'],
                ['자유로운 휴가 사용', '열심히 일한만큼 Refresh도 중요'],
                ['조직 문화', '요동, 요다챌, 우리또, 승진식, 환송식 등 자체 문화 운영'],
                ['수습 종료 Gift', '3개월 수습 종료 후 힐링템 지급'],
                ['인재 추천 보상', '추천 채용 시 보상 제공'],
                ['자율 복장', '반바지, 자유 복장 허용'],
                ['개성있는 헤어', '레인보우 헤어 등 스타일 존중'],
                ['장비 지원', '듀얼 모니터 등 업무 장비 제공'],
                ['실비 지원', '개인차량 유류비·도로비 지원'],
                ['팀별 운영비', '회식비·다과 지원'],
                ['카페테리아', '무제한 커피·차 제공'],
                ['경조사·명절', '경조금·선물 지급'],
                ['석식 지원', '저녁 식사 지원'],
                ['여가 활동', '리조트·액티비티 할인'],
                ['육아 제도', '출산 전후 휴가·휴직 지원'],
                ['소득세 감면', '만 34세 이하 5년간 90% 감면'],
                ['중식 지원', '점심 식사 지원'],
                ['장기 근속', '특별 선물 제공'],
              ].map((item, idx) => (
                <ul key={idx}>
                  <li>
                    <dl>
                      <dt>
                        <img
                          src={`https://yogibo.kr/yogico/img/partners/icon_${String(
                            idx + 1
                          ).padStart(2, '0')}.png`}
                          alt={item[0]}
                        />
                        &nbsp;{item[0]}
                      </dt>
                      <dd>
                        <ul>
                          {item.slice(1).map((text, j) => (
                            <li key={j}>
                              <span className="no_span">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </dl>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      {/* 탭2: 채용 정보 */}
      <div id="tab2" className={`tabcontent ${activeTab === 'tab2' ? 'active' : ''}`}>
        <div className="careers_wrapper">
          <div className="section_01_inner" style={{ padding: 0 }}>
            <div className="employment_wrapper">
              <div className="employment_title">1. 채용 안내</div>
              <div className="employment_sub">- 채용 프로세스</div>
              <div className="employment_pr">
                서류접수 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt="→" />&nbsp;
                서류검토 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt="→" />&nbsp;
                1차면접 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt="→" />&nbsp;
                2차면접 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt="→" />&nbsp;
                최종 합격
              </div>

              {/* 프로세스 상세 */}
              {[
                ['① 서류 접수', '채용 지원자는 채용 사이트에 게재된 기간 내에 온라인 입사지원서를 접수해야 합니다. 지원서 접수 시 본인의 경력 및 관심 분야에 따른 직무를 선택하여 이력서 및 자기소개서, 경력기술서(포트폴리오 등)를 첨부하여 접수하시기 바랍니다.'],
                ['② 서류 검토', '이력서 및 첨부된 자기소개서, 경력기술서(포트폴리오) 등을 바탕으로 지원자가 지원 직무와 회사에 적합한 자격과 인재상을 갖추었는지를 종합적으로 검토합니다.'],
                ['③ 면접 전형', ['1) 1차: 실무진 면접', '2) 2차: 임원진 면접']],
                ['④ 최종 합격', '최종 면접에 합격한 지원자는 입사 절차에 따라 요기코퍼레이션 구성원으로 합류하게 됩니다.'],
              ].map((([dt, dd], idx) => (
                <div className="employment_number" key={idx}>
                  <dl>
                    <dt>{dt}</dt>
                    <dd>
                      {Array.isArray(dd)
                        ? (<ul>{dd.map((line, i) => <li key={i}>{line}</li>)}</ul>)
                        : <p>{dd}</p>
                      }
                    </dd>
                  </dl>
                </div>
              )))}


              {/* 문의 및 지원 링크 */}
              <div className="e_info">문의사항</div>
              <div className="e_info_sub">인사 담당자 hr@yogico.kr</div>

              <div className="e_info">입사지원</div>
              <div className="e_info_sub">
                <ul>
                  {[
                    ['잡코리아 입사지원', 'https://www.jobkorea.co.kr/Recruit/Co_Read/Recruit/C/yogibo'],
                    ['사람인 입사지원', 'https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=RlFwOHkwNDNWVWFTMkF0QzRFQk5uQT09'],
                    ['샵마넷 입사지원', 'https://www.shopma.net/job/guin.asp?fset=job_116&jobcode=20804&midkeyw=%EC%9A%94%EA%B8%B0%EB%B3%B4'],
                  ].map(([label, url], i) => (
                    <li key={i}
                      onClick={() => window.open(url, '_blank')}
                    >
                      {label}&nbsp;
                      <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt="→" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}