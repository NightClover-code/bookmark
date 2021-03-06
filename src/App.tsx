//importing hooks & aos
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//importing styles
import './styles/css/app.css';
//importing components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Extensions from './components/Extensions';
import Accordion from './components/Accordion';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
//app component
const App: React.FC = () => {
  //initializing aos
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);
  //checking if window was resized
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      setIsNavOpen(false);
    }
  });
  //global state
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <div className={`app__container ${isNavOpen ? 'overlay' : ''}`}>
      <div className="blue__bg__right"></div>
      <div className="blue__bg__left"></div>
      <div className="wrapper">
        <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <main>
          <Hero isNavOpen={isNavOpen} />
          <Features />
          <Extensions />
          <Accordion />
        </main>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
