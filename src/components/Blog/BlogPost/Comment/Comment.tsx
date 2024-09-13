import "./Comment.css";

interface CommentProps {
    author: string;
    date: string;
    content: string;
  }

const Comment = ({ author, date, content }: CommentProps) => (
  <div className="comment">
    <span className="comment-author">{author}</span>
    <span className="comment-date">{date}</span>
    <p className="comment-content">{content}</p>
  </div>
);

export default Comment;
