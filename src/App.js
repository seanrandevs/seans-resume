import './App.css';
import Video from './components/Video';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
  );
}

export default App;
