import React from 'react';
import intro from '../assets/intro.jpeg';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Header from '../components/Header';
function Home() {
  return (
    <>
      <Header></Header>
      <div>
        <section className='text-white p-6 rounded-lg flex flex-col md:flex-row items-center gap-8'>
          <div className='w-full md:w-1/2'>
            <p className='text-[#503d74] font-bold text-5xl text-left p-4'>
              Innovate. Build. Thrive.
            </p>
            <p className='font-bold text-4xl text-left p-4 pt-0'>
              Your Digital Future Starts Here.
            </p>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 text-left p-4 pt-3'>
              Unlock unparalleled potential with our expert web development,
              custom software, and cutting-edge AI integrations. Let's shape
              tomorrow's digital landscape.
            </p>
            <div className='flex gap-4 p-4 pt-0'>
              <a
                href='#'
                className='bg-lime-400 text-white px-4 py-2 rounded shadow-lg no-underline transition transform duration-500 hover:bg-[#503d74] hover:scale-105

                hover:shadow-fuchsia-950'
              >
                Our Services
              </a>
              <a
                href='#'
                className='bg-lime-400 text-white px-4 py-2 rounded shadow-lg no-underline transition transform duration-500  hover:bg-[#503d74] hover:scale-105  
                hover:shadow-fuchsia-950'
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          <div className='w-full md:w-1/2 pt-4'>
            <img
              src={intro}
              alt='Innovate'
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
        </section>
      </div>

      <div className='mt-56'>
        <Services />
      </div>
      <div className='mt-56'>
        <Contact />
      </div>
    </>
  );
}

export default Home;
