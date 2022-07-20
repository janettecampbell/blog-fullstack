import CreateBlogForm from "./forms/CreateBlogForm";
import UpdateBlogForm from "./forms/UpdateBlogForm";

const ShowBlogs = (props) => {
  const {
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
            Blog Post
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
      <div className="update-form-wrapper">
        {showUpdateForm === true ? (
          <UpdateBlogForm
            viewForm={viewUpdateForm}
            setBlogs={setBlogs}
            blogs={blogs}
            showCreateForm={showUpdateForm}
            setShowCreateForm={setShowUpdateForm}
          />
        ) : null}
      </div>
      <div className="blog-post-body">
        {blogs &&
          blogs.map((blog) => (
            <div className="blog-post" key={blog._id}>
              <h3>{blog.title}</h3>
              {/* <h6>Author: {blog.created_by}</h6> */}
              <h6>
                Published: {new Date(blog.created_at).toLocaleString("en-US")}
              </h6>
              <p>{blog.content}</p>
              {blog.user === props.user._id && (
                <>
                  <span
                    className="btn btn-danger"
                    onClick={() => handleDelete(blog)}
                  >
                    X
                  </span>

                  <span
                    className="update btn btn-info"
                    onClick={() => handleUpdate(blog)}
                  >
                    Update
                  </span>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowBlogs;
