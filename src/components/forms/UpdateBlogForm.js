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
      .post(`http://localhost:5000/blogs/${id}`, blog, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => history.push("/home"));
  };

  return (
    <div>
      {blog && (
        <div className="blog-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                className="form-control"
                type="text"
                id="title"
                name="title"
                value={blog.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="content">
                Post
              </label>
              <textarea
                className="form-control"
                type="text"
                id="content"
                name="content"
                value={blog.content}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>

            <div className="mb-3">
              <input
                className="form-check-input"
                id="private"
                type="checkbox"
                value={blog.private}
                checked={blog.private === true}
                onChange={(e) =>
                  setBlog({ ...blog, [e.target.id]: e.target.checked })
                }
              />
              <label className="form-check-label" htmlFor="private">
                Private
              </label>
            </div>

            <input
              type="submit"
              className="btn btn-primary"
              value="Update Post"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateBlogForm;
