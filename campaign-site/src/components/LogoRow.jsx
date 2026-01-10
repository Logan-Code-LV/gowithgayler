import './LogoRow.css';
import { getImageUrl } from '../utils/getImageUrl';

export default function LogoRow({ logos }) {
  return (
    <section className="logo-row" aria-label="Endorsed by">
      <div className="logo-row-container">
        <h2 className="logo-row-title">Endorsed By</h2>
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={getImageUrl(logo.image)} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
