# CCDI Evaluation System Project Manifest

## Faculty

- Aaron Paul Ramos
- Edvil Luces
- Junnel Fadrilan
- Edwardo Galino Reyes
- Aldin Fuaso
- Olive Jane Dealca
- Willy Dongsao

## Subjects

| Subject Code | Descriptive Title |
| --- | --- |
| Eng 1 | Purposive Communication |
| GE Elect 1 | Living in the IT Era |
| Math 1 | Mathematics in the Modern World |
| ITC 101 | Introduction to Computing |
| ITC 102 | Computer Programming 1 |
| ITC 103 | IT Software Solutions for Business |
| PATHFIT 1 | Movement Competency Training |
| NSTP 1 | National Service Training Program 1 |
| History 1 | Readings in the Philippine History |
| Philo 1 | Understanding the Self |
| GE Elect 3 | Philippine Indigenous Communities |
| ITC 201 | Data Structures and Algorithms |
| ITP 202 | Application Development and Emerging Technologies |
| ITP 203 | Fundamentals of Database Systems |
| PATHFIT 3 | Outdoor and Adventure Activities |
| ITP 402 | Systems Administration and Maintenance |
| Project 2 | Capstone Project 2 |

## Distribution approach

Subject records use stable IDs in `src/data/faculty.ts`. Professors reference those records through `subjectIds`, so assigning a subject to multiple professors does not duplicate its details. Every professor has at least one subject.

The current subject-to-professor distribution is explicitly marked as demonstration assignments in the source file. The project workspace did not contain the three referenced schedule images or their instructor-to-subject data. Replace the `subjectIds` on each professor with verified schedule assignments when those are available; do not edit the official subject code/title records to force a match. Each evaluation record saves the selected subject alongside the professor, including when saving/resuming drafts and submitting.

## Demonstration login and roles

The login flow asks users to choose Student Login or Faculty Login. Administrator accounts use Faculty Login. Credentials are frontend-only demo credentials and do not authenticate against the CCDI LMS:

| Login type | Username | Password | Role / destination |
| --- | --- | --- | --- |
| Faculty | `admin` | `password` | Admin dashboard |
| Faculty | `aaronpaul` | `password` | Faculty dashboard |
| Student | `ccdi-24-s1170` | `password` | Student evaluation dashboard |

The account configuration, credential checks, and route-level role redirects are in `src/utils/demoAuth.ts` and `src/App.tsx`. These browser checks are for demonstration only and are not server-side security. The Admin dashboard includes live local counts, faculty activation, evaluation monitoring, filters and CSV export, period open/close, and faculty summary release. The Faculty dashboard is limited to Aaron Paul Ramos’s own information and displays results only after release. The Student dashboard shows the configured demo roster and eligible evaluation assignments, drafts, and submissions. The student schedule is explicitly demonstration data in `src/data/demoData.ts`.

## Local storage

- `ccdi-demo-session-v1`: active demo session; passwords are not stored.
- `ccdi-demo-admin-settings-v1`: demonstration faculty activation, evaluation period availability, and faculty summary release settings.
- `ccdi-evaluations-v1`: evaluation drafts and submissions, including subject, student ID, and period ID where available.

All records remain in the current browser. Clearing browser storage removes them. No backend/API or official account source is connected. There is one sample student and one sample non-teaching record; registration, a full official student roster, verified schedule enrollment, configurable period history, and server-enforced authorization are not implemented. Evaluation data is not invented; when there are no submissions, reports are empty. Summary release only controls display in this demo.
