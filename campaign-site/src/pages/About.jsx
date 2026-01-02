import './About.css';

export default function About({ siteData }) {
  return (
    <main className="about-page">
      <section className="about-hero">
        <img
          src={siteData.hero.heroImages[2]}
          alt={siteData.candidateName}
          className="about-hero-image"
        />
      </section>

      <section className="about-content">
        <div className="about-container">
          <h1>About {siteData.candidateName}</h1>

          <div className="bio-section">
            <h2>Background</h2>
            <p>
              {siteData.candidateName} is running for {siteData.officeTitle} to bring fresh,
              principled leadership to {siteData.districtOrArea}. With over 15 years of experience
              in community organizing and public service, {siteData.candidateName.split(' ')[0]} understands
              the challenges facing working families.
            </p>
            <p>
              Born and raised in our community, {siteData.candidateName.split(' ')[0]} has spent their
              entire career fighting for the people who make our district strong—teachers, small business
              owners, healthcare workers, and families working hard to get ahead.
            </p>
          </div>

          <div className="bio-section">
            <h2>Experience & Values</h2>
            <p>
              As a community organizer, {siteData.candidateName.split(' ')[0]} has led successful campaigns
              for affordable housing, living wages, and environmental protection. They've brought people
              together across political lines to solve problems and deliver results.
            </p>
            <p>
              {siteData.candidateName.split(' ')[0]} believes in leadership that listens, policies
              that prioritize people over special interests, and a government that works for everyone.
              They're committed to transparency, accountability, and putting the needs of working families first.
            </p>
          </div>

          <div className="bio-section">
            <h2>Why This Race Matters</h2>
            <p>
              Our district deserves a leader who will fight for affordable healthcare, quality public
              education, good-paying jobs, and a clean environment. {siteData.candidateName.split(' ')[0]}
              is ready to be that leader—someone who will show up, listen, and deliver for the people
              of {siteData.districtOrArea}.
            </p>
          </div>

          <div className="about-gallery">
            <h2>More Photos</h2>
            <div className="gallery-row">
              {siteData.hero.heroImages.slice(0, 6).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${siteData.candidateName} ${index + 1}`}
                  className="gallery-image"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
