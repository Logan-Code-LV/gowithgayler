import { Link } from 'react-router-dom';
import './IssueGrid.css';

export default function IssueGrid({ issues, showAll = false }) {
  const displayIssues = showAll ? issues : issues.slice(0, 4);

  return (
    <section className="issue-grid" aria-labelledby="issues-heading">
      <div className="issue-grid-container">
        <h2 id="issues-heading">Top Issues</h2>
        <div className="issues">
          {displayIssues.map((issue) => (
            <article key={issue.slug} className="issue-card">
              <img src={issue.image} alt={issue.title} className="issue-image" />
              <div className="issue-content">
                <h3>{issue.title}</h3>
                <p>{issue.blurb}</p>
                <Link to={`/issues#${issue.slug}`} className="issue-link">
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
        {!showAll && (
          <div className="view-all">
            <Link to="/issues" className="view-all-button">
              View All Issues
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
