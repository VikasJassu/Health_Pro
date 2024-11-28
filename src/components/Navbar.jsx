import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ivfLogo.svg";
import MenuIcon from "../assets/hamburger.svg";
import { FaArrowRight } from "react-icons/fa";
import { CiBurger } from "react-icons/ci";

const linkCSS =
  "hover:text-[#F48265] transition font-poppins font-medium text-[#1E231E]";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed z-10 w-screen">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="IVF Logo" className="h-8" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={linkCSS}>
            Donor Programme
          </Link>
          <Link to="/" className={linkCSS}>
            Fertility Preservation
          </Link>
          <Link to="/" className={linkCSS}>
            Advanced Treatments
          </Link>
          <Link to="/" className={linkCSS}>
            Infertility Treatments
          </Link>
          <Link to="/" className={linkCSS}>
            IVF Testing
          </Link>
          <Link to="/" className={linkCSS}>
            About Us
          </Link>
        </div>

        <div>
          <Link
            to="/"
            className="bg-[#D75555] text-white px-5 py-2 rounded-md hover:bg-red-600 transition font-medium font-poppins sm:flex items-center gap-2 hidden"
          >
            <p>Talk to Us</p>
            <div className="text-sm">
              <FaArrowRight />
            </div>
          </Link>
          <img src={MenuIcon} className="sm:hidden w-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
