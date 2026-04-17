'use client'

import { useState } from 'react'
import { SUBJECTS } from '../data/subjects'
import type { Session, SessionStep, QuizQuestion } from '../data/subjects'

// ─── Digital Literacy Environment (static — no animations) ───────────────────

function DigitalLiteracyEnvironment({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', background: '#07091a', minHeight: '100vh', overflowX: 'hidden' }}>

      <svg style={{position:'absolute',top:0,left:0,width:'100%',height:'160px',display:'block',zIndex:1}} viewBox="0 0 800 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="160" fill="#07091a"/>
        <line x1="0" y1="140" x2="800" y2="140" stroke="#1a2a4a" strokeWidth="1"/>
        <line x1="60" y1="160" x2="60" y2="110" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="60" y1="110" x2="200" y2="110" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="12 8"/>
        <line x1="200" y1="110" x2="200" y2="80" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="200" y1="80" x2="380" y2="80" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 6"/>
        <line x1="380" y1="80" x2="380" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="380" y1="50" x2="600" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="12 8"/>
        <line x1="600" y1="50" x2="600" y2="100" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="600" y1="100" x2="740" y2="100" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 6"/>
        <line x1="740" y1="100" x2="740" y2="160" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="140" y1="160" x2="140" y2="90" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="140" y1="90" x2="320" y2="90" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="8 6"/>
        <line x1="320" y1="90" x2="320" y2="60" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="320" y1="60" x2="500" y2="60" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="12 8"/>
        <line x1="500" y1="60" x2="500" y2="40" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="500" y1="40" x2="680" y2="40" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="8 6"/>
        <line x1="680" y1="40" x2="680" y2="100" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="680" y1="100" x2="800" y2="100" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="12 8"/>
        <line x1="260" y1="160" x2="260" y2="70" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="8 6"/>
        <line x1="260" y1="70" x2="450" y2="70" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="8 6"/>
        <line x1="450" y1="70" x2="450" y2="30" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.35"/>
        <line x1="450" y1="30" x2="760" y2="30" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="12 8"/>
        <rect x="54" y="104" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="194" y="74" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="374" y="44" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="594" y="94" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="734" y="94" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <circle cx="200" cy="110" r="5" fill="#64dcff"/>
        <circle cx="380" cy="80" r="4" fill="#ff9ff3"/>
        <circle cx="600" cy="50" r="5" fill="#64dcff"/>
        <circle cx="140" cy="90" r="4" fill="#ff9ff3"/>
        <circle cx="500" cy="60" r="4" fill="#a8ff78"/>
        <circle cx="260" cy="70" r="3" fill="#a8ff78"/>
        <rect x="30" y="20" width="28" height="20" rx="3" fill="none" stroke="#64dcff" strokeWidth="1" strokeOpacity="0.5"/>
        <line x1="36" y1="27" x2="52" y2="27" stroke="#64dcff" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="36" y1="33" x2="48" y2="33" stroke="#64dcff" strokeWidth="0.8" strokeOpacity="0.4"/>
        <rect x="700" y="15" width="26" height="18" rx="3" fill="none" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.5"/>
        <line x1="706" y1="22" x2="720" y2="22" stroke="#ff9ff3" strokeWidth="0.8" strokeOpacity="0.6"/>
        <line x1="706" y1="27" x2="716" y2="27" stroke="#ff9ff3" strokeWidth="0.8" strokeOpacity="0.4"/>
        <circle cx="760" cy="70" r="8" fill="none" stroke="#a8ff78" strokeWidth="1" strokeOpacity="0.5"/>
        <circle cx="760" cy="70" r="3" fill="#a8ff78" fillOpacity="0.4"/>
        <circle cx="100" cy="30" r="1.5" fill="#64dcff" fillOpacity="0.6"/>
        <circle cx="420" cy="20" r="1.5" fill="#ff9ff3" fillOpacity="0.6"/>
        <circle cx="560" cy="25" r="1" fill="#a8ff78" fillOpacity="0.5"/>
        <circle cx="640" cy="15" r="1.5" fill="#64dcff" fillOpacity="0.5"/>
      </svg>

      <svg style={{position:'absolute',top:0,left:0,width:'90px',height:'100%',display:'block',zIndex:1}} viewBox="0 0 90 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="900" fill="#07091a"/>
        <line x1="90" y1="0" x2="90" y2="900" stroke="#1a2a4a" strokeWidth="1"/>
        <line x1="30" y1="0" x2="30" y2="900" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="12 8"/>
        <line x1="30" y1="150" x2="70" y2="150" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="70" y1="150" x2="70" y2="280" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 6"/>
        <line x1="70" y1="280" x2="30" y2="280" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="30" y1="420" x2="65" y2="420" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="65" y1="420" x2="65" y2="560" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="12 8"/>
        <line x1="65" y1="560" x2="30" y2="560" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="30" y1="700" x2="70" y2="700" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="70" y1="700" x2="70" y2="820" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 6"/>
        <line x1="55" y1="0" x2="55" y2="900" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="8 6"/>
        <line x1="55" y1="200" x2="80" y2="200" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="80" y1="200" x2="80" y2="360" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 8"/>
        <line x1="80" y1="360" x2="55" y2="360" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="55" y1="500" x2="78" y2="500" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="78" y1="500" x2="78" y2="650" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="8 6"/>
        <line x1="15" y1="0" x2="15" y2="900" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="12 8"/>
        <line x1="15" y1="320" x2="40" y2="320" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="15" y1="600" x2="45" y2="600" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.3"/>
        <rect x="24" y="144" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="24" y="274" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="24" y="414" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="24" y="554" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="24" y="694" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <circle cx="30" cy="150" r="4" fill="#64dcff"/>
        <circle cx="70" cy="280" r="3" fill="#64dcff"/>
        <circle cx="30" cy="420" r="4" fill="#ff9ff3"/>
        <circle cx="65" cy="560" r="3" fill="#ff9ff3"/>
        <circle cx="30" cy="700" r="4" fill="#a8ff78"/>
        <circle cx="55" cy="360" r="3" fill="#ff9ff3"/>
        <rect x="8" y="180" width="20" height="14" rx="2" fill="none" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="11" y1="185" x2="25" y2="185" stroke="#a8ff78" strokeWidth="0.6" strokeOpacity="0.5"/>
        <line x1="11" y1="189" x2="22" y2="189" stroke="#a8ff78" strokeWidth="0.6" strokeOpacity="0.3"/>
        <rect x="8" y="470" width="20" height="14" rx="2" fill="none" stroke="#ff9ff3" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="11" y1="475" x2="25" y2="475" stroke="#ff9ff3" strokeWidth="0.6" strokeOpacity="0.5"/>
        <line x1="11" y1="479" x2="22" y2="479" stroke="#ff9ff3" strokeWidth="0.6" strokeOpacity="0.3"/>
        <circle cx="20" cy="760" r="7" fill="none" stroke="#64dcff" strokeWidth="1" strokeOpacity="0.5"/>
        <circle cx="20" cy="760" r="2.5" fill="#64dcff" fillOpacity="0.4"/>
        <circle cx="45" cy="100" r="1.5" fill="#64dcff" fillOpacity="0.5"/>
        <circle cx="60" cy="440" r="1.5" fill="#ff9ff3" fillOpacity="0.5"/>
        <circle cx="25" cy="640" r="1" fill="#a8ff78" fillOpacity="0.4"/>
        <circle cx="50" cy="850" r="1.5" fill="#64dcff" fillOpacity="0.4"/>
      </svg>

      <svg style={{position:'absolute',top:0,right:0,width:'90px',height:'100%',display:'block',zIndex:1,transform:'scaleX(-1)'}} viewBox="0 0 90 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="900" fill="#07091a"/>
        <line x1="90" y1="0" x2="90" y2="900" stroke="#1a2a4a" strokeWidth="1"/>
        <line x1="30" y1="0" x2="30" y2="900" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="12 8"/>
        <line x1="30" y1="150" x2="70" y2="150" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="70" y1="150" x2="70" y2="280" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 6"/>
        <line x1="70" y1="280" x2="30" y2="280" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="30" y1="420" x2="65" y2="420" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="65" y1="420" x2="65" y2="560" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="12 8"/>
        <line x1="65" y1="560" x2="30" y2="560" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="30" y1="700" x2="70" y2="700" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="70" y1="700" x2="70" y2="820" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 6"/>
        <line x1="55" y1="0" x2="55" y2="900" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="8 6"/>
        <line x1="55" y1="200" x2="80" y2="200" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="80" y1="200" x2="80" y2="360" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 8"/>
        <line x1="80" y1="360" x2="55" y2="360" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="55" y1="500" x2="78" y2="500" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="78" y1="500" x2="78" y2="650" stroke="#ff9ff3" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="8 6"/>
        <line x1="15" y1="0" x2="15" y2="900" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="12 8"/>
        <line x1="15" y1="320" x2="40" y2="320" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="15" y1="600" x2="45" y2="600" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.3"/>
        <rect x="24" y="144" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="24" y="274" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="24" y="414" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="24" y="554" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="24" y="694" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <circle cx="30" cy="150" r="4" fill="#64dcff"/>
        <circle cx="70" cy="280" r="3" fill="#64dcff"/>
        <circle cx="30" cy="420" r="4" fill="#ff9ff3"/>
        <circle cx="65" cy="560" r="3" fill="#ff9ff3"/>
        <circle cx="30" cy="700" r="4" fill="#a8ff78"/>
        <circle cx="55" cy="360" r="3" fill="#ff9ff3"/>
        <rect x="8" y="180" width="20" height="14" rx="2" fill="none" stroke="#a8ff78" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="11" y1="185" x2="25" y2="185" stroke="#a8ff78" strokeWidth="0.6" strokeOpacity="0.5"/>
        <line x1="11" y1="189" x2="22" y2="189" stroke="#a8ff78" strokeWidth="0.6" strokeOpacity="0.3"/>
        <rect x="8" y="470" width="20" height="14" rx="2" fill="none" stroke="#ff9ff3" strokeWidth="0.8" strokeOpacity="0.5"/>
        <circle cx="20" cy="760" r="7" fill="none" stroke="#64dcff" strokeWidth="1" strokeOpacity="0.5"/>
        <circle cx="20" cy="760" r="2.5" fill="#64dcff" fillOpacity="0.4"/>
        <circle cx="45" cy="100" r="1.5" fill="#64dcff" fillOpacity="0.5"/>
        <circle cx="60" cy="440" r="1.5" fill="#ff9ff3" fillOpacity="0.5"/>
        <circle cx="25" cy="640" r="1" fill="#a8ff78" fillOpacity="0.4"/>
      </svg>

      <svg style={{position:'absolute',bottom:0,left:0,width:'100%',height:'100px',display:'block',zIndex:1,transform:'scaleY(-1)'}} viewBox="0 0 800 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="100" fill="#07091a"/>
        <line x1="0" y1="60" x2="800" y2="60" stroke="#1a2a4a" strokeWidth="1"/>
        <line x1="60" y1="0" x2="60" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="60" y1="50" x2="200" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="12 8"/>
        <line x1="200" y1="50" x2="200" y2="20" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="200" y1="20" x2="450" y2="20" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 6"/>
        <line x1="450" y1="20" x2="450" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="450" y1="50" x2="680" y2="50" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="12 8"/>
        <line x1="680" y1="50" x2="680" y2="0" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="140" y1="0" x2="140" y2="40" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="140" y1="40" x2="340" y2="40" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="8 6"/>
        <line x1="340" y1="40" x2="340" y2="10" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4"/>
        <line x1="340" y1="10" x2="590" y2="10" stroke="#ff9ff3" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="12 8"/>
        <circle cx="200" cy="50" r="4" fill="#64dcff"/>
        <circle cx="450" cy="20" r="3" fill="#64dcff"/>
        <circle cx="140" cy="40" r="3" fill="#ff9ff3"/>
        <circle cx="340" cy="10" r="3" fill="#ff9ff3"/>
        <rect x="54" y="44" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
        <rect x="194" y="14" width="12" height="12" rx="2" fill="none" stroke="#64dcff" strokeWidth="1.5" strokeOpacity="0.8"/>
      </svg>

      <div style={{position:'relative',zIndex:10,margin:'140px 100px 80px 100px'}}>
        {children}
      </div>
    </div>
  )
}

// ─── Natural World Environment (static rainforest) ────────────────────────────

function NaturalWorldEnvironment({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', background: '#081a06', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* Top — forest canopy */}
      <svg style={{position:'absolute',top:0,left:0,width:'100%',height:'160px',display:'block',zIndex:1}} viewBox="0 0 800 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="160" fill="#081a06"/>
        <ellipse cx="400" cy="0" rx="360" ry="55" fill="rgba(168,255,120,0.03)"/>
        {/* Tree trunks */}
        <rect x="58" y="62" width="22" height="98" fill="#2a1208" rx="2"/>
        <rect x="61" y="62" width="14" height="98" fill="#321a0a" rx="1"/>
        <rect x="185" y="32" width="26" height="128" fill="#2a1208" rx="2"/>
        <rect x="189" y="32" width="16" height="128" fill="#321a0a" rx="1"/>
        <rect x="370" y="22" width="28" height="138" fill="#2a1208" rx="2"/>
        <rect x="374" y="22" width="18" height="138" fill="#321a0a" rx="1"/>
        <rect x="547" y="42" width="24" height="118" fill="#2a1208" rx="2"/>
        <rect x="550" y="42" width="16" height="118" fill="#321a0a" rx="1"/>
        <rect x="703" y="52" width="22" height="108" fill="#2a1208" rx="2"/>
        <rect x="706" y="52" width="14" height="108" fill="#321a0a" rx="1"/>
        <rect x="292" y="48" width="16" height="112" fill="#2a1208" rx="2"/>
        <rect x="472" y="58" width="18" height="102" fill="#2a1208" rx="2"/>
        {/* Dark canopy masses */}
        <ellipse cx="69" cy="55" rx="74" ry="50" fill="#0b3018"/>
        <ellipse cx="198" cy="26" rx="88" ry="54" fill="#0c3318"/>
        <ellipse cx="384" cy="18" rx="98" ry="58" fill="#0b3018"/>
        <ellipse cx="559" cy="36" rx="85" ry="52" fill="#0c3318"/>
        <ellipse cx="714" cy="48" rx="80" ry="48" fill="#0b3018"/>
        <ellipse cx="300" cy="40" rx="72" ry="47" fill="#0c3318"/>
        <ellipse cx="480" cy="50" rx="70" ry="44" fill="#0b3018"/>
        {/* Mid-green leaf masses */}
        <ellipse cx="56" cy="58" rx="56" ry="35" fill="#155c28"/>
        <ellipse cx="142" cy="44" rx="54" ry="31" fill="#186030"/>
        <ellipse cx="200" cy="28" rx="64" ry="37" fill="#155c28"/>
        <ellipse cx="272" cy="48" rx="57" ry="33" fill="#186030"/>
        <ellipse cx="312" cy="36" rx="60" ry="35" fill="#155c28"/>
        <ellipse cx="390" cy="20" rx="70" ry="40" fill="#186030"/>
        <ellipse cx="454" cy="38" rx="57" ry="31" fill="#155c28"/>
        <ellipse cx="487" cy="50" rx="54" ry="31" fill="#186030"/>
        <ellipse cx="562" cy="36" rx="62" ry="36" fill="#155c28"/>
        <ellipse cx="638" cy="48" rx="57" ry="31" fill="#186030"/>
        <ellipse cx="722" cy="46" rx="60" ry="33" fill="#155c28"/>
        <ellipse cx="782" cy="36" rx="40" ry="26" fill="#186030"/>
        {/* Bright green leaf highlights */}
        <ellipse cx="63" cy="62" rx="33" ry="19" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="152" cy="50" rx="35" ry="19" fill="#2a8c42" fillOpacity="0.85"/>
        <ellipse cx="208" cy="33" rx="40" ry="21" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="318" cy="42" rx="37" ry="19" fill="#2a8c42" fillOpacity="0.85"/>
        <ellipse cx="398" cy="26" rx="42" ry="21" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="464" cy="44" rx="35" ry="19" fill="#2a8c42" fillOpacity="0.85"/>
        <ellipse cx="568" cy="42" rx="38" ry="19" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="645" cy="53" rx="35" ry="18" fill="#2a8c42" fillOpacity="0.85"/>
        <ellipse cx="728" cy="50" rx="37" ry="19" fill="#2a8c42" fillOpacity="0.9"/>
        {/* Lightest leaf tips */}
        <ellipse cx="76" cy="66" rx="19" ry="11" fill="#3db35a" fillOpacity="0.7"/>
        <ellipse cx="218" cy="38" rx="21" ry="11" fill="#3db35a" fillOpacity="0.65"/>
        <ellipse cx="408" cy="30" rx="23" ry="12" fill="#3db35a" fillOpacity="0.7"/>
        <ellipse cx="578" cy="46" rx="21" ry="11" fill="#3db35a" fillOpacity="0.65"/>
        <ellipse cx="738" cy="54" rx="19" ry="11" fill="#3db35a" fillOpacity="0.7"/>
        {/* Magical sparkles */}
        <circle cx="132" cy="16" r="2" fill="#a8ff78" fillOpacity="0.8"/>
        <circle cx="282" cy="12" r="1.5" fill="#a8ff78" fillOpacity="0.7"/>
        <circle cx="442" cy="18" r="2" fill="#a8ff78" fillOpacity="0.8"/>
        <circle cx="597" cy="14" r="1.5" fill="#a8ff78" fillOpacity="0.7"/>
        <circle cx="757" cy="10" r="2" fill="#a8ff78" fillOpacity="0.6"/>
        <circle cx="342" cy="28" r="1" fill="#ffd700" fillOpacity="0.5"/>
        <circle cx="512" cy="22" r="1" fill="#ffd700" fillOpacity="0.5"/>
        <circle cx="170" cy="20" r="1" fill="#a8ff78" fillOpacity="0.5"/>
        <circle cx="682" cy="16" r="1" fill="#ffd700" fillOpacity="0.4"/>
        {/* Ground ferns at bottom */}
        <ellipse cx="18" cy="157" rx="20" ry="9" fill="#155c28"/>
        <ellipse cx="65" cy="159" rx="26" ry="7" fill="#186030"/>
        <ellipse cx="120" cy="157" rx="24" ry="8" fill="#155c28"/>
        <ellipse cx="180" cy="159" rx="28" ry="7" fill="#186030"/>
        <ellipse cx="245" cy="157" rx="25" ry="8" fill="#155c28"/>
        <ellipse cx="315" cy="159" rx="28" ry="7" fill="#186030"/>
        <ellipse cx="390" cy="157" rx="26" ry="8" fill="#155c28"/>
        <ellipse cx="465" cy="159" rx="28" ry="7" fill="#186030"/>
        <ellipse cx="540" cy="157" rx="25" ry="8" fill="#155c28"/>
        <ellipse cx="615" cy="159" rx="28" ry="7" fill="#186030"/>
        <ellipse cx="690" cy="157" rx="25" ry="8" fill="#155c28"/>
        <ellipse cx="758" cy="159" rx="26" ry="7" fill="#186030"/>
        <ellipse cx="794" cy="157" rx="18" ry="7" fill="#155c28"/>
        <line x1="0" y1="140" x2="800" y2="140" stroke="#2a8c42" strokeWidth="1" strokeOpacity="0.2"/>
      </svg>

      {/* Left — tree trunk and vines */}
      <svg style={{position:'absolute',top:0,left:0,width:'90px',height:'100%',display:'block',zIndex:1}} viewBox="0 0 90 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="900" fill="#081a06"/>
        <line x1="90" y1="0" x2="90" y2="900" stroke="#2a8c42" strokeWidth="1" strokeOpacity="0.2"/>
        {/* Main tree trunk */}
        <rect x="6" y="0" width="32" height="900" fill="#2a1208" rx="3"/>
        <line x1="15" y1="0" x2="13" y2="900" stroke="#1a0804" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="26" y1="0" x2="28" y2="900" stroke="#3a1a0a" strokeWidth="1" strokeOpacity="0.4"/>
        {/* Vine paths */}
        <path d="M 50 0 Q 66 100 48 200 Q 32 300 52 400 Q 70 500 48 600 Q 28 700 50 800 Q 65 870 50 900" stroke="#1e5c2e" strokeWidth="3" fill="none" strokeOpacity="0.7"/>
        <path d="M 68 0 Q 80 120 65 240 Q 50 360 68 480 Q 83 600 65 720 Q 50 820 65 900" stroke="#2a8c42" strokeWidth="1.5" fill="none" strokeOpacity="0.4"/>
        {/* Leaf clusters */}
        <ellipse cx="60" cy="126" rx="34" ry="21" fill="#0c3318"/>
        <ellipse cx="63" cy="128" rx="24" ry="15" fill="#155c28"/>
        <ellipse cx="66" cy="130" rx="15" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="62" cy="276" rx="36" ry="22" fill="#0d3a1c"/>
        <ellipse cx="65" cy="278" rx="26" ry="16" fill="#186030"/>
        <ellipse cx="68" cy="280" rx="16" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="60" cy="436" rx="34" ry="21" fill="#0c3318"/>
        <ellipse cx="63" cy="438" rx="24" ry="15" fill="#155c28"/>
        <ellipse cx="66" cy="440" rx="15" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="62" cy="596" rx="36" ry="22" fill="#0d3a1c"/>
        <ellipse cx="65" cy="598" rx="26" ry="16" fill="#186030"/>
        <ellipse cx="68" cy="600" rx="16" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="60" cy="756" rx="34" ry="21" fill="#0c3318"/>
        <ellipse cx="63" cy="758" rx="24" ry="15" fill="#155c28"/>
        <ellipse cx="66" cy="760" rx="15" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        {/* Small ferns */}
        <ellipse cx="52" cy="198" rx="15" ry="6" fill="#186030" fillOpacity="0.7"/>
        <ellipse cx="56" cy="358" rx="14" ry="5" fill="#155c28" fillOpacity="0.7"/>
        <ellipse cx="52" cy="518" rx="15" ry="6" fill="#186030" fillOpacity="0.7"/>
        <ellipse cx="56" cy="678" rx="14" ry="5" fill="#155c28" fillOpacity="0.7"/>
        <ellipse cx="52" cy="838" rx="15" ry="6" fill="#186030" fillOpacity="0.7"/>
        {/* Sparkles */}
        <circle cx="72" cy="168" r="1.5" fill="#a8ff78" fillOpacity="0.7"/>
        <circle cx="74" cy="338" r="1.5" fill="#a8ff78" fillOpacity="0.6"/>
        <circle cx="72" cy="508" r="1.5" fill="#a8ff78" fillOpacity="0.7"/>
        <circle cx="74" cy="678" r="1.5" fill="#a8ff78" fillOpacity="0.6"/>
        <circle cx="72" cy="848" r="1.5" fill="#a8ff78" fillOpacity="0.7"/>
        <circle cx="62" cy="218" r="1" fill="#ffd700" fillOpacity="0.5"/>
        <circle cx="64" cy="443" r="1" fill="#ffd700" fillOpacity="0.5"/>
        <circle cx="62" cy="668" r="1" fill="#ffd700" fillOpacity="0.4"/>
      </svg>

      {/* Right — mirrored */}
      <svg style={{position:'absolute',top:0,right:0,width:'90px',height:'100%',display:'block',zIndex:1,transform:'scaleX(-1)'}} viewBox="0 0 90 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="900" fill="#081a06"/>
        <line x1="90" y1="0" x2="90" y2="900" stroke="#2a8c42" strokeWidth="1" strokeOpacity="0.2"/>
        <rect x="6" y="0" width="32" height="900" fill="#2a1208" rx="3"/>
        <line x1="15" y1="0" x2="13" y2="900" stroke="#1a0804" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="26" y1="0" x2="28" y2="900" stroke="#3a1a0a" strokeWidth="1" strokeOpacity="0.4"/>
        <path d="M 50 0 Q 66 100 48 200 Q 32 300 52 400 Q 70 500 48 600 Q 28 700 50 800 Q 65 870 50 900" stroke="#1e5c2e" strokeWidth="3" fill="none" strokeOpacity="0.7"/>
        <path d="M 68 0 Q 80 120 65 240 Q 50 360 68 480 Q 83 600 65 720 Q 50 820 65 900" stroke="#2a8c42" strokeWidth="1.5" fill="none" strokeOpacity="0.4"/>
        <ellipse cx="60" cy="126" rx="34" ry="21" fill="#0c3318"/>
        <ellipse cx="63" cy="128" rx="24" ry="15" fill="#155c28"/>
        <ellipse cx="66" cy="130" rx="15" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="62" cy="276" rx="36" ry="22" fill="#0d3a1c"/>
        <ellipse cx="65" cy="278" rx="26" ry="16" fill="#186030"/>
        <ellipse cx="68" cy="280" rx="16" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="60" cy="436" rx="34" ry="21" fill="#0c3318"/>
        <ellipse cx="63" cy="438" rx="24" ry="15" fill="#155c28"/>
        <ellipse cx="66" cy="440" rx="15" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="62" cy="596" rx="36" ry="22" fill="#0d3a1c"/>
        <ellipse cx="65" cy="598" rx="26" ry="16" fill="#186030"/>
        <ellipse cx="68" cy="600" rx="16" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="60" cy="756" rx="34" ry="21" fill="#0c3318"/>
        <ellipse cx="63" cy="758" rx="24" ry="15" fill="#155c28"/>
        <ellipse cx="66" cy="760" rx="15" ry="9" fill="#2a8c42" fillOpacity="0.9"/>
        <ellipse cx="52" cy="198" rx="15" ry="6" fill="#186030" fillOpacity="0.7"/>
        <ellipse cx="56" cy="358" rx="14" ry="5" fill="#155c28" fillOpacity="0.7"/>
        <ellipse cx="52" cy="518" rx="15" ry="6" fill="#186030" fillOpacity="0.7"/>
        <ellipse cx="56" cy="678" rx="14" ry="5" fill="#155c28" fillOpacity="0.7"/>
        <ellipse cx="52" cy="838" rx="15" ry="6" fill="#186030" fillOpacity="0.7"/>
        <circle cx="72" cy="168" r="1.5" fill="#a8ff78" fillOpacity="0.7"/>
        <circle cx="74" cy="338" r="1.5" fill="#a8ff78" fillOpacity="0.6"/>
        <circle cx="72" cy="508" r="1.5" fill="#a8ff78" fillOpacity="0.7"/>
        <circle cx="74" cy="678" r="1.5" fill="#a8ff78" fillOpacity="0.6"/>
        <circle cx="72" cy="848" r="1.5" fill="#a8ff78" fillOpacity="0.7"/>
      </svg>

      {/* Bottom — forest floor */}
      <svg style={{position:'absolute',bottom:0,left:0,width:'100%',height:'100px',display:'block',zIndex:1,transform:'scaleY(-1)'}} viewBox="0 0 800 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="100" fill="#081a06"/>
        <line x1="0" y1="60" x2="800" y2="60" stroke="#2a8c42" strokeWidth="1" strokeOpacity="0.2"/>
        {/* Roots from tree trunks */}
        <path d="M 58 0 Q 50 25 65 45 Q 76 60 60 80 Q 50 90 55 100" stroke="#2a1208" strokeWidth="5" fill="none" strokeLinecap="round" strokeOpacity="0.8"/>
        <path d="M 69 0 Q 80 20 70 40 Q 60 55 70 75 Q 78 88 73 100" stroke="#1a0804" strokeWidth="2" fill="none" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M 188 0 Q 178 22 192 42 Q 205 58 190 78 Q 180 90 185 100" stroke="#2a1208" strokeWidth="5" fill="none" strokeLinecap="round" strokeOpacity="0.8"/>
        <path d="M 375 0 Q 365 25 380 45 Q 393 60 378 80 Q 368 90 373 100" stroke="#2a1208" strokeWidth="5" fill="none" strokeLinecap="round" strokeOpacity="0.8"/>
        <path d="M 548 0 Q 538 22 552 42 Q 565 58 550 78 Q 540 90 545 100" stroke="#2a1208" strokeWidth="5" fill="none" strokeLinecap="round" strokeOpacity="0.8"/>
        <path d="M 704 0 Q 694 25 708 45 Q 718 60 705 80 Q 695 90 700 100" stroke="#2a1208" strokeWidth="5" fill="none" strokeLinecap="round" strokeOpacity="0.8"/>
        {/* Fern ground cover */}
        <ellipse cx="25" cy="84" rx="24" ry="12" fill="#155c28"/>
        <ellipse cx="88" cy="87" rx="28" ry="10" fill="#186030"/>
        <ellipse cx="158" cy="84" rx="26" ry="11" fill="#155c28"/>
        <ellipse cx="232" cy="87" rx="30" ry="10" fill="#186030"/>
        <ellipse cx="310" cy="84" rx="28" ry="11" fill="#155c28"/>
        <ellipse cx="390" cy="87" rx="30" ry="10" fill="#186030"/>
        <ellipse cx="468" cy="84" rx="28" ry="11" fill="#155c28"/>
        <ellipse cx="548" cy="87" rx="28" ry="10" fill="#186030"/>
        <ellipse cx="625" cy="84" rx="28" ry="11" fill="#155c28"/>
        <ellipse cx="702" cy="87" rx="26" ry="10" fill="#186030"/>
        <ellipse cx="770" cy="84" rx="24" ry="11" fill="#155c28"/>
        {/* Mushrooms */}
        <ellipse cx="120" cy="78" rx="7" ry="4" fill="#5a2a0a" fillOpacity="0.7"/>
        <circle cx="120" cy="75" r="5" fill="#8b3a14" fillOpacity="0.5"/>
        <ellipse cx="430" cy="78" rx="7" ry="4" fill="#5a2a0a" fillOpacity="0.7"/>
        <circle cx="430" cy="75" r="5" fill="#cd5c5c" fillOpacity="0.4"/>
        <ellipse cx="668" cy="78" rx="7" ry="4" fill="#5a2a0a" fillOpacity="0.7"/>
        <circle cx="668" cy="75" r="5" fill="#8b3a14" fillOpacity="0.5"/>
        {/* Ground sparkles */}
        <circle cx="200" cy="70" r="1" fill="#a8ff78" fillOpacity="0.5"/>
        <circle cx="500" cy="70" r="1" fill="#a8ff78" fillOpacity="0.5"/>
        <circle cx="350" cy="66" r="1" fill="#a8ff78" fillOpacity="0.4"/>
      </svg>

      <div style={{position:'relative',zIndex:10,margin:'140px 100px 80px 100px'}}>
        {children}
      </div>
    </div>
  )
}

// ─── Money Skills Environment (static market) ─────────────────────────────────

function MoneySkillsEnvironment({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', background: '#FDF6E3', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* Top — overhead lighting strip */}
      <svg style={{position:'absolute',top:0,left:0,width:'100%',height:'80px',display:'block',zIndex:1}} viewBox="0 0 800 80" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="80" fill="#FFE4A0"/>
        <rect y="0" width="800" height="6" fill="#F5C842" fillOpacity="0.7"/>
        <rect y="72" width="800" height="8" fill="#E8B820" fillOpacity="0.5"/>
        {/* Light fixtures */}
        <rect x="110" y="6" width="80" height="10" rx="3" fill="#D4A010" fillOpacity="0.7"/>
        <line x1="150" y1="16" x2="150" y2="36" stroke="#B08010" strokeWidth="2"/>
        <ellipse cx="150" cy="46" rx="12" ry="18" fill="#FFF0A0" fillOpacity="0.95"/>
        <ellipse cx="150" cy="46" rx="8" ry="12" fill="#FFFCE0" fillOpacity="0.9"/>
        <rect x="330" y="6" width="80" height="10" rx="3" fill="#D4A010" fillOpacity="0.7"/>
        <line x1="370" y1="16" x2="370" y2="36" stroke="#B08010" strokeWidth="2"/>
        <ellipse cx="370" cy="46" rx="12" ry="18" fill="#FFF0A0" fillOpacity="0.95"/>
        <ellipse cx="370" cy="46" rx="8" ry="12" fill="#FFFCE0" fillOpacity="0.9"/>
        <rect x="550" y="6" width="80" height="10" rx="3" fill="#D4A010" fillOpacity="0.7"/>
        <line x1="590" y1="16" x2="590" y2="36" stroke="#B08010" strokeWidth="2"/>
        <ellipse cx="590" cy="46" rx="12" ry="18" fill="#FFF0A0" fillOpacity="0.95"/>
        <ellipse cx="590" cy="46" rx="8" ry="12" fill="#FFFCE0" fillOpacity="0.9"/>
      </svg>

      {/* Left shelf */}
      <svg style={{position:'absolute',top:0,left:0,width:'75px',height:'100%',display:'block',zIndex:2}} viewBox="0 0 75 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect width="75" height="900" fill="#8B6914"/>
        <rect x="70" y="0" width="5" height="900" fill="#5D3A1A"/>
        {/* Shelf planks at intervals — every 110px */}
        {/* Shelf at y=130 */}
        <rect x="0" y="128" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="125" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="128" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <text x="4" y="135" fontSize="5" fill="#145a28" fontWeight="bold">£</text>
        {/* Products on shelf row 1 */}
        <rect x="4" y="100" width="14" height="26" rx="2" fill="#c0392b"/>
        <rect x="22" y="104" width="12" height="22" rx="2" fill="#2980b9"/>
        <rect x="38" y="106" width="14" height="20" rx="2" fill="#27ae60"/>
        <circle cx="60" cy="116" r="10" fill="#e67e22"/>
        {/* Shelf at y=240 */}
        <rect x="0" y="238" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="235" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="238" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <text x="4" y="245" fontSize="5" fill="#145a28" fontWeight="bold">£</text>
        {/* Products row 2 */}
        <rect x="4" y="210" width="12" height="26" rx="2" fill="#8e44ad"/>
        <circle cx="25" cy="224" r="11" fill="#e74c3c"/>
        <rect x="38" y="214" width="14" height="22" rx="2" fill="#16a085"/>
        <rect x="56" y="216" width="13" height="20" rx="2" fill="#f39c12"/>
        {/* Shelf at y=350 */}
        <rect x="0" y="348" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="345" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="348" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <text x="4" y="355" fontSize="5" fill="#145a28" fontWeight="bold">£</text>
        {/* Products row 3 */}
        <rect x="4" y="318" width="14" height="28" rx="2" fill="#2ecc71"/>
        <rect x="22" y="322" width="12" height="24" rx="2" fill="#e74c3c"/>
        <circle cx="45" cy="333" r="11" fill="#3498db"/>
        <rect x="57" y="320" width="13" height="26" rx="2" fill="#e67e22"/>
        {/* Shelf at y=460 */}
        <rect x="0" y="458" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="455" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="458" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <text x="4" y="465" fontSize="5" fill="#145a28" fontWeight="bold">£</text>
        {/* Products row 4 */}
        <rect x="4" y="428" width="13" height="28" rx="2" fill="#c0392b"/>
        <circle cx="24" cy="442" r="10" fill="#9b59b6"/>
        <rect x="37" y="430" width="14" height="26" rx="2" fill="#1abc9c"/>
        <rect x="55" y="432" width="14" height="24" rx="2" fill="#f1c40f"/>
        {/* Shelf at y=570 */}
        <rect x="0" y="568" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="565" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="568" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <text x="4" y="575" fontSize="5" fill="#145a28" fontWeight="bold">£</text>
        {/* Products row 5 */}
        <rect x="4" y="538" width="14" height="28" rx="2" fill="#2980b9"/>
        <rect x="22" y="542" width="12" height="24" rx="2" fill="#e74c3c"/>
        <circle cx="44" cy="552" r="10" fill="#27ae60"/>
        <rect x="56" y="540" width="13" height="26" rx="2" fill="#8e44ad"/>
        {/* Shelf at y=680 */}
        <rect x="0" y="678" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="675" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="678" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <text x="4" y="685" fontSize="5" fill="#145a28" fontWeight="bold">£</text>
        {/* Products row 6 */}
        <rect x="4" y="648" width="13" height="28" rx="2" fill="#e67e22"/>
        <circle cx="24" cy="662" r="10" fill="#c0392b"/>
        <rect x="37" y="650" width="14" height="26" rx="2" fill="#16a085"/>
        <rect x="55" y="652" width="14" height="24" rx="2" fill="#3498db"/>
        {/* Shelf at y=790 */}
        <rect x="0" y="788" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="785" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="788" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <text x="4" y="795" fontSize="5" fill="#145a28" fontWeight="bold">£</text>
        {/* Products row 7 */}
        <rect x="4" y="758" width="14" height="28" rx="2" fill="#2ecc71"/>
        <rect x="22" y="762" width="12" height="24" rx="2" fill="#e74c3c"/>
        <circle cx="44" cy="772" r="10" fill="#f39c12"/>
        <rect x="57" y="760" width="12" height="26" rx="2" fill="#9b59b6"/>
      </svg>

      {/* Right shelf — mirrored */}
      <svg style={{position:'absolute',top:0,right:0,width:'75px',height:'100%',display:'block',zIndex:2,transform:'scaleX(-1)'}} viewBox="0 0 75 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect width="75" height="900" fill="#8B6914"/>
        <rect x="70" y="0" width="5" height="900" fill="#5D3A1A"/>
        <rect x="0" y="128" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="125" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="128" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <rect x="4" y="100" width="14" height="26" rx="2" fill="#e74c3c"/>
        <rect x="22" y="104" width="12" height="22" rx="2" fill="#f39c12"/>
        <rect x="38" y="106" width="14" height="20" rx="2" fill="#3498db"/>
        <circle cx="60" cy="116" r="10" fill="#27ae60"/>
        <rect x="0" y="238" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="235" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="238" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <rect x="4" y="210" width="12" height="26" rx="2" fill="#1abc9c"/>
        <circle cx="25" cy="224" r="11" fill="#8e44ad"/>
        <rect x="38" y="214" width="14" height="22" rx="2" fill="#e67e22"/>
        <rect x="56" y="216" width="13" height="20" rx="2" fill="#c0392b"/>
        <rect x="0" y="348" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="345" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="348" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <rect x="4" y="318" width="14" height="28" rx="2" fill="#f1c40f"/>
        <rect x="22" y="322" width="12" height="24" rx="2" fill="#2980b9"/>
        <circle cx="45" cy="333" r="11" fill="#e74c3c"/>
        <rect x="57" y="320" width="13" height="26" rx="2" fill="#16a085"/>
        <rect x="0" y="458" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="455" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="458" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <rect x="4" y="428" width="13" height="28" rx="2" fill="#9b59b6"/>
        <circle cx="24" cy="442" r="10" fill="#e67e22"/>
        <rect x="37" y="430" width="14" height="26" rx="2" fill="#c0392b"/>
        <rect x="55" y="432" width="14" height="24" rx="2" fill="#2ecc71"/>
        <rect x="0" y="568" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="565" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="568" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <rect x="4" y="538" width="14" height="28" rx="2" fill="#e74c3c"/>
        <rect x="22" y="542" width="12" height="24" rx="2" fill="#3498db"/>
        <circle cx="44" cy="552" r="10" fill="#f39c12"/>
        <rect x="56" y="540" width="13" height="26" rx="2" fill="#27ae60"/>
        <rect x="0" y="678" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="675" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="678" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <rect x="4" y="648" width="13" height="28" rx="2" fill="#8e44ad"/>
        <circle cx="24" cy="662" r="10" fill="#2980b9"/>
        <rect x="37" y="650" width="14" height="26" rx="2" fill="#e74c3c"/>
        <rect x="55" y="652" width="14" height="24" rx="2" fill="#1abc9c"/>
        <rect x="0" y="788" width="75" height="10" fill="#6B4E0E"/>
        <rect x="0" y="785" width="75" height="4" fill="#9E7A1E"/>
        <rect x="2" y="788" width="14" height="8" rx="2" fill="#fff" fillOpacity="0.9"/>
        <rect x="4" y="758" width="14" height="28" rx="2" fill="#c0392b"/>
        <rect x="22" y="762" width="12" height="24" rx="2" fill="#9b59b6"/>
        <circle cx="44" cy="772" r="10" fill="#e67e22"/>
        <rect x="57" y="760" width="12" height="26" rx="2" fill="#3498db"/>
      </svg>

      {/* Bottom — tiled floor with trolley */}
      <svg style={{position:'absolute',bottom:0,left:0,width:'100%',height:'90px',display:'block',zIndex:1}} viewBox="0 0 800 90" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="90" fill="#E8DFC8"/>
        <line x1="0" y1="0" x2="800" y2="0" stroke="#CCC0A0" strokeWidth="1.5"/>
        {/* Tile grid */}
        <line x1="0" y1="30" x2="800" y2="30" stroke="#CCC0A0" strokeWidth="1"/>
        <line x1="0" y1="60" x2="800" y2="60" stroke="#CCC0A0" strokeWidth="1"/>
        <line x1="100" y1="0" x2="100" y2="90" stroke="#CCC0A0" strokeWidth="1"/>
        <line x1="200" y1="0" x2="200" y2="90" stroke="#CCC0A0" strokeWidth="1"/>
        <line x1="300" y1="0" x2="300" y2="90" stroke="#CCC0A0" strokeWidth="1"/>
        <line x1="400" y1="0" x2="400" y2="90" stroke="#CCC0A0" strokeWidth="1"/>
        <line x1="500" y1="0" x2="500" y2="90" stroke="#CCC0A0" strokeWidth="1"/>
        <line x1="600" y1="0" x2="600" y2="90" stroke="#CCC0A0" strokeWidth="1"/>
        <line x1="700" y1="0" x2="700" y2="90" stroke="#CCC0A0" strokeWidth="1"/>
        {/* Trolley (partial, bottom-centre) */}
        <rect x="340" y="20" width="120" height="50" rx="4" fill="none" stroke="#999" strokeWidth="3"/>
        <rect x="340" y="20" width="120" height="14" rx="2" fill="#bbb" fillOpacity="0.5"/>
        <line x1="340" y1="70" x2="320" y2="85" stroke="#999" strokeWidth="2.5"/>
        <line x1="460" y1="70" x2="480" y2="85" stroke="#999" strokeWidth="2.5"/>
        <circle cx="325" cy="86" r="5" fill="none" stroke="#888" strokeWidth="2"/>
        <circle cx="475" cy="86" r="5" fill="none" stroke="#888" strokeWidth="2"/>
        <line x1="320" y1="30" x2="335" y2="20" stroke="#999" strokeWidth="2"/>
      </svg>

      <div style={{position:'relative',zIndex:5,margin:'90px 90px 100px'}}>
        {children}
      </div>
    </div>
  )
}

// ─── Subject Environment Router ───────────────────────────────────────────────

function SubjectEnvironment({ subjectId, children }: { subjectId: string; children: React.ReactNode }) {
  if (subjectId === 'digital') return <DigitalLiteracyEnvironment>{children}</DigitalLiteracyEnvironment>
  if (subjectId === 'natural') return <NaturalWorldEnvironment>{children}</NaturalWorldEnvironment>
  if (subjectId === 'money') return <MoneySkillsEnvironment>{children}</MoneySkillsEnvironment>
  return <div style={{ padding: '20px' }}>{children}</div>
}

// ─── Interfaces ───────────────────────────────────────────────────────────────

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

// ─── SkillBuilder ─────────────────────────────────────────────────────────────

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
  const [modalBadge, setModalBadge] = useState<{ emoji: string; title: string; desc: string } | null>(null)

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

  function completeStep(sessionIdx: number, stepIdx: number, xp: number, msg: string, badge?: { emoji: string; title: string; desc: string }) {
    const key = `${activeSubjectId}-${sessionIdx}-${stepIdx}`
    if (completedSteps[key]) return
    setCompletedSteps(prev => ({ ...prev, [key]: true }))
    onXPGain(xp)
    setToastMsg(`+${xp} XP ⚡`)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
    setModalXP(xp)
    setModalMsg(msg)
    setModalBadge(badge || null)
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
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', fontSize: '16px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
        Content coming soon!
      </div>
    )
    const { intro, facts } = step.learnContent
    return (
      <div>
        <div style={{ background: 'rgba(255,248,225,0.1)', border: '2px solid rgba(255,217,61,0.4)', borderRadius: '14px', padding: '16px 18px', marginBottom: '12px', fontSize: '17px', fontWeight: 700, lineHeight: 1.6, color: '#fff' }}>
          <span style={{ fontSize: '28px', display: 'block', marginBottom: '8px' }}>📖</span>
          {intro}
        </div>
        {facts.map((fact: { icon: string; text: string }, i: number) => (
          <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: 'rgba(100,220,255,0.08)', border: '2px solid rgba(100,220,255,0.25)', borderRadius: '12px', padding: '12px 14px', marginBottom: '8px', fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
            <span style={{ fontSize: '20px', flexShrink: 0 }}>{fact.icon}</span>
            <span>{fact.text}</span>
          </div>
        ))}
      </div>
    )
  }

  function renderActivityContent(step: SessionStep) {
    if (!step?.activityContent) return (
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', fontSize: '16px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
        Content coming soon!
      </div>
    )
    const { childHears, doTogether, talkAbout } = step.activityContent
    return (
      <div>
        <div style={{ background: 'rgba(168,255,120,0.08)', border: '2px solid rgba(168,255,120,0.25)', borderRadius: '14px', padding: '14px 16px', marginBottom: '10px', fontSize: '17px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
          <span style={{ fontSize: '22px', display: 'block', marginBottom: '6px' }}>🔊</span>
          {childHears}
        </div>
        <div style={{ background: 'rgba(100,220,255,0.08)', border: '2px solid rgba(100,220,255,0.25)', borderRadius: '12px', padding: '12px 14px', marginBottom: '8px', fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          <span style={{ fontSize: '18px', marginRight: '6px' }}>🤝</span>
          {doTogether}
        </div>
        <div style={{ background: 'rgba(255,159,243,0.08)', border: '2px solid rgba(255,159,243,0.25)', borderRadius: '12px', padding: '12px 14px', fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          <span style={{ fontSize: '18px', marginRight: '6px' }}>💬</span>
          {talkAbout}
        </div>
      </div>
    )
  }

  function renderQuizContent(step: SessionStep, sessionIdx: number, stepIdx: number) {
    if (!step?.quizContent?.length) return (
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', fontSize: '16px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
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
              <div style={{ fontSize: '19px', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.4 }}>
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
                      style={{ background: bg, border, borderRadius: '12px', padding: '14px 16px', fontSize: '16px', fontWeight: 700, color, cursor: isAnswered ? 'default' : 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
                      {opt.label}
                    </button>
                  )
                })}
              </div>
              {answered && (
                <div style={{ marginTop: '10px', padding: '12px 14px', borderRadius: '12px', fontSize: '16px', fontWeight: 700, lineHeight: 1.5,
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
          <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: '4px' }}>
            Answer all questions to claim your XP
          </div>
        )}
      </div>
    )
  }

  function renderMissionContent(step: SessionStep) {
    if (!step?.missionContent) return (
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px', fontSize: '16px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
        Content coming soon!
      </div>
    )
    const { title, desc, note } = step.missionContent
    return (
      <div>
        <div style={{ background: 'linear-gradient(135deg, #0a2e14, #1a3d20)', borderRadius: '14px', padding: '18px', marginBottom: '10px' }}>
          <div style={{ fontSize: '22px', fontWeight: 900, color: '#FFE135', marginBottom: '8px' }}>🌍 {title}</div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>{desc}</div>
        </div>
        {note && (
          <div style={{ background: 'rgba(255,248,225,0.08)', border: '2px solid rgba(255,217,61,0.3)', borderRadius: '12px', padding: '12px 14px', fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            {note}
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>

      {/* Subject tabs — always visible, outside environment */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', padding: '18px 16px 14px', scrollbarWidth: 'none', background: 'var(--color-background-primary)', borderBottom: '1px solid var(--color-border-tertiary)' }}>
        {SUBJECTS.map(subj => (
          <button key={subj.id}
            onClick={() => { setActiveSubjectId(subj.id); setOpenSteps({ [`${subj.id}-0-0`]: true }) }}
            style={{ flexShrink: 0, padding: '12px 20px', borderRadius: '30px', border: `2px solid ${subj.color}`, fontSize: '17px', fontWeight: 700, cursor: 'pointer',
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
            <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(255,255,255,0.04)', borderRadius: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '17px', fontWeight: 700 }}>
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '18px 20px',
                  background: sessionUnlocked ? `linear-gradient(135deg, ${subjectDark}88, ${subjectColor}22)` : 'rgba(255,255,255,0.02)' }}>
                  <span style={{ fontSize: '30px' }}>{session.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: sessionUnlocked ? '#fff' : 'rgba(255,255,255,0.25)' }}>{session.title}</div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{session.steps.length} steps · {session.xp} XP</div>
                  </div>
                  {allDone && <div style={{ background: '#FFE135', color: '#0a2e14', borderRadius: '20px', padding: '4px 12px', fontSize: '14px', fontWeight: 900 }}>✅ Done</div>}
                  {!sessionUnlocked && <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.15)' }}>🔒</div>}
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
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', cursor: stepUnlocked ? 'pointer' : 'default' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: isDone ? '#52b788' : stepUnlocked ? `${accent}33` : 'rgba(255,255,255,0.04)',
                          fontSize: '16px', fontWeight: 700, color: isDone ? '#fff' : accent, flexShrink: 0 }}>
                          {isDone ? '✓' : stepUnlocked ? `${stepIdx + 1}` : '🔒'}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.06em', color: accent, textTransform: 'uppercase' as const, marginBottom: '2px' }}>
                            {getStepTypeLabel(step.type)}
                          </div>
                          <div style={{ fontSize: '17px', fontWeight: 700, color: stepUnlocked ? '#fff' : 'rgba(255,255,255,0.25)' }}>{step.title}</div>
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 900, padding: '4px 10px', borderRadius: '10px', flexShrink: 0,
                          background: isDone ? 'rgba(82,183,136,0.2)' : stepUnlocked ? `${accent}33` : 'rgba(255,255,255,0.04)',
                          color: isDone ? '#a8ffd0' : stepUnlocked ? accent : 'rgba(255,255,255,0.15)' }}>
                          +{step.xp} XP
                        </div>
                        {stepUnlocked && (
                          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>▼</div>
                        )}
                      </div>

                      {isOpen && stepUnlocked && (
                        <div style={{ padding: '0 20px 20px' }}>
                          {step.type === 'learn' && renderLearnContent(step)}
                          {step.type === 'activity' && renderActivityContent(step)}
                          {step.type === 'quiz' && renderQuizContent(step, sessionIdx, stepIdx)}
                          {step.type === 'mission' && renderMissionContent(step)}
                          {!isDone && (
                            <button disabled={!canComplete} onClick={() => completeStep(sessionIdx, stepIdx, step.xp, getCompletionMessage(step.type), step.type === 'mission' ? session.badge : undefined)}
                              style={{ width: '100%', padding: '16px', borderRadius: '14px', border: 'none', fontSize: '19px', fontWeight: 900,
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
          background: '#FFE135', color: '#0a2e14', borderRadius: '30px', padding: '14px 30px',
          fontSize: '22px', fontWeight: 900, boxShadow: '0 8px 30px rgba(0,0,0,0.3)', zIndex: 9999 }}>
          {toastMsg}
        </div>
      )}

      {showModal && (
        <div onClick={() => setShowModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9998, padding: '20px' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'linear-gradient(135deg, #0a2e14, #1a3d20)', borderRadius: '24px', padding: '36px 28px', textAlign: 'center', maxWidth: '360px', width: '100%', border: '2px solid #FFE135' }}>
            {modalBadge ? (
              <>
                <div style={{ fontSize: '64px', marginBottom: '8px' }}>{modalBadge.emoji}</div>
                <div style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.1em', color: '#FFE135', textTransform: 'uppercase', marginBottom: '4px' }}>Badge Earned!</div>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>{modalBadge.title}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', marginBottom: '16px' }}>{modalBadge.desc}</div>
                <div style={{ height: '1px', background: 'rgba(255,225,53,0.3)', marginBottom: '16px' }} />
              </>
            ) : (
              <div style={{ fontSize: '56px', marginBottom: '12px' }}>⭐</div>
            )}
            <div style={{ fontSize: '32px', fontWeight: 900, color: '#FFE135', marginBottom: '8px' }}>+{modalXP} XP!</div>
            <div style={{ fontSize: '17px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>{modalMsg}</div>
            <button onClick={() => setShowModal(false)}
              style={{ background: '#FFE135', border: 'none', borderRadius: '14px', padding: '14px 32px', fontSize: '19px', fontWeight: 900, color: '#0a2e14', cursor: 'pointer', boxShadow: '0 4px 0 #c9a800' }}>
              Keep going! 🚀
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
