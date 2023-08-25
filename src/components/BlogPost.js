import React, { useState } from "react";
import styles from "../components/blogpost.module.css";

const BlogPost = ({ topic, content, onClick, blogImg,date, maxContent,image }) => {
  const [length, setLength] = useState(false);
  console.log(image)

  const truncatedTopic = length ? topic : `${topic.slice(0, maxContent)}...`;
  const truncatedContent = length ? content : `${content.slice(0, maxContent)}...`;

  return (
    <div className={styles.blog_post} onClick={onClick}>
      <div className={styles.img_div}>
        <img src={image} alt="Blog Image" />
      </div>

      <div className={styles.text_box}>
        <h2 className={styles.blog_title}>{truncatedTopic}</h2>
        <p className={styles.blog_content}>{truncatedContent}</p>
        <p className={styles.date}>
          Published on {date}
        </p>
      </div>
    </div>
  );
};

BlogPost.defaultProps = {
  maxContent: 100,
};

export default BlogPost;
