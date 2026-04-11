'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface AuthProps {
  onAuthenticated: (userId: string, isNewUser: boolean) => void
  onBack: () => void
  initialMode?: 'login' | 'signup'
}

export default function Auth({ onAuthenticated, onBack, initialMode = 'signup' }: AuthProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSignup() {
    if (!email.trim() || !password.trim()) { setError('Please enter your email and a password.'); return }
    if (password !== confirmPassword) { setError("Passwords don't match — give it another go!"); return }
    if (password.length < 6) { setError('Password needs to be at least 6 characters.'); return }
    setLoading(true); setError('')
    try {
      const { data, error } = await supabase.auth.signUp({ email: email.trim(), password })
      if (error) throw error
      if (data.user) onAuthenticated(data.user.id, true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally { setLoading(false) }
  }

  async function handleLogin() {
    if (!email.trim() || !password.trim()) { setError('Please enter your email and password.'); return }
    setLoading(true); setError('')
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password })
      if (error) throw error
      if (data.user) onAuthenticated(data.user.id, false)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally { setLoading(false) }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#0a2e14',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px', fontFamily: "'Nunito', sans-serif", overflow: 'auto',
    }}>
      <div style={{ width: '100%', maxWidth: '480px' }}>

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            background: 'none', border: 'none',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: "'Nunito', sans-serif",
            fontSize: '14px', fontWeight: 700,
            cursor: 'pointer', marginBottom: '16px', padding: '0',
          }}
        >
          ← Back to HomeGrownSkills
        </button>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontFamily: "'Fredoka One', sans-serif", fontSize: '26px', color: '#fff',
            marginBottom: '8px',
          }}>
            <div style={{
              width: '34px', height: '34px', background: '#FFE135',
              borderRadius: '50% 0 50% 50%', transform: 'rotate(-45deg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ transform: 'rotate(45deg)', fontSize: '16px' }}>🌿</span>
            </div>
            HomeGrown<span style={{ color: '#FFE135' }}>Skills</span>
          </div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
            &quot;We teach them to pass life.&quot;
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '24px', padding: '36px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>

  <button
    onClick={onBack}
    style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      background: 'none', border: 'none',
      color: '#888',
      fontFamily: "'Nunito', sans-serif",
      fontSize: '14px', fontWeight: 700,
      cursor: 'pointer', marginBottom: '20px', padding: '0',
    }}
  >
    ← Back
  </button>
          <div style={{ display: 'flex', background: '#f5f5f0', borderRadius: '14px', padding: '4px', marginBottom: '28px' }}>
            {(['signup', 'login'] as const).map(m => (
              <button
                key={m}
                onClick={() => { setMode(m); setError('') }}
                style={{
                  flex: 1, padding: '10px', borderRadius: '11px', border: 'none',
                  background: mode === m ? '#fff' : 'transparent',
                  fontFamily: "'Fredoka One', sans-serif", fontSize: '16px',
                  color: mode === m ? '#1a5c2a' : '#888',
                  cursor: 'pointer',
                  boxShadow: mode === m ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                {m === 'signup' ? 'Start Free Trial' : 'Log In'}
              </button>
            ))}
          </div>

          {mode === 'signup' && (
            <div style={{ background: '#edfaf1', border: '1.5px solid #81C784', borderRadius: '12px', padding: '10px 14px', fontSize: '13px', fontWeight: 700, color: '#1b5e20', marginBottom: '20px' }}>
              🎉 7 days free — no card required. Cancel any time.
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{ width: '100%', padding: '13px 16px', border: '2px solid #e0e0e0', borderRadius: '13px', fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 700, outline: 'none', color: '#1a1a1a' }}
              onFocus={e => (e.target.style.borderColor = '#2d8c45')}
              onBlur={e => (e.target.style.borderColor = '#e0e0e0')}
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password (at least 6 characters)"
              style={{ width: '100%', padding: '13px 16px', border: '2px solid #e0e0e0', borderRadius: '13px', fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 700, outline: 'none', color: '#1a1a1a' }}
              onFocus={e => (e.target.style.borderColor = '#2d8c45')}
              onBlur={e => (e.target.style.borderColor = '#e0e0e0')}
            />
            {mode === 'signup' && (
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                style={{ width: '100%', padding: '13px 16px', border: '2px solid #e0e0e0', borderRadius: '13px', fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 700, outline: 'none', color: '#1a1a1a' }}
                onFocus={e => (e.target.style.borderColor = '#2d8c45')}
                onBlur={e => (e.target.style.borderColor = '#e0e0e0')}
                onKeyDown={e => e.key === 'Enter' && handleSignup()}
              />
            )}
          </div>

          {error && (
            <div style={{ background: '#FFEBEE', border: '1.5px solid #EF5350', borderRadius: '12px', padding: '10px 14px', fontSize: '13px', fontWeight: 700, color: '#b71c1c', marginBottom: '16px' }}>
              ⚠️ {error}
            </div>
          )}

          <button
            onClick={mode === 'signup' ? handleSignup : handleLogin}
            disabled={loading}
            style={{
              width: '100%', padding: '14px',
              background: loading ? '#e0e0e0' : '#2d8c45',
              color: loading ? '#aaa' : '#fff',
              border: 'none', borderRadius: '14px',
              fontFamily: "'Fredoka One', sans-serif", fontSize: '18px',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: loading ? 'none' : '0 5px 0 #1a5c2a',
              marginBottom: '16px',
            }}
          >
            {loading ? 'Just a moment...' : mode === 'signup' ? 'Create My Account 🚀' : 'Log In →'}
          </button>

          <div style={{ textAlign: 'center', fontSize: '13px', fontWeight: 700, color: '#888' }}>
            {mode === 'signup'
              ? <span>Already have an account? <button onClick={() => { setMode('login'); setError('') }} style={{ background: 'none', border: 'none', color: '#2d8c45', fontWeight: 900, cursor: 'pointer', fontSize: '13px' }}>Log in</button></span>
              : <span>New here? <button onClick={() => { setMode('signup'); setError('') }} style={{ background: 'none', border: 'none', color: '#2d8c45', fontWeight: 900, cursor: 'pointer', fontSize: '13px' }}>Start your free trial</button></span>
            }
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.35)' }}>
          By creating an account you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  )
}