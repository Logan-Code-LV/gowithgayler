import './Testimonial.css';

export default function Testimonial({ quote, author, title, image }) {
  return (
    <article className="testimonial">
      <blockquote className="testimonial-quote">
        "{quote}"
      </blockquote>
      <div className="testimonial-author">
        {image && (
          <img
            src={image}
            alt={author}
            className="testimonial-image"
          />
        )}
        <div>
          <p className="author-name">{author}</p>
          <p className="author-title">{title}</p>
        </div>
      </div>
    </article>
  );
}
