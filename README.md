# DPS Mohali MUN 2026 Landing Page (Personal Project)

> A personal project for the DPS Mohali Model United Nations 2026 website. **Not official yet.**

## [Hosted Website](https://your-website-url.com)

## Demo

Preview locally by running the development server (see instructions below).

## Features

- Full-screen landing page with animated stars background
- Responsive layout for desktops, tablets, and mobile
- Theme toggle: black, dark green, forest green, everforest
- Sidebar dev options menu for testing themes and particles
- Buttons for "Register Now" and "Committees" (UI only)
- Clean hero text with school logo (transparent PNG/SVG)
- Built with **React + TypeScript + Vite**

## Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn

### Install Dependencies
```bash
npm install
# or
yarn
```

### Run Dev Server
```bash
npm run dev
# or
yarn dev
```
Open `http://localhost:5173` in your browser.

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to GitHub Pages
- Make sure `vite.config.ts` has the correct `base` set to your repo name.
- Use `gh-pages` or manual deployment to push the `dist` folder to GitHub Pages.

## Folder Structure
```
src/
├─ components/
│  ├─ background/Particles.tsx
│  └─ landing-button/landing-button.tsx
├─ App.tsx
└─ App.css
```

## Notes
- The site is **not yet official**; design and content may change.
- Placeholder buttons and themes are for testing.
- Responsive scaling uses CSS transforms and media queries for simplicity.

## License
This project is personal and not yet official. Use for learning/demo purposes only.
