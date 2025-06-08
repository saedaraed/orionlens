"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  // أيقونة الإغلاق (close)
  const CloseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
<nav className="absolute top-0 left-0 w-full z-50 text-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* اليسار: اللوجو + اختيار اللغة */}
        <div className="flex items-center space-x-6">
          <div className="text-[25px] font-bold cursor-pointer select-none text-heading">
         <Link href="/"> Orion <span className="text-white">Lens</span></Link>  
          </div>

          {/* اختيار اللغة */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 bg-transparent text-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.5C0 6.61594 0.35119 5.7681 0.976311 5.14298C1.60143 4.51786 2.44928 4.16667 3.33333 4.16667H26.6667C27.5507 4.16667 28.3986 4.51786 29.0237 5.14298C29.6488 5.7681 30 6.61594 30 7.5V10.8333H0V7.5Z"
                  fill="#FFCD05"
                />
                <path d="M0 18.3333H30V10.8333H0V18.3333Z" fill="#ED1F24" />
                <path
                  d="M26.6667 25.8333H3.33333C2.44928 25.8333 1.60143 25.4821 0.976311 24.857C0.35119 24.2319 0 23.3841 0 22.5L0 18.3333H30V22.5C30 23.3841 29.6488 24.2319 29.0237 24.857C28.3986 25.4821 27.5507 25.8333 26.6667 25.8333Z"
                  fill="#141414"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute bg-white text-black mt-2 p-2 rounded shadow-md">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 7.5C0 6.61594 0.35119 5.7681 0.976311 5.14298C1.60143 4.51786 2.44928 4.16667 3.33333 4.16667H26.6667C27.5507 4.16667 28.3986 4.51786 29.0237 5.14298C29.6488 5.7681 30 6.61594 30 7.5V10.8333H0V7.5Z"
                      fill="#FFCD05"
                    />
                    <path d="M0 18.3333H30V10.8333H0V18.3333Z" fill="#ED1F24" />
                    <path
                      d="M26.6667 25.8333H3.33333C2.44928 25.8333 1.60143 25.4821 0.976311 24.857C0.35119 24.2319 0 23.3841 0 22.5L0 18.3333H30V22.5C30 23.3841 29.6488 24.2319 29.0237 24.857C28.3986 25.4821 27.5507 25.8333 26.6667 25.8333Z"
                      fill="#141414"
                    />
                  </svg>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer mt-1">
                  <svg
                    width="31"
                    height="23"
                    viewBox="0 0 31 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 3.49525V6.88889H4.84633L0 3.49525ZM4.01622 22.3889H11.1944V17.3626L4.01622 22.3889ZM19.8056 17.3634V22.3889H26.9829L19.8056 17.3634ZM0 15.5V18.8936L4.84806 15.5H0ZM26.9846 0H19.8056V5.02631L26.9846 0ZM31 18.8945V15.5H26.1511L31 18.8945ZM31 6.88889V3.49525L26.1528 6.88889H31ZM11.1944 0H4.01622L11.1944 5.02631V0Z"
                      fill="#00247D"
                    />
                    <path
                      d="M21.6484 15.5L30.0115 21.3564C30.4199 20.9357 30.7135 20.4171 30.864 19.8503L24.6511 15.5H21.6484ZM11.1945 15.5H9.35086L0.988615 21.3556C1.43725 21.8119 2.01248 22.1383 2.65745 22.2899L11.1945 16.312V15.5ZM19.8056 6.88889H21.6493L30.0115 1.03333C29.5552 0.570292 28.9767 0.2463 28.3435 0.0990276L19.8056 6.07686V6.88889ZM9.35086 6.88889L0.988615 1.03333C0.580408 1.45439 0.28665 1.97284 0.135254 2.53942L6.34817 6.88889H9.35086Z"
                      fill="#CF1B2B"
                    />
                    <path
                      d="M31 13.7778H18.0833V22.3889H19.8056V17.3634L26.9829 22.3889H27.5556C28.013 22.389 28.4659 22.2977 28.8876 22.1204C29.3094 21.9431 29.6914 21.6833 30.0114 21.3564L21.6483 15.5H24.651L30.8639 19.8503C30.944 19.5601 31 19.2596 31 18.9444V18.8945L26.1511 15.5H31V13.7778ZM0 13.7778V15.5H4.84806L0 18.8936V18.9444C0 19.8839 0.378028 20.7338 0.988556 21.3556L9.35081 15.5H11.1944V16.312L2.65739 22.289C2.91056 22.3493 3.17233 22.3889 3.44444 22.3889H4.01622L11.1944 17.3626V22.3889H12.9167V13.7778H0ZM31 3.44444C31.0005 2.54198 30.6453 1.67568 30.0114 1.03333L21.6492 6.88889H19.8056V6.07686L28.3435 0.0990279C28.0855 0.0357597 27.8211 0.00252999 27.5556 3.25825e-07H26.9846L19.8056 5.02631V3.25825e-07H18.0833V8.61111H31V6.88889H26.1528L31 3.49525V3.44444ZM11.1944 3.25825e-07V5.02631L4.01622 3.25825e-07H3.44444C2.98687 -0.000199065 2.53388 0.0911171 2.11211 0.268576C1.69035 0.446036 1.30834 0.706054 0.988556 1.03333L9.35081 6.88889H6.34811L0.135194 2.53942C0.0497552 2.83367 0.00428266 3.13807 0 3.44444L0 3.49525L4.84633 6.88889H0V8.61111H12.9167V3.25825e-07H11.1944Z"
                      fill="#EEEEEE"
                    />
                    <path
                      d="M18.0833 8.61111V0H12.9167V8.61111H0V13.7778H12.9167V22.3889H18.0833V13.7778H31V8.61111H18.0833Z"
                      fill="#CF1B2B"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <LanguageSwitcher/>
        </div>

        {/* اليمين: قائمة التنقل */}
        <ul className="hidden md:flex gap-6 text-white/80 text-[16px] text-cairo">
          <li>
            <a href="/">Home</a>
          </li>
           <li>
            <a href="#trust">Why Trust Us</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
         
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* زر الهامبرغر للهاتف */}
        <button
          className="md:hidden p-2 rounded-md "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? CloseIcon : MenuIcon}
        </button>
      </div>

      {/* قائمة الهاتف */}
      {/* {isOpen && ( */}
      <div
        className={`fixed top-0 left-0 z-60 w-[50%] h-screen bg-black p-4 transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="text-[25px] font-bold cursor-pointer select-none text-heading">
          Orion <span className="text-white">Lens</span>
        </div>
        <ul className="md:hidden px-4 pb-4 space-y-4 font-medium shadow-inner  text-cairo mt-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Why Trust Us</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>

      {/* )} */}
    </nav>
  );
};

export default Navbar;
