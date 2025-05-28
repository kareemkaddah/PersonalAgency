import './App.css';
import Home from './pages/Home';
import { useState } from 'react';

import { IntroOverlay } from './components/IntroOverlay';
function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <>
      {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}

      <div className='bg-[#090c24] text-white p-6 min-h-screen '>
        <Home />
      </div>
    </>
  );
}

export default App;
