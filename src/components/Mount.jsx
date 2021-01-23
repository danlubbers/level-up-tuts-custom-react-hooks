import React from "react";
import { useMount, useUnmount, useToggle } from "../hooks/";

const Mount = () => {
  const { isToggled, toggle } = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <Unmount />}
    </div>
  );
};

const Unmount = () => {
  useMount(() => {
    console.log("I mounted!");
  });
  useUnmount(() => {
    console.log("I unMounted!");
  });
  return <div>UnMounted</div>;
};

export default Mount;
