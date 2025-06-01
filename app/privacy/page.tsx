import FooterWithContact from "../components/Footer";
import Navbar from "../components/Navbar";

const Privacy = () => {
  return (
    <main className="font-cairo">
      <div className="bg-[#1A1A1A]">
        <Navbar />
        <div className="md:w-[60%] w-[80%] mx-auto py-10">
          <h2 className="text-[48px] font-bold text-white">
            Privacy <span className="text-heading">Policy</span>{" "}
          </h2>
          <p className="text-[20px] text-white/80">
            This Legal Policy outlines the rights, responsibilities, and legal
            limitations related to the use of this website and its content. By
            accessing our platform, you agree to the legal terms stated here,
            which are designed to protect both the user and the site owner.
          </p>
        </div>
      </div>
      <div className="md:w-[60%] w-[80%] mx-auto py-10">
        <div className="mb-6">
          <h3 className="text-[25px] font-medium mb-2">Intellectual Property</h3>
          <p className="text-[20px] text-white/80">
            All materials published on this site, including text, images, and
            designs, are protected under copyright laws. No part may be copied,
            reproduced, or redistributed without prior written permission.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-[25px] font-medium mb-2">Disclaimer</h3>
          <ul className="text-[20px] text-white/80">
            <li>
              The website and its content are provided "as is" without any
              warranties, express or implied.
            </li>
            <li>
              We are not liable for any damages resulting from the use of the
              website or products displayed.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-[25px] font-medium mb-2">Governing Law</h3>
          <p className="text-[20px] text-white/80">
            This policy is governed and interpreted in accordance with the laws
            of [Your Country]. Any disputes shall be handled in the competent
            courts of [City/Country].
          </p>
        </div>
        <div className="mb-6">
          {" "}
          <h3 className="text-[25px] font-medium mb-2">Contact Us</h3>
          <p className="text-[20px] text-white/80">
            If you have any questions regarding this policy, you can reach us
            at:
          </p>
          <p className="text-[20px] text-white/80">orionlens@info.com</p>
          <p className="text-[20px] text-white/80">+92 000 00 000</p>
        </div>
      </div>

      <FooterWithContact/>
    </main>
  );
};

export default Privacy;
