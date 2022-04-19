import { useEffect, useRef, useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { CgArrowDown } from "react-icons/cg";
import { useNavigate } from "./hooks/useNavigate";
import { Projects } from "./components/Projects";
import { Courses } from "./components/Courses";
import { Circles } from "./components/Circles";
import { Footer } from "./components/Footer";

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
          className={`hidden md:block fixed bottom-8 right-8 bg-indigo-400 dark:bg-indigo-600 rounded-xl p-2 transition-all z-10 ${
            showButton ? "translate-y-0" : "translate-y-20"
          }`}
          onClick={() => navigateTo(0)}
        >
          <CgArrowDown size="28px" className="rotate-180 text-indigo-50" />
        </button>
      </main>

      <Footer />

      <Circles />
    </>
  );
}
