import deleteIcon from "./img/delete.png";
import editIcon from "./img/edit.png";

const BlogPosts = (props) => {
  const { user, blogs, handleDelete, handleUpdate } = props;

  return (
    <div className="blog-post-body">
      {blogs &&
        [...blogs].reverse().map((blog) => (
          <div className="blog-post" key={blog._id}>
            <h3>{blog.title}</h3>
            <h6>Author: {blog.created_by}</h6>
            <h6>
              Published: {new Date(blog.created_at).toLocaleString("en-US")}
            </h6>
            <p>{blog.content}</p>
            {blog.user === user._id && (
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
                  <img className="form-icon" src={editIcon} alt="edit-button" />{" "}
                </span>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default BlogPosts;
