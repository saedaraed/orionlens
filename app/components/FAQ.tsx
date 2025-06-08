"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
type SectionProps = {
  id?: string;
};
const faqs = [
  {
    number: "01",
    question: "How can I contact support?",
    answer:
      "You can reach us via email, live chat, or our contact form available on the website.",
  },
  {
    number: "02",
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund or exchange.",
  },
  {
    number: "03",
    question: "Do you ship internationally?",
    answer:
      "Yes, we offer worldwide shipping with standard and express options available.",
  },
  {
    number: "04",
    question: "Can I track my order?",
    answer:
      "Absolutely! After your order is shipped, you’ll receive a tracking number via email.",
  },
  {
    number: "05",
    question: "Do you offer custom designs?",
    answer:
      "Yes, we do! You can contact us to discuss your custom project and get a quote.",
  },
];

const PlusIcon = ({ color = "white" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5v14M5 12h14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = ({ color = "white" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FAQ: React.FC<SectionProps> = ({ id }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id={id} className="mt-[100px]">
      <div className="flex flex-col items-start justify-start text-left w-fit mx-auto mb-10 px-4">
        <span className="text-heading">FAQ</span>
        <h2 className="md:text-[48px] text-[38px] font-bold text-white">
          FREQUENTLY ASK <span className="text-heading">QUESTONS</span>?{" "}
        </h2>
        <div className="border border-heading w-[125px] h-[4px] bg-heading mt-2"></div>
      </div>
      <div className="w-full max-w-4xl mx-auto px-4">
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-3"
          value={openItem || ""}
          onValueChange={(value) =>
            setOpenItem(value === openItem ? "" : value)
          }
        >
          {faqs.map((faq, index) => {
            const isOpen = openItem === `item-${index}`;

            return (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className={`border border-gray-600 ${
                  isOpen ? "bg-transparent" : "bg-transparent"
                } transition-all`}
              >
                <Accordion.Header>
                  <div className="flex h-full">
                    <Accordion.Trigger className="flex justify-between items-stretch w-full px-0 ">
                      <div className="flex items-center w-full">
                        {/* الرقم */}
                        <span className="text-white w-16 py-4 text-center md:text-[25px] text-[20px] font-medium ">
                          {faq.number}
                        </span>
                        {/* السؤال */}
                        <span className="flex-1 px-4 py-4 text-white text-left md:text-[22px] text-[20px] font-medium">
                          {faq.question}
                        </span>
                      </div>
                      {/* زر الفتح/الإغلاق */}
                      <div
                        className={`w-16 flex items-center justify-center ${
                          isOpen ? "bg-heading" : "bg-[#1A1A1A]"
                        }`}
                      >
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                      </div>
                    </Accordion.Trigger>
                  </div>
                </Accordion.Header>
                <Accordion.Content className="px-20 py-2 text-white/80 text-[20px] font-cairo">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQ;
