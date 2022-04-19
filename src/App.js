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
          className={"min-h-screen h-screen"}
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
          className={`hidden md:block fixed bottom-8 right-8 bg-indigo-400 dark:bg-indigo-600 rounded-xl p-2 transition-all ${
            showButton ? "translate-y-0" : "translate-y-20"
          }`}
          onClick={() => navigateTo(0)}
        >
          <CgArrowDown size="28px" className="rotate-180 text-indigo-50" />
        </button>
        <footer className="h-16" />
      </main>
      <div className="absolute p-[30px] sm:p-[50px] top-[10%] md:top-[18%] left-[15%] md:left-[20%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[50px] sm:p-[70px] top-[65%] md:top-[75%] left-[10%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[100px] sm:p-[120px] lg:p-[150px] top-[15%] md:top-[35%] left-[45%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[15px] sm:p-[30px] top-[75%] left-[85%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[20px] top-[160%] sm:top-[140%] left-[5%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[40px] top-[175%] left-[75%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[20px] top-[210%] sm:top-[220%] left-[70%] sm:left-[90%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[100px] top-[220%] left-[10%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[50px] top-[290%] left-[70%] sm:left-[80%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[30px] top-[350%] left-[5%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[70px] top-[390%] left-[60%] sm:left-[70%] md:left-[80%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[40px] top-[440%] left-[10%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[90px] top-[480%] left-[40%] sm:left-[60%] md:left-[75%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[20px] top-[520%] left-[15%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[40px] top-[560%] left-[65%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[130px] top-[625%] left-[20%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
      <div className="absolute p-[30px] top-[665%] left-[80%] bg-gradient-to-br from-indigo-50  to-indigo-400 dark:from-indigo-700 dark:to-indigo-900 rounded-full brightness-[108%] dark:brightness-[85%] -z-10" />
    </>
  );
}
