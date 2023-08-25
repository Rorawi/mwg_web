import React from "react";
import styles from "./singleblog.module.css";
import style from "./recentblog.module.css";

import CommentBlock from "./Comment";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaSearch,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const SingleBlogPost = ({ blogPost, allPosts, recentPosts, moreBlogs }) => {
  // Use the passed props as needed
  const location = useLocation();
  // const { blogPost } = location.state;

  if (!blogPost) {
    return null; // Render nothing if blogPost is not defined yet
  }
  // Sample code for rendering content with clickable links
  const contentWithLinks = blogPost.content.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank">$1</a>'
  );

  return (
    <div
      className={styles.flex_Div}
      // dangerouslySetInnerHTML={{ __html: contentWithLinks }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{blogPost.topic}</h1>
          <div className={styles.author}>
            <img
              src={blogPost.image}
              alt="Profile"
              className={styles.profileImage}
            />
            <span className={styles.authorName}>{blogPost.name || ""}</span>
          </div>
          <p className={styles.date}>Published on {blogPost.date || ""}</p>
        </div>
        <div className={styles.content}>
          <img src={blogPost.blogImg} alt="Blog" className={styles.blogImage} />
          <p>{blogPost.content || ""}</p>
          <br />
        </div>
        <div className={styles.commentSection}>
          <h2 className={styles.commentTitle}>Comments</h2>
          {/* Add comment components or form here */}
          <CommentBlock />
        </div>
        <div className={styles.socialMedia}>
          <h3>Share this post:</h3>
          <Link to="https://www.facebook.com/">
            <FaFacebookSquare />
          </Link>

          <Link to="https://www.instagram.com/">
            <FaInstagram />
          </Link>
          <Link to="https://www.linkedin.com/">
            <FaLinkedin />
          </Link>

          <Link to="https://www.linkedin.com/">
            <FaTwitter />
          </Link>
        </div>
      </div>

      <RecentBlogSection recentPosts={recentPosts} />
    </div>
  );
};

export default SingleBlogPost;

export const RecentBlogSection = ({ recentPosts }) => {
  // Use the passed props for recent posts

  console.log(recentPosts);

  return (
    <>
      <div className={style.container}>
        {/* Your recent blog section content */}

        <h2 className={style.sectionTitle}>Recent Blogs</h2>

        <div className={style.blogList}>
          <div className={style.blogItem}>
            <h3 className={style.blogTitle}>{recentPosts.title}</h3>
            <p className={style.blogSubtext}></p>
          </div>
        </div>
      </div>
    </>
  );
};
