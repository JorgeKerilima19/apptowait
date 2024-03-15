import { create } from "zustand";

const initialSize = window.innerWidth;

const useWindowSizeStore = create((set) => {
  set({
    windowWidth: initialSize,
  });

  const handleResize = () => {
    set((state: any) => ({
      ...state,
      windowSize: window.innerWidth,
    }));
  };

  window.addEventListener("DOMContentLoaded", handleResize);
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("DOMContentLoaded", handleResize);
  };
});

export default useWindowSizeStore;
