import { Artist, GenreCard, MusicCard } from "../components";
import useWindowSizeStore from "../store/windowSize";
import img from "../assets/placeholder.jpg";
import search from "../assets/SVG/search.svg";

export const Home = () => {
  const windowSize = useWindowSizeStore((state: any) => state.windowSize);

  return (
    <>
      <div className="mb-4 flex justify-btw items-center pr-3">
        <form className="flex items-center gap-4 form p-4" action="">
          <img className="icon" src={search} alt="search" />
          <input
            className="search text-secondary"
            type="text"
            id="search"
            placeholder="type artist or song"
          />
        </form>
        <div className="user-container flex items-center gap-5 p-2">
          <img className="user-img" src={img} alt="User Image" />
          <span>user name</span>
        </div>
      </div>
      <div className="separator-top py-5">
        <h2>Today's Selection</h2>
        <div className="flex gap-4 overflow-x-scroll py-4 music-cards-container">
          {[...Array(8)].map((el) => (
            <MusicCard />
          ))}
        </div>
      </div>
      <div className="separator-top py-4">
        <h2>Genres</h2>
        <div className="flex gap-4 py-5 w-full overflow-auto">
          {[...Array(8)].map((el) => (
            <GenreCard />
          ))}
        </div>
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
        <div className="flex gap-4 pb-8">
          {[...Array(4)].map((el) => (
            <Artist />
          ))}
        </div>
      </div>
    </>
  );
};
