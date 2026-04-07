'use client'
import { supabase } from '../lib/supabase'
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
  profileId?: string
}

interface SkillBuilderProps {
  profile: Profile
  onXPGain: (amount: number) => void
}

const SUBJECTS = [
  { id: 'natural', icon: '🌿', name: 'The Natural World', color: '#1e8c3a', darkColor: '#0d5c26' },
  { id: 'money', icon: '💰', name: 'Money Skills', color: '#FF8C00', darkColor: '#c46000' },
]

const SPROUT_SESSIONS: Record<string, {
  title: string
  icon: string
  xp: number
  steps: {
    title: string
    type: 'learn' | 'activity' | 'quiz' | 'mission'
    xp: number
    content: React.ReactNode
  }[]
}[]> = {
  natural: [
    {
      title: 'What Makes Something Alive?',
      icon: '🌱',
      xp: 180,
      steps: [
        {
          title: '🌿 Let\'s Learn — Living Things!',
          type: 'learn',
          xp: 20,
          content: null,
        },
        {
          title: '🤝 Family Activity — Grow Like a Seed!',
          type: 'activity',
          xp: 40,
          content: null,
        },
        {
          title: '🧠 Quiz — Test What You Know!',
          type: 'quiz',
          xp: 80,
          content: null,
        },
        {
          title: '📸 Real World Mission!',
          type: 'mission',
          xp: 40,
          content: null,
        },
      ],
    },
    {
      title: 'The Four Seasons',
      icon: '🍂',
      xp: 200,
      steps: [],
    },
    {
      title: 'Mini Beasts!',
      icon: '🐛',
      xp: 180,
      steps: [],
    },
    {
      title: 'Oceans & Rivers',
      icon: '🌊',
      xp: 220,
      steps: [],
    },
    {
      title: 'Wild Animals & Food Chains',
      icon: '🦊',
      xp: 200,
      steps: [],
    },
  ],
  money: [
    {
      title: 'What is Money?',
      icon: '🪙',
      xp: 180,
      steps: [
        {
          title: '🌟 Let\'s Learn — Coins & Notes!',
          type: 'learn',
          xp: 20,
          content: null,
        },
        {
          title: '🤝 Family Activity — Coin Hunt!',
          type: 'activity',
          xp: 40,
          content: null,
        },
        {
          title: '🧠 Quiz — Show What You Know!',
          type: 'quiz',
          xp: 80,
          content: null,
        },
        {
          title: '📸 Real World Mission!',
          type: 'mission',
          xp: 40,
          content: null,
        },
      ],
    },
    {
      title: 'How Much is it Worth?',
      icon: '💷',
      xp: 180,
      steps: [],
    },
    {
      title: 'Counting Coins Together',
      icon: '🔢',
      xp: 180,
      steps: [],
    },
    {
      title: 'The Shop Game',
      icon: '🛒',
      xp: 200,
      steps: [],
    },
    {
      title: 'Needs and Wants',
      icon: '❤️',
      xp: 180,
      steps: [],
    },
  ],
}

export default function SkillBuilder({ profile, onXPGain }: SkillBuilderProps) {
  const [activeSubject, setActiveSubject] = useState('natural')
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({})
  const [openSteps, setOpenSteps] = useState<Record<string, boolean>>({ 'natural-0-0': true })
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, string>>({})
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalXP, setModalXP] = useState(0)
  const [modalMsg, setModalMsg] = useState('')

  const sessions = SPROUT_SESSIONS[activeSubject] || []

  function isStepUnlocked(sessionIdx: number, stepIdx: number): boolean {
    if (sessionIdx === 0 && stepIdx === 0) return true
    if (stepIdx > 0) {
      return completedSteps[`${activeSubject}-${sessionIdx}-${stepIdx - 1}`] === true
    }
    if (stepIdx === 0 && sessionIdx > 0) {
      const prevSession = sessions[sessionIdx - 1]
      if (!prevSession.steps.length) return false
      return completedSteps[`${activeSubject}-${sessionIdx - 1}-${prevSession.steps.length - 1}`] === true
    }
    return false
  }

  function isSessionUnlocked(sessionIdx: number): boolean {
    if (sessionIdx === 0) return true
    const prevSession = sessions[sessionIdx - 1]
    if (!prevSession.steps.length) return false
    return completedSteps[`${activeSubject}-${sessionIdx - 1}-${prevSession.steps.length - 1}`] === true
  }

  function toggleStep(key: string) {
    setOpenSteps(prev => ({ ...prev, [key]: !prev[key] }))
  }

  async function completeStep(sessionIdx: number, stepIdx: number, xp: number, msg: string) {
  const key = `${activeSubject}-${sessionIdx}-${stepIdx}`
  if (completedSteps[key]) return
  setCompletedSteps(prev => ({ ...prev, [key]: true }))
  onXPGain(xp)
  setToastMsg(`+${xp} XP ⚡`)
  setShowToast(true)
  setTimeout(() => setShowToast(false), 2500)
  setModalXP(xp)
  setModalMsg(msg)
  setShowModal(true)
  const nextKey = `${activeSubject}-${sessionIdx}-${stepIdx + 1}`
  setTimeout(() => {
    setOpenSteps(prev => ({ ...prev, [key]: false, [nextKey]: true }))
  }, 300)

  if (profile.profileId) {
    try {
      await supabase
        .from('completed_steps')
        .upsert({
          profile_id: profile.profileId,
          step_key: key,
        })
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

  const subjectColor = SUBJECTS.find(s => s.id === activeSubject)?.color || '#1e8c3a'
  const subjectDark = SUBJECTS.find(s => s.id === activeSubject)?.darkColor || '#0d5c26'

  function renderLearnContent(subjectId: string, sessionIdx: number) {
    if (subjectId === 'natural' && sessionIdx === 0) {
      return (
        <div>
          <div style={{
            background: '#FFF8E1',
            border: '2px solid #FFD93D',
            borderRadius: '14px',
            padding: '16px 18px',
            marginBottom: '12px',
            fontSize: '15px',
            fontWeight: 700,
            lineHeight: 1.6,
            color: '#1a1a1a',
          }}>
            <span style={{ fontSize: '28px', display: 'block', marginBottom: '8px' }}>🌳</span>
            <strong>Living things are all around us!</strong> A tree, a bee, a worm in the soil — they&apos;re all alive. Living things do something amazing — they <strong>grow</strong>, they need <strong>food and water</strong>, and they can make <strong>more of themselves</strong>, like a flower making seeds.
          </div>
          {[
            { icon: '🔍', text: 'A rock looks interesting — but it doesn\'t grow, doesn\'t need food, and can\'t make baby rocks! So it\'s NOT a living thing.' },
            { icon: '🌱', text: 'Even tiny seeds are alive! They\'re just sleeping and waiting for water and sunshine to wake them up.' },
            { icon: '🌟', text: 'Fun fact: There are more living things in a handful of garden soil than there are people on Earth!' },
          ].map((fact, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start',
              background: '#E8F5E9',
              border: '2px solid #81C784',
              borderRadius: '12px',
              padding: '10px 14px',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: 700,
              color: '#1b5e20',
              lineHeight: 1.5,
            }}>
              <span style={{ fontSize: '18px', flexShrink: 0 }}>{fact.icon}</span>
              <span>{fact.text}</span>
            </div>
          ))}
        </div>
      )
    }
    if (subjectId === 'money' && sessionIdx === 0) {
      return (
        <div>
          <div style={{
            background: '#FFF8E1',
            border: '2px solid #FFD93D',
            borderRadius: '14px',
            padding: '16px 18px',
            marginBottom: '12px',
            fontSize: '15px',
            fontWeight: 700,
            lineHeight: 1.6,
            color: '#1a1a1a',
          }}>
            <span style={{ fontSize: '28px', display: 'block', marginBottom: '8px' }}>🪙</span>
            <strong>Money is what we use to buy things!</strong> In the UK we use <strong>pounds (£) and pence (p)</strong>. There are coins and notes. Coins are the round metal pieces — like 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2. Notes are the paper ones — £5, £10, £20 and £50.
          </div>
          {[
            { icon: '🥇', text: '100 pence makes one pound! So 100p = £1. Pence are like the small building blocks of pounds.' },
            { icon: '🔍', text: 'Silver coins are worth less — like 5p and 10p. Gold coins are worth more — like £1 and £2. Can you spot the difference?' },
            { icon: '🌟', text: 'Fun fact: The £1 coin has a different design on the back every few years. How many different ones can you find at home?' },
          ].map((fact, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start',
              background: '#FFF9E6',
              border: '2px solid #FFD93D',
              borderRadius: '12px',
              padding: '10px 14px',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: 700,
              color: '#5a3000',
              lineHeight: 1.5,
            }}>
              <span style={{ fontSize: '18px', flexShrink: 0 }}>{fact.icon}</span>
              <span>{fact.text}</span>
            </div>
          ))}
        </div>
      )
    }
    return (
      <div style={{
        padding: '16px',
        background: '#f9f9f6',
        borderRadius: '14px',
        fontSize: '14px',
        fontWeight: 700,
        color: '#666',
        textAlign: 'center',
      }}>
        Content coming soon!
      </div>
    )
  }

  function renderActivityContent(subjectId: string, sessionIdx: number) {
    if (subjectId === 'natural' && sessionIdx === 0) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{
            background: '#DCEEFF',
            border: '2.5px solid #7BB8F7',
            borderRadius: '14px',
            padding: '13px 16px',
          }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#0d5ca8', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '6px' }}>👂 What your child hears</div>
            <p style={{ fontSize: '17px', fontWeight: 800, color: '#0a3870', lineHeight: 1.5 }}>
              Let&apos;s pretend to be seeds growing into flowers! Start curled up tiny on the floor... now slowly grow... push out your arms like leaves... stretch up tall toward the sun! ☀️
            </p>
          </div>
          <div style={{
            background: '#D5F5E0',
            border: '2.5px solid #60D080',
            borderRadius: '14px',
            padding: '13px 16px',
          }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#145a28', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '6px' }}>🤝 What you do together</div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#0d3a1a', lineHeight: 1.5 }}>
              Get on the floor and do it together — curl up small, then slowly rise, arms out, up on tiptoes at the end! Make it as dramatic and silly as possible. Race each other to see who can grow the tallest!
            </p>
          </div>
          <div style={{
            background: '#FFE8CC',
            border: '2.5px solid #FFAB40',
            borderRadius: '14px',
            padding: '13px 16px',
          }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#a84800', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '6px' }}>💬 What to talk about</div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#5a2800', lineHeight: 1.5 }}>
              &quot;What does a plant need to grow?&quot; Let them guess — water, sunshine, soil! Then compare it to what they need — food, water, sleep and love. Plants and people aren&apos;t so different!
            </p>
          </div>
        </div>
      )
    }
    if (subjectId === 'money' && sessionIdx === 0) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{
            background: '#DCEEFF',
            border: '2.5px solid #7BB8F7',
            borderRadius: '14px',
            padding: '13px 16px',
          }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#0d5ca8', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '6px' }}>👂 What your child hears</div>
            <p style={{ fontSize: '17px', fontWeight: 800, color: '#0a3870', lineHeight: 1.5 }}>
              Let&apos;s go on a coin hunt! Can you find as many different coins as possible around the house? Check the sofa, coat pockets, piggy banks — anywhere! Bring them all back and let&apos;s look at them together! 🪙
            </p>
          </div>
          <div style={{
            background: '#D5F5E0',
            border: '2.5px solid #60D080',
            borderRadius: '14px',
            padding: '13px 16px',
          }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#145a28', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '6px' }}>🤝 What you do together</div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#0d3a1a', lineHeight: 1.5 }}>
              Lay all the coins out on a table. Sort them together — silver in one pile, gold in another. Then put them in order from smallest value to biggest. Count how many of each you have!
            </p>
          </div>
          <div style={{
            background: '#FFE8CC',
            border: '2.5px solid #FFAB40',
            borderRadius: '14px',
            padding: '13px 16px',
          }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#a84800', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '6px' }}>💬 What to talk about</div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#5a2800', lineHeight: 1.5 }}>
              Point to each coin and ask: &quot;How much is this one worth?&quot; Talk about which coin they&apos;d most like to find on the pavement and why. Which is worth the most? Which is worth the least?
            </p>
          </div>
        </div>
      )
    }
    return (
      <div style={{
        padding: '16px',
        background: '#f9f9f6',
        borderRadius: '14px',
        fontSize: '14px',
        fontWeight: 700,
        color: '#666',
        textAlign: 'center',
      }}>
        Activity content coming soon!
      </div>
    )
  }

  function renderQuizContent(subjectId: string, sessionIdx: number) {
    const qPrefix = `${subjectId}-${sessionIdx}`

    if (subjectId === 'natural' && sessionIdx === 0) {
      const questions = [
        {
          id: `${qPrefix}-q1`,
          type: 'mc',
          text: 'Which of these is a living thing?',
          options: [
            { label: '🪨 A stone', value: 'wrong' },
            { label: '🌳 A tree', value: 'correct' },
            { label: '🧴 A plastic bottle', value: 'wrong' },
            { label: '☁️ A cloud', value: 'wrong' },
          ],
          correctFb: '✅ Yes! A tree grows, drinks water and makes seeds. Stones, bottles and clouds can\'t do any of that!',
          wrongFb: 'Think about which one actually GROWS and needs water to survive. A stone just sits there forever without changing...',
        },
        {
          id: `${qPrefix}-q2`,
          type: 'tf',
          text: 'True or False? Seeds are not alive until they start to grow.',
          correctAnswer: 'False',
          correctFb: '✅ False! Seeds ARE alive — they\'re just sleeping, waiting for water and warmth to wake them up. Like you when you\'re asleep!',
          wrongFb: 'Actually, seeds ARE alive even before they sprout! They\'re just resting, packed full of everything they need to grow.',
        },
        {
          id: `${qPrefix}-q3`,
          type: 'mc',
          text: 'Spot the odd one out! Three of these are living things. Which one is NOT alive?',
          options: [
            { label: '🐝 A bee', value: 'wrong' },
            { label: '🪨 A rock', value: 'correct' },
            { label: '🌻 A sunflower', value: 'wrong' },
            { label: '🐛 A caterpillar', value: 'wrong' },
          ],
          correctFb: '✅ The rock! Bees, sunflowers and caterpillars all grow, eat and reproduce. A rock just sits there. Very patiently. Forever.',
          wrongFb: 'Remember — living things grow, eat and can make more of themselves. Which of these DOESN\'T do any of that?',
        },
      ]
      return renderQuestions(questions, qPrefix)
    }

    if (subjectId === 'money' && sessionIdx === 0) {
      const questions = [
        {
          id: `${qPrefix}-q1`,
          type: 'mc',
          text: 'Which of these is a coin?',
          options: [
            { label: '📄 A £10 note', value: 'wrong' },
            { label: '🪙 A 50p piece', value: 'correct' },
            { label: '💳 A bank card', value: 'wrong' },
            { label: '🧾 A receipt', value: 'wrong' },
          ],
          correctFb: '✅ A 50p piece is a coin — it\'s round, made of metal, and you can hold it in your hand!',
          wrongFb: 'Coins are the round metal pieces we use as money. Notes are paper. Cards are plastic. Which one on the list is round and metal?',
        },
        {
          id: `${qPrefix}-q2`,
          type: 'tf',
          text: 'True or False? 100 pence makes one pound.',
          correctAnswer: 'True',
          correctFb: '✅ True! 100p = £1. So if you had one hundred 1p coins, you\'d have exactly one pound. That\'s a lot of coins!',
          wrongFb: 'It\'s actually TRUE! 100 pence makes one pound. Think of it like 100 centimetres making one metre — 100 small ones make one big one!',
        },
        {
          id: `${qPrefix}-q3`,
          type: 'mc',
          text: 'You have a 10p coin and a 5p coin. How much do you have altogether?',
          options: [
            { label: '10p', value: 'wrong' },
            { label: '15p', value: 'correct' },
            { label: '50p', value: 'wrong' },
            { label: '105p', value: 'wrong' },
          ],
          correctFb: '✅ 15p! 10p + 5p = 15p. Great adding! You\'re already thinking like a mathematician!',
          wrongFb: 'Add the two coins together: 10p plus 5p. Count on from 10 — 11, 12, 13, 14, 15! That\'s 15p altogether.',
        },
      ]
      return renderQuestions(questions, qPrefix)
    }

    return (
      <div style={{
        padding: '16px',
        background: '#f9f9f6',
        borderRadius: '14px',
        fontSize: '14px',
        fontWeight: 700,
        color: '#666',
        textAlign: 'center',
      }}>
        Quiz content coming soon!
      </div>
    )
  }

  function renderQuestions(questions: {
    id: string
    type: string
    text: string
    options?: { label: string; value: string }[]
    correctAnswer?: string
    correctFb: string
    wrongFb: string
  }[], qPrefix: string) {
    const allAnswered = questions.every(q => answeredQuestions[q.id])

    return (
      <div>
        {questions.map((q, qi) => (
          <div key={q.id} style={{
            background: '#f9f9f6',
            border: '2px solid #ebebeb',
            borderRadius: '14px',
            padding: '14px',
            marginBottom: '10px',
          }}>
            <div style={{
              fontSize: '10px',
              fontWeight: 900,
              color: '#666',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}>
              {q.type === 'mc' ? '🔘 Choose the right answer' : '✅ True or False?'}
            </div>
            <div style={{
              fontSize: '15px',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '12px',
              lineHeight: 1.5,
            }}>{q.text}</div>

            {q.type === 'mc' && q.options && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {q.options.map((opt, oi) => {
                  const answered = answeredQuestions[q.id]
                  const isSelected = answered !== undefined
                  const isThisCorrect = opt.value === 'correct'
                  const wasChosen = answered === `${qi}-${oi}`
                  let bg = '#fff'
                  let border = '#e0e0e0'
                  let color = '#1a1a1a'
                  if (isSelected) {
                    if (wasChosen && answered === 'correct') { bg = '#E8F5E9'; border = '#4CAF50'; color = '#1b5e20' }
                    else if (wasChosen && answered !== 'correct') { bg = '#FFEBEE'; border = '#EF5350'; color = '#b71c1c' }
                    else if (isThisCorrect) { bg = '#E8F5E9'; border = '#4CAF50'; color = '#1b5e20' }
                  }
                  return (
                    <button
                      key={oi}
                      disabled={!!answered}
                      onClick={() => {
                        const result = opt.value === 'correct' ? 'correct' : `${qi}-${oi}`
                        answerQuestion(q.id, result)
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 13px',
                        borderRadius: '11px',
                        border: `2.5px solid ${border}`,
                        background: bg,
                        cursor: answered ? 'default' : 'pointer',
                        fontSize: '13px',
                        fontWeight: 700,
                        color,
                        textAlign: 'left',
                        transition: 'all 0.15s',
                      }}
                    >
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: `2px solid ${border}`,
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        background: wasChosen || (isSelected && isThisCorrect) ? border : '#fff',
                        color: '#fff',
                      }}>
                        {wasChosen && answered === 'correct' && '✓'}
                        {wasChosen && answered !== 'correct' && '✕'}
                        {!wasChosen && isSelected && isThisCorrect && '✓'}
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
                  let bg = '#fff'
                  let border = '#e0e0e0'
                  let color = '#1a1a1a'
                  if (answered) {
                    if (wasChosen && isCorrect) { bg = '#E8F5E9'; border = '#4CAF50'; color = '#1b5e20' }
                    else if (wasChosen && !isCorrect) { bg = '#FFEBEE'; border = '#EF5350'; color = '#b71c1c' }
                    else if (isCorrect) { bg = '#E8F5E9'; border = '#4CAF50'; color = '#1b5e20' }
                  }
                  return (
                    <button
                      key={tf}
                      disabled={!!answered}
                      onClick={() => answerQuestion(q.id, tf)}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '12px',
                        border: `2.5px solid ${border}`,
                        background: bg,
                        fontFamily: "'Fredoka One', sans-serif",
                        fontSize: '18px',
                        cursor: answered ? 'default' : 'pointer',
                        color,
                        transition: 'all 0.15s',
                      }}
                    >
                      {tf}
                    </button>
                  )
                })}
              </div>
            )}

            {answeredQuestions[q.id] && (
              <div style={{
                marginTop: '10px',
                padding: '10px 13px',
                borderRadius: '11px',
                fontSize: '13px',
                fontWeight: 700,
                lineHeight: 1.5,
                ...(answeredQuestions[q.id] === 'correct' || answeredQuestions[q.id] === q.correctAnswer
                  ? { background: '#E8F5E9', color: '#1b5e20', border: '2px solid #4CAF50' }
                  : { background: '#FFEBEE', color: '#b71c1c', border: '2px solid #EF5350' }),
              }}>
                {(answeredQuestions[q.id] === 'correct' || answeredQuestions[q.id] === q.correctAnswer)
                  ? q.correctFb
                  : q.wrongFb}
              </div>
            )}
          </div>
        ))}

        {allAnswered && (
          <div style={{
            background: '#E8F5E9',
            border: '2px solid #4CAF50',
            borderRadius: '14px',
            padding: '12px 16px',
            fontSize: '14px',
            fontWeight: 800,
            color: '#1b5e20',
            textAlign: 'center',
            marginTop: '4px',
          }}>
            🎉 All questions answered! Hit the button below to claim your XP!
          </div>
        )}
      </div>
    )
  }

  function renderMissionContent(subjectId: string, sessionIdx: number) {
    if (subjectId === 'natural' && sessionIdx === 0) {
      return (
        <div>
          <div style={{
            background: 'linear-gradient(135deg, #FF6B35, #FF9558)',
            borderRadius: '14px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
            boxShadow: '0 3px 0 #cc4000',
          }}>
            <span style={{ fontSize: '26px', flexShrink: 0 }}>🔍</span>
            <div>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '17px', color: '#fff' }}>
                Nature Detective Mission!
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.88)', marginTop: '3px', lineHeight: 1.5 }}>
                GoGo outside and find 3 living things and 1 non-living thing. Tell a grown-up what makes each one alive or not alive. Come back and tell us what you discovered!
              </div>
            </div>
          </div>
          <div style={{
            background: '#FFF8E1',
            border: '2px solid #FFD93D',
            borderRadius: '13px',
            padding: '12px 14px',
            fontSize: '13px',
            fontWeight: 700,
            color: '#5a3000',
            lineHeight: 1.5,
          }}>
            🌟 📸 Every real-world mission earns bonus XP and appears on your Memory Wall for family to react to!
          </div>
        </div>
      )
    }
    if (subjectId === 'money' && sessionIdx === 0) {
      return (
        <div>
          <div style={{
            background: 'linear-gradient(135deg, #FF8C00, #FFA726)',
            borderRadius: '14px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
            boxShadow: '0 3px 0 #c46000',
          }}>
            <span style={{ fontSize: '26px', flexShrink: 0 }}>🛒</span>
            <div>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '17px', color: '#fff' }}>
                Real Shop Mission!
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.88)', marginTop: '3px', lineHeight: 1.5 }}>
Next time you visit a shop, find something that costs less than £1. Look at the price tag — can you find the right coins to pay for it? Come back and tell us how you got on!              </div>
            </div>
          </div>
          <div style={{
            background: '#FFF8E1',
            border: '2px solid #FFD93D',
            borderRadius: '13px',
            padding: '12px 14px',
            fontSize: '13px',
            fontWeight: 700,
            color: '#5a3000',
            lineHeight: 1.5,
          }}>
            📸 Every real-world mission earns bonus XP and appears on your Memory Wall for family to react to!
          </div>
        </div>
      )
    }
    return null
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

  function canCompleteStep(subjectId: string, sessionIdx: number, stepIdx: number, type: string) {
    if (type !== 'quiz') return true
    const qPrefix = `${subjectId}-${sessionIdx}`
    const q1 = answeredQuestions[`${qPrefix}-q1`]
    const q2 = answeredQuestions[`${qPrefix}-q2`]
    const q3 = answeredQuestions[`${qPrefix}-q3`]
    return !!(q1 && q2 && q3)
  }

  function getCompletionMessage(type: string, subjectId: string) {
    if (type === 'learn') return subjectId === 'natural' ? '🌿 Great reading! You\'ve learned what makes something alive!' : '🪙 Great reading! You know what money is!'
    if (type === 'activity') return subjectId === 'natural' ? '🌱 Amazing growing! You both stretched just like a real plant!' : '🪙 Brilliant coin hunting! You\'re already a money expert!'
    if (type === 'quiz') return '🧠 Quiz complete! You really know your stuff!'
    if (type === 'mission') return '📸 Real-world mission done! Your Memory Wall is getting brilliant!'
    return 'Step complete!'
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* XP Toast */}
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

      {/* Celebrate Modal */}
      {showModal && (
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
            maxWidth: '420px',
            width: '100%',
            textAlign: 'center',
            animation: 'fadeUp 0.3s ease',
          }}>
            <div style={{ fontSize: '56px', marginBottom: '10px' }}>
              {['⭐', '🌟', '🎉', '🌿', '🏆', '🔥', '🌱'][Math.floor(Math.random() * 7)]}
            </div>
            <div style={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: '26px',
              color: '#145a28',
              marginBottom: '6px',
            }}>Step Complete!</div>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#666',
              marginBottom: '18px',
              lineHeight: 1.5,
            }}>{modalMsg}</div>
            <div style={{
              background: '#edfaf1',
              borderRadius: '16px',
              padding: '14px',
              marginBottom: '18px',
            }}>
              <div style={{
                fontFamily: "'Fredoka One', sans-serif",
                fontSize: '38px',
                color: '#145a28',
              }}>+{modalXP} XP</div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#1e8c3a',
              }}>added to your journey</div>
            </div>
            <button
              onClick={() => setShowModal(false)}
              style={{
                width: '100%',
                padding: '13px',
                borderRadius: '14px',
                background: '#145a28',
                color: '#fff',
                border: 'none',
                fontFamily: "'Fredoka One', sans-serif",
                fontSize: '18px',
                cursor: 'pointer',
              }}
            >
              Keep going! 🚀
            </button>
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
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
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
                📚 Skill Builder
              </div>
              <div style={{
                fontFamily: "'Fredoka One', sans-serif",
                fontSize: '28px',
                color: '#fff',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                {profile.learnerName}&apos;s Learning Journey
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.6)',
              }}>
                {profile.bandIcon} {profile.bandLabel} · Keep going — every step counts!
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { val: profile.xp, label: 'Total XP' },
                { val: profile.streak, label: 'Day Streak 🔥' },
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

      {/* Subject tabs */}
      <div style={{
        display: 'flex',
        gap: '0',
        background: '#145a28',
        flexShrink: 0,
        overflowX: 'auto',
      }}>
        {SUBJECTS.map(subject => (
          <button
            key={subject.id}
            onClick={() => setActiveSubject(subject.id)}
            style={{
              flex: 1,
              padding: '12px 8px',
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: '15px',
              color: activeSubject === subject.id ? '#fff' : 'rgba(255,255,255,0.5)',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              borderBottom: activeSubject === subject.id ? '3px solid #FFE135' : '3px solid transparent',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {subject.icon} {subject.name}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
      }}>

        {/* Skills column */}
        <div style={{ overflowY: 'auto', padding: '20px 24px' }}>
          {sessions.map((session, sessionIdx) => {
            const unlocked = isSessionUnlocked(sessionIdx)
            const completedCount = session.steps.filter((_, si) =>
              completedSteps[`${activeSubject}-${sessionIdx}-${si}`]
            ).length
            const pct = session.steps.length ? Math.round((completedCount / session.steps.length) * 100) : 0

            return (
              <div
                key={sessionIdx}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  boxShadow: unlocked
                    ? '0 5px 0 rgba(0,0,0,0.14), 0 8px 22px rgba(0,0,0,0.1)'
                    : '0 2px 8px rgba(0,0,0,0.06)',
                  opacity: unlocked ? 1 : 0.65,
                }}
              >
                {/* Session header */}
                <div style={{
                  background: unlocked
                    ? `linear-gradient(135deg, ${subjectColor}, ${subjectDark})`
                    : 'linear-gradient(135deg, #555, #444)',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '13px',
                    background: 'rgba(255,255,255,0.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    flexShrink: 0,
                  }}>
                    {session.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Fredoka One', sans-serif",
                      fontSize: '18px',
                      color: unlocked ? '#fff' : 'rgba(255,255,255,0.5)',
                      lineHeight: 1.1,
                    }}>{session.title}</div>
                    <div style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: unlocked ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.35)',
                      marginTop: '2px',
                    }}>
                      {session.steps.length} steps · {session.xp} XP
                    </div>
                  </div>
                  {unlocked
                    ? <div style={{
                        padding: '3px 11px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,0.16)',
                        color: '#fff',
                        fontSize: '11px',
                        fontWeight: 900,
                      }}>{completedCount} / {session.steps.length}</div>
                    : <div style={{ fontSize: '20px', opacity: 0.55 }}>🔒</div>
                  }
                </div>

                {/* Progress bar */}
                {unlocked && session.steps.length > 0 && (
                  <div style={{ padding: '0 18px 10px', background: `linear-gradient(135deg, ${subjectColor}, ${subjectDark})` }}>
                    <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '20px', height: '6px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${pct}%`,
                        background: '#FFE135',
                        borderRadius: '20px',
                        transition: 'width 0.8s ease',
                      }} />
                    </div>
                  </div>
                )}

                {/* Steps */}
                {unlocked && session.steps.length > 0 && (
                  <div style={{ background: '#fff' }}>
                    {session.steps.map((step, stepIdx) => {
                      const stepKey = `${activeSubject}-${sessionIdx}-${stepIdx}`
                      const stepUnlocked = isStepUnlocked(sessionIdx, stepIdx)
                      const isDone = completedSteps[stepKey]
                      const isOpen = openSteps[stepKey]
                      const canComplete = canCompleteStep(activeSubject, sessionIdx, stepIdx, step.type)

                      return (
                        <div
                          key={stepIdx}
                          style={{ borderBottom: stepIdx < session.steps.length - 1 ? '2px dashed #eee' : 'none' }}
                        >
                          <div
                            onClick={() => stepUnlocked && toggleStep(stepKey)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '12px 16px',
                              cursor: stepUnlocked ? 'pointer' : 'default',
                              transition: 'background 0.15s',
                              background: isOpen ? '#fafafa' : 'transparent',
                            }}
                          >
                            <div style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '50%',
                              border: `3px solid ${isDone ? '#1e8c3a' : stepUnlocked ? '#FFE135' : '#ddd'}`,
                              background: isDone ? '#1e8c3a' : stepUnlocked ? '#FFE135' : '#fff',
                              color: isDone ? '#fff' : stepUnlocked ? '#145a28' : '#ccc',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              fontWeight: 900,
                              flexShrink: 0,
                              transition: 'all 0.3s',
                            }}>
                              {isDone ? '✓' : stepIdx + 1}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{
                                fontSize: '13px',
                                fontWeight: 800,
                                color: isDone ? '#1e8c3a' : stepUnlocked ? '#1a1a1a' : '#bbb',
                                textDecoration: isDone ? 'line-through' : 'none',
                                textDecorationColor: 'rgba(30,140,58,0.4)',
                              }}>{step.title}</div>
                              <div style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: stepUnlocked ? '#666' : '#ddd',
                                marginTop: '1px',
                              }}>{getStepTypeLabel(step.type)}</div>
                            </div>
                            <div style={{
                              fontSize: '10px',
                              fontWeight: 900,
                              padding: '3px 9px',
                              borderRadius: '10px',
                              background: isDone ? '#d4f0dd' : stepUnlocked ? '#FFE135' : '#f0f0f0',
                              color: isDone ? '#145a28' : stepUnlocked ? '#145a28' : '#ccc',
                              flexShrink: 0,
                            }}>+{step.xp} XP</div>
                            {stepUnlocked && (
                              <div style={{
                                fontSize: '11px',
                                color: '#ccc',
                                transform: isOpen ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.2s',
                                flexShrink: 0,
                              }}>▼</div>
                            )}
                          </div>

                          {/* Step content */}
                          {isOpen && stepUnlocked && (
                            <div style={{ padding: '0 16px 16px', animation: 'fadeUp 0.2s ease' }}>
                              {step.type === 'learn' && renderLearnContent(activeSubject, sessionIdx)}
                              {step.type === 'activity' && renderActivityContent(activeSubject, sessionIdx)}
                              {step.type === 'quiz' && renderQuizContent(activeSubject, sessionIdx)}
                              {step.type === 'mission' && renderMissionContent(activeSubject, sessionIdx)}

                              {!isDone && (
                                <button
                                  disabled={!canComplete}
                                  onClick={() => completeStep(sessionIdx, stepIdx, step.xp, getCompletionMessage(step.type, activeSubject))}
                                  style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '13px',
                                    border: 'none',
                                    fontFamily: "'Fredoka One', sans-serif",
                                    fontSize: '16px',
                                    color: canComplete ? '#145a28' : '#aaa',
                                    background: canComplete ? '#FFE135' : '#e0e0e0',
                                    cursor: canComplete ? 'pointer' : 'not-allowed',
                                    marginTop: '10px',
                                    boxShadow: canComplete ? '0 4px 0 #c9a800' : '0 4px 0 #c8c8c8',
                                    transition: 'all 0.2s',
                                  }}
                                >
                                  {canComplete
                                    ? getCompleteButtonText(step.type)
                                    : step.type === 'quiz' ? 'Answer all questions first! 🔒' : getCompleteButtonText(step.type)
                                  }
                                </button>
                              )}

                              {isDone && (
                                <div style={{
                                  width: '100%',
                                  padding: '12px',
                                  borderRadius: '13px',
                                  background: '#E8F5E9',
                                  border: '2px solid #4CAF50',
                                  fontFamily: "'Fredoka One', sans-serif",
                                  fontSize: '16px',
                                  color: '#1b5e20',
                                  textAlign: 'center',
                                  marginTop: '10px',
                                }}>
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

                {/* Locked message */}
                {!unlocked && (
                  <div style={{
                    background: '#fff',
                    padding: '18px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '32px', marginBottom: '5px' }}>🔒</div>
                    <div style={{
                      fontFamily: "'Fredoka One', sans-serif",
                      fontSize: '16px',
                      color: '#bbb',
                    }}>Complete the previous session to unlock!</div>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#ccc',
                      marginTop: '2px',
                    }}>{session.xp} XP waiting for you</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Sidebar */}
        <div style={{
          overflowY: 'auto',
          background: '#f7f7f3',
          borderLeft: '1px solid rgba(0,0,0,0.07)',
          padding: '20px 16px',
        }}>
          <div style={{
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '16px',
            color: '#1a1a1a',
            marginBottom: '14px',
          }}>🔭 Coming Up Next</div>

          {[
            { icon: '🌊', title: 'Oceans & Rivers', desc: 'Dive into the blue world — fish, tides and why oceans matter', xp: 220 },
            { icon: '☀️', title: 'Sun, Rain & Weather', desc: 'Clouds, rain cycles and how to read the sky', xp: 160 },
            { icon: '🦊', title: 'Wild Animals', desc: 'Predators, prey and your first food chain!', xp: 200 },
            { icon: '🌎', title: 'Caring for Our Planet', desc: 'Why the Earth needs our help — and what you can do', xp: 240 },
          ].map((item, i) => (
            <div key={i} style={{
              border: '2px dashed #ddd',
              borderRadius: '16px',
              padding: '14px',
              marginBottom: '10px',
              background: '#fafafa',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '9px',
                right: '-18px',
                background: '#FFE135',
                color: '#145a28',
                fontSize: '9px',
                fontWeight: 900,
                letterSpacing: '0.04em',
                padding: '2px 24px',
                transform: 'rotate(35deg)',
              }}>Soon!</div>
              <div style={{ fontSize: '28px', marginBottom: '6px' }}>{item.icon}</div>
              <div style={{
                fontFamily: "'Fredoka One', sans-serif",
                fontSize: '14px',
                color: '#aaa',
                marginBottom: '3px',
              }}>{item.title}</div>
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#ccc',
                lineHeight: 1.4,
                marginBottom: '6px',
              }}>{item.desc}</div>
              <div style={{
                fontSize: '10px',
                fontWeight: 900,
                color: '#ccc',
                padding: '2px 9px',
                borderRadius: '10px',
                background: '#eee',
                display: 'inline-block',
              }}>{item.xp} XP</div>
            </div>
          ))}

          <div style={{
            background: 'linear-gradient(135deg, #0a2e14, #1e3a20)',
            borderRadius: '16px',
            padding: '14px',
            marginTop: '8px',
          }}>
            <div style={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: '14px',
              color: '#fff',
              marginBottom: '6px',
            }}>📊 {profile.learnerName}&apos;s Stats</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
            }}>
              {[
                { val: Object.keys(completedSteps).filter(k => k.startsWith(activeSubject)).length, label: 'Steps done' },
                { val: profile.xp, label: 'Total XP' },
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