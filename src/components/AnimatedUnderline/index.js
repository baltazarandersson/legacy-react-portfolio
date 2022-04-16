import React, { useEffect, useRef, useMemo, useCallback } from "react";

export const AnimatedUnderline = ({
  children,
  currentElement,
  underlineClassName = "",
  className = "",
  styles = {},
}) => {
  const barRef = useRef();
  const childrenRefs = useRef([]);

  const updateBar = ({ width, left }) => {
    barRef.current.style.width = `${width}px`;
    barRef.current.style.left = `${left}px`;
  };

  const handleMouseEnter = useCallback(({ target }) => {
    updateBar({
      width: target.offsetWidth,
      left: target.offsetLeft,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    updateBar({
      width: childrenRefs.current[currentElement].offsetWidth,
      left: childrenRefs.current[currentElement].offsetLeft,
    });
  }, [currentElement]);

  const mappedChildren = useMemo(
    () =>
      React.Children.map(children, (child, index) => (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={(childRef) => {
            childrenRefs.current[index] = childRef;
          }}
        >
          {child}
        </div>
      )),
    [children, handleMouseEnter, onMouseLeave]
  );

  useEffect(() => {
    updateBar({
      width: childrenRefs.current[currentElement].offsetWidth,
      left: childrenRefs.current[currentElement].offsetLeft,
    });
  }, [children, mappedChildren, currentElement]);

  return (
    <div className={`${className} relative`} style={styles}>
      {mappedChildren}
      <div
        className={`h-[6px] duration-300 absolute bottom-0 ${underlineClassName}`}
        ref={barRef}
      />
    </div>
  );
};
