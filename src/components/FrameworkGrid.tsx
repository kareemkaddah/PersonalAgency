import React from 'react';

const frameworks = [
  ['React', 'Angular'],
  ['Remix', 'Astro'],
  ['Redwood', 'After.js'],
];

export const FrameworkGrid: React.FC = () => {
  // Utility to render a dimmed row (used top & bottom)
  const renderDimmedRow = (rowIndex: number) => (
    <div
      className={`mt-10 grid grid-cols-5 gap-4 opacity-30 pointer-events-none relative w-fit ${
        rowIndex % 2 === 1 ? 'ml-10' : ''
      }`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className='h-10 w-28 rounded-xl bg-lime-200' />
      ))}
    </div>
  );

  return (
    <div className='flex items-center justify-center min-h-screen p-8 gap-4'>
      <div className='flex flex-col items-center justify-center gap-4'>
        {/* Top dimmed row */}
        {renderDimmedRow(0)}

        {/* Main rows */}
        {frameworks.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-5 gap-4 transition-all duration-300 relative w-fit ${
              rowIndex % 2 === 1 ? 'ml-10' : ''
            }`}
          >
            {/* Left ghost box */}
            <div className='h-10 w-28 opacity-30 rounded-xl pointer-events-none bg-lime-200' />

            {/* Actual framework boxes */}
            {row.map((name, colIndex) => (
              <div
                key={colIndex}
                className='h-10 w-28 flex items-center justify-center text-white font-semibold rounded-xl transform transition duration-300 hover:scale-105 bg-lime-400'
                style={{
                  transition:
                    'box-shadow 600ms ease-in-out, transform 300ms ease',
                  boxShadow: 'none',
                }}
                onMouseEnter={
                  (e) =>
                    (e.currentTarget.style.boxShadow =
                      '0 0 10px #86198f, 0 0 20px #86198f, 0 0 30px #86198f') // fuchsia-950
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                {name}
              </div>
            ))}

            {/* Right ghost box */}
            <div className='h-10 w-28 opacity-30 rounded-xl pointer-events-none bg-lime-200' />
          </div>
        ))}

        {/* Bottom dimmed row */}
        {renderDimmedRow(frameworks.length)}
      </div>
    </div>
  );
};

export default FrameworkGrid;
