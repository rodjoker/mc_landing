const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">WIMMERFILMS</h3>
            <div className="flex flex-col space-y-2">
              <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              <a href="/work" className="text-gray-400 hover:text-white">Our Work</a>
              <a href="/services" className="text-gray-400 hover:text-white">Services</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:contact@wimmerfilms.com" className="text-gray-400 hover:text-white">Email</a>
              <a href="tel:+1234567890" className="text-gray-400 hover:text-white">Phone</a>
              <a href="/location" className="text-gray-400 hover:text-white">Location</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">SOCIAL</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Vimeo</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">LEGAL</h3>
            <div className="flex flex-col space-y-2">
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} WIMMERFILMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
