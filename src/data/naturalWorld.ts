export interface QuizQuestion {
  id: string
  type: 'mc' | 'tf'
  text: string
  options?: { label: string; value: string }[]
  correctAnswer?: string
  correctFb: string
  wrongFb: string
}

export interface SessionStep {
  title: string
  type: 'learn' | 'activity' | 'quiz' | 'mission'
  xp: number
  learnContent?: {
    intro: string
    facts: { icon: string; text: string }[]
  }
  activityContent?: {
    childHears: string
    doTogether: string
    talkAbout: string
  }
  quizContent?: QuizQuestion[]
  missionContent?: {
    title: string
    desc: string
    note: string
  }
}

export interface Session {
  title: string
  icon: string
  xp: number
  steps: SessionStep[]
}

export interface SubjectData {
  id: string
  name: string
  icon: string
  color: string
  darkColor: string
  bands: {
    sprout: Session[]
    climber: Session[]
    bloomer: Session[]
    grower: Session[]
  }
}

const naturalWorld: SubjectData = {
  id: 'natural',
  name: 'The Natural World',
  icon: '🌿',
  color: '#1e8c3a',
  darkColor: '#0d5c26',
  bands: {
    sprout: [
      {
        title: 'What Makes Something Alive?',
        icon: '🌱',
        xp: 180,
        steps: [
          {
            title: '🌿 Let\'s Learn — Living Things!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Living things are all around us! A tree, a bee, a worm in the soil — they\'re all alive. Living things do something amazing — they grow, they need food and water, and they can make more of themselves, like a flower making seeds.',
              facts: [
                { icon: '🔍', text: 'A rock looks interesting — but it doesn\'t grow, doesn\'t need food, and can\'t make baby rocks! So it\'s NOT a living thing.' },
                { icon: '🌱', text: 'Even tiny seeds are alive! They\'re just sleeping and waiting for water and sunshine to wake them up.' },
                { icon: '🌟', text: 'Fun fact: There are more living things in a handful of garden soil than there are people on Earth!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Grow Like a Seed!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s pretend to be seeds growing into flowers! Start curled up tiny on the floor... now slowly grow... push out your arms like leaves... stretch up tall toward the sun! ☀️',
              doTogether: 'Get on the floor and do it together — curl up small, then slowly rise, arms out, up on tiptoes at the end! Make it as dramatic and silly as possible. Race each other to see who can grow the tallest!',
              talkAbout: '"What does a plant need to grow?" Let them guess — water, sunshine, soil! Then compare it to what they need — food, water, sleep and love. Plants and people aren\'t so different!',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-s-1-q1',
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
                id: 'nw-s-1-q2',
                type: 'tf',
                text: 'True or False? Seeds are not alive until they start to grow.',
                correctAnswer: 'False',
                correctFb: '✅ False! Seeds ARE alive — they\'re just sleeping, waiting for water and warmth to wake them up. Like you when you\'re asleep!',
                wrongFb: 'Actually, seeds ARE alive even before they sprout! They\'re just resting, packed full of everything they need to grow.',
              },
              {
                id: 'nw-s-1-q3',
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
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Nature Detective Mission!',
              desc: 'Go outside and find 3 living things and 1 non-living thing. Tell a grown-up what makes each one alive or not alive. Come back and tell us what you discovered!',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
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
    climber: [],
    bloomer: [],
    grower: [],
  },
}

export default naturalWorld