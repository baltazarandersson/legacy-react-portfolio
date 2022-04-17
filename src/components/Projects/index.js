import { ProjectCard } from "../ProjectCard";
import { data } from "../../data/data";

export function Projects() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start py-36 gap-16">
      <h1 className="text-4xl font-medium ">Some of my work</h1>
      <div className="grid grid-cols-2 gap-8 items-start w-full justify-around">
        {data.projects.map((project) => {
          return <ProjectCard key={project.title} params={project} />;
        })}
      </div>
    </div>
  );
}
