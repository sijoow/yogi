// app/layout.js
import "./globals.css";
import "./styles/globals.css";
import { Anton } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' });

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
      <body className={`${anton.className} flex flex-col h-full`}>
        <Navbar />
        <main className="flex-1 w-full overflow-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
