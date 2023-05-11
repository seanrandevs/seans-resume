import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='page'>
        <Header />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
