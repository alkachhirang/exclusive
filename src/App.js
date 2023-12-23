import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Accordian from './components/Accordian';
import Elegirnos from './components/Elegirnos';
import Ellos from './components/Ellos';
import Footer from './components/Footer';
import Header from './components/Header';
import Lanza from './components/Lanza';
import MasRazones from './components/MasRazones';
import NeustraMission from './components/NeustraMission';
import NuestrosAtributos from './components/NuestrosAtributos';
import Potenciando from './components/Potenciando';
import React, { useState, useEffect } from 'react';
import BackToTop from './assets/images/png/back-to-top.png';
import { Preloader } from './components/IconImg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1000,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (

    <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <>
            <div className='overflow-hidden'>
              <Header />
              <NeustraMission />
              <NuestrosAtributos />
              <Potenciando />
              <Elegirnos />
              <MasRazones />
              <Ellos />
              <Accordian />
              <Lanza />
              <Footer />
            </div>
            <div>
              <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "back_to_top z_7 mw_45" : "d-none"} />
            </div>
          </>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;