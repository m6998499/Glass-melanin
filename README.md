# Melanin Unity - Crystal Glass Website 🌟

A beautiful, modern landing page with a crystal-glass aesthetic and Pan-African glow, built with React, Framer Motion, and Tailwind CSS.

![Theme: Crystal Glass with Pan-African colors](https://img.shields.io/badge/Theme-Crystal%20Glass-blue)
![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB)

## ✨ Features

- **Crystal-glass aesthetic** with glassmorphism effects
- **Pan-African color scheme** (red, yellow, green accents)
- **Smooth animations** powered by Framer Motion
- **Responsive design** that works on all devices
- **Modern UI components** with Lucide React icons
- **Single-file component** for easy integration

## 🚀 Quick Deploy

Choose your preferred deployment method:

### Option 1: Deploy to Vercel (Recommended - Fastest) ⚡

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/m6998499/Glass-melanin)

1. Click the button above or go to [Vercel](https://vercel.com)
2. Import this repository
3. Vercel will auto-detect the setup and deploy
4. Your site will be live in ~2 minutes!

### Option 2: Deploy to Netlify 🌐

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/m6998499/Glass-melanin)

1. Click the button above or go to [Netlify](https://netlify.com)
2. Connect your GitHub account
3. Select this repository
4. Deploy automatically!

### Option 3: Deploy to GitHub Pages 📄

1. Enable GitHub Pages in your repository settings
2. Choose "GitHub Actions" as the source
3. The site will build and deploy automatically
4. Access at: `https://yourusername.github.io/Glass-melanin`

### Option 4: Traditional Web Hosting (cPanel, etc.) 🖥️

1. Build the project locally (see below)
2. Upload the `dist` or `build` folder to your web host
3. Point your domain to the uploaded folder
4. Done!

## 📦 Prerequisites

Before deploying, ensure you have:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- Basic knowledge of React (helpful but not required)

## 🛠️ Local Development Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/m6998499/Glass-melanin.git
cd Glass-melanin
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- React & ReactDOM
- Framer Motion (for animations)
- Lucide React (for icons)
- Tailwind CSS (for styling)
- Vite (build tool)

### Step 3: Start Development Server

```bash
npm run dev
```

Your site will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Step 4: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Step 5: Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Glass-melanin/
├── melanin_unity_crystal_glass_website.jsx.js  # Main React component
├── package.json                                 # Dependencies & scripts
├── index.html                                   # HTML entry point
├── vite.config.js                              # Vite configuration
├── tailwind.config.js                          # Tailwind CSS config
├── postcss.config.js                           # PostCSS config
└── README.md                                    # This file
```

## 🎨 Customization Guide

### Update Content

Edit `melanin_unity_crystal_glass_website.jsx.js`:

- **Brand name**: Line 57 - Change "MELANIN UNITY"
- **Hero title**: Lines 111-114 - Update main heading
- **Mission text**: Lines 220-223 - Modify mission statement
- **Products**: Lines 230-242 - Add/remove products
- **Contact info**: Line 268 - Update contact details

### Change Colors

The site uses Pan-African colors by default. To customize:

1. Open `melanin_unity_crystal_glass_website.jsx.js`
2. Search for color classes like `from-red-500`, `via-yellow-400`, `to-green-500`
3. Replace with your preferred Tailwind color classes

### Add Your Images

Replace the glass card content (lines 164-208) with your own images:

```jsx
<img 
  src="/path/to/your/image.jpg" 
  alt="Your product"
  className="rounded-2xl w-full h-auto"
/>
```

## 🔧 Configuration Files

### package.json

Defines dependencies and build scripts. Key scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### vite.config.js

Configures the Vite build tool. Default settings work for most cases.

### tailwind.config.js

Configures Tailwind CSS. Extend with custom colors, fonts, etc.

## 🌐 Domain Setup

After deploying, connect your custom domain:

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `melaninunity.com`)
3. Update DNS records as instructed
4. SSL certificate is automatic!

### For Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS setup instructions
4. SSL is automatic!

### For GitHub Pages:
1. Add a `CNAME` file with your domain
2. Update DNS to point to GitHub Pages
3. Enable HTTPS in settings

## 🐛 Troubleshooting

### Build Errors

**Problem**: `Module not found` errors  
**Solution**: Run `npm install` to ensure all dependencies are installed

**Problem**: Tailwind styles not working  
**Solution**: Check that `tailwind.config.js` and `postcss.config.js` exist

### Deployment Issues

**Problem**: Blank page after deployment  
**Solution**: Check browser console for errors. Ensure base path is correct in `vite.config.js`

**Problem**: Icons not showing  
**Solution**: Verify `lucide-react` is installed: `npm install lucide-react`

**Problem**: Animations not working  
**Solution**: Verify `framer-motion` is installed: `npm install framer-motion`

### Performance Issues

**Problem**: Slow page load  
**Solution**: Run `npm run build` and use the optimized production build

**Problem**: Large bundle size  
**Solution**: Already optimized! Vite performs tree-shaking automatically

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Netlify Deployment Docs](https://docs.netlify.com/)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! If you make improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

- Design inspiration: Modern glassmorphism trends
- Color scheme: Pan-African flag colors
- Icons: [Lucide Icons](https://lucide.dev/)
- Animations: [Framer Motion](https://www.framer.com/motion/)

## 💬 Support

Need help deploying? 

- Open an [issue](https://github.com/m6998499/Glass-melanin/issues)
- Check existing issues for solutions
- Review the troubleshooting section above

---

**Ready to deploy?** Choose a method above and go live in minutes! 🚀

Made with ❤️ for the Melanin Unity community
