const Header = () => {
  return (
    <header className="bg-black text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            Marco Castillo
          </div>
          <div className="flex space-x-8 items-center">
            <a href="/proyectos" className="hover:text-gray-300 transition-colors">PROYECTOS</a>
            <a href="/empleo" className="hover:text-gray-300 transition-colors">EMPLEO</a>
            <a href="/contacto" className="hover:text-gray-300 transition-colors">CONTACTO</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              
            </a>
            <a href="mailto:contact@wimmerfilms.com">
              
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
