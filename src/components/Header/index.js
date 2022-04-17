import React from "react";
import { useNavigate } from "../../hooks/useNavigate";
import { AnimatedUnderline } from "../AnimatedUnderline";

const sections = ["home", "about me", "projects", "qualification"];

// const throttle = (func = () => null, delay = 100) => {
//   let waiting;
//   return (...args) => {
//     if (waiting) return;
//     func(...args);
//     waiting = true;
//     setTimeout(() => {
//       waiting = false;
//     }, delay);
//   };
// };

export function Header({ currentSection, sectionListRef }) {
  const navigateTo = useNavigate;
  function handleClick(el) {
    let elCoordY = el.offsetTop;
    navigateTo(elCoordY);
  }

  return (
    <header className="fixed  shadow-md px-8 w-2/3 left-1/2 -translate-x-1/2 h-12 top-8 backdrop-blur-lg bg-indigo-100 bg-opacity-70 rounded-2xl z-10">
      <AnimatedUnderline
        currentElement={currentSection}
        className="flex gap-4 items-center h-12"
        underlineClassName="bg-indigo-400 rounded-tr-md rounded-tl-md bottom-[1px]"
      >
        <button
          onClick={() => handleClick(sectionListRef[0])}
          className={sections[currentSection] === "home" ? "text-indigo" : ""}
        >
          Home
        </button>
        <button
          onClick={() => handleClick(sectionListRef[1])}
          className={
            sections[currentSection] === "about me" ? "text-indigo" : ""
          }
        >
          About me
        </button>
        <button
          onClick={() => handleClick(sectionListRef[2])}
          className={
            sections[currentSection] === "projects" ? "text-indigo" : ""
          }
        >
          Projects
        </button>
        <button
          onClick={() => handleClick(sectionListRef[3])}
          className={
            sections[currentSection] === "qualification" ? "text-indigo" : ""
          }
        >
          Qualification
        </button>
      </AnimatedUnderline>
    </header>
  );
}
