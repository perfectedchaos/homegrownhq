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

interface CreativeSpaceProps {
  profile: Profile
  onXPGain: (amount: number) => void
}

interface Piece {
  id: string
  title: string
  prompt: string
  text: string
  type: string
  date: string
  wordCount: number
  emoji: string
}

const PROMPTS = [
  {
    emoji: '🌳',
    type: 'Story',
    title: 'A Tree\'s Point of View',
    desc: 'Write a story from the perspective of a tree watching the seasons change over a whole year',
    bg: 'linear-gradient(135deg, #1e8c3a, #2ecc71)',
    prompt: 'Write a story from the perspective of a tree watching the seasons change. What does it see? What does it feel when its leaves fall? What does it dream about in winter?',
  },
  {
    emoji: '🐝',
    type: 'Diary',
    title: 'The Last Bee',
    desc: 'You are the last bee on Earth. Write a diary entry describing your day',
    bg: 'linear-gradient(135deg, #FF8C00, #FFA726)',
    prompt: 'You are the last bee on Earth. Write a diary entry describing your day and how the world feels different now that all the others are gone.',
  },
  {
    emoji: '🦕',
    type: 'Invention',
    title: 'Design a New Creature',
    desc: 'Invent a completely new animal. Describe it so vividly someone could draw it from your words',
    bg: 'linear-gradient(135deg, #1a237e, #3949AB)',
    prompt: 'Invent a completely new creature. Where does it live? What does it eat? What are its superpowers? Describe it so vividly that someone could draw it from your description alone.',
  },
  {
    emoji: '🌊',
    type: 'Letter',
    title: 'Message in a Bottle',
    desc: 'Find a letter from a child 100 years ago. Write their letter — and your reply',
    bg: 'linear-gradient(135deg, #0277BD, #039BE5)',
    prompt: 'You find a message in a bottle on a beach. It was written by a child your age from 100 years ago. Write their letter — and then write your reply to them.',
  },
  {
    emoji: '⚡',
    type: 'Free write',
    title: 'Ignore Everything. Just Write.',
    desc: 'No prompt needed. Write a poem, a rant, a list, a story — anything at all',
    bg: 'linear-gradient(135deg, #4a0060, #9C27B0)',
    prompt: 'This is YOUR space. No prompt, no rules, no right or wrong. Write whatever is in your head right now — a poem, a story, a list of things you love, a letter to your future self. Anything.',
  },
  {
    emoji: '🏡',
    type: 'Story',
    title: 'The House That Grew',
    desc: 'A house tells its 50-year story — what it remembers, what it\'s seen, what it hopes for',
    bg: 'linear-gradient(135deg, #BF360C, #E64A19)',
    prompt: 'A family builds a house, and over 50 years it changes with them. Write the house\'s story — what it remembers, what it has seen, what it hopes for.',
  },
]

export default function CreativeSpace({ profile, onXPGain }: CreativeSpaceProps) {
  const [activePrompt, setActivePrompt] = useState<typeof PROMPTS[0] | null>(null)
  const [writeText, setWriteText] = useState('')
  const [savedPieces, setSavedPieces] = useState<Piece[]>([
    {
      id: '1',
      title: 'The Fox Who Learned to Count',
      prompt: 'Free write',
      text: 'Once there was a fox who discovered that counting acorns was the most important skill he\'d ever learn. Not because he needed the acorns, but because counting meant he could always find his way back home...',
      type: 'Story',
      date: '2 weeks ago',
      wordCount: 340,
      emoji: '🦊',
    },
    {
      id: '2',
      title: 'A Letter to Rain',
      prompt: 'Letter',
      text: 'Dear Rain, everyone always complains about you but I think they\'re missing the point. You\'re the reason everything grows. You\'re the reason we have rivers...',
      type: 'Letter',
      date: '3 weeks ago',
      wordCount: 180,
      emoji: '🌧️',
    },
  ])
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

  function toast(msg: string) {
    setToastMsg(msg)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
  }

  function wordCount(text: string) {
    return text.trim().split(/\s+/).filter(w => w.length > 0).length
  }

  function openPrompt(prompt: typeof PROMPTS[0]) {
    setActivePrompt(prompt)
    setSelectedPiece(null)
    setWriteText('')
  }

  function savePiece() {
    if (!writeText.trim() || writeText.trim().length < 10) return
    if (!activePrompt) return
    const piece: Piece = {
      id: Date.now().toString(),
      title: activePrompt.title,
      prompt: activePrompt.prompt,
      text: writeText.trim(),
      type: activePrompt.type,
      date: 'Just now',
      wordCount: wordCount(writeText),
      emoji: activePrompt.emoji,
    }
    setSavedPieces(prev => [piece, ...prev])
    onXPGain(30)
    toast('+30 XP ✨ Piece saved!')
    setActivePrompt(null)
    setWriteText('')
    confetti()
  }

  function loadPiece(piece: Piece) {
    setSelectedPiece(piece)
    setActivePrompt(null)
    setWriteText(piece.text)
  }

  function confetti() {
    const colors = ['#FFE135', '#FF6B35', '#3B9EFF', '#FF6B9D', '#1e8c3a', '#9C27B0']
    for (let i = 0; i < 60; i++) {
      const el = document.createElement('div')
      const s = 7 + Math.random() * 10
      el.style.cssText = `position:fixed;width:${s}px;height:${s}px;border-radius:${Math.random() > 0.5 ? '50%' : '3px'};background:${colors[Math.floor(Math.random() * colors.length)]};left:${Math.random() * 100}vw;top:-20px;z-index:99999;pointer-events:none;animation:confettiFall ${1.4 + Math.random() * 2}s ease-in ${Math.random() * 0.5}s forwards`
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 4000)
    }
  }

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

      <div style={{
        background: 'linear-gradient(135deg, #4a0060, #7B1FA2)',
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
          background: 'rgba(255,255,255,0.06)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 900,
                padding: '4px 14px',
                borderRadius: '20px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>
                ✨ Creative Space
              </div>
              <div style={{
                fontFamily: "'Fredoka One', sans-serif",
                fontSize: '26px',
                color: '#fff',
                marginBottom: '4px',
              }}>
                {profile.learnerName}&apos;s Creative Space
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.7)',
              }}>
                No prerequisites. No tests. No locks. Just you and your imagination.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { val: savedPieces.length, label: 'Pieces saved' },
                { val: savedPieces.reduce((a, p) => a + p.wordCount, 0), label: 'Words written' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: 'rgba(255,255,255,0.1)',
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

      <div style={{
        flex: 1,
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr 280px',
      }}>
        <div style={{ overflowY: 'auto', padding: '20px 24px' }}>

          {(activePrompt || selectedPiece) && (
            <div style={{
              background: '#fff',
              borderRadius: '22px',
              border: '2.5px solid #9C27B0',
              padding: '22px',
              marginBottom: '20px',
              boxShadow: '0 4px 16px rgba(156,39,176,0.1)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px',
              }}>
                <div style={{
                  fontFamily: "'Fredoka One', sans-serif",
                  fontSize: '20px',
                  color: '#9C27B0',
                }}>
                  {activePrompt ? `${activePrompt.emoji} ${activePrompt.title}` : selectedPiece ? `${selectedPiece.emoji} ${selectedPiece.title}` : ''}
                </div>
                <button
                  onClick={() => { setActivePrompt(null); setSelectedPiece(null); setWriteText('') }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    color: '#666',
                  }}
                >✕</button>
              </div>
              {activePrompt && (
                <div style={{
                  background: '#fdf5ff',
                  border: '2px solid #E1BEE7',
                  borderRadius: '12px',
                  padding: '12px 15px',
                  marginBottom: '14px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#4a0072',
                  lineHeight: 1.6,
                }}>
                  {activePrompt.prompt}
                </div>
              )}
              <textarea
                value={writeText}
                onChange={e => setWriteText(e.target.value)}
                placeholder="Start writing here... there's no wrong answer, no right length, no grade. Just write."
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #E1BEE7',
                  borderRadius: '14px',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '14px',
                  fontWeight: 700,
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '200px',
                  color: '#1a1a1a',
                  lineHeight: 1.7,
                }}
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '12px',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#666',
                }}>
                  {wordCount(writeText)} word{wordCount(writeText) !== 1 ? 's' : ''}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={savePiece}
                    disabled={writeText.trim().length < 10}
                    style={{
                      padding: '9px 20px',
                      borderRadius: '12px',
                      background: writeText.trim().length >= 10 ? '#9C27B0' : '#e0e0e0',
                      color: writeText.trim().length >= 10 ? '#fff' : '#aaa',
                      border: 'none',
                      fontFamily: "'Fredoka One', sans-serif",
                      fontSize: '15px',
                      cursor: writeText.trim().length >= 10 ? 'pointer' : 'not-allowed',
                      transition: 'all 0.15s',
                    }}
                  >
                    Save 💾 +30 XP
                  </button>
                </div>
              </div>
            </div>
          )}

          <div style={{
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '18px',
            color: '#1a1a1a',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            Choose a prompt
            <span style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              color: '#666',
            }}>or ignore them all and write whatever you want!</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '12px',
            marginBottom: '24px',
          }}>
            {PROMPTS.map((prompt, i) => (
              <div
                key={i}
                onClick={() => openPrompt(prompt)}
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: activePrompt?.title === prompt.title
                    ? '0 6px 0 rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.12), 0 0 0 3px #FFE135'
                    : '0 3px 0 rgba(0,0,0,0.12), 0 4px 14px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  background: prompt.bg,
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{ padding: '18px 20px' }}>
                  <span style={{ fontSize: '32px', marginBottom: '8px', display: 'block' }}>{prompt.emoji}</span>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '5px',
                  }}>{prompt.type}</div>
                  <div style={{
                    fontFamily: "'Fredoka One', sans-serif",
                    fontSize: '17px',
                    color: '#fff',
                    marginBottom: '5px',
                  }}>{prompt.title}</div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.4,
                  }}>{prompt.desc}</div>
                </div>
                <div style={{
                  padding: '9px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(0,0,0,0.15)',
                }}>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.8)',
                  }}>+30 XP when saved</div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                  }}>→</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '18px',
            color: '#1a1a1a',
            marginBottom: '14px',
          }}>
            ✍️ Your Saved Pieces
          </div>

          {savedPieces.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '24px',
              background: '#fdf5ff',
              borderRadius: '14px',
              border: '2px dashed #E1BEE7',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>✏️</div>
              <div style={{
                fontFamily: "'Fredoka One', sans-serif",
                fontSize: '16px',
                color: '#aaa',
              }}>No pieces yet — pick a prompt above and start writing!</div>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {savedPieces.map(piece => (
              <div
                key={piece.id}
                onClick={() => loadPiece(piece)}
                style={{
                  borderRadius: '16px',
                  padding: '14px 16px',
                  border: `2px solid ${selectedPiece?.id === piece.id ? '#9C27B0' : '#E1BEE7'}`,
                  background: selectedPiece?.id === piece.id ? '#fdf5ff' : '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#9C27B0')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = selectedPiece?.id === piece.id ? '#9C27B0' : '#E1BEE7')}
              >
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#666',
                  marginBottom: '3px',
                }}>{piece.date}</div>
                <div style={{
                  fontFamily: "'Fredoka One', sans-serif",
                  fontSize: '15px',
                  color: '#9C27B0',
                  marginBottom: '4px',
                }}>{piece.emoji} {piece.title}</div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#666',
                  lineHeight: 1.5,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  marginBottom: '6px',
                }}>{piece.text}</div>
                <span style={{
                  fontSize: '10px',
                  fontWeight: 900,
                  padding: '2px 9px',
                  borderRadius: '8px',
                  background: '#F3E8FF',
                  color: '#4a0072',
                }}>{piece.type} · {piece.wordCount} words</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          overflowY: 'auto',
          background: '#fdf5ff',
          borderLeft: '1px solid rgba(0,0,0,0.07)',
          padding: '20px 16px',
        }}>
          <div style={{
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '15px',
            color: '#9C27B0',
            marginBottom: '12px',
          }}>✨ Creative Space Rules</div>

          {[
            { icon: '✅', text: 'Always open. No prerequisites. Create anything, any time.' },
            { icon: '✅', text: 'Never graded. Your writing is yours. No marks, no corrections.' },
            { icon: '✅', text: 'No minimum length. Three words or three thousand. Both are valid.' },
            { icon: '✅', text: 'Private until you\'re ready. Your pieces stay yours until you choose to share.' },
          ].map((rule, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '10px 12px',
              border: '2px solid #E1BEE7',
              fontSize: '12px',
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.5,
              marginBottom: '8px',
              display: 'flex',
              gap: '8px',
            }}>
              <span>{rule.icon}</span>
              <span>{rule.text}</span>
            </div>
          ))}

          <div style={{
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '15px',
            color: '#9C27B0',
            margin: '16px 0 12px',
          }}>💡 Quick Inspiration</div>

          {[
            { icon: '⚡', title: '5-minute sprint', desc: 'Start with "The most surprising thing I learned today was..." — don\'t stop for 5 minutes!' },
            { icon: '🌿', title: 'Nature journal', desc: 'Describe what you can see, hear, smell and feel right now. Real life is often the best story.' },
            { icon: '🎭', title: 'The Wrong Story', desc: 'Tell a familiar story completely wrong — Goldilocks and the Three Sharks, Red Riding Hood on Mars...' },
          ].map((tip, i) => (
            <div
              key={i}
              onClick={() => setActivePrompt({
                emoji: tip.icon,
                type: 'Quick prompt',
                title: tip.title,
                desc: tip.desc,
                bg: 'linear-gradient(135deg, #4a0060, #9C27B0)',
                prompt: tip.desc,
              })}
              style={{
                background: '#fff',
                border: '2px solid #E1BEE7',
                borderRadius: '12px',
                padding: '11px 12px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#4a0072',
                lineHeight: 1.5,
                cursor: 'pointer',
                marginBottom: '8px',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#9C27B0'; e.currentTarget.style.background = '#fdf5ff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E1BEE7'; e.currentTarget.style.background = '#fff' }}
            >
              <strong>{tip.icon} {tip.title}:</strong> {tip.desc}
            </div>
          ))}

          <div style={{
            background: 'linear-gradient(135deg, #4a0060, #7B1FA2)',
            borderRadius: '14px',
            padding: '14px',
            marginTop: '12px',
          }}>
            <div style={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: '14px',
              color: '#fff',
              marginBottom: '10px',
            }}>📊 {profile.learnerName}&apos;s Creative Stats</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
            }}>
              {[
                { val: savedPieces.length, label: 'Pieces saved' },
                { val: savedPieces.reduce((a, p) => a + p.wordCount, 0), label: 'Words written' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '8px',
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
                    color: 'rgba(255,255,255,0.5)',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}