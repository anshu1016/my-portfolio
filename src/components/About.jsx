import { motion } from "framer-motion";
import profilePic2 from "../assets/kevinRushProfile.jpg";
import { ABOUT_TEXT } from "../constants";
import { SiCodingninjas } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="my-20 text-center text-4xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </div>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-full max-w-md"
              src={profilePic2}
              alt="profilePic2"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg font-light leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </div>
          <div className="flex gap-6 mt-6">
            <motion.a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-blue-500"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <TbBrandLeetcode />
            </motion.a>
            <motion.a
              href="https://www.codingninjas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-green-500"
              whileHover={{ scale: 1.1, rotate: -10 }}
              transition={{ duration: 0.3 }}
            >
              <SiCodingninjas />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
