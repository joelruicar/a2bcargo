# A2BCargo
This is the repository for the A2B Cargo LLC website.

--------
## Summary
To maintain the website, you only need to edit the index.astro file.  The system handles everything else. If build credits run out, you simply wait for the next monthly cycle or upgrade to a paid plan.

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── public/              # Static assets
│   ├── assets/          # Images, icons, and graphics 
│   ├── favicon.ico      # Browser tab icon 
│   ├── form.html        # Helper for Netlify form detection
│   └── google... .html  # Google Search Console verification
├── src/
│   ├── pages/
│   │   ├── index.astro  # Main page (Content & Structure) 
│   │   └── success.astro# Form submission confirmation page 
│   └── styles/
│       └── global.css   # Styles, colors, and responsive design 
└── package.json         # System configuration and dependencies

```

You do not need advanced programming knowledge to update the text:   
1. Navigate to src/pages/index.astro.   
2. Locate the text you wish to change (it is written in natural language inside HTML tags).   
3. Save your changes.
4. Deployment: Once you push changes to GitHub, Netlify will automatically update the live site in a few seconds.


The site uses Netlify's free plan, which has certain monthly limits:

    Builds (Deployments): You have 300 free credits per month. Each time you upload a change to GitHub, it consumes 15 credits.

    Forms: The free plan allows you to receive up to 100 form submissions per month.   

    Bandwidth: You have 100GB per month, which is more than enough for typical traffic.

--------
## Technlical notes
-SEO: The site is fully configured with metadata for Google, Facebook, and Twitter.   
-Google Analytics: The .html file in the public folder is linked to my Google Search Console account. If you want to access it, a new one must be generated. Otherwise can be deleted.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs necessary tools for the first time.     |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `netlify dev`             | Starts the local environment simulating Netlify. |

