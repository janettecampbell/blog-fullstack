import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jan-blog-app.herokuapp.com/auth", formData)
      .then((res) => {
        if (res.data.token && res.data.user) {
          localStorage.setItem("userToken", res.data.token);
          props.setUser(res.data.user);
          history.push("/home");
        } else {
          console.error(res.data);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
