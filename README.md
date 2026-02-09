# Urbanweave.in Landing Page

A modern, glassmorphic landing page for Urbanweave - built with pure HTML, CSS, and JavaScript. Designed for GitHub Pages deployment.

## 🎨 Features

- **Glassmorphism Design**: Beautiful glass-morphic cards with backdrop blur effects
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Animated SVG weave pattern, gradient orbs, and form handling
- **Distinctive Typography**: Custom font pairing with Cormorant Garamond and Outfit
- **No Dependencies**: Pure vanilla JavaScript - no frameworks required

## 📁 File Structure

```
urbanweave/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🚀 Quick Start

### Local Development

1. Clone or download the files
2. Open `index.html` in your web browser
3. That's it! No build process required.

### GitHub Pages Deployment

1. **Create a new repository** on GitHub
   - Name it: `urbanweave` (or any name you prefer)
   - Make it public

2. **Upload your files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/urbanweave.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR_USERNAME.github.io/urbanweave/`

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css` (lines 1-15):

```css
:root {
    --primary-dark: #1a1625;        /* Background dark color */
    --primary-purple: #667eea;      /* Main accent color */
    --primary-violet: #764ba2;      /* Secondary accent */
    --accent-pink: #f093fb;         /* Highlight color */
    --text-light: #e8e6f0;         /* Main text color */
    --text-muted: #a8a4b8;         /* Muted text color */
}
```

### Updating Content

**Hero Section** (index.html, lines ~30-45):
- Change the headline and subheadline
- Update the industry focus

**Vision Section** (index.html, lines ~90-115):
- Modify the vision statement
- Update the three pillars

**Roadmap Cards** (index.html, lines ~125-185):
- Edit card titles and descriptions
- Change phase tags

### Changing Fonts

The site uses Google Fonts. To change fonts:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the font link in `index.html` (line 8)
4. Update the CSS variables in `styles.css`:
   ```css
   --font-display: 'Your Display Font', serif;
   --font-body: 'Your Body Font', sans-serif;
   ```

### Form Integration

The waitlist form currently stores data in localStorage (for demo purposes). To integrate with a real backend:

**Option 1: Formspree** (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Netlify Forms**
```html
<form name="waitlist" method="POST" data-netlify="true">
```

**Option 3: Custom Backend**
Edit the form handler in `script.js` (line 18-35) to send data to your API.

### Email Service Integration

Popular options:
- **Mailchimp**: Add embedded form code
- **ConvertKit**: Use their form embed
- **Beehiiv**: Integrate newsletter signup
- **EmailOctopus**: Simple API integration

Replace the form section in `index.html` with your service's embed code.

## 🎯 Performance Tips

1. **Optimize Images**: If you add custom images, use WebP format and compress them
2. **Lazy Loading**: Add `loading="lazy"` to image tags
3. **Minification**: For production, minify CSS and JS files
4. **CDN**: Consider using a CDN for Google Fonts

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Note: Glassmorphism effects require modern browsers with backdrop-filter support.

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🐛 Troubleshooting

**Fonts not loading?**
- Check your internet connection (Google Fonts require internet)
- Verify the font link is correct in `index.html`

**Animations not working?**
- Clear your browser cache
- Check browser console for JavaScript errors

**GitHub Pages not updating?**
- Wait 2-3 minutes after pushing changes
- Clear your browser cache
- Check GitHub Pages deployment status in repository settings

## 🎨 Design Credits

- **Typography**: Cormorant Garamond × Outfit
- **Design Style**: Glassmorphism with gradient orbs
- **Color Palette**: Deep indigo/violet theme
- **Animation**: CSS keyframes + Intersection Observer API

## 📝 License

This is a template - feel free to use it for your project!

## 🤝 Support

For customization help or questions:
1. Check this README first
2. Inspect the code comments
3. Search for similar issues online

---

**Built with ❤️ for Urbanweave**

Ready to weave the future? 🧵
