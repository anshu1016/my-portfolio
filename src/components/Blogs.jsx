import { motion } from "framer-motion";
import { BLOGS } from "../constants";

// Define motion variants for the blog boxes
const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverVariants = {
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
};

const Blog = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white-500"
      >
        Blogs
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {BLOGS.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-lg overflow-hidden"
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={hoverVariants}
          >
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-6">
              <motion.h2
                className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {blog.title}
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-4 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {blog.content}
              </motion.p>
              <div className="flex items-center justify-between text-blue-500 font-medium">
                <span>Read More</span>
                <svg
                  className="w-6 h-6 transition-transform transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
