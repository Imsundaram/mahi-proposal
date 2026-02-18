
# 🚀 How to Host on Vercel (Easiest Method)

Since you want to use Vercel, I have already updated your configuration for it!

## 1. Push Your Code to GitHub
(If you haven't done this already, do it now!)

Open your terminal in this folder and run:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push
```

*(If you haven't set up the repository yet, check the `DEPLOY_INSTRUCTIONS.md` file for steps 1 & 2 first!)*

## 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and Log In / Sign Up.
2. Click **"Add New..."** -> **"Project"**.
3. Select **"Import Git Repository"**.
4. Find your `mahi-proposal` repository and click **Import**.
5. **Settings:**
   - Framework Preset: `Vite` (It should auto-detect this).
   - Root Directory: `./` (Default).
   - Build Command: `npm run build` (Default).
   - Output Directory: `dist` (Default).
6. Click **Deploy**.

## 🎉 Done!
Vercel will build your site in about 1 minute.
Once finished, you will get a link like:
**`https://mahi-proposal.vercel.app`**

Send this link to Mahi! 💖
