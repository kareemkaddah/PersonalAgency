function Header() {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className='
         mx-auto w-full max-w-6xl
        flex justify-between items-center
        z-50
        backdrop-blur-md bg-[#090c24]/70
        text-[#503d74] font-bold
        text-xl sm:text-3xl lg:text-4xl
        px-8 py-4 rounded-b-2xl shadow-lg
      '
    >
      {/* KD Logo */}
      <div
        onClick={() => handleScroll('home')}
        className='
          cursor-pointer px-4 py-1
          text-lime-300 text-2xl sm:text-3xl lg:text-4xl font-extrabold
          drop-shadow-[0_0_10px_#a3e635]
          transition-transform duration-300 hover:scale-105
        '
      >
        KD
      </div>

      {/* Nav Items */}
      <div className='flex space-x-8'>
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className='relative group cursor-pointer transition duration-300'
          >
            <span>{item.name}</span>
            <span
              className='
                absolute bottom-0 left-0 h-1 w-full bg-lime-300 rounded-full
                transform scale-x-0 origin-left
                group-hover:scale-x-100
                transition-transform duration-700 ease-out
                group-hover:shadow-[0_0_10px_2px_#a3e635]
              '
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
