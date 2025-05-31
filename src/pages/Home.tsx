import React from 'react';

import intro from '../assets/intro.jpeg';
import Services from '../components/Services';
import Contact from '../components/Contact';

import Footer from '../components/Footer';
import { Link } from 'react-scroll';

function Home() {
  return (
    <>
      <div className='p-8' id='home'>
        <section className='text-white p-6 mt-8 rounded-lg flex flex-col md:flex-row items-center gap-8 max-w-screen-xl mx-auto'>
          <div className='w-full md:w-1/2 '>
            <p className='text-[#503d74] font-bold text-3xl sm:text-4xl lg:text-5xl text-left p-4'>
              Innovate. Build. Thrive.
            </p>
            <p className='font-bold text-2xl sm:text-3xl lg:text-4xl text-left p-4 pt-0'>
              Your Digital Future Starts Here.
            </p>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 text-left p-4 pt-3'>
              Unlock unparalleled potential with our expert web development...
            </p>
            <div className='flex gap-4 p-4 pt-0'>
              <Link
                to='services'
                smooth={true}
                duration={500}
                className='bg-lime-400 text-white px-4 py-2 rounded shadow-lg no-underline transition transform duration-500 hover:bg-[#503d74] hover:scale-105 hover:shadow-fuchsia-950'
              >
                Our Services
              </Link>
              {/* <a
                href='#'
                className='bg-lime-400 text-white px-4 py-2 rounded shadow-lg no-underline transition transform duration-500 hover:bg-[#503d74] hover:scale-105 hover:shadow-fuchsia-950'
              >
                Our Services
              </a> */}
              <Link
                to='contact'
                smooth={true}
                duration={500}
                className='bg-lime-400 text-white px-4 py-2 rounded shadow-lg no-underline transition transform duration-500 hover:bg-[#503d74] hover:scale-105 hover:shadow-fuchsia-950'
              >
                Get a Free Quote
              </Link>
              {/* <a
                href='#'
                className='bg-lime-400 text-white px-4 py-2 rounded shadow-lg no-underline transition transform duration-500 hover:bg-[#503d74] hover:scale-105 hover:shadow-fuchsia-950'
              >
                Get a Free Quote
              </a> */}
            </div>
          </div>

          <div className='w-full md:w-1/2 pt-4'>
            <img
              src={intro}
              alt='Innovate'
              className='object-contain w-full max-w-md lg:max-w-sm rounded-lg mx-auto'
            />
          </div>
        </section>
      </div>
      <div></div>
      <div className='mt-56'>
        <Services />
      </div>

      <div className='mt-56'>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
