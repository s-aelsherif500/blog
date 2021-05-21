import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../actions/blogs.actions";
import BlogCard from "./BlogCard";
import ErrorHandler from "./UI_Components/Error_handler";
import LoadingSpinner from "./UI_Components/Loading_spinner";
import { Link } from "react-router-dom";

const renderList = (blogs) => {
  if (blogs.length === 0) {
    return <div className="text-center">Empty, no blogs today!</div>;
  }
  return (
    <>
      <div className="columns mt-5">
        {blogs.map((blog) => {
          return <BlogCard key={blog._id} blog={blog} />;
        })}
      </div>
    </>
  );
};

const Blogs = ({ fetchBlogs, ...props }) => {
  useEffect(() => {
    fetchBlogs(10, 0);
  }, [fetchBlogs]);
  if (props.isLoading) {
    return <LoadingSpinner />;
  }
  if (props.errMsg) {
    return <ErrorHandler errMsg={props.errMsg} />;
  }

  return (
    <div className="container-fluid">
      <div style={{ position: "relative", height: "10px" }}>
        <Link
          className="add-blog-btn"
          to={props.profile ? "/blog/new" : "/login"}
        >
          <i className="fas fa-plus"></i>
        </Link>
      </div>
      <h2 className="text-center">Blogs</h2>
      <hr />
      {renderList(props.blogs)}
    </div>
  );
};

const mapStateToProps = ({ blogs, profile }) => {
  return {
    blogs: blogs.blogs,
    isLoading: blogs.isLoading,
    errMsg: blogs.errMsg,
    profile: profile.profile,
  };
};
export default connect(mapStateToProps, { fetchBlogs })(Blogs);
