'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface LearnerLoginProps {
  onAuthenticated: (profileId: string) => void
  onBack: () => void
}

export default function LearnerLogin({ onAuthenticated, onBack }: LearnerLoginProps) {
  const [username, setUsername] = useState('')
  const [pin, setPin] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin() {
    if (!username.trim() || pin.length !== 4) {
      setError('Please enter your username and 4-digit PIN.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const { data, error } = await supabase
        .from('learner_logins')
        .select('profile_id, pin_hash')
        .eq('username', username.trim().toLowerCase())
        .single()

      if (error || !data) {
        setError("We couldn't find that username. Check the spelling and try again!")
        return
      }

      if (data.pin_hash !== pin) {
        setError("That PIN doesn't match. Give it another go!")
        return
      }

      onAuthenticated(data.profile_id)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function handlePinInput(val: string) {
    const clean = val.replace(/\D/g, '').slice(0, 4)
    setPin(clean)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'linear-gradient(135deg, #1a5c2a, #2d8c45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px', fontFamily: "'Nunito', sans-serif",
      overflow: 'auto',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            background: 'none', border: 'none',
            color: 'rgba(255,255,255,0.6)',
            fontFamily: "'Nunito', sans-serif",
            fontSize: '14px', fontWeight: 700,
            cursor: 'pointer', marginBottom: '24px', padding: '0',
          }}
        >
          ← Back
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
          <div style={{
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '22px', color: 'rgba(255,255,255,0.9)',
            marginBottom: '6px',
          }}>
            Learner Login 🌱
          </div>
          <div style={{
            fontSize: '14px', fontWeight: 700,
            color: 'rgba(255,255,255,0.6)',
          }}>
            Enter your username and PIN
          </div>
        </div>

        {/* Card */}
        <div style={{
          background: '#fff',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>

            <div>
              <label style={{
                fontSize: '12px', fontWeight: 900, color: '#666',
                textTransform: 'uppercase', letterSpacing: '0.05em',
                display: 'block', marginBottom: '6px',
              }}>
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Your username..."
                autoCapitalize="none"
                autoCorrect="off"
                style={{
                  width: '100%', padding: '13px 16px',
                  border: '2px solid #e0e0e0', borderRadius: '13px',
                  fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 700,
                  outline: 'none', color: '#1a1a1a',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = '#2d8c45')}
                onBlur={e => (e.target.style.borderColor = '#e0e0e0')}
              />
            </div>

            <div>
              <label style={{
                fontSize: '12px', fontWeight: 900, color: '#666',
                textTransform: 'uppercase', letterSpacing: '0.05em',
                display: 'block', marginBottom: '6px',
              }}>
                4-Digit PIN
              </label>
              {/* PIN dots display */}
              <div style={{
                display: 'flex', gap: '12px', justifyContent: 'center',
                marginBottom: '12px',
              }}>
                {[0, 1, 2, 3].map(i => (
                  <div key={i} style={{
                    width: '48px', height: '48px',
                    borderRadius: '14px',
                    border: `2.5px solid ${pin.length > i ? '#2d8c45' : '#e0e0e0'}`,
                    background: pin.length > i ? '#edfaf1' : '#fafafa',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px',
                    transition: 'all 0.15s',
                  }}>
                    {pin.length > i ? '●' : ''}
                  </div>
                ))}
              </div>
              <input
                type="password"
                inputMode="numeric"
                value={pin}
                onChange={e => handlePinInput(e.target.value)}
                placeholder="Enter 4-digit PIN"
                maxLength={4}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                style={{
                  width: '100%', padding: '13px 16px',
                  border: '2px solid #e0e0e0', borderRadius: '13px',
                  fontFamily: "'Nunito', sans-serif", fontSize: '22px',
                  fontWeight: 900, outline: 'none', color: '#1a1a1a',
                  textAlign: 'center', letterSpacing: '0.4em',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = '#2d8c45')}
                onBlur={e => (e.target.style.borderColor = '#e0e0e0')}
              />
            </div>
          </div>

          {error && (
            <div style={{
              background: '#FFEBEE', border: '1.5px solid #EF5350',
              borderRadius: '12px', padding: '10px 14px',
              fontSize: '13px', fontWeight: 700, color: '#b71c1c',
              marginBottom: '16px', lineHeight: 1.5,
            }}>
              ⚠️ {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading || !username.trim() || pin.length !== 4}
            style={{
              width: '100%', padding: '14px',
              background: loading || !username.trim() || pin.length !== 4 ? '#e0e0e0' : '#2d8c45',
              color: loading || !username.trim() || pin.length !== 4 ? '#aaa' : '#fff',
              border: 'none', borderRadius: '14px',
              fontFamily: "'Fredoka One', sans-serif", fontSize: '18px',
              cursor: loading || !username.trim() || pin.length !== 4 ? 'not-allowed' : 'pointer',
              boxShadow: loading || !username.trim() || pin.length !== 4 ? 'none' : '0 5px 0 #1a5c2a',
              transition: 'all 0.2s',
            }}
          >
            {loading ? 'Checking...' : "Let's go! 🚀"}
          </button>

          <div style={{
            textAlign: 'center', marginTop: '16px',
            fontSize: '13px', fontWeight: 700, color: '#888',
          }}>
            Parent login?{' '}
            <button
              onClick={onBack}
              style={{
                background: 'none', border: 'none',
                color: '#2d8c45', fontWeight: 900,
                cursor: 'pointer', fontSize: '13px',
              }}
            >
              Click here
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}