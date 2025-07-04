
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../we/we.css'
export default function WeLayout({ children }) {
  return (
    <>
      {children}
      <Navbar />
      <Footer />
    </>
  );
}