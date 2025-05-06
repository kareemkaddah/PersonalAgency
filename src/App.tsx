import './App.css';

function App() {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800 font-sans'>
      {/* Header */}
      <header className='bg-white shadow-sm sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
          <h1 className='text-xl font-bold text-blue-600'>YourAgency</h1>
          <nav className='space-x-6 text-sm font-medium'>
            <a href='#services' className='hover:text-blue-600'>
              Services
            </a>
            <a href='#about' className='hover:text-blue-600'>
              About
            </a>
            <a href='#contact' className='hover:text-blue-600'>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='text-center py-24 px-6 bg-gradient-to-r from-blue-50 to-blue-100'>
        <h2 className='text-4xl font-extrabold mb-4'>
          Build Your Brand with Confidence
        </h2>
        <p className='text-lg mb-6 max-w-xl mx-auto'>
          We help entrepreneurs and creators grow their online presence through
          sleek design, smart strategy, and a personal touch.
        </p>
        <a
          href='#contact'
          className='inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition'
        >
          Get Started
        </a>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <h3 className='text-3xl font-bold text-center mb-12'>Our Services</h3>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition'>
              <h4 className='text-xl font-semibold mb-2'>Brand Strategy</h4>
              <p className='text-sm text-gray-600'>
                We craft brand identities that stand out and resonate with your
                audience.
              </p>
            </div>
            <div className='p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition'>
              <h4 className='text-xl font-semibold mb-2'>Web Design</h4>
              <p className='text-sm text-gray-600'>
                Modern, responsive websites that showcase your vision and
                convert visitors.
              </p>
            </div>
            <div className='p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition'>
              <h4 className='text-xl font-semibold mb-2'>Social Media</h4>
              <p className='text-sm text-gray-600'>
                Grow your following with tailored content and smart platform
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id='contact'
        className='py-20 bg-blue-600 text-white text-center'
      >
        <h3 className='text-3xl font-bold mb-4'>
          Ready to Elevate Your Brand?
        </h3>
        <p className='mb-6 max-w-md mx-auto'>
          Reach out today and let’s build something great together.
        </p>
        <a
          href='mailto:hello@youragency.com'
          className='inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition'
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className='py-6 bg-white text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} YourAgency. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
