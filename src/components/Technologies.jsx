import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiExpress, SiCplusplus, SiC, SiPython } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeatType: "reverse",
      },
    },
  });

  const hoverTextVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-24 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/** Icon with hover animation **/}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg"
          >
            HTML5
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaCss3Alt className="text-7xl text-blue-600" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg"
          >
            CSS3
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <DiJavascript1 className="text-7xl text-yellow-600" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg"
          >
            JavaScript
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaReact className="text-7xl text-cyan-400" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg"
          >
            React
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg"
          >
            Tailwind CSS
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(14)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiPython className="text-7xl text-blue-400" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg"
          >
            Python
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <DiMongodb className="text-7xl text-green-500" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg"
          >
            MongoDB
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg"
          >
            Node.js
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
