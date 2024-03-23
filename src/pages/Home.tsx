import { Artist, GenreCard, MusicCard } from "../components";
import useWindowSizeStore from "../store/windowSize";
import img from "../assets/placeholder.jpg";

export const Home = () => {
  const windowSize = useWindowSizeStore((state: any) => state.windowSize);

  return (
    <>
      <div className="mb-4 flex justify-btw items-center pr-3">
        <form action="">
          <input type="text" id="search" />
        </form>
        <div className="user-container flex items-center gap-5 p-2">
          <img className="user-img" src={img} alt="User Image" />
          <span>user name</span>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-scroll music-cards-container">
        {[...Array(8)].map((el) => (
          <MusicCard />
        ))}
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
        <div className="flex gap-4 pb-8">
          {[...Array(4)].map((el) => (
            <Artist />
          ))}
        </div>
      </div>
    </>
  );
};
