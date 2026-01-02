import GalleryGrid from '../components/GalleryGrid';
import './Photos.css';

export default function Photos({ siteData }) {
  return (
    <main className="photos-page">
      <div className="photos-header">
        <h1>Photos</h1>
        <p>Campaign highlights and moments from the trail</p>
      </div>

      <div className="photos-container">
        <GalleryGrid images={siteData.photos.galleryImages} />
      </div>
    </main>
  );
}
