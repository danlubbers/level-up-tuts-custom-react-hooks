import React, { createContext, useContext } from "react";
import { useToggle } from "../hooks";

export const AppContext = createContext({
  isMenuOpen: false,
});

export const PageWrapper = ({ children }) => {
  const { isToggled, toggle } = useToggle(false);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// This allows use to not have to import useContext on every component where we utilize AppContext
export const useAppState = () => useContext(AppContext);
