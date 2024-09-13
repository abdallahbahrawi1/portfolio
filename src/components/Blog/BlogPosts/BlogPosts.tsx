
import { Link } from 'react-router-dom';
import { IBlogPost } from '../../../data/BlogPosts';
import './BlogPosts.css'

interface BlogPostsProps {
  visiblePosts: IBlogPost[];
}

const BlogPosts= ({ visiblePosts }: BlogPostsProps) => {


  const blogPosts = visiblePosts

  if (!blogPosts.length) {
    return <div>No Blogs to display</div>;
  }

  return (
    <div className="blog-posts">
      {blogPosts.map((post) => (
          <article key={post.id} className="blog-post floating">
            <img src={post.imgSrc} alt={post.title} className="blog-post-image" />
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <div className="blog-post-meta">{post.meta}</div>
              <p className="blog-post-preview">{post.preview}</p>
              <Link to={`/portfolio/blog/${post.id}`} className="read-more">Read more</Link>
            </div>
          </article>
        ))}
    </div>
  );
};

export default BlogPosts;