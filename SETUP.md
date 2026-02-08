# 🚀 Portfolio Project - Setup Guide

> **Repository:** [github.com/shaikhashad35/portfolio](https://github.com/shaikhashad35/portfolio)
> **Live Demo:** [shaikhashad35.github.io/portfolio](https://shaikhashad35.github.io/portfolio)
> **Version:** `0.2.0`

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Available Scripts](#available-scripts)
- [Troubleshooting](#troubleshooting)
- [Changelog](#changelog)
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
| React Icons         | Icon library (incl. brand colors) |
| React Scroll        | Smooth scrolling navigation    |
| GitHub Pages        | Hosting & deployment           |

---

## ✨ Features

- **Dark theme** with accent colors and card hover glow effects
- **Responsive design** — optimized for desktop, tablet, and mobile
- **Impact highlights bar** in Hero section (Years, Companies, AI, Services)
- **Brand-colored skill icons** for Python, Django, .NET, Spring Boot, AWS, Azure, GCP
- **Animated navbar** with underline active indicator
- **Section dividers** — subtle gradient lines between sections
- **Lazy-loaded components** for performance
- **Matrix-style code background** animation
- **Scroll-to-top** button
- **OG meta tags** with custom SVG image for social media link previews
- **SEO optimized** — meta descriptions, keywords, Open Graph tags
- Sections: Hero, Experience, Skills, Education, Certificates, Blogs, Contact
- Footer with copyright

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

4. Your site will be live at `https://<your-username>.github.io/portfolio` within a few minutes.

---

## 📁 Project Structure

```
portfolio/
├── public/                  # Static public assets
│   ├── index.html           # HTML template (SEO + OG meta tags)
│   ├── og-image.svg         # Open Graph image for social previews
│   ├── favicon.ico          # Favicon
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO robots file
│
├── src/                     # Source code
│   ├── App.tsx              # Root component (section order, footer, lazy loading)
│   ├── App.css              # Legacy styles (cleaned up)
│   ├── index.tsx            # Entry point
│   │
│   ├── assets/              # Static assets
│   │   └── images/          # Skill icons, blog thumbnails
│   │
│   ├── components/          # React components
│   │   ├── Hero/            # Landing section + impact highlights bar
│   │   ├── Navbar/          # Navigation bar with animated underline indicator
│   │   ├── Experience/      # Work experience timeline
│   │   ├── Skills/          # Technical skills grid (brand-colored icons)
│   │   ├── Projects/        # Projects showcase (currently commented out)
│   │   ├── Education/       # Education cards (3-column grid)
│   │   ├── Certificates/    # Certifications grid (4-column)
│   │   ├── Blogs/           # Blog posts grid (4-column)
│   │   ├── Contact/         # Contact CTA card
│   │   ├── About/           # About me section
│   │   ├── Navigation/      # Navigation utilities
│   │   └── common/          # Shared/reusable components
│   │       ├── Section.tsx          # Section wrapper with gradient dividers
│   │       ├── CodeBackground.tsx   # Matrix-style animated background
│   │       ├── ErrorBoundary.tsx    # Error boundary wrapper
│   │       ├── Loading.tsx          # Loading spinner/animation
│   │       ├── ScrollToTop.tsx      # Scroll-to-top button
│   │       └── ThemeProvider.tsx     # Theme context provider
│   │
│   ├── styles/              # Global styles & theming
│   │   ├── GlobalStyles.ts  # Global styles, scrollbar, selection highlight
│   │   └── theme.ts         # Theme config (colors, accents, card borders, fonts)
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
├── package.json             # Dependencies & scripts (v0.2.0)
├── tsconfig.json            # TypeScript configuration
├── SETUP.md                 # This file
└── README.md                # Project overview
```

---

## 🎨 Design System

### Theme Colors

| Token           | Value                        | Usage                      |
| --------------- | ---------------------------- | -------------------------- |
| `primary`       | `#0a192f`                    | Background                 |
| `secondary`     | `#112240`                    | Card backgrounds           |
| `accent`        | `#64ffda`                    | Highlights, links, borders |
| `accentAlt`     | `#57cbff`                    | Secondary accent (blue)    |
| `text`          | `#8892b0`                    | Body text                  |
| `textLight`     | `#ccd6f6`                    | Headings                   |
| `cardBorder`    | `rgba(100, 255, 218, 0.1)`   | Card borders               |
| `cardHoverBorder` | `rgba(100, 255, 218, 0.3)` | Card hover borders + glow  |

### Fonts

- **Headings:** JetBrains Mono (monospace)
- **Body:** Inter (sans-serif)

### Responsive Breakpoints

| Breakpoint | Width    | Layout Changes                           |
| ---------- | -------- | ---------------------------------------- |
| `xl`       | 1200px   | Max container width                      |
| `lg`       | 992px    | —                                        |
| `md`       | 768px    | Navbar collapses, grids reduce columns   |
| `sm`       | 576px    | —                                        |
| `≤480px`   | Mobile   | 3-col skills, 1-col projects/education   |
| `≤320px`   | Small    | 2-col skills                             |

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

## 📝 Changelog

### v0.2.0 (Feb 2026)
- Major portfolio redesign — improved layout, content, and UX
- Updated Microsoft experience with detailed AI/backend bullet points
- Added Python, Django, .NET Core/Framework, Spring Boot, AWS, Azure, GCP to skills
- Brand-colored skill icons using React Icons
- Reordered sections: Skills before Projects
- Full-width responsive grid layouts across all sections
- Commented out Projects section (pending updates)
- Removed basic/dated certificates
- Rewrote Hero with generic Senior SWE positioning + impact highlights bar
- Design overhaul: card borders with hover glow, navbar active underline, section gradient dividers, styled Contact CTA, text selection highlight, improved scrollbar
- Removed unused Bootstrap CDN (~160KB savings)
- Cleaned up legacy App.css styles
- Reduced loading screen from 2s to 800ms
- Added og-image.svg for social media link previews
- Added footer with copyright

### v0.1.0
- Initial portfolio with React + TypeScript + Styled Components

---

## 📬 Contact

- **Author:** Ashad Shaikh
- **Email:** shaikhashad35@gmail.com
- **LinkedIn:** [linkedin.com/in/ashad-shaikh](https://www.linkedin.com/in/ashad-shaikh/)
- **GitHub:** [github.com/shaikhashad35](https://github.com/shaikhashad35/)

---

> ⭐ If you found this project helpful, give it a star on [GitHub](https://github.com/shaikhashad35/portfolio)!
