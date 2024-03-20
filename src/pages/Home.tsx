import { GenreCard, MusicCard, User } from "../components";
import useWindowSizeStore from "../store/windowSize";

export const Home = () => {
  const windowSize = useWindowSizeStore((state: any) => state.windowSize);

  return (
    <>
      <div className="flex gap-2 w-full">
        {[...Array(4)].map((el) => (
          <User />
        ))}
      </div>
      <div className="flex gap-4 overflow-x-scroll music-cards-container">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
      <div>
        Genres and Moods
        <div className="flex gap-4 w-full overflow-auto">
          {[...Array(8)].map((el) => (
            <GenreCard />
          ))}
        </div>
      </div>
    </>
  );
};
