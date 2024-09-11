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
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-7xl lg:text-7xl font-thin tracking-tight lg:mt-10 pb-12"
            >
              Arun Shukla
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-pink-500 bg-clip-text text-5xl mt:[-2] tracking-tight text-transparent"
            >
              Frontend Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-2xl font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="https://drive.google.com/file/d/181eQNULRGPX2YEtX0OY5ST-uztxfOEOd/view?usp=sharing" // Replace with the actual path to your CV
              download="Arun_Shukla_CV.pdf"
              target="_blank"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="mt-8 px-8 py-3 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow-lg transition-transform duration-300"
            >
              Download CV
            </motion.a>
          </div>
        </div>
        <div className="w-full h-[350px] lg:w-1/2 p-8">
          <div className="flex justify-center mt-10 lg:mt-0">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="w-full max-w-lg h-auto object-cover rounded-lg"
              src={profilePic}
              alt="profilePic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
