// Navbar.js
import React from "react";
import { navLinks } from "../../../data";
import { ButtonV2 } from "../Button/ButtonV2";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md greenBg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-[70px] w-[150px]"
                src={"/assets/logo.png"}
                alt="Logo"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white
 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {/* Insert menu icon here */}
            </button>
          </div>
          <div className="hidden md:flex space-x-10">
            <div className="flex space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-lg font-medium text-white hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-white
 hover:text-gray-900"
            >
              Log in
            </a> */}
            <ButtonV2 content="Sign-up"  />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
