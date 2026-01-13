import './Hero.css';

export default function Hero({ headline, paragraphs, heroImages }) {
  return (
    <section className="hero" aria-labelledby="hero-headline">
      <div className="hero-container">
        <div className="hero-content">
          <h2 id="hero-headline" className="hero-headline">{headline}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="hero-paragraph">{paragraph}</p>
          ))}
        </div>
        <div className="hero-images">
            <img
              src={heroImages[4]}
              alt={`Hero image ${0 + 1}`}
              className="hero-image"
              />
        </div>
      </div>
    </section>
  );
}
