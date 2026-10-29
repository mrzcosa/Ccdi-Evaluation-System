import type { EvaluationRecord, Faculty } from '../types/evaluation'
import { faculty, subjects } from '../data/faculty'
import { demoEnrollment, evaluationPeriod, type DemoAdminSettings } from '../data/demoData'

export default function StudentEvaluationPanel({ records, settings, onStart }: { records: EvaluationRecord[]; settings: DemoAdminSettings; onStart: (professor: Faculty, subjectId: string, record?: EvaluationRecord) => void }) {
  const eligible = demoEnrollment.filter(item => !settings.inactiveFacultyIds.includes(item.facultyId))
  const completed = records.filter(record => record.status === 'completed' && record.studentId === 'ccdi-24-s1170' && record.periodId === evaluationPeriod.id)
  const pending = Math.max(0, eligible.length - completed.length)
  return <section className="card role-card student-eval-panel"><div className="card-heading"><div><h2>My assigned evaluations</h2><p className="muted">{evaluationPeriod.name} · {settings.periodOpen ? 'Open' : 'Closed'}</p></div><span>{completed.length} submitted · {pending} pending</span></div><p className="demo-data-note">Subject and professor assignments shown here are demonstration schedule data.</p>{eligible.map(item => {
    const professor = faculty.find(person => person.id === item.facultyId)
    const subject = subjects.find(person => person.id === item.subjectId)
    if (!professor || !subject) return null
    const matching = records.filter(record => record.studentId === 'ccdi-24-s1170' && record.periodId === evaluationPeriod.id && record.faculty.id === professor.id && record.subject?.id === subject.id)
    const submitted = matching.find(record => record.status === 'completed')
    const draft = matching.find(record => record.status === 'draft')
    const status = submitted ? 'Submitted' : draft ? 'In Progress' : 'Not Started'
    return <div className="student-evaluation-row" key={`${item.facultyId}-${item.subjectId}`}><div><b>{professor.name}</b><span>{subject.code} — {subject.name}</span><small>{item.section}</small></div><span className={`status-label ${submitted ? 'done' : draft ? 'progress' : ''}`}>{status}</span>{submitted ? <button className="button secondary" onClick={() => onStart(professor, subject.id, submitted)}>Review</button> : <button className="button primary" disabled={!settings.periodOpen} onClick={() => onStart(professor, subject.id, draft)}>{draft ? 'Continue' : 'Start evaluation'}</button>}</div>
  })}{!eligible.length&&<div className="role-empty"><p>No active evaluation assignments are available.</p></div>}</section>
}
