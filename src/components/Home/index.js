import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiPlatzi } from "react-icons/si";
import { CgMouse, CgArrowDown } from "react-icons/cg";
import profilePicture from "../../assets/pictures/me3.jpeg";

export function Home() {
  function handleScroll() {
    let pageHeight = window.innerHeight;
    window.scrollTo({ top: pageHeight, behavior: "smooth" });
  }

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between pb-16 md:pb-8">
      <div className="flex flex-row md:flex-col gap-4">
        <a
          href="https://github.com/baltazarandersson"
          target="_blank"
          rel="noreferrer"
          className="text-indigo dark:text-indigo-400 transition-transform duration-200 hover:scale-[1.2]"
        >
          <FiGithub size="28px" />
        </a>
        <a
          href="https://www.linkedin.com/in/baltazar-andersson/"
          target="_blank"
          rel="noreferrer"
          className="text-indigo dark:text-indigo-400 transition-transform duration-200 hover:scale-[1.2]"
        >
          <FiLinkedin size="28px" />
        </a>
        <a
          href="https://platzi.com/p/baltazarander/"
          target="_blank"
          rel="noreferrer"
          className="text-indigo dark:text-indigo-400 transition-transform duration-200 hover:scale-[1.2]"
        >
          <SiPlatzi size="28px" />
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-medium">
          Hey there, <br />
          I'm{" "}
          <span className="text-indigo dark:text-indigo-400 ">Baltazar</span>
        </h1>
        <h2 className="text-xl mdÑtext-2xl font-light text-gray-400 dark:text-gray-500">
          Frontend developer{" "}
        </h2>
        <button
          className="hidden md:flex items-center gap-2 absolute bottom-12 transition-transform hover:translate-y-1"
          onClick={handleScroll}
        >
          <CgMouse size="28px" className="text-indigo dark:text-indigo-400" />
          <div className="flex items-center gap-1">
            <p>Scroll down</p>
            <CgArrowDown className="text-indigo dark:text-indigo-400" />
          </div>
        </button>
      </div>
      <img
        className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-3xl bg-indigo-400"
        alt="me"
        src={profilePicture}
      />
    </div>
  );
}
