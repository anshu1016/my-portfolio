import profilePic2 from "../assets/kevinRushProfile.jpg";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="my-20 text-center text-4xl  ">
        About <span className="text-neutral-500">Me</span>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={profilePic2} alt="profilePic2" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
