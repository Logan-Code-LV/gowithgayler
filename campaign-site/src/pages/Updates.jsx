import BlogList from '../components/BlogList';
import './Updates.css';

export default function Updates({ siteData }) {
  return (
    <main className="updates-page">
      <div className="updates-header">
        <h1>Campaign Updates</h1>
        <p>Stay up to date with the latest news, announcements, and policy positions</p>
      </div>

      <div className="updates-container">
        <BlogList posts={siteData.updates} />
      </div>
    </main>
  );
}
