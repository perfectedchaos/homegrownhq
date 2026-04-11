'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { SUBJECTS } from '../data/subjects'
import type { SubjectData, Session, QuizQuestion } from '../data/subjects'

interface Profile {
  learnerName: string
  parentName: string
  character: string
  band: string
  bandIcon: string
  bandLabel: string
  xp: number
  streak: number
  profileId?: string
}

interface SkillBuilderProps {
  profile: Profile
  onXPGain: (amount: number) => void
}

type BandKey = 'sprout' | 'climber' | 'bloomer' | 'grower'

export default function SkillBuilder({ profile, onXPGain }: SkillBuilderProps) {
  const [activeSubjectId, setActiveSubjectId] = useState(SUBJECTS[0].id)
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({})
  const [openSteps, setOpenSteps] = useState<Record<string, boolean>>({ [`${SUBJECTS[0].id}-0-0`]: true })
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, string>>({})
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalXP, setModalXP] = useState(0)
  const [modalMsg, setModalMsg] = useState('')

  const bandKey = (profile.band || 'sprout') as BandKey
  const activeSubject = SUBJECTS.find(s => s.id === activeSubjectId) || SUBJECTS[0]
  const sessions: Session[] = activeSubject.bands[bandKey] || []

  function isSessionUnlocked(sessionIdx: number): boolean {
    if (sessionIdx === 0) return true
    const prevSession = sessions[sessionIdx - 1]
    if (!prevSession.steps.length) return false
    return completedSteps[`${activeSubjectId}-${sessionIdx - 1}-${prevSession.steps.length - 1}`] === true
  }

  function isStepUnlocked(sessionIdx: number, stepIdx: number): boolean {
    if (sessionIdx === 0 && stepIdx === 0) return true
    if (stepIdx > 0) return completedSteps[`${activeSubjectId}-${sessionIdx}-${stepIdx - 1}`] === true
    if (stepIdx === 0 && sessionIdx > 0) {
      const prevSession = sessions[sessionIdx - 1]
      if (!prevSession.steps.length) return false
      return completedSteps[`${activeSubjectId}-${sessionIdx - 1}-${prevSession.steps.length - 1}`] === true
    }
    return false
  }

  function toggleStep(key: string) {
    setOpenSteps(prev => ({ ...prev, [key]: !prev[key] }))
  }

  async function completeStep(sessionIdx: number, stepIdx: number, xp: number, msg: string) {
    const key = `${activeSubjectId}-${sessionIdx}-${stepIdx}`
    if (completedSteps[key]) return
    setCompletedSteps(prev => ({ ...prev, [key]: true }))
    onXPGain(xp)
    setToastMsg(`+${xp} XP ⚡`)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
    setModalXP(xp)
    setModalMsg(msg)
    setShowModal(true)
    const nextKey = `${activeSubjectId}-${sessionIdx}-${stepIdx + 1}`
    setTimeout(() => {
      setOpenSteps(prev => ({ ...prev, [key]: false, [nextKey]: true }))
    }, 300)
    if (profile.profileId) {
      try {
        await supabase.from('completed_steps').upsert({ profile_id: profile.profileId, step_key: key })
      } catch (err) {
        console.error('Error saving step:', err)
      }
    }
  }

  function answerQuestion(qKey: string, answer: string) {
    if (answeredQuestions[qKey]) return
    setAnsweredQuestions(prev => ({ ...prev, [qKey]: answer }))
    if (answer === 'correct') {
      onXPGain(15)
      setToastMsg('+15 XP ⚡')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
    }
  }

  function canCompleteStep(sessionIdx: number, stepIdx: number, type: string): boolean {
    if (type !== 'quiz') return true
    const session = sessions[sessionIdx]
    const quizStep = session?.steps[stepIdx]
    if (!quizStep?.quizContent) return true
    return quizStep.quizContent.every(q => answeredQuestions[q.id])
  }

  function getStepTypeLabel(type: string) {
    switch (type) {
      case 'learn': return 'Read together · 5 min'
      case 'activity': return 'Do together · 10 min'
      case 'quiz': return '3 questions · 8 min'
      case 'mission': return 'Go outside · Earn bonus XP'
      default: return ''
    }
  }

  function getCompleteButtonText(type: string) {
    switch (type) {
      case 'learn': return "I've read this! ✅"
      case 'activity': return "We did this together! 🌱"
      case 'quiz': return "Claim my quiz XP! ⭐"
      case 'mission': return "I did my mission! 📸"
      default: return "Done! ✅"
    }
  }

  function getCompletionMessage(type: string) {
    if (type === 'learn') return '🌿 Great reading! Keep going to the next step!'
    if (type === 'activity') return '🌱 Amazing! You did it together!'
    if (type === 'quiz') return '🧠 Quiz complete! You really know your stuff!'
    if (type === 'mission') return '📸 Real-world mission done!'
    return 'Step complete!'
  }

  function renderLearnContent(session: Session, stepIdx: number) {
    const step = session.steps[stepIdx]
    if (!step?.learnContent) return <div style={{ padding: '16px', background: '#f9f9f6', borderRadius: '14px', fontSize: '14px', fontWeight: 700, color: '#666', textAlign: 'center' }}>Content coming soon!</div>
    const { intro, facts } = step.learnContent
    return (
      <div>
        <div style={{ background: '#FFF8E1', border: '2px solid #FFD93D', borderRadius: '14px', padding: '16px 18px', marginBottom: '12px', fontSize: '15px', fontWeight: 700, lineHeight: 1.6, color: '#1a1a1a' }}>
          <span style={{ fontSize: '28px', display: 'block', marginBottom: '8px' }}>📖</span>
          {intro}
        </div>
        {facts.map((fact, i) => (
          <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: '#E8F5E9', border: '2px solid #81C784', borderRadius: '12px', padding: '10px 14px', marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: '#1b5e20', lineHeight: 1.5 }}>
            <span style={{ fontSize: '18px', flexShrink: 0 }}>{fact.icon}</span>
            <span>{fact.text}</span>
          </div>
        ))}
      </div>
    )
  }

  function renderActivityContent(session: Session, stepIdx: number) {
    const step = session.steps[stepIdx]
    if (!step?.activityContent) return <div style={{ padding: '16px', background: '#f9f9f6', borderRadius: '14px', fontSize: '14px', fontWeight: 700, color: '#666', textAlign: 'center' }}>Activity content coming soon!</div>
    const { childHears, doTogether, talkAbout } = step.activityContent
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ background: '#DCEEFF', border: '2.5px solid #7BB8F7', borderRadius: '14px', padding: '13px 16px' }}>
          <div style={{ fontSize: '10px', fontWeight: 900, color: '#0d5ca8', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '6px' }}>👂 What your child hears</div>
          <p style={{ fontSize: '17px', fontWeight: 800, color: '#0a3870', lineHeight: 1.5, margin: 0 }}>{childHears}</p>
        </div>
        <div style={{ background: '#D5F5E0', border: '2.5px solid #60D080', borderRadius: '14px', padding: '13px 16px' }}>
          <div style={{ fontSize: '10px', fontWeight: 900, color: '#145a28', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '6px' }}>🤝 What you do together</div>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#0d3a1a', lineHeight: 1.5, margin: 0 }}>{doTogether}</p>
        </div>
        <div style={{ background: '#FFE8CC', border: '2.5px solid #FFAB40', borderRadius: '14px', padding: '13px 16px' }}>
          <div style={{ fontSize: '10px', fontWeight: 900, color: '#a84800', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '6px' }}>💬 What to talk about</div>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#5a2800', lineHeight: 1.5, margin: 0 }}>{talkAbout}</p>
        </div>
      </div>
    )
  }

  function renderQuizContent(session: Session, stepIdx: number) {
    const step = session.steps[stepIdx]
    if (!step?.quizContent) return <div style={{ padding: '16px', background: '#f9f9f6', borderRadius: '14px', fontSize: '14px', fontWeight: 700, color: '#666', textAlign: 'center' }}>Quiz content coming soon!</div>
    const questions = step.quizContent
    const allAnswered = questions.every(q => answeredQuestions[q.id])
    return (
      <div>
        {questions.map((q, qi) => (
          <div key={q.id} style={{ background: '#f9f9f6', border: '2px solid #ebebeb', borderRadius: '14px', padding: '14px', marginBottom: '10px' }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#666', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '8px' }}>
              {q.type === 'mc' ? '🔘 Choose the right answer' : '✅ True or False?'}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '12px', lineHeight: 1.5 }}>{q.text}</div>
            {q.type === 'mc' && q.options && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {q.options.map((opt, oi) => {
                  const answered = answeredQuestions[q.id]
                  const isThisCorrect = opt.value === 'correct'
                  const wasChosen = answered === `${qi}-${oi}`
                  let bg = '#fff', border = '#e0e0e0', color = '#1a1a1a'
                  if (answered) {
                    if (wasChosen && answered === 'correct') { bg = '#E8F5E9'; border = '#4CAF50'; color = '#1b5e20' }
                    else if (wasChosen && answered !== 'correct') { bg = '#FFEBEE'; border = '#EF5350'; color = '#b71c1c' }
                    else if (isThisCorrect) { bg = '#E8F5E9'; border = '#4CAF50'; color = '#1b5e20' }
                  }
                  return (
                    <button key={oi} disabled={!!answered} onClick={() => answerQuestion(q.id, opt.value === 'correct' ? 'correct' : `${qi}-${oi}`)}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 13px', borderRadius: '11px', border: `2.5px solid ${border}`, background: bg, cursor: answered ? 'default' : 'pointer', fontSize: '13px', fontWeight: 700, color, textAlign: 'left', transition: 'all 0.15s' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: `2px solid ${border}`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', background: wasChosen || (answered && isThisCorrect) ? border : '#fff', color: '#fff' }}>
                        {wasChosen && answered === 'correct' && '✓'}
                        {wasChosen && answered !== 'correct' && '✕'}
                        {!wasChosen && answered && isThisCorrect && '✓'}
                      </div>
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            )}
            {q.type === 'tf' && (
              <div style={{ display: 'flex', gap: '8px' }}>
                {['True', 'False'].map(tf => {
                  const answered = answeredQuestions[q.id]
                  const isCorrect = tf === q.correctAnswer
                  const wasChosen = answered === tf
                  let bg = '#fff', border = '#e0e0e0', color = '#1a1a1a'
                  if (answered) {
                    if (wasChosen && isCorrect) { bg = '#E8F5E9'; border = '#4CAF50'; color = '#1b5e20' }
                    else if (wasChosen && !isCorrect) { bg = '#FFEBEE'; border = '#EF5350'; color = '#b71c1c' }
                    else if (isCorrect) { bg = '#E8F5E9'; border = '#4CAF50'; color = '#1b5e20' }
                  }
                  return (
                    <button key={tf} disabled={!!answered} onClick={() => answerQuestion(q.id, tf)}
                      style={{ flex: 1, padding: '12px', borderRadius: '12px', border: `2.5px solid ${border}`, background: bg, fontFamily: "'Fredoka One', sans-serif", fontSize: '18px', cursor: answered ? 'default' : 'pointer', color, transition: 'all 0.15s' }}>
                      {tf}
                    </button>
                  )
                })}
              </div>
            )}
            {answeredQuestions[q.id] && (
              <div style={{ marginTop: '10px', padding: '10px 13px', borderRadius: '11px', fontSize: '13px', fontWeight: 700, lineHeight: 1.5, ...(answeredQuestions[q.id] === 'correct' || answeredQuestions[q.id] === q.correctAnswer ? { background: '#E8F5E9', color: '#1b5e20', border: '2px solid #4CAF50' } : { background: '#FFEBEE', color: '#b71c1c', border: '2px solid #EF5350' }) }}>
                {(answeredQuestions[q.id] === 'correct' || answeredQuestions[q.id] === q.correctAnswer) ? q.correctFb : q.wrongFb}
              </div>
            )}
          </div>
        ))}
        {allAnswered && (
          <div style={{ background: '#E8F5E9', border: '2px solid #4CAF50', borderRadius: '14px', padding: '12px 16px', fontSize: '14px', fontWeight: 800, color: '#1b5e20', textAlign: 'center', marginTop: '4px' }}>
            🎉 All questions answered! Hit the button below to claim your XP!
          </div>
        )}
      </div>
    )
  }

  function renderMissionContent(session: Session, stepIdx: number) {
    const step = session.steps[stepIdx]
    if (!step?.missionContent) return null
    const { title, desc, note } = step.missionContent
    return (
      <div>
        <div style={{ background: 'linear-gradient(135deg, #FF6B35, #FF9558)', borderRadius: '14px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', boxShadow: '0 3px 0 #cc4000' }}>
          <span style={{ fontSize: '26px', flexShrink: 0 }}>🔍</span>
          <div>
            <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '17px', color: '#fff' }}>{title}</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.88)', marginTop: '3px', lineHeight: 1.5 }}>{desc}</div>
          </div>
        </div>
        <div style={{ background: '#FFF8E1', border: '2px solid #FFD93D', borderRadius: '13px', padding: '12px 14px', fontSize: '13px', fontWeight: 700, color: '#5a3000', lineHeight: 1.5 }}>{note}</div>
      </div>
    )
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {showToast && (
        <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 9999, background: '#FFE135', color: '#145a28', fontFamily: "'Fredoka One', sans-serif", fontSize: '18px', padding: '10px 22px', borderRadius: '30px', boxShadow: '0 6px 20px rgba(0,0,0,0.2)', animation: 'fadeUp 0.3s ease' }}>
          {toastMsg}
        </div>
      )}

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 8888, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', borderRadius: '26px', padding: '30px', maxWidth: '420px', width: '100%', textAlign: 'center', animation: 'fadeUp 0.3s ease' }}>
            <div style={{ fontSize: '56px', marginBottom: '10px' }}>⭐</div>
            <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '26px', color: '#145a28', marginBottom: '6px' }}>Step Complete!</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#666', marginBottom: '18px', lineHeight: 1.5 }}>{modalMsg}</div>
            <div style={{ background: '#edfaf1', borderRadius: '16px', padding: '14px', marginBottom: '18px' }}>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '38px', color: '#145a28' }}>+{modalXP} XP</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e8c3a' }}>added to your journey</div>
            </div>
            <button onClick={() => setShowModal(false)} style={{ width: '100%', padding: '13px', borderRadius: '14px', background: '#145a28', color: '#fff', border: 'none', fontFamily: "'Fredoka One', sans-serif", fontSize: '18px', cursor: 'pointer' }}>
              Keep going! 🚀
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <div style={{ background: '#0a2e14', padding: '20px 32px 16px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'inline-block', background: '#FFE135', color: '#145a28', fontSize: '11px', fontWeight: 900, padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>📚 Skill Builder</div>
            <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '28px', color: '#fff', lineHeight: 1, marginBottom: '4px' }}>{profile.learnerName}&apos;s Learning Journey</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>{profile.bandIcon} {profile.bandLabel} · Keep going — every step counts!</div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[{ val: profile.xp, label: 'Total XP' }, { val: profile.streak, label: 'Day Streak 🔥' }].map(stat => (
              <div key={stat.label} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '10px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '20px', color: '#FFE135' }}>{stat.val}</div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subject tabs */}
      <div style={{ display: 'flex', background: '#145a28', flexShrink: 0, overflowX: 'auto' }}>
        {SUBJECTS.map(subject => (
          <button key={subject.id} onClick={() => setActiveSubjectId(subject.id)}
            style={{ flex: 1, padding: '12px 8px', fontFamily: "'Fredoka One', sans-serif", fontSize: '15px', color: activeSubjectId === subject.id ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', background: 'none', cursor: 'pointer', borderBottom: activeSubjectId === subject.id ? '3px solid #FFE135' : '3px solid transparent', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
            {subject.icon} {subject.name}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 300px' }}>

        {/* Sessions column */}
        <div style={{ overflowY: 'auto', padding: '20px 24px' }}>
          {sessions.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px', background: '#f9f9f6', borderRadius: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🌱</div>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '22px', color: '#aaa', marginBottom: '6px' }}>Content coming soon!</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#ccc' }}>This band is being built right now. Check back soon!</div>
            </div>
          )}
          {sessions.map((session, sessionIdx) => {
            const unlocked = isSessionUnlocked(sessionIdx)
            const completedCount = session.steps.filter((_, si) => completedSteps[`${activeSubjectId}-${sessionIdx}-${si}`]).length
            const pct = session.steps.length ? Math.round((completedCount / session.steps.length) * 100) : 0
            return (
              <div key={sessionIdx} style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '16px', boxShadow: unlocked ? '0 5px 0 rgba(0,0,0,0.14), 0 8px 22px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.06)', opacity: unlocked ? 1 : 0.65 }}>
                <div style={{ background: unlocked ? `linear-gradient(135deg, ${activeSubject.color}, ${activeSubject.darkColor})` : 'linear-gradient(135deg, #555, #444)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '13px', background: 'rgba(255,255,255,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>{session.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '18px', color: unlocked ? '#fff' : 'rgba(255,255,255,0.5)', lineHeight: 1.1 }}>{session.title}</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: unlocked ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{session.steps.length} steps · {session.xp} XP</div>
                  </div>
                  {unlocked ? <div style={{ padding: '3px 11px', borderRadius: '12px', background: 'rgba(255,255,255,0.16)', color: '#fff', fontSize: '11px', fontWeight: 900 }}>{completedCount} / {session.steps.length}</div> : <div style={{ fontSize: '20px', opacity: 0.55 }}>🔒</div>}
                </div>

                {unlocked && session.steps.length > 0 && (
                  <div style={{ padding: '0 18px 10px', background: `linear-gradient(135deg, ${activeSubject.color}, ${activeSubject.darkColor})` }}>
                    <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '20px', height: '6px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: '#FFE135', borderRadius: '20px', transition: 'width 0.8s ease' }} />
                    </div>
                  </div>
                )}

                {unlocked && session.steps.length > 0 && (
                  <div style={{ background: '#fff' }}>
                    {session.steps.map((step, stepIdx) => {
                      const stepKey = `${activeSubjectId}-${sessionIdx}-${stepIdx}`
                      const stepUnlocked = isStepUnlocked(sessionIdx, stepIdx)
                      const isDone = completedSteps[stepKey]
                      const isOpen = openSteps[stepKey]
                      const canComplete = canCompleteStep(sessionIdx, stepIdx, step.type)
                      return (
                        <div key={stepIdx} style={{ borderBottom: stepIdx < session.steps.length - 1 ? '2px dashed #eee' : 'none' }}>
                          <div onClick={() => stepUnlocked && toggleStep(stepKey)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', cursor: stepUnlocked ? 'pointer' : 'default', background: isOpen ? '#fafafa' : 'transparent' }}>
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: `3px solid ${isDone ? '#1e8c3a' : stepUnlocked ? '#FFE135' : '#ddd'}`, background: isDone ? '#1e8c3a' : stepUnlocked ? '#FFE135' : '#fff', color: isDone ? '#fff' : stepUnlocked ? '#145a28' : '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 900, flexShrink: 0, transition: 'all 0.3s' }}>
                              {isDone ? '✓' : stepIdx + 1}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: '13px', fontWeight: 800, color: isDone ? '#1e8c3a' : stepUnlocked ? '#1a1a1a' : '#bbb', textDecoration: isDone ? 'line-through' : 'none' }}>{step.title}</div>
                              <div style={{ fontSize: '11px', fontWeight: 700, color: stepUnlocked ? '#666' : '#ddd', marginTop: '1px' }}>{getStepTypeLabel(step.type)}</div>
                            </div>
                            <div style={{ fontSize: '10px', fontWeight: 900, padding: '3px 9px', borderRadius: '10px', background: isDone ? '#d4f0dd' : stepUnlocked ? '#FFE135' : '#f0f0f0', color: isDone ? '#145a28' : stepUnlocked ? '#145a28' : '#ccc', flexShrink: 0 }}>+{step.xp} XP</div>
                            {stepUnlocked && <div style={{ fontSize: '11px', color: '#ccc', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>▼</div>}
                          </div>

                          {isOpen && stepUnlocked && (
                            <div style={{ padding: '0 16px 16px', animation: 'fadeUp 0.2s ease' }}>
                              {step.type === 'learn' && renderLearnContent(session, stepIdx)}
                              {step.type === 'activity' && renderActivityContent(session, stepIdx)}
                              {step.type === 'quiz' && renderQuizContent(session, stepIdx)}
                              {step.type === 'mission' && renderMissionContent(session, stepIdx)}

                              {!isDone && (
                                <button disabled={!canComplete} onClick={() => completeStep(sessionIdx, stepIdx, step.xp, getCompletionMessage(step.type))}
                                  style={{ width: '100%', padding: '12px', borderRadius: '13px', border: 'none', fontFamily: "'Fredoka One', sans-serif", fontSize: '16px', color: canComplete ? '#145a28' : '#aaa', background: canComplete ? '#FFE135' : '#e0e0e0', cursor: canComplete ? 'pointer' : 'not-allowed', marginTop: '10px', boxShadow: canComplete ? '0 4px 0 #c9a800' : '0 4px 0 #c8c8c8', transition: 'all 0.2s' }}>
                                  {canComplete ? getCompleteButtonText(step.type) : 'Answer all questions first! 🔒'}
                                </button>
                              )}
                              {isDone && (
                                <div style={{ width: '100%', padding: '12px', borderRadius: '13px', background: '#E8F5E9', border: '2px solid #4CAF50', fontFamily: "'Fredoka One', sans-serif", fontSize: '16px', color: '#1b5e20', textAlign: 'center', marginTop: '10px' }}>
                                  ✅ Done! +{step.xp} XP earned
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}

                {!unlocked && (
                  <div style={{ background: '#fff', padding: '18px', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '5px' }}>🔒</div>
                    <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '16px', color: '#bbb' }}>Complete the previous session to unlock!</div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#ccc', marginTop: '2px' }}>{session.xp} XP waiting for you</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Sidebar */}
        <div style={{ overflowY: 'auto', background: '#f7f7f3', borderLeft: '1px solid rgba(0,0,0,0.07)', padding: '20px 16px' }}>
          <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '16px', color: '#1a1a1a', marginBottom: '14px' }}>🔭 Coming Up Next</div>
          {sessions.filter((_, i) => !completedSteps[`${activeSubjectId}-${i}-${sessions[i]?.steps.length - 1}`]).slice(0, 4).map((session, i) => (
            <div key={i} style={{ border: '2px dashed #ddd', borderRadius: '16px', padding: '14px', marginBottom: '10px', background: '#fafafa', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '9px', right: '-18px', background: '#FFE135', color: '#145a28', fontSize: '9px', fontWeight: 900, letterSpacing: '0.04em', padding: '2px 24px', transform: 'rotate(35deg)' }}>Soon!</div>
              <div style={{ fontSize: '28px', marginBottom: '6px' }}>{session.icon}</div>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '14px', color: '#aaa', marginBottom: '3px' }}>{session.title}</div>
              <div style={{ fontSize: '10px', fontWeight: 900, color: '#ccc', padding: '2px 9px', borderRadius: '10px', background: '#eee', display: 'inline-block' }}>{session.xp} XP</div>
            </div>
          ))}
          <div style={{ background: 'linear-gradient(135deg, #0a2e14, #1a3d20)', borderRadius: '16px', padding: '14px', marginTop: '8px' }}>
            <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '14px', color: '#fff', marginBottom: '6px' }}>📊 {profile.learnerName}&apos;s Stats</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                { val: Object.keys(completedSteps).filter(k => k.startsWith(activeSubjectId)).length, label: 'Steps done' },
                { val: profile.xp, label: 'Total XP' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '20px', color: '#FFE135' }}>{stat.val}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}