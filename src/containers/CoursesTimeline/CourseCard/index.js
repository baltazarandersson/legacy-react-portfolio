import { BiLink } from "react-icons/bi";

export function CourseCard({ course }) {
  return (
    <a href={course.link} target="_blank" rel="noreferrer">
      <div className="flex min-w-0 w-full items-center justify-between border-2 h-16 bg-indigo-100 dark:bg-indigo-700 border-indigo-100 dark:border-indigo-700 rounded-full gap:4 sm:gap-8 pr-4 sm:pr-8 shadow-sm hover:scale-105 transition-transform">
        <div className="flex items-center h-full gap-4 min-w-0">
          <img src={course.icon} alt="course" className="h-full rounded-full" />
          <div className="flex flex-col h-full justify-center min-w-0 whitespace-nowrap">
            <h2 className="font-semibold text-sm sm:text-lg overflow-hidden text-ellipsis">
              {course.title}
            </h2>
            <p className="font-bold text-sm sm:text-base text-indigo dark:text-indigo-300">
              {course.author}
            </p>
          </div>
        </div>
        {course.link && (
          <div className="text-indigo-400 dark:text-indigo-300 duration-200 hover:scale-110 hover:rotate-6">
            <BiLink size="28px" />
          </div>
        )}
      </div>
    </a>
  );
}
