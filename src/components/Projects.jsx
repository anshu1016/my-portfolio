import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa"; // Import icons for Live App and Source Code

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl" // Increased font size
      >
        Projects
      </motion.h1>
      {PROJECTS?.map((project, index) => (
        <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/3" // Increased width for better readability
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 rounded-lg w-full h-64 object-cover" // Increased size and added object-cover
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-2/3 p-4"
          >
            <div className="flex items-center mb-2">
              <h6 className="text-2xl font-semibold">{project.title}</h6>
              {!project.status && (
                <span className="ml-4 text-sm font-bold text-green-600 hover:text-green-700 bg-white-200 px-2 py-1 rounded">
                  In Progress
                </span>
              )}
            </div>
            <p className="mb-4 text-neutral-400 text-xl">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <span
                  className="rounded mr-2 bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {project.appLink ? (
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-all duration-300"
                >
                  <FaLink className="mr-2" />
                  Live App
                </a>
              ) : (
                <span className="flex items-center text-grey-500">
                  <FaLink className="mr-2" />
                  Coming Soon
                </span>
              )}
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-500 hover:text-green-700 transition-all duration-300"
              >
                <FaGithub className="mr-2" />
                Source Code
              </a>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
