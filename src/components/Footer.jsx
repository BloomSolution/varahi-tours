import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-5 px-6 md:px-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Company Info */}
        <div>
          <div className="w-75 h-30 flex justify-center items-center ">
            <img src="logo2.png" alt="" className=" w-80" />
          </div>
          <p className="font-['Dancing_Script'] text-xl pt-5">
            Your trusted partner for premium vehicle rentals with comfort,
            safety, and reliability.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className=" text-2xl font-semibold mb-4 font-['Dancing_Script'] text-[#cda45e]">
            Contact Us
          </h3>
          <ul className="space-y-2 font-['Abril_Fatface'] text-lg">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> +919845774497,
              9342508635
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <a
                href="mailto:varahitours9@gmail.com"
                className="hover:underline"
              >
                varahitours9@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" /> Bangalore, India
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className=" text-2xl font-semibold mb-4 font-['Dancing_Script'] text-[#cda45e]">
            Quick Links
          </h3>
          <ul className="space-y-2 font-['Abril_Fatface']text-lg">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/termsconditions" className="hover:text-yellow-400">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 font-['Dancing_Script'] text-[#cda45e]">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61578841295978"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/varahi_tours/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCtVo4LR2lC-UNj6WFRnnkKw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6 font-['Dancing_Script']">
        &copy; {new Date().getFullYear()} Force Urbania. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
