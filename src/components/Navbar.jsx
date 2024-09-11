import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md py-4 z-10">
      <div className="flex items-center justify-between px-6">
        <div className="text-3xl font-bold text-blue-500">AS</div>
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/arun-shukla-1399a9196/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/anshu1016"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://x.com/anshu___007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaSquareXTwitter className="hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://shuklathecoder.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hashnode"
          >
            <SiHashnode className="hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
