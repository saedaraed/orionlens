const Footer:React.FC =()=>{
    return(
          <footer className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a
              href="/"
              className="flex items-center space-x-3 "
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                <span className="text-[#2076F6]">Orion</span>Lens
              </span>
            </a>

             
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#2076F6] transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#2076F6] transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#2076F6] transition-colors cursor-pointer"
              >
                Services
              </a>
                <a
                href="#"
                className="text-gray-400 hover:text-[#2076F6] transition-colors cursor-pointer"
              >
                Why Trust Us
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#2076F6] transition-colors cursor-pointer"
              >
             Portfolio
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-[#2076F6] transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
          <hr className="border-gray-800 my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2025 OrienLens. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-[#2076F6] transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#2076F6] transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
            
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;