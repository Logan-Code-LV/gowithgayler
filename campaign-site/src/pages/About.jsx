import './About.css';

export default function About({ siteData }) {
  return (
    <main className="about-page">
      <section className="about-hero">
        <img
          src={siteData.hero.heroImages[0]}
          alt={siteData.candidateName}
          className="about-hero-image"
        />
      </section>

      <section className="about-content">
        <div className="about-container">
          <h1>About {siteData.candidateName}</h1>
          <p className="about-intro">
            A dedicated public servant with nearly 25 years in federal probation, youth coaching, and community leadership; running for Idaho House District 6 to strengthen our schools, communities, and services.
          </p>

          <div className="bio-section">
            <h2>Background</h2>
            <p>
              Richard Gayler has lived on the Palouse since 1998 after transferring from the U.S. Probation
              Officer in Boise, Idaho, to manage the one-person satellite office in Moscow, Idaho. As federal
              probation officer nearly 25 years, Richard oversaw a diverse population of individuals living
              in the north central region of Idaho. Covering the territory of Benewah, Latah, Clearwater,
              Nez Perce, Lewis and Idaho counties brought him in touch with the daily issues and concerns
              of residents living in these unique communities.
            </p>
            <p>
              Be it employment, education, transportation or substance abuse and mental health services,
              navigating these issues and concerns was a part of living in the District 6 region. Richard's
              passion and purpose has been to help people improve their lives. As a sports and recreation-oriented
              individual, Richard has also worked as a youth coach to help guide our children in their daily lives.
              He started coaching kids as early as the 1980's and has not stopped. He has coached at Lewiston,
              Pullman and Moscow High Schools. Richard currently serves on the Moscow City Parks and Recreation
              Commission and has been married for 34 years with two adult children.
            </p>
          </div>

          <div className="bio-section">
            <h2>Experience & Values</h2>
            <p>
              Richard's experience includes specialized work in substance abuse and mental health treatment and
              federal contracting. He helped implement and manage the Federal Drug Court for the U.S. District
              Court and served as the Agency President for the Federal Law Enforcement Officers Association
              (FLEOA). Richard's work carried him on to work for the University of Idaho as a Grants and Contract
              Administrator for almost 5 years.
            </p>
            <p>
              Richard has been a member of the Elks Lodge for 28 years and was Chairman of the Board of Trustees
              for the Moscow Lodge as well as Exalted Ruler. Richard has also coached at various high schools,
              including Moscow, Lewiston and Pullman High Schools. He has been on the Moscow City Parks and
              Recreation Commission for 3 years.
            </p>
          </div>

          <div className="bio-section">
            <h2>Why This Race Matters</h2>
            <p>
              Whether it has been as a youth coach or as a parole and probation officer Richard has always strived to
              help people get better. Whether it's providing them with motivation, skills, equipment or services,
              Richard has worked to provide them with what was necessary to succeed. And so, when the legislative
              session of 2025 ended and the legislature concluded by eroding Idahoans' ability to succeed, he knew
              the time to act was now. It's wrong for our state legislators to continually diminish the services, finances
              and freedom of our state citizens.
            </p>
            <p>
              We should be striving to make our state the best place to get an education, to receive health care, and
              to improve upon the infrastructure of our communities. We are a rural district, with 24 communities and
              11 different high schools. We are a diverse region, yet we are all linked to the same belief that this is
              where we want to live. Our communities and our schools bind us together and we should build on that
              concept, make them stronger, not weaken them.
            </p>
          </div>

          <div className="about-gallery">
            <div className="gallery-row">
              {siteData.hero.heroImages.slice(1, 4).map((image, index) => (
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
