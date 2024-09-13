import { useState } from "react";
// import Comment from "../Comment/Comment";
import "./CommentsSection.css";

const CommentsSection = () => {
//   const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      {/* {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))} */}
      <form className="comment-form">
        <textarea
          placeholder="Leave a comment..."
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default CommentsSection;
