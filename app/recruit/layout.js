// app/we/layout.js


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../we/we.css';
import '../../components/MainSection.css';
import { Roboto_Condensed } from 'next/font/google';

const roboto = Roboto_Condensed({
  weight: ['400'],         // 필요에 따라 배열로 여러 웨이트 지정 가능
  subsets: ['latin'],      // 한글만 쓰신다면 'latin' 하나로 충분합니다
  variable: '--font-roboto-condensed', // CSS 변수로도 쓰고 싶으면 선언
});


export default function WeLayout({ children }) {
  return (
    <div className={`${roboto.className} h-full`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
