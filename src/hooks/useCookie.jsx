import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useCookies = ({ key }) => {
  const initialState = Cookies.get(key);
  const [cookie, setStateCookie] = useState(initialState);

  useEffect(() => {
    Cookies.set(key, cookie);
  }, [cookie, key]);

  return [cookie, setStateCookie];
};
