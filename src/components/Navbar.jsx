import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer ">
        <a
          href="https://www.linkedin.com/in/arun-shukla-1399a9196/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="transition-transform transform hover:scale-110" />
        </a>
        <a
          href="https://github.com/anshu1016"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="transition-transform transform hover:scale-110" />
        </a>
        <a
          href="https://x.com/anshu___007"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter className="transition-transform transform hover:scale-110" />
        </a>
        <a
          href="https://shuklathecoder.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <SiHashnode className="transition-transform transform hover:scale-110" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
