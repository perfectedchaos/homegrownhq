'use client'

import { useState } from 'react'

interface LandingPageProps {
  onGetStarted: () => void
  onLogin: () => void
  onLearnerLogin: () => void
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      background: '#fff', borderRadius: '16px',
      border: '1.5px solid rgba(0,0,0,0.07)',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: '20px 22px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer', gap: '16px',
        }}
      >
        <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '19px', color: '#1a1a1a' }}>{question}</div>
        <div style={{
          fontSize: '20px', color: '#2d8c45', flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.2s',
        }}>▼</div>
      </div>
      {open && (
        <div style={{
          padding: '14px 22px 20px',
          fontSize: '16px', fontWeight: 700, color: '#555', lineHeight: 1.7,
          borderTop: '1px solid rgba(0,0,0,0.05)',
        }}>
          {answer}
        </div>
      )}
    </div>
  )
}

export default function LandingPage({ onGetStarted, onLogin, onLearnerLogin }: LandingPageProps) {
  return (
    <div style={{
      fontFamily: "'Nunito', sans-serif",
      background: '#FFFDF7',
      color: '#1a1a1a',
      overflowX: 'hidden',
      overflowY: 'auto',
      height: '100vh',
    }}>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 1,
        background: 'rgba(255,253,247,0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        padding: '0 48px', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Fredoka One', sans-serif", fontSize: '24px', color: '#1a1a1a' }}>
          <div style={{ width: '34px', height: '34px', background: '#FFE135', borderRadius: '50% 0 50% 50%', transform: 'rotate(-45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ transform: 'rotate(45deg)', fontSize: '17px' }}>🌿</span>
          </div>
          HomeGrown<span style={{ color: '#2d8c45' }}>Skills</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="https://perfectedchaos.co.uk" target="_blank" rel="noopener noreferrer" style={{ fontSize: '15px', fontWeight: 700, color: '#666', textDecoration: 'none' }}>
            Perfected Chaos
          </a>
          <a href="#learner-login" onClick={(e) => { e.preventDefault(); onLearnerLogin(); }} style={{ padding: '9px 18px', borderRadius: '20px', background: '#edfaf1', border: '2px solid #81C784', color: '#1b5e20', fontSize: '14px', fontWeight: 800, cursor: 'pointer', textDecoration: 'none' }}>
            🌱 Learner Login
          </a>
          <a href="#login" onClick={(e) => { e.preventDefault(); onLogin(); }} style={{ padding: '11px 20px', borderRadius: '20px', background: 'transparent', color: '#1a1a1a', border: '2px solid #e0e0e0', fontFamily: "'Fredoka One', sans-serif", fontSize: '16px', cursor: 'pointer', textDecoration: 'none' }}>
            Log In
          </a>
          <a href="#signup" onClick={(e) => { e.preventDefault(); onGetStarted(); }} style={{ padding: '11px 20px', borderRadius: '20px', background: '#2d8c45', color: '#fff', fontFamily: "'Fredoka One', sans-serif", fontSize: '16px', cursor: 'pointer', textDecoration: 'none' }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(160deg, #1a5c2a 0%, #2d8c45 50%, #3aaa58 100%)', padding: '80px 48px 100px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,225,53,0.2)', border: '1.5px solid rgba(255,225,53,0.4)', color: '#FFE135', fontSize: '14px', fontWeight: 900, padding: '6px 18px', borderRadius: '30px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>
            🌱 Free 7-day trial · No card required
          </div>
          <h1 style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: 'clamp(38px, 6vw, 68px)', color: '#fff', lineHeight: 1.05, marginBottom: '20px' }}>
            The education system teaches children to pass tests.
            <span style={{ color: '#FFE135', display: 'block' }}>We teach them to pass life.</span>
          </h1>
          <p style={{ fontSize: '19px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '580px', margin: '0 auto 36px' }}>
            HomeGrownSkills is a life skills platform for children aged 4–16. Real subjects, real activities, real family moments — built around how children actually learn.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <a href="#signup" onClick={(e) => { e.preventDefault(); onGetStarted(); }} style={{ padding: '16px 36px', background: '#FFE135', color: '#1a5c2a', borderRadius: '50px', fontFamily: "'Fredoka One', sans-serif", fontSize: '20px', cursor: 'pointer', boxShadow: '0 6px 0 #c9a800, 0 8px 24px rgba(0,0,0,0.2)', textDecoration: 'none' }}>
              Start Your Journey — It&apos;s Free 🚀
            </a>
            <a href="#what-to-expect" onClick={(e) => { e.preventDefault(); document.getElementById('what-to-expect')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ padding: '16px 36px', background: 'rgba(255,255,255,0.12)', color: '#fff', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '50px', fontFamily: "'Fredoka One', sans-serif", fontSize: '20px', cursor: 'pointer', textDecoration: 'none' }}>
              See What&apos;s Inside
            </a>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <a href="#learner-login" onClick={(e) => { e.preventDefault(); onLearnerLogin(); }} style={{ display: 'inline-block', padding: '12px 28px', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)', borderRadius: '50px', fontFamily: "'Fredoka One', sans-serif", fontSize: '16px', cursor: 'pointer', textDecoration: 'none' }}>
              🌱 Already a learner? Log in with your PIN
            </a>
          </div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span>✅ No card required</span>
            <span>✅ Cancel any time</span>
            <span>✅ £5.99/month after trial</span>
            <span>✅ All ages 4–16</span>
          </div>
        </div>
      </div>

      {/* WHAT IS HGS */}
      <div style={{ padding: '80px 48px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)', color: '#1a1a1a', marginBottom: '14px' }}>
            Everything your child needs to thrive — not just in school, but in life
          </h2>
          <p style={{ fontSize: '18px', fontWeight: 700, color: '#666', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
            Eight life skill subjects, deep-dive projects, creative writing, and a family Memory Wall. All in one place.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            { icon: '📚', title: 'Skill Builder', desc: 'Eight subjects covering money, time, the natural world, cooking, digital literacy, real talk, fitness and the human body. Step by step, age by age.', color: '#1a5c2a', bg: '#edfaf1' },
            { icon: '🗺️', title: 'Project Corner', desc: 'Dive into a country, explore a moment in history, or tackle a Big Question. Projects never close — your child can always add more as their knowledge grows.', color: '#0d47a1', bg: '#E8F5FF' },
            { icon: '✨', title: 'Creative Space', desc: 'Always open, never graded. Write stories, poems, letters, diary entries — or ignore every prompt and write whatever they want. This space is theirs.', color: '#6A0080', bg: '#F9F0FF' },
            { icon: '📸', title: 'Memory Wall', desc: 'Every real-world moment your child has — a nature walk, a recipe they cooked, a book they finished — lives here. Learning that leaves the screen.', color: '#c46000', bg: '#FFF3E0' },
          ].map((section, i) => (
            <div key={i} style={{ background: section.bg, borderRadius: '22px', padding: '28px 24px', border: `2px solid ${section.color}22` }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{section.icon}</div>
              <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '22px', color: section.color, marginBottom: '8px' }}>{section.title}</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#444', lineHeight: 1.6 }}>{section.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AGE BANDS */}
      <div style={{ background: '#f5f5f0', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: 'clamp(26px, 4vw, 38px)', color: '#1a1a1a', marginBottom: '12px' }}>
              Designed for every age, not a one-size-fits-all
            </h2>
            <p style={{ fontSize: '17px', fontWeight: 700, color: '#666', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Content is carefully calibrated for four age bands — so a 5-year-old and a 14-year-old can explore the same subject at completely different depths.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🌱', name: 'Sprouts', ages: 'Ages 4–6', desc: 'Sensory, playful and parent-led. Activities designed to be done together, not on a screen alone.', color: '#FF8C00', bg: '#FFF3E0' },
              { icon: '🧗', name: 'Climbers', ages: 'Ages 7–9', desc: 'Characters, scenarios and satisfying challenges. Learning that feels like an adventure.', color: '#1976D2', bg: '#E8F5FF' },
              { icon: '🌸', name: 'Bloomers', ages: 'Ages 10–12', desc: 'Real-world context, percentages, debate and critical thinking. Stretching without overwhelming.', color: '#6A0080', bg: '#F9F0FF' },
              { icon: '🌳', name: 'Growers', ages: 'Ages 13–16', desc: 'Honest, adult and genuinely useful. Topics that matter within years — budgeting, credit, independent living.', color: '#1a5c2a', bg: '#edfaf1' },
            ].map((band, i) => (
              <div key={i} style={{ background: band.bg, borderRadius: '20px', padding: '26px 20px', border: `2px solid ${band.color}22` }}>
                <div style={{ fontSize: '38px', marginBottom: '8px' }}>{band.icon}</div>
                <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '22px', color: band.color, marginBottom: '2px' }}>{band.name}</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: band.color, opacity: 0.7, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{band.ages}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#444', lineHeight: 1.6 }}>{band.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT TO EXPECT */}
      <div id="what-to-expect" style={{ padding: '80px 48px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: 'clamp(26px, 4vw, 38px)', color: '#1a1a1a', marginBottom: '12px' }}>What to expect</h2>
          <p style={{ fontSize: '17px', fontWeight: 700, color: '#666', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            A typical session takes 15–20 minutes and always ends with something happening in the real world.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {[
            { step: '01', title: 'Learn together', desc: 'Every session starts with a short, engaging learn section — written in plain language, packed with fascinating facts. No jargon, no waffle.', icon: '📖', color: '#1a5c2a' },
            { step: '02', title: 'Do something', desc: 'Family activities that get everyone involved. Grow like a seed on the living room floor. Hunt for coins around the house. Cook something real. These are the moments they remember.', icon: '🤝', color: '#FF8C00' },
            { step: '03', title: 'Test what you know', desc: 'Three or four varied questions — multiple choice, true or false, spot the odd one out. Wrong answers get warm, encouraging feedback. Right answers get celebrated.', icon: '🧠', color: '#1976D2' },
            { step: '04', title: 'Take it into the world', desc: 'Every session ends with a real-world mission. Go outside. Cook something. Find a food chain in the garden. Then add it to the Memory Wall and earn bonus XP.', icon: '🌍', color: '#6A0080' },
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', background: '#fff', borderRadius: '20px', padding: '30px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: `${step.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', flexShrink: 0 }}>{step.icon}</div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 900, color: step.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Step {step.step}</div>
                <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '24px', color: '#1a1a1a', marginBottom: '6px' }}>{step.title}</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#555', lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUBJECTS */}
      <div style={{ background: '#f5f5f0', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: 'clamp(26px, 4vw, 38px)', color: '#1a1a1a', marginBottom: '12px' }}>Wave 1 subjects — live at launch</h2>
          <p style={{ fontSize: '17px', fontWeight: 700, color: '#666', marginBottom: '40px', lineHeight: 1.7 }}>Eight subjects, four age bands, hundreds of sessions. More waves coming throughout the year.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
            {[
              { icon: '💰', name: 'Money Skills', desc: 'Coins to credit — age appropriate financial confidence' },
              { icon: '⏰', name: 'About Time', desc: 'Clocks, calendars and how time shapes our lives' },
              { icon: '🌿', name: 'The Natural World', desc: 'Living things, seasons, food chains and our planet' },
              { icon: '🍳', name: 'Cooking & Nutrition', desc: 'Real recipes, kitchen skills and eating well' },
              { icon: '📱', name: 'Digital Literacy', desc: 'Staying safe, thinking critically and using tech wisely' },
              { icon: '🏃', name: 'Get Active!', desc: 'Movement, exercise and understanding your body' },
              { icon: '💬', name: 'Real Talk', desc: 'Communication, friendships and navigating feelings' },
              { icon: '🫀', name: 'Human Body', desc: 'How the amazing machine you live in actually works' },
            ].map((subject, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '22px 16px', border: '1.5px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
                <div style={{ fontSize: '34px', marginBottom: '8px' }}>{subject.icon}</div>
                <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '17px', color: '#1a5c2a', marginBottom: '5px' }}>{subject.name}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#888', lineHeight: 1.5 }}>{subject.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOUNDERS MESSAGE */}
      <div style={{ padding: '80px 48px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #1a5c2a, #2d8c45)', borderRadius: '28px', padding: '48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', bottom: '-60px', left: '40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,225,53,0.08)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '14px', color: '#FFE135', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>A message from the founders</div>
            <blockquote style={{ fontSize: '19px', fontWeight: 700, color: 'rgba(255,255,255,0.92)', lineHeight: 1.8, marginBottom: '28px', fontStyle: 'italic', borderLeft: '4px solid #FFE135', paddingLeft: '20px' }}>
              &quot;We built HomeGrownSkills because we were tired of watching children being prepared for exams instead of life. As home educating parents ourselves, we knew there had to be a better way — something that treated children as whole people, not test scores.
              <br /><br />
              HGS is what we wished existed when we started our family&apos;s learning journey. Every lesson, every activity, every question has been designed with real families in mind — because we are one.
              <br /><br />
              We genuinely believe the most important things a child can learn aren&apos;t on any curriculum. Money, resilience, creativity, how the world actually works.
              <br /><br />
              Welcome to the family.&quot;
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#FFE135', border: '3px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fredoka One', sans-serif", fontSize: '18px', color: '#1a5c2a' }}>R</div>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '3px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fredoka One', sans-serif", fontSize: '18px', color: '#fff' }}>J</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '20px', color: '#fff' }}>Rob & Jodie</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>
                  Founders of HomeGrownSkills &amp;{' '}
                  <a href="https://perfectedchaos.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: '#FFE135', textDecoration: 'none' }}>Perfected Chaos</a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '24px', background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '14px 18px', fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              🎙️ Want to hear more from us? Head over to{' '}
              <a href="https://perfectedchaos.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: '#FFE135', textDecoration: 'none' }}>Perfected Chaos</a>{' '}
              — our blog and podcast for families navigating modern parenthood.
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div style={{ background: '#f5f5f0', padding: '80px 48px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: 'clamp(26px, 4vw, 38px)', color: '#1a1a1a', marginBottom: '12px' }}>Simple, honest pricing</h2>
          <p style={{ fontSize: '17px', fontWeight: 700, color: '#666', marginBottom: '40px', lineHeight: 1.7 }}>One family. All ages. All subjects. One price.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            {[
              { label: 'Monthly', price: '£5.99', sub: 'per month · cancel any time', highlight: false },
              { label: 'Annual', price: '£50', sub: 'per year · save over £21', highlight: true },
            ].map((plan, i) => (
              <div key={i} style={{ background: plan.highlight ? 'linear-gradient(135deg, #1a5c2a, #2d8c45)' : '#fff', borderRadius: '22px', padding: '32px 24px', border: plan.highlight ? 'none' : '2px solid #e0e0e0', boxShadow: plan.highlight ? '0 8px 0 #0d3d1c, 0 12px 28px rgba(0,0,0,0.15)' : '0 2px 12px rgba(0,0,0,0.06)', position: 'relative' }}>
                {plan.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#FFE135', color: '#1a5c2a', fontSize: '13px', fontWeight: 900, padding: '4px 16px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Best value</div>}
                <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '19px', color: plan.highlight ? 'rgba(255,255,255,0.7)' : '#666', marginBottom: '8px' }}>{plan.label}</div>
                <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '42px', color: plan.highlight ? '#FFE135' : '#1a5c2a', marginBottom: '6px' }}>{plan.price}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: plan.highlight ? 'rgba(255,255,255,0.6)' : '#888' }}>{plan.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#888', marginBottom: '32px' }}>✅ 7-day free trial · No card required · Cancel any time</div>
          <a href="#signup" onClick={(e) => { e.preventDefault(); onGetStarted(); }} style={{ display: 'inline-block', padding: '16px 48px', background: '#2d8c45', color: '#fff', borderRadius: '50px', fontFamily: "'Fredoka One', sans-serif", fontSize: '22px', cursor: 'pointer', boxShadow: '0 6px 0 #1a5c2a, 0 8px 24px rgba(0,0,0,0.15)', textDecoration: 'none' }}>
            Start Free — No Card Needed 🌿
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '80px 48px', maxWidth: '720px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: 'clamp(26px, 4vw, 36px)', color: '#1a1a1a', marginBottom: '36px', textAlign: 'center' }}>Questions we get asked</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { q: 'Is this only for home educated children?', a: 'Not at all. HomeGrownSkills works brilliantly as a supplement to school for any family who wants their child to learn skills that the curriculum doesn\'t cover. Many of our families use it alongside school, not instead of it.' },
            { q: 'What age is it suitable for?', a: 'Ages 4–16, across four age bands — Sprouts, Climbers, Bloomers and Growers. Content is carefully calibrated for each band so a 5-year-old and a 14-year-old can explore the same subject at completely different depths.' },
            { q: 'How much time does it take?', a: 'A typical session is 15–20 minutes. We recommend two sessions a day, but there\'s no pressure — the platform works around your family\'s rhythm, not the other way around.' },
            { q: 'Can siblings share one account?', a: 'Yes — one family subscription covers all your children. Each learner has their own profile, character and progress. You can switch between learners from the family dashboard.' },
            { q: 'What happens after the free trial?', a: 'After 7 days you\'ll be invited to subscribe for £5.99/month or £50/year. No card is needed to start — we\'ll only ask when you\'re ready to continue. You can cancel any time.' },
          ].map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div style={{ background: 'linear-gradient(135deg, #1a5c2a, #2d8c45)', padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff', marginBottom: '16px' }}>Ready to start your family&apos;s journey?</h2>
        <p style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(255,255,255,0.75)', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.7 }}>
          Seven days. No card. No commitment. Just brilliant learning for the whole family.
        </p>
        <a href="#signup" onClick={(e) => { e.preventDefault(); onGetStarted(); }} style={{ display: 'inline-block', padding: '18px 52px', background: '#FFE135', color: '#1a5c2a', borderRadius: '50px', fontFamily: "'Fredoka One', sans-serif", fontSize: '22px', cursor: 'pointer', boxShadow: '0 6px 0 #c9a800, 0 8px 28px rgba(0,0,0,0.2)', textDecoration: 'none' }}>
          Start Free Trial 🚀
        </a>
        <div style={{ marginTop: '20px', fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.55)' }}>£5.99/month after trial · Cancel any time</div>
      </div>

      {/* FOOTER */}
      <div style={{ background: '#0a2e14', padding: '32px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ fontFamily: "'Fredoka One', sans-serif", fontSize: '20px', color: '#fff' }}>HomeGrown<span style={{ color: '#FFE135' }}>Skills</span></div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
          Built with love by Rob &amp; Jodie ·{' '}
          <a href="https://perfectedchaos.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Perfected Chaos</a>
        </div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.4)' }}>&copy; 2026 HomeGrownSkills</div>
      </div>

    </div>
  )
}
