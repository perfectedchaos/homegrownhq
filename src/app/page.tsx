'use client'

import { useState } from 'react'
import SkillBuilder from './SkillBuilder'
import ProjectCorner from './ProjectCorner'
import CreativeSpace from './CreativeSpace'
import MemoryWall from './MemoryWall'
import LandingPage from './LandingPage'
import Auth from './AuthScreen'
import FamilyDashboard from './FamilyDashboard'
import AddLearner from './AddLearner'
import LearnerLogin from './LearnerLogin'
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

interface Learner {
  id: string
  learner_name: string
  parent_name: string
  band: string
  character: string
  character_name: string
  avatar_title: string
  xp: number
  streak: number
  learner_type: string
}

const BAND_MAP: Record<string, { label: string; icon: string }> = {
  sprout: { label: 'Sprouts', icon: '🌱' },
  climber: { label: 'Climbers', icon: '🧗' },
  bloomer: { label: 'Bloomers', icon: '🌸' },
  grower: { label: 'Growers', icon: '🌳' },
}

type AppScreen = 'landing' | 'auth' | 'familyDashboard' | 'addLearner' | 'learnerView' | 'learnerLogin'

export default function Home() {
  const [screen, setScreen] = useState<AppScreen>('landing')
  const [currentPanel, setCurrentPanel] = useState('home')
  const [profile, setProfile] = useState<LearnerProfile | null>(null)
  const [profileId, setProfileId] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [parentName, setParentName] = useState('')

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

  function selectLearner(learner: Learner) {
    const band = BAND_MAP[learner.band] || { label: 'Sprouts', icon: '🌱' }
    setProfile({
      parentName: learner.parent_name,
      learnerName: learner.learner_name,
      band: learner.band,
      bandLabel: band.label,
      bandIcon: band.icon,
      character: learner.character,
      characterName: learner.character_name,
      xp: learner.xp || 0,
      streak: learner.streak || 0,
    })
    setProfileId(learner.id)
    setCurrentPanel('home')
    setScreen('learnerView')
  }

  async function handleLearnerLogin(pid: string) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', pid)
        .single()
      if (error) throw error
      if (data) {
        const band = BAND_MAP[data.band] || { label: 'Sprouts', icon: '🌱' }
        setProfile({
          parentName: data.parent_name,
          learnerName: data.learner_name,
          band: data.band,
          bandLabel: band.label,
          bandIcon: band.icon,
          character: data.character,
          characterName: data.character_name,
          xp: data.xp || 0,
          streak: data.streak || 0,
        })
        setProfileId(data.id)
        setCurrentPanel('home')
        setScreen('learnerView')
      }
    } catch (err) {
      console.error('Error loading learner profile:', err)
    }
  }

  // LANDING
  if (screen === 'landing') {
    return (
      <LandingPage
        onGetStarted={() => setScreen('auth')}
        onLogin={() => setScreen('auth')}
        onLearnerLogin={() => setScreen('learnerLogin')}
      />
    )
  }

  // AUTH
  if (screen === 'auth') {
    return (
      <Auth
        onBack={() => setScreen('landing')}
        onLearnerLogin={() => setScreen('learnerLogin')}
        onAuthenticated={async (uid, isNewUser) => {
          setUserId(uid)
          if (isNewUser) {
            setScreen('addLearner')
          } else {
            try {
              const { data } = await supabase
                .from('profiles')
                .select('parent_name')
                .eq('user_id', uid)
                .limit(1)
                .single()
              if (data) setParentName(data.parent_name)
            } catch {
              // no profile yet
            }
            setScreen('familyDashboard')
          }
        }}
      />
    )
  }

  // LEARNER LOGIN (PIN)
  if (screen === 'learnerLogin') {
    return (
      <LearnerLogin
        onBack={() => setScreen('landing')}
        onAuthenticated={handleLearnerLogin}
      />
    )
  }

  // FAMILY DASHBOARD
  if (screen === 'familyDashboard' && userId) {
    return (
      <FamilyDashboard
        userId={userId}
        parentName={parentName}
        onSelectLearner={selectLearner}
        onAddLearner={() => setScreen('addLearner')}
        onLearnerLogin={() => setScreen('learnerLogin')}
        onSignOut={() => {
          setUserId(null)
          setParentName('')
          setProfile(null)
          setProfileId(null)
          setScreen('landing')
        }}
      />
    )
  }

  // ADD LEARNER
  if (screen === 'addLearner' && userId) {
    return (
      <AddLearner
        userId={userId}
        parentName={parentName}
        onComplete={() => setScreen('familyDashboard')}
        onBack={() => setScreen(userId ? 'familyDashboard' : 'landing')}
      />
    )
  }

  // LEARNER VIEW
  if (screen === 'learnerView' && profile) {
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

          {userId ? (
  <div
    onClick={() => setScreen('familyDashboard')}
    title="Family Dashboard"
    style={{
      width: '52px', height: '52px', borderRadius: '16px',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '2px', cursor: 'pointer',
      background: 'transparent',
      border: '2px solid transparent',
      transition: 'all 0.15s',
      marginTop: '4px',
    }}
    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
  >
    <span style={{ fontSize: '18px' }}>👨‍👩‍👧</span>
    <span style={{
      fontSize: '7px', fontWeight: 900,
      color: 'rgba(255,255,255,0.35)',
      textTransform: 'uppercase', letterSpacing: '0.04em',
      textAlign: 'center',
    }}>Family</span>
  </div>
) : (
  <div
    onClick={() => {
      setProfile(null)
      setProfileId(null)
      setScreen('learnerLogin')
    }}
    title="Log out"
    style={{
      width: '52px', height: '52px', borderRadius: '16px',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '2px', cursor: 'pointer',
      background: 'transparent',
      border: '2px solid transparent',
      transition: 'all 0.15s',
      marginTop: '4px',
    }}
    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
  >
    <span style={{ fontSize: '18px' }}>🚪</span>
    <span style={{
      fontSize: '7px', fontWeight: 900,
      color: 'rgba(255,255,255,0.35)',
      textTransform: 'uppercase', letterSpacing: '0.04em',
      textAlign: 'center',
    }}>Log out</span>
  </div>
)}


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

  return null
}