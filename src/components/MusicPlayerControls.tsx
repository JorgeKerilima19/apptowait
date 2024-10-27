import prev from "../assets/SVG/prev.svg";
import pause from "../assets/SVG/pause.svg";
import next from "../assets/SVG/next.svg";
import random from "../assets/SVG/random.svg";
import repeat from "../assets/SVG/repeat.svg";

export const MusicPlayerControls = () => {
  return (
    <div className="controls-container flex-col gap-2 items-center">
      <div className="flex gap-4 items-center">
        <img src={random} alt="random" className="icon" />
        <div className="flex gap-2 items-center">
          <img src={prev} alt="prev" className="icon" />
          <img src={pause} alt="pause" className="icon" />
          <img src={next} alt="next" className="icon" />
        </div>
        <img src={repeat} alt="repeat" className="icon" />
      </div>
      <div className="flex gap-2 items-center relative">
        <span>00:00</span>
        <div className="controls-duration">
          <span className="duration-indicator"></span>
        </div>
        <span>00:00</span>
      </div>
    </div>
  );
};
