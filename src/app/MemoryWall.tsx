'use client'

import { useState } from 'react'

interface Profile {
  learnerName: string
  parentName: string
  character: string
  band: string
  bandIcon: string
  bandLabel: string
  xp: number
  streak: number
}

interface MemoryWallProps {
  profile: Profile
  onXPGain: (amount: number) => void
}

interface Moment {
  id: string
  emoji: string
  name: string
  text: string
  source: string
  sourceBg: string
  cardBg: string
  xp: number
  stars: number
  hearts: number
  date: string
}

const INITIAL_MOMENTS: Moment[] = [
  {
    id: '1',
    emoji: '🌱',
    name: '',
    text: 'Planted sunflower seeds after the Natural World lesson on living things. Watered them every single day for a week — they\'re already sprouting! Asked if they\'re alive now. They always were!',
    source: '📚 Skill Builder',
    sourceBg: '#1e8c3a',
    cardBg: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
    xp: 30,
    stars: 12,
    hearts: 8,
    date: '1 week ago',
  },
  {
    id: '2',
    emoji: '🐛',
    name: '',
    text: 'Found a caterpillar on a leaf in the garden. Kept it in a jar with leaves and watched it eat for 10 minutes. Asked if this was a consumer in a food chain. Yes. Yes it is.',
    source: '🏡 Real life',
    sourceBg: '#FF8C00',
    cardBg: 'linear-gradient(135deg, #FFF9C4, #FFE082)',
    xp: 25,
    stars: 7,
    hearts: 6,
    date: '2 weeks ago',
  },
]

const EMOJI_OPTIONS = ['🌱', '🌳', '🦋', '🐝', '🌊', '🍄', '🔬', '⭐', '🎨', '📚', '🏃', '🍎']
const SOURCE_OPTIONS = [
  { label: '📚 Skill Builder', bg: '#1e8c3a' },
  { label: '🗺️ Project', bg: '#0d47a1' },
  { label: '✨ Creative piece', bg: '#6A0080' },
  { label: '🏡 Real life', bg: '#FF8C00' },
]
const CARD_BGS = [
  'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
  'linear-gradient(135deg, #FFF9C4, #FFE082)',
  'linear-gradient(135deg, #E8F5FF, #BBDEFB)',
  'linear-gradient(135deg, #F3E8FF, #E1BEE7)',
  'linear-gradient(135deg, #FFE8CC, #FFCC80)',
  'linear-gradient(135deg, #E8F5E9, #A5D6A7)',
]

export default function MemoryWall({ profile, onXPGain }: MemoryWallProps) {
  const [moments, setMoments] = useState<Moment[]>(
    INITIAL_MOMENTS.map(m => ({ ...m, name: profile.learnerName }))
  )
  const [filter, setFilter] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [reactedIds, setReactedIds] = useState<Record<string, { stars: boolean; hearts: boolean }>>({})

  const [addText, setAddText] = useState('')
  const [addEmoji, setAddEmoji] = useState('🌱')
  const [addSource, setAddSource] = useState(SOURCE_OPTIONS[0])

  function toast(msg: string) {
    setToastMsg(msg)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
  }

  function confetti() {
    const colors = ['#FFE135', '#FF6B35', '#3B9EFF', '#FF6B9D', '#1e8c3a', '#FF8C00', '#9C27B0']
    for (let i = 0; i < 60; i++) {
      const el = document.createElement('div')
      const s = 7 + Math.random() * 10
      el.style.cssText = `position:fixed;width:${s}px;height:${s}px;border-radius:${Math.random() > 0.5 ? '50%' : '3px'};background:${colors[Math.floor(Math.random() * colors.length)]};left:${Math.random() * 100}vw;top:-20px;z-index:99999;pointer-events:none;animation:confettiFall ${1.4 + Math.random() * 2}s ease-in ${Math.random() * 0.5}s forwards`
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 4000)
    }
  }

  function reactToMoment(id: string, type: 'stars' | 'hearts') {
    const already = reactedIds[id]?.[type]
    if (already) return
    setReactedIds(prev => ({
      ...prev,
      [id]: { ...prev[id], [type]: true },
    }))
    setMoments(prev => prev.map(m =>
      m.id === id ? { ...m, [type]: m[type] + 1 } : m
    ))
  }

  function submitMoment() {
    if (!addText.trim()) return
    const newMoment: Moment = {
      id: Date.now().toString(),
      emoji: addEmoji,
      name: profile.learnerName,
      text: addText.trim(),
      source: addSource.label,
      sourceBg: addSource.bg,
      cardBg: CARD_BGS[Math.floor(Math.random() * CARD_BGS.length)],
      xp: 25,
      stars: 0,
      hearts: 0,
      date: 'Just now',
    }
    setMoments(prev => [newMoment, ...prev])
    setShowAddModal(false)
    setAddText('')
    setAddEmoji('🌱')
    setAddSource(SOURCE_OPTIONS[0])
    onXPGain(25)
    toast('+25 XP 📸 Moment added!')
    confetti()
  }

  const filtered = filter === 'all'
    ? moments
    : moments.filter(m => {
        if (filter === 'skill') return m.source.includes('Skill')
        if (filter === 'project') return m.source.includes('Project')
        if (filter === 'creative') return m.source.includes('Creative')
        if (filter === 'life') return m.source.includes('Real')
        return true
      })

  const totalXP = moments.reduce((a, m) => a + m.xp, 0)
  const totalReactions = moments.reduce((a, m) => a + m.stars + m.hearts, 0)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {showToast && (
        <div style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 9999,
          background: '#FFE135',
          color: '#145a28',
          fontFamily: "'Fredoka One', sans-serif",
          fontSize: '18px',
          padding: '10px 22px',
          borderRadius: '30px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          animation: 'fadeUp 0.3s ease',
        }}>
          {toastMsg}
        </div>
      )}

      {/* Add Moment Modal */}
      {showAddModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 8888,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '26px',
            padding: '28px',
            maxWidth: '500px',
            width: '100%',
            animation: 'fadeUp 0.3s ease',
          }}>
            <div style={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: '22px',
              color: '#145a28',
              marginBottom: '16px',
            }}>📸 Add a Homegrown Moment!</div>

            <textarea
              value={addText}
              onChange={e => setAddText(e.target.value)}
              placeholder="What did you do? What did you discover? What surprised you?"
              style={{
                width: '100%',
                padding: '11px 14px',
                border: '2.5px solid #e0e0e0',
                borderRadius: '13px',
                fontFamily: "'Nunito', sans-serif",
                fontSize: '14px',
                fontWeight: 700,
                outline: 'none',
                resize: 'none',
                minHeight: '100px',
                color: '#1a1a1a',
                marginBottom: '14px',
                lineHeight: 1.6,
              }}
            />

            <div style={{
              fontSize: '11px',
              fontWeight: 900,
              color: '#666',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>Pick an emoji</div>
            <div style={{
              display: 'flex',
              gap: '7px',
              flexWrap: 'wrap',
              marginBottom: '14px',
            }}>
              {EMOJI_OPTIONS.map(emoji => (
                <div
                  key={emoji}
                  onClick={() => setAddEmoji(emoji)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '11px',
                    border: `2.5px solid ${addEmoji === emoji ? '#1e8c3a' : '#e0e0e0'}`,
                    background: addEmoji === emoji ? '#edfaf1' : '#fafafa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>

            <div style={{
              fontSize: '11px',
              fontWeight: 900,
              color: '#666',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>Where does this come from?</div>
            <div style={{
              display: 'flex',
              gap: '7px',
              flexWrap: 'wrap',
              marginBottom: '18px',
            }}>
              {SOURCE_OPTIONS.map(src => (
                <div
                  key={src.label}
                  onClick={() => setAddSource(src)}
                  style={{
                    padding: '6px 13px',
                    borderRadius: '12px',
                    border: `2px solid ${addSource.label === src.label ? '#1e8c3a' : '#e0e0e0'}`,
                    background: addSource.label === src.label ? '#edfaf1' : '#fff',
                    color: addSource.label === src.label ? '#145a28' : '#666',
                    fontSize: '12px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {src.label}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setShowAddModal(false)}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '13px',
                  border: '2.5px solid #e0e0e0',
                  background: '#fff',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  color: '#666',
                }}
              >Cancel</button>
              <button
                onClick={submitMoment}
                disabled={!addText.trim()}
                style={{
                  flex: 2,
                  padding: '12px',
                  borderRadius: '13px',
                  border: 'none',
                  background: addText.trim() ? '#145a28' : '#e0e0e0',
                  color: addText.trim() ? '#fff' : '#aaa',
                  fontFamily: "'Fredoka One', sans-serif",
                  fontSize: '18px',
                  cursor: addText.trim() ? 'pointer' : 'not-allowed',
                  transition: 'all 0.15s',
                }}
              >Add Moment! +25 XP ⭐</button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <div style={{
        background: '#0a2e14',
        padding: '20px 32px 16px',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: '#FFE135',
                color: '#145a28',
                fontSize: '11px',
                fontWeight: 900,
                padding: '4px 14px',
                borderRadius: '20px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>📸 Memory Wall</div>
              <div style={{
                fontFamily: "'Fredoka One', sans-serif",
                fontSize: '26px',
                color: '#fff',
                marginBottom: '4px',
              }}>{profile.learnerName}&apos;s Homegrown Moments</div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.6)',
                fontStyle: 'italic',
              }}>
                Every time learning leaves the screen, it lives here forever
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { val: moments.length, label: 'Moments' },
                { val: totalReactions, label: 'Reactions' },
                { val: totalXP, label: 'XP earned' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '10px 16px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: "'Fredoka One', sans-serif",
                    fontSize: '20px',
                    color: '#FFE135',
                  }}>{stat.val}</div>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{
        padding: '14px 32px',
        background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
        flexShrink: 0,
      }}>
        {[
          { id: 'all', label: 'All moments' },
          { id: 'skill', label: '📚 From skills' },
          { id: 'project', label: '🗺️ From projects' },
          { id: 'creative', label: '✨ Creative pieces' },
          { id: 'life', label: '🏡 Real life' },
        ].map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            style={{
              padding: '7px 16px',
              borderRadius: '20px',
              border: `2px solid ${filter === f.id ? '#145a28' : '#e0e0e0'}`,
              background: filter === f.id ? '#145a28' : '#fff',
              color: filter === f.id ? '#fff' : '#666',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >{f.label}</button>
        ))}
        <button
          onClick={() => setShowAddModal(true)}
          style={{
            marginLeft: 'auto',
            padding: '8px 18px',
            borderRadius: '20px',
            background: '#FFE135',
            color: '#145a28',
            border: 'none',
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '15px',
            cursor: 'pointer',
            boxShadow: '0 3px 0 #c9a800',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
        >+ Add a moment</button>
      </div>

      {/* Moments grid */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 32px' }}>
        {filtered.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '48px 24px',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>📸</div>
            <div style={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: '22px',
              color: '#bbb',
              marginBottom: '6px',
            }}>No moments yet!</div>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#ccc',
            }}>Complete a real-world mission or add a moment to get started</div>
          </div>
        )}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {filtered.map(moment => (
            <div
              key={moment.id}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s',
                background: '#fff',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {/* Image zone */}
              <div style={{
                height: '130px',
                background: moment.cardBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '52px',
                position: 'relative',
              }}>
                {moment.emoji}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: moment.sourceBg,
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 900,
                  padding: '3px 10px',
                  borderRadius: '10px',
                }}>
                  {moment.source}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '14px 16px' }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#666',
                  marginBottom: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span>{moment.name}</span>
                  <span>{moment.date}</span>
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  lineHeight: 1.55,
                  marginBottom: '12px',
                }}>{moment.text}</div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{
                    background: '#d4f0dd',
                    color: '#145a28',
                    fontSize: '11px',
                    fontWeight: 900,
                    padding: '3px 10px',
                    borderRadius: '10px',
                  }}>+{moment.xp} XP</div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => reactToMoment(moment.id, 'stars')}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        border: 'none',
                        background: reactedIds[moment.id]?.stars ? '#FFF9C4' : '#f5f5f5',
                        color: reactedIds[moment.id]?.stars ? '#5a3000' : '#666',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                    >⭐ {moment.stars}</button>
                    <button
                      onClick={() => reactToMoment(moment.id, 'hearts')}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        border: 'none',
                        background: reactedIds[moment.id]?.hearts ? '#FFE8F0' : '#f5f5f5',
                        color: reactedIds[moment.id]?.hearts ? '#8B0032' : '#666',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                    >💚 {moment.hearts}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}