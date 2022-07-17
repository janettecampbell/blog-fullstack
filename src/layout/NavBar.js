import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              {" "}
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              {" "}
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <h5 className="nav-user">
        Hello, {props.user && <span>{props.user.username}</span>}
      </h5>
    </div>
  );
};

export default NavBar;
