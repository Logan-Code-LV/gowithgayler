# Deploying to GitHub Pages

This site is configured to deploy to GitHub Pages. Follow these steps to deploy:

## Prerequisites

1. Make sure your code is in a GitHub repository
2. The repository should be named `gowithgayler` (or update the `base` path in `vite.config.js`)

## Deployment Steps

### Option 1: Deploy from your local machine

1. Make sure all changes are committed to git
2. Run the deploy command:
   ```bash
   cd campaign-site
   npm run deploy
   ```

This will:
- Build your site (`npm run build`)
- Push the built files to a `gh-pages` branch
- Make your site available at `https://yourusername.github.io/gowithgayler/`

### Option 2: Set up GitHub Actions (Automated)

Create `.github/workflows/deploy.yml` in your repository root:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'

    - name: Install dependencies
      run: |
        cd campaign-site
        npm ci

    - name: Build
      run: |
        cd campaign-site
        npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./campaign-site/dist
```

## Configure GitHub Pages

After deploying, configure your repository settings:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://yourusername.github.io/gowithgayler/`

## Important Notes

- **Router**: The site uses `HashRouter` for GitHub Pages compatibility. URLs will look like `/#/about` instead of `/about`
- **Base Path**: The `base` in `vite.config.js` is set to `/gowithgayler/`. If you rename your repo, update this value
- **Content**: All site content is in `content/site.json` - edit this file to update your campaign info
- **Images**: Store images in the `public` folder and reference them with paths like `/images/photo.jpg`

## Updating the Site

To update the site after making changes:

1. Edit your files (components, CSS, or `content/site.json`)
2. Test locally with `npm run dev`
3. When ready, run `npm run deploy` to publish changes

## Custom Domain (Optional)

To use a custom domain like `www.gowithgayler.com`:

1. Create a file `public/CNAME` with your domain:
   ```
   www.gowithgayler.com
   ```
2. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
3. In GitHub Settings → Pages, enter your custom domain
4. Update `base: '/'` in `vite.config.js` (remove the repo name)

## Troubleshooting

**Site shows 404 or blank page:**
- Check that the `base` in `vite.config.js` matches your repository name
- Verify the `gh-pages` branch was created and has files in it
- Check GitHub Pages settings are pointing to `gh-pages` branch

**CSS/Images not loading:**
- Verify images are in the `public` folder
- Check that image paths in `site.json` start with `/`
- Clear your browser cache

**Changes not showing up:**
- Wait a few minutes after deploying (GitHub Pages can take 1-2 minutes to update)
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
