import React, { useState } from "react";
import styles from "./singleblog.module.css";
import style from './recentblog.module.css';
import profileImage from "../assets/profile.jpg";
import blogImage from "../assets/mcare.jpg";
import img1 from "../assets/mwg-swiper1.jpg";
import { FaGithub, FaInstagram, FaLinkedin,FaFacebookSquare,FaTwitter, FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";
import CommentBlock from "./Comment";

const SingleBlogPost = ({title,content,name,img,day,month,year,blogImg}) => {

  return (
    <>

      <div className={styles.flex_Div}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.author}>
              <img
                src={img}
                alt="Profile"
                className={styles.profileImage}
              />
              <span className={styles.authorName}>{name}</span>
            </div>
            <p className={styles.date}>Published on {month} {day}, {year}</p>
          </div>
          <div className={styles.content}>
            <img src={blogImg} alt="Blog" className={styles.blogImage} />
            <p>
              {content}
            </p>
            <br/>
          </div>
          <div className={styles.commentSection}>
            <h2 className={styles.commentTitle}>Comments</h2>
            {/* Add comment components or form here */}
            <CommentBlock/>
          </div>
          <div className={styles.socialMedia}>
            <h3>Share this post:</h3>
            <Link to="https://www.facebook.com/">
              <FaFacebookSquare/>
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

      
        <RecentBlogSection />
      </div>
    </>
  );
};

export default SingleBlogPost;




export const RecentBlogSection = () => {
  const [search,setSearch] = useState("")
  const input =document.querySelector("input")
  // const value = input.value

  const Search =()=> {
    // {value== value.toLowerCase()? "Hi": "no"}
    console.log("Hi");
  }
  const blogs = [
    {
      id: 1,
      title: 'Blog Post 1',
      date: 'June 10, 2023',
      time: '12:30 PM'
    },
    {
      id: 2,
      title: 'Blog Post 2',
      date: 'June 8, 2023',
      time: '10:15 AM'
    },
    {
      id: 3,
      title: 'Blog Post 3',
      date: 'June 5, 2023',
      time: '4:45 PM'
    },
    // Add more blog objects here as needed
  ];

  return (
    <>
    <div className={style.container}>
      <div className={style.blogList}>
          <div className={style.blogItem_search}>
           <input type="text
           " placeholder="Search..."/>
           <FaSearch onClick={Search}/>
          </div>
      </div>
      <h2 className={style.sectionTitle}>More Blogs</h2>
      <div className={style.blogList}>
        {blogs.map((blog) => (
          <div key={blog.id} className={style.blogItem}>
            <h3 className={style.blogTitle}>{blog.title}</h3>
            <p className={style.blogSubtext}>
              {blog.date} | {blog.time}
            </p>
          </div>
        ))}
      </div>

      <h2 className={style.sectionTitle}>Recent Blogs</h2>

      <div className={style.blogList}>
          <div  className={style.blogItem}>
            <h3 className={style.blogTitle}>
            Teaching Media Literacy
            </h3>
            <p className={style.blogSubtext}>
            </p>
          </div>
          <div  className={style.blogItem}>
            <h3 className={style.blogTitle}>
            Partnering for Progress: Africa Digital Skills Conference 2023 Empowering Africa’s Digital Future.
            </h3>
            <p className={style.blogSubtext}>
            </p>
          </div>
      </div>

      <h2 className={style.sectionTitle}>More Blogs</h2>

      <div className={style.blogList}>
        {blogs.map((blog) => (
          <div key={blog.id} className={style.blogItem}>
            <h3 className={style.blogTitle}>{blog.title}</h3>
            <p className={style.blogSubtext}>
              {blog.date} | {blog.time}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


