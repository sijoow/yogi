// app/we/layout.js

import { Anton } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../we/we.css';
import '../../components/MainSection.css';


const roboto = Roboto_Condensed({
  weight: ['400'],               // 필요에 따라 다른 weight 추가 가능
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
});

export default function WeLayout({ children }) {
  return (
    <div className={roboto.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}