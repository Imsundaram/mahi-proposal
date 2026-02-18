
# 🚀 How to Host This Website on GitHub Pages

Follow these simple steps to make your website live!

## 1. Create a Repository
1. Go to [github.com](https://github.com) and create a **New Repository**.
2. **Name it exactly:** `mahi-proposal`
   *(If you name it something else, open `vite.config.js` and change `base: '/mahi-proposal/'` to matches your repo name)*
3. Keep it **Public** (or Private if you have GitHub Pro).

## 2. Connect & Push Code
Open your terminal (in this folder) and run these commands one by one:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial proposal website commit"

# Rename branch to main
git branch -M main

# Connect to your GitHub repo (replace YOUR_GITHUB_USERNAME)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mahi-proposal.git

# Push the code
git push -u origin main
```

## 3. Deploy the Website!
Once the code is pushed, just run this single command:

```bash
npm run deploy
```

Wait a minute, and your website will be live at:
**`https://YOUR_GITHUB_USERNAME.github.io/mahi-proposal/`**

---

### 📸 Important Note About Images
When hosting on GitHub Pages:
- Make sure your images (mahi_pic1.jpg etc.) are committed and pushed.
- If images don't load, check that the filenames match perfectly (case-sensitive!).

Good luck! 💍❤️
