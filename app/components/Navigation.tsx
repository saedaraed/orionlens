// app/navigation.tsx (Client Component)
"use client"; // Mark this as a client component

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname(); // Client-side hook

  return (
    <div className="navbar relative z-10 flex items-center justify-between container mx-auto px-4 h-[60px]  ">
            <h1 className="text-2xl font-bold text-white">SAEDA </h1>

    <nav>
      <ul className="flex space-x-4 text-[17px] text-white">
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "active" : ""}>
        <Link href="/about">About</Link>
        </li>
        <li className={pathname === "/portfolio" ? "active" : ""}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <button className="border border-white text-white px-4 py-2">
              Get in Touch
            </button>
    </div>
  );
}
