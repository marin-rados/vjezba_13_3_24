import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </header>
    </>
  );
};

export default Header;
