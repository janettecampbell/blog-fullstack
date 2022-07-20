import HeaderBar from "../layout/HeaderBar";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowBlogs from "../ShowBlogs";
import GiphyBar from "../GiphyBar";
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
      setShowUpdateForm(false);
    } else {
      setShowUpdateForm(true);
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
    history.push(`/home/${blog._id}`);
  };

  if (user) {
    return (
      <>
        <HeaderBar user={props.user} />
        {/* <NavBar user={props.user} /> */}
        {/* show create form on click of post blog */}

        <div className="body">
          <GiphyBar />

          <ShowBlogs
            blogs={blogs}
            setBlogs={setBlogs}
            user={props.user}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            showCreateForm={showCreateForm}
            setShowCreateForm={setShowCreateForm}
            showUpdateForm={showUpdateForm}
            setShowUpdateForm={setShowUpdateForm}
            viewCreateForm={viewCreateForm}
            viewUpdateForm={viewUpdateForm}
          />
          {/* <UpdateBlogForm
            blogs={blogs}
            setBlogs={setBlogs}
            handleUpdate={handleUpdate}
            viewUpdateForm={viewUpdateForm}
            setShowUpdateForm={setShowUpdateForm}
          /> */}
        </div>
      </>
    );
  } else {
    return history.push("/");
  }
};

export default Home;
