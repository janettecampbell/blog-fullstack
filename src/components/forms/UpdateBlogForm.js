import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateBlogForm = (props) => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/blogs/${id}`, blog, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => history.push("/home"));
  };

  return (
    <div>
      {blog && (
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={blog.blog_title}
            onChange={handleChange}
          />

          <div className="mb-3">
            <label className="form-label" htmlFor="details">
              Details
            </label>
            <input
              className="form-control"
              type="text"
              id="details"
              name="details"
              value={blog.blog_content}
              onChange={handleChange}
            />
          </div>

          <input
            type="submit"
            className="btn btn-success"
            value="Update Blog Post"
          />
        </form>
      )}
    </div>
  );
};

export default UpdateBlogForm;
