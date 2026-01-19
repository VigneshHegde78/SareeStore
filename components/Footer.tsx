import Image from "next/image";
import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaYoutube,
} from "react-icons/fa6";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { ImInstagram } from "react-icons/im";
import { MdCall, MdLocationPin, MdMail, MdMailOutline } from "react-icons/md";
import localFont from "next/font/local";

const satisfy = localFont({
  src: "../app/styles/fonts/Satisfy-Regular.ttf",
  variable: "--font-satisfy",
  weight: "700",
  style: "normal",
});

const dancingScript = localFont({
  src: "../app/styles/fonts/DancingScript.ttf",
  variable: "--font-dancingscript",
});

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#fceed5",
        alignContent: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}>
      <div className="w-full flex justify-around font-semibold text-lg">
        <div className="w-1/4 items-center justify-center flex">
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
        </div>
        <div className="text-left w-1/4">
          <div className={`text-3xl py-1 ${dancingScript.className}`}>
            Matrika Angan
          </div>
          <span className="text-sm font-light text-wrap ">
            Your destination for authentic Indian sarees. We bring you the
            finest collection of traditional and contemporary sarees from across
            India.
          </span>
          <div className="flex space-x-2 mt-2">
            <FaInstagram />
            <FiFacebook />
            <FiYoutube />
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-1/4 text-left justify-center items-center">
          Quick Links
          <div className="text-sm font-light flex flex-col space-y-1 mt-1">
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Orders</span>
            <span>Return & Exchange</span>
            <span>FAQs</span>
          </div>
        </div>

        {/* Contact Us */}
        <div className=" w-1/4 text-left">
          Contact Us
          <div className="text-sm font-light flex flex-col space-y-1 mt-1">
            <span className="flex gap-1 items-center">
              <MdLocationPin /> Virar, Maharashtra
            </span>
            <span className="flex gap-1 items-center">
              <MdCall /> +91 12345 67890
            </span>
            <span className="flex gap-1 items-center">
              <MdMailOutline /> info@matrikaangan.com
            </span>
          </div>
        </div>
      </div>
      <div className="w-8/12 border-b my-3 pt-3" />
      &copy; 2026 Matrika Angan. All rights reserved.
    </footer>
  );
}

export default Footer;
