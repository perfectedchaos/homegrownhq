'use client'

import { useState } from 'react'
import SkillBuilder from './SkillBuilder'
import ProjectCorner from './ProjectCorner'
import CreativeSpace from './CreativeSpace'
import MemoryWall from './MemoryWall'
import LandingPage from './LandingPage'
import Auth from './AuthScreen'
import { supabase } from '../lib/supabase'

interface LearnerProfile {
  parentName: string
  learnerName: string
  band: string
  bandLabel: string
  bandIcon: string
  character: string
  characterName: string
  xp: number
  streak: number
}

const CHARACTERS = [
  { emoji: '🦊', name: 'Fox' },
  { emoji: '🦉', name: 'Owl' },
  { emoji: '🐢', name: 'Turtle' },
  { emoji: '🐝', name: 'Bee' },
  { emoji: '🦋', name: 'Butterfly' },
  { emoji: '🐺', name: 'Wolf' },
  { emoji: '🦁', name: 'Lion' },
  { emoji: '🐬', name: 'Dolphin' },
]

const BANDS = [
  { id: 'sprout', icon: '🌱', name: 'Sprouts', ages: 'Ages 4–6' },
  { id: 'climber', icon: '🧗', name: 'Climbers', ages: 'Ages 7–9' },
  { id: 'bloomer', icon: '🌸', name: 'Bloomers', ages: 'Ages 10–12' },
  { id: 'grower', icon: '🌳', name: 'Growers', ages: 'Ages 13–16' },
]

export default function Home() {
  const [showLanding, setShowLanding] = useState(true)
  const [showAuth, setShowAuth] = useState(false)
  const [onboardingDone, setOnboardingDone] = useState(false)
  const [obStep, setObStep] = useState(0)
  const [currentPanel, setCurrentPanel] = useState('home')
  const [parentName, setParentName] = useState('')
  const [learnerName, setLearnerName] = useState('')
  const [selectedBand, setSelectedBand] = useState('')
  const [selectedChar, setSelectedChar] = useState('')
  const [selectedCharName, setSelectedCharName] = useState('')
  const [learningType, setLearningType] = useState('')
  const [country, setCountry] = useState('')
  const [heardFrom, setHeardFrom] = useState('')
  const [profile, setProfile] = useState<LearnerProfile | null>(null)
  const [profileId, setProfileId] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')
  async function launchApp() {
    const band = BANDS.find(b => b.id === selectedBand)
    const newProfile = {
      parentName,
      learnerName,
      band: selectedBand,
      bandLabel: band?.name || '',
      bandIcon: band?.icon || '',
      character: selectedChar,
      characterName: selectedCharName,
      xp: 0,
      streak: 7,
    }
    setProfile(newProfile)
    setOnboardingDone(true)
    try {
      const { data, error } = await supabase
        .from('profiles')
        .insert({
          learner_name: learnerName,
          parent_name: parentName,
          band: selectedBand,
          character: selectedChar,
          character_name: selectedCharName,
          xp: 0,
          streak: 7,
          user_id: userId,
          learning_type: learningType,
          country: country,
          heard_from: heardFrom,
        })
        .select()
        .single()
      if (error) throw error
      if (data) setProfileId(data.id)
    } catch (err) {
      console.error('Error saving profile:', err)
    }
  }

  async function handleXPGain(amount: number) {
    setProfile(prev => prev ? { ...prev, xp: prev.xp + amount } : prev)
    if (profileId && profile) {
      try {
        await supabase
          .from('profiles')
          .update({ xp: (profile.xp || 0) + amount })
          .eq('id', profileId)
      } catch (err) {
        console.error('Error saving XP:', err)
      }
    }
  }

  // LANDING PAGE
  if (showLanding) {
  return <LandingPage 
    onGetStarted={() => { setShowLanding(false); setShowAuth(true) }}
    onLogin={() => { console.log('login clicked'); setShowAuth(true); setShowLanding(false); }}
  />
}

  // AUTH
  if (showAuth) {
  return (
    <Auth
       onBack={() => { setShowAuth(false); setShowLanding(true) }}
       onAuthenticated={async (uid, isNewUser) => {
        setUserId(uid)
        setShowAuth(false)
        if (!isNewUser) {
          try {
            const { data, error } = await supabase
              .from('profiles')
              .select('*')
              .eq('user_id', uid)
              .single()
            if (error) throw error
            if (data) {
              setProfileId(data.id)
              setProfile({
                parentName: data.parent_name,
                learnerName: data.learner_name,
                band: data.band,
                bandLabel: data.band === 'sprout' ? 'Sprouts' : data.band === 'climber' ? 'Climbers' : data.band === 'bloomer' ? 'Bloomers' : 'Growers',
                bandIcon: data.band === 'sprout' ? '🌱' : data.band === 'climber' ? '🧗' : data.band === 'bloomer' ? '🌸' : '🌳',
                character: data.character,
                characterName: data.character_name,
                xp: data.xp || 0,
                streak: data.streak || 7,
              })
              setOnboardingDone(true)
            }
          } catch (err) {
            console.error('Error loading profile:', err)
            setOnboardingDone(false)
          }
        }
      }}
    />
  )
}

  // ONBOARDING
  if (!onboardingDone) {
    return (
      <div style={{
        position: 'fixed', inset: 0, background: '#0a2e14',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'auto', padding: '24px',
        fontFamily: "'Nunito', sans-serif",
      }}>
        <div style={{ width: '100%', maxWidth: '860px' }}>

          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '4px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              fontFamily: "'Fredoka One', sans-serif", fontSize: '28px', color: '#fff',
            }}>
              <div style={{
                width: '36px', height: '36px', background: '#FFE135',
                borderRadius: '50% 0 50% 50%', transform: 'rotate(-45deg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ transform: 'rotate(45deg)', fontSize: '18px' }}>🌿</span>
              </div>
              HomeGrown<span style={{ color: '#FFE135' }}>Skills</span>
            </div>
          </div>
          <div style={{
            textAlign: 'center', fontSize: '14px', fontWeight: 700,
            color: 'rgba(255,255,255,0.5)', marginBottom: '32px', fontStyle: 'italic',
          }}>
            &quot;The education system teaches children to pass tests. We teach them to pass life.&quot;
          </div>

          {/* Progress dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: i === obStep ? '#FFE135' : i < obStep ? '#1e8c3a' : 'rgba(255,255,255,0.2)',
                transform: i === obStep ? 'scale(1.3)' : 'scale(1)',
                transition: 'all 0.2s',
              }} />
            ))}
          </div>

          {/* STEP 0: Names */}
          {obStep === 0 && (
            <div>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '26px', color: '#fff', textAlign: 'center', marginBottom: '6px' }}>
                Welcome! Let&apos;s get set up 👋
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '28px' }}>
                Tell us a little about your family
              </div>
              <input
                value={parentName}
                onChange={e => setParentName(e.target.value)}
                placeholder="Your name (parent or carer)..."
                style={{
                  width: '100%', padding: '15px 18px',
                  background: 'rgba(255,255,255,0.09)',
                  border: '2.5px solid rgba(255,255,255,0.18)',
                  borderRadius: '16px', color: '#fff',
                  fontFamily: "'Nunito', sans-serif", fontSize: '17px', fontWeight: 800,
                  outline: 'none', marginBottom: '12px',
                }}
              />
              <input
                value={learnerName}
                onChange={e => setLearnerName(e.target.value)}
                placeholder="Your learner's name..."
                style={{
                  width: '100%', padding: '15px 18px',
                  background: 'rgba(255,255,255,0.09)',
                  border: '2.5px solid rgba(255,255,255,0.18)',
                  borderRadius: '16px', color: '#fff',
                  fontFamily: "'Nunito', sans-serif", fontSize: '17px', fontWeight: 800,
                  outline: 'none', marginBottom: '20px',
                }}
              />
              <button
                disabled={!parentName.trim() || !learnerName.trim()}
                onClick={() => setObStep(1)}
                style={{
                  width: '100%', padding: '15px',
                  background: parentName.trim() && learnerName.trim() ? '#FFE135' : 'rgba(255,255,255,0.15)',
                  color: parentName.trim() && learnerName.trim() ? '#145a28' : 'rgba(255,255,255,0.3)',
                  border: 'none', borderRadius: '16px',
                  fontFamily: "'Fredoka One', sans-serif", fontSize: '19px',
                  cursor: parentName.trim() && learnerName.trim() ? 'pointer' : 'not-allowed',
                  boxShadow: parentName.trim() && learnerName.trim() ? '0 5px 0 #c9a800' : 'none',
                }}
              >Let&apos;s go! →</button>
            </div>
          )}

          {/* STEP 1: Age Band */}
          {obStep === 1 && (
            <div>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '26px', color: '#fff', textAlign: 'center', marginBottom: '6px' }}>
                Which age group is <span style={{ color: '#FFE135' }}>{learnerName}</span>?
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '28px' }}>
                You can change this any time as they grow
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
                {BANDS.map(band => (
                  <div
                    key={band.id}
                    onClick={() => setSelectedBand(band.id)}
                    style={{
                      padding: '20px 12px', borderRadius: '18px',
                      border: `3px solid ${selectedBand === band.id ? '#FFE135' : 'rgba(255,255,255,0.12)'}`,
                      background: selectedBand === band.id ? 'rgba(255,225,53,0.14)' : 'rgba(255,255,255,0.06)',
                      cursor: 'pointer', textAlign: 'center',
                      transform: selectedBand === band.id ? 'scale(1.04)' : 'scale(1)',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ fontSize: '36px', marginBottom: '8px' }}>{band.icon}</div>
                    <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{band.name}</div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>{band.ages}</div>
                  </div>
                ))}
              </div>
              <button
                disabled={!selectedBand}
                onClick={() => setObStep(2)}
                style={{
                  width: '100%', padding: '15px',
                  background: selectedBand ? '#FFE135' : 'rgba(255,255,255,0.15)',
                  color: selectedBand ? '#145a28' : 'rgba(255,255,255,0.3)',
                  border: 'none', borderRadius: '16px',
                  fontFamily: "'Fredoka One', sans-serif", fontSize: '19px',
                  cursor: selectedBand ? 'pointer' : 'not-allowed',
                  boxShadow: selectedBand ? '0 5px 0 #c9a800' : 'none',
                  marginBottom: '10px',
                }}
              >Next →</button>
              <button onClick={() => setObStep(0)} style={{ display: 'block', width: '100%', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}>← Back</button>
            </div>
          )}

          {/* STEP 2: Character */}
          {obStep === 2 && (
            <div>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '26px', color: '#fff', textAlign: 'center', marginBottom: '6px' }}>
                Pick your character, <span style={{ color: '#FFE135' }}>{learnerName}</span>!
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '28px' }}>
                This is who you&apos;ll be on your HomeGrownSkills journey
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }}>
                {CHARACTERS.map(char => (
                  <div
                    key={char.name}
                    onClick={() => { setSelectedChar(char.emoji); setSelectedCharName(char.name) }}
                    style={{
                      aspectRatio: '1', borderRadius: '16px',
                      border: `3px solid ${selectedChar === char.emoji ? '#FFE135' : 'rgba(255,255,255,0.12)'}`,
                      background: selectedChar === char.emoji ? 'rgba(255,225,53,0.14)' : 'rgba(255,255,255,0.06)',
                      cursor: 'pointer', display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center', gap: '4px',
                      transform: selectedChar === char.emoji ? 'scale(1.08)' : 'scale(1)',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ fontSize: '32px' }}>{char.emoji}</span>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: 'rgba(255,255,255,0.5)' }}>{char.name}</span>
                  </div>
                ))}
              </div>
              <button
                disabled={!selectedChar}
                onClick={() => setObStep(3)}
                style={{
                  width: '100%', padding: '15px',
                  background: selectedChar ? '#FFE135' : 'rgba(255,255,255,0.15)',
                  color: selectedChar ? '#145a28' : 'rgba(255,255,255,0.3)',
                  border: 'none', borderRadius: '16px',
                  fontFamily: "'Fredoka One', sans-serif", fontSize: '19px',
                  cursor: selectedChar ? 'pointer' : 'not-allowed',
                  boxShadow: selectedChar ? '0 5px 0 #c9a800' : 'none',
                  marginBottom: '10px',
                }}
              >That&apos;s me! →</button>
              <button onClick={() => setObStep(1)} style={{ display: 'block', width: '100%', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}>← Back</button>
            </div>
          )}

          {/* STEP 3: About your family */}
          {obStep === 3 && (
            <div>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '26px', color: '#fff', textAlign: 'center', marginBottom: '6px' }}>
                Almost there! Tell us a little more 🌍
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '28px' }}>
                This helps us make HGS better for families like yours
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>

                <div>
                  <div style={{ fontSize: '12px', fontWeight: 900, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    How are you using HomeGrownSkills?
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {[
                      { id: 'homeed', label: '🏡 Home educating', desc: 'Our main curriculum' },
                      { id: 'supplement', label: '📚 School supplement', desc: 'Alongside school' },
                    ].map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => setLearningType(opt.id)}
                        style={{
                          padding: '14px 12px', borderRadius: '14px', cursor: 'pointer', textAlign: 'center',
                          border: `2.5px solid ${learningType === opt.id ? '#FFE135' : 'rgba(255,255,255,0.12)'}`,
                          background: learningType === opt.id ? 'rgba(255,225,53,0.14)' : 'rgba(255,255,255,0.06)',
                          transition: 'all 0.2s',
                        }}
                      >
                        <div style={{ fontSize: '15px', fontWeight: 800, color: '#fff', marginBottom: '3px' }}>{opt.label}</div>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>{opt.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '12px', fontWeight: 900, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    Where are you based?
                  </div>
                  <select
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    style={{
                      width: '100%', padding: '13px 16px',
                      background: 'rgba(255,255,255,0.09)',
                      border: '2.5px solid rgba(255,255,255,0.18)',
                      borderRadius: '13px', color: country ? '#fff' : 'rgba(255,255,255,0.4)',
                      fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 700,
                      outline: 'none',
                    }}
                  >
                    <option value="" style={{ color: '#1a1a1a' }}>Select your country...</option>
                    <option value="uk" style={{ color: '#1a1a1a' }}>🇬🇧 United Kingdom</option>
                    <option value="ireland" style={{ color: '#1a1a1a' }}>🇮🇪 Ireland</option>
                    <option value="usa" style={{ color: '#1a1a1a' }}>🇺🇸 United States</option>
                    <option value="australia" style={{ color: '#1a1a1a' }}>🇦🇺 Australia</option>
                    <option value="canada" style={{ color: '#1a1a1a' }}>🇨🇦 Canada</option>
                    <option value="newzealand" style={{ color: '#1a1a1a' }}>🇳🇿 New Zealand</option>
                    <option value="other" style={{ color: '#1a1a1a' }}>🌍 Other</option>
                  </select>
                </div>

                <div>
                  <div style={{ fontSize: '12px', fontWeight: 900, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    How did you hear about us?
                  </div>
                  <select
                    value={heardFrom}
                    onChange={e => setHeardFrom(e.target.value)}
                    style={{
                      width: '100%', padding: '13px 16px',
                      background: 'rgba(255,255,255,0.09)',
                      border: '2.5px solid rgba(255,255,255,0.18)',
                      borderRadius: '13px', color: heardFrom ? '#fff' : 'rgba(255,255,255,0.4)',
                      fontFamily: "'Nunito', sans-serif", fontSize: '15px', fontWeight: 700,
                      outline: 'none',
                    }}
                  >
                    <option value="" style={{ color: '#1a1a1a' }}>Select an option...</option>
                    <option value="perfectedchaos" style={{ color: '#1a1a1a' }}>🎙️ Perfected Chaos podcast/blog</option>
                    <option value="facebook" style={{ color: '#1a1a1a' }}>📘 Facebook group</option>
                    <option value="instagram" style={{ color: '#1a1a1a' }}>📸 Instagram</option>
                    <option value="wordofmouth" style={{ color: '#1a1a1a' }}>🗣️ Word of mouth</option>
                    <option value="search" style={{ color: '#1a1a1a' }}>🔍 Google / Search</option>
                    <option value="other" style={{ color: '#1a1a1a' }}>✨ Other</option>
                  </select>
                </div>
              </div>

              <button
                disabled={!learningType || !country || !heardFrom}
                onClick={() => setObStep(4)}
                style={{
                  width: '100%', padding: '15px',
                  background: learningType && country && heardFrom ? '#FFE135' : 'rgba(255,255,255,0.15)',
                  color: learningType && country && heardFrom ? '#145a28' : 'rgba(255,255,255,0.3)',
                  border: 'none', borderRadius: '16px',
                  fontFamily: "'Fredoka One', sans-serif", fontSize: '19px',
                  cursor: learningType && country && heardFrom ? 'pointer' : 'not-allowed',
                  boxShadow: learningType && country && heardFrom ? '0 5px 0 #c9a800' : 'none',
                  marginBottom: '10px',
                }}
              >Next →</button>
              <button onClick={() => setObStep(2)} style={{ display: 'block', width: '100%', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}>← Back</button>
            </div>
          )}

          {/* STEP 4: Confirm */}
          {obStep === 4 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '80px', marginBottom: '8px' }}>{selectedChar}</div>
                <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '26px', color: '#fff', marginBottom: '6px' }}>
                  You&apos;re all set, {parentName}!
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>
                  {learnerName}&apos;s HomeGrownSkills adventure is about to begin.
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '18px', padding: '20px', marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { label: 'Learner', value: learnerName },
                  { label: 'Age Band', value: `${BANDS.find(b => b.id === selectedBand)?.icon} ${BANDS.find(b => b.id === selectedBand)?.name}` },
                  { label: 'Character', value: `${selectedChar} ${selectedCharName}` },
                  { label: 'Parent', value: parentName },
                ].map(item => (
                  <div key={item.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.45)', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '18px', color: '#fff' }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={launchApp}
                style={{
                  width: '100%', padding: '15px',
                  background: '#FFE135', color: '#145a28',
                  border: 'none', borderRadius: '16px',
                  fontFamily: "'Fredoka One', sans-serif", fontSize: '19px',
                  cursor: 'pointer', boxShadow: '0 5px 0 #c9a800', marginBottom: '10px',
                }}
              >Start my adventure! 🚀</button>
              <button onClick={() => setObStep(3)} style={{ display: 'block', width: '100%', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}>← Back</button>
            </div>
          )}

        </div>
      </div>
    )
  }

  // MAIN APP
  return (
    <div style={{
      display: 'flex', height: '100vh', overflow: 'hidden',
      background: '#FFFDF7', fontFamily: "'Nunito', sans-serif",
    }}>

      {/* ICON SIDEBAR */}
      <div style={{
        width: '72px', flexShrink: 0, background: '#0a2e14',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '14px 0', gap: '4px',
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div
          onClick={() => setCurrentPanel('home')}
          style={{
            width: '42px', height: '42px', background: '#FFE135',
            borderRadius: '50% 0 50% 50%', transform: 'rotate(-45deg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '14px', cursor: 'pointer', flexShrink: 0,
          }}>
          <span style={{ transform: 'rotate(45deg)', fontSize: '20px' }}>🌿</span>
        </div>

        {[
          { id: 'home', icon: '🏠', label: 'Home' },
          { id: 'skill', icon: '📚', label: 'Skills' },
          { id: 'project', icon: '🗺️', label: 'Projects' },
          { id: 'creative', icon: '✨', label: 'Create' },
          { id: 'memory', icon: '📸', label: 'Wall' },
        ].map(item => (
          <div
            key={item.id}
            onClick={() => setCurrentPanel(item.id)}
            title={item.label}
            style={{
              width: '52px', height: '52px', borderRadius: '16px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '2px', cursor: 'pointer',
              background: currentPanel === item.id ? 'rgba(255,225,53,0.15)' : 'transparent',
              border: currentPanel === item.id ? '2px solid rgba(255,225,53,0.4)' : '2px solid transparent',
              transition: 'all 0.15s',
            }}>
            <span style={{ fontSize: '22px' }}>{item.icon}</span>
            <span style={{
              fontSize: '8px', fontWeight: 900,
              color: currentPanel === item.id ? '#FFE135' : 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase', letterSpacing: '0.04em',
            }}>{item.label}</span>
          </div>
        ))}

        <div style={{
          marginTop: 'auto', width: '42px', height: '42px',
          borderRadius: '14px', background: '#1e8c3a',
          border: '2.5px solid #FFE135',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', cursor: 'pointer',
        }}>
          {profile?.character}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* TOPBAR */}
        <div style={{
          height: '54px', background: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          display: 'flex', alignItems: 'center',
          padding: '0 28px', gap: '16px', flexShrink: 0,
        }}>
          <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '18px', color: '#1a1a1a', flex: 1 }}>
            {currentPanel === 'home' && '🏠 Home'}
            {currentPanel === 'skill' && '📚 Skill Builder'}
            {currentPanel === 'project' && '🗺️ Project Corner'}
            {currentPanel === 'creative' && '✨ Creative Space'}
            {currentPanel === 'memory' && '📸 Memory Wall'}
          </div>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#FF6B35', display: 'flex', alignItems: 'center', gap: '4px' }}>
            🔥 {profile?.streak} days
          </div>
          <div style={{ background: '#d4f0dd', color: '#145a28', fontSize: '13px', fontWeight: 900, padding: '6px 14px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            ⚡ {profile?.xp} XP
          </div>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#666' }}>
            Hi, {profile?.learnerName}! {profile?.character}
          </div>
        </div>

        {/* PANELS */}
        <div style={{ flex: 1, overflow: 'hidden' }}>

          {currentPanel === 'home' && (
            <div style={{ height: '100%', overflowY: 'auto' }}>
              <div style={{ background: '#0a2e14', padding: '36px 48px 32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: '4px' }}>
                    Welcome back, {profile?.parentName}!
                  </div>
                  <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '38px', color: '#fff', marginBottom: '6px', lineHeight: 1.05 }}>
                    {profile?.learnerName} is ready to grow!{' '}
                    <span style={{ color: '#FFE135' }}>{profile?.character}</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic' }}>
                    {profile?.bandIcon} {profile?.bandLabel} · Let&apos;s learn something amazing today
                  </div>
                </div>
              </div>
              <div style={{ padding: '28px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                {[
                  { id: 'skill', bg: 'linear-gradient(135deg, #1e8c3a, #0d5c26)', icon: '📚', name: 'Skill Builder', desc: 'Step-by-step lessons across 8 life skill subjects. Learn, do, quiz, apply.', footer: 'Natural World · Step 1 active', badge: '+180 XP available', progress: 18 },
                  { id: 'project', bg: 'linear-gradient(135deg, #0d47a1, #1976D2)', icon: '🗺️', name: 'Project Corner', desc: 'Deep-dive projects that grow with you. Add to them whenever you like — they never close.', footer: 'Rainforest project · Growing 🌱', badge: 'Always open', progress: 55 },
                  { id: 'creative', bg: 'linear-gradient(135deg, #6A0080, #AB47BC)', icon: '✨', name: 'Creative Space', desc: 'Always open, always free. Write stories, make art, build worlds. No tests. Just imagination.', footer: 'Always available · No locks', badge: '3 pieces saved', progress: 100 },
                  { id: 'memory', bg: 'linear-gradient(135deg, #0a2e14, #1a3d20)', icon: '📸', name: 'Memory Wall', desc: 'Your real-world achievements and family moments. Every time learning leaves the screen, it lives here.', footer: '2 moments this week', badge: 'Add a moment →', progress: 100 },
                ].map(card => (
                  <div
                    key={card.id}
                    onClick={() => setCurrentPanel(card.id)}
                    style={{
                      borderRadius: '22px', overflow: 'hidden', cursor: 'pointer',
                      boxShadow: '0 4px 0 rgba(0,0,0,0.15), 0 6px 20px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s', background: card.bg,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    <div style={{ padding: '24px 26px 18px' }}>
                      <div style={{ fontSize: '40px', marginBottom: '10px' }}>{card.icon}</div>
                      <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '24px', color: '#fff', marginBottom: '6px' }}>{card.name}</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>{card.desc}</div>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(0,0,0,0.2)' }}>
                      <div style={{ height: '100%', width: `${card.progress}%`, background: '#FFE135' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 26px', background: 'rgba(0,0,0,0.18)' }}>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: 'rgba(255,255,255,0.65)' }}>{card.footer}</div>
                      <div style={{ fontSize: '11px', fontWeight: 900, padding: '3px 12px', borderRadius: '12px', background: 'rgba(255,255,255,0.16)', color: '#fff' }}>{card.badge}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPanel === 'skill' && profile && (
            <SkillBuilder
              profile={{
                learnerName: profile.learnerName,
                parentName: profile.parentName,
                character: profile.character,
                band: profile.band,
                xp: profile.xp,
                streak: profile.streak,
                bandIcon: profile.bandIcon,
                bandLabel: profile.bandLabel,
                profileId: profileId || undefined,
              }}
              onXPGain={handleXPGain}
            />
          )}

          {currentPanel === 'project' && profile && (
            <ProjectCorner
              profile={{
                learnerName: profile.learnerName,
                parentName: profile.parentName,
                character: profile.character,
                band: profile.band,
                bandIcon: profile.bandIcon,
                bandLabel: profile.bandLabel,
                xp: profile.xp,
                streak: profile.streak,
              }}
              onXPGain={handleXPGain}
            />
          )}

          {currentPanel === 'creative' && profile && (
            <CreativeSpace
              profile={{
                learnerName: profile.learnerName,
                parentName: profile.parentName,
                character: profile.character,
                band: profile.band,
                bandIcon: profile.bandIcon,
                bandLabel: profile.bandLabel,
                xp: profile.xp,
                streak: profile.streak,
              }}
              onXPGain={handleXPGain}
            />
          )}

          {currentPanel === 'memory' && profile && (
            <MemoryWall
              profile={{
                learnerName: profile.learnerName,
                parentName: profile.parentName,
                character: profile.character,
                band: profile.band,
                bandIcon: profile.bandIcon,
                bandLabel: profile.bandLabel,
                xp: profile.xp,
                streak: profile.streak,
              }}
              onXPGain={handleXPGain}
            />
          )}

        </div>
      </div>
    </div>
  )
}