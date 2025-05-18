const Navigation = () => {
  return (
    <>
      <nav className=" fixed w-full z-20 top-6 start-0">
        <div className="container mx-auto bg-white/10 px-4 py-2 flex items-center justify-center rounded-full">
          {/* Centered content wrapper */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            {/* Logo and brand */}
            <a
              href="/"
              className="flex items-center space-x-3 "
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                <span className="text-[#2076F6]">Orion</span>Lens
              </span>
            </a>

            {/* Buttons */}
            <div className="flex md:order-2 space-x-3 md:space-x-0">
              {/* <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button> */}
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
            <img style={{width:"20px"}} src="/germany-flag.svg" alt="" />
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <div
              className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8  md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <a
                    href="#home"
                    className="block py-2 px-3 text-white text-light md:bg-transparent md:text-[#2076F6] md:p-0 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block transition-colors duration-300 py-2 px-3 text-white md:bg-transparent md:text-white md:p-0 "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                  href="#services"
                    className="block py-2 px-3 text-white md:bg-transparent md:text-white md:p-0 "
                  >
                    Services
                  </a>
                </li>
                 <li>
                  <a
                    href="#trust"
                    className="block py-2 px-3 text-white md:bg-transparent md:text-white md:p-0 "
                  >
                 Why Trust Us
                  </a>
                </li>
                 <li>
                  <a
                    href="#works"
                    className="block py-2 px-3 text-white md:bg-transparent md:text-white md:p-0 "
                  >
                 Portfolio
                  </a>
                </li>
                
                <li>
                  
                  <a
                    href="#contact"
                    className="block py-2 px-3 text-white md:bg-transparent md:text-white md:p-0 "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
