const Contact:React.FC =()=>{
    return(
     <section id="contact" className="py-24 relative">
        <div
          className="absolute inset-0 opacity-30"/>
        <div className="container mx-auto px-6 relative z-10">
        
            <h2 className=" nunito text-center text-[40px] text-[#2076F6] ">
       Contact – <span className="text-white">The Transmission Station</span>
      </h2>
          <p className="text-white/50 text-center font-light mb-12 ">
            Ready to create your next project? Let&apos;s meet at the point where art
            meets technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/[10%] p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-[25px]  mb-6">Send Us a Message</h3>
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border border-[#2076F6] border-opacity-30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2076F6] text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border border-[#2076F6] border-opacity-30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2076F6] text-white"
                    placeholder="Enter your email"
                  />
                </div>
            
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-transparent border border-[#2076F6] border-opacity-30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2076F6] text-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6  font-light py-4 bg-[#2076F6] text-white rounded-lg hover:bg-opacity-90 transition-all !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div>
              <div className="bg-white/[10%] p-8 rounded-xl mb-8 backdrop-blur-sm">
                <h3 className="text-[25px] mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#2076F6] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4 text-[#2076F6]"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-400">
                        123 Starlight Avenue, Galaxy Tower
                      </p>
                      <p className="text-gray-400">New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#2076F6] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 text-[#2076F6]"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-400">hello@orionlens.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#2076F6] bg-opacity-10 flex items-center justify-center mr-4 mt-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 text-[#2076F6]"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-400">+1 (000) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/[10%] p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-[25px] mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-16 h-16 rounded-full bg-[#2076F6] bg-opacity-10 flex items-center justify-center hover:bg-white hover:text-white transition-all cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="w-6 h-6 text-[#2076F6]"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                  </a>
                  <a
                    href="#"
                    className="w-16 h-16 rounded-full bg-[#2076F6] bg-opacity-10 flex items-center justify-center  hover:bg-white hover:text-white transition-all cursor-pointer"
                  >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6 text-[#2076F6]"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>                  </a>
                  <a
                    href="#"
                    className="w-16 h-16 rounded-full bg-[#2076F6] bg-opacity-10 flex items-center justify-center  hover:bg-white hover:text-white transition-all cursor-pointer"
                  >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6 text-[#2076F6]"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>                  </a>
                  <a
                    href="#"
                    className="w-16 h-16 rounded-full bg-[#2076F6] bg-opacity-10 flex items-center justify-center  hover:bg-white hover:text-white transition-all cursor-pointer"
                  >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-6 h-6 text-[#2076F6]"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact;