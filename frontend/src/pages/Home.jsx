import { useRef, useEffect } from "react";
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
    const speed = 1; // Adjust speed as needed

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
      <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-20 md:pt-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-2 text-black" data-aos="fade-up">
            Huy Duong
          </h1>
          <h3 className="text-xl font-semibold text-gray-400" data-aos="fade-up"> CS @SJSU | SWE Intern @ Nutanix</h3>
          <p className="py-4" data-aos="fade-up">
            Hi! I'm Huy, a Bay Area based Software Engineer. I love exploring new ventures both on and off the screen. Feel free to check out my projects or connect with me on LinkedIn!
          </p>
        </div>
      </div>

      {/* Seamless auto-scrolling carousel */}
      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap overflow-x-scroll no-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="w-[275px] flex-shrink-0 p-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-xl object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
