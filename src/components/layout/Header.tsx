import { Link } from "react-router-dom";

import "./Header.scss";

import useScreenSize from "../../utils";

const Header = () => {
  const screenSize = useScreenSize();

  return (
    <header>
      <nav className="nav">
        <div className="container nav__container">
          <Link to="/user/home" className="nav__logo">
            {screenSize > 450 ? "PTP Solutions" : "PTPs"} <span className="logo-status">User</span>
          </Link>
          <ul className="nav__menu">
            <li className="nav__item">
              <Link className="nav__link" to="/user/services">
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/user/account">
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
