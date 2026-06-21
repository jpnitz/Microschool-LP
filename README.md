# MicroSchool

MicroSchool is a home-first, standards-aligned lesson planner for microschools and home
educators. This repository contains the first executable website prototype for the PRD:
profile setup, curriculum and standards, baseline calibration, augmented weekly lesson
planning, calendar autofill/reflow concepts, and activity-to-standard matching.

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the prototype.

## Scripts

```bash
npm run dev    # start local development server
npm run build  # create production build
npm run start  # serve production build
npm run lint   # TypeScript type check
```

## Implemented pages

- `/` - product overview and weekly engine narrative
- `/profile` - parent/facilitator and student profile setup
- `/curriculum` - standards selection and custom curriculum flow
- `/baseline` - Math/ELA calibration and subject pointers
- `/planner` - weekly generation controls plus preserved manual lesson path
- `/calendar` - generated calendar, reflow concept, and activity matching

## Project plan

See [`docs/project-plan.md`](docs/project-plan.md) for the current implementation slice,
next backend milestones, and technical risks.
