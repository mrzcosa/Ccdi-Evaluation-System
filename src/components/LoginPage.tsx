import { useState } from 'react'
import { ArrowLeft, Eye, EyeOff, GraduationCap, ShieldCheck, UsersRound } from 'lucide-react'
import ccdiLogo from '../assets/Ccdi Logo/CCDI Logo.png'
import { authenticate, type DemoSession, type LoginType } from '../utils/demoAuth'

export default function LoginPage({ onLogin }: { onLogin: (session: DemoSession) => void }) {
  const [loginType, setLoginType] = useState<LoginType | null>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const choose = (type: LoginType) => { setLoginType(type); setError('') }
  const back = () => { setLoginType(null); setUsername(''); setPassword(''); setError('') }
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!loginType) return
    const result = authenticate(username, password, loginType)
    if (result.session) onLogin(result.session)
    else setError(result.error ?? 'Unable to sign in. Please try again.')
  }
  return <main className="auth-page"><section className="auth-card">
    <div className="auth-brand"><img src={ccdiLogo} alt="CCDI Sorsogon logo"/><div><strong>CCDI SORSOGON</strong><span>Evaluation System</span></div></div>
    {!loginType ? <><div className="auth-heading"><div className="eyebrow">WELCOME</div><h1>How would you like to log in?</h1><p>Select your account type to continue.</p></div><div className="role-options">
      <article className="role-option"><span className="role-icon"><GraduationCap size={22}/></span><div><h2>Student Login</h2><p>Evaluate your assigned professors and subjects.</p><button className="button primary" onClick={() => choose('student')}>Continue as Student</button></div></article>
      <article className="role-option"><span className="role-icon"><UsersRound size={22}/></span><div><h2>Faculty Login</h2><p>Faculty and administrator demonstration access.</p><button className="button primary" onClick={() => choose('faculty')}>Continue as Faculty</button></div></article>
    </div><p className="auth-demo-note"><ShieldCheck size={15}/> Frontend demonstration accounts only. These do not connect to the official CCDI LMS.</p></> : <>
      <button className="auth-back" onClick={back}><ArrowLeft size={15}/> Back to role selection</button><div className="auth-heading"><div className="eyebrow">{loginType === 'student' ? 'STUDENT ACCESS' : 'FACULTY ACCESS'}</div><h1>{loginType === 'student' ? 'Student Login' : 'Faculty Login'}</h1><p>Enter your demonstration account credentials.</p></div>
      <form className="auth-form" onSubmit={submit} noValidate><label>Username<input autoComplete="username" value={username} onChange={event => setUsername(event.target.value)} placeholder="Enter username"/></label><label>Password<span className="password-wrap"><input autoComplete="current-password" type={showPassword ? 'text' : 'password'} value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter password"/><button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(value => !value)}>{showPassword ? <EyeOff size={17}/> : <Eye size={17}/>}</button></span></label>{error&&<div className="auth-error" role="alert">{error}</div>}<button className="button primary auth-submit" type="submit">Login</button></form>
      <p className="auth-demo-note"><ShieldCheck size={15}/> Demo accounts only; authentication is stored and checked in this browser.</p>
    </>}
  </section></main>
}
