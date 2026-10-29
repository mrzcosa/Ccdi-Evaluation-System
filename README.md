# CCDI Sorsogon Evaluation System

A frontend-only faculty and non-teaching staff evaluation portal built with React, TypeScript, and Vite. The current evaluation form follows the CCDI Sorsogon Teacher Performance Evaluation Instrument shown in the supplied reference photographs.

## What is implemented

- A dashboard with evaluation counts, recent activity, and shortcuts.
- Faculty selection with search and department filters. Faculty and announcement entries are demonstration data.
- The teacher evaluation flow: select a faculty member, rate questionnaire items, review the answers, and submit or save a draft.
- The questionnaire's six scored sections and 28 indicators, rated from 5 (Excellent) to 1 (Needs Improvement), plus comments and suggestions.
- Scoring based on the mean of all 28 ratings and the instrument's five interpretation bands.
- My Evaluations, announcements, and help pages.
- Responsive navigation and layouts, with Lucide icons and a styled sidebar hamburger toggle.
- Local browser persistence using `localStorage`. There is no API or server submission; evaluations remain in the current browser.

## Questionnaire sections

1. Instructional Delivery and Methodology (6 items)
2. Learning Management System (LMS) Utilization (5 items)
3. Classroom Management and Learning Environment (5 items)
4. Professionalism and Commitment (5 items)
5. Student Engagement and Learning Outcomes (5 items)
6. Overall Evaluation (2 items)

Comments and Suggestions are collected separately from the 28 scored items.

## Run locally

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Other project commands:

```sh
npm run build
npm run lint
npm run preview
```

## Project structure

- `src/App.tsx` — page routing, evaluation workflow, and interface components.
- `src/App.css` and `src/index.css` — application and global styles.
- `src/data/evaluationQuestions.ts` — questionnaire statements and rating descriptions.
- `src/data/faculty.ts` and `src/data/announcements.ts` — sample content.
- `src/utils/scoring.ts` — evaluation average and interpretation.
- `src/utils/storage.ts` — local browser record persistence.
- `src/types/evaluation.ts` — shared TypeScript data types.
- `src/assets/Ccdi Logo/CCDI Logo.png` — CCDI logo asset.

## Recent interface work

The interface was refined around a navy sidebar, pale blue workspace, consistent cards, clearer spacing and focus states, and responsive layouts. Emoji and text-symbol interface icons were replaced with Lucide icons. The sidebar toggle now uses a rounded hamburger control with hover and keyboard-focus feedback; it expands or collapses the navigation.

## Validation note

During the latest local validation attempt, Vite could not start its build process because Windows returned `spawn EPERM`. ESLint also reported existing React hook and purity errors in `src/App.tsx`. These issues were not addressed as part of the interface documentation update.
