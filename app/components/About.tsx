const About =()=>{
    return(
         <section className=" container mx-auto px-4 relative z-10  flex flex-col md:flex-row items-center justify-between mt-[100px]">
        {/* الصورة */}
        <div className="w-full md:w-1/2">
          <img
            src="assets/about.png"
            alt="صورة"
            className="w-full h-full object-cover"
          />
        </div>

        {/* المحتوى */}
        <div className="w-full md:w-1/2 p-6 text-left font-cairo ">
          <div >
            <span className="text-heading">ABOUT US</span>
            <h2 className="text-[48px] font-bold text-white">
              WHO ARE <span className="text-heading">WE </span>?{" "}
            </h2>
            <div className="border border-heading w-[125px] h-[4px] bg-heading"></div>
          </div>
          <p className="text-white/80 text-[20px] mt-[40px]">
            The name "OrienLens" combines "Oriens" – the Latin word for "rising"
            or "east" – with "Lens," symbolizing our ability to capture and
            focus on what truly matters in the digital landscape.
          </p>
          <br />{" "}
          <p className="text-white/80 text-[20px] italic">
            We don't just code — we tell digital stories.
          </p>{" "}
          <br />
          <p className="text-white/80 text-[20px]">
            Our approach blends technical expertise with artistic vision,
            creating digital experiences that not only function flawlessly but
            also resonate emotionally with users.
          </p>
        </div>
      </section>
    )
}
export default About;