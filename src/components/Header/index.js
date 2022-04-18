import React from "react";
import { useNavigate } from "../../hooks/useNavigate";
import { AnimatedUnderline } from "../AnimatedUnderline";
import { BiHomeAlt, BiUser, BiCollection, BiFile } from "react-icons/bi";

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
    <header className="fixed shadow-md px-8 w-screen md:w-2/3 left-0 md:left-1/2 md:-translate-x-1/2 h-12 bottom-0 md:top-8 backdrop-blur-lg bg-indigo-100 bg-opacity-70 rounded-2xl z-10">
      <AnimatedUnderline
        currentElement={currentSection}
        className="flex gap-8 md:gap-4 items-center justify-center md:justify-start h-12"
        underlineClassName="bg-indigo-400 rounded-tr-md rounded-tl-md bottom-[1px]"
      >
        <button
          onClick={() => handleClick(sectionListRef[0])}
          className={sections[currentSection] === "home" ? "text-indigo" : ""}
        >
          <p className="hidden md:block">Home</p>
          <div className="block md:hidden">
            <BiHomeAlt size="28px" />
          </div>
        </button>
        <button
          onClick={() => handleClick(sectionListRef[1])}
          className={
            sections[currentSection] === "about me" ? "text-indigo" : ""
          }
        >
          <p className="hidden md:block">About me</p>
          <div className="block md:hidden">
            <BiUser size="28px" />
          </div>
        </button>
        <button
          onClick={() => handleClick(sectionListRef[2])}
          className={
            sections[currentSection] === "projects" ? "text-indigo" : ""
          }
        >
          <p className="hidden md:block">Projects</p>
          <div className="block md:hidden">
            <BiCollection size="28px" />
          </div>
        </button>
        <button
          onClick={() => handleClick(sectionListRef[3])}
          className={
            sections[currentSection] === "qualification" ? "text-indigo" : ""
          }
        >
          <p className="hidden md:block">Qualification</p>
          <div className="block md:hidden">
            <BiFile size="28px" />
          </div>
        </button>
      </AnimatedUnderline>
    </header>
  );
}
