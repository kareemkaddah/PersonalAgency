import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='py-16 md:py-24 bg-[#0c1031] text-white mt-20 w-full'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Company Info */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>KD</h2>
          <p className='text-sm text-gray-300'>
            Empowering your business with smart, scalable digital solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>
              <a href='#services' className='hover:text-white'>
                Services
              </a>
            </li>
            <li>
              <a href='#about' className='hover:text-white'>
                About
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-white'>
                Contact
              </a>
            </li>
            <li>
              <a href='#ai-recommender' className='hover:text-white'>
                AI Recommender
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Contact</h3>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>Email: Kontakt@kdagency.online</li>
            <li>Phone: +49 1718073697</li>
            <li>Location: Remote / Castrop-Rauxel</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Legal</h3>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>
              <Link to='/Imprint' className='hover:text-white'>
                Imprint
              </Link>
            </li>
            <li>
              <Link to='/datenschutz' className='hover:text-white'>
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-12 text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} KD Agency. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
