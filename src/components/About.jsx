import { motion } from "framer-motion";
import profilePic2 from "../assets/anshuProfile2.jpeg";
import { ABOUT_TEXT } from "../constants";
import { SiCodingninjas } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="my-20 text-center text-5xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </div>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}import { motion } from "framer-motion";
import profilePic2 from "../assets/anshuProfile2.jpeg";
import { ABOUT_TEXT } from "../constants";
import { SiCodingninjas } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="my-20 text-center text-5xl font-bold">
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
            <div className="w-full max-w-md h-96 overflow-hidden rounded-2xl">
              <img
                className="w-full h-full object-cover"
                src={profilePic2}
                alt="profilePic2"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-xl font-light leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </div>
          {/* <div className="flex flex-wrap justify-center gap-6 mt-8"> */}
            {/* <div className="flex flex-col items-center">
              <motion.a
                href="https://github.com/anshu1016/DSA/commits/main/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-gray-800"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub />
              </motion.a>
              <span className="text-lg font-medium text-neutral-600 mt-2">
                GitHub
              </span>
            </div> */}
            {/* <div className="flex flex-col items-center">
              <motion.a
                href="https://leetcode.com/u/arunshukla98710/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-blue-500"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <TbBrandLeetcode />
              </motion.a>
              <span className="text-lg font-medium text-neutral-600 mt-2">
                LeetCode
              </span>
            </div> */}
            {/* <div className="flex flex-col items-center">
              <motion.a
                href="https://www.naukri.com/code360/profile/b99e6a36-f120-4e7e-ab64-41ff5eaadc2d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-green-500"
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ duration: 0.3 }}
              >
                <SiCodingninjas />
              </motion.a>
              <span className="text-lg font-medium text-neutral-600 mt-2">
                Coding Ninjas
              </span>
            </div> */}
          {/* </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;

          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 p-8"
        >
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-96 overflow-hidden rounded-2xl">
              <img
                className="w-full h-full object-cover"
                src={profilePic2}
                alt="profilePic2"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-xl font-light leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </div>
{/*           <div className="flex flex-wrap justify-center gap-6 mt-8"> */}
{/*             <div className="flex flex-col items-center">
             <motion.a
                href="https://github.com/anshu1016/DSA/commits/main/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-gray-800"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub />
              </motion.a> 
              <span className="text-lg font-medium text-neutral-600 mt-2">
                GitHub
              </span>
            </div> */}
{/*             <div className="flex flex-col items-center">
              <motion.a
                href="https://leetcode.com/u/arunshukla98710/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-blue-500"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <TbBrandLeetcode />
              </motion.a>
              <span className="text-lg font-medium text-neutral-600 mt-2">
                LeetCode
              </span>
            </div> */}
            // <div className="flex flex-col items-center">
            //   <motion.a
            //     href="https://www.naukri.com/code360/profile/b99e6a36-f120-4e7e-ab64-41ff5eaadc2d"
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     className="text-5xl text-green-500"
            //     whileHover={{ scale: 1.1, rotate: -10 }}
            //     transition={{ duration: 0.3 }}
            //   >
            //     <SiCodingninjas />
            //   </motion.a>
            //   <span className="text-lg font-medium text-neutral-600 mt-2">
            //     Coding Ninjas
            //   </span>
            // </div>
          // </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
