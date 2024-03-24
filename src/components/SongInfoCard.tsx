import img from "../assets/placeholder.jpg";

export const SongInfoCard = () => {
  return (
    <div className="flex gap-4 items-center py-4">
      <span>ID</span>
      <div className="flex items-center gap-5">
        <img className="music-info-img" src={img} alt="" />
        <span>Song Title</span>
      </div>
      <span>Artist</span>
      <span>Duration</span>
      <span>Valoration</span>
    </div>
  );
};
