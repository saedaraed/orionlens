import Link from "next/link";
import Button from "./Button";

// components/FooterWithContact.jsx
export default function FooterWithContact() {
  return (
    <footer className="relative bg-black text-white mt-[100px] z-100 ">
      {/* Contact Section (Overlapping) */}
      <div className=" w-full flex justify-center mb-[-200px]">
        <div className="container mx-auto flex flex-col md:flex-row  shadow-2xl rounded-lg overflow-hidden">
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2 p-8  text-black font-cairo ">
            <div className="mb-8">
              <span className="text-heading">CONTACT</span>
              <h2 className="text-[48px] font-bold text-white">
                GET IN <span className="text-heading">TOUCH </span>{" "}
              </h2>
              <div className="border border-heading w-[125px] h-[4px] bg-heading"></div>
            </div>{" "}
            <p className="flex gap-4 mb-6 text-[20px] text-white/80">
              <svg
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5 9C24.25 9 23.1875 8.5625 22.3125 7.6875C21.4375 6.8125 21 5.75 21 4.5C21 3.25 21.4375 2.1875 22.3125 1.3125C23.1875 0.4375 24.25 0 25.5 0C26.75 0 27.8125 0.4375 28.6875 1.3125C29.5625 2.1875 30 3.25 30 4.5C30 5.75 29.5625 6.8125 28.6875 7.6875C27.8125 8.5625 26.75 9 25.5 9ZM3 27C2.175 27 1.46875 26.7063 0.88125 26.1188C0.29375 25.5313 0 24.825 0 24V6C0 5.175 0.29375 4.46875 0.88125 3.88125C1.46875 3.29375 2.175 3 3 3H18.15C18.05 3.5 18 4 18 4.5C18 5 18.05 5.5 18.15 6C18.325 6.8 18.6125 7.54375 19.0125 8.23125C19.4125 8.91875 19.9 9.525 20.475 10.05L15 13.5L3 6V9L15 16.5L22.9125 11.55C23.3375 11.7 23.7625 11.8125 24.1875 11.8875C24.6125 11.9625 25.05 12 25.5 12C26.3 12 27.0875 11.875 27.8625 11.625C28.6375 11.375 29.35 11 30 10.5V24C30 24.825 29.7063 25.5313 29.1188 26.1188C28.5313 26.7063 27.825 27 27 27H3Z"
                  fill="#570909"
                />
              </svg>
              orionlens@info.com
            </p>
            <p className="flex gap-4 mb-6 text-[20px] text-white/80"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 25.3801V29.8801C33.0017 30.2979 32.9161 30.7114 32.7488 31.0942C32.5814 31.4769 32.3359 31.8205 32.0281 32.1029C31.7203 32.3854 31.3569 32.6004 30.9611 32.7342C30.5654 32.868 30.1461 32.9177 29.73 32.8801C25.1142 32.3786 20.6805 30.8014 16.785 28.2751C13.1607 25.9721 10.088 22.8994 7.785 19.2751C5.24997 15.362 3.67236 10.9066 3.18 6.27015C3.14251 5.85535 3.19181 5.43729 3.32475 5.04258C3.45769 4.64788 3.67136 4.28518 3.95215 3.97758C4.23294 3.66997 4.57471 3.42421 4.95569 3.25593C5.33666 3.08765 5.74851 3.00054 6.165 3.00015H10.665C11.393 2.99298 12.0987 3.25076 12.6506 3.72544C13.2026 4.20013 13.5631 4.85932 13.665 5.58015C13.8549 7.02025 14.2072 8.43424 14.715 9.79515C14.9168 10.332 14.9605 10.9155 14.8409 11.4765C14.7212 12.0374 14.4433 12.5523 14.04 12.9601L12.135 14.8651C14.2703 18.6205 17.3797 21.7298 21.135 23.8651L23.04 21.9601C23.4478 21.5569 23.9627 21.2789 24.5237 21.1593C25.0846 21.0397 25.6681 21.0833 26.205 21.2851C27.5659 21.793 28.9799 22.1452 30.42 22.3351C31.1486 22.4379 31.8141 22.805 32.2898 23.3664C32.7655 23.9278 33.0183 24.6445 33 25.3801Z" stroke="#570909" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 +123 456 789</p>
            <p className="flex gap-4 mb-6 text-[20px] text-white/80">
              {" "}
             <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 33C17.65 33 17.35 32.9 17.1 32.7C16.85 32.5 16.6625 32.2375 16.5375 31.9125C16.0625 30.5125 15.4625 29.2 14.7375 27.975C14.0375 26.75 13.05 25.3125 11.775 23.6625C10.5 22.0125 9.4625 20.4375 8.6625 18.9375C7.8875 17.4375 7.5 15.625 7.5 13.5C7.5 10.575 8.5125 8.1 10.5375 6.075C12.5875 4.025 15.075 3 18 3C20.925 3 23.4 4.025 25.425 6.075C27.475 8.1 28.5 10.575 28.5 13.5C28.5 15.775 28.0625 17.675 27.1875 19.2C26.3375 20.7 25.35 22.1875 24.225 23.6625C22.875 25.4625 21.85 26.9625 21.15 28.1625C20.475 29.3375 19.9125 30.5875 19.4625 31.9125C19.3375 32.2625 19.1375 32.5375 18.8625 32.7375C18.6125 32.9125 18.325 33 18 33ZM18 17.25C19.05 17.25 19.9375 16.8875 20.6625 16.1625C21.3875 15.4375 21.75 14.55 21.75 13.5C21.75 12.45 21.3875 11.5625 20.6625 10.8375C19.9375 10.1125 19.05 9.75 18 9.75C16.95 9.75 16.0625 10.1125 15.3375 10.8375C14.6125 11.5625 14.25 12.45 14.25 13.5C14.25 14.55 14.6125 15.4375 15.3375 16.1625C16.0625 16.8875 16.95 17.25 18 17.25Z" fill="#570909"/>
</svg>
 Heidelberg, Deutschland
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2 p-8 bg-black shadow-white-soft text-white m-4 h-[553px]">
            <h3 className="text-[20px]">Say Something</h3>
            <form className="space-y-6 pt-[20px]">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-[63px] bg-transparent border px-4 border-[#1A1A1A] focus:outline-none py-2 placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-[63px] bg-transparent border px-4 border-[#1A1A1A] focus:outline-none py-2 placeholder-gray-400"
              />
              <textarea
                placeholder="Your Message"
                className="w-full h-[142px] bg-transparent border px-4 border-[#1A1A1A] focus:outline-none py-2 placeholder-gray-400"
              />

              <Button name="send" />
            </form>
          </div>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className=" mx-auto px-6 pt-10 pb-10 bg-[#1A1A1A] mt-6">
        <div className=" container mx-auto">
          <h2 className="text-[25px] font-bold mb-2 text-[#570909] font-cairo">
            Orion <span className="text-white">Lens</span>
          </h2>
          <p className="text-white/80 text-[20px] w-[40%] font-cairo">
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain...
          </p>
        </div>
        <div className="container mx-auto  mt-[100px]">
          {/* Site Links */}
          <div>
            <ul className="flex justify-center gap-10 text-white/80">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Why Trust Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="flex justify-between items-center container mx-auto py-6 text-center font-cairo text-sm text-white/80">
        <p> © 2025 orionlens. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.04586 24L6 13.5H0V9H6V6C6 1.9512 9.34302 0 14.1588 0C16.4655 0 18.4481 0.128805 19.0259 0.186375V4.4176L15.6859 4.41874C13.0669 4.41874 12.5597 5.35215 12.5597 6.72186V9H20L18 13.5H12.5597V24H6.04586Z"
                fill="#DFC57B"
              />
            </svg>
          </Link>
          <Link href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2169 7.27882C19.0121 7.27882 19.6568 6.63413 19.6568 5.83887C19.6568 5.04361 19.0121 4.39893 18.2169 4.39893C17.4216 4.39893 16.7769 5.04361 16.7769 5.83887C16.7769 6.63413 17.4216 7.27882 18.2169 7.27882Z"
                fill="#DFC57B"
              />
              <path
                d="M11.9997 6C15.3085 6.00012 17.9997 8.6912 17.9997 12C17.9996 15.3087 15.3084 17.9999 11.9997 18C8.69089 18 5.99982 15.3088 5.99969 12C5.99969 8.69112 8.69082 6 11.9997 6ZM11.9997 9C10.3454 9 8.99986 10.3457 8.99969 12C8.99969 13.6544 10.3453 15 11.9997 15C13.654 14.9999 14.9997 13.6544 14.9997 12C14.9995 10.3458 13.6539 9.00013 11.9997 9Z"
                fill="#DFC57B"
              />
              <path
                d="M17.999 0.000976562C21.0829 0.000976562 23.999 2.91709 23.999 6.00098V18C23.999 21.0839 21.0829 24 17.999 24H6C2.91612 24 0 21.0839 0 18V6.00098C0 2.91709 2.91612 0.000976562 6 0.000976562H17.999ZM6 3C4.59765 3 3.00023 4.59763 3 6V18C3.00011 19.4294 4.5706 21 6 21H17.999C19.4014 21 20.9989 19.4024 20.999 18V6C20.9988 4.59763 19.4014 3 17.999 3H6Z"
                fill="#DFC57B"
              />
            </svg>
          </Link>
          <Link href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.999 2.76923C23.099 3.32308 22.199 3.50769 21.149 3.69231C22.199 2.95385 22.949 1.84615 23.249 0.369231C22.349 1.10769 21.299 1.47692 20.099 1.84615C19.199 0.738462 17.849 0 16.499 0C13.949 0 11.699 2.76923 11.699 6.09231C11.699 6.64615 11.699 7.01538 11.849 7.38462C7.79902 7.2 4.04902 4.8 1.64902 1.10769C1.19902 2.03077 1.04902 2.95385 1.04902 4.24615C1.04902 6.27692 1.94902 8.12308 3.29902 9.23077C2.54902 9.23077 1.79902 8.86154 1.04902 8.49231V8.49231C1.04902 11.4462 2.69902 13.8462 4.94902 14.4C4.49902 14.5846 4.04902 14.5846 3.59902 14.5846C3.29902 14.5846 2.99902 14.5846 2.69902 14.4C3.29902 16.8 5.09902 18.6462 7.34902 18.6462C5.69902 20.3077 3.59902 21.2308 1.19902 21.2308C0.749024 21.2308 0.449023 21.2308 -0.000976562 21.2308C2.24902 22.8923 4.79902 24 7.49902 24C16.499 24 21.449 14.7692 21.449 6.83077C21.449 6.64615 21.449 6.27692 21.449 6.09231C22.499 5.16923 23.399 4.06154 23.999 2.76923Z"
                fill="#DFC57B"
              />
            </svg>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="">Privacy Policy</Link>
          <Link href="">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
