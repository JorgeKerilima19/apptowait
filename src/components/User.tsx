import imgplaceholder from "../assets/placeholder.jpg";

export const User = () => {
  return (
    <div className="flex-col items-center">
      <img className="user-img" src={imgplaceholder} alt="placeholder" />
      <span>Placeholder</span>
    </div>
  );
};
