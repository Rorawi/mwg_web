// import React from "react";
// import { useState } from "react";
// import axios from "axios";

// export default function InputImage() {
//   const [image, setImage] = useState(null);

//   const submitImage = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image", image);

//     try {
//       const result = await axios.post(
//         "http://localhost:5000/blog/api/posts",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       // Handle the result or perform any necessary actions
//       console.log("Image upload result:", result);
//     } catch (error) {
//       // Handle errors here
//       console.error("Image upload error:", error);
//     }
//   };

//   const onInputChange = (e) => {
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0]);
//   };
//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <form>
//         <input type="file" accept="image/*" onChange={onInputChange} />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function InputImage() {
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("author", author);
    formData.append("topic", topic);
    formData.append("content", content);

    try {
      const result = await axios.post(
        "http://localhost:5000/blog/api/posts",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      // Handle the result or perform any necessary actions
      console.log("Blog post creation result:", result);
    } catch (error) {
      // Handle errors here
      console.error("Blog post creation error:", error);
    }
  };

  const onInputChange = (e) => {
    if (e.target.name === "image") {
      setImage(e.target.files[0]);
    } else if (e.target.name === "author") {
      setAuthor(e.target.value);
    } else if (e.target.name === "topic") {
      setTopic(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={submitForm}>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={author}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Topic"
          name="topic"
          value={topic}
          onChange={onInputChange}
        />
        <textarea
          placeholder="Content"
          name="content"
          value={content}
          onChange={onInputChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
