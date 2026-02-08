# 🚀 Portfolio Project - Setup Guide

> **Repository:** [github.com/shaikhashad35/portfolio](https://github.com/shaikhashad35/portfolio)
> **Live Demo:** [shaikhashad35.github.io/portfolio](https://shaikhashad35.github.io/portfolio)

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

---

## ✅ Prerequisites

Make sure you have the following installed on your machine before proceeding:

| Tool     | Minimum Version | Recommended Version | Download Link                          |
| -------- | --------------- | ------------------- | -------------------------------------- |
| Node.js  | `>=16.x`        | `22.x` (LTS)       | [nodejs.org](https://nodejs.org/)      |
| npm      | `>=8.x`         | `10.x`              | Comes with Node.js                     |
| Git      | `>=2.x`         | Latest              | [git-scm.com](https://git-scm.com/)   |

> **Tip:** You can verify your installations by running:
> ```bash
> node --version
> npm --version
> git --version
> ```

---

## 🛠️ Tech Stack

| Technology          | Purpose                        |
| ------------------- | ------------------------------ |
| React `18.x`        | UI Library                     |
| TypeScript `4.9`    | Type-safe JavaScript           |
| Styled Components   | CSS-in-JS styling              |
| Framer Motion       | Animations & transitions       |
| React Icons         | Icon library                   |
| React Scroll        | Smooth scrolling navigation    |
| Bootstrap `5.1`     | Responsive layout (CDN)        |
| GitHub Pages        | Hosting & deployment           |

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/shaikhashad35/portfolio.git
```

### 2. Navigate to the Project Directory

```bash
cd portfolio
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`, including:

- **Runtime:** `react`, `react-dom`, `styled-components`, `framer-motion`, `react-icons`, `react-scroll`
- **Type Definitions:** `@types/react`, `@types/react-dom`, `@types/styled-components`, `@types/react-scroll`
- **Dev Tools:** `typescript`, `react-scripts`, `gh-pages`

---

## ▶️ Running the Project

Start the development server:

```bash
npm start
```

The app will be available at:

```
http://localhost:3000/portfolio
```

> **Note:** The `/portfolio` base path is derived from the `homepage` field in `package.json`. If port `3000` is already in use, React will automatically use the next available port (e.g., `3001`).

The page will automatically reload when you make changes to the source code.

---

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

This generates a `build/` folder with minified and optimized static files ready for deployment.

---

## 🌐 Deployment

This project is configured for **GitHub Pages** deployment.

### Steps to Deploy

1. **Update the `homepage`** field in `package.json` with your own GitHub Pages URL:

   ```json
   "homepage": "https://<your-username>.github.io/portfolio"
   ```

2. **Run the deploy command:**

   ```bash
   npm run deploy
   ```

   This will automatically:
   - Build the project (`predeploy` → `npm run build`)
   - Push the `build/` folder to the `gh-pages` branch

3. **Enable GitHub Pages** in your repository settings:
   - Go to **Settings** → **Pages**
   - Set the source branch to `gh-pages`
   - Set the folder to `/ (root)`

---

## 📁 Project Structure

```
portfolio/
├── public/                  # Static public assets
│   ├── index.html           # HTML template
│   ├── favicon.ico          # Favicon
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO robots file
│
├── src/                     # Source code
│   ├── App.tsx              # Root application component
│   ├── App.css              # Global app styles
│   ├── index.tsx            # Entry point
│   ├── bg.png               # Background image
│   │
│   ├── assets/              # Static assets
│   │   └── images/          # Project images (blogs, skills, etc.)
│   │
│   ├── components/          # React components
│   │   ├── Hero/            # Hero/landing section
│   │   ├── Navbar/          # Navigation bar
│   │   ├── Experience/      # Work experience section
│   │   ├── Projects/        # Projects showcase
│   │   ├── Skills/          # Technical skills section
│   │   ├── Education/       # Education background
│   │   ├── Certificates/    # Certifications section
│   │   ├── Blogs/           # Blog posts section
│   │   ├── Contact/         # Contact form/info
│   │   ├── About/           # About me section
│   │   ├── Navigation/      # Navigation utilities
│   │   └── common/          # Shared/reusable components
│   │       ├── CodeBackground.tsx   # Animated code background
│   │       ├── ErrorBoundary.tsx    # Error boundary wrapper
│   │       ├── Loading.tsx          # Loading spinner/animation
│   │       ├── ScrollToTop.tsx      # Scroll-to-top button
│   │       └── ThemeProvider.tsx     # Theme context provider
│   │
│   ├── styles/              # Global styles & theming
│   │   ├── GlobalStyles.ts  # Global styled-components styles
│   │   └── theme.ts         # Theme configuration (colors, fonts)
│   │
│   ├── types/               # TypeScript type definitions
│   │   ├── environment.d.ts # Environment variable types
│   │   └── images.d.ts      # Image module declarations
│   │
│   └── utils/               # Utility functions
│       ├── animations.ts    # Framer Motion animation configs
│       ├── navigation.ts    # Navigation helpers
│       └── performance.ts   # Performance utilities
│
├── build/                   # Production build output (generated)
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project overview
```

---

## 📜 Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm start`       | Start the development server                     |
| `npm run build`   | Create a production build                        |
| `npm test`        | Run tests in interactive watch mode              |
| `npm run deploy`  | Build and deploy to GitHub Pages                 |
| `npm run eject`   | Eject from Create React App (⚠️ irreversible)    |

---

## 🔧 Troubleshooting

### Port already in use

If port `3000` is occupied, React will prompt you to use another port. Accept the prompt, or manually set the port:

```bash
PORT=3001 npm start
```

### `npm install` fails

Try clearing the npm cache and reinstalling:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

Ensure you're using the correct TypeScript version:

```bash
npx tsc --version
```

The project uses TypeScript `^4.9.5` as specified in `package.json`.

### Build fails on deployment

Make sure the `homepage` field in `package.json` matches your GitHub Pages URL format:

```json
"homepage": "https://<username>.github.io/<repo-name>"
```

---

## 📬 Contact

- **Author:** Ashad Shaikh
- **Email:** shaikhashad35@gmail.com
- **LinkedIn:** [linkedin.com/in/ashad-shaikh](https://www.linkedin.com/in/ashad-shaikh/)
- **GitHub:** [github.com/shaikhashad35](https://github.com/shaikhashad35/)

---

> ⭐ If you found this project helpful, give it a star on [GitHub](https://github.com/shaikhashad35/portfolio)!
