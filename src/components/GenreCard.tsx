export const GenreCard = () => {
  const colors: { [key: number]: string } = {
    0: "#845EC2",
    1: "#D65DB1",
    2: "#FF6F91",
    3: "#FF9671",
    4: "#FFC75F",
    5: "#F9F871",
    6: "#008F7A",
    7: "#0081CF",
    8: "#C34A36",
    9: "#00C9A7",
    10: "#845EC2",
  };

  const startNumber = Math.floor(Math.random() * Object.keys(colors).length);
  const endNumber = Math.floor(Math.random() * Object.keys(colors).length);
  const degree = Math.floor(Math.random() * 360);

  const backgroundStyle = {
    background: `linear-gradient(${degree}deg, ${colors[startNumber]} 0%, ${colors[endNumber]} 100%)`,
  };

  return (
    <div style={backgroundStyle} className="p-10 text-primary">
      <span>{colors[startNumber]}</span>
    </div>
  );
};
