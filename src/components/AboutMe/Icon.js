import { useState } from "react";

export const Icon = ({ props }) => {
  const [isOver, setOver] = useState(false);

  const handleToggleMouse = (state) => {
    setOver(state);
  };

  return (
    <div
      onMouseEnter={() => handleToggleMouse(true)}
      onMouseLeave={() => handleToggleMouse(false)}
      className="relative"
    >
      <img
        key={`icon-${props.alt}`}
        className={`h-10 w-12 lg:h-12 lg:w-12 ${props.class}`}
        alt={props.alt}
        src={props.icon}
      />
      {isOver ? (
        <div className="absolute left-1/2 -translate-x-1/2 py-1 px-4 bg-indigo-100 dark:bg-indigo-700 z-10 mt-2 font-semibold rounded-xl min-w-max">
          {props.title}
        </div>
      ) : null}
    </div>
  );
};
