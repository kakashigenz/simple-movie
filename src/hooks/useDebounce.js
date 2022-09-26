import { useEffect, useState } from "react";

export default function useDebounce(inititalValue = "", delay = 1000) {
  const [value, setValue] = useState(inititalValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(inititalValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [inititalValue, delay]);
  return value;
}
