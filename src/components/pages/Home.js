import NavBar from "../layout/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateBlogForm from "../forms/CreateBlogForm";
import ShowBlogs from "../ShowBlogs";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [blogs, setBlogs] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const history = useHistory();

  const { user } = props;

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

  const viewCreateForm = () => {
    if (showCreateForm) {
      setShowCreateForm(false);
    } else {
      setShowCreateForm(true);
    }
  };

  const viewUpdateForm = () => {
    if (showUpdateForm) {
      setShowCreateForm(false);
    } else {
      setShowCreateForm(true);
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

  const handleUpdate = (blog) => {
    history.push(`/update/${blog._id}`);
  };

  if (user) {
    return (
      <>
        <NavBar user={props.user} />
        {/* show create form on click of post blog */}
        {showCreateForm === true ? null : (
          <button className="open btn btn-primary" onClick={viewCreateForm}>
            Post Blog
          </button>
        )}

        {showCreateForm === true ? (
          <CreateBlogForm
            viewForm={viewCreateForm}
            setBlogs={setBlogs}
            blogs={blogs}
          />
        ) : null}

        {/* show create form on click of post blog */}

        {showUpdateForm === true ? (
          <CreateBlogForm
            viewForm={viewUpdateForm}
            setBlogs={setBlogs}
            blogs={blogs}
          />
        ) : null}

        <ShowBlogs
          blogs={blogs}
          setBlogs={setBlogs}
          user={props.user}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </>
    );
  } else {
    return history.push("/");
  }
};

export default Home;
