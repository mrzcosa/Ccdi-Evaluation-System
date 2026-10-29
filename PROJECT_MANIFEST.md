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
