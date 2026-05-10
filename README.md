> This project is made with the help of Claude (1M context).

# ZenMat

Comprehensive yoga and wellness platform — studio booking, on-demand streaming, teacher training, and Ayurveda integration.

## Overview

ZenMat connects practitioners with studios, live classes, and a deep on-demand library. Features studio discovery with map view, class booking, thousands of streamable sessions (meditation, pranayama, vinyasa, yin), progress tracking, teacher training programs, retreats worldwide, and Ayurvedic dosha guidance.

## Features

- **Studio discovery** — Map view with filters (location, style, price)
- **Live class booking** — Real-time scheduling
- **On-demand library** — Thousands of yoga and meditation sessions
- **Pranayama + meditation** — Guided breathwork content
- **Progress tracking** — Streaks, poses mastered, minutes practiced
- **Teacher training** — 200hr, 500hr, certified programs
- **Retreats** — Bali, Costa Rica, India, and more
- **Ayurveda integration** — Dosha quizzes, seasonal guides
- **Challenges** — Time-bound community challenges
- **Instructor profiles** — Bios, ratings, specialties

## Tech Stack

- **Framework:** Next.js 16.2+, React 19.2, TypeScript
- **Styling:** Tailwind CSS 4
- **UI:** shadcn/ui (17+ component types)
- **Icons:** Lucide React
- **Font:** Geist
- **Mock data:** `src/lib/mock-data` for prototyping

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Live: [zenmat.work.withdarsh.com](https://zenmat.work.withdarsh.com)

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint
