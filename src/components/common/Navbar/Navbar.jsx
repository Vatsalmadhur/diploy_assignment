import React, { useState } from "react";
import { navLinks } from "../../../data";
import { ButtonV2 } from "../Button/ButtonV2";
import { useGSAP } from "@gsap/react";
import {gsap} from 'gsap'

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useGSAP(()=>{
    gsap.from('#link',{stagger:0.1,y:-20,opacity:0})
  })

  return (
    <nav className="bg-white shadow-md greenBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-14 w-auto"
                src="/assets/logo.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {/* <img src="assets/MenuIcon.svg" alt="icon" /> */}
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className={`${isMobileMenuOpen ? "block" : "hidden"} absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
            <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div  className="p-5 flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-lg font-medium text-gray-900 hover:text-gray-700 "
                  >
                    {link.label}
                  </a>
                ))}
                <ButtonV2 content="Sign-up" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-10">
            <div className="flex space-x-4">
              {navLinks.map((link, index) => (
                <a
                id="link"
                  key={index}
                  href={link.href}
                  className="text-lg font-medium text-gray-900 hover:text-indigo-600 opacity-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ButtonV2 content="Sign-up" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
