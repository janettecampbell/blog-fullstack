import { useState } from "react";
import axios from "axios";

const CreateBlogForm = (props) => {
  const [formData, setFormData] = useState({
    blog_title: "",
    blog_content: "",
    private: true,
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
            value={formData.blog_title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="blog-content">
            Post
          </label>
          <textarea
            className="form-control"
            id="blog-content"
            name="blog-content"
            value={formData.blog_content}
            onChange={handleChange}
            rows="3"
          ></textarea>
          {/* <input
            className="form-control"
            type="text"
            id="blog-content"
            name="blog-content"
            value={formData.blog_content}
            onChange={handleChange}
          /> */}
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value={formData.private}
            onChange={handleChange}
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
