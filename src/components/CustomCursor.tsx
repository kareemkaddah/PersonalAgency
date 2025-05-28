import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        const offsetX = cursor.offsetWidth / 2;
        const offsetY = cursor.offsetHeight / 2;
        cursor.style.transform = `translate3d(${e.clientX - offsetX}px, ${e.clientY - offsetY}px, 0)`;
      }
    };

    const hoverTargets = document.querySelectorAll('.text-brand, .bg-brand');

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        el.classList.toggle('text-brand', false);
        el.classList.toggle(
          'text-brand-hover',
          el.classList.contains('text-brand')
        );

        el.classList.toggle('bg-brand', false);
        el.classList.toggle(
          'bg-brand-hover',
          el.classList.contains('bg-brand')
        );
      });

      el.addEventListener('mouseleave', () => {
        el.classList.toggle('text-brand-hover', false);
        el.classList.toggle(
          'text-brand',
          el.classList.contains('text-brand-hover')
        );

        el.classList.toggle('bg-brand-hover', false);
        el.classList.toggle(
          'bg-brand',
          el.classList.contains('bg-brand-hover')
        );
      });
    });

    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className='pointer-events-none fixed top-0 left-0 z-50 w-16 h-16 rounded-full border-2 border-white mix-blend-difference transition-transform duration-150 ease-out'
    />
  );
}
