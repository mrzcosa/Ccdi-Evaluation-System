import { useState } from 'react'
import { ChartNoAxesColumnIncreasing, Check, GraduationCap, LockKeyhole, ShieldCheck, Star, UserRound, UsersRound } from 'lucide-react'
import ccdiLogo from '../assets/Ccdi Logo/CCDI Logo.png'
import { authenticate, type DemoSession, type LoginType } from '../utils/demoAuth'

export default function LoginPage({ onLogin }: { onLogin: (session: DemoSession) => void }) {
  const [loginType, setLoginType] = useState<LoginType>('student')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const choose = (type: LoginType) => { setLoginType(type); setError('') }
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = authenticate(username, password, loginType)
    if (result.session) onLogin(result.session)
    else setError(result.error ?? 'Unable to sign in. Please try again.')
  }
  return <main className="auth-page auth-reference"><aside className="auth-showcase"><div className="auth-hero-copy"><img className="auth-corner-logo" src={ccdiLogo} alt="CCDI Sorsogon logo"/><h2><span className="auth-title-dark">Web-Based Faculty and Staff</span><span className="auth-title-accent">Performance Evaluation System</span></h2><p>Supporting better teaching through meaningful feedback.</p></div><div className="auth-illustration" aria-hidden="true"><div className="auth-float-card auth-chart-tile"><ChartNoAxesColumnIncreasing size={38}/></div><div className="auth-rating-sheet"><div className="auth-sheet-profile"><i/><span><b/><small/></span></div><div className="auth-sheet-stars">{[0,1,2,3,4].map(item=><Star key={item} size={19} fill="currentColor"/>)}</div><div className="auth-sheet-row"><i><Check size={13}/></i><span/></div><div className="auth-sheet-row"><i><Check size={13}/></i><span/></div><div className="auth-sheet-row"><i><Check size={13}/></i><span/></div></div><div className="auth-float-card auth-note-tile"><span className="auth-note-icon"><Check size={19}/></span><i/><i/><i/></div><div className="auth-float-card auth-people-tile"><UsersRound size={31}/></div><div className="auth-illustration-orbit"/></div></aside><section className="auth-card auth-reference-card">
    <header className="auth-reference-heading"><div className="auth-reference-welcome">Welcome to</div><h1>CCDI Evaluation System</h1><p>Please select your account type and login to continue.</p></header>
    <div className="auth-reference-roles" role="group" aria-label="Account type">
      <button type="button" className={`auth-reference-role ${loginType === 'student' ? 'active' : ''}`} aria-pressed={loginType === 'student'} onClick={() => choose('student')}><GraduationCap size={32} strokeWidth={1.8}/><span><b>Students</b><small>Student Evaluation</small></span><i aria-hidden="true"/></button>
      <button type="button" className={`auth-reference-role ${loginType === 'faculty' ? 'active' : ''}`} aria-pressed={loginType === 'faculty'} onClick={() => choose('faculty')}><UsersRound size={30} strokeWidth={1.8}/><span><b>Faculty &amp; Staff</b><small>Faculty/Staff Access</small></span><i aria-hidden="true"/></button>
    </div>
    <form className="auth-reference-form" onSubmit={submit} noValidate>
      <label>Username / Email<span className="auth-reference-input"><UserRound size={17}/><input autoComplete="username" value={username} onChange={event => setUsername(event.target.value)} placeholder="Enter your username or email"/></span></label>
      <label><span className="auth-reference-label-row">Password</span><span className="auth-reference-input"><LockKeyhole size={17}/><input autoComplete="current-password" type={showPassword ? 'text' : 'password'} value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter your password"/><button className="password-toggle-text" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(value => !value)}>{showPassword ? 'Hide' : 'Show'}</button></span></label>
      {error && <div className="auth-error" role="alert">{error}</div>}
      <button className="button primary auth-reference-submit" type="submit">Login</button>
    </form>
    <p className="auth-reference-contact">Don’t have an account? <span>Contact your administrator.</span></p>
    <p className="auth-demo-note"><ShieldCheck size={15}/> Demo credentials are checked in this browser and do not connect to the official CCDI LMS.</p>
  </section></main>
}
