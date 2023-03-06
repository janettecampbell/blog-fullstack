import LoginForm from "../forms/LoginForm";
import notes from "../img/music-notes.png";
import RegisterForm from "../forms/RegisterForm";
import { useState } from "react";

const Landing = (props) => {
  const [hasAccount, setHasAccount] = useState(true);

  const { setUser } = props;

  const handleClick = () => {
    if (hasAccount) {
      setHasAccount(false);
    } else {
      setHasAccount(true);
    }
  };

  return (
    <div className="landing-page">
      {/* <h1 className="page-header">Landing Page</h1> */}
      <div className="landing-image">
        <img
          className="music-notes"
          src={notes}
          alt="multicolored music notes"
        />
      </div>
      <header class="landing-header">
        <h1>Do Re Mi</h1>
        <p className="landing-text">
          *Takes 30 seconds for server to wake up.*
        </p>
      </header>
      {/* renders login first */}
      {hasAccount === true ? (
        <div className="landing-form">
          <LoginForm setUser={setUser} />
          <p className="reg-login">
            Don't have an account? <br />{" "}
            <span
              type="button"
              className="btn btn-secondary"
              onClick={handleClick}
            >
              Sign Up
            </span>
          </p>
        </div>
      ) : (
        <div className="landing-form">
          <RegisterForm setUser={setUser} />
          <p className="reg-login">
            {" "}
            Have an account? <br />{" "}
            <span
              type="button"
              className="btn btn-secondary"
              onClick={handleClick}
            >
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Landing;
