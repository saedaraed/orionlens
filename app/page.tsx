"use client"; 
import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection'
import './globals.css';
export default function Home() {
  // const [showContent, setShowContent] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowContent(true);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []); 

  return (
    <div className='relative'>
    {/* {!showContent?(      <div className="flex bg-red-500  h-screen w-full overflow-hidden" >
      <div className="one w-full  bg-black animate-slideDown delay-100"></div>
      <div className="two w-full bg-black animate-slideUp delay-300"></div>
      <div className="three w-full bg-black animate-slideDown delay-500"></div>
      <div className="four w-full  bg-black animate-slideUp delay-700"></div>
      <div className="five w-full bg-black animate-slideDown delay-900"></div>
      <div className="six w-full  bg-black animate-slideUp delay-1100"></div>
    </div>):
      (  <div className="font-[family-name:var(--font-geist-sans)]">
        <HeroSection/>
  </div>)} */}
  <HeroSection/>
  </div>
  );
  
}