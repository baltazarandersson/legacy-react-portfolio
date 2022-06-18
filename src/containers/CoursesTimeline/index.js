import { data } from "../../data/data";
import { CourseCard } from "./CourseCard";

export function CoursesTimeline() {
  return (
    <div className="flex flex-col gap-16">
      {data.qualification.map((year) => {
        return (
          <div
            key={year.title}
            className="flex flex-col items-center w-full h-auto gap-8"
          >
            <h1 className="text-3xl font-semibold text-indigo-50 px-4 sm:px-8 py-1 sm:py-2 bg-indigo-400 dark:bg-indigo-600 rounded-xl">
              {year.title}
            </h1>

            {year.months.map((month) => {
              return (
                <div
                  className="flex w-full flex-col items-start gap-8"
                  key={month.title}
                >
                  <h1 className="text-2xl w-fit font-semibold text-indigo-50 px-4 bg-indigo-400 dark:bg-indigo-600  rounded-xl">
                    {month.title}
                  </h1>
                  <div className="w-full flex flex-col gap-4">
                    {month.courses.map((course) => {
                      return <CourseCard key={course.link} course={course} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
