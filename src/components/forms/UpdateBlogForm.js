import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateBlogForm = (props) => {
  const { viewForm, setShowUpdateForm, blogs, setBlogs } = props;
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://jan-blog-api.onrender.com/blogs/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://jan-blog-api.onrender.com/blogs/${id}`, blog, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => setBlogs([...blogs.splice(0, blogs.length - 1), res.data]))
      .then((res) => history.push("/home"))
      .catch((err) => console.error(console.error(err)));

    setShowUpdateForm(false);
  };

  return (
    <div className="update-blog-form-wrapper">
      {blog && (
        <div className="update-blog-form">
          <div className="close-btn">
            <button className="btn btn-danger" onClick={viewForm}>
              X
            </button>
          </div>

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
