// app/layout.js

import "./globals.css";             // app/globals.css
import "./styles/globals.css"
import { Roboto } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const roboto = Roboto({
  weight: ['400','500','700'],          
  subsets: ['latin'],                   
  display: 'swap',                      
  variable: '--font-roboto',            
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-full">
     <body className={`${roboto.variable} flex flex-col h-full`}>
        <Navbar />
        <main className="flex-1 w-full overflow-auto">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

