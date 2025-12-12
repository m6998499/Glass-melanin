# Quick Deployment Guide

This guide will help you deploy the Melanin Unity Crystal Glass website in under 5 minutes.

## 🚀 Fastest Method: Vercel (2 minutes)

1. **Sign up/Login** to [Vercel](https://vercel.com)
2. **Click "New Project"**
3. **Import** this GitHub repository
4. **Deploy** - Vercel auto-detects everything!
5. **Done!** Your site is live at `your-project.vercel.app`

### Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your domain (e.g., `melaninunity.com`)
- Update your domain's DNS settings as instructed
- SSL is automatic!

---

## 📋 Prerequisites

For **local development** or other deployment methods:

```bash
# Check Node.js version (needs v16+)
node --version

# If not installed, download from nodejs.org
```

---

## 💻 Local Development (5 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/m6998499/Glass-melanin.git
cd Glass-melanin

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Making Changes

1. Edit `src/App.jsx`
2. Save the file
3. See changes instantly in your browser!

---

## 🌐 Alternative Deployment Methods

### Netlify (3 minutes)

```bash
# Option A: Drag & Drop
npm run build
# Drag the 'dist' folder to app.netlify.com/drop

# Option B: CLI
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages (5 minutes)

1. Go to repository Settings → Pages
2. Source: **GitHub Actions**
3. The workflow is already configured!
4. Push to main branch → auto-deploy
5. Site will be at: `yourusername.github.io/Glass-melanin`

### Traditional Hosting (cPanel, etc.)

```bash
# 1. Build the project
npm run build

# 2. Upload the 'dist' folder contents to your web host
#    - Via FTP client (FileZilla, etc.)
#    - Or cPanel File Manager

# 3. Point your domain to the uploaded folder

# Done!
```

---

## 🔧 Build Commands Reference

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production (creates 'dist' folder)
npm run preview  # Preview production build locally
```

---

## 🎨 Quick Customization

### Change Brand Name
**File**: `src/App.jsx`  
**Line**: 57  
```jsx
<div className="text-sm tracking-[0.28em] text-white/60">YOUR BRAND</div>
```

### Update Hero Title
**Lines**: 111-114
```jsx
<span className="block bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
  Your Title Here.
</span>
```

### Add Your Links
**Lines**: 63-66 (Navigation)
```jsx
<a className="hover:text-white" href="#your-section">Your Link</a>
```

---

## ✅ Deployment Checklist

Before going live:

- [ ] Update brand name and content
- [ ] Add your actual contact information
- [ ] Replace placeholder links
- [ ] Add your product images
- [ ] Test on mobile devices
- [ ] Add your domain (if using custom domain)
- [ ] Test all navigation links
- [ ] Update meta tags in `index.html` for SEO

---

## 🆘 Common Issues

### "Module not found" error
```bash
# Solution:
npm install
```

### Blank page after deploy
```bash
# Check browser console for errors
# Verify vite.config.js base path is correct
```

### Styles not loading
```bash
# Ensure Tailwind is configured:
# - tailwind.config.js exists
# - postcss.config.js exists
# - src/index.css imports Tailwind
```

### Build fails
```bash
# Clear cache and reinstall:
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📞 Need Help?

- 📖 Check the main [README.md](./README.md) for detailed docs
- 🐛 [Open an issue](https://github.com/m6998499/Glass-melanin/issues)
- 💬 Review troubleshooting section in README

---

## 🎯 Next Steps After Deployment

1. **Set up analytics** (Google Analytics, Plausible, etc.)
2. **Add a newsletter signup** (Mailchimp, ConvertKit, etc.)
3. **Connect social media** accounts
4. **Set up contact form** (Formspree, Netlify Forms, etc.)
5. **Add product photos** to the hero section
6. **Customize colors** to match your brand

---

**Ready to deploy?** Start with Vercel for the fastest result! 🚀
