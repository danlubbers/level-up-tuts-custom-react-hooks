import { useState, useEffect } from "react";

let cached = [];

export const useScript = (src) => {
  const [status, setStatus] = useState({
    loaded: false,
    error: false,
  });

  useEffect(() => {
    if (cached.includes(src)) {
      setStatus({
        loaded: true,
        error: false,
      });
    } else {
      cached.push(src);

      const script = document.createElement("script");
      script.src = src;
      script.async = true;

      const onLoad = () => {
        setStatus({
          loaded: true,
          error: false,
        });
      };

      const onError = () => {
        const index = cached.indexOf(src);
        if (index >= 0) {
          cached.splice(index, 1);
        }
        script.remove();

        setStatus({
          loaded: true,
          error: true,
        });
      };

      script.addEventListener("load", onLoad);
      script.addEventListener("load", onError);

      document.body.appendChild(script);

      return () => {
        script.removeEventListener("load", onLoad);
        script.removeEventListener("load", onError);
      };
    }
  }, [src]);

  return [status.loaded, status.error];
};
