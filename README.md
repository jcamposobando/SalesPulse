# SalesPulse Dashboard

## Overview

SalesPulse is a SaaS-style dashboard for tracking sales team performance. It allows managers to monitor key metrics, compare team members, and analyze trends over time.

This project simulates a real-world product environment, focusing on data visualization, UI clarity, and scalable frontend architecture.

---

## Features

* 📊 Performance overview (KPIs + trends)
* 👥 Team comparison table (sortable & filterable)
* 👤 Individual performance view
* ➕ Sales entry (CRUD)
* 📅 Time-based filtering

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Query
* React Hook Form

---

## Architecture

The project uses a feature-based structure:

/features
/dashboard
/team
/sales

Shared UI components:
/components/ui

Layout:
/components/layout

This structure improves scalability and separation of concerns.

---

## Key Decisions

* **React Query** for server state to simplify data fetching and caching
* **Feature-based architecture** for maintainability
* **Reusable UI components** for consistency
* **Tailwind CSS** for rapid and controlled styling

---

## UX Considerations

* Clear visual hierarchy for fast decision-making
* Loading, error, and empty states handled across the app
* Responsive layout for multiple screen sizes

---

## Getting Started

```bash
pnpm install
pnpm dev
```

---

## Live Demo

Deployed on [Vercel](https://sales-pulse-sepia.vercel.app/)

---

## Notes

This project was built to demonstrate real-world frontend engineering practices, including state management, component design, and UI/UX thinking.
