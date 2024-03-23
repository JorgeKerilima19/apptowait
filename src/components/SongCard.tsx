import img from "../assets/placeholder.jpg";

export const SongCard = () => {
  return (
    <div className="flex gap-2">
      <img src={img} alt="song-image" className="song-img" />
      <div className="flex-col">
        <h5>Song Name</h5>
        <span>artist</span>
      </div>
    </div>
  );
};
