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
    techStack: ["React.js", "Flask", "MongoDB", "Oxylabs Web Scraper API", "Docker" ],
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
    <div className="px-4 md:px-6">
      {/* Project Page Title */}
      <div className="mx-auto max-w-[700px] pt-10 md:pt-12" data-aos="fade-up">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            Projects
          </h1>
          <p className="text-base md:text-lg mb-4 text-gray-700" data-aos="fade-up">
            Here are some of my projects that I have developed during hackathons, in classes, and as part of on-campus clubs.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="mx-auto max-w-[1000px] pb-24 md:pb-20 mt-8 space-y-12">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
