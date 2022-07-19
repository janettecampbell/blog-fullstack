import { useState } from "react";
import axios from "axios";

const CreateBlogForm = (props) => {
  const [formData, setFormData] = useState({
    blog_title: "",
    blog_content: "",
    private: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/blogs", formData, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => props.setBlogs([...props.blogs, res.data]));
  };

  return (
    <div className="blog-form">
      <div className="close-btn">
        <button className="btn btn-danger" onClick={props.viewForm}>
          X
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="blog-title">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="blog-title"
            name="blog-title"
            defaultValue={formData.blog_title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="blog-content">
            Post
          </label>
          <textarea
            className="form-control"
            type="text"
            id="blog-content"
            name="blog-content"
            defaultValue={formData.blog_content}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            id="private"
            type="checkbox"
            defaultValue={formData.private}
            checked={formData.private === true}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.checked })
            }
          />
          <label className="form-check-label" htmlFor="private">
            Private
          </label>
        </div>

        <input type="submit" className="btn btn-primary" value="Post" />
      </form>
    </div>
  );
};

export default CreateBlogForm;
