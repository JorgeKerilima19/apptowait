import volume from "../assets/SVG/volume.svg";
export const MusicPlayerSound = () => {
  return (
    <div className="flex gap-3 items-center">
      <img src={volume} alt="volume" className="icon" />
      <div className="controls-duration relative">
        <span className="duration-indicator"></span>
      </div>
    </div>
  );
};
