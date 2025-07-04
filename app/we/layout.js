
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../we/we.css'
import '../../components/MainSection.css'
export default function WeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}