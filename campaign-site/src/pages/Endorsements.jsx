import Testimonial from '../components/Testimonial';
import './Endorsements.css';

export default function Endorsements({ siteData }) {
  return (
    <main className="endorsements-page">
      <div className="endorsements-header">
        <h1>Endorsements</h1>
        <p>
          {siteData.candidateName} is proud to be endorsed by community leaders, organizations,
          and everyday people across {siteData.districtOrArea}
        </p>
      </div>

      <section className="endorsement-logos" aria-label="Organizational endorsements">
        <h2>Organizational Support</h2>
        <div className="logo-grid">
          {siteData.endorsements.logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.image} alt={logo.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section" aria-label="Testimonials">
        <h2>What People Are Saying</h2>
        <div className="testimonials-grid">
          {siteData.endorsements.quotes.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </section>

      <section className="supporter-lists" aria-label="Individual supporters">
        {siteData.endorsements.supporterLists.map((list, index) => (
          <div key={index} className="supporter-category">
            <h2>{list.category}</h2>
            <ul className="supporters">
              {list.supporters.map((supporter, idx) => (
                <li key={idx}>{supporter}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
