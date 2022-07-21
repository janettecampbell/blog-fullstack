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

      {/* <div className="blog-post-body">
        {blogs &&
          blogs.map((blog) => (
            <div className="blog-post" key={blog._id}>
              <h3>{blog.title}</h3>
              <h6>Author: {blog.created_by}</h6>
              <h6>
                Published: {new Date(blog.created_at).toLocaleString("en-US")}
              </h6>
              <p>{blog.content}</p>
              {blog.user === props.user._id && (
                <>
                  <span onClick={() => handleDelete(blog)}>
                    <img
                      className="form-icon"
                      src={deleteIcon}
                      alt="delete button"
                    />
                  </span>

                  <span
                    className="update-icon"
                    onClick={() => handleUpdate(blog)}
                  >
                    <img
                      className="form-icon"
                      src={editIcon}
                      alt="edit-button"
                    />{" "}
                  </span>
                </>
              )}
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default ShowBlogs;
