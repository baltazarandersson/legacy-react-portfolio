import { data } from "../../data/data";
import { BiLink } from "react-icons/bi";

export function CoursesTimeline() {
  return (
    <div className="flex flex-col gap-16">
      {data.qualification.map((year) => {
        return (
          <div
            key={year.title}
            className="flex flex-col items-center w-full h-auto gap-8"
          >
            <h1 className="text-3xl font-semibold text-indigo-50 px-8 py-2 bg-indigo-400 rounded-xl">
              {year.title}
            </h1>
            <div className="flex w-full flex-col items-start gap-8">
              {year.months.map((month) => {
                return (
                  <>
                    <h1 className="text-2xl w-fit font-semibold text-indigo-50 px-4 bg-indigo-400  rounded-xl">
                      {month.title}
                    </h1>
                    <div className="w-full flex flex-col gap-4">
                      {month.courses.map((course) => {
                        return (
                          <div className="flex w-full items-center justify-between border-2 h-16 border-indigo-100 rounded-full gap-8 pr-8 shadow-sm">
                            <div className="flex items-center h-full gap-4">
                              <img
                                src={course.icon}
                                alt="course"
                                className="h-full rounded-full"
                              />
                              <div className="flex flex-col h-full justify-center">
                                <h2 className="font-semibold text-lg">
                                  {course.title}
                                </h2>
                                <p className="font-bold text-indigo">
                                  {course.author}
                                </p>
                              </div>
                            </div>
                            {course.certificate && (
                              <a
                                href={course.certificate}
                                className="text-indigo-400"
                              >
                                <BiLink size="32px" />
                              </a>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
