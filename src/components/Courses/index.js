import { CoursesTimeline } from "../CoursesTimeline";

export function Courses() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start py-16 md:py-36 gap-10 sm:gap-16">
      <h1 className="text-3xl sm:text-4xl font-medium">Qualification</h1>
      <CoursesTimeline />
    </div>
  );
}
