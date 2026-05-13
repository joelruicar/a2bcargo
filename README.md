# A2BCargo

```sh
netlify dev
```


## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── public/
│   └── assets.ico
│   │  
│   ├── favico.ico
│   │  
│   ├── googleaacf7a3ad3c72aa6.html
│   │ 
│   └── form.html
├── src
│   ├── pages
│   │   └── index.astro
│   │   └── success.astro
│   ├── styles
│   │   └── global.css
└── package.json
```

Form.html might be deleted in the future, but as of now netlify did not detect the form without it.
The google file is needed for google search console.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

