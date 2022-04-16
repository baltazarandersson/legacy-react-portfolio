import React, { useEffect, useState } from "react";
import { useNavigate } from "../../hooks/useNavigate";
import { AnimatedUnderline } from "../AnimatedUnderline";

const sections = ["home", "about me", "projects", "projects"];

const throttle = (func = () => null, delay = 100) => {
  let waiting;
  return (...args) => {
    if (waiting) return;
    func(...args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, delay);
  };
};

export function Header() {
  const [currentSection, setCurrentSection] = useState("home");
  const navigateTo = useNavigate;

  useEffect(() => {
    const pageHeight = window.innerHeight;
    const onScroll = (e) => {
      const newCurrentSection = Math.floor((window.scrollY + 50) / pageHeight);
      currentSection !== newCurrentSection &&
        setCurrentSection(sections[newCurrentSection]);
    };
    const throttledOnScroll = throttle(onScroll, 10);
    document.addEventListener("scroll", throttledOnScroll);
    return () => {
      document.removeEventListener("scroll", throttledOnScroll);
    };
  }, []);

  return (
    <header className="fixed  shadow-md px-8 w-2/3 left-1/2 -translate-x-1/2 h-12 top-8 backdrop-blur-lg bg-indigo-100 bg-opacity-70 rounded-2xl z-10">
      <AnimatedUnderline
        currentElement={sections.indexOf(currentSection)}
        className="flex gap-4 items-center h-12"
        underlineClassName="bg-indigo-400 rounded-tr-md rounded-tl-md bottom-[1px]"
      >
        <button
          onClick={() => navigateTo(0)}
          className={currentSection === "home" ? "text-indigo" : ""}
        >
          Home
        </button>
        <button
          onClick={() => navigateTo(1)}
          className={currentSection === "about me" ? "text-indigo" : ""}
        >
          About me
        </button>
        <button
          onClick={() => navigateTo(2)}
          className={currentSection === "projects" ? "text-indigo" : ""}
        >
          Projects
        </button>
      </AnimatedUnderline>
    </header>
  );
}
