import React, { useState } from 'react';
import styles from './comment.module.css';

const CommentBlock = () => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   const handleInputChange = (e) => {
//     setNewComment(e.target.value);
//   };

//   const handleAddComment = () => {
//     if (newComment.trim() !== '') {
//       const comment = {
//         id: Date.now(),
//         content: newComment,
//       };

//       setComments((prevComments) => [...prevComments, comment]);
//       setNewComment('');
//     }
//   };

  return (
    <div className={styles.commentBlock}>
      <div className={styles.commentList}>
            <div className={styles.comment}>
              <p className={styles.commentContent}></p>
            </div>
          <p className={styles.noComments}>No comments yet.</p>
        
      </div>


      <div className={styles.commentForm}>
        <textarea
          className={styles.commentInput}
          placeholder="Add a comment..."
        //   value={newComment}
        //   onChange={handleInputChange}
        />
        <button className={styles.commentButton} 
        // onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentBlock;
