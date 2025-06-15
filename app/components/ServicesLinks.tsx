"use client"
 import Link from "next/link";
import { usePathname } from "next/navigation";
 const links=[
        { name: "Google Business View", href: "/services/google-business" },
        { name: "3D Virtual Tour", href: "/services/3d-virtual-tour" },
        { name: "IT Dienstleistungen", href: "/services/it-services" },
        { name: "Drohne Aufnahme", href: "/services/drone-shot" },
        { name: "Graphik Design", href: "/services/graphic-design" },
      ]
const ServicesLinks=()=>{
      const pathname = usePathname(); 
    
    return(
       <div className="bg-secondaryColor w-full mt-10">
      {links.map((link, i) => {
const isActive = pathname.includes(link.href);

        return (
          <div
            key={i}
            className={`py-4 px-4 text-[20px] hover:bg-heading ${
              isActive ? "bg-heading text-white font-bold" : ""
            }`}
          >
            <Link href={link.href}>{link.name}</Link>
          </div>
        );
      })}
    </div>
      
    )
}

export default ServicesLinks