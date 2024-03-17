import imgplaceholder from "../assets/placeholder.jpg";

export const MusicCard = () => {
  return (
    <div
      style={{ backgroundImage: `url(${imgplaceholder})` }}
      className="music-card-container relative text-primary flex items-center"
    >
      <div className="flex-col gap-3 pl-4">
        <h3 className="text-subtitle">Music Title</h3>
        <span className="mb-4">Short description of the song</span>
        <div className="flex gap-1">
          <button className="card-button-listen">Play</button>
          <button className="card-button-add">Favorites</button>
        </div>
      </div>
    </div>
  );
};
