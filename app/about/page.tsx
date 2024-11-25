'use client';
import { useState } from "react";
import Navigation from "../components/Navigation";


interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities?: string[];
}

const timelineData = {
  education: [
    {
      title:
        "Bachelor of Software Engineering - College of Engineering, University of Palestine, Gaza",
      date: "September 2017 - February 2022",
    },
  ],
  certificates: [
    {
      title: "Intermediate React, v4",
      date: "08/2022 – 09/2022",
      institution: "Frontend Masters",
    },
    {
      title: "JavaScript: The Hard Parts",
      date: "07/2022 – 07/2022",
      institution: "Frontend Masters",
    },
    {
      title: "The Ultimate React Course",
      date: "06/2023 – 07/2023",
      institution: "Udemy",
    },
  ],
  experience: [
    {
      title: "Front-End Developer & UI/UX Designer",
      company: "Freelancer",
      date: "12/2022 – Current",
      responsibilities: [
        "Developed the front-end for a self-employment platform using HTML, CSS, Bootstrap, and JavaScript",
        "Designed the front-end for a hotel management system using HTML, CSS, Bootstrap, and JavaScript",
        "Developed the front-end for a restaurant management system using HTML, CSS, Bootstrap, and JavaScript",
        "Developed the front-end for a Landing page creation system using nextjs",
      ],
    },
    {
      title: "React.Js Developer",
      company: "Shift Company",
      date: "05/2023 – 07/2023",
      responsibilities: [
        "Developed and maintained single-page applications using React.js framework",
        "Developed and maintained single-page applications using Next.js framework",
        "Wrote tested, idiomatic, and documented code",
        "Collaborated with back-end developers and other team members to integrate the front-end and back-end parts of the application",
        "Participated in code reviews and provided constructive feedback to other team members",
      "Troubleshot and debugged code",
      "Executed responsive design for mobile devices",
      "Implemented user interactions and animations using React.js or a JavaScript library",
      "Implemented security measures to protect the application from potential attacks",
      "Participated in the entire application lifecycle, from concept to deployment",
      "Assisted documentation and technical writing as needed",
      "Make an authentication with user pool - Amazon Cognito",
      "Document management and stored in an Amazon S3 bucket "
      ],
    },
    {
      title: "React.JS Developer Traineeship",
      company: "GGateway",
      date: "04/2022 – 09/2022",
      responsibilities: ["Developed and maintained single-page applications using React.js framework",
        "Implemented front-end application logic using HTML, CSS, and JavaScript",
        "Designed and implemented user interfaces using React.js",
        "Wrote tested, idiomatic, and documented code",
        "Collaborated with back-end developers and other team members to integrate the front-end and back-end parts of the application",
        "Participated in code reviews and provided constructive feedback to other team members",
        "Troubleshot and debugged code",
        "Executed responsive design for mobile devices",
        "Implemented user interactions and animations using React.js or a JavaScript library",
"Integrated the application with external APIs and services",
"Participated in the entire application lifecycle, from concept to deployment"
      ],
    },
    {
      title: "Front-End Developer",
      company: "Wedia",
      date: "04/2021 – 08/2021",
      responsibilities: ["Designed and implemented user interfaces using HTML, CSS, and JavaScript",
        "Created responsive layouts that adapt to different screen sizes and devices",
        "Ensured that the website or web application is visually appealing and user-friendly",
        "Worked closely with back-end developers to integrate the front-end and back-end parts of the application",
        "Debugged and troubleshot code",
        "Participated in code reviews and provided constructive feedback to other team members",
        "Integrated the application with external APIs and services",
        "Collaborated with designers to create a cohesive look and feel for the website or web application",
        "Participated in the entire application lifecycle, from concept to deployment",
        "Mentored junior developers and helped them grow in their careers"
      ]
    },
  ],
};

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle open/close
  };

  return (
    <div className="bg-black">
      <div className="bg-black relative w-full h-[100vh] ">
        <Navigation />
        <div>
      <h1>Virtual Gallery</h1>
    </div>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-[100px] text-bolder"> ABOUT ME</h1>
        </div>
      </div>
      <div className=" w-[60%] mx-auto ">
        <div className="flex h-[300px] w-full">
          {/* Image Container */}
          <div className="image w-[400px] h-full overflow-hidden relative">
            <img
              src="/images/d2fed8dc-4098-447c-bb5a-7d96e698c6dd.jpg"
              className="absolute inset-0 mx-auto object-cover w-full h-full"
              alt="Daniel Curry"
            />
          </div>

          {/* Text Section */}
          <div className="text-white flex flex-col justify-between p-4 h-full w-full">
            <p>
              Hello! I’m Daniel Curry, a web designer from San Francisco, USA. I
              have rich experience in website design and development. I am also
              proficient in WordPress. I'd love to discuss our unique projects!
            </p>

            {/* Contact Information */}
            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <h5 className="font-bold">Phone:</h5>
                <p>+972 595474936</p>
              </div>
              <div className="flex gap-2">
                <h5 className="font-bold">Email:</h5>
                <p>saedaraed19@gmail.com</p>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <h5 className="font-bold">LinkedIn:</h5>
                <a href="#" className="text-blue-500 underline">
                  View LinkedIn
                </a>
              </div>
              <div className="flex gap-2">
                <h5 className="font-bold">GitHub:</h5>
                <a href="#" className="text-blue-500 underline">
                  View GitHub
                </a>
              </div>
            </div>

            {/* Download CV Button */}
            <button className="border border-white text-white px-4 py-2 mt-4 inline-block">
              Download CV
            </button>
          </div>
        </div>
        <br /> <br />
        <hr />
        {/* education section */}
        <div className=" text-white mt-8">
          <h2 className="font-bold text-white">EDUCATION</h2>
          <br />
          <p>
            {" "}
            <span className="font-bold">BSc Software Engineering,</span>{" "}
            University of Palestine, Gaza Strip - Palestine 09/2017 – 02/2022
          </p>{" "}
          <br />
          <p>
            Key Applications, Software Engineering Requirementsy Modules:
            Programming, Data Structures, Computer Architecture, Web
          </p>
        </div>
        <br /> <br />
        <hr />
        {/* services section */}
        <div className=" text-white mt-8">
          <h2 className="font-bold text-white">SERVICES</h2>
          <br />
          <div className="flex gap-4 ">
            <div className="card w-full rounded-[10px] border border-white p-4">
              <div className="icon-container flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="55"
                  height="55"
                  fill="white"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
                  <path d="M9.5 10.5l-1.42 1.42 2.92 2.92-2.92 2.92L9.5 18.5l4.5-4.5-4.5-4.5zM17 10h-2v4h2v-4z" />
                </svg>
              </div>

              <h5 className="font-bold text-center mt-2">
                Front-End Development
              </h5>
              <ul
                className="pl-4 mt-5 opacity-[70%]"
                style={{ listStyleType: "circle" }}
              >
                <li>ReactJS Front-End Development</li>
                <li>Single Page Applications (SPAs)</li>
                <li>Responsive Web Development</li>
                <li>API Integration</li>
                <li>Custom Web Animations</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div className="card w-full rounded-[10px] border border-white p-4">
              <div className="icon-container flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="55"
                  height="55"
                  fill="white"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M3 3h18v2H3zm0 16h18v2H3zM3 8h2v8H3zm16 0h2v8h-2zM7 10h2v4H7zm4 0h2v4h-2zm4 0h2v4h-2z" />
                </svg>
              </div>

              <h5 className="font-bold text-center mt-2">UI/UX Design</h5>
              <ul
                className="pl-4 mt-5 opacity-[70%]"
                style={{ listStyleType: "circle" }}
              >
                <li>User Interface (UI) Design</li>
                <li>User Experience (UX)</li>
                <li>Mobile-Responsive Design</li>
                <li>Wireframing & Prototyping</li>
              </ul>
            </div>
            <div className="card w-full rounded-[10px] border border-white p-4">
              Copy code
              <div className="icon-container flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="55"
                  height="55"
                  fill="white"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M19.14 12.94l1.43-1.43-2.83-2.83 1.43-1.43-2.12-2.12-1.43 1.43-2.83-2.83-1.43 1.43-2.12-2.12-2.12 2.12 1.43 1.43-2.83 2.83-1.43-1.43L2 12l1.43 1.43 2.83-2.83 1.43 1.43-2.83 2.83L2 17.14 3.14 19l1.43-1.43 2.83 2.83 1.43-1.43 2.12 2.12 2.12-2.12-1.43-1.43 2.83-2.83 1.43 1.43 2.83-2.83 1.43 1.43 2.12-2.12zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                </svg>
              </div>
              <h5 className="font-bold text-center mt-2">
                Additional Services
              </h5>
              <ul
                className="pl-4 mt-5 opacity-[70%]"
                style={{ listStyleType: "circle" }}
              >
                <li>Design to Code</li>
                <li>Website Maintenance & Updates</li>
                <li>SEO Optimization</li>
              </ul>
            </div>
          </div>
        </div>
        <br /> <br />
        <hr />
        {/* experience section */}
          <div className="text-white mt-8">
      <h2 className="font-bold text-white">Experience</h2>
      <br />
      {timelineData.experience.map((item, index) => (
        <div key={index} className="mb-6">
          <div
            onClick={() => handleClick(index)}
            className="cursor-pointer text-lg font-semibold flex justify-between items-center"
          >
            <p>{item.title} - {item.company}</p>
            <span>{activeIndex === index ? "▲" : "▼"}</span> {/* Arrow to indicate dropdown state */}
          </div>
          <p className="text-sm text-gray-500">{item.date}</p>
          {activeIndex === index && (
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {item?.responsibilities?.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}
