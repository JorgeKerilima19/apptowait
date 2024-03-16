import { GenreCard, User } from "../components";
import useWindowSizeStore from "../store/windowSize";

export const Home = () => {
  const windowSize = useWindowSizeStore((state: any) => state.windowSize);

  return (
    <>
      <div className="flex gap-2">
        {[...Array(4)].map((el) => (
          <User />
        ))}
      </div>
      <div>Trending</div>
      <div>
        Genres and Moods
        <div className="flex gap-4 w-full overflow-auto">
          {[...Array(4)].map((el) => (
            <GenreCard />
          ))}
        </div>
      </div>
    </>
  );
};
