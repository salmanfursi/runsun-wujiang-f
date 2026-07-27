# 🚀 Vercel Deployment Guide

## 📋 Prerequisites
- ✅ Vercel account (you have one)
- ✅ Git repository with your project
- ✅ Node.js installed locally

## 🔧 Step 1: Prepare Your Project

### 1.1 Create/Update Git Repository
```bash
cd /Users/th31/salman-p/runsun-wujiang
git init
git add .
git commit -m "Ready for Vercel deployment - Chinese translations & performance optimization"
```

### 1.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `runsun-textile-website`
3. Don't initialize with README (you already have files)

### 1.3 Connect to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/runsun-textile-website.git
git branch -M main
git push -u origin main
```

## 🌐 Step 2: Deploy to Vercel

### Option A: Through Vercel Dashboard (Recommended)
1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your account

2. **Import Your Project**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your `runsun-textile-website` repository
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables** (Optional)
   Click "Add New" for each:
   ```
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## ⚙️ Step 3: Configure Your Domain (Optional)

### Add Custom Domain
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `runsun.okyarn.com`)
4. Follow the DNS instructions provided

## 🔍 Step 4: Verify Deployment

### Check Your Live Site
- Visit your Vercel URL
- Test language switching (EN/中文)
- Check all pages work correctly
- Verify translations are working
- Test mobile responsiveness

### Common Issues & Solutions

**Issue: Build fails**
```bash
# Solution: Check build locally first
npm run build
# If successful, the issue is likely Vercel-specific
```

**Issue: Images not loading**
- Ensure all images are in `public/` folder
- Check image paths are correct

**Issue: Translations not working**
- Clear browser cache
- Check `src/locales/` files are included in build

## 🎯 Production Checklist

- [ ] All pages load correctly
- [ ] Language switching works
- [ ] All translations are visible
- [ ] Images load properly
- [ ] Contact form/functions work
- [ ] Mobile responsive design
- [ ] Fast loading speed
- [ ] SEO meta tags present

## 📊 Vercel Analytics

1. Go to your project in Vercel Dashboard
2. Click "Analytics" tab
3. Monitor:
   - Page views
   - Unique visitors
   - Core Web Vitals
   - Geographic distribution

## 🔄 Continuous Deployment

Vercel automatically deploys when you:
```bash
# Make changes locally
git add .
git commit -m "Update content"
git push

# Vercel automatically rebuilds and deploys!
```

## 🛠️ Advanced Configuration

### Custom Build Settings
Edit `vercel.json` for advanced options:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "outputDirectory": "dist",
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Environment-Specific Settings
Create `.env.production` for production variables:
```
VITE_APP_TITLE=Runsun Textile
VITE_APP_VERSION=1.0.0
```

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify GitHub repository is accessible
3. Ensure `package.json` scripts are correct
4. Test build locally: `npm run build`

---

## 🎉 Your Site Will Be Live!

After following these steps, your Runsun Textile website will be:
- ✅ Fully deployed on Vercel
- ✅ Accessible worldwide
- ✅ Automatically updated on git push
- ✅ Optimized for performance
- ✅ Ready for Chinese and English visitors

**Next Steps:** Deploy and share your professional bilingual website with the world! 🚀