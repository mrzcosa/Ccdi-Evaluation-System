# Recent accomplishments

## Student experience

- Configured the four demonstration student accounts for BS Information Technology 3C and corrected Mark Russell Cosa's name.
- Added seven BSIT 3C subjects and their faculty assignments to the demonstration schedule.
- Limited the student faculty and subject selector to assignments for the signed-in student's section.
- Updated the assigned-evaluations dashboard count to seven per student, with pending evaluations based on submissions.
- Changed the subject selector prompt to **Select Subject** and removed the sample-data badge and local-storage notice from the selection card.
- Removed the confidentiality/local-storage card from Help & Guidelines.

## Administration and faculty views

- Added a **Subjects** page to the admin sidebar, listing subject codes and titles, assigned faculty, department, and sections.
- Added an **Announcements** view to the faculty sidebar.
- Added a **My Subjects** heading and a table with subject code, subject title, and section columns. The table lists the faculty member's assigned subjects.
- Replaced profile icons with initials in the faculty profile and top bar.
- Updated faculty completion progress to count distinct assigned subjects with at least one completed evaluation in the current period. Multiple submissions for the same subject count once.

## Interface polish

- Removed the Overview/My Subject tab row from the faculty content area so the selected view displays directly.
- Aligned the dashboard stat cards, then reduced their desktop height to 100px.

## Files updated

- `src/App.tsx` — student dashboard, section-scoped subject selection, and selection-card copy.
- `src/components/RoleDashboard.tsx` — admin Subjects view, faculty Announcements and My Subjects views, progress calculation, and profile initials.
- `src/data/faculty.ts` — added subjects and faculty assignments.
- `src/data/demoData.ts` and `src/utils/demoAuth.ts` — student demo roster, course sections, and display name.
- `src/App.css` — subject table columns and dashboard stat card sizing/alignment.
