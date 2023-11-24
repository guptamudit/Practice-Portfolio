import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa";

import mlogo from "../assets/mlogo.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-bgShade py-28 md:px-12 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
        <a href="/">
          <img className="h-[80px]" src={mlogo} alt="" />
        </a>
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap">
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            to="home"
            className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
          >
            Home
          </Link>
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            to="portfolio"
            className="block cursor-pointer hover:text-gray-400 py-2 px-4"
          >
            Portfolio
          </Link>
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            to="about"
            className="block cursor-pointer hover:text-gray-400 py-2 px-4"
          >
            About Me
          </Link>
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            to="testimonials"
            className="block cursor-pointer hover:text-gray-400 py-2 px-4"
          >
            Testimonials
          </Link>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <a href="https://www.instagram.com/mu.di_1/">
            <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
          <a href="https://twitter.com/Mgupta_17">
            <FaTwitter className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/mudit-gupta-830720227/">
            <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
        </div>
      </div>
      <hr />
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
        <p className="flex flex-row items-center gap-2">
          copyright,
          <FaRegCopyright />
          2023, Mudit Gupta, All Rights Reserved
        </p>
        <div className="space-x-6">
          <a href="/" className="hover:text-slate-400">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-slate-400">
            Terms of Service
          </a>
          <a href="/" className="hover:text-slate-400">
            Cookies Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
