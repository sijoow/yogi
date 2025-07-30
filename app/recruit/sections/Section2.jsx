// components/Section2.jsx
'use client';

import React, { useRef, useState } from 'react';
import './RecrutSection_02.css';

export default function Section2({ id = 'sec2' }) {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section id={id} ref={sectionRef} className="careers_section">
      {/* Tab Navigation */}
      <div className="uitab">
        <ul>
          <li
            className={activeTab === 'tab1' ? 'active' : ''}
            onClick={() => setActiveTab('tab1')}
          >
            Company Overview
          </li>
          <li
            className={activeTab === 'tab2' ? 'active' : ''}
            onClick={() => setActiveTab('tab2')}
          >
            Job Openings
          </li>
        </ul>
      </div>

      {/* Tab 1: Company Overview */}
      <div id="tab1" className={`tabcontent ${activeTab === 'tab1' ? 'active' : ''}`}>
        {/* Ideal Candidates */}
        <div className="careers_wrapper">
          <div className="section_01_inner" style={{ padding: 0 }}>
            <div className="careers_search">
              <div className="careers_search_inner">
                <div className="careers_search_title">Ideal Candidates</div>

                {[
                  ['Purposeful Thinker', 'Someone who works with a clear purpose to break free from repetitive routines.'],
                  ['Imaginative Visionary', 'Someone who turns diverse ideas and perspectives into reality for a better lifestyle.'],
                  ['Uncompromising Integrity', 'Someone who prioritizes honesty and never deceives themselves, colleagues, or the company.'],
                  ['Value of Happiness', 'Someone who creates and shares fresh experiences of happiness.'],
                  ['Bold Challenger', 'Someone who fears no challenge and takes action.'],
                  ['Work is Play', 'Someone who treats work as play and enjoys the process.'],
                  ['Team Growth', 'Someone who collaborates and creates synergy with teammates.'],
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

        {/* Middle Visual */}
        <div className="middle_visual">
          <img
            src="https://yogibo.kr/yogico/img/careers/middle_banner.jpg"
            alt="Middle Banner"
            style={{ width: '100%' }}
          />
        </div>

        {/* Benefits & Culture */}
        <div className="section_01_inner">
          <div className="welfare">
            <div className="welfare_wrapper">
              {[
                ['Working Hours', 'Head Office (flexible hours)', 'Start 09:00–10:00 | End 18:00–19:00', 'Warehouse Start 08:30 | End 17:30'],
                ['Unlimited Leave', 'Refresh as much as you work hard'],
                ['Company Culture', 'Yodong, Yoda Challenge, Our Together, Promotion Ceremony, Farewell Parties, etc.'],
                ['Probation Completion Gift', 'Healing gift after 3‑month probation'],
                ['Referral Bonus', 'Reward for successful referrals'],
                ['Casual Dress Code', 'Shorts and casual attire allowed'],
                ['Creative Hairstyles', 'Rainbow hair and styles welcomed'],
                ['Equipment Support', 'Dual monitors and work gear provided'],
                ['Expense Reimbursement', 'Fuel and toll fees for personal vehicles'],
                ['Team Budget', 'Budget for team dinners and snacks'],
                ['Cafeteria', 'Unlimited coffee & tea'],
                ['Congratulatory & Condolence', 'Congratulatory money & gifts'],
                ['Dinner Support', 'Dinner provided'],
                ['Leisure Activities', 'Discounts on resorts & activities'],
                ['Parental Leave', 'Maternity/paternity leave support'],
                ['Tax Benefits', '90% income tax reduction for under‑34 for 5 years'],
                ['Lunch Support', 'Lunch provided'],
                ['Long‑Service Awards', 'Special gifts for long tenure'],
              ].map((item, idx) => (
                <ul key={idx}>
                  <li>
                    <dl>
                      <dt>
                        <img
                          src={`https://yogibo.kr/yogico/img/partners/icon_${String(idx + 1).padStart(2, '0')}.png`}
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

      {/* Tab 2: Job Openings */}
      <div id="tab2" className={`tabcontent ${activeTab === 'tab2' ? 'active' : ''}`}>
        <div className="careers_wrapper">
          <div className="section_01_inner" style={{ padding: 0 }}>
            <div className="employment_wrapper">
              <div className="employment_title">1. Recruitment Process</div>
              <div className="employment_sub">– Hiring Stages</div>
              <div className="employment_pr">
                Application Submission <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt="→" />
                Resume Review <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt="→" />
                1st Interview <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt="→" />
                2nd Interview <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt="→" />
                Final Offer
              </div>

              {/* Detailed Steps */}
              {[
                ['① Application Submission', 'Submit your online application, resume, cover letter, and portfolio (if any) within the posted period, selecting your desired role.'],
                ['② Resume Review', 'We evaluate your qualifications and fit based on submitted materials.'],
                ['③ Interviews', ['1) 1st: Team Interview', '2) 2nd: Executive Interview']],
                ['④ Final Offer', 'If selected, you will receive an official offer and join our team.'],
              ].map(([dt, dd], idx) => (
                <div className="employment_number" key={idx}>
                  <dl>
                    <dt>{dt}</dt>
                    <dd>
                      {Array.isArray(dd) ? (
                        <ul>{dd.map((line, i) => <li key={i}>{line}</li>)}</ul>
                      ) : (
                        <p>{dd}</p>
                      )}
                    </dd>
                  </dl>
                </div>
              ))}

              {/* Contact & Apply */}
              <div className="e_info">Contact</div>
              <div className="e_info_sub">HR Contact: hr@yogico.kr</div>

              <div className="e_info">Apply Online</div>
              <div className="e_info_sub">
                <ul>
                  {[
                    ['Apply via JobKorea', 'https://www.jobkorea.co.kr/Recruit/Co_Read/Recruit/C/yogibo'],
                    ['Apply via Saramin', 'https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=RlFwOHkwNDNWVWFTMkF0QzRFQk5uQT09'],
                    ['Apply via Shopma', 'https://www.shopma.net/job/guin.asp?fset=job_116&jobcode=20804&midkeyw=%EC%9A%94%EA%B8%B0%EB%B3%B4'],
                  ].map(([label, url], i) => (
                    <li key={i} onClick={() => window.open(url, '_blank')}>
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
