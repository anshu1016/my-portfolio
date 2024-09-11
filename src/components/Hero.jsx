import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/anshuProfile1.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#fbbf24",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-0 h-screen flex flex-col justify-between">
      <div className="flex flex-wrap items-center h-full">
        <div className="w-full lg:w-1/2 px-4 lg:px-8 flex flex-col justify-center">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-6xl font-thin tracking-tight lg:mt-5 pb-8"
          >
            Arun Shukla
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-pink-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
          >
            Frontend Engineer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-lg text-lg lg:text-xl font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            href="https://drive.google.com/file/d/181eQNULRGPX2YEtX0OY5ST-uztxfOEOd/view?usp=sharing"
            download="Arun_Shukla_CV.pdf"
            target="_blank"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="mt-6 px-6 py-2 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-lg"
          >
            Download CV
          </motion.a>
        </div>
        <div className="w-full lg:w-1/2 p-4 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="w-2/3 lg:w-full max-w-sm h-auto object-cover rounded-lg"
            src={profilePic}
            alt="profilePic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
