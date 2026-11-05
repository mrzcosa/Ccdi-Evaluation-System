export type Announcement = {
  id: string
  title: string
  date: string
  category: string
  description: string
}

const initialAnnouncements: Announcement[] = [
  { id: 'announcement-evaluation-open', title: 'Faculty Evaluation is Now Open', date: 'October 20, 2026', category: 'Evaluation', description: 'Share your thoughtful feedback on your instructors for the current semester. Your responses help strengthen teaching and learning at CCDI Sorsogon.' },
  { id: 'announcement-feedback-guide', title: 'A Guide to Meaningful Feedback', date: 'October 16, 2026', category: 'Student Support', description: 'Keep comments specific, respectful, and focused on learning experiences. Every response is an opportunity to support professional growth.' },
  { id: 'announcement-period-schedule', title: 'Evaluation Period Schedule', date: 'October 12, 2026', category: 'Reminder', description: 'Please complete your available faculty evaluations before the end of the semester evaluation period.' },
]

const ANNOUNCEMENTS_KEY = 'ccdi-announcements-v1'

export function loadAnnouncements(): Announcement[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(ANNOUNCEMENTS_KEY) ?? 'null')
    if (!Array.isArray(stored)) return initialAnnouncements
    const valid = stored.filter((item): item is Announcement => !!item && typeof item === 'object' && typeof item.id === 'string' && typeof item.title === 'string' && typeof item.date === 'string' && typeof item.category === 'string' && typeof item.description === 'string')
    return valid.length ? valid : initialAnnouncements
  } catch {
    return initialAnnouncements
  }
}

export function saveAnnouncements(items: Announcement[]) {
  try {
    localStorage.setItem(ANNOUNCEMENTS_KEY, JSON.stringify(items))
    return true
  } catch {
    return false
  }
}
