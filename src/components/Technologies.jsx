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
import { GrGraphQl } from "react-icons/gr";
import { SiJest } from "react-icons/si";

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
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
          >
            HTML5
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
        >
          <FaCss3Alt className="text-7xl text-blue-600" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
          >
            CSS3
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
        >
          <DiJavascript1 className="text-7xl text-yellow-600" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
          >
            JavaScript
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
        >
          <FaReact className="text-7xl text-cyan-400" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
          >
            React
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
          >
            Tailwind CSS
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(14)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
        >
          <SiPython className="text-7xl text-blue-400" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
          >
            Python
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
        >
          <DiMongodb className="text-7xl text-green-500" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
          >
            MongoDB
          </motion.div>
        </motion.div>

        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          whileHover="visible"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <motion.div
            variants={hoverTextVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
          >
            Node.js
          </motion.div>
        </motion.div>
        <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1.5 }}
  className="flex flex-wrap items-center justify-center gap-8"
>
  {/** HTML5 Icon with hover animation **/}
  <motion.div
    variants={iconVariants(2.5)}
    initial="initial"
    animate="animate"
    whileHover="visible"
    className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
  >
    <FaHtml5 className="text-7xl text-orange-600" />
    <motion.div
      variants={hoverTextVariants}
      initial="hidden"
      animate="hidden"
      whileHover="visible"
      className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
    >
      HTML5
    </motion.div>
  </motion.div>

  {/** C++ Icon with hover animation **/}
  <motion.div
    variants={iconVariants(2.5)}
    initial="initial"
    animate="animate"
    whileHover="visible"
    className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
  >
    <SiCplusplus className="text-7xl text-blue-600" />
    <motion.div
      variants={hoverTextVariants}
      initial="hidden"
      animate="hidden"
      whileHover="visible"
      className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
    >
      C++
    </motion.div>
  </motion.div>

  {/** GraphQL Icon with hover animation **/}
  <motion.div
    variants={iconVariants(2.5)}
    initial="initial"
    animate="animate"
    whileHover="visible"
    className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
  >
    <GrGraphQl className="text-7xl text-pink-600" />
    <motion.div
      variants={hoverTextVariants}
      initial="hidden"
      animate="hidden"
      whileHover="visible"
      className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
    >
      GraphQL
    </motion.div>
  </motion.div>

  {/** Jest Icon with hover animation **/}
  <motion.div
    variants={iconVariants(2.5)}
    initial="initial"
    animate="animate"
    whileHover="visible"
    className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
  >
    <SiJest className="text-7xl text-red-600" />
    <motion.div
      variants={hoverTextVariants}
      initial="hidden"
      animate="hidden"
      whileHover="visible"
      className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
    >
      Jest
    </motion.div>
  </motion.div>

  {/** PostgreSQL Icon with hover animation **/}
  <motion.div
    variants={iconVariants(2.5)}
    initial="initial"
    animate="animate"
    whileHover="visible"
    className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
  >
    <SiPostgresql className="text-7xl text-blue-500" />
    <motion.div
      variants={hoverTextVariants}
      initial="hidden"
      animate="hidden"
      whileHover="visible"
      className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
    >
      PostgreSQL
    </motion.div>
  </motion.div>

  {/** REST API Icon with hover animation **/}
  <motion.div
    variants={iconVariants(2.5)}
    initial="initial"
    animate="animate"
    whileHover="visible"
    className="relative rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer group"
  >
    <FaServer className="text-7xl text-green-600" />
    <motion.div
      variants={hoverTextVariants}
      initial="hidden"
      animate="hidden"
      whileHover="visible"
      className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 text-sm text-center text-white bg-black py-1 px-3 rounded-lg group-hover:block"
    >
      REST API
    </motion.div>
  </motion.div>
</motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
