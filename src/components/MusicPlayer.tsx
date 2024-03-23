import { SongCard } from ".";
import "./styles/musicPlayer.css";

export const MusicPlayer = () => {
  return (
    <div className="fixed player-container p-2 text-primary">
      <SongCard />
    </div>
  );
};
