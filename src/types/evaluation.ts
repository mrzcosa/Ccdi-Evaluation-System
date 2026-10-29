export type Faculty = { id: string; name: string; department: string; subject: string; semester: string; year: string; initials: string }
export type QuestionSection = { id: string; title: string; questions: { id: string; text: string }[] }
export type EvaluationRecord = { id: string; faculty: Faculty; answers: Record<string, number>; comments: string; status: 'draft' | 'completed'; createdAt: string; submittedAt?: string; reference?: string }
