import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiExpress, SiCplusplus, SiC } from "react-icons/si";
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
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <DiJavascript1 className="text-7xl text-yellow-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <DiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiExpress className="text-7xl text-gray-600" />
        </motion.div>

        {/* <motion.div
          variants={iconVariants(10)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaAws className="text-7xl text-orange-500" />
        </motion.div> */}

        <motion.div
          variants={iconVariants(11)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <TbSql className="text-7xl text-sky-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(12)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiCplusplus className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(13)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiC className="text-7xl text-blue-800" />
        </motion.div>

        {/* <motion.div
          variants={iconVariants(14)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiDataquest className="text-7xl text-blue-800" />
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Technologies;
