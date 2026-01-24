"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi";
import { MdCall, MdLocationPin, MdMailOutline } from "react-icons/md";
import localFont from "next/font/local";

// Fonts
const dancingScript = localFont({
  src: "../app/styles/fonts/DancingScript.ttf",
  variable: "--font-dancingscript",
});

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fceed5] pt-12 pb-6 mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content - Grid Layout */}
        <div className="justify-evenly grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center md:items-start justify-start">
            <div className="relative w-40 h-40">
              <Image
                src="/logo.png"
                alt="Matrika Angan Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Column 2: Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <h2
              className={`text-3xl font-bold mb-3 ${dancingScript.className}`}>
              Matrika Angan
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-xs mx-auto md:mx-0">
              Your destination for authentic Indian sarees. We bring you the
              finest collection of traditional and contemporary sarees from
              across India.
            </p>
            <div className="flex gap-4 mt-5 text-gray-700">
              <Link
                href="#"
                className="hover:text-black hover:scale-110 transition-transform">
                <FiInstagram size={22} />
              </Link>
              <Link
                href="#"
                className="hover:text-blue-600 hover:scale-110 transition-transform">
                <FiFacebook size={22} />
              </Link>
              <Link
                href="#"
                className="hover:text-red-600 hover:scale-110 transition-transform">
                <FiYoutube size={22} />
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-700">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black hover:underline underline-offset-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black hover:underline underline-offset-4">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="hover:text-black hover:underline underline-offset-4">
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-black hover:underline underline-offset-4">
                  Return & Exchange
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-black hover:underline underline-offset-4">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-700">
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <MdLocationPin size={18} className="mt-0.5 shrink-0" />
                <span>Virar, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MdCall size={18} className="shrink-0" />
                <a href="tel:+911234567890" className="hover:text-black">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MdMailOutline size={18} className="shrink-0" />
                <a
                  href="mailto:info@matrikaangan.com"
                  className="hover:text-black">
                  info@matrikaangan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-300/50 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Matrika Angan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
