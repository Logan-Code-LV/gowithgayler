import './GalleryGrid.css';
import { getImageUrl } from '../utils/getImageUrl';

export default function GalleryGrid({ images }) {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <figure key={index} className="gallery-item">
          <img src={getImageUrl(image.url)} alt={image.alt} />
          {image.caption && (
            <figcaption className="gallery-caption">{image.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
