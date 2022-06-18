import { useState } from "react";

export const TechIcon = ({ IconProps }) => {
  const [isOver, setOver] = useState(false);

  const handleToggleMouse = (state) => {
    setOver(state);
  };

  return (
    <a
      href={IconProps.source}
      target="_blank"
      rel="noreferrer"
      key={`icon-${IconProps.alt}`}
      onMouseEnter={() => handleToggleMouse(true)}
      onMouseLeave={() => handleToggleMouse(false)}
      className="relative"
    >
      <img
        key={`icon-${IconProps.alt}`}
        className={`h-10 w-12 lg:h-12 lg:w-12 ${IconProps.class}`}
        alt={IconProps.alt}
        src={IconProps.icon}
      />
      {isOver ? (
        <div className="absolute left-1/2 -translate-x-1/2 py-1 px-4 bg-indigo-100 dark:bg-indigo-700 z-10 mt-2 font-semibold rounded-xl min-w-max">
          {IconProps.title}
        </div>
      ) : null}
    </a>
  );
};
