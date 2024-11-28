import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Drawer.css";

function Drawer({ isOpen, setIsOpen }) {
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-72 bg-white font-poppins font-medium text-gray-800 shadow-xl z-50 drawer-transition ${
          isOpen ? "drawer-open" : "drawer-closed"
        }`}
      >
        <div className="flex justify-end p-4">
          <FaTimes
            size={24}
            onClick={toggleDrawer}
            className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300"
          />
        </div>
        <div className="flex flex-col py-8 space-y-6 p-6">
          <Link className="text-xl hover:text-[#D75555] transition duration-300">
            Donor Programme
          </Link>
          <Link className="text-xl hover:text-[#D75555] transition duration-300">
            Fertility Preservation
          </Link>
          <Link className="text-xl hover:text-[#D75555] transition duration-300">
            Advanced Treatments
          </Link>
          <Link className="text-xl hover:text-[#D75555] transition duration-300">
            Infertility Treatments
          </Link>
          <Link className="text-xl hover:text-[#D75555] transition duration-300">
            IVF Testing
          </Link>
          <Link className="text-xl hover:text-[#D75555] transition duration-300">
            About Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Drawer;
