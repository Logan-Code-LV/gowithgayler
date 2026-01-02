import './Footer.css';

export default function Footer({ contact, socials, legalFooter }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </p>
          {contact.address && <p>{contact.address}</p>}
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            {socials.facebook && (
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
            )}
            {socials.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>
            )}
            {socials.youtube && (
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                YouTube
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <p>{legalFooter.paidForBy}</p>
      </div>
    </footer>
  );
}
