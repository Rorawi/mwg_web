import React, { useState, useEffect } from 'react';

function BlogApi() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
      console.log(posts);
  }, []);

  return (
    <div className="BlogApi">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <p>Date: {new Date(post.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogApi;
