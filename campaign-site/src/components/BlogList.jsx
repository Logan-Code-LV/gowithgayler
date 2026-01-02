import { Link } from 'react-router-dom';
import './BlogList.css';

export default function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <article key={post.slug} className="blog-preview">
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="blog-preview-image"
            />
          )}
          <div className="blog-preview-content">
            <div className="blog-meta">
              <span className="blog-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="blog-category">{post.category}</span>
            </div>
            <h3 className="blog-preview-title">
              <Link to={`/updates/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="blog-preview-excerpt">{post.excerpt}</p>
            <Link to={`/updates/${post.slug}`} className="read-more">
              Read more →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
