import { Link } from 'react-router-dom';
import './BlogPost.css';

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Post not found</h2>
        <Link to="/updates">← Back to Updates</Link>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <Link to="/updates" className="back-link">← Back to Updates</Link>

      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="post-cover-image"
        />
      )}

      <div className="post-header">
        <div className="post-meta">
          <span className="post-date">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="post-category">{post.category}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
      </div>

      <div className="post-body">
        {post.body.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
