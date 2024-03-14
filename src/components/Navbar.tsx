import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <Link to="/radio">Radio</Link>
            <li></li>
            <li>
              <Link to="/history">History</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
