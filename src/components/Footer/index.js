import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="h-48 pt-8 md:pt-16 bg-indigo dark:bg-indigo-800 flex justify-center">
      <div className="flex flex-col">
        <div className="flex gap-8 h-fit">
          <h1 className="text-indigo-50 text-xl sm:text-3xl md:text-2xl lg:text-3xl font-medium">
            Baltazar Andersson
          </h1>
          <div className="flex flex-row gap-4 items-center">
            <a
              href="https://github.com/baltazarandersson"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-50 transition-transform duration-200 hover:scale-[1.2] h-5 w-5 sm:h-7 sm:w-7"
            >
              <FiGithub size="100%" />
            </a>
            <a
              href="https://www.linkedin.com/in/baltazar-andersson/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-50 transition-transform duration-200 hover:scale-[1.2] h-5 w-5 sm:h-7 sm:w-7"
            >
              <FiLinkedin size="100%" />
            </a>
            <a
              href="https://www.instagram.com/baltazarpezelj/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-50 transition-transform duration-200 hover:scale-[1.2] h-5 w-5 sm:h-7 sm:w-7"
            >
              <FiInstagram size="100%" />
            </a>
          </div>
        </div>
        <p className="font-semibold text-lg sm:text-xl text-indigo-200 dark:text-indigo-300">
          Frontend Developer
        </p>
      </div>
    </footer>
  );
}
