/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import gsap from "gsap";

import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 ">
        <nav
          className={`py-4 md:px-12 px-4 bg-[] ${
            isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
          }`}
        >
          <div className="flex items-center justify-between  ">
            <div className="text-white font-bold text-lg cursor-pointer">
              <img
                src="https://t4.ftcdn.net/jpg/03/75/38/73/360_F_375387396_wSJM4Zm0kIRoG7Ej8rmkXot9gN69H4u4.jpg"
                alt=""
                className="h-10 w-[90px] cursor-pointer"
              />
            </div>

            {/* for larger device */}
            <div className="lg:flex items-center gap-3 hidden text-body bg-[#E0F4FF] rounded-2xl ">
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="home"
                className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
              >
                Home
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="skills"
                className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
              >
                Skills
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="about"
                className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
              >
                About me
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="portfolio"
                className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
              >
                Portfolio
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="testimonials"
                className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
              >
                Testimonials
              </Link>
            </div>

            {/* contact me btn */}
            <div className="lg:block hidden">
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="contact"
                className="px-4 py-2 cursor-pointer bg-transparent border mr-[22px] border-primary text-primary rounded hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* btn for small devices */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-body text-3xl"
            >
              <HiMenu />
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="mt-4 bg-body p-4 rounded-lg text-white ">
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="home"
                className="block hover:text-gray-400 py-2"
              >
                Home
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="skills"
                className="block hover:text-gray-400 py-2"
              >
                Skills
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="about"
                className="block hover:text-gray-400 py-2"
              >
                About me
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="portfolio"
                className="block hover:text-gray-400 py-2"
              >
                Portfolio
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                to="testimonials"
                className="block hover:text-gray-400 py-2"
              >
                Testimonials
              </Link>
            </div>
          )}
        </nav>
        <div className="lg:block hidden absolute top-[20px] right-4 ">
          <button>
            <MdDarkMode size={30} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
