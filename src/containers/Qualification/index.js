import { CoursesTimeline } from "containers/CoursesTimeline";
import certification from "assets/thumbnails/escuelajs-diploma.png";

export function Qualification() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start py-16 md:py-36 gap-10 sm:gap-16">
      <h1 className="text-3xl sm:text-4xl font-medium">Qualification</h1>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://platzi.com/p/baltazarander/ruta/100-escuela-javascript/diploma/detalle/"
        className="md:w-3/4 lg:w-2/3 2xl:w-2/4 shadow-md cursor-pointer hover:scale-[102%] transition-transform overflow-hidden rounded-md"
      >
        <img src={certification} alt="certification" className="w-full" />
      </a>
      <CoursesTimeline />
    </div>
  );
}
