import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import professional from "../images/professional_headshot.jpeg";
import calhacks from "../images/calhacks.jpeg";
import sf_beach from "../images/sf_beach.jpeg";
import sharks from "../images/sharks.jpeg";
import squeaky from "../images/squeaky.jpeg";
import sushi from "../images/sushi.jpeg";
import temple from "../images/temple.jpeg";
import volleyball from "../images/volleyball.jpeg";
import lake from "../images/lake_tahoe.jpeg";

import { FaLinkedin, FaGithub, FaFileCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  const scrollRef = useRef(null);

  const images = [
    { src: professional, alt: "Professional Headshot" },
    { src: volleyball, alt: "Volleyball" },
    { src: calhacks, alt: "CalHacks" },
    { src: temple, alt: "Temple" },
    { src: sf_beach, alt: "San Francisco Beach" },
    { src: sharks, alt: "Sharks" },
    { src: lake, alt: "Lake Tahoe" },
    { src: squeaky, alt: "Squeaky" },
    { src: sushi, alt: "Sushi" },
  ];

  const duplicatedImages = [...images, ...images]; // For seamless looping

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let animationFrameId;
    const speed = 1;

    const step = () => {
      scrollAmount += speed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div>
      {/* Title + Bio */}
      <div className="mx-auto max-w-[700px] px-4 pb-16 pt-10 md:px-6 md:pb-20 md:pt-8" data-aos="fade-up">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-black">
            Huy Duong
          </h1>
          <h3 className="text-md md:text-xl font-semibold text-gray-400">
            CS @ SJSU | SWE Intern @ Nutanix
          </h3>
          <p className="py-6 text-base md:text-lg">
            Hi! I'm Huy, a Bay Area based Software Engineer. Whether it be a 48-hour hackathon or hiking up a mountain, I love exploring new ventures/challenges both on and off the screen. Feel free to check out my projects and contact me!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://linkedin.com/in/huy-n-duong"
            target="_blank"
            rel="noopener noreferrer"
            className="flex font-semibold px-5 py-2 rounded-lg bg-gray-200 items-center text-black transition-all duration-300 hover:bg-gray-400 hover:text-white"
          >
            LinkedIn
            <FaLinkedin className="ml-2" />
          </a>

          <a
            href="https://github.com/huyduong05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex font-semibold px-5 py-2 rounded-lg bg-gray-200 items-center text-black transition-all duration-300 hover:bg-gray-400 hover:text-white"
          >
            GitHub
            <FaGithub className="ml-2" />
          </a>

          <a
            href="mailto:huyduong.business@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex font-semibold px-5 py-2 rounded-lg bg-gray-200 items-center text-black transition-all duration-300 hover:bg-gray-400 hover:text-white"
          >
            Email
            <MdEmail className="ml-2" />
          </a>

          <Link
            to="/projects"
            className="flex font-semibold px-5 py-2 rounded-lg bg-gray-200 items-center text-black transition-all duration-300 hover:bg-gray-400 hover:text-white"
          >
            Projects
            <FaFileCode className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Seamless auto-scrolling carousel */}
      <div className="overflow-hidden mb-12">
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap overflow-x-scroll no-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedImages.map((image, index) => (
            <div key={index} className="w-[250px] flex-shrink-0 p-2">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-xl object-cover w-full h-40 sm:h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
