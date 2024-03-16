export const GenreCard = () => {
  const colors: { [key: number]: string } = {
    0: "black",
    1: "red",
    2: "blue",
    3: "green",
    4: "yellow",
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
