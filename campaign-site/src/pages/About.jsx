import './About.css';

export default function About({ siteData }) {
  return (
    <main className="about-page">

      {/* ── Hero: text left, portrait right (same pattern as bio sections below) ── */}
      <section className="about-hero-split">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-eyebrow">Idaho State Senate · District 6</p>
            <h1>About <span className="hero-name-break">{siteData.candidateName}</span></h1>
            <p className="about-intro">
              Richard is a lifelong public servant and volunteer. He retired from federal
              service after a 25-year career with U.S. Probation and Parole. He has served
              his community in many organizations as a volunteer and in leadership roles.
              He has a passion for coaching youth sports and leading a healthy lifestyle.
              Richard has lived on the Palouse since 1998. He has been married for 34 years
              and has two adult children.
            </p>
          </div>
          <div className="hero-image">
            <img
              src="/Rich%20Gayler%2001%20_TSW6687.jpg"
              alt={siteData.candidateName}
            />
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">

          {/* ── Values ── */}
          <div className="bio-section bio-with-image">
            <div className="bio-text">
              <h2>Values</h2>
              <p>
                His passion and purpose has always been to help people improve their lives.
                As a federal probation officer, he oversaw a diverse population of individuals
                living in the north central region of Idaho. Covering the territory of Benewah,
                Latah, Clearwater, Nez Perce, Lewis and Idaho counties brought him in touch
                with the daily issues and concerns of residents living in these communities.
                Assisting people in navigating employment, education, transportation, substance
                abuse and mental health issues were an integral part of his career.
              </p>
              <p>
                As a sports and recreation-minded individual, he values a healthy lifestyle.
                He began coaching youth sports while still in college and continues today. He
                has guided many area youth who will attest to his passion and dedication to
                teaching and modeling good sportsmanship, leadership, and communication skills.
              </p>
            </div>
            <div className="bio-side-image">
              <img
                src="/IMG_5754.jpeg"
                alt="Richard Gayler enjoying Idaho's outdoors"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>

          {/* ── Experience ── */}
          <div className="bio-section bio-with-image bio-image-left">
            <div className="bio-side-image">
              <img
                src="/6.jpg"
                alt="Richard Gayler speaking at a community forum"
                className="experience-photo"
              />
            </div>
            <div className="bio-text">
              <h2>Experience</h2>
              <p>
                Richard's experience includes specialized work in substance abuse, mental
                health treatment and federal contracting. He helped implement and manage the
                Federal Drug Court for the U.S. District Court and served as the Agency
                President for the Federal Law Enforcement Officers Association (FLEOA).
                He also worked for the University of Idaho as a Grants and Contract
                Administrator for almost 5 years.
              </p>
              <p>
                Richard has been a member of the Elks Lodge for 28 years and was Chairman
                of the Board of Trustees for the Moscow Lodge as well as Exalted Ruler.
                He currently serves on the Moscow Parks and Recreation Commission, is a
                member of the Palouse Road Runners Club, and has coached and refereed at
                Moscow, Lewiston and Pullman High Schools.
              </p>
            </div>
          </div>

          {/* ── Why This Race ── */}
          <div className="bio-section bio-why">
            <h2>Why This Race Matters</h2>
            <div className="bio-why-body">
              <p>
                Whether it has been as a youth coach or as a parole and probation officer,
                Richard has always strived to help people become their best selves. When the
                2025 legislative session ended by passing bills that eroded Idahoans' abilities
                to prosper, he knew the time to act was now.
              </p>
              <p>
                It's wrong for our state legislators to continually diminish the services,
                finances and freedom of our state citizens. We are a rural district with 24
                communities and 11 different school districts — diverse, yet united by the
                belief that we want to live our best lives in Idaho. Our communities bind us
                together and we should build on that, not weaken it.
              </p>
            </div>
          </div>

          {/* ── Candidate Statement ── */}
          <div className="bio-section candidate-statement">
            <p className="statement-label">Candidate Statement</p>
            <h2>Your District 6 Senate Choice</h2>
            <p>
              In this election, you deserve a candidate who not only shares your values but has the
              proven experience to deliver results for Idaho.
            </p>
            <p>
              Like other candidates in this District 6 race, I believe in a strong public education
              system, affordable and adequate healthcare, individual rights, local control,
              higher education funding, and the protection of our public lands. These are
              foundational values we should all hold in common.
            </p>
            <p><strong>But the similarities stop there.</strong></p>
            <p>
              What sets me apart is 30 years of real-world leadership inside government and
              throughout our communities. I've spent my career helping people transform their lives
              — not in theory, but in practice. I've managed teams, budgets, and complex operations
              across six Idaho counties. I've worked directly with families, schools, law enforcement,
              treatment providers, and community partners to solve problems, not create them.
            </p>
            <p className="statement-bring-label">I bring:</p>
            <ul className="statement-list">
              <li>Decades of organizational leadership</li>
              <li>Experience managing public resources responsibly</li>
              <li>A reputation for integrity, reliability, and professionalism</li>
              <li>A collaborative approach that brings people together</li>
            </ul>
            <p>
              I am not someone who shows up late or not at all, someone who is disorganized, or
              difficult to work with. My record is clear, my service is documented, and my commitment
              to Idahoans is unwavering.
            </p>
            <p>
              I lead with integrity, competence, and a deep respect for the people of District 6.
              My focus is — and always will be — on delivering practical solutions that improve lives
              and strengthen our communities.
            </p>
            <p>
              Idaho deserves leadership that reflects our best values. I'm ready to bring that
              leadership to our statehouse.
            </p>
            <p className="statement-sign-off">— Go With Gayler</p>
          </div>

          {/* ── Gallery ── */}
          <div className="about-gallery">
            <div className="gallery-row">
              <img
                src="/Familty%20Photo%20at%20Lake%20Cda.jpg"
                alt="Richard Gayler with family at Lake Coeur d'Alene"
                className="gallery-image"
                style={{ objectPosition: 'center 15%' }}
              />
              <img
                src="/BorahSummit.jpg"
                alt="Richard Gayler at Borah Summit"
                className="gallery-image borah-summit"
                style={{ objectPosition: 'center 20%' }}
              />
              <img
                src="/onthewater.jpg"
                alt="Richard Gayler on the water"
                className="gallery-image"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
