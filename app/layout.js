// app/layout.js
import "./globals.css";
import "./styles/globals.css";
import { Anton } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

const roboto = Roboto_Condensed({
  weight: ['400'],         // 필요에 따라 배열로 여러 웨이트 지정 가능
  subsets: ['latin'],      // 한글만 쓰신다면 'latin' 하나로 충분합니다
  variable: '--font-roboto-condensed', // CSS 변수로도 쓰고 싶으면 선언
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${roboto.className} h-full`}>
      <head>
        {/* next/font가 자동으로 폰트를 로드하므로 이 링크는 선택사항입니다 */}
        {/* 
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
        */}
      </head>
      <body className="flex flex-col h-full">
        <Navbar />
        <main className="flex-1 w-full overflow-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}