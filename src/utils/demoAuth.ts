export type AccountRole = 'Admin' | 'Faculty' | 'Student'
export type LoginType = 'student' | 'faculty'
export type DemoAccount = { username: string; password: string; role: AccountRole; displayName: string }
export type DemoSession = Omit<DemoAccount, 'password'>

export const demoAccounts: DemoAccount[] = [
  { username: 'admin', password: 'password', role: 'Admin', displayName: 'Mark Anthony Gresola' },
  { username: 'aaronpaul', password: 'password', role: 'Faculty', displayName: 'Aaron Paul Ramos' },
  { username: 'ccdi-24-s1170', password: 'password', role: 'Student', displayName: 'Mark Rusell Cosa' },
]

const SESSION_KEY = 'ccdi-demo-session-v1'

export function authenticate(username: string, password: string, loginType: LoginType): { session?: DemoSession; error?: string } {
  const account = demoAccounts.find(item => item.username.toLowerCase() === username.trim().toLowerCase())
  if (!account || account.password !== password) return { error: 'Invalid username or password' }
  const typeMatches = loginType === 'student' ? account.role === 'Student' : account.role !== 'Student'
  if (!typeMatches) return { error: 'Invalid username or password' }
  return { session: { username: account.username, role: account.role, displayName: account.displayName } }
}

export function loadDemoSession(): DemoSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const value: unknown = JSON.parse(raw)
    if (!value || typeof value !== 'object') return null
    const { username, role } = value as Partial<DemoSession>
    const account = demoAccounts.find(item => item.username === username && item.role === role)
    if (!account) return null
    return { username: account.username, role: account.role, displayName: account.displayName }
  } catch { return null }
}

export function saveDemoSession(session: DemoSession | null) {
  try {
    if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    else localStorage.removeItem(SESSION_KEY)
  } catch { /* Demo sign-in remains usable for this tab if browser storage is unavailable. */ }
}
