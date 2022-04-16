import { useEffect, useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { CgArrowDown } from "react-icons/cg";
import { useNavigate } from "./hooks/useNavigate";
import { Projects } from "./components/Projects";

export function App() {
  const [showButton, setShowButton] = useState(false);
  const navigateTo = useNavigate;

  useEffect(() => {
    const pageHeight = window.innerHeight;
    const onScroll = (e) => {
      const newShowButton = window.scrollY > pageHeight / 2;
      showButton !== newShowButton && setShowButton(newShowButton);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showButton]);

  return (
    <>
      <Header />
      <main className="w-2/3 relative mx-auto">
        <section className="h-screen">
          <Home />
        </section>
        <section className="h-screen">
          <AboutMe />
        </section>
        <section className="h-[200vh]">
          <Projects />
        </section>

        <button
          className={`fixed bottom-8 right-8 bg-indigo-400 rounded-xl p-2 transition-transform ${
            showButton ? "translate-y-0" : "translate-y-20"
          }`}
          onClick={() => navigateTo(0)}
        >
          <CgArrowDown size="28px" className="rotate-180 text-indigo-50" />
        </button>
      </main>
      <div className="absolute p-[50px] top-[18vh] left-[20vw] bg-gradient-to-br from-indigo-50 to-indigo-400 rounded-full brightness-110 -z-10" />
      <div className="absolute p-[70px] top-[75vh] left-[10vw] bg-gradient-to-br from-indigo-50 to-indigo-400 rounded-full brightness-110 -z-10" />
      <div className="absolute p-[150px] top-[35vh] left-[45vw] bg-gradient-to-br from-indigo-50 to-indigo-400 rounded-full brightness-110 -z-10" />
      <div className="absolute p-[30px] top-[75vh] left-[85vw] bg-gradient-to-br from-indigo-50 to-indigo-400 rounded-full brightness-110 -z-10" />
      <div className="absolute p-[20px] top-[140vh] left-[5vw] bg-gradient-to-br from-indigo-50 to-indigo-400 rounded-full brightness-110 -z-10" />
      <div className="absolute p-[40px] top-[175vh] left-[75vw] bg-gradient-to-br from-indigo-50 to-indigo-400 rounded-full brightness-110 -z-10" />
    </>
  );
}
