/**
 * Helper function to get the correct image URL accounting for the base path
 * @param {string} imagePath - The image path from site.json
 * @returns {string} - The full image URL with base path
 */
export function getImageUrl(imagePath) {
  const base = import.meta.env.BASE_URL;

  // If the path already includes the base or is an external URL, return as-is
  if (imagePath.startsWith('http') || imagePath.startsWith(base)) {
    return imagePath;
  }

  // Remove leading slash if present and prepend base
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${base}${cleanPath}`;
}
