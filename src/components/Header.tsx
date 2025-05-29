function Header() {
  const navItems = ['Home', 'Services', 'Contact Us'];

  return (
    <div className='flex justify-center pb-8 font-bold text-3xl text-[#503d74] space-x-8'>
      {navItems.map((item) => (
        <div
          key={item}
          className='relative group cursor-pointer transition duration-300'
        >
          <span>{item}</span>
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
  );
}

export default Header;
