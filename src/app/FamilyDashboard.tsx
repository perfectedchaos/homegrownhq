'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

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

interface FamilyDashboardProps {
  userId: string
  parentName: string
  onSelectLearner: (learner: Learner) => void
  onAddLearner: () => void
  onSignOut: () => void
}

const BAND_LABELS: Record<string, { label: string; icon: string; color: string; bg: string }> = {
  sprout: { label: 'Sprouts', icon: '🌱', color: '#FF8C00', bg: '#FFF3E0' },
  climber: { label: 'Climbers', icon: '🧗', color: '#1976D2', bg: '#E8F5FF' },
  bloomer: { label: 'Bloomers', icon: '🌸', color: '#6A0080', bg: '#F9F0FF' },
  grower: { label: 'Growers', icon: '🌳', color: '#1a5c2a', bg: '#edfaf1' },
}

export default function FamilyDashboard({ userId, parentName, onSelectLearner, onAddLearner, onSignOut }: FamilyDashboardProps) {
  const [learners, setLearners] = useState<Learner[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadLearners() {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: true })
        if (error) throw error
        setLearners(data || [])
      } catch (err) {
        console.error('Error loading learners:', err)
      } finally {
        setLoading(false)
      }
    }
    loadLearners()
  }, [userId])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a2e14',
      fontFamily: "'Nunito', sans-serif",
      padding: '0',
    }}>

      {/* Header */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          fontFamily: "'Fredoka One', sans-serif", fontSize: '22px', color: '#fff',
        }}>
          <div style={{
            width: '32px', height: '32px', background: '#FFE135',
            borderRadius: '50% 0 50% 50%', transform: 'rotate(-45deg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ transform: 'rotate(45deg)', fontSize: '16px' }}>🌿</span>
          </div>
          HomeGrown<span style={{ color: '#FFE135' }}>Skills</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>
            Hi, {parentName}!
          </span>
          <button
            onClick={onSignOut}
            style={{
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.6)', padding: '8px 16px', borderRadius: '20px',
              fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: '48px 32px', maxWidth: '900px', margin: '0 auto' }}>

        <div style={{ marginBottom: '40px' }}>
          <div style={{
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '36px', color: '#fff', marginBottom: '8px',
          }}>
            Your Family Dashboard 🏡
          </div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>
            Who&apos;s learning today?
          </div>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '16px', fontWeight: 700, padding: '48px' }}>
            Loading your family...
          </div>
        )}

        {!loading && learners.length === 0 && (
          <div style={{
            textAlign: 'center', padding: '48px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '24px',
            border: '2px dashed rgba(255,255,255,0.15)',
          }}>
            <div style={{ fontSize: '56px', marginBottom: '16px' }}>🌱</div>
            <div style={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: '24px', color: '#fff', marginBottom: '8px',
            }}>
              Add your first learner to get started!
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
              You can add more learners any time from this dashboard
            </div>
            <button
              onClick={onAddLearner}
              style={{
                padding: '14px 32px',
                background: '#FFE135', color: '#1a5c2a',
                border: 'none', borderRadius: '20px',
                fontFamily: "'Fredoka One', sans-serif", fontSize: '18px',
                cursor: 'pointer', boxShadow: '0 4px 0 #c9a800',
              }}
            >
              Add First Learner 🌱
            </button>
          </div>
        )}

        {!loading && learners.length > 0 && (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '24px',
            }}>
              {learners.map(learner => {
                const band = BAND_LABELS[learner.band] || BAND_LABELS.sprout
                return (
                  <div
                    key={learner.id}
                    onClick={() => onSelectLearner(learner)}
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '2px solid rgba(255,255,255,0.1)',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.border = '2px solid rgba(255,225,53,0.4)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.border = '2px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    {/* Card header */}
                    <div style={{
                      padding: '28px 24px 20px',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      <div style={{ fontSize: '52px', marginBottom: '10px' }}>
                        {learner.character}
                      </div>
                      {learner.avatar_title && (
                        <div style={{
                          fontSize: '11px', fontWeight: 900,
                          color: '#FFE135',
                          letterSpacing: '0.06em', textTransform: 'uppercase',
                          marginBottom: '6px',
                        }}>
                          {learner.avatar_title}
                        </div>
                      )}
                      <div style={{
                        fontFamily: "'Fredoka One', sans-serif",
                        fontSize: '24px', color: '#fff', marginBottom: '6px',
                      }}>
                        {learner.learner_name}
                      </div>
                      <div style={{
                        display: 'inline-block',
                        background: band.bg,
                        color: band.color,
                        fontSize: '12px', fontWeight: 900,
                        padding: '4px 14px', borderRadius: '20px',
                      }}>
                        {band.icon} {band.label}
                      </div>
                    </div>

                    {/* Stats */}
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr',
                      padding: '16px 24px', gap: '12px',
                    }}>
                      {[
                        { val: learner.xp || 0, label: 'XP' },
                        { val: `${learner.streak || 0} days`, label: 'Streak 🔥' },
                      ].map(stat => (
                        <div key={stat.label} style={{ textAlign: 'center' }}>
                          <div style={{
                            fontFamily: "'Fredoka One', sans-serif",
                            fontSize: '20px', color: '#FFE135',
                          }}>{stat.val}</div>
                          <div style={{
                            fontSize: '11px', fontWeight: 700,
                            color: 'rgba(255,255,255,0.45)',
                            textTransform: 'uppercase', letterSpacing: '0.04em',
                          }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      padding: '12px 24px',
                      background: 'rgba(255,225,53,0.1)',
                      textAlign: 'center',
                      fontFamily: "'Fredoka One', sans-serif",
                      fontSize: '15px', color: '#FFE135',
                    }}>
                      Start learning →
                    </div>
                  </div>
                )
              })}

              {/* Add learner card */}
              <div
                onClick={onAddLearner}
                style={{
                  background: 'transparent',
                  border: '2px dashed rgba(255,255,255,0.2)',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: '40px 24px', textAlign: 'center',
                  transition: 'all 0.2s',
                  minHeight: '280px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,225,53,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>➕</div>
                <div style={{
                  fontFamily: "'Fredoka One', sans-serif",
                  fontSize: '18px', color: 'rgba(255,255,255,0.6)',
                  marginBottom: '6px',
                }}>Add a learner</div>
                <div style={{
                  fontSize: '13px', fontWeight: 700,
                  color: 'rgba(255,255,255,0.35)',
                }}>
                  One subscription, unlimited learners
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}