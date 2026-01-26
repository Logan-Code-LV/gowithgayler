import './CTASection.css';
import { Link } from 'react-router-dom';

export default function CTASection({ donateUrl }) {
  return (
    <section className="cta-section" aria-labelledby="get-involved-heading">
      <div className="cta-container">
        <h2 id="get-involved-heading">Get Involved</h2>
        <p className="cta-subtitle">Join our movement and make a difference in your community</p>
        <div className="cta-cards">
          <a
            href={donateUrl}
            className="cta-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Donate</h3>
            <p>Support our campaign with a financial contribution</p>
          </a>
          <Link
            to="/contact"
            className="cta-card"
          >
            <h3>Contact</h3>
            <p>Get in touch with Richard for campaign assistance and volunteer inquiries</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
