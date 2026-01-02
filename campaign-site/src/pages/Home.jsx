import Hero from '../components/Hero';
import LogoRow from '../components/LogoRow';
import IssueGrid from '../components/IssueGrid';
import CTASection from '../components/CTASection';
import NewsletterCTA from '../components/NewsletterCTA';
import './Home.css';

export default function Home({ siteData }) {
  return (
    <main>
      <Hero
        headline={siteData.hero.headline}
        paragraphs={siteData.hero.paragraphs}
        heroImages={siteData.hero.heroImages}
      />

      {/* <LogoRow logos={siteData.endorsements.logos} /> */}

      <IssueGrid issues={siteData.issues} showAll={false} />

      <CTASection
        donateUrl={siteData.donateUrl}
        volunteerUrl={siteData.volunteerUrl}
        endorseUrl={siteData.endorseUrl}
      />

      {/* <NewsletterCTA subscribeUrl={siteData.subscribeUrl} /> */}

      {/* <section className="contact-block" aria-labelledby="contact-heading">
        <div className="contact-block-container">
          <h2 id="contact-heading">Get in Touch</h2>
          <div className="contact-info">
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${siteData.contact.email}`}>
                {siteData.contact.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${siteData.contact.phone}`}>
                {siteData.contact.phone}
              </a>
            </p>
          </div>
          <div className="social-icons">
            {siteData.socials.facebook && (
              <a
                href={siteData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                Facebook
              </a>
            )}
            {siteData.socials.instagram && (
              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                Instagram
              </a>
            )}
            {siteData.socials.twitter && (
              <a
                href={siteData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </section> */}
    </main>
  );
}
