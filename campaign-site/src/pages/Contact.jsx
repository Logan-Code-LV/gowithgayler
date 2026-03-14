import ContactForm from '../components/ContactForm';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Contact.css';

export default function Contact({ siteData }) {
  return (
    <main className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our campaign team</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>Campaign Headquarters</h2>
          <div className="info-block">
            <h3>Email</h3>
            <p>
              <a href={`mailto:${siteData.contact.email}`}>
                {siteData.contact.email}
              </a>
            </p>
          </div>
          <div className="info-block">
            <h3>Phone</h3>
            <p>
              <a href={`tel:${siteData.contact.phone}`}>
                {siteData.contact.phone}
              </a>
            </p>
          </div>
          {siteData.contact.address && (
            <div className="info-block">
              <h3>Mailing Address</h3>
              <p>{siteData.contact.address}</p>
            </div>
          )}
          <div className="info-block">
            <h3>Follow Us</h3>
            <div className="social-links">
              {siteData.socials.facebook && (
                <a
                  href={siteData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="contact-social-icon"
                >
                  <FaFacebook size={28} />
                </a>
              )}
              {siteData.socials.instagram && (
                <a
                  href={siteData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="contact-social-icon"
                >
                  <FaInstagram size={28} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
