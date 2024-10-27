import { MusicPlayerControls, MusicPlayerSound, SongCard } from ".";
import "./styles/musicPlayer.css";

export const MusicPlayer = () => {
  return (
    <div className="fixed player-container p-2 text-secondary flex justify-btw items-center bg-primary">
      <SongCard />
      <MusicPlayerControls />
      <MusicPlayerSound />
    </div>
  );
};
