// components/sections/Section1.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import './NewsSection_02.css';

export default function Section1({ id = 'news' }) {
  const newsItems = [
    {
      id: 1,
      imgSrc: 'https://yogibo.openhost.cafe24.com/yogico/img/banner/HDC%EC%98%81%EC%B0%BD.png',
      title: 'Yogibo Participates as a Sponsor at the 2024 Seoul Beauty Travel Week',
      excerpt:
        'HDC Youngchang and Yogibo held a joint Family Month event from May 10 to 18 at Starfield Hanam. The venue featured Kurzweil digital piano experience zones and Yogibo relaxation areas. On the opening day, live performances included a K-pop band and a jazz pianist-led band.',
      link: 'https://www.mk.co.kr/news/business/11310368',
    },
    {
      id: 2,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/봄꽃.jpg',
      title: 'Discover the Unique Beauty of Seoul at 2024 Beauty Travel Week',
      excerpt:
        'Yogibo, the global beanbag brand, sponsored the 2025 Yeouido Spring Flower Festival in Yeongdeungpo held from April 4 to 8. As an official supporter, Yogibo offered special programs and branded relaxation zones during the festival.',
      link: 'https://www.sisunnews.co.kr/news/articleView.html?idxno=222683',
    },
    {
      id: 3,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/뷰티트래블.jpg',
      title: 'Yogibo Participates in the 2024 Seoul Beauty Travel Week as a Sponsor.',
      excerpt:
        'Yogibo is sponsoring the 2024 Seoul Beauty Travel Week, partnering with Haru Meditation to debut a signature beanbag wellness program. Held at Seoul Forest, the event features yoga, music, singing bowls, dance meditations, and exclusive giveaways.',
      link: 'http://www.kdpress.co.kr/news/articleView.html?idxno=132087',
    },
    {
      id: 4,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/뷰티트래블2.jpg',
      title: 'Yogibo Participates in the 2024 Seoul Beauty Travel Week as a Sponsor.',
      excerpt:
        'The 2024 Seoul Beauty Travel Week runs from September 23 to 29 across Seoul Forest Park and Seongdong‑gu Business Wire, and will feature over 50 parks, galleries, museums, and local shops under the themes of revival, refreshment, and rejuvenation .',
      link: 'https://www.businesswire.com/news/home/20240919559349/en/Discover-the-Unique-Beauty-of-Seoul-at-2024-Seoul-Beauty-Travel-Week',
    }
    ,
    {
      id: 56,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/보스이미지.jpg',
      title: 'Bose Offers a Unique Experience in the Brand Zone at the Beenzino Concert.',
      excerpt:
        'At Beenzino’s sold-out concert, Bose hosted a cinema-style booth streaming exclusive videos and unreleased audio on its speakers cnet.co.kr. Fans who shared on Instagram could win signed CDs and Bose headphones',
      link: 'https://www.businesswire.com/news/home/20240919559349/en/Discover-the-Unique-Beauty-of-Seoul-at-2024-Seoul-Beauty-Travel-Week',
    }
    ,
    {
      id: 41,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/신세계팝.png',
      title: 'Gwangju Shinsegae Operates a Global Lifestyle Yogibo Experience Zone.',
      excerpt:
        'Gwangju Shinsegae is hosting a Yogibo experience zone in its main building plaza from June 18 to 30 under the “Perfect Relaxation, Yogibo Therapy” theme, offering premium beanbags and body pillows amid soothing aroma therapy sessions . Visitors can also enjoy natural herb cold/hot packs, try signature products like the Yogibo Max for free, and inquire about purchases at the B1 Yogibo store—an initiative driven by high satisfaction since the store’s March opening',
      link: 'https://view.asiae.co.kr/article/2024062316474142366',
    }
    ,
    {
      id: 441,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/img_yogicorporation2.jpg',
      title: 'Yogi Corporation Signs Filling Material Supply Agreement with Beanbag Brand Bonita.',
      excerpt:
        'Yogi Corporation, Yogibo’s Korean distributor, will supply High Resilience Foam (HRF) to beanbag maker Bonita First-Clas HRF provides superior durability, elasticity and resilience to boost product quality First-Class ',
      link: 'https://www.news1.kr/industry/general-industry/5511174',
    }
    ,
    {
      id: 4441,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/뉴스_숙면여행존.jpg',
      title: 'Yogibo Concludes Sleep Travel Zone in Partnership with S‑Omni.',
      excerpt:
        'Yogibo closed its “Sleep Travel Zone” at Hyundai Department Store Pangyo on January 20 with S‑OMNI, featuring the Waseda‑University–validated Yogibo Max and AI sleep coaching via the upcoming SOMNIA app . Over two days, 400 attendees rated it 8/10 or higher, and 98% said they would recommend the experience ',
      link: 'https://www.ajunews.com/view/20240125161636889',
    }
    ,



    ,
    {
      id: 444431,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/스카이-요기보존.jpg',
      title: 'Seongnam FC Opens SKY Yogibo Zone at October 7 Home Match!',
      excerpt:
        'Seongnam FC opened a “SKY Yogibo Zone” at its October 7 home match vs. Chungnam Asan at Tancheon Stadium, featuring Yogibo Zoola beanbag sofas in 2‑ and 3‑person seats and offered complimentary Yogibo accessories to fans using the zone',
      link: 'https://www.interfootball.co.kr/news/articleView.html?idxno=615321',
    }
    ,



    ,
    {
      id: 23423,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/보코서울강남.jpg',
      title: 'Boco Seoul Gangnam Offers “Camping with Yogibo” Package in Collaboration with Premium Beanbag Brand Yogibo',
      excerpt:
        'IHG’s voco Seoul Gangnam introduces a “Camping with Yogibo” package transforming its Royal and Presidential suites into urban glamping zones with Yogibo Zoola loungers, private pool, projector & screen, and in‑room Camp Set dining services',
      link: 'https://www.cooknchefnews.com/news/view/1065573194725085',
    }
    ,


    ,
    {
      id: 23423423,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/노블레스-수현.jpg',
      title: 'Marriage Information Company Noblesse Suhyun Partners with Lifestyle Brand Yogibo.',
      excerpt:
        'oco Seoul Gangnam’s “Camping with Yogibo” package turns its Royal and Presidential suites into urban glamping zones, complete with private pools, mini kitchens, Yogibo Zoola loungers, Nordèn kids tents, and in‑room Camp Set dining',
      link: 'https://www.cooknchefnews.com/news/view/1065573194725085',
    }
    
    ,
    {
      id: 324,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/창원LG세이커스.jpg',
      title: 'Yogibo Strengthens Winter Sports Collaborations.',
      excerpt:
        'Yogibo teamed with Changwon LG Sakers for the 2022–23 KBL season, renaming family seating “Yogibo Seats” and installing Drop sofas and Support body pillows in burgundy and yellow to match team colors . It also maintains its “lying‑view” collaboration with Wonju DB Promy from the previous season',
      link: 'https://sports.khan.co.kr/article/202301061228003?pt=nv',
    }
    ,

    ,
    {
      id: 32443,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/어썸피플.jpg',
      title: 'Yogibo Strengthens Winter Sports Collaborations.',
      excerpt:
        'Yogibo’s Awesome People campaign invites pregnancy & childbirth stories to raise low birth rate awareness and support mothers . All entrants receive a ₩10,000 voucher; winners get a Yogibo Mom Set and extra gifts for video interviews',
      link: 'https://www.babytimes.co.kr/news/articleView.html?idxno=61578',
    }
    ,
    {
      id: 123123,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/img_news_modju.jpg',
      title: 'Yogibo Launches ‘Modju’ Modular Sofa in Korea.',
      excerpt:
        'Yogibo launched its Modju modular sofa in Korea on January 10, offering Base, Top, and Corner modules in six colors for thousands of configurations . Each lightweight (<9 kg), zero‑scratch module adapts to changing spaces and lifestyles  . Available online from January 10 and in official stores from January 17',
      link: 'https://www.edaily.co.kr/news/read?newsId=02010646632196408&mediaCodeNo=257&OutLnkChk=Y',
    }
    ,

    {
      id: 123143523,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/유연석.jpg',
      title: 'Yogibo Selects Actor Yoo Yeon‑seok as Official Brand Model.',
      excerpt:
        'Yogibo appointed actor Yoo Yeon‑seok as its official Korean model on December 10, 2021, kicking off a three‑part omnibus ad campaign emphasizing comfort, convenience, and design . Starting December 17, customers will receive one of three limited “Video Photo Cards” at random and enjoy extra discounts on the “Max” sofa ',
      link: 'https://www.segyebiz.com/newsView/20211210508236?OutUrl=naver',
    }
    ,


    {
      id: 234234,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/드류베리모어.jpg',
      title: 'Yogibo Selects Hollywood Actress Drew Barrymore as Brand Advertising Model.',
      excerpt:
        'Lifestyle brand Yogibo has signed Hollywood star Drew Barrymore as its advertising model; its first commercial—a playful parody of The Drew Barrymore Show—debuted on November 17. A longtime Yogibo fan who’s used the products with her two daughters, Barrymore praised the brand’s commitment to comfort and happiness and expressed her delight at the partnership',
      link: 'https://www.segyebiz.com/newsView/20211118516199?OutUrl=naver',
    }
    ,
    {
      id: 34234,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/img_news_런칭.jpg',
      title: 'Yogibo Launches Hybrid Beanbag Sofa.',
      excerpt:
        'On November 8, 2021, Yogibo launched a hybrid beanbag sofa featuring a patented, second‑generation filling that offers 9–10× the durability of EPS and 5–7× that of EPP, dramatically extending refill cycles  . Purchases made through November 22 at official stores and Yogibo Mall include one free repair service ',
      link: 'https://www.segyebiz.com/newsView/20211108508168',
    }
    ,

    {
      id: 23422334,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/img_news_kakaofriends.jpg',
      title: 'Yogibo Officially Launches Kakao Friends Edition.',
      excerpt:
        'Yogibo’s Kakao Friends Edition marks the brand’s second official licensing collaboration—following its 2020 Disney Star Wars Special Edition—and features themed beanbag sofas and body pillows adorned with beloved Kakao Friends characters',
      link: 'https://www.discoverynews.kr/news/articleView.html?idxno=654877',
    }
    ,
    {
      id: 3243,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/img_yogicorporation.jpg',
      title:'Yogibo Korea Changes Company Name to Yogi Corporation.',
      excerpt: 'Yogi Korea rebrands as Yogi Corporation, evolving into a smart lifestyle platform with AI‑powered home‑furnishing recommendations. Founded in July 2016, it leads the beanbag sofa market with washable, convertible designs and patented hybrid filling ',
      link: 'https://www.news2day.co.kr/article/20210602500064',
    }
    ,

    {
      id: 23423425,
      imgSrc: 'https://yogibo.kr/yogico/img/banner/img_news_인천면세점 copy.jpg',
      title:'Yogibo Korea Changes Company Name to Yogi Corporation.',
      excerpt: 'Yogibo opened its first duty‑free shop at Hyundai Duty Free in Incheon Airport Terminal 1 on December 1, offering premium beanbag sofas, travel‑ready cover sets, character plush toys, body pillows, and portable travel accessories  . The compact cover sets, exclusive to this location, reduce volume for easy packing and self‑assembly upon arrival  ',
      link: 'https://www.kdfnews.com/news/articleView.html?idxno=62132',
    }
    ,

  ];

  return (
    <section id={id} className="NewsSection_02">
      <div className="NewsSection_02_header">
        <h1 className="NewsSection_02_title"></h1>
      </div>
      <div className="NewsSection_02_grid">
        {newsItems.map(item => (
          <div key={item.id} className="NewsSection_02_card">
            <div className="NewsSection_02_image">
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <h2 className="NewsSection_02_cardTitle">{item.title}</h2>
            <p className="NewsSection_02_cardExcerpt">{item.excerpt}</p>
            <Link href={item.link} className="NewsSection_02_button">
            Read full article
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
