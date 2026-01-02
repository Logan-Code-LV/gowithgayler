import './TopIssues.css';

export default function TopIssues({ siteData }) {
  return (
    <main className="issues-page">
      <div className="issues-header">
        <h1>Top Issues</h1>
        <p>
          Learn about the key priorities that will guide {siteData.candidateName.split(' ')[0]}'s
          work in the {siteData.officeTitle}
        </p>
      </div>

      <div className="issues-container">
        {siteData.issues.map((issue) => (
          <article key={issue.slug} id={issue.slug} className="issue-detail">
            <img src={issue.image} alt={issue.title} className="issue-detail-image" />
            <div className="issue-detail-content">
              <h2>{issue.title}</h2>
              {issue.body.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
