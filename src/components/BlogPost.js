import React,{useState} from "react";
import styles from "../components/blogpost.module.css";

const BlogPost = ({ title, content, onClick, blogImg, day, month, year }) => {
  const [length, setLength] = useState(false);
  const maxContent = 100;
  return (
    <div className={styles.blog_post} onClick={onClick} >
      <div className={styles.img_div}>
        <img src={blogImg} />
      </div>

     <div className={styles.text_box}>
     <h2 className={styles.blog_title}>
      {/* {length?{title}:`${title.slice(0, maxContent)}...`}         */}
{title}
      </h2>
      <p className={styles.blog_content}>
{length?{content}:`${content.slice(0, maxContent)}...`}        
        </p>
      <p className={styles.date}>
        Published on {month} {day}, {year}
      </p>
     </div>
    </div>
  );
};

export default BlogPost;
