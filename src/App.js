import { useEffect, useRef, useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { CgArrowDown } from "react-icons/cg";
import { useNavigate } from "./hooks/useNavigate";
import { Projects } from "./components/Projects";
import { Courses } from "./components/Courses";

const DEFAULT_THRESHOLD = 0.5;

export function App() {
  const [showButton, setShowButton] = useState(false);
  const navigateTo = useNavigate;
  const sectionListRef = useRef([]);
  const [currentSection, updateCurrentSection] = useState(0);

  useEffect(() => {
    const pageHeight = window.innerHeight;
    const onScroll = (e) => {
      const newShowButton = window.scrollY > pageHeight / 2;
      showButton !== newShowButton && setShowButton(newShowButton);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showButton]);

  useEffect(() => {
    const observers = [];
    sectionListRef.current.forEach((el) => {
      const elHeight = el.offsetHeight;
      let threshold;
      if (elHeight > window.innerHeight) {
        threshold = (window.innerHeight / elHeight) * DEFAULT_THRESHOLD;
      } else {
        threshold = DEFAULT_THRESHOLD;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (entry.isIntersecting) {
            updateCurrentSection(
              sectionListRef.current.findIndex(
                (sectionRef) => sectionRef === entry.target
              )
            );
          }
        },
        { threshold }
      );

      observers.push(observer);
      observer.observe(el);
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, []);

  return (
    <>
      <Header
        currentSection={currentSection}
        sectionListRef={sectionListRef.current}
      />
      <main className="w-5/6 md:w-2/3 relative mx-auto">
        <section
          className="min-h-screen h-screen"
          ref={(childrenRef) => (sectionListRef.current[0] = childrenRef)}
        >
          <Home />
        </section>
        <section
          className="min-h-screen h-screen"
          ref={(childrenRef) => (sectionListRef.current[1] = childrenRef)}
        >
          <AboutMe />
        </section>
        <section
          className="min-h-screen"
          ref={(childrenRef) => (sectionListRef.current[2] = childrenRef)}
        >
          <Projects />
        </section>
        <section
          className="min-h-screen"
          ref={(childrenRef) => (sectionListRef.current[3] = childrenRef)}
        >
          <Courses />
        </section>

        <button
          className={`hidden md:block fixed bottom-8 right-8 bg-indigo-400 rounded-xl p-2 transition-all ${
            showButton ? "translate-y-0" : "translate-y-20"
          }`}
          onClick={() => navigateTo(0)}
        >
          <CgArrowDown size="28px" className="rotate-180 text-indigo-50" />
        </button>
        <footer className="h-16" />
      </main>
      <div className="absolute p-[50px] top-[18vh] left-[20vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[70px] top-[75vh] left-[10vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[150px] top-[35vh] left-[45vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[30px] top-[75vh] left-[85vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[20px] top-[140vh] left-[5vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[40px] top-[175vh] left-[75vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[20px] top-[220vh] left-[90vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[100px] top-[220vh] left-[10vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[50px] top-[290vh] left-[80vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[30px] top-[350vh] left-[5vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[70px] top-[390vh] left-[80vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[40px] top-[440vh] left-[10vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[90px] top-[480vh] left-[75vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[20px] top-[520vh] left-[15vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[40px] top-[560vh] left-[65vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[130px] top-[625vh] left-[20vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
      <div className="absolute p-[30px] top-[665vh] left-[80vw] bg-gradient-to-br from-indigo-50  to-indigo-400 rounded-full brightness-[108%] -z-10" />
    </>
  );
}
