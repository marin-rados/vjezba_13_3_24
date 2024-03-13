import Header from "./header";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/nopage">Nothing Here</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
