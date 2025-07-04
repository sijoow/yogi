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
                <li>
                  <a href="#main" onClick={onClose}>
                    <img src="https://www.boosterz.co.kr/img/content/menu01.png" alt="HOME" />
                  </a>
                </li>
                <li>
                  <a href="#sub01" onClick={onClose}>
                    <img src="https://www.boosterz.co.kr/img/content/menu02.png" alt="Who we are" />
                  </a>
                </li>
                <li>
                  <a href="#sub02" onClick={onClose}>
                    <img src="https://www.boosterz.co.kr/img/content/menu03-1.png" alt="WHAT WE DO" />
                  </a>
                </li>
                <li>
                  <a href="#sub03" onClick={onClose}>
                    <img src="https://www.boosterz.co.kr/img/content/menu04-1.png" alt="PARTNERSHIP" />
                  </a>
                </li>
                <li>
                  <a href="#sub04" onClick={onClose}>
                    <img src="https://www.boosterz.co.kr/img/content/menu06.png" alt="OUR CAMPAIGN" />
                  </a>
                </li>
                <li>
                  <a href="https://boosterz.team/" target="_blank" rel="noreferrer">
                    <img src="https://www.boosterz.co.kr/img/content/recruit.png" alt="recruit" />
                  </a>
                </li>
                <li>
                  <a href="#contact" className="open_btn" onClick={onClose}>
                    <img src="https://www.boosterz.co.kr/img/content/menu05.png" alt="contact" />
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          {/* footer */}
          <footer id="footer">
            <address>
            125, Bongeunsa-ro, Gangnam-gu, <br />
            Seoul, Republic of Korea<br />
              <a href="tel:+82-2-557-0920">02-557-0920</a>
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
