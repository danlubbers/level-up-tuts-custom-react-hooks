import { useState, useMemo } from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  const bind = useMemo(() => {
    return {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    };
  }, []);

  return [isHovered, bind];
};
