import React, { useEffect, useRef, useState } from 'react';

const greetings = [
  'Willkommen',
  'Welcome',
  'أَهْلاً وسَهْلاً',
  'Bienvenido',
  '欢迎',
  'ようこそ',
];

export const IntroOverlay: React.FC<{ onFinish: () => void }> = ({
  onFinish,
}) => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const indexRef = useRef(0); // useRef instead of useState
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current >= greetings.length) {
        clearInterval(interval);
        setTimeout(() => {
          setSlideOut(true);
          setTimeout(onFinish, 1000);
        }, 500);
        return;
      }
      setCurrentGreeting(greetings[indexRef.current]);
    }, 500);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full
        bg-[#090c24] text-lime-400 flex items-center justify-center text-4xl sm:text-6xl font-bold z-50 transition-transform duration-1000 ${
          slideOut ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      {currentGreeting}
    </div>
  );
};
