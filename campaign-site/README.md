# Campaign Website Template

A reusable, configurable campaign website template built with React. Easily customize content, branding, and theme by editing a single JSON configuration file.

## Features

- **Fully configurable** via `/content/site.json`
- **Responsive design** that works on all devices
- **Accessible** with semantic HTML, ARIA labels, and keyboard navigation
- **Modern React** with React Router for navigation
- **Reusable components** for easy customization
- **No CMS required** - all content stored in JSON
- **Theme customization** via CSS variables

## Pages Included

- **Home** - Hero, endorsement logos, top issues preview, CTAs, newsletter signup, contact
- **About** - Hero image, long-form bio, photo gallery
- **Top Issues** - Detailed issue pages with images and full content
- **Endorsements** - Logos, testimonials, and supporter lists
- **Updates** - Blog-style posts with list and detail views
- **Photos** - Responsive gallery grid
- **Contact** - Contact form + contact information

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Your Campaign

Edit `/content/site.json` with your campaign information:

- Candidate name, office, and district
- Hero content and images
- External URLs (donate, volunteer, endorse, newsletter)
- Contact information and social media
- Endorsements (logos, quotes, supporter lists)
- Issues (title, description, full content, images)
- Updates/blog posts
- Photo gallery
- Theme colors

### 3. Add Your Images

Place images in `/public/` directory. The template includes three images:
- `/BorahSummit.jpg`
- `/accolades.jpg`
- `/family.jpg`

Add more images as needed and reference them in `site.json`.

### 4. Run the Development Server

You'll need to run **two terminals**:

**Terminal 1 - React Dev Server:**
```bash
npm run dev
```

**Terminal 2 - API Server (for contact form):**
```bash
npm run server
```

The site will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The production-ready files will be in the `/dist` directory.

## Configuration Guide

### Theme Colors

Edit the `theme` section in `site.json`:

```json
{
  "theme": {
    "primaryColor": "#2563eb",
    "secondaryColor": "#dc2626",
    "backgroundColor": "#ffffff",
    "textColor": "#1f2937",
    "accentColor": "#10b981"
  }
}
```

### Adding Issues

Add to the `issues` array in `site.json`:

```json
{
  "slug": "issue-slug",
  "title": "Issue Title",
  "blurb": "Short preview text (1-2 sentences)",
  "body": "Full issue content. Use \\n\\n for paragraph breaks.",
  "image": "/images/issue-image.jpg"
}
```

### Adding Blog Posts

Add to the `updates` array in `site.json`:

```json
{
  "slug": "post-slug",
  "title": "Post Title",
  "date": "2024-01-15",
  "category": "Campaign News",
  "excerpt": "Brief summary for the post list",
  "body": "Full post content. Use \\n\\n for paragraph breaks.",
  "coverImage": "/images/post-cover.jpg"
}
```

### Adding Photos

Add to the `photos.galleryImages` array in `site.json`:

```json
{
  "url": "/images/photo.jpg",
  "alt": "Photo description for accessibility",
  "caption": "Optional caption text"
}
```

## Contact Form Setup

The contact form currently logs submissions to the console. To connect it to a real email service:

1. Open `server.js`
2. Follow the TODO comments to integrate with:
   - SendGrid
   - Mailgun
   - AWS SES
   - Postmark
   - Or any other email provider

Example with SendGrid:

```javascript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'campaign@example.com',
  from: 'noreply@example.com',
  subject: `Contact Form: ${name}`,
  text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
});
```

## File Structure

```
campaign-site/
├── content/
│   └── site.json              # All configurable content
├── public/
│   ├── BorahSummit.jpg        # Your images
│   ├── accolades.jpg
│   ├── family.jpg
│   └── images/                # Additional images
├── src/
│   ├── components/            # Reusable components
│   │   ├── NavBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LogoRow.jsx
│   │   ├── IssueGrid.jsx
│   │   ├── CTASection.jsx
│   │   ├── NewsletterCTA.jsx
│   │   ├── Testimonial.jsx
│   │   ├── BlogList.jsx
│   │   ├── BlogPost.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── ContactForm.jsx
│   ├── pages/                 # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── TopIssues.jsx
│   │   ├── Endorsements.jsx
│   │   ├── Updates.jsx
│   │   ├── UpdateDetail.jsx
│   │   ├── Photos.jsx
│   │   └── Contact.jsx
│   ├── App.jsx               # Main app component
│   ├── App.css
│   ├── index.css             # Global styles
│   └── main.jsx
├── server.js                 # API server for contact form
├── package.json
└── vite.config.js
```

## Customization Tips

### Changing Navigation

Edit `NavBar.jsx` to add, remove, or reorder navigation items.

### Modifying Layout

Each page component is self-contained. Edit the page files in `src/pages/` to adjust layouts.

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Each component has its own `.css` file
- Theme colors are applied via CSS variables from `site.json`

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Add a navigation link in `src/components/NavBar.jsx`

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the /dist directory to Netlify
```

### Traditional Hosting

```bash
npm run build
# Upload the /dist directory to your web host
```

**Note:** For the contact form to work in production, you'll need to:
1. Set up a serverless function or API endpoint
2. Configure your email service provider
3. Update the form submission endpoint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

This template follows WCAG 2.1 Level AA guidelines:

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Proper heading hierarchy

## License

Free to use for campaign websites.

## Support

For questions or issues, please open an issue on GitHub.
