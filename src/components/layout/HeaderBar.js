import NavBar from "./NavBar";
import notes from "../img/music-notes.png";
import userIcon from "../img/user.png";

const HeaderBar = (props) => {
  const { user } = props;
  return (
    <div className="header-bar">
      <div className="site-logo">
        <img
          className="logo-img"
          src={notes}
          alt="logo - multi colored music notes"
        />
        <h4 className="site-name">Do Re Mi</h4>
      </div>
      <NavBar />
      <div className="header-user">
        <h5>
          <img className="user-img" src={userIcon} alt="user icon" /> Hello,{" "}
          {user && <span>{user.username}</span>}
        </h5>
      </div>
    </div>
  );
};

export default HeaderBar;
