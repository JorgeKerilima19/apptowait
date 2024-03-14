import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/radio">Radio</Link>
        <Link to="/history">History</Link>
      </ul>
      <Outlet />
    </>
  );
};
