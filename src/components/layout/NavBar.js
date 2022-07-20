import { NavLink } from "react-router-dom";
import home from "../img/home.png";
import about from "../img/info-button.png";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              <img className="nav-img" src={home} alt="home icon" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              <img className="nav-img" src={about} alt="home icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
