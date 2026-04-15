'use client'

import { useState } from 'react'
import { SUBJECTS } from '../data/subjects'
import type { Session, SessionStep, QuizQuestion } from '../data/subjects'

function DigitalLiteracyEnvironment({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', background: '#07091a', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes dl-flowH  { from{stroke-dashoffset:0} to{stroke-dashoffset:-80} }
        @keyframes dl-flowH2 { from{stroke-dashoffset:0} to{stroke-dashoffset:-60} }
        @keyframes dl-flowV  { from{stroke-dashoffset:0} to{stroke-dashoffset:-80} }
        @keyframes dl-flowV2 { from{stroke-dashoffset:0} to{stroke-dashoffset:-60} }
        @keyframes dl-pulse  { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes dl-pulse2 { 0%,100%{opacity:0.8} 50%{opacity:0.3} }
        @keyframes dl-blink  { 0%,100%{opacity:1} 45%,55%{opacity:0.15} }
        @keyframes dl-blink2 { 0%,100%{opacity:0.7} 45%,55%{opacity:0.1} }
        .dl-th  { stroke-dasharray:12 8; animation:dl-flowH 2s linear infinite; }
        .dl-th2 { stroke-dasharray:8 6;  animation:dl-flowH2 1.6s linear infinite; }
        .dl-tv  { stroke-dasharray:12 8; animation:dl-flowV 2.4s linear infinite; }
        .dl-tv2 { stroke-dasharray:8 6;  animation:dl-flowV2 1.9s linear infinite; }
        .dl-na  { animation:dl-pulse 2.2s ease-in-out infinite; }
        .dl-nb  { animation:dl-pulse2 1.8s ease-in-out infinite 0.5s; }
        .dl-nc  { animation:dl-pulse 2.6s ease-in-out infinite 1s; }
        .dl-ba  { animation:dl-blink 1.4s ease-in-out infinite; }
        .dl-bb  { animation:dl-blink2 2.1s ease-in-out infinite 0.7s; }
        .dl-bc  { animation:dl-blink 1.8s ease-in-out infinite 1.3s; }
      `}</style>

      <svg style={{position:'absolute',top:0,left:0,width:'100%',height:'160px',display:'block',zIndex:1}} viewBox="0 0 800 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="160" fill="#07091a"/>
        <line x1="0" y1="140" x2="800" y2="140" stroke="#1a2a4a" strokeWidth="1"/>
        <line x1="60" y1="160" x2="60" y2="110" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="60" y1="110" x2="200" y2="110" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-th"/>
        <line x1="200" y1="110" x2="200" y2="80" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="200" y1="80" x2="380" y2="80" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-th2"/>
        <line x1="380" y1="80" x2="380" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="380" y1="50" x2="600" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-th"/>
        <line x1="600" y1="50" x2="600" y2="100" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="600" y1="100" x2="740" y2="100" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-th2"/>
        <line x1="740" y1="100" x2="740" y2="160" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="140" y1="160" x2="140" y2="90" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="140" y1="90" x2="320" y2="90" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" className="dl-th2"/>
        <line x1="320" y1="90" x2="320" y2="60" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="320" y1="60" x2="500" y2="60" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" className="dl-th"/>
        <line x1="500" y1="60" x2="500" y2="40" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="500" y1="40" x2="680" y2="40" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" className="dl-th2"/>
        <line x1="680" y1="40" x2="680" y2="100" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="680" y1="100" x2="800" y2="100" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" className="dl-th"/>
        <line x1="260" y1="160" x2="260" y2="70" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.35" className="dl-tv2"/>
        <line x1="260" y1="70" x2="450" y2="70" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.35" className="dl-th2"/>
        <line x1="450" y1="70" x2="450" y2="30" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.35"/>
        <line x1="450" y1="30" x2="760" y2="30" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.35" className="dl-th"/>
        <rect x="54" y="104" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="194" y="74" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="374" y="44" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="594" y="94" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="734" y="94" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <circle className="dl-na" cx="200" cy="110" r="5" fill="#64dcff"/>
        <circle className="dl-nb" cx="380" cy="80" r="4" fill="#ff9ff3"/>
        <circle className="dl-nc" cx="600" cy="50" r="5" fill="#64dcff"/>
        <circle className="dl-na" cx="140" cy="90" r="4" fill="#ff9ff3"/>
        <circle className="dl-nb" cx="500" cy="60" r="4" fill="#a8ff78"/>
        <circle className="dl-nc" cx="260" cy="70" r="3" fill="#a8ff78"/>
        <rect x="30" y="20" width="28" height="20" rx="3" fill="none" stroke="#64dcff" strokeWidth="1" strokeOpacity="0.5" className="dl-ba"/>
        <line x1="36" y1="27" x2="52" y2="27" stroke="#64dcff" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="36" y1="33" x2="48" y2="33" stroke="#64dcff" strokeWidth="0.8" strokeOpacity="0.4"/>
        <rect x="700" y="15" width="26" height="18" rx="3" fill="none" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.5" className="dl-bb"/>
        <line x1="706" y1="22" x2="720" y2="22" stroke="#ff9ff3" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="706" y1="27" x2="716" y2="27" stroke="#ff9ff3" strokeWidth="0.8" strokeOpacity="0.4"/>
        <circle cx="760" cy="70" r="8" fill="none" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.5" className="dl-bc"/>
        <circle cx="760" cy="70" r="3" fill="#a8ff78" fillOpacity="0.4" className="dl-bc"/>
        <circle cx="100" cy="30" r="1.5" fill="#64dcff" fillOpacity="0.6" className="dl-ba"/>
        <circle cx="420" cy="20" r="1.5" fill="#ff9ff3" fillOpacity="0.6" className="dl-bb"/>
        <circle cx="560" cy="25" r="1" fill="#a8ff78" fillOpacity="0.5" className="dl-bc"/>
        <circle cx="640" cy="15" r="1.5" fill="#64dcff" fillOpacity="0.5" className="dl-ba"/>
      </svg>

      <svg style={{position:'absolute',top:0,left:0,width:'90px',height:'100%',display:'block',zIndex:1}} viewBox="0 0 90 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="900" fill="#07091a"/>
        <line x1="90" y1="0" x2="90" y2="900" stroke="#1a2a4a" strokeWidth="1"/>
        <line x1="30" y1="0" x2="30" y2="900" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4" className="dl-tv"/>
        <line x1="30" y1="150" x2="70" y2="150" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="70" y1="150" x2="70" y2="280" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-tv2"/>
        <line x1="70" y1="280" x2="30" y2="280" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="30" y1="420" x2="65" y2="420" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="65" y1="420" x2="65" y2="560" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4" className="dl-tv"/>
        <line x1="65" y1="560" x2="30" y2="560" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="30" y1="700" x2="70" y2="700" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="70" y1="700" x2="70" y2="820" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-tv2"/>
        <line x1="55" y1="0" x2="55" y2="900" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3" className="dl-tv2"/>
        <line x1="55" y1="200" x2="80" y2="200" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="80" y1="200" x2="80" y2="360" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4" className="dl-tv"/>
        <line x1="80" y1="360" x2="55" y2="360" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="55" y1="500" x2="78" y2="500" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="78" y1="500" x2="78" y2="650" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3" className="dl-tv2"/>
        <line x1="15" y1="0" x2="15" y2="900" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.25" className="dl-tv"/>
        <line x1="15" y1="320" x2="40" y2="320" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="15" y1="600" x2="45" y2="600" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.3"/>
        <rect x="24" y="144" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="24" y="274" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="24" y="414" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="24" y="554" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="24" y="694" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <circle className="dl-na" cx="30" cy="150" r="4" fill="#64dcff"/>
        <circle className="dl-nb" cx="70" cy="280" r="3" fill="#64dcff"/>
        <circle className="dl-nc" cx="30" cy="420" r="4" fill="#ff9ff3"/>
        <circle className="dl-na" cx="65" cy="560" r="3" fill="#ff9ff3"/>
        <circle className="dl-nb" cx="30" cy="700" r="4" fill="#a8ff78"/>
        <circle className="dl-nc" cx="55" cy="360" r="3" fill="#ff9ff3"/>
        <rect x="8" y="180" width="20" height="14" rx="2" fill="none" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.5" className="dl-bb"/>
        <line x1="11" y1="185" x2="25" y2="185" stroke="#a8ff78" strokeWidth="0.6" strokeOpacity="0.5"/>
        <line x1="11" y1="189" x2="22" y2="189" stroke="#a8ff78" strokeWidth="0.6" strokeOpacity="0.3"/>
        <rect x="8" y="470" width="20" height="14" rx="2" fill="none" stroke="#ff9ff3" strokeWidth="0.8" strokeOpacity="0.5" className="dl-bc"/>
        <line x1="11" y1="475" x2="25" y2="475" stroke="#ff9ff3" strokeWidth="0.6" strokeOpacity="0.5"/>
        <line x1="11" y1="479" x2="22" y2="479" stroke="#ff9ff3" strokeWidth="0.6" strokeOpacity="0.3"/>
        <circle cx="20" cy="760" r="7" fill="none" stroke="#64dcff" strokeWidth="1" strokeOpacity="0.5" className="dl-ba"/>
        <circle cx="20" cy="760" r="2.5" fill="#64dcff" fillOpacity="0.4" className="dl-ba"/>
        <circle cx="45" cy="100" r="1.5" fill="#64dcff" fillOpacity="0.5" className="dl-ba"/>
        <circle cx="60" cy="440" r="1.5" fill="#ff9ff3" fillOpacity="0.5" className="dl-bb"/>
        <circle cx="25" cy="640" r="1" fill="#a8ff78" fillOpacity="0.4" className="dl-bc"/>
        <circle cx="50" cy="850" r="1.5" fill="#64dcff" fillOpacity="0.4" className="dl-ba"/>
      </svg>

      <svg style={{position:'absolute',top:0,right:0,width:'90px',height:'100%',display:'block',zIndex:1,transform:'scaleX(-1)'}} viewBox="0 0 90 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="900" fill="#07091a"/>
        <line x1="90" y1="0" x2="90" y2="900" stroke="#1a2a4a" strokeWidth="1"/>
        <line x1="30" y1="0" x2="30" y2="900" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4" className="dl-tv"/>
        <line x1="30" y1="150" x2="70" y2="150" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="70" y1="150" x2="70" y2="280" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-tv2"/>
        <line x1="70" y1="280" x2="30" y2="280" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="30" y1="420" x2="65" y2="420" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="65" y1="420" x2="65" y2="560" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4" className="dl-tv"/>
        <line x1="65" y1="560" x2="30" y2="560" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="30" y1="700" x2="70" y2="700" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="70" y1="700" x2="70" y2="820" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-tv2"/>
        <line x1="55" y1="0" x2="55" y2="900" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3" className="dl-tv2"/>
        <line x1="55" y1="200" x2="80" y2="200" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="80" y1="200" x2="80" y2="360" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4" className="dl-tv"/>
        <line x1="80" y1="360" x2="55" y2="360" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="55" y1="500" x2="78" y2="500" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="78" y1="500" x2="78" y2="650" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3" className="dl-tv2"/>
        <line x1="15" y1="0" x2="15" y2="900" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.25" className="dl-tv"/>
        <line x1="15" y1="320" x2="40" y2="320" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="15" y1="600" x2="45" y2="600" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.3"/>
        <rect x="24" y="144" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="24" y="274" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="24" y="414" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="24" y="554" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="24" y="694" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <circle className="dl-na" cx="30" cy="150" r="4" fill="#64dcff"/>
        <circle className="dl-nb" cx="70" cy="280" r="3" fill="#64dcff"/>
        <circle className="dl-nc" cx="30" cy="420" r="4" fill="#ff9ff3"/>
        <circle className="dl-na" cx="65" cy="560" r="3" fill="#ff9ff3"/>
        <circle className="dl-nb" cx="30" cy="700" r="4" fill="#a8ff78"/>
        <circle className="dl-nc" cx="55" cy="360" r="3" fill="#ff9ff3"/>
        <rect x="8" y="180" width="20" height="14" rx="2" fill="none" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.5" className="dl-bb"/>
        <line x1="11" y1="185" x2="25" y2="185" stroke="#a8ff78" strokeWidth="0.6" strokeOpacity="0.5"/>
        <line x1="11" y1="189" x2="22" y2="189" stroke="#a8ff78" strokeWidth="0.6" strokeOpacity="0.3"/>
        <rect x="8" y="470" width="20" height="14" rx="2" fill="none" stroke="#ff9ff3" strokeWidth="0.8" strokeOpacity="0.5" className="dl-bc"/>
        <circle cx="20" cy="760" r="7" fill="none" stroke="#64dcff" strokeWidth="1" strokeOpacity="0.5" className="dl-ba"/>
        <circle cx="20" cy="760" r="2.5" fill="#64dcff" fillOpacity="0.4" className="dl-ba"/>
        <circle cx="45" cy="100" r="1.5" fill="#64dcff" fillOpacity="0.5" className="dl-ba"/>
        <circle cx="60" cy="440" r="1.5" fill="#ff9ff3" fillOpacity="0.5" className="dl-bb"/>
        <circle cx="25" cy="640" r="1" fill="#a8ff78" fillOpacity="0.4" className="dl-bc"/>
      </svg>

      <svg style={{position:'absolute',bottom:0,left:0,width:'100%',height:'100px',display:'block',zIndex:1,transform:'scaleY(-1)'}} viewBox="0 0 800 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="100" fill="#07091a"/>
        <line x1="0" y1="60" x2="800" y2="60" stroke="#1a2a4a" strokeWidth="1"/>
        <line x1="60" y1="0" x2="60" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="60" y1="50" x2="200" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-th"/>
        <line x1="200" y1="50" x2="200" y2="20" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="200" y1="20" x2="450" y2="20" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-th2"/>
        <line x1="450" y1="20" x2="450" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="450" y1="50" x2="680" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" className="dl-th"/>
        <line x1="680" y1="50" x2="680" y2="0" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="140" y1="0" x2="140" y2="40" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="140" y1="40" x2="340" y2="40" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" className="dl-th2"/>
        <line x1="340" y1="40" x2="340" y2="10" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="340" y1="10" x2="590" y2="10" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" className="dl-th"/>
        <circle className="dl-na" cx="200" cy="50" r="4" fill="#64dcff"/>
        <circle className="dl-nb" cx="450" cy="20" r="3" fill="#64dcff"/>
        <circle className="dl-nc" cx="140" cy="40" r="3" fill="#ff9ff3"/>
        <circle className="dl-na" cx="340" cy="10" r="3" fill="#ff9ff3"/>
        <rect x="54" y="44" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="194" y="14" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
      </svg>

      <div style={{position:'relative',zIndex:10,margin:'140px 100px 80px 100px'}}>
        {children}
      </div>
    </div>
  )
}

function SubjectEnvironment({ subjectId, children }: { subjectId: string; children: React.ReactNode }) {
  if (subjectId === 'digital') return <DigitalLiteracyEnvironment>{children}</DigitalLiteracyEnvironment>
  return <div style={{ padding: '20px' }}>{children}</div>
}

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
  const subjectColor = activeSubject.color || '#185FA5'
  const subjectDark = activeSubject.darkColor || '#042C53'

  function isSessionUnlocked(sessionIdx: number): boolean {
    if (sessionIdx === 0) return true
    const prevSession = sessions[sessionIdx - 1]
    if (!prevSession?.steps?.length) return false
    return completedSteps[`${activeSubjectId}-${sessionIdx - 1}-${prevSession.steps.length - 1}`] === true
  }

  function isStepUnlocked(sessionIdx: number, stepIdx: number): boolean {
    if (sessionIdx === 0 && stepIdx === 0) return true
    if (stepIdx > 0) return completedSteps[`${activeSubjectId}-${sessionIdx}-${stepIdx - 1}`] === true
    if (stepIdx === 0 && sessionIdx > 0) return isSessionUnlocked(sessionIdx)
    return false
  }

  function toggleStep(key: string) {
    setOpenSteps(prev => ({ ...prev, [key]: !prev[key] }))
  }

  function completeStep(sessionIdx: number, stepIdx: number, xp: number, msg: string) {
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
    setTimeout(() => setOpenSteps(prev => ({ ...prev, [key]: false, [nextKey]: true })), 300)
  }

  function answerQuestion(qKey: string, value: string, correct: boolean) {
    if (answeredQuestions[qKey]) return
    setAnsweredQuestions(prev => ({ ...prev, [qKey]: value }))
    if (correct) {
      onXPGain(15)
      setToastMsg('+15 XP ⚡')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
    }
  }

  function getStepTypeLabel(type: string) {
    switch (type) {
      case 'learn': return 'Learn'
      case 'activity': return 'Activity'
      case 'quiz': return 'Quiz'
      case 'mission': return 'Mission'
      default: return type
    }
  }

  function getButtonLabel(type: string) {
    switch (type) {
      case 'learn': return "I've read this! ✅"
      case 'activity': return "We did this together! 🌱"
      case 'quiz': return "Claim my quiz XP! ⭐"
      case 'mission': return "I did my mission! 📸"
      default: return "Done! ✅"
    }
  }

  function getCompletionMessage(type: string) {
    switch (type) {
      case 'learn': return '📖 Great reading! Keep going!'
      case 'activity': return '🌱 Amazing — you did it together!'
      case 'quiz': return '🧠 Quiz complete! You really know your stuff!'
      case 'mission': return '📸 Real-world mission done!'
      default: return 'Step complete!'
    }
  }

  function canCompleteStep(step: SessionStep, sessionIdx: number, stepIdx: number): boolean {
    if (step.type !== 'quiz') return true
    if (!step.quizContent?.length) return true
    return step.quizContent.every((q: QuizQuestion) =>
      answeredQuestions[`${activeSubjectId}-${sessionIdx}-${stepIdx}-${q.id}`]
    )
  }

  function renderLearnContent(step: SessionStep) {
    if (!step?.learnContent) return (
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
        Content coming soon!
      </div>
    )
    const { intro, facts } = step.learnContent
    return (
      <div>
        <div style={{ background: 'rgba(255,248,225,0.1)', border: '2px solid rgba(255,217,61,0.4)', borderRadius: '14px', padding: '16px 18px', marginBottom: '12px', fontSize: '15px', fontWeight: 700, lineHeight: 1.6, color: '#fff' }}>
          <span style={{ fontSize: '28px', display: 'block', marginBottom: '8px' }}>📖</span>
          {intro}
        </div>
        {facts.map((fact: { icon: string; text: string }, i: number) => (
          <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: 'rgba(100,220,255,0.08)', border: '2px solid rgba(100,220,255,0.25)', borderRadius: '12px', padding: '10px 14px', marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
            <span style={{ fontSize: '18px', flexShrink: 0 }}>{fact.icon}</span>
            <span>{fact.text}</span>
          </div>
        ))}
      </div>
    )
  }

  function renderActivityContent(step: SessionStep) {
    if (!step?.activityContent) return (
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
        Content coming soon!
      </div>
    )
    const { childHears, doTogether, talkAbout } = step.activityContent
    return (
      <div>
        <div style={{ background: 'rgba(168,255,120,0.08)', border: '2px solid rgba(168,255,120,0.25)', borderRadius: '14px', padding: '14px 16px', marginBottom: '10px', fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
          <span style={{ fontSize: '20px', display: 'block', marginBottom: '6px' }}>🔊</span>
          {childHears}
        </div>
        <div style={{ background: 'rgba(100,220,255,0.08)', border: '2px solid rgba(100,220,255,0.25)', borderRadius: '12px', padding: '12px 14px', marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          <span style={{ fontSize: '16px', marginRight: '6px' }}>🤝</span>
          {doTogether}
        </div>
        <div style={{ background: 'rgba(255,159,243,0.08)', border: '2px solid rgba(255,159,243,0.25)', borderRadius: '12px', padding: '12px 14px', fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          <span style={{ fontSize: '16px', marginRight: '6px' }}>💬</span>
          {talkAbout}
        </div>
      </div>
    )
  }

  function renderQuizContent(step: SessionStep, sessionIdx: number, stepIdx: number) {
    if (!step?.quizContent?.length) return (
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
        Content coming soon!
      </div>
    )
    const allAnswered = step.quizContent.every((q: QuizQuestion) => answeredQuestions[`${activeSubjectId}-${sessionIdx}-${stepIdx}-${q.id}`])
    return (
      <div>
        {step.quizContent.map((q: QuizQuestion) => {
          const qKey = `${activeSubjectId}-${sessionIdx}-${stepIdx}-${q.id}`
          const answered = answeredQuestions[qKey]
          return (
            <div key={q.id} style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.4 }}>
                {q.text}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {q.options?.map(opt => {
                  const isAnswered = !!answered
                  const isCorrect = opt.value === q.correctAnswer
                  const isSelected = answered === opt.value
                  let bg = 'rgba(255,255,255,0.06)'
                  let border = '2px solid rgba(255,255,255,0.12)'
                  let color = 'rgba(255,255,255,0.85)'
                  if (isAnswered) {
                    if (isCorrect) { bg = 'rgba(82,183,136,0.2)'; border = '2px solid #52b788'; color = '#a8ffd0' }
                    else if (isSelected) { bg = 'rgba(224,72,72,0.15)'; border = '2px solid #e04848'; color = '#ffaaaa' }
                  }
                  return (
                    <button key={opt.value} disabled={isAnswered} onClick={() => answerQuestion(qKey, opt.value, opt.value === q.correctAnswer)}
                      style={{ background: bg, border, borderRadius: '12px', padding: '12px 16px', fontSize: '14px', fontWeight: 700, color, cursor: isAnswered ? 'default' : 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
                      {opt.label}
                    </button>
                  )
                })}
              </div>
              {answered && (
                <div style={{ marginTop: '10px', padding: '12px 14px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, lineHeight: 1.5,
                  background: answered === q.correctAnswer ? 'rgba(82,183,136,0.15)' : 'rgba(255,180,50,0.12)',
                  color: answered === q.correctAnswer ? '#a8ffd0' : '#ffd580',
                  border: `2px solid ${answered === q.correctAnswer ? 'rgba(82,183,136,0.4)' : 'rgba(255,180,50,0.3)'}` }}>
                  {answered === q.correctAnswer ? `✅ ${q.correctFb}` : `💛 ${q.wrongFb}`}
                </div>
              )}
            </div>
          )
        })}
        {!allAnswered && (
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: '4px' }}>
            Answer all questions to claim your XP
          </div>
        )}
      </div>
    )
  }

  function renderMissionContent(step: SessionStep) {
    if (!step?.missionContent) return (
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
        Content coming soon!
      </div>
    )
    const { title, desc, note } = step.missionContent
    return (
      <div>
        <div style={{ background: 'linear-gradient(135deg, #0a2e14, #1a3d20)', borderRadius: '14px', padding: '18px', marginBottom: '10px' }}>
          <div style={{ fontSize: '20px', fontWeight: 900, color: '#FFE135', marginBottom: '8px' }}>🌍 {title}</div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>{desc}</div>
        </div>
        {note && (
          <div style={{ background: 'rgba(255,248,225,0.08)', border: '2px solid rgba(255,217,61,0.3)', borderRadius: '12px', padding: '12px 14px', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            {note}
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>

      {/* Subject tabs — always visible, outside environment */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', padding: '16px 16px 12px', scrollbarWidth: 'none', background: 'var(--color-background-primary)', borderBottom: '1px solid var(--color-border-tertiary)' }}>
        {SUBJECTS.map(subj => (
          <button key={subj.id}
            onClick={() => { setActiveSubjectId(subj.id); setOpenSteps({ [`${subj.id}-0-0`]: true }) }}
            style={{ flexShrink: 0, padding: '10px 18px', borderRadius: '30px', border: `2px solid ${subj.color}`, fontSize: '15px', fontWeight: 700, cursor: 'pointer',
              background: activeSubjectId === subj.id ? subj.color : '#ffffff',
              color: activeSubjectId === subj.id ? '#ffffff' : subj.color,
              transition: 'all 0.2s' }}>
            {subj.icon} {subj.name}
          </button>
        ))}
      </div>

      {/* Environment wraps session content only */}
      <SubjectEnvironment subjectId={activeSubjectId}>
        <div>
          {sessions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(255,255,255,0.04)', borderRadius: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '15px', fontWeight: 700 }}>
              Content for {profile.bandLabel} is coming soon! 🌱
            </div>
          ) : sessions.map((session, sessionIdx) => {
            const sessionUnlocked = isSessionUnlocked(sessionIdx)
            const allDone = session.steps.length > 0 && session.steps.every((_, si) => completedSteps[`${activeSubjectId}-${sessionIdx}-${si}`])

            return (
              <div key={sessionIdx} style={{ marginBottom: '16px', borderRadius: '20px', overflow: 'hidden',
                border: `2px solid ${sessionUnlocked ? subjectColor : 'rgba(255,255,255,0.08)'}`,
                opacity: sessionUnlocked ? 1 : 0.45,
                background: 'rgba(10,14,40,0.85)', backdropFilter: 'blur(8px)' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px',
                  background: sessionUnlocked ? `linear-gradient(135deg, ${subjectDark}88, ${subjectColor}22)` : 'rgba(255,255,255,0.02)' }}>
                  <span style={{ fontSize: '28px' }}>{session.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: sessionUnlocked ? '#fff' : 'rgba(255,255,255,0.25)' }}>{session.title}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{session.steps.length} steps · {session.xp} XP</div>
                  </div>
                  {allDone && <div style={{ background: '#FFE135', color: '#0a2e14', borderRadius: '20px', padding: '4px 12px', fontSize: '12px', fontWeight: 900 }}>✅ Done</div>}
                  {!sessionUnlocked && <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.15)' }}>🔒</div>}
                </div>

                {sessionUnlocked && session.steps.map((step, stepIdx) => {
                  const stepKey = `${activeSubjectId}-${sessionIdx}-${stepIdx}`
                  const stepUnlocked = isStepUnlocked(sessionIdx, stepIdx)
                  const isDone = completedSteps[stepKey]
                  const isOpen = openSteps[stepKey]
                  const canComplete = canCompleteStep(step, sessionIdx, stepIdx)
                  const typeAccent: Record<string, string> = { learn: '#FFD93D', activity: '#9FA8DA', quiz: '#81C784', mission: '#FFCC80' }
                  const accent = typeAccent[step.type] || '#FFD93D'

                  return (
                    <div key={stepIdx} style={{ borderTop: '1px solid rgba(255,255,255,0.06)', opacity: stepUnlocked ? 1 : 0.35 }}>
                      <div onClick={() => stepUnlocked && toggleStep(stepKey)}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 20px', cursor: stepUnlocked ? 'pointer' : 'default' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: isDone ? '#52b788' : stepUnlocked ? `${accent}33` : 'rgba(255,255,255,0.04)',
                          fontSize: '14px', fontWeight: 700, color: isDone ? '#fff' : accent, flexShrink: 0 }}>
                          {isDone ? '✓' : stepUnlocked ? `${stepIdx + 1}` : '🔒'}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.06em', color: accent, textTransform: 'uppercase' as const, marginBottom: '2px' }}>
                            {getStepTypeLabel(step.type)}
                          </div>
                          <div style={{ fontSize: '15px', fontWeight: 700, color: stepUnlocked ? '#fff' : 'rgba(255,255,255,0.25)' }}>{step.title}</div>
                        </div>
                        <div style={{ fontSize: '11px', fontWeight: 900, padding: '3px 10px', borderRadius: '10px', flexShrink: 0,
                          background: isDone ? 'rgba(82,183,136,0.2)' : stepUnlocked ? `${accent}33` : 'rgba(255,255,255,0.04)',
                          color: isDone ? '#a8ffd0' : stepUnlocked ? accent : 'rgba(255,255,255,0.15)' }}>
                          +{step.xp} XP
                        </div>
                        {stepUnlocked && (
                          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>▼</div>
                        )}
                      </div>

                      {isOpen && stepUnlocked && (
                        <div style={{ padding: '0 20px 20px' }}>
                          {step.type === 'learn' && renderLearnContent(step)}
                          {step.type === 'activity' && renderActivityContent(step)}
                          {step.type === 'quiz' && renderQuizContent(step, sessionIdx, stepIdx)}
                          {step.type === 'mission' && renderMissionContent(step)}
                          {!isDone && (
                            <button disabled={!canComplete} onClick={() => completeStep(sessionIdx, stepIdx, step.xp, getCompletionMessage(step.type))}
                              style={{ width: '100%', padding: '14px', borderRadius: '14px', border: 'none', fontSize: '17px', fontWeight: 900,
                                color: canComplete ? '#0a2e14' : 'rgba(255,255,255,0.2)',
                                background: canComplete ? '#FFE135' : 'rgba(255,255,255,0.06)',
                                cursor: canComplete ? 'pointer' : 'not-allowed', marginTop: '14px',
                                boxShadow: canComplete ? '0 4px 0 #c9a800' : 'none', transition: 'all 0.2s' }}>
                              {getButtonLabel(step.type)}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </SubjectEnvironment>

      {showToast && (
        <div style={{ position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
          background: '#FFE135', color: '#0a2e14', borderRadius: '30px', padding: '12px 28px',
          fontSize: '20px', fontWeight: 900, boxShadow: '0 8px 30px rgba(0,0,0,0.3)', zIndex: 9999 }}>
          {toastMsg}
        </div>
      )}

      {showModal && (
        <div onClick={() => setShowModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9998, padding: '20px' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'linear-gradient(135deg, #0a2e14, #1a3d20)', borderRadius: '24px', padding: '32px 28px', textAlign: 'center', maxWidth: '340px', width: '100%', border: '2px solid #FFE135' }}>
            <div style={{ fontSize: '52px', marginBottom: '12px' }}>⭐</div>
            <div style={{ fontSize: '28px', fontWeight: 900, color: '#FFE135', marginBottom: '8px' }}>+{modalXP} XP!</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>{modalMsg}</div>
            <button onClick={() => setShowModal(false)}
              style={{ background: '#FFE135', border: 'none', borderRadius: '14px', padding: '12px 32px', fontSize: '17px', fontWeight: 900, color: '#0a2e14', cursor: 'pointer', boxShadow: '0 4px 0 #c9a800' }}>
              Keep going! 🚀
            </button>
          </div>
        </div>
      )}

    </div>
  )
}