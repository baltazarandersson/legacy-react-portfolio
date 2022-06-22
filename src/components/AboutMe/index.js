import { HiOutlineLocationMarker } from "react-icons/hi";
import { data } from "../../data/data";
import { TechIcon } from "./TechIcon";

export function AboutMe() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start py-16 md:py-36 gap-16">
      <div className="h-auto flex flex-col gap-8">
        <div className=" flex w-full items-center justify-center gap-8">
          <h1 className="text-3xl sm:text-4xl font-medium">About me</h1>
        </div>
        <div className="relative">
          <p className="text-xl sm:text-2xl">
            I am
            <span className="font-semibold text-indigo dark:text-indigo-400">
              {" "}
              Baltazar Andersson
            </span>
            , a 19 yo <span className="font-semibold">Frontend Developer </span>
            which always have been into the tech world, first I started making
            some games for fun as a child, then I began learning Python,
            followed by{" "}
            <span className="font-semibold text-gray-800 px-2 rounded-xl bg-[#f7df1e]">
              JavaScript
            </span>{" "}
            and Web Development since the past year.
          </p>
          <div className="hidden sm:flex items-center gap-2 absolute right-0 text-indigo dark:text-indigo-400">
            <HiOutlineLocationMarker size="24px" />
            <p className="text-xl font-medium">Uruguay</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start">
        <div className="flex flex-col gap-8 w-full">
          <div className="w-full text-center">
            <h1 className="text-3xl sm:text-4xl font-medium">Technologies</h1>
          </div>
          <div className="flex gap-4 w-full flex-wrap justify-center">
            {data.technologies.map((tech) => {
              return <TechIcon IconProps={tech} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
