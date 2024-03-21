import { Artist, GenreCard, MusicCard } from "../components";
import useWindowSizeStore from "../store/windowSize";

export const Home = () => {
  const windowSize = useWindowSizeStore((state: any) => state.windowSize);

  return (
    <>
      <div className="flex gap-4 overflow-x-scroll music-cards-container">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
      <div className="flex gap-4 w-full overflow-auto">
        {[...Array(8)].map((el) => (
          <GenreCard />
        ))}
      </div>
      <div className="flex-col gap-4 w-full">
        <h3>For you</h3>
        <ul className="flex gap-2">
          <li>
            <button className="button-click">Artist</button>
          </li>
          <li>
            <button className="button-click">Albums</button>
          </li>
          <li>
            <button className="button-click">Podcast & others</button>
          </li>
        </ul>
        <div className="flex gap-4">
          {[...Array(4)].map((el) => (
            <Artist />
          ))}
        </div>
      </div>
    </>
  );
};
