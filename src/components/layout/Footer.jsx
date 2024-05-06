import React from "react";
import { Link } from "react-router-dom";
import { BsTwitterX, BsTelegram } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#222831] w-full px-16 py-4 flex items-center justify-between font-semibold bottom-0 relative">
      <p className="text-[#ffffff] w-1/3">&copy; 2024 Urban Hive</p>
      <div className="social-media-links flex items-center justify-center gap-10 w-1/3">
        <Link>
          <BsTwitterX className="text-[#c3c9c9] hover:text-[#ffffff] transition duration-300 transform hover:scale-125" />
        </Link>
        <Link>
          <AiFillInstagram className="text-[#c3c9c9] text-xl hover:text-[#ffffff] transition duration-300 transform hover:scale-125" />
        </Link>
        <Link>
          <FaFacebookSquare className="text-[#c3c9c9] text-lg hover:text-[#ffffff] transition duration-300 transform hover:scale-125" />
        </Link>
        <Link>
          <BsTelegram className="text-[#c3c9c9] text-lg hover:text-[#ffffff] transition duration-300 transform hover:scale-125" />
        </Link>
        <Link>
          <AiFillYoutube className="text-[#c3c9c9] text-2xl hover:text-[#ffffff] transition duration-300 transform hover:scale-125" />
        </Link>
      </div>
      <div className="footer-links text-[#c3c9c9] flex items-center justify-end gap-5 w-1/3">
        <Link
          to="/about-us"
          className="hover:text-[#ffffff] transition duration-300">
          About Us
        </Link>
        <Link
          to="/contact-us"
          className="hover:text-[#ffffff] transition duration-300">
          Contact Us
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
