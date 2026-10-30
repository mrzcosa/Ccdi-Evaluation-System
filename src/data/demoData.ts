import type { Subject } from '../types/evaluation'

export const demoStudent = {
  id: 'ccdi-24-s1170',
  name: 'Mark Rusell Cosa',
  department: 'BS Information Technology',
  section: '3C',
}
export const demoStudentRoster = [demoStudent]

// Demonstration schedule only; replace with the student's approved enrollment data when available.
export const demoEnrollment: { facultyId: string; subjectId: string; section: string }[] = [
  { facultyId: 'f1', subjectId: 'eng-1', section: 'BSIT 1-A' },
  { facultyId: 'f1', subjectId: 'itc-101', section: 'BSIT 1-A' },
  { facultyId: 'f1', subjectId: 'itc-201', section: 'BSIT 2-A' },
  { facultyId: 'f2', subjectId: 'ge-elect-1', section: 'BSIT 1-A' },
  { facultyId: 'f2', subjectId: 'itc-102', section: 'BSIT 1-A' },
  { facultyId: 'f2', subjectId: 'itp-202', section: 'BSIT 2-A' },
  { facultyId: 'f3', subjectId: 'math-1', section: 'BSIT 1-A' },
  { facultyId: 'f3', subjectId: 'itc-103', section: 'BSIT 1-A' },
  { facultyId: 'f4', subjectId: 'pathfit-1', section: 'BSIT 1-A' },
  { facultyId: 'f4', subjectId: 'itp-203', section: 'BSIT 2-A' },
  { facultyId: 'f5', subjectId: 'nstp-1', section: 'BSIT 1-A' },
  { facultyId: 'f5', subjectId: 'pathfit-3', section: 'BSIT 2-A' },
  { facultyId: 'f6', subjectId: 'history-1', section: 'BSIT 1-A' },
  { facultyId: 'f6', subjectId: 'itp-402', section: 'BSIT 4-A' },
  { facultyId: 'f7', subjectId: 'philo-1', section: 'BSIT 1-A' },
  { facultyId: 'f7', subjectId: 'ge-elect-3', section: 'BSIT 2-A' },
  { facultyId: 'f7', subjectId: 'project-2', section: 'BSIT 4-A' },
]

export const demoNonTeachingStaff = [{ id: 'staff-demo-1', name: 'Sample Non-Teaching Staff', department: 'Student Services', position: 'Student Services Staff', status: 'Active' }]
export type AddedStaffRecord = { id: string; name: string; role: 'Faculty' | 'Non-Teaching Staff'; department: string; position?: string; subjectIds: string[]; status: 'Active' | 'Inactive' }
const STAFF_KEY = 'ccdi-demo-added-staff-v1'
export function loadAddedStaff(): AddedStaffRecord[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(STAFF_KEY) ?? '[]')
    if (!Array.isArray(value)) return []
    return value.filter((item): item is AddedStaffRecord => !!item && typeof item === 'object' && typeof item.id === 'string' && typeof item.name === 'string' && (item.role === 'Faculty' || item.role === 'Non-Teaching Staff') && typeof item.department === 'string' && Array.isArray(item.subjectIds) && (item.status === 'Active' || item.status === 'Inactive'))
  } catch { return [] }
}
export function saveAddedStaff(records: AddedStaffRecord[]) {
  try { localStorage.setItem(STAFF_KEY, JSON.stringify(records)); return true } catch { return false }
}
export const evaluationPeriod = { id: '2026-2027-first', name: 'First Semester · 2026–2027', status: 'Open' as const }

const ADMIN_KEY = 'ccdi-demo-admin-settings-v1'
export type DemoAdminSettings = { inactiveFacultyIds: string[]; periodOpen: boolean; facultySummariesReleased: boolean }
const defaultSettings: DemoAdminSettings = { inactiveFacultyIds: [], periodOpen: true, facultySummariesReleased: false }
export function loadAdminSettings(): DemoAdminSettings {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(ADMIN_KEY) ?? 'null')
    if (!value || typeof value !== 'object') return defaultSettings
    const settings = value as Partial<DemoAdminSettings>
    return { inactiveFacultyIds: Array.isArray(settings.inactiveFacultyIds) ? settings.inactiveFacultyIds.filter(id => typeof id === 'string') : [], periodOpen: settings.periodOpen !== false, facultySummariesReleased: settings.facultySummariesReleased === true }
  } catch { return defaultSettings }
}
export function saveAdminSettings(settings: DemoAdminSettings) {
  try { localStorage.setItem(ADMIN_KEY, JSON.stringify(settings)); return true } catch { return false }
}
export function subjectFor(id: string, list: Subject[]) { return list.find(item => item.id === id) }
