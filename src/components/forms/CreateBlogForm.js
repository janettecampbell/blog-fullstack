import { useState } from "react";
import axios from "axios";

const CreateBlogForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
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
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            defaultValue={formData.title}
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
            defaultValue={formData.content}
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
