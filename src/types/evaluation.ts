export type Subject = { id: string; code: string; name: string }
export type Faculty = { id: string; name: string; department: string; subjectIds: string[]; semester: string; year: string; initials: string; subject?: string }
export type QuestionSection = { id: string; title: string; questions: { id: string; text: string }[] }
export type EvaluationRecord = { id: string; faculty: Faculty; subject?: Subject; answers: Record<string, number>; comments: string; status: 'draft' | 'completed'; createdAt: string; submittedAt?: string; reference?: string }
