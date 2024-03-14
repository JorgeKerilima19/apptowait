import { create } from "zustand";

const initialSize = window.innerWidth;

const useWindowSizeStore = create((set) => {
  const handleResize = () => {
    set((state: any) => ({ ...state, windowSize: window.innerWidth }));
  };

  set({
    windowWidth: initialSize,
  });
  
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
});

export default useWindowSizeStore;
