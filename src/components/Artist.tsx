import imgplaceholder from "../assets/placeholder.jpg";

export const Artist = () => {
  return (
    <div className="flex-col items-center gap-5 artist-container">
      <img className="artist-img" src={imgplaceholder} alt="placeholder" />
      <h5>Placeholder</h5>
    </div>
  );
};
