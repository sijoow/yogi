// app/layout.js
import "./globals.css";
import "./styles/globals.css";
import { Open_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300','400','600','700'], // 필요에 따라 조절
  variable: '--font-open-sans'
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-full">
      <head>
        {/* Splitting CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/splitting/dist/splitting.css"
        />
        {/* Splitting JS */}
        <Script
          src="https://unpkg.com/splitting/dist/splitting.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${openSans.className} flex flex-col h-full`}>
        <Navbar />
        <main className="flex-1 w-full overflow-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
