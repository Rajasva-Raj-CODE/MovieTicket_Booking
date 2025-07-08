import React from "react";
import { assets } from "../assets/assets";
import { LucidePhone, LucideMail, LucideMapPin, LucideFacebook, LucideTwitter, LucideInstagram } from "lucide-react";
const Footer = () => {
  return (
    <footer className=" px-4 md:px-16 lg:px-36 pt-16 pb-8 w-full text-gray-300 mt-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between w-full gap-12 border-b border-gray-700 pb-12">
        {/* Brand & App Info */}
        <div className="md:max-w-xs w-full flex flex-col items-start">
          <img className="w-40 h-auto mb-4" src={assets.logo} alt="logo" />
          <p className="mb-6 text-sm leading-relaxed">
            <span className="font-semibold text-lg text-white">Movie Ticket Booking App</span> is your one-stop solution for booking movie tickets online. Discover the latest movies, check showtimes, reserve your seats, and enjoy exclusive offers. Fast, secure, and user-friendly experience for all movie lovers!
          </p>
          <div className="flex items-center gap-3 mt-2">
            <img
              src={assets.appStore}
              alt="App Store"
              className="h-9 w-auto hover:scale-105 transition-transform"
            />
            <img
              src={assets.googlePlay}
              alt="Google Play"
              className="h-9 w-auto hover:scale-105 transition-transform"
            />
          </div>
        </div>
        {/* Navigation & Info */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 w-full mt-10 md:mt-0">
          {/* Company */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className=" rounded-lg p-6 shadow-md ">
            <h2 className="font-semibold mb-4 text-white">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline text-gray-200 hover:text-blue-400">Upcoming Movies</a></li>
              <li><a href="#" className="hover:underline text-gray-200 hover:text-blue-400">Now Showing</a></li>
              <li><a href="#" className="hover:underline text-gray-200 hover:text-blue-400">Book Tickets</a></li>
              <li><a href="#" className="hover:underline text-gray-200 hover:text-blue-400">Offers & Discounts</a></li>
              <li><a href="#" className="hover:underline text-gray-200 hover:text-blue-400">FAQs</a></li>
            </ul>
          </div>
          {/* Contact & Social */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Get in Touch</h2>
            <div className="text-sm space-y-2 mb-4">
              <p className="flex items-center gap-2"><LucidePhone className="w-5 h-5 text-blue-400" />+1-234-567-890</p>
              <p className="flex items-center gap-2"><LucideMail className="w-5 h-5 text-blue-400" />contact@example.com</p>
              <p className="flex items-center gap-2"><LucideMapPin className="w-5 h-5 text-blue-400" />123 Movie St, Film City, USA</p>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook"><LucideFacebook className="w-5 h-5 text-gray-400 hover:text-blue-500" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter"><LucideTwitter className="w-5 h-5 text-gray-400 hover:text-blue-400" /></a>
              <a href="#" className="hover:text-pink-500 transition-colors" aria-label="Instagram"><LucideInstagram className="w-5 h-5 text-gray-400 hover:text-pink-500" /></a>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-8 text-center text-xs md:text-sm pb-2 text-gray-400">
        Copyright {new Date().getFullYear()} ©{' '}
        <a
          href="https://rajasva.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Rajasva Raj
        </a>{' '}
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
