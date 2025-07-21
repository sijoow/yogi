// app/we/layout.js

import { Anton } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../we/we.css';
import '../../components/MainSection.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton', // 필요시 CSS 변수로도 사용 가능
});

export default function WeLayout({ children }) {
  return (
    <div className={anton.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
