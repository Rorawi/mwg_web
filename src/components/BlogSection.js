import React from "react";
import SingleBlogPost from "./SingleBlogPost";
import styles from "../components/blogsection.module.css";
import { Link } from "react-router-dom";

const BlogSection = ({ children }) => {
  return (
    <>
    {/* <Link to="/singleblog"> */}
      <div className={styles.blog_section} >
        {children}
        </div>;
    {/* </Link> */}

    {/* <SingleBlogPost children={children} /> */}
    </>
  );
};

export default BlogSection;
