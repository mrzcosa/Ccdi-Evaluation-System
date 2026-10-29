import type { EvaluationRecord } from '../types/evaluation'
const KEY='ccdi-evaluations-v1'
export function loadRecords(): EvaluationRecord[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((value): value is EvaluationRecord => {
      if (!value || typeof value !== 'object') return false
      const item = value as Partial<EvaluationRecord>
      if (typeof item.id !== 'string' || (item.status !== 'draft' && item.status !== 'completed')) return false
      if (!item.faculty || typeof item.faculty !== 'object' || typeof item.faculty.id !== 'string' || typeof item.faculty.name !== 'string') return false
      if (!item.answers || typeof item.answers !== 'object' || Array.isArray(item.answers)) return false
      if (Object.values(item.answers).some(rating => typeof rating !== 'number' || rating < 1 || rating > 5)) return false
      return true
    }).map(item => ({ ...item, comments: typeof item.comments === 'string' ? item.comments : '', answers: item.answers ?? {} }))
  } catch { return [] }
}
export function saveRecords(records:EvaluationRecord[]) { try { localStorage.setItem(KEY,JSON.stringify(records)); return true } catch { return false } }
