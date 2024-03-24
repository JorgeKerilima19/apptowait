import { Artist, MusicCard, SongInfoCard } from "../components";

export const Explore = () => {
  return (
    <div className="flex-col gap-5">
      <h3>Top Artists</h3>
      <div className="flex overflow-x-auto gap-2">
        {[...Array(3)].map((el) => (
          <Artist />
        ))}
      </div>
      <div>
        <h3>Top songs</h3>
        <div>
          {[...Array(4)].map((el) => (
            <SongInfoCard />
          ))}
        </div>
      </div>
      <div>
        <h3>Top Albums</h3>
        <div className="flex gap-4 overflow-x-auto">
          {[...Array(4)].map((el) => (
            <MusicCard />
          ))}
        </div>
      </div>
    </div>
  );
};
