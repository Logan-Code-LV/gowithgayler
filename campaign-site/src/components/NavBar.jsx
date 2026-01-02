import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ candidateName, donateUrl }) {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h1>{candidateName} 2026</h1>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/issues">Top Issues</Link></li>
          {/* <li><Link to="/endorsements">Endorsements</Link></li> */}
          {/* <li><Link to="/updates">Updates</Link></li> */}
          {/* <li><Link to="/photos">Photos</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <a
              href={donateUrl}
              className="donate-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
