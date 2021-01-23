import { useState } from "react";

export const useToggle = (initialValue) => {
  const [isToggled, setIsToggled] = useState(initialValue);
  // Using arrow function in setIsToggled to use prevState is better practice for accessing the current version of the state that has been propagated down.
  const toggle = () => setIsToggled((prevState) => !prevState);

  // Return an array if we want to rename the variables but have to adhere to the index in which they are being brought in
  // return [isToggled, setIsToggled, toggle];

  // Return an object so we can use the specific variable names and omit any we aren't using in the component
  return { isToggled, setIsToggled, toggle };
};
