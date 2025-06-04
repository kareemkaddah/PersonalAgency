import './App.css';
import Home from './pages/Home';
import Imprint from './pages/Imprint';
import Datenschutz from './pages/Datenschutz';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntroOverlay } from './components/IntroOverlay';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <Router>
      <div className='bg-[#090c24] text-white p-6 min-h-screen'>
        {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Imprint' element={<Imprint />} />
          <Route path='/datenschutz' element={<Datenschutz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
