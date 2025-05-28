import React, { useEffect, useState } from 'react';

const greetings = [
  'Willkommen',
  'Welcome',
  ' أَهْلاً وسَهْلاً',
  'Bienvenido',
  '欢迎',
  'ようこそ',
];

export const IntroOverlay: React.FC<{ onFinish: () => void }> = ({
  onFinish,
}) => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [index, setIndex] = useState(0);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= greetings.length) {
          clearInterval(interval);
          setTimeout(() => {
            setSlideOut(true);
            setTimeout(onFinish, 1000);
          }, 500); // small delay before sliding out
          return prev;
        }
        setCurrentGreeting(greetings[nextIndex]);
        return nextIndex;
      });
    }, 500); // faster change
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
