import NavBar from "../layout/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateBlogForm from "../forms/CreateBlogForm";

const Home = (props) => {
  const [blogs, setBlogs] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs", {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const viewForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const handleDelete = (blog) => {
    axios
      .delete(`http://localhost:5000/blogs/${blog._id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        setBlogs([...blogs.filter((b) => b._id !== blog._id)]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <NavBar user={props.user} />

      {showForm === true ? (
        <button className="btn btn-danger" onClick={viewForm}>
          Close
        </button>
      ) : (
        <button className="btn btn-primary" onClick={viewForm}>
          Post Blog
        </button>
      )}

      {showForm === true ? (
        <CreateBlogForm setBlogs={setBlogs} blogs={blogs} />
      ) : null}
      {/*  */}
      {/* <button onClick={setShowForm(true)}>Add Blog Post</button> */}
      {/* {showForm === true ? viewForm : null} */}
    </div>
  );
};

export default Home;
