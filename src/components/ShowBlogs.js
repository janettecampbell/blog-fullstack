import CreateBlogForm from "./forms/CreateBlogForm";
import UpdateBlogForm from "./forms/UpdateBlogForm";
import BlogPosts from "./BlogPosts";

const ShowBlogs = (props) => {
  const {
    user,
    blogs,
    handleDelete,
    handleUpdate,
    showCreateForm,
    setShowCreateForm,
    viewCreateForm,
    showUpdateForm,
    setShowUpdateForm,
    viewUpdateForm,
    setBlogs,
  } = props;

  return (
    <div className="show-blogs">
      <div className="blog-form-wrapper">
        {showCreateForm === true ? null : (
          <button className="open btn btn-primary" onClick={viewCreateForm}>
            New Post
          </button>
        )}

        {showCreateForm === true ? (
          <CreateBlogForm
            viewForm={viewCreateForm}
            setBlogs={setBlogs}
            blogs={blogs}
            showCreateForm={showCreateForm}
            setShowCreateForm={setShowCreateForm}
          />
        ) : null}
      </div>

      {showUpdateForm === true ? (
        <UpdateBlogForm
          viewForm={viewUpdateForm}
          setBlogs={setBlogs}
          blogs={blogs}
          showUpdateForm={showUpdateForm}
          setShowUpdateForm={setShowUpdateForm}
        />
      ) : null}

      <BlogPosts
        user={user}
        blogs={blogs}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default ShowBlogs;
