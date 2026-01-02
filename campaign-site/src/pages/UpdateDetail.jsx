import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import './UpdateDetail.css';

export default function UpdateDetail({ siteData }) {
  const { slug } = useParams();
  const post = siteData.updates.find((p) => p.slug === slug);

  return (
    <main className="update-detail-page">
      <BlogPost post={post} />
    </main>
  );
}
