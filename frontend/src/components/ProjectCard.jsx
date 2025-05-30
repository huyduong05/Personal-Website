import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, images, description, techStack, github }) {
  return (
    <div className="border rounded-2xl shadow-md p-8 mb-6" data-aos="flip-up">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
            title="View on GitHub"
          >
            <FaGithub size={24} />
          </a>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} screenshot ${idx + 1}`}
            className="border shadow-md rounded-lg object-contain w-full sm:w-1/2 h-64"
          />
        ))}
      </div>
      <p className="mb-6 text-gray-700">{description}</p>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-blue-50 text-sm px-2 py-1 rounded-lg text-gray-800 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
export default ProjectCard;