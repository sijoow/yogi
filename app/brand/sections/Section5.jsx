'use client';

import React from 'react';
import './BrandSection_04.css'; // 기존 스타일 그대로 사용
import './BrandSection_05.css';

export default function BrandSection_05({ id = 'BrandSec5' }) {
  return (
    <section id={id} className="BrandSection_05">
      <h2 className="bs5-heading">
        PATENT &amp; DESIGN REGISTRATION{' '}

      </h2>
      <div className="bs5-inner">
        {/* 1st item */}
        <div className="bs5-item">
          <h3 className="bs5-item-title">HYBRID FILLING MATERIAL</h3>
          <p className="bs5-item-ref">PCT/KR2021/014299 · Issued Oct 15, 2021</p>
          <p className="bs5-item-desc">
            A hybrid filling material comprising expanded<br />
            polystyrene and/or expanded polypropylene
          </p>
          <div className="bs5-item-img">
            <img
              src="https://yogibo.openhost.cafe24.com/yogico/img/mainBanner/data1.jpg"
              alt="Certificate of Patent"
            />
          </div>
        </div>
        {/* 2nd item */}
        <div className="bs5-item">
          <h3 className="bs5-item-title">REFILL CAP FOR BEANBAG</h3>
          <p className="bs5-item-ref">3020210043826 · Issued Sep 13, 2021</p>
          <p className="bs5-item-desc">
            A filling cap that enables a filler contained in a<br />
            packaging container to be charged into a beanbag
          </p>
          <div className="bs5-item-img">
            <img
              src="https://yogibo.openhost.cafe24.com/yogico/img/mainBanner/data1.jpg"
              alt="Certificate of Design Registration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
