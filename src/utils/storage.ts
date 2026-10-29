import type { EvaluationRecord } from '../types/evaluation'
const KEY='ccdi-evaluations-v1'
export function loadRecords(): EvaluationRecord[] { try { const raw=localStorage.getItem(KEY); if(!raw)return []; const parsed:unknown=JSON.parse(raw); if(!Array.isArray(parsed))return []; return parsed.filter((r):r is EvaluationRecord=>!!r&&typeof r==='object'&&typeof r.id==='string'&&typeof r.status==='string'&&!!r.faculty&&typeof r.answers==='object') } catch { return [] } }
export function saveRecords(records:EvaluationRecord[]) { try { localStorage.setItem(KEY,JSON.stringify(records)); return true } catch { return false } }
