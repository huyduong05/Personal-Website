import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, images, description, techStack, github }) {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="group h-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-gray-300">
      {/* Card Content */}
      <div className="p-6 sm:p-8 flex flex-col h-full">
        {/* Header: Title + GitHub Link */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6 gap-3">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
            {title}
          </h2>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-black transition-all duration-300 hover:scale-110 transform"
              title="View on GitHub"
            >
              <FaGithub size={24} className="transition-transform duration-300 hover:rotate-12" />
              <FaExternalLinkAlt size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          )}
        </div>

        {/* Images Grid */}
        <div className={`grid gap-4 mb-6 ${images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100 group/image"
              onMouseEnter={() => setHoveredImage(idx)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={img}
                alt={`${title} screenshot ${idx + 1}`}
                className={`w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 ${
                  hoveredImage === idx ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mb-6 text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2.5">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 text-xs sm:text-sm font-medium border border-blue-100/50 hover:border-blue-200 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 hover:scale-105 transform cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}

export default ProjectCard;
