import { useEffect, useState } from "react";

export interface Size {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined
  })
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function resize(){
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      window.addEventListener('resize', resize);
      resize();
      return () => window.removeEventListener('resize', resize);
    }
  }, []);
  return windowSize;
}