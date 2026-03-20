# agents.md

## Project Overview
This is a SaaS dashboard for tracking sales team performance.

Built with:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Query

The goal is to build a clean, modern, production-ready frontend.

---

## Architecture

The project follows a feature-based structure:

/features
  /dashboard
  /team
  /sales

Shared UI components are located in:
/components/ui

Layout components:
/components/layout

---

## Coding Conventions

- Use TypeScript for all components
- Prefer functional components
- Use explicit typing (avoid `any`)
- Keep components small and reusable
- Use meaningful names (no abbreviations)

---

## Component Guidelines

- Separate UI and logic when possible
- Reuse components (e.g. cards, tables, charts)
- Accept props instead of hardcoding values
- Keep styling consistent with Tailwind

---

## State Management

- Use React Query for server state
- Avoid unnecessary global state
- Keep local UI state inside components

---

## UI / UX Rules

- Always handle:
  - loading states
  - error states
  - empty states

- Prioritize:
  - clarity
  - spacing
  - readability

---

## Instructions for AI Assistants

When generating code:

- Follow the existing folder structure
- Use TypeScript strictly
- Prefer reusable components
- Do not introduce new libraries unless necessary
- Keep code simple and readable
- Match existing styling patterns

When unsure:
- Ask for clarification instead of guessing