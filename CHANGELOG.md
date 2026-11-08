# Recent accomplishments

## Student experience

- Registered 416 students from the supplied `Student Data.xlsx` sheet and retained the four existing BSIT 3C demo accounts, for 420 student accounts total.
- Enabled Student login for roster IDs and carried program/year details into the student roster and Admin People list.
- Matched configured BSIT demo evaluation assignments by program and year level; the other programs do not yet have demo schedules.
- Made the Admin completion rate count eligible students who submitted every assigned evaluation in the current period.
- Connected the Admin completion rate to submitted and pending assignment counts for the current period.
- Assumed about half of eligible students in each BSIT year group have completed all assigned evaluations; the four specified student IDs are excluded unless actual records show completion.
- Used the same assumed cohort for Admin and Faculty submitted, pending, and completion metrics. The illustrative Faculty overall rating remains 4.12 (Very Satisfactory), without creating evaluation scores.
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
- Added mobile slide-in navigation for Student, Admin, and Faculty portals, with a dismissible backdrop.
- Reflowed dashboard cards, filters, evaluation layouts, and profile details for phone widths; kept wide data tables horizontally scrollable.

## Files updated

- `src/App.tsx` — student dashboard, section-scoped subject selection, and selection-card copy.
- `src/components/RoleDashboard.tsx` — admin Subjects view, faculty Announcements and My Subjects views, progress calculation, and profile initials.
- `src/data/faculty.ts` — added subjects and faculty assignments.
- `src/data/demoData.ts` and `src/utils/demoAuth.ts` — student demo roster, course sections, and display name.
- `src/App.css` — subject table columns and dashboard stat card sizing/alignment.
