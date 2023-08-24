
// export default Payment;










// function DonateForm() {
//   const [activeStep, setActiveStep] = useState(0);
//   const steps = ['Select Amount', 'Provide Details', 'Review', 'Complete'];

//   const handleNextStep = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handlePreviousStep = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div>
//       <h2>Donate Form</h2>
//       <StepProgressBar steps={steps} activeStep={activeStep} />
//       <div className={styles.step-content">
//         {activeStep === 0 && (
//           <div>
//             {/* Step 1 content */}
//             <p>Select the donation amount.</p>
//             <button onClick={handleNextStep}>Next</button>
//           </div>
//         )}
//         {activeStep === 1 && (
//           <div>
//             {/* Step 2 content */}
//             <p>Provide your details.</p>
//             <button onClick={handlePreviousStep}>Previous</button>
//             <button onClick={handleNextStep}>Next</button>
//           </div>
//         )}
//         {/* Add more steps as needed */}
//       </div>
//     </div>
//   );
// }



{
  /* <div className={styles.banner}>
  
  <div className={styles.overlay}>
  <div className={styles.banner_text}>
  <h1>Mobile Web Ghana</h1>
  <h3>| Contact Us</h3>
  </div>
  </div>
  <div className={styles.img_div}>
  <img src={img1} />
  </div>
  </div>
<div>

</div> */
}
{
  /* 
<div className={styles.form}>
<div className="relative">
<div className={styles.formDiv}>
<form id="paymentForm" className={styles.paymentForm}>
<div className={styles.form_group}>
<label>Email Address
<BiMailSend/>
</label>
<input
type="email"
value={email}
id="email-address"
required
onChange={(e) => setEmail(e.target.value)}
/>
</div>
<br />
<br />

<div className={styles.form_group}>
<label>Amount
<BsCashCoin/>
</label>
<input
type="tel"
value={amount}
id="amount"
required
onChange={(e) => setAmount(e.target.value)}
/>
</div>
<br />
<br />

<div className={styles.form_group}>
<label>First Name <BiRename /></label>
<input
type="text"
value={firstName}
id="first-name"
onChange={(e) => setFirstname(e.target.value)}
/>
</div>
    <br />
    <br />

    <div className={styles.form_group}>
    <label>Last Name</label>
    <input
    type="text"
    value={lastName}
    id="last-name"
    onChange={(e) => setLastname(e.target.value)}
    />
    </div>
    <br />
    <br />
    
    <div className={styles.form_submit}>
    <button
    type="submit"
    onClick={paywithpaystack}
    // onClick={payWithPaystack}
    >
    Pay
    </button>
    </div>
    </form>
    </div>
    </div>
    </div> */
}

    // <div>
    //       <h2>Donate Form</h2>
    //       <StepProgressBar steps={steps} activeStep={activeStep} />
    //       <div className="step-content">
    //         {activeStep === 0 && (
    //           <div>
    //             {/* Step 1 content */}
    //             <p>Select the donation amount.</p>
    //             <button onClick={handleNextStep}>Next</button>
    //           </div>
    //         )}
    //         {activeStep === 1 && (
    //           <div>
    //             {/* Step 2 content */}
    //             <p>Provide your details.</p>
    //             <button onClick={handlePreviousStep}>Previous</button>
    //             <button onClick={handleNextStep}>Next</button>
    //           </div>
    //         )}
    //         {/* Add more steps as needed */}
    //       </div>
    //     </div>


    

    // import { useEffect, useState } from "react";
    // import PaystackPop from "@paystack/inline-js";
    
    // function Payment() {
    //   const [email, setEmail] = useState("");
    //   const [amount, setAmount] = useState("");
    //   const [firstName, setFirstname] = useState("");
    //   const [lastName, setLastname] = useState("");
    
    //   const paywithpaystack = (e) => {
    //     e.preventDefault();
    // const paystack = new PaystackPop()
    // paystack.newTransaction({
    //   key:"pk_test_de9b93599c675d18a6a2821698bc38bff286d174",
    //   amount:amount * 100,
    //   email,
    //   firstName,
    //   lastName,
    //   onSuccess(transaction){
    //     let message = `Payment Complete Reference ${transaction.reference}`
    //     alert(message)
    //     setEmail("");
    //     setAmount("");
    //     setFirstname("");
    //     setLastname("");
    //   } ,
    // onCancel() {
    // alert("You have cancelled the transaction")
    // }
    // })
    //    };
    //   return (
    //     <>
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <div>
    //         <h1>I'm about to integrate paystack.</h1>
    //         <form id="paymentForm">
    //           <div class="form-group">
    //             <label for="email">Email Address</label>
    //             <input
    //               type="email"
    //               value={email}
    //               id="email-address"
    //               required
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //           <br />
    //           <br />
    
    //           <div class="form-group">
    //             <label for="amount">Amount</label>
    //             <input
    //               type="tel"
    //               value={amount}
    //               id="amount"
    //               required
    //               onChange={(e) => setAmount(e.target.value)}
    //             />
    //           </div>
    //           <br />
    //           <br />
    
    //           <div class="form-group">
    //             <label for="first-name">First Name</label>
    //             <input
    //               type="text"
    //               value={firstName}
    //               id="first-name"
    //               onChange={(e) => setFirstname(e.target.value)}
    //             />
    //           </div>
    //           <br />
    //           <br />
    
    //           <div class="form-group">
    //             <label for="last-name">Last Name</label>
    //             <input
    //               type="text"
    //               value={lastName}
    //               id="last-name"
    //               onChange={(e) => setLastname(e.target.value)}
    //             />
    //           </div>
    //           <br />
    //           <br />
    
    //           <div class="form-submit">
    //             <button type="submit" onClick={paywithpaystack}pa>Pay</button>
    //           </div>
    //         </form>
    //       </div>
    //     </>
    //   );
    // }
    
    // export default Payment;

//MAINBLOG

import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogSection from "./BlogSection";
import BlogPost from "./BlogPost";
import styles from "../components/mainblog.module.css";
import img1 from "../assets/blog.avif";
import SingleBlogPost, { RecentBlogSection } from "./SingleBlogPost";
const MainBlog = () => {
  // const getAllblog = () => {
  //   try{
  //   const res =  axios.get('http://localhost:5000/blog/api/posts' )
  //   console.log(res);

  // }catch(err){
  //   console.log(err)
  // }
  // }
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [search, setSearch] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); // Add currentIndex state



  console.log("allPosts:", allPosts);
  console.log("selectedBlogPost:", selectedBlogPost);

  const handleBlogPostClick = (blogPost, index) => {
    setSelectedBlogPost(blogPost);
    setCurrentIndex(index); // Update currentIndex when a blog post is clicked
  };

  function getRandomRecentPosts(allPosts, selectedBlogPost, numPosts = 3) {
    const recentPosts = allPosts.filter(
      (post) => post._id !== selectedBlogPost._id
    );
    const randomPosts = [];

    for (let i = 0; i < numPosts; i++) {
      const randomIndex = Math.floor(Math.random() * recentPosts.length);
      randomPosts.push(recentPosts[randomIndex]);
      recentPosts.splice(randomIndex, 1);
    }

    return randomPosts;
  }

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("http://localhost:5000/blog/api/posts");
        console.log(res);
        setAllPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Blog</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>

      {selectedBlogPost ? (
        <>
          <SingleBlogPost
            topic={selectedBlogPost.topic}
            content={selectedBlogPost.content}
            name={selectedBlogPost.name}
            img={selectedBlogPost.img}
            date={selectedBlogPost.date}
            blogImg={selectedBlogPost.blogImg}
          />

          <RecentBlogSection
            recentPosts={getRandomRecentPosts(allPosts, selectedBlogPost)}
          />
        </>
      ) : (
        <>
          <div className={styles.inputDiv}>
            <h2>// Our Blogs</h2>
            <h1>Search for blog posts</h1>
            <input
              type="search"
              value={search}
              className={styles.input}
              name="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          <BlogSection>
            {allPosts
              .filter((blog) => {
                if (search == "") {
                  return blog;
                } else if (
                  blog.topic.toLowerCase().includes(search.toLowerCase())
                ) {
                  return blog;
                }
              })
              .map((post) => (
                <BlogPost
                  key={post._id}
                  topic={post.topic}
                  content={post.content}
                  date={post.date}
                  onClick={handleBlogPostClick(post)}
                />
              ))}
          </BlogSection>
        </>
      )}

      {currentIndex !== null && allPosts.length > 0 && (
        <div className={styles.navigationButtons}>
          <button
            onClick={() => {
              const newIndex =
                (currentIndex - 1 + allPosts.length) % allPosts.length;
              handleBlogPostClick(allPosts[newIndex], newIndex);
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              const newIndex = (currentIndex + 1) % allPosts.length;
              handleBlogPostClick(allPosts[newIndex], newIndex);
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

// export default MainBlog;


    //SINGLEBLOG



    import React, { useState } from "react";
import styles from "./singleblog.module.css";
import style from './recentblog.module.css';
import profileImage from "../assets/profile.avif";
import blogImage from "../assets/mcare.avif";
import img1 from "../assets/mwg-swiper1.avif";
import { FaGithub, FaInstagram, FaLinkedin,FaFacebookSquare,FaTwitter, FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";
import CommentBlock from "./Comment";

const SingleBlogPost = ({topic,content,name,img,date,blogImg}) => {

  return (
    <>

      <div className={styles.flex_Div}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>{topic}</h1>
            <div className={styles.author}>
              <img
                src={img}
                alt="Profile"
                className={styles.profileImage}
              />
              <span className={styles.authorName}>{name}</span>
            </div>
            <p className={styles.date}>Published on {date}</p>
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




export const RecentBlogSection = ({allPosts}) => {
  const [search,setSearch] = useState("")
  const input =document.querySelector("input")
  // const value = input.value

  console.log(allPosts);

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


