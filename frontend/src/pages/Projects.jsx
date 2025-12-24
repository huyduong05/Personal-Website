import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import LKH from "../projects/LookoutHome.png";
import LKF from "../projects/LookoutFeature.png";
import SKH from "../projects/ShopkeeperHome.png";
import SKF from "../projects/ShopkeeperFeature.png";
import SPOH from "../projects/SpartanHome.png";
import SPOF from "../projects/SpartanFeature.png";
import TB from "../projects/TogoBot.gif";
import TBIRL from "../projects/TogoBotIRL.png";

import ProjectCard from "../components/ProjectCard";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const projects = [
    {
      title: "Lookout",
      images: [LKH, LKF],
      description: "An AI-powered security camera system that detects and alerts you of potential threats, built at CalHacks 11.0.",
      techStack: ["React.js", "Flask", "MongoDB", "Fetch.ai uAgents", "Google Gemini"],
      github: "https://github.com/kevintsoii/Lookout"
    },
    {
      title: "Shopkeeper",
      images: [SKH, SKF],
      description: "A one stop shop for all your shopping needs, built in CS157C (NoSQL Databases).",
      techStack: ["React.js", "Flask", "MongoDB", "Oxylabs Web Scraper API", "Docker"],
      github: "https://github.com/huyduong05/CS157C-Team-3"
    },
    {
      title: "Spartan Outreach",
      images: [SPOH, SPOF],
      description: "A full-stack social media application to connect SJSU students, alumni, & staff for networking and mentorship, built in CS157A (Database Management Systems)",
      techStack: ["React.js", "Django", "MySQL", "Docker"],
      github: "https://github.com/kevintsoii/Alumni-Connection-Platform"
    },
    {
      title: "TogoBot",
      images: [TBIRL, TB],
      description: "An MVP autonomous delivery robot built with a team of 18 engineers in 10 weeks.",
      techStack: ["Python", "Raspberry Pi"],
      github: "https://github.com/huyduong05/Togo-Bot"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Project Page Header */}
        <div className="mx-auto max-w-3xl pt-12 sm:pt-16 md:pt-20 lg:pt-24" data-aos="fade-up">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Here are some of my projects that I have developed during hackathons, in classes, and as part of on-campus clubs.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mx-auto max-w-6xl pb-16 sm:pb-20 md:pb-24 lg:pb-32 mt-10 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
                className="w-full"
              >
                <ProjectCard {...proj} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
