import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import MainDisplay from './components/MainDisplay';

function App() {
  return (
    <div className='page'>
      <Container className="image">
        <Header />
        <MainDisplay />
      </Container>
    </div>
  );
}

export default App;
