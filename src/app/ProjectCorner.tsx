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

interface ProjectCornerProps {
  profile: Profile
  onXPGain: (amount: number) => void
}

interface Entry {
  date: string
  text: string
  type: string
}

interface Project {
  id: string
  title: string
  subtitle: string
  icon: string
  type: string
  typeLabel: string
  bg: string
  darkBg: string
  status: string
  entries: Entry[]
}

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  '🔬 Research': { bg: '#E8F5E9', color: '#1b5e20' },
  '✍️ Writing': { bg: '#E8EAF6', color: '#1a237e' },
  '🕵️ Investigation': { bg: '#FFF9C4', color: '#5a3000' },
  '📸 Real-world moment': { bg: '#E8F5FF', color: '#0d47a1' },
  '💭 My opinion': { bg: '#F3E8FF', color: '#4a0072' },
}

const STATUS_LABELS: Record<string, { label: string; bg: string; color: string }> = {
  sprouting: { label: '🌱 Sprouting', bg: '#E8F5E9', color: '#1b5e20' },
  growing: { label: '🌿 Growing', bg: '#FFE135', color: '#145a28' },
  blooming: { label: '🌸 Blooming', bg: '#F3E8FF', color: '#4a0072' },
  thriving: { label: '🌳 Thriving', bg: '#E8F5E9', color: '#1b5e20' },
}

const AVAILABLE_PROJECTS: Project[] = [
  {
    id: 'dinosaurs',
    title: 'Could We Bring Back Dinosaurs?',
    subtitle: 'Science · Ethics · Genetics · Big debate',
    icon: '🦕',
    type: 'bigquestion',
    typeLabel: '🤔 Big Question',
    bg: 'linear-gradient(135deg, #1a237e, #283593)',
    darkBg: '#1a237e',
    status: 'sprouting',
    entries: [],
  },
  {
    id: 'japan',
    title: 'World Explorer: Japan',
    subtitle: 'Culture · Food · History · Language',
    icon: '🗾',
    type: 'worldexplorer',
    typeLabel: '🌍 World Explorer',
    bg: 'linear-gradient(135deg, #b71c1c, #c62828)',
    darkBg: '#b71c1c',
    status: 'sprouting',
    entries: [],
  },
  {
    id: 'kenya',
    title: 'World Explorer: Kenya',
    subtitle: 'Wildlife · Maasai culture · Savanna · Nairobi',
    icon: '🌍',
    type: 'worldexplorer',
    typeLabel: '🌍 World Explorer',
    bg: 'linear-gradient(135deg, #e65100, #f57c00)',
    darkBg: '#e65100',
    status: 'sprouting',
    entries: [],
  },
  {
    id: 'egypt',
    title: 'Back in Time: Ancient Egypt',
    subtitle: 'Pharaohs · Pyramids · Daily life · Hieroglyphs',
    icon: '🏺',
    type: 'backintime',
    typeLabel: '⏰ Back in Time',
    bg: 'linear-gradient(135deg, #827717, #9E8E00)',
    darkBg: '#827717',
    status: 'sprouting',
    entries: [],
  },
  {
    id: 'space',
    title: 'Big Questions: Is Space Infinite?',
    subtitle: 'Astronomy · Physics · Philosophy',
    icon: '🌌',
    type: 'bigquestion',
    typeLabel: '🤔 Big Question',
    bg: 'linear-gradient(135deg, #1a0040, #311B92)',
    darkBg: '#1a0040',
    status: 'sprouting',
    entries: [],
  },
]

const INITIAL_ACTIVE_PROJECT: Project = {
  id: 'rainforest',
  title: 'Why Are Rainforests Disappearing?',
  subtitle: 'A living investigation — add to it whenever your knowledge grows',
  icon: '🌿',
  type: 'bigquestion',
  typeLabel: '🤔 Big Question',
  bg: 'linear-gradient(135deg, #0a2e14, #1e5c2a)',
  darkBg: '#0a2e14',
  status: 'growing',
  entries: [
    {
      date: '3 weeks ago',
      text: 'Discovered that rainforests cover only 6% of Earth\'s surface but contain more than half of all plant and animal species. Drew a diagram of the four layers — emergent, canopy, understorey and forest floor.',
      type: '🔬 Research',
    },
    {
      date: '2 weeks ago',
      text: 'Found out that cattle farming is responsible for 80% of Amazon deforestation. Also found 4 products in our kitchen containing palm oil — including our peanut butter! We\'re switching brands.',
      type: '🕵️ Investigation',
    },
    {
      date: 'Last week',
      text: 'Wrote both sides of the argument: "Should wealthy countries pay developing nations to protect their forests?" I changed my mind halfway through writing it — I started against and ended up for. That felt important.',
      type: '✍️ Writing',
    },
  ],
}

export default function ProjectCorner({ profile, onXPGain }: ProjectCornerProps) {
  const [activeProject, setActiveProject] = useState<Project>(INITIAL_ACTIVE_PROJECT)
  const [availableProjects, setAvailableProjects] = useState<Project[]>(AVAILABLE_PROJECTS)
  const [entryText, setEntryText] = useState('')
  const [selectedType, setSelectedType] = useState('🔬 Research')
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [showStartConfirm, setShowStartConfirm] = useState<Project | null>(null)

  function toast(msg: string) {
    setToastMsg(msg)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
  }

  function addEntry() {
    if (!entryText.trim()) return
    const newEntry: Entry = {
      date: 'Just now',
      text: entryText.trim(),
      type: selectedType,
    }
    const updatedProject = {
      ...activeProject,
      entries: [...activeProject.entries, newEntry],
      status: activeProject.entries.length >= 4 ? 'blooming' : activeProject.entries.length >= 2 ? 'growing' : 'sprouting',
    }
    setActiveProject(updatedProject)
    setEntryText('')
    onXPGain(30)
    toast('+30 XP 🌱 Entry added!')
    confetti()
  }

  function startProject(project: Project) {
    setShowStartConfirm(null)
    const newProject = { ...project, entries: [] }
    setActiveProject(newProject)
    setAvailableProjects(prev => prev.filter(p => p.id !== project.id))
    onXPGain(10)
    toast('🗺️ Project started! +10 XP')
    confetti()
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

  const statusInfo = STATUS_LABELS[activeProject.status] || STATUS_LABELS.sprouting

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

      {showStartConfirm && (
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
            padding: '30px',
            maxWidth: '440px',
            width: '100%',
            textAlign: 'center',
            animation: 'fadeUp 0.3s ease',
          }}>
            <div style={{ fontSize: '56px', marginBottom: '12px' }}>{showStartConfirm.icon}</div>
            <div style={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: '22px',
              color: '#145a28',
              marginBottom: '8px',
            }}>{showStartConfirm.title}</div>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#666',
              marginBottom: '8px',
              lineHeight: 1.5,
            }}>{showStartConfirm.subtitle}</div>
            <div style={{
              background: '#E8F5E9',
              borderRadius: '14px',
              padding: '12px 16px',
              marginBottom: '20px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#1b5e20',
              lineHeight: 1.5,
            }}>
              💡 This project will always stay open. Come back to it any time — today, next week, or in six months. Every entry makes it richer.
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setShowStartConfirm(null)}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '14px',
                  border: '2.5px solid #e0e0e0',
                  background: '#fff',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  color: '#666',
                }}
              >
                Not yet
              </button>
              <button
                onClick={() => startProject(showStartConfirm)}
                style={{
                  flex: 2,
                  padding: '12px',
                  borderRadius: '14px',
                  border: 'none',
                  background: '#145a28',
                  color: '#fff',
                  fontFamily: "'Fredoka One', sans-serif",
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
              >
                Start this project! 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{
        background: '#0a2e14',
        padding: '20px 32px 16px',
        flexShrink: 0,
      }}>
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
              background: '#FFE135',
              color: '#145a28',
              fontSize: '11px',
              fontWeight: 900,
              padding: '4px 14px',
              borderRadius: '20px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}>
              🗺️ Project Corner
            </div>
            <div style={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: '26px',
              color: '#fff',
              marginBottom: '4px',
            }}>
              {profile.learnerName}&apos;s Projects
            </div>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.6)',
            }}>
              Projects never close — add to them whenever your knowledge grows
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { val: activeProject.entries.length, label: 'Entries' },
              { val: profile.xp, label: 'Total XP' },
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

      <div style={{
        flex: 1,
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr 320px',
      }}>
        <div style={{ overflowY: 'auto', padding: '20px 24px' }}>
          <div style={{
            borderRadius: '22px',
            overflow: 'hidden',
            marginBottom: '20px',
            boxShadow: '0 6px 0 rgba(0,0,0,0.18), 0 10px 28px rgba(0,0,0,0.12)',
          }}>
            <div style={{
              background: activeProject.bg,
              padding: '28px 28px 24px',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '160px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
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
              <div style={{
                position: 'absolute',
                bottom: '-60px',
                left: '60px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.04)',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.18)',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 900,
                  padding: '4px 14px',
                  borderRadius: '20px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}>
                  {activeProject.typeLabel}
                </div>
                <div style={{
                  fontFamily: "'Fredoka One', sans-serif",
                  fontSize: '26px',
                  color: '#fff',
                  marginBottom: '6px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                }}>
                  {activeProject.icon} {activeProject.title}
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.8)',
                }}>
                  {activeProject.subtitle}
                </div>
              </div>
            </div>

            <div style={{ background: '#fff', padding: '22px 26px' }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '16px',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 900,
                  padding: '4px 13px',
                  borderRadius: '14px',
                  background: '#E8F5E9',
                  color: '#1b5e20',
                }}>🌿 Natural World</span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 900,
                  padding: '4px 13px',
                  borderRadius: '14px',
                  background: '#FFF9C4',
                  color: '#5a3000',
                }}>⭐ {activeProject.entries.length * 30} XP earned</span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 900,
                  padding: '4px 13px',
                  borderRadius: '14px',
                  background: statusInfo.bg,
                  color: statusInfo.color,
                }}>{statusInfo.label}</span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#666',
                }}>{activeProject.entries.length} entries</span>
              </div>

              <div style={{
                background: '#edfaf1',
                border: '2px solid #81C784',
                borderRadius: '12px',
                padding: '10px 14px',
                marginBottom: '18px',
                fontSize: '13px',
                fontWeight: 700,
                color: '#1b5e20',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ fontSize: '18px' }}>🔓</span>
                This project never closes. Come back any time — today, next week, or in six months. Every entry makes it richer.
              </div>

              <div style={{
                fontFamily: "'Fredoka One', sans-serif",
                fontSize: '16px',
                color: '#1a1a1a',
                marginBottom: '14px',
              }}>
                Project Journal
              </div>

              {activeProject.entries.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: '#f9f9f6',
                  borderRadius: '14px',
                  marginBottom: '16px',
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>✏️</div>
                  <div style={{
                    fontFamily: "'Fredoka One', sans-serif",
                    fontSize: '16px',
                    color: '#aaa',
                    marginBottom: '4px',
                  }}>No entries yet!</div>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#ccc',
                  }}>Add your first entry below to start your project journal</div>
                </div>
              )}

              {activeProject.entries.map((entry, i) => {
                const typeStyle = TYPE_COLORS[entry.type] || { bg: '#f5f5f5', color: '#555' }
                return (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '14px',
                    paddingBottom: '14px',
                    borderBottom: i < activeProject.entries.length - 1 ? '1px solid #f0f0f0' : 'none',
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#1e8c3a',
                        flexShrink: 0,
                        marginTop: '4px',
                      }} />
                      {i < activeProject.entries.length - 1 && (
                        <div style={{ width: '2px', flex: 1, background: '#e0e0e0', minHeight: '20px' }} />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#666',
                        marginBottom: '4px',
                      }}>{entry.date}</div>
                      <div style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        lineHeight: 1.6,
                        marginBottom: '6px',
                      }}>{entry.text}</div>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: 900,
                        padding: '2px 9px',
                        borderRadius: '8px',
                        background: typeStyle.bg,
                        color: typeStyle.color,
                      }}>{entry.type}</span>
                    </div>
                  </div>
                )
              })}

              <div style={{
                background: '#f9f9f6',
                border: '2px solid #e0e0e0',
                borderRadius: '16px',
                padding: '16px',
                marginTop: '16px',
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 900,
                  color: '#145a28',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  ➕ Add something new to this project
                </div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#666',
                  marginBottom: '7px',
                }}>What type of entry is this?</div>
                <div style={{
                  display: 'flex',
                  gap: '6px',
                  flexWrap: 'wrap',
                  marginBottom: '12px',
                }}>
                  {Object.keys(TYPE_COLORS).map(type => (
                    <div
                      key={type}
                      onClick={() => setSelectedType(type)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '12px',
                        border: `2px solid ${selectedType === type ? '#1e8c3a' : '#e0e0e0'}`,
                        background: selectedType === type ? '#edfaf1' : '#fff',
                        color: selectedType === type ? '#145a28' : '#666',
                        fontSize: '11px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                    >
                      {type}
                    </div>
                  ))}
                </div>
                <textarea
                  value={entryText}
                  onChange={e => setEntryText(e.target.value)}
                  placeholder="Write your new entry here — a discovery, a thought, something you did in the real world, an opinion that changed..."
                  style={{
                    width: '100%',
                    padding: '10px 13px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '11px',
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    outline: 'none',
                    resize: 'none',
                    minHeight: '80px',
                    color: '#1a1a1a',
                    marginBottom: '10px',
                  }}
                />
                <button
                  onClick={addEntry}
                  disabled={!entryText.trim()}
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: '12px',
                    background: entryText.trim() ? '#145a28' : '#e0e0e0',
                    color: entryText.trim() ? '#fff' : '#aaa',
                    border: 'none',
                    fontFamily: "'Fredoka One', sans-serif",
                    fontSize: '16px',
                    cursor: entryText.trim() ? 'pointer' : 'not-allowed',
                    transition: 'all 0.15s',
                  }}
                >
                  Add to my project! +30 XP 🌱
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          overflowY: 'auto',
          background: '#f0f7ff',
          borderLeft: '1px solid rgba(0,0,0,0.07)',
          padding: '20px 16px',
        }}>
          <div style={{
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '15px',
            color: '#1a1a1a',
            marginBottom: '6px',
          }}>🗺️ More Projects</div>
          <div style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#666',
            marginBottom: '14px',
            lineHeight: 1.5,
          }}>
            Start a new project anytime — they all stay open and grow with you
          </div>

          {availableProjects.map(project => (
            <div
              key={project.id}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '12px',
                boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{
                background: project.bg,
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{ fontSize: '26px', width: '36px', textAlign: 'center', flexShrink: 0 }}>
                  {project.icon}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "'Fredoka One', sans-serif",
                    fontSize: '14px',
                    color: '#fff',
                    marginBottom: '2px',
                  }}>{project.title}</div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.65)',
                  }}>{project.subtitle}</div>
                </div>
              </div>
              <button
                onClick={() => setShowStartConfirm(project)}
                style={{
                  width: '100%',
                  padding: '9px',
                  border: 'none',
                  background: '#fff',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '12px',
                  fontWeight: 900,
                  cursor: 'pointer',
                  color: project.darkBg,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
                onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
              >
                Start this project →
              </button>
            </div>
          ))}

          <div style={{
            background: '#E8F5E9',
            borderRadius: '14px',
            padding: '14px',
            marginTop: '8px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#1b5e20',
            lineHeight: 1.6,
          }}>
            💡 <strong>Projects never close.</strong> Start something today and come back in six months with new knowledge. Every entry makes it richer.
          </div>
        </div>
      </div>
    </div>
  )
}