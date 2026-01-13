import './CTASection.css';

export default function CTASection({ donateUrl, volunteerUrl, endorseUrl }) {
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
          <a
            href={volunteerUrl}
            className="cta-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Volunteer</h3>
            <p>Please get in touch with Richard for all campaign assistance and volunteer inquiries.</p>
          </a>
          <a
            href={endorseUrl}
            className="cta-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Endorse</h3>
            <p>Add your name to our list of supporters</p>
          </a>
        </div>
      </div>
    </section>
  );
}
