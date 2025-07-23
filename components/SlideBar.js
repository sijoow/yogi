import React from "react";
import "./Slidebar.css";

export default function Slidebar({ isOpen, onClose }) {
  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className={`slide-overlay ${isOpen ? "visible" : ""}`}
        onClick={onClose}
      />

      {/* 슬라이드 패널 */}
      <nav className={`slidebar ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header id="header">
            <nav id="nav">
              <ul>
                <li><a>HOME</a></li>
                <li><a>WHAT WE DO</a></li>
                <li><a>WHO WE ARE</a></li>
                <li><a>BUSINESS CONSULTING & DEVELOPMENT</a></li>
                <li><a>STRATEGIC PARTNERSHIP</a></li>
                <li className="banrdBusinessFont"><a>Brand Management Business</a></li>
                <li><a>NEWS</a></li>
                <li><a>RECRUIT</a></li>
                <li><a>CONTACT</a></li>
              </ul>
            </nav>
          </header>

          {/* footer */}
          <footer id="footer">
            <address>
            #201, 125, Bongeunsa-ro, 
            Gangnam-gu, Seoul, Korea<br />
              <a href="tel:+82-10-2880-0721">Tel+82-10-2880-0721 / Fax +82-303-3441-6747 </a>
            </address>
            <ul className="contact_mail">
              <li>
                <a href="mailto:contact@yogico.kr">contact@yogico.kr</a>
              </li>
            </ul>
          </footer>
        </div>
      </nav>
    </>
  );
}
