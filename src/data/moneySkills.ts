import { SubjectData } from './naturalWorld'

const moneySkills: SubjectData = {
  id: 'money',
  name: 'Money Skills',
  icon: '💰',
  color: '#FF8C00',
  darkColor: '#c46000',
  bands: {
    sprout: [
      {
        title: 'What is Money?',
        icon: '🪙',
        xp: 180,
        steps: [
          {
            title: '🌟 Let\'s Learn — Coins & Notes!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Money is what we use to buy things! In the UK we use pounds (£) and pence (p). There are coins and notes. Coins are the round metal pieces — like 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2. Notes are the paper ones — £5, £10, £20 and £50.',
              facts: [
                { icon: '🥇', text: '100 pence makes one pound! So 100p = £1. Pence are like the small building blocks of pounds.' },
                { icon: '🔍', text: 'Silver coins are worth less — like 5p and 10p. Gold coins are worth more — like £1 and £2. Can you spot the difference?' },
                { icon: '🌟', text: 'Fun fact: The £1 coin has a different design on the back every few years. How many different ones can you find at home?' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Coin Hunt!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s go on a coin hunt! Can you find as many different coins as possible around the house? Check the sofa, coat pockets, piggy banks — anywhere! Bring them all back and let\'s look at them together! 🪙',
              doTogether: 'Lay all the coins out on a table. Sort them together — silver in one pile, gold in another. Then put them in order from smallest value to biggest. Count how many of each you have!',
              talkAbout: 'Point to each coin and ask: "How much is this one worth?" Talk about which coin they\'d most like to find on the pavement and why. Which is worth the most? Which is worth the least?',
            },
          },
          {
            title: '🧠 Quiz — Show What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-s-1-q1',
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
                id: 'ms-s-1-q2',
                type: 'tf',
                text: 'True or False? 100 pence makes one pound.',
                correctAnswer: 'True',
                correctFb: '✅ True! 100p = £1. So if you had one hundred 1p coins, you\'d have exactly one pound. That\'s a lot of coins!',
                wrongFb: 'It\'s actually TRUE! 100 pence makes one pound. Think of it like 100 centimetres making one metre — 100 small ones make one big one!',
              },
              {
                id: 'ms-s-1-q3',
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
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Real Shop Mission!',
              desc: 'Next time you visit a shop, find something that costs less than £1. Look at the price tag — can you find the right coins to pay for it? Come back and tell us how you got on!',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
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
    climber: [],
    bloomer: [],
    grower: [],
  },
}

export default moneySkills