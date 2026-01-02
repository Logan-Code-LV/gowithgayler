import './NewsletterCTA.css';

export default function NewsletterCTA({ subscribeUrl }) {
  return (
    <section className="newsletter-cta" aria-labelledby="newsletter-heading">
      <div className="newsletter-container">
        <h2 id="newsletter-heading">Stay Informed</h2>
        <p>Get campaign updates, event invitations, and news delivered to your inbox</p>
        <a
          href={subscribeUrl}
          className="newsletter-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe to Our Newsletter
        </a>
      </div>
    </section>
  );
}
