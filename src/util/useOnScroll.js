import { useEffect } from "react";

export default function useOnScroll(action) {
  useEffect(() => {
    window.addEventListener("scroll", action);
    return () => {
      window.removeEventListener("scroll", action);
    };
  }, [action]);
}
