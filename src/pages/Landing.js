import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import { useState } from "react";

const Landing = (props) => {
  const [hasAccount, setHasAccount] = useState(true);

  const { setUser } = props;

  const handleClick = () => {
    setHasAccount(false);
  };

  return (
    <div>
      <h1>Landing Page</h1>
      {/* renders login first */}
      {hasAccount === true ? (
        <div>
          <LoginForm setUser={setUser} />
          <p>
            Don't have an account? <br />{" "}
            <span
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Sign Up
            </span>
          </p>
        </div>
      ) : (
        <div>
          <RegisterForm setUser={setUser} />
        </div>
      )}
    </div>
  );
};

export default Landing;
