import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = ({ fixed }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {/*       <nav className="relative flex w-full flex-wrap items-center justify-between bg-black py-2 text-white shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-around px-3">
          <NavLink
            className=" text-xl text-white dark:text-neutral-200"
            to={'/'}
          >
            DOML
          </NavLink>
          <NavLink
            className=" text-base text-white dark:text-neutral-200"
            to={'/'}
          >
            Product
          </NavLink>
          <NavLink
            className=" text-base text-white dark:text-neutral-200"
            to={'/'}
          >
            Team
          </NavLink>
          <NavLink
            className=" text-base text-white dark:text-neutral-200"
            to={'/'}
          >
            Enterprise
          </NavLink>
          <NavLink
            className=" text-base text-white dark:text-neutral-200"
            to={'/'}
          >
            Marketplace
          </NavLink>
          <NavLink
            className=" text-base text-white dark:text-neutral-200"
            to={'/'}
          >
            Pricing
          </NavLink>
          <div className="ml-5 flex w-[30%] items-center justify-between">
            <input
              type="search"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
    
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div>
            <Link href="#_" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

<span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

<span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

<span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

<span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
<span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
<span class="relative">SIGN IN</span>
</Link>
            </div>
            <div className="md:ml-2">
            <Link href="#_" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

<span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

<span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

<span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

<span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
<span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
<span class="relative">SIGN UP</span>
</Link>
            </div>
          </div>
        </div>
      </nav> */}

      <nav className="bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <NavLink
                  to={'/'}
                  className="flex items-center py-5 px-2 text-white text-xl"
                >
                  <img src="./logo.png" className="h-6" />
                </NavLink>
              </div>

              {/* primary nav */}
              <div className="hidden lg:flex items-center space-x-1">
                <NavLink
                  to={'/'}
                  className="py-5 px-3 text-white hover:text-gray-500"
                >
                  Product
                </NavLink>
                <NavLink
                  to={'/users'}
                  className="py-5 px-3 text-white hover:text-gray-500"
                >
                  Team
                </NavLink>
                <NavLink
                  to={'/'}
                  className="py-5 px-3 text-white hover:text-gray-500"
                >
                  Enterprise
                </NavLink>
                <NavLink
                  to={'/'}
                  className="py-5 px-3 text-white hover:text-gray-500"
                >
                  Explore
                </NavLink>
                <NavLink
                  to={'/'}
                  className="py-5 px-3 text-white hover:text-gray-500"
                >
                  MarketPlace
                </NavLink>
                <NavLink
                  to={'/'}
                  className="py-5 px-3 text-white hover:text-gray-500"
                >
                  Pricing
                </NavLink>
                
              </div>
            </div>

            {/* secondary nav */}
            <div className="hidden lg:flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-4 bg-zinc-900 rounded-md w-full"
              />
              <button className="py-2 px-4 min-w-[100px] bg-gray-800 rounded-md hover:bg-gray-700">
                Sign In
              </button>
              <button className="py-2 px-4 min-w-[100px] bg-gray-800 rounded-md hover:bg-gray-700">
                Sign Up
              </button>
            </div>

            {/* mobile button goes here */}
            <div className="lg:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <input
              type="text"
              placeholder="Search"
              className="block py-2 px-4 bg-zinc-900 w-full"
            />
            <button className="block py-2 px-4 w-full  hover:bg-gray-700">
              Sign In
            </button>
            <button className="block py-2 px-4 w-full hover:bg-gray-700">
              Sign Up
            </button>
            <NavLink to={'/'} className="block py-2 px-4 text-sm hover:bg-gray-800">
              Product
            </NavLink>
            <NavLink to={'/users'} className="block py-2 px-4 text-sm hover:bg-gray-800">
              Team
            </NavLink>
            <NavLink to={'/'} className="block py-2 px-4 text-sm hover:bg-gray-800">
              Enterprise
            </NavLink>
            <NavLink to={'/'} className="block py-2 px-4 text-sm hover:bg-gray-800">
              Explore
            </NavLink>
            <NavLink to={'/'} className="block py-2 px-4 text-sm hover:bg-gray-800">
              Marketplace
            </NavLink>
            <NavLink to={'/'} className="block py-2 px-4 text-sm hover:bg-gray-800">
              Pricing
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
