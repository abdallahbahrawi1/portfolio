import { useParams } from 'react-router-dom';
import { IBlogPost } from '../../../data/BlogPosts';
import { Posts } from '../../../data/BlogPosts';
import "./BlogPost.css"; 
import AuthorBio from './AuthorBio/AuthorBio';
import CommentsSection from './CommentsSection/CommentsSection';

const BlogPost = () => {
	const { postId } = useParams<{ postId: string }>();
	const postIdNumber = postId ? parseInt(postId, 10) : NaN; 

	if (isNaN(postIdNumber)) {
    return <div>Invalid post ID</div>; 
  }

	const post: IBlogPost | undefined = Posts.find((post) => post.id === postIdNumber);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container">
      <article className="blog-post">
        <img
          src={post.imgSrc}
          alt={post.title}
          className="blog-post-image"
        />
        <div className="blog-post-content">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.meta}</span>
          </div>
          <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.body }}>
          </div>
        </div>
      </article>
      <AuthorBio />
      <CommentsSection />
    </div>
  );
};

export default BlogPost;
