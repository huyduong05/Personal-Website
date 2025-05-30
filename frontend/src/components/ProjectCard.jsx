import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, images, description, techStack, github }) {
  return (
    <div className="border rounded-2xl shadow-md p-6 sm:p-8 mb-6" data-aos="flip-up">
      {/* Title + GitHub Link */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
            title="View on GitHub"
          >
            <FaGithub size={22} />
          </a>
        )}
      </div>

      {/* Images */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} screenshot ${idx + 1}`}
            className="border shadow-md rounded-lg object-cover w-full sm:w-1/2 h-48 sm:h-64"
          />
        ))}
      </div>

      {/* Description */}
      <p className="mb-6 text-gray-700 text-sm sm:text-base">{description}</p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-xs sm:text-sm px-2 py-1 rounded-md text-gray-800 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
