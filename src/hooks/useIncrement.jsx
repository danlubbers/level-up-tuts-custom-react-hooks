import { useState } from "react";

export const useIncrement = ({
  maxValue = 1000,
  minValue = -1000,
  initialValue = 0,
  step = 1,
}) => {
  const [value, setValue] = useState(initialValue);

  const decrement = () =>
    setValue((prevState) =>
      prevState - step <= minValue ? minValue : prevState - step
    );

  const increment = () =>
    setValue((prevState) =>
      prevState + step >= maxValue ? maxValue : prevState + step
    );

  const reset = () => setValue(initialValue);

  return [value, { increment, decrement, reset }];
};
