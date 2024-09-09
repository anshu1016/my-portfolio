import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 ">
      <h1 className="my-24 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer ">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer ">
          <TbBrandNextjs className="text-7xl" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer ">
          <SiMongodb className="text-7xl text-green-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer ">
          <DiRedis className="text-7xl text-red-700" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer ">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer ">
          <TbSql className="text-7xl text-sky-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
