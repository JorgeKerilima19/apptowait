import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="header flex items-center">
        <nav>
          <ul className="flex-col items-start navbar gap-4 pl-4">
            <li>
              <NavLink className="relative pl-1" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="relative pl-1" to="/explore">
                Explore
              </NavLink>
            </li>
            <NavLink className="relative pl-1" to="/radio">
              Radio
            </NavLink>
            <li>
              <NavLink className="relative pl-1" to="/history">
                History
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="pt-5">
        <Outlet />
      </main>
    </>
  );
};
