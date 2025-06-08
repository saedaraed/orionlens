export const metadata = {
  title: "Terms and Conditions | OrionLens",
  description: "Read the terms and conditions for using the OrionLens website and services.",
};
import Navbar from "../components/Navbar";

const Terms = () => {
  return (
    <main className="font-cairo">
      <div className="bg-[#1A1A1A]">
        <Navbar />
        <div className="md:w-[60%] w-[80%] mx-auto py-10">
          <h2 className="text-[48px] font-bold text-white">
            Terms & <span className="text-heading">Conditions </span>{" "}
          </h2>
          <p className="text-[20px] text-white/80">
            By accessing and using this website, you agree to comply with the following terms and conditions. Please read them carefully before using the site or purchasing any product.
          </p>
        </div>
      </div>
      <div className="md:w-[60%] w-[80%] mx-auto py-10">
        <div className="mb-6">
          <h3 className="text-[25px] font-medium mb-2">Acceptance of Terms</h3>
          <p className="text-[20px] text-white/80">
           By using this site, you acknowledge that you have read, understood, and agreed to these terms. If you do not agree to any part of them, please refrain from using the site.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-[25px] font-medium mb-2">Use of the Website</h3>
          <ul className="text-[20px] text-white/80">
            <li>
              You may not use the website for any unlawful or unethical purposes.
            </li>
            <li>
              We reserve the right to suspend or terminate access to the site for any user who violates these terms.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-[25px] font-medium mb-2">Intellectual Property</h3>
          <p className="text-[20px] text-white/80">
            All content on the site (texts, graphics, designs, images) is owned by us and protected under copyright and international intellectual property laws.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-[25px] font-medium mb-2">Orders and Payments</h3>
          <ul className="text-[20px] text-white/80">
            <li>
When placing an order, you agree to purchase the product as described and at the listed price.            </li>
            <li>
Payments are processed through the available payment methods. All prices include applicable taxes unless otherwise stated.            </li>
          </ul>
        </div>
        <div className="mb-6">
          {" "}
          <h3 className="text-[25px] font-medium mb-2">Shipping and Delivery</h3>
          <p className="text-[20px] text-white/80">
           We strive to ship orders as soon as possible. Delivery times may vary depending on the customer’s location. We are not responsible for delays beyond our control.
          </p>
         
        </div>
         <div className="mb-6">
          {" "}
          <h3 className="text-[25px] font-medium mb-2">Return and Exchange Policy</h3>
          <p className="text-[20px] text-white/80">
Returns are accepted within [number of days] from the date of delivery, provided that the item is unused and in its original condition. For more details, please refer to our Return Policy page.          </p>
         
        </div>
         <div className="mb-6">
          {" "}
          <h3 className="text-[25px] font-medium mb-2">Modifications</h3>
          <p className="text-[20px] text-white/80">
We reserve the right to update or modify these terms at any time. Changes will be posted on this page, and continued use of the website constitutes acceptance of those changes.     </p>     
        </div>
      </div>

    </main>
  );
};

export default Terms;
