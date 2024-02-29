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
      title: "FullStack JavaScript Student",
      company_name: "Platzi",
      icon: platzi,
      iconBg: "#E6DEDD",
      date: "March 2020 - Present",
      place: "Online.",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
   
    {
      title: "Web Design & Developer student",
      company_name: "Humber College",
      icon: humber,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
      place: "Toronto, CA.",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "FullStack Developer - Ecommerce",
      company_name: "GMB Ambiente",
      icon: gmbAmbiente,
      iconBg: "#E6DEDD",
      place: "Oaxaca, MX.",
      date: "Sep 2020",
      points: [
        "Introduce the ecommerce abilities...",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Daniel londono",
      designation: "SemiSenior Developer",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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