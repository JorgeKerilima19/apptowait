import useWindowSizeStore from "../store/windowSize";

export const Home = () => {
  const windowSize = useWindowSizeStore((state: any) => state.windowSize);

  return (
    <div>
      Home
      <span>Width: {windowSize}</span>
    </div>
  );
};
