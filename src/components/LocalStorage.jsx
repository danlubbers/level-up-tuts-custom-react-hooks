import React from "react";
import { useLocalStorage } from "../hooks";

const LocalStorage = () => {
  const [value, setValue] = useLocalStorage("Tester", "Initial Tester");

  return (
    <div>
      <h1>{value || ""}</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default LocalStorage;
