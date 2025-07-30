'use client';

import React, { useRef, useEffect } from 'react';
import './BusinessSection_02.css';

export default function BusinessSection_02({ id = 'bizSec2' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? el.classList.add('play') : el.classList.remove('play');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="BusinessSection_02">
      <h2 className="bs2-title">Business Consulting & Development</h2>

      <div className="bs2-columns">
        {/* LEFT COLUMN */}
        <ul className="bs2-list">
          <li className="bs2-item">
            <h3>Business Consulting</h3>
            <p>Unlock the designated markets with actionable strategies and tailor-made entry solutions.</p>
          </li>

          <li className="bs2-item">
            <h3>Market Analysis</h3>
            <p>Gain a comprehensive understanding of the markets, key trends, and emerging opportunities.</p>
          </li>

          <li className="bs2-item">
            <h3>Local Representation & Business Liaison</h3>
            <p>Acting on your behalf to represent your interests, build networks, and support deal-making locally.</p>
          </li>

          <li className="bs2-item">
            <h3>Supplier Sourcing & Validation</h3>
            <p>Identify, verify, and manage reliable manufacturers and suppliers for your business needs.</p>
          </li>

          <li className="bs2-item">
            <h3>Partner & Client Matching</h3>
            <p>Discover and connect with the right partners—distributors, agents, importers, or end clients.</p>
          </li>

          <li className="bs2-item">
            <h3>Technology Scouting & Innovation Search</h3>
            <p>Explore cutting-edge technologies and innovations from startups, corporates, and universities.</p>
          </li>
        </ul>

        {/* RIGHT COLUMN */}
        <ul className="bs2-list">
          <li className="bs2-item">
            <h3>Business Setup & Incorporation</h3>
            <p>End-to-end assistance with company formation, licensing, regulatory compliance, and bank setup</p>
          </li>

          <li className="bs2-item">
            <h3>Payroll And HR Services</h3>
            <p>Salary calculation and payment, tax and insurance deductions, talent recruitment, and ongoing HR policy support</p>
          </li>

          <li className="bs2-item">
            <h3>Marketing, Branding & Public Relations</h3>
            <p>Build brand awareness through strategic marketing, PR campaigns, and localized messaging.</p>
          </li>

          <li className="bs2-item">
            <h3>e-Commerce &  Logistics Solutions</h3>
            <p>Support for warehousing, fulfillment, and managing online sales channels.</p>
          </li>

          <li className="bs2-item">
            <h3>Apostille & Notarization </h3>
            <p>Provide comprehensive document services, including authentication, certification, notarization, and apostille</p>
          </li>

          <li className="bs2-item">
            <h3>Importer of Record (IOR) Services</h3>
            <p>Ensure compliance, manage local product registration, and act as your official importer</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
