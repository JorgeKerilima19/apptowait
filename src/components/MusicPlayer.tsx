import { MusicPlayerControls, MusicPlayerSound, SongCard } from ".";
import "./styles/musicPlayer.css";

export const MusicPlayer = () => {
  return (
    <div className="fixed player-container p-2 text-primary flex justify-btw items-center">
      <SongCard />
      <MusicPlayerControls />
      <MusicPlayerSound />
    </div>
  );
};
