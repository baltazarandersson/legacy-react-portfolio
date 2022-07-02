import { FiGithub, FiExternalLink } from "react-icons/fi";

export function ProjectCard({ params }) {
  const { deploy, title, description, repository, tags, thumbnail } = params;

  return (
    <div className="flex flex-col w-full rounded-2xl bg-indigo-100 dark:bg-indigo-700 border-2 border-indigo-100 dark:border-indigo-700 shadow-sm">
      <div className="relative rounded-2xl overflow-hidden">
        <a href={deploy || repository} target="_blank" rel="noreferrer">
          <img
            className="w-full object-contain hover:brightness-[80%] duration-150"
            alt="app"
            src={thumbnail}
          />
        </a>
        <div className="absolute bottom-0 flex items-center w-full justify-between p-[4px] px-4 bg-indigo-100/80 dark:bg-indigo-600/70 backdrop-blur-sm">
          <h1 className="text-xl font-medium dark:text-indigo-50">{title}</h1>
          <div className="flex items-center gap-4">
            <a
              href={repository}
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition-transform"
            >
              <FiGithub size="20px" />
            </a>
            {deploy && (
              <a
                href={deploy}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125 transition-transform"
              >
                <FiExternalLink size="20px" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-between p-4 gap-4">
        <div>
          <p>{description}</p>
        </div>

        <div className="flex items-center gap-2 pb-2 overflow-x-auto w-full max-w-full tags">
          {tags.map((tag) => {
            return (
              <p
                key={tag.title}
                style={{ background: tag.color }}
                className={`px-2 py-[2px]  text-indigo-50 text-sm rounded-2xl flex items-center whitespace-nowrap`}
              >
                {tag.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
