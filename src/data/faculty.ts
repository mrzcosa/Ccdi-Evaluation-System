import type { Faculty, Subject } from '../types/evaluation'

export const subjects: Subject[] = [
  { id: 'eng-1', code: 'Eng 1', name: 'Purposive Communication' },
  { id: 'ge-elect-1', code: 'GE Elect 1', name: 'Living in the IT Era' },
  { id: 'math-1', code: 'Math 1', name: 'Mathematics in the Modern World' },
  { id: 'itc-101', code: 'ITC 101', name: 'Introduction to Computing' },
  { id: 'itc-102', code: 'ITC 102', name: 'Computer Programming 1' },
  { id: 'itc-103', code: 'ITC 103', name: 'IT Software Solutions for Business' },
  { id: 'pathfit-1', code: 'PATHFIT 1', name: 'Movement Competency Training' },
  { id: 'nstp-1', code: 'NSTP 1', name: 'National Service Training Program 1' },
  { id: 'history-1', code: 'History 1', name: 'Readings in the Philippine History' },
  { id: 'philo-1', code: 'Philo 1', name: 'Understanding the Self' },
  { id: 'ge-elect-3', code: 'GE Elect 3', name: 'Philippine Indigenous Communities' },
  { id: 'itc-201', code: 'ITC 201', name: 'Data Structures and Algorithms' },
  { id: 'itp-202', code: 'ITP 202', name: 'Application Development and Emerging Technologies' },
  { id: 'itp-203', code: 'ITP 203', name: 'Fundamentals of Database Systems' },
  { id: 'pathfit-3', code: 'PATHFIT 3', name: 'Outdoor and Adventure Activities' },
  { id: 'itp-402', code: 'ITP 402', name: 'Systems Administration and Maintenance' },
  { id: 'project-2', code: 'Project 2', name: 'Capstone Project 2' },
]

// Demonstration assignments: schedule instructor names were not supplied with the project.
// Edit these subjectIds to reflect the official schedule; subject records stay shared above.
export const faculty: Faculty[] = [
  { id: 'f1', name: 'Aaron Paul Ramos', department: 'Information Technology', subjectIds: ['eng-1', 'itc-101', 'itc-201'], semester: 'First Semester', year: '2026–2027', initials: 'AR' },
  { id: 'f2', name: 'Edvil Luces', department: 'Information Technology', subjectIds: ['ge-elect-1', 'itc-102', 'itp-202'], semester: 'First Semester', year: '2026–2027', initials: 'EL' },
  { id: 'f3', name: 'Junnel Fadrilan', department: 'Information Technology', subjectIds: ['math-1', 'itc-103'], semester: 'First Semester', year: '2026–2027', initials: 'JF' },
  { id: 'f4', name: 'Edwardo Galino Reyes', department: 'Information Technology', subjectIds: ['pathfit-1', 'itp-203'], semester: 'First Semester', year: '2026–2027', initials: 'ER' },
  { id: 'f5', name: 'Aldin Fuaso', department: 'Information Technology', subjectIds: ['nstp-1', 'pathfit-3'], semester: 'First Semester', year: '2026–2027', initials: 'AF' },
  { id: 'f6', name: 'Olive Jane Dealca', department: 'Information Technology', subjectIds: ['history-1', 'itp-402'], semester: 'First Semester', year: '2026–2027', initials: 'OD' },
  { id: 'f7', name: 'Willy Dongsao', department: 'Information Technology', subjectIds: ['philo-1', 'ge-elect-3', 'project-2'], semester: 'First Semester', year: '2026–2027', initials: 'WD' },
]
