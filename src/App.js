import './App.css';
import { BsChevronUp } from "react-icons/bs";
import { useEffect, useState } from "react";
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <div className='page'>
        <Header />
        <Projects />
        <Contact />
        {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <BsChevronUp className="arrow" />
        </button>
      )}
    </div>
  );
}

export default App;
