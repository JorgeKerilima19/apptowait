export const MusicPlayerControls = () => {
  return (
    <div className="controls-container flex-col gap-2 items-center">
      <div className="flex gap-4 items-center">
        <span className="svg-placeholder"></span>
        <div className="flex gap-2 items-center">
          <span className="svg-placeholder"></span>
          <span className="svg-placeholder"></span>
          <span className="svg-placeholder"></span>
        </div>
        <span className="svg-placeholder"></span>
      </div>
      <div className="flex gap-2 items-center relative">
        <span>start</span>
        <div className="controls-duration">
          <span className="duration-indicator"></span>
        </div>
        <span>end</span>
      </div>
    </div>
  );
};
