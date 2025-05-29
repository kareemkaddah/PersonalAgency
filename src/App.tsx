import './App.css';
import Home from './pages/Home';
import { useState } from 'react';

import { IntroOverlay } from './components/IntroOverlay';
import Header from './components/Header';
function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <>
      <div className='bg-[#090c24] text-white p-6 min-h-screen '>
        {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
