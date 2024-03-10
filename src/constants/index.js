import {
    nodejs,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    cplusplus,
    tailwind,
    git,
    figma,
    mysql,
    platzi,
    threejs,
    humber,
    gmbAmbiente,
    oaxaca,
    gpt,
    travel,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },

    {
      title: "UX/UI Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: cplusplus,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // add sql icon
    {
      name: "SQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Node js",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // add c++ icon
  ];
  
  const experiences = [
  
    
   
    {
      title: "Web Design & Developer student",
      company_name: "Humber College",
      icon: humber,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Abr 2024",
      place: "Toronto, CA.",
      points: [
        "Developed web applications using React.js and Express.js.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "Frontend Web Developer",
      company_name: "GMB ProAmbiente",
      icon: gmbAmbiente,
      iconBg: "#E6DEDD",
      place: "Oaxaca, MX.",
      date: "Sep 2020 - Jan 2021 ",
      points: [
        "Designed and coded an engaging, informative landing application using React, reaching 10 thousand individuals within the local area",
        "Collaborated with cross-functional teams including product managers to create a high-quality webpage.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "Carlos has consistently demonstrated exceptional communication skills within his team, fostering a collaborative and productive enviroment.",
      name: "Mark Meritt Jr.",
      designation: "CEO",
      company: "Apptist Inc.",
      image: "https://media.licdn.com/dms/image/C4E03AQGM6I6v6jWrIQ/profile-displayphoto-shrink_400_400/0/1634270949338?e=1714608000&v=beta&t=UEoo8gIIUzWzdKAp_7ao-AX5hx78lS2Ty5oo1T5oyHE",
    },
    {
      testimonial:
      "I would highly recommend Carlos for any employment opportunity, confident in his ability to excel and positively impact any team or project he is involved in.",
      name: "Dylan Ravka",
      designation: "Senior Dev",
      company: "Unity",
      image: "https://media.licdn.com/dms/image/C5603AQHRJkU9M3npQQ/profile-displayphoto-shrink_400_400/0/1654741220635?e=1714608000&v=beta&t=R99ZK8nZIacdoSb_xq2LZoHZ-3GQC7dvdS9vfL5xSKc",
    },
    {
      testimonial:
      "Working with Carlos has been a pleasure. He demonstrates efficiency in his work and facilitates seamless collaboration within the team.",
      name: "Daniel Londono",
      designation: "Semi Senior Dev",
      company: "Ressolve AI",
      image: "https://avatars.githubusercontent.com/u/46074211?v=4",
    },
  ];
  

  
  const projects = [
    {
      name: "Oaxaca Restaurant Landing Page",
      description: "The Oaxaca Restaurant project serves as a showcase of a restaurant webpage featuring Oaxacan cuisine, highlighting the rich culinary heritage of the region",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: oaxaca,
      source_code_link: "https://github.com/Carlos2902/oaxaca-restaurant",
    },

    {
      name: "GPT-SummarizeHub Rapid Article Summarizer",
      description:"Web application summarizer created with the use of the Article Extractor and Summarizer API.  The API efficiently extracts and summarizes articles from specified URLs.      ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gpt,
      source_code_link: "https://github.com/Carlos2902/GPT-SummarizeHub-Rapid-Article-Summarizer",
    },
    
    {
      name: "Airhub Travel Tracker Web Application",
      description:"Web application designed to assist travelers in tracking flights. it offers comprehensive functionalities for tracking planes, accessing arrival schedule and weather checking",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap5",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/Carlos2902/AirHub-Travel-Tracker",
    },

    
  ];
  
  export { services, technologies, experiences, testimonials, projects };