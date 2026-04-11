'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface AddLearnerProps {
  userId: string
  parentName: string
  onComplete: () => void
  onBack: () => void
}

const YOUNG_CHARACTERS = [
  { emoji: '🦊', name: 'Fox' },
  { emoji: '🦉', name: 'Owl' },
  { emoji: '🐢', name: 'Turtle' },
  { emoji: '🐝', name: 'Bee' },
  { emoji: '🦋', name: 'Butterfly' },
  { emoji: '🐺', name: 'Wolf' },
  { emoji: '🦁', name: 'Lion' },
  { emoji: '🐬', name: 'Dolphin' },
]

const OLDER_CHARACTERS = [
  { emoji: '🎨', name: 'The Creator' },
  { emoji: '🚀', name: 'The Explorer' },
  { emoji: '🎮', name: 'The Gamer' },
  { emoji: '🦸', name: 'The Hero' },
  { emoji: '🌍', name: 'The Changemaker' },
  { emoji: '🎵', name: 'The Musician' },
  { emoji: '⚡', name: 'The Athlete' },
  { emoji: '🔭', name: 'The Dreamer' },
  { emoji: '🧪', name: 'The Inventor' },
  { emoji: '🐉', name: 'The Legend' },
]

const BANDS = [
  { id: 'sprout', icon: '🌱', name: 'Sprouts', ages: 'Ages 4–6' },
  { id: 'climber', icon: '🧗', name: 'Climbers', ages: 'Ages 7–9' },
  { id: 'bloomer', icon: '🌸', name: 'Bloomers', ages: 'Ages 10–12' },
  { id: 'grower', icon: '🌳', name: 'Growers', ages: 'Ages 13–16' },
]

export default function AddLearner({ userId, parentName, onComplete, onBack }: AddLearnerProps) {
  const [step, setStep] = useState(0)
  const [learnerName, setLearnerName] = useState('')
  const [selectedBand, setSelectedBand] = useState('')
  const [selectedChar, setSelectedChar] = useState('')
  const [selectedCharName, setSelectedCharName] = useState('')
  const [setupPin, setSetupPin] = useState(false)
  const [username, setUsername] = useState('')
  const [pin, setPin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const isOlderBand = selectedBand === 'bloomer' || selectedBand === 'grower'
  const characters = isOlderBand ? OLDER_CHARACTERS : YOUNG_CHARACTERS

  async function saveLearner() {
    setSaving(true)
    setError('')
    try {
      const band = BANDS.find(b => b.id === selectedBand)
      const { data, error } = await supabase
        .from('profiles')
        .insert({
          user_id: userId,
          learner_name: learnerName,
          parent_name: parentName,
          band: selectedBand,
          character: selectedChar,
          character_name: selectedCharName,
          avatar_title: isOlderBand ? selectedCharName : null,
          xp: 0,
          streak: 0,
          learner_type: 'child',
        })
        .select()
        .single()
      if (error) throw error

      if (setupPin && data && username.trim() && pin.length === 4) {
        const { error: pinError } = await supabase
          .from('learner_logins')
          .insert({
            profile_id: data.id,
            username: username.trim().toLowerCase(),
            pin_hash: pin,
          })
        if (pinError) throw pinError
      }

      onComplete()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#0a2e14',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'auto', padding: '24px',
      fontFamily: "'Nunito', sans-serif",
    }}>
      <div style={{ width: '100%', maxWidth: '680px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <div style={{
            fontFamily: "'Fredoka One', sans-serif", fontSize: '24px', color: '#fff',
          }}>
            HomeGrown<span style={{ color: '#FFE135' }}>Skills</span>
          </div>
        </div>
        <div style={{
          fontFamily: "'Fredoka One', sans-serif",
          fontSize: '20px', color: 'rgba(255,255,255,0.7)',
          textAlign: 'center', marginBottom: '28px',
        }}>
          Add a Learner
        </div>

        {/* Progress dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: i === step ? '#FFE135' : i < step ? '#1e8c3a' : 'rgba(255,255,255,0.2)',
              transform: i === step ? 'scale(1.3)' : 'scale(1)',
              transition: 'all 0.2s',
            }} />
          ))}
        </div>

        {/* Step 0: Name and band */}
        {step === 0 && (
          <div>
            <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '24px', color: '#fff', textAlign: 'center', marginBottom: '6px' }}>
              Tell us about your learner
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '24px' }}>
              You can add more learners any time
            </div>
            <input
              value={learnerName}
              onChange={e => setLearnerName(e.target.value)}
              placeholder="Learner's name..."
              style={{
                width: '100%', padding: '14px 18px',
                background: 'rgba(255,255,255,0.09)',
                border: '2.5px solid rgba(255,255,255,0.18)',
                borderRadius: '14px', color: '#fff',
                fontFamily: "'Nunito', sans-serif", fontSize: '16px', fontWeight: 800,
                outline: 'none', marginBottom: '20px',
              }}
            />
            <div style={{ fontSize: '12px', fontWeight: 900, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
              Age group
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px' }}>
              {BANDS.map(band => (
                <div
                  key={band.id}
                  onClick={() => setSelectedBand(band.id)}
                  style={{
                    padding: '16px 12px', borderRadius: '16px', cursor: 'pointer', textAlign: 'center',
                    border: `2.5px solid ${selectedBand === band.id ? '#FFE135' : 'rgba(255,255,255,0.12)'}`,
                    background: selectedBand === band.id ? 'rgba(255,225,53,0.14)' : 'rgba(255,255,255,0.06)',
                    transform: selectedBand === band.id ? 'scale(1.03)' : 'scale(1)',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '6px' }}>{band.icon}</div>
                  <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '16px', color: '#fff', marginBottom: '3px' }}>{band.name}</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>{band.ages}</div>
                </div>
              ))}
            </div>
            <button
              disabled={!learnerName.trim() || !selectedBand}
              onClick={() => setStep(1)}
              style={{
                width: '100%', padding: '14px',
                background: learnerName.trim() && selectedBand ? '#FFE135' : 'rgba(255,255,255,0.15)',
                color: learnerName.trim() && selectedBand ? '#145a28' : 'rgba(255,255,255,0.3)',
                border: 'none', borderRadius: '14px',
                fontFamily: "'Fredoka One', sans-serif", fontSize: '18px',
                cursor: learnerName.trim() && selectedBand ? 'pointer' : 'not-allowed',
                boxShadow: learnerName.trim() && selectedBand ? '0 4px 0 #c9a800' : 'none',
                marginBottom: '10px',
              }}
            >Next →</button>
            <button onClick={onBack} style={{ display: 'block', width: '100%', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}>← Back</button>
          </div>
        )}

        {/* Step 1: Character */}
        {step === 1 && (
          <div>
            <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '24px', color: '#fff', textAlign: 'center', marginBottom: '6px' }}>
              Pick your character, <span style={{ color: '#FFE135' }}>{learnerName}</span>!
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '24px' }}>
              {isOlderBand ? 'Choose your identity' : 'Who will you be on your journey?'}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isOlderBand ? 'repeat(5, 1fr)' : 'repeat(4, 1fr)',
              gap: '10px', marginBottom: '20px',
            }}>
              {characters.map(char => (
                <div
                  key={char.name}
                  onClick={() => { setSelectedChar(char.emoji); setSelectedCharName(char.name) }}
                  style={{
                    aspectRatio: '1', borderRadius: '14px',
                    border: `2.5px solid ${selectedChar === char.emoji ? '#FFE135' : 'rgba(255,255,255,0.12)'}`,
                    background: selectedChar === char.emoji ? 'rgba(255,225,53,0.14)' : 'rgba(255,255,255,0.06)',
                    cursor: 'pointer', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '4px',
                    transform: selectedChar === char.emoji ? 'scale(1.08)' : 'scale(1)',
                    transition: 'all 0.2s', padding: '8px',
                  }}
                >
                  <span style={{ fontSize: isOlderBand ? '24px' : '28px' }}>{char.emoji}</span>
                  <span style={{
                    fontSize: '9px', fontWeight: 800,
                    color: selectedChar === char.emoji ? '#FFE135' : 'rgba(255,255,255,0.5)',
                    textAlign: 'center', lineHeight: 1.2,
                  }}>{char.name}</span>
                </div>
              ))}
            </div>
            <button
              disabled={!selectedChar}
              onClick={() => setStep(2)}
              style={{
                width: '100%', padding: '14px',
                background: selectedChar ? '#FFE135' : 'rgba(255,255,255,0.15)',
                color: selectedChar ? '#145a28' : 'rgba(255,255,255,0.3)',
                border: 'none', borderRadius: '14px',
                fontFamily: "'Fredoka One', sans-serif", fontSize: '18px',
                cursor: selectedChar ? 'pointer' : 'not-allowed',
                boxShadow: selectedChar ? '0 4px 0 #c9a800' : 'none',
                marginBottom: '10px',
              }}
            >{isOlderBand ? 'That\'s me! →' : 'That\'s me! →'}</button>
            <button onClick={() => setStep(0)} style={{ display: 'block', width: '100%', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}>← Back</button>
          </div>
        )}

        {/* Step 2: PIN setup (optional for older bands) or confirm */}
        {step === 2 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '60px', marginBottom: '8px' }}>{selectedChar}</div>
              {isOlderBand && (
                <div style={{
                  fontSize: '13px', fontWeight: 900,
                  color: '#FFE135', letterSpacing: '0.06em',
                  textTransform: 'uppercase', marginBottom: '6px',
                }}>
                  {selectedCharName}
                </div>
              )}
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '24px', color: '#fff', marginBottom: '6px' }}>
                Looking great, {learnerName}!
              </div>
            </div>

            {isOlderBand && (
              <div style={{
                background: 'rgba(255,255,255,0.07)',
                borderRadius: '18px', padding: '20px',
                marginBottom: '20px',
              }}>
                <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '17px', color: '#fff', marginBottom: '8px' }}>
                  🔐 Set up independent login?
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '16px', lineHeight: 1.5 }}>
                 {learnerName}{' '}can log in  with a username and 4-digit PIN. You&apos;ll still see all their progress from your dashboard.
                </div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: setupPin ? '16px' : '0' }}>
                  <button
                    onClick={() => setSetupPin(true)}
                    style={{
                      flex: 1, padding: '10px',
                      borderRadius: '12px', border: 'none',
                      background: setupPin ? '#FFE135' : 'rgba(255,255,255,0.1)',
                      color: setupPin ? '#145a28' : '#fff',
                      fontFamily: "'Fredoka One', sans-serif", fontSize: '15px',
                      cursor: 'pointer',
                    }}
                  >Yes, set up PIN</button>
                  <button
                    onClick={() => setSetupPin(false)}
                    style={{
                      flex: 1, padding: '10px',
                      borderRadius: '12px', border: 'none',
                      background: !setupPin ? '#FFE135' : 'rgba(255,255,255,0.1)',
                      color: !setupPin ? '#145a28' : '#fff',
                      fontFamily: "'Fredoka One', sans-serif", fontSize: '15px',
                      cursor: 'pointer',
                    }}
                  >Not now</button>
                </div>

                {setupPin && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      placeholder="Choose a username..."
                      style={{
                        width: '100%', padding: '12px 14px',
                        background: 'rgba(255,255,255,0.09)',
                        border: '2px solid rgba(255,255,255,0.18)',
                        borderRadius: '12px', color: '#fff',
                        fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 700,
                        outline: 'none',
                      }}
                    />
                    <input
                      value={pin}
                      onChange={e => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="4-digit PIN..."
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      style={{
                        width: '100%', padding: '12px 14px',
                        background: 'rgba(255,255,255,0.09)',
                        border: '2px solid rgba(255,255,255,0.18)',
                        borderRadius: '12px', color: '#fff',
                        fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 700,
                        outline: 'none', letterSpacing: '0.3em',
                      }}
                    />
                    <input
                      value={confirmPin}
                      onChange={e => setConfirmPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="Confirm PIN..."
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      style={{
                        width: '100%', padding: '12px 14px',
                        background: 'rgba(255,255,255,0.09)',
                        border: '2px solid rgba(255,255,255,0.18)',
                        borderRadius: '12px', color: '#fff',
                        fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 700,
                        outline: 'none', letterSpacing: '0.3em',
                      }}
                    />
                  </div>
                )}
              </div>
            )}

            {error && (
              <div style={{ background: '#FFEBEE', borderRadius: '12px', padding: '10px 14px', fontSize: '13px', fontWeight: 700, color: '#b71c1c', marginBottom: '16px' }}>
                ⚠️ {error}
              </div>
            )}

            <button
              onClick={saveLearner}
              disabled={saving || (setupPin && (!username.trim() || pin.length !== 4 || pin !== confirmPin))}
              style={{
                width: '100%', padding: '14px',
                background: saving ? '#e0e0e0' : '#FFE135',
                color: saving ? '#aaa' : '#145a28',
                border: 'none', borderRadius: '14px',
                fontFamily: "'Fredoka One', sans-serif", fontSize: '18px',
                cursor: saving ? 'not-allowed' : 'pointer',
                boxShadow: saving ? 'none' : '0 4px 0 #c9a800',
                marginBottom: '10px',
              }}
            >
              {saving ? 'Saving...' : `Add ${learnerName} to my family! 🌱`}
            </button>
            <button onClick={() => setStep(1)} style={{ display: 'block', width: '100%', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}>← Back</button>
          </div>
        )}
      </div>
    </div>
  )
}