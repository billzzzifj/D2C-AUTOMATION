# AURA // Global D2C Digital Conversion OS

> **The Ultimate Client Acquisition Engine for High-End UI/UX & AI Strategy Agencies.**
> Engineered for targeting `$1M–$50M/yr` D2C brands with live revenue-bleed modeling, AI 3D visual campaign simulators, and multi-channel outreach automation.

![Linear Dark Mode Aesthetic](https://img.shields.io/badge/Aesthetic-Quiet%20Luxury%20Tech-black?style=for-the-badge)
![React 19](https://img.shields.io/badge/React-19.3-blue?style=for-the-badge&logo=react)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite)

---

## ⚡ Key Highlights

### 1. The Command Center (Agency Internal CRM) — `/#/`
- **Visual Kanban Board**: 4-stage pipeline (`Targeted` ➔ `DM/Pitch Sent` ➔ `Demo Clicked/Reviewing` ➔ `Closed/Won`).
- **Drag-and-Drop & Stage Transitions**: Full HTML5 drag-and-drop support with live stage bleed summation.
- **LocalStorage State Persistence**: Board positions and modifications persist automatically across sessions.
- **1-Click Contact Enrichment**: Instant one-tap triggers for **Instagram Direct**, **LinkedIn**, and **Pre-drafted Email** (`mailto:`).
- **The Pitch Generator**: Multi-channel outreach scripts (Instagram DM, Executive Email, LinkedIn InMail) featuring dynamic parameter interpolation.
- **20 Anchor Global D2C Brands**: Pre-loaded with verified traffic and AOV metrics across skincare, streetwear, beverage, and tech accessories.

### 2. The Client Demo Environment — `/#/demo/[slug]`
- **Zero Admin Clutter**: 100% responsive, luxury dark mode experience designed exclusively for client decision-makers.
- **Module 1: The Revenue Bleed Visualizer**:
  - Compares **Current Revenue (1.2% CVR)** vs **AURA Architecture (2.8% CVR)**.
  - Highlights lost revenue as glowing crimson deltas with real-time daily bleed tickers (`-$X,XXX/day`).
  - Two-way reactive URL synchronization: updates `?traffic=...&aov=...&cvr=...&opt_cvr=...` directly in the address bar.
- **Module 2: AI Visual Asset Simulator**:
  - Interactive Before/After Split Comparison Slider comparing a **$25k Traditional Photoshoot** vs a **$4,800 AI 3D Campaign Pipeline** (80% cost reduction, 48h turnaround, 120+ omnichannel assets).
  - 4 interactive asset archetype previews: *3D Spatial Orbit (360° turntable)*, *Macro Specular Subsurface Detail*, *Virtual Lighting Shifts (Noir / Sunset / Neon)*, and *Omnichannel Cutdowns (9:16 / 1:1 / 21:9)*.
- **Module 3: Mobile UX Friction Teardown**:
  - Detailed diagnosis of the brand's top 3 mobile checkout bottlenecks.
  - Interactive comparison of legacy Shopify flow vs sub-second frictionless checkout.
- **Sticky Conversion Footer & Booking Modal**:
  - Locked frosted glass bottom bar with live bleed ticker.
  - Built-in 30-minute architecture review scheduler with interactive slot picker and `canvas-confetti` confirmation.

---

## 🚀 Quick Start

### Prerequisites
- Node.js `v18+` (recommended `v20`+)
- npm `v9+`

### Installation

```bash
# Clone the repository
git clone https://github.com/billzzzifj/D2C-AUTOMATION.git
cd D2C-AUTOMATION

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```
d2c-conversion-os/
├── public/                     # Static assets & icons
├── src/
│   ├── assets/                 # SVGs and imagery
│   ├── components/
│   │   ├── common/             # Header, Toast, Social Icons
│   │   ├── crm/                # Kanban board, brand cards, pitch modal, stats overview
│   │   └── demo/               # Bleed visualizer, AI simulator, friction audit, footer, booking modal
│   ├── context/
│   │   └── BrandContext.jsx    # Global state, localStorage syncing, pipeline analytics
│   ├── data/
│   │   └── globalD2CTargets.js # Anchor dataset containing the 20 global D2C brands
│   ├── pages/
│   │   ├── CommandCenter.jsx   # Agency internal CRM view
│   │   └── ClientDemo.jsx      # Personalized client demo environment
│   ├── utils/
│   │   └── formatters.js       # Currency, percentage, and tabular number formatting
│   ├── App.jsx                 # HashRouter setup (/#/ and /#/demo/:slug)
│   ├── index.css               # Tailwind CSS v4 tokens, glassmorphism, glow utilities
│   └── main.jsx                # Application root
├── index.html
├── package.json
└── vite.config.js
```

---

## 💎 Design System & Palette

- **Background**: `#000000` (True Black) & `#0A0A0A` (Deep Charcoal)
- **Cards**: `bg-white/[0.03]`, `backdrop-blur-xl`, `border-white/[0.08]`
- **Typography**: Inter / Sans-serif (`tracking-tight`), monospace tabular numbers (`tabular-nums`)
- **Accents**:
  - `Electric Indigo` (`#6366F1`) & `Emerald Glow` (`#10B981`) for ROI & primary CTAs
  - `Gilded Crimson` (`#EF4444`) for revenue bleed warnings

---

## 📜 License

MIT License. Designed & engineered for elite D2C performance agencies.
