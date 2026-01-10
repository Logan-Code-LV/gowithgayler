import './About.css';
import { getImageUrl } from '../utils/getImageUrl';

export default function About({ siteData }) {
  return (
    <main className="about-page">
      <section className="about-hero">
        <img
          src={getImageUrl(siteData.hero.heroImages[2])}
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
            Richard Gayler has lived on the Palouse since 1998, when he was transferred from the U.S. Probation Office in Boise, Idaho, to manage the one person satellite office in Moscow, Idaho. For nearly 25 years as a federal probation officer, Richard oversaw a diverse population across north central Idaho. His work covered Benewah, Latah, Lewis, Nez Perce, Clearwater, and Idaho counties, bringing him into close contact with the daily issues and concerns faced by residents of these unique communities.
            </p>
            <p>
            Whether related to employment, education, transportation, or substance abuse and mental health services, navigating these challenges is a regular part of life in the District 6 region. Richard’s passion and purpose have always been centered on helping people improve their lives. During approximately 30 years working within the criminal justice system, he has consistently found that there is good in people.
            </p>
            <p>
            Recreation minded by nature, Richard has also dedicated decades to working with youth as a coach and mentor. He began coaching in the 1980s and has continued ever since, coaching at Lewiston, Moscow, and Pullman High Schools. Richard has been married for 34 years and has two adult children.
            </p>
          </div>

          <div className="bio-section">
            <h2>Experience & Values</h2>
            <p>
            Richard’s experience includes specialized work in substance abuse and mental health treatment and contracting. He helped implement and manage the Federal Drug Court for the U.S. District Court and served as Agency President for the Federal Law Enforcement Officers Association. His career later took him to the University of Idaho, where he worked for nearly five years as a Grants and Contract Administrator.
            </p>
            <p>
            Richard has been a member of the Elks Lodge for 28 years and has served as Chairman of the Board of Trustees for the Moscow Lodge, as well as Exalted Ruler. He has also coached at several high schools, including Moscow, Lewiston, and Pullman High Schools. In addition, Richard has served on the Moscow City Parks and Recreation Commission for three years.
            </p>
          </div>

          <div className="bio-section">
            <h2>Why This Race Matters</h2>
            <p>
            Whether as a youth coach or as a parole and probation officer, Richard has always strived to help people improve their lives. By providing motivation, skills, equipment, or access to essential services, he has consistently worked to give people what they need to succeed. When the 2025 legislative session ended with decisions that eroded Idahoans’ ability to thrive, Richard knew it was time to act. It is wrong for state legislators to weaken the services, resources, and morale of our citizens.
            </p>
            <p>
            We should be working to make Idaho the best place to receive a quality education, access reliable health care, and build strong, lasting infrastructure within our communities. Our district is rural and diverse, made up of 24 communities and 11 high schools, yet we are united by a shared belief that this is where we want to live and raise our families. Our communities and schools bind us together, and we should be strengthening them, not weakening them.
            </p>
            <p>
            It is time to change the direction of how our state is being governed. Vote for Richard to improve our public schools, support local infrastructure needs, strengthen local economies, and maintain a balanced budget. Go with Gayler for Idaho.
            </p>
          </div>

          <div className="about-gallery">
            <h2>More Photos</h2>
            <div className="gallery-row">
              {siteData.hero.heroImages.slice(0, 6).map((image, index) => (
                <img
                  key={index}
                  src={getImageUrl(image)}
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
