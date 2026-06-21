# MicroSchool Website Execution Plan

This repository now contains the first executable frontend slice for the MicroSchool PRD.
It is intentionally built as a typed Next.js prototype with mock data so the product flow,
page structure, and engine contracts are visible before Supabase, AI, weather, and auth
services are wired in.

## Implemented in this slice

- Next.js App Router project scaffold with TypeScript and Tailwind.
- Shared layout, navigation, metadata, and responsive styling.
- Overview page that explains the product, weekly engine, and capstone scope.
- Profile page for parent/facilitator and student data.
- Curriculum page for official standards plus custom AI-generated curriculum flow.
- Baseline page for Math/ELA calibration and subject pointer display.
- Planner page for:
  - weekly hour budgets,
  - activity offsets,
  - home-first lesson generation,
  - PE outdoor rule,
  - field-trip quota controls,
  - preserved manual single-lesson path.
- Calendar page for autofilled events, parent edits, reflow concept, and
  activity-to-standard matching.
- Typed mock domain data in `src/lib/mock-data.ts`.

## Next implementation milestones

1. **Persistence and auth**
   - Add Supabase client configuration.
   - Create migrations or SQL files for the PRD additions:
     `subject_state`, `weekly_budget`, `assessments`, `calendar_events`,
     and `subject_groups`.
   - Replace mock profile/student data with authenticated user records.

2. **Standards and curricula**
   - Import or connect the Common Core / standards dataset.
   - Implement grade and subject filters.
   - Persist custom AI-generated standards directly to `curricula`.

3. **Weekly lesson engine**
   - Implement a server-side engine that accepts:
     student, subject states, weekly budgets, offsets, travel distance, and trip quota.
   - Select current standards according to the PRD advancement rules.
   - Generate one-subject lesson drafts and persist them to `lesson_plans`.

4. **AI services**
   - Lesson generation prompt for home-first plans and optional field-trip candidates.
   - Activity-to-standard matching that only returns standard codes from filtered data.
   - Custom curriculum generation with optional cross-walk metadata.

5. **Calendar and reflow**
   - Persist generated lessons to `calendar_events`.
   - Implement edit, replace, and reflow logic that preserves subject hour targets.
   - Add weather-informed outdoor scheduling.

6. **Assessment path**
   - Store Math/ELA diagnostic and weekly assessment results.
   - Advance subject pointers from assessment outcomes.
   - Leave Science baseline deferred until assessment storage is in place.

## Technical risks to address next

- The current standards may be too broad to prove mastery after one lesson, matching the
  PRD's warning about fine-grained standards.
- AI features need strict guardrails so matched standards are selected from database
  results and never fabricated.
- Calendar reflow should operate on explicit constraints rather than fragile time-string
  manipulation.
- Field-trip search, weather, and budget logic should be isolated behind service
  interfaces so home-based fallback remains reliable.
