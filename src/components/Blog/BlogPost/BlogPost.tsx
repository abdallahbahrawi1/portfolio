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
          <div className="blog-post-body">
            <p>{post.preview}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos pariatur aperiam nostrum consequuntur harum sapiente mollitia iure quae earum, amet quisquam dolorum sequi temporibus sed dolor natus laborum est ad dolorem. Optio, dolor inventore, alias culpa ex labore repellendus fuga quae debitis quisquam sapiente mollitia eum delectus laboriosam quas unde recusandae exercitationem, perferendis dolorem eius perspiciatis fugit? Explicabo deleniti dolor officiis fugiat voluptas, sapiente unde nulla, animi ut id doloribus tempore velit veniam at maiores consequuntur quaerat iusto dignissimos. Deserunt quod accusantium quasi quidem ratione, alias modi rem error architecto voluptate dolorem eveniet quas adipisci sint nam tempore totam laudantium, consequatur voluptatibus enim vitae asperiores. Debitis eveniet earum, natus sapiente autem consequatur harum ullam. Eaque veniam blanditiis iure qui nemo, asperiores laudantium possimus ad cumque culpa expedita nobis sit distinctio molestias, praesentium aliquam ut, explicabo provident voluptas totam animi! Velit corrupti obcaecati ab alias amet consectetur, voluptas dignissimos incidunt nesciunt maxime. Consectetur dicta, aut sapiente incidunt eveniet corrupti natus perferendis laudantium cum odio molestiae commodi animi quasi, provident voluptatem et harum facilis repudiandae voluptatum beatae consequuntur vero? Laborum dolorum illum unde minima nulla ducimus quos impedit similique distinctio eum quas maiores maxime, dolores quis aperiam quibusdam culpa mollitia, fugiat neque totam, delectus placeat obcaecati. Nam quas vel quaerat, ut maxime aliquid in iure quisquam animi repellat quos quibusdam? Ducimus esse excepturi nostrum similique et cumque eaque saepe minima laudantium aut possimus quibusdam natus quod incidunt harum provident, repudiandae, nam facere veritatis quaerat ea? Similique quisquam voluptatibus quos eos repellat aliquid quis autem. Accusantium similique adipisci earum eaque necessitatibus ullam repellendus ipsum sequi recusandae fugit, aperiam autem obcaecati, quae doloribus tempora! Et, explicabo id vitae rem, placeat voluptatem veritatis, repellat eaque optio mollitia odit tempore. Nihil suscipit incidunt, ab quae molestiae eaque corporis dolor nemo saepe est, minima nesciunt, perferendis commodi atque fuga placeat inventore expedita eum sapiente eveniet nam. Deleniti libero atque molestias ad deserunt, laboriosam officia officiis quam numquam ut et. Optio ab culpa tempora eveniet delectus voluptatem minus cum praesentium reiciendis, perferendis officia autem veniam, illum in totam facere non amet vero rem repudiandae incidunt! Illo itaque consectetur, voluptatum laboriosam reprehenderit quisquam, explicabo optio, at repellat deleniti fugiat magnam amet quas odio. Praesentium quam labore ab harum beatae! Obcaecati eligendi tempore sunt, similique, atque nobis debitis a magnam incidunt magni iure placeat qui odio earum eos. Veniam fugiat, doloribus distinctio enim recusandae explicabo ratione? Repellendus sapiente ipsam voluptate, a ea blanditiis incidunt delectus illo accusantium ipsa placeat voluptatum ut necessitatibus facilis excepturi ratione corrupti perferendis autem commodi illum dignissimos fuga quia sed? Nam iure ad dignissimos est quia ullam quam exercitationem dolore sapiente delectus quidem, corporis, cupiditate eveniet veniam et blanditiis totam asperiores sint voluptates porro? Atque possimus tempora doloremque deserunt, optio ut et sapiente magnam nulla minima voluptas quaerat, repudiandae animi, veritatis maxime! Accusamus unde temporibus delectus ut nobis expedita commodi, magni, qui incidunt, deleniti natus voluptates. Doloribus natus ut at repellendus dolores. Facere temporibus eveniet, sit at impedit minus consequuntur veniam eum. Magni, quae mollitia.</p>
          </div>
        </div>
      </article>
      <AuthorBio />
      <CommentsSection />
    </div>
  );
};

export default BlogPost;
