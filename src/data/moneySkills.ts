import { SubjectData } from './naturalWorld'

const moneySkills: SubjectData = {
  id: 'money',
  name: 'Money Skills',
  icon: '🪙',
  color: '#b8860b',
  darkColor: '#7a5800',
  bands: {
    sprout: [
      // ── SESSION 1 ──────────────────────────────────────────────────────────
      {
        title: 'Meet the Coins',
        icon: '🪙',
        xp: 180,
        steps: [
          {
            title: '🪙 Let\'s Learn — Meet the Coins!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Have you ever seen a grown-up give something small and shiny to someone in a shop — and walk away with something much bigger? That small shiny thing is money. Money comes in two kinds: coins and notes. Coins are round and made of metal. Notes are flat and made of paper. In the UK, our money is called pounds and pence. The number on the coin tells you what it\'s worth. A 10p is worth more than a 2p — even if the 2p looks bigger. That\'s the first money secret: the number matters more than the size!',
              facts: [
                { icon: '🟡', text: '1p and 2p coins are copper coloured — warm and orangey.' },
                { icon: '⚪', text: '5p, 10p and 20p coins are silver coloured — cool and shiny.' },
                { icon: '🔢', text: 'The 20p has seven sides! Count them next time you find one.' },
                { icon: '🌟', text: 'The £1 coin is gold and silver together — it\'s the most special looking of all!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Coin Detectives!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s find some real coins and get to know them. They\'ve all got something special about them — let\'s find out what!',
              doTogether: 'Gather a small handful of coins and lay them on a table. Pick each one up — feel the weight, look at the colour. Count the sides of the 20p together out loud. Sort them into two piles: copper and silver. Ask your child to point to the one they think is worth the most.',
              talkAbout: '"Which do you think is worth the most? Why?" / "Does the biggest coin always mean the most money?" / "If you could keep just one of these, which would you choose?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-sp-1-q1',
                type: 'tf',
                text: 'True or False? Coins and notes are both kinds of money.',
                correctAnswer: 'True',
                correctFb: '✅ That\'s right! Coins are metal and notes are paper — but they both do the same job. Brilliant!',
                wrongFb: 'Actually both of them are money! Coins are metal and notes are paper — but they both work the same way.',
              },
              {
                id: 'ms-sp-1-q2',
                type: 'mc',
                text: 'Which coin has seven sides?',
                options: [
                  { label: '1p', value: 'wrong' },
                  { label: '2p', value: 'wrong' },
                  { label: '20p', value: 'correct' },
                  { label: '5p', value: 'wrong' },
                ],
                correctFb: '✅ Amazing — you were paying attention! The 20p has seven sides. Count them next time you find one.',
                wrongFb: 'It\'s the 20p! Next time you find one, count the sides — all the way to seven. That funny shape makes it easy to find in your pocket without looking.',
              },
              {
                id: 'ms-sp-1-q3',
                type: 'tf',
                text: 'True or False? The biggest coin is always worth the most.',
                correctAnswer: 'False',
                correctFb: '✅ Great thinking! The 5p is tiny but worth more than the big 2p. Always look at the number, not the size.',
                wrongFb: 'This is a sneaky one! The 5p is smaller than the 2p but worth more. The number tells you the value — not the size.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Spot the Money!',
              desc: 'Next time you go out — to the shops, the park, anywhere — keep your eyes open. Can you spot somewhere that uses money? A till, a machine, a charity box? When you get home, draw a picture of what you saw and tell a grown-up about it.',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 2 ──────────────────────────────────────────────────────────
      {
        title: 'What\'s It Worth?',
        icon: '💰',
        xp: 180,
        steps: [
          {
            title: '💰 Let\'s Learn — What\'s It Worth?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You\'ve met the coins — now let\'s find out which ones are worth the most. Every coin has a number on it. That number tells you how many pence it\'s worth. The further along the line, the more it\'s worth: 1p → 2p → 5p → 10p → 20p → 50p → £1 → £2. Coins can team up! A small pile of little coins can be worth the same as one big coin. And here\'s a new word: pence is what we call amounts under a pound. Once you get to 100 pence, you\'ve got one whole pound — £1!',
              facts: [
                { icon: '🔢', text: 'Two 5p coins make the same as one 10p. Coins can team up!' },
                { icon: '💡', text: 'It takes FIVE 1p coins to make one 5p. Count them out and see!' },
                { icon: '🌟', text: '100 pence = £1. That\'s like a hundred tiny steps making one big one.' },
                { icon: '🪙', text: 'The £2 coin is worth two hundred 1p coins. Imagine carrying all those!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — The Coin Parade!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to line our coins up from the smallest amount to the biggest — like a coin parade!',
              doTogether: 'Lay all available coins on the table. Together, arrange them in a line from lowest to highest value. Once they\'re in order, point to each one and say the amount out loud together. Then try this: can they find two coins that add up to the same as one other coin? (e.g. two 5p = one 10p)',
              talkAbout: '"Which coin would you rather have — one 10p or two 2p coins? Why?" / "How many 1p coins do you think you\'d need to make 10p?" / "If you found a coin on the floor, how would you know what it was worth?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-sp-2-q1',
                type: 'mc',
                text: 'Which is worth more?',
                options: [
                  { label: 'One 2p coin', value: 'wrong' },
                  { label: 'One 5p coin', value: 'correct' },
                ],
                correctFb: '✅ Well done! Even though the 2p looks bigger, the 5p is worth more. The number is what counts.',
                wrongFb: 'The 5p is actually worth more! It looks smaller but the number tells you what it\'s worth — and 5 is bigger than 2.',
              },
              {
                id: 'ms-sp-2-q2',
                type: 'tf',
                text: 'True or False? Two 5p coins are worth the same as one 10p.',
                correctAnswer: 'True',
                correctFb: '✅ Brilliant! 5p + 5p = 10p. Coins can team up to make bigger amounts.',
                wrongFb: 'Actually this one is true! 5 + 5 = 10, so two 5p coins make exactly one 10p. Coins can team up!',
              },
              {
                id: 'ms-sp-2-q3',
                type: 'mc',
                text: 'How many 1p coins do you need to make 5p?',
                options: [
                  { label: '2', value: 'wrong' },
                  { label: '3', value: 'wrong' },
                  { label: '4', value: 'wrong' },
                  { label: '5', value: 'correct' },
                ],
                correctFb: '✅ That\'s exactly right! 1p + 1p + 1p + 1p + 1p = 5p. Five little coins make one 5p.',
                wrongFb: 'You need five 1p coins to make 5p — one for each pence! Count them out next time: 1, 2, 3, 4, 5.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'The Coin Parade',
              desc: 'Find at least three different coins at home. Line them up in order from smallest amount to biggest — just like we did together. Can a grown-up muddle them up and see if you can put them back in the right order?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 3 ──────────────────────────────────────────────────────────
      {
        title: 'Counting Coins',
        icon: '🔢',
        xp: 180,
        steps: [
          {
            title: '🔢 Let\'s Learn — Counting Coins!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You know what the coins look like. You know which ones are worth more. Now it\'s time to do something really useful — add them up! When we count coins, we start with the biggest ones first. That makes it easier. Let\'s say you have a 10p, a 5p, and a 2p. Start with the biggest: 10p. Add the next one: 10 + 5 = 15p. Add the last one: 15 + 2 = 17p. You\'ve got 17p! Try to say the running total out loud as you go — it helps your brain keep track.',
              facts: [
                { icon: '🏆', text: 'Always start with the BIGGEST coin. It makes the adding much easier.' },
                { icon: '💬', text: 'Say the total out loud as you add each coin. It keeps you from losing track.' },
                { icon: '🧩', text: 'The total is the amount you have altogether once all the coins are added up.' },
                { icon: '💡', text: 'Try it with real coins! Counting real money is much more fun than just numbers on paper.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Coin Counting Challenge!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'I\'m going to make you some little piles of coins. Your job is to count each pile and tell me the total!',
              doTogether: 'Make three small piles of coins — keep totals under 20p to start. Work through each pile together, starting with the biggest coin. Say the running total out loud at each step. If they find it easy, try a pile that reaches exactly 20p.',
              talkAbout: '"How did you know which coin to count first?" / "What happens if you start with the smallest coin instead — does it still work?" / "Can you make exactly 10p using three different coins?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-sp-3-q1',
                type: 'mc',
                text: 'You have a 10p and a 5p. What\'s your total?',
                options: [
                  { label: '12p', value: 'wrong' },
                  { label: '15p', value: 'correct' },
                  { label: '20p', value: 'wrong' },
                  { label: '8p', value: 'wrong' },
                ],
                correctFb: '✅ 10 + 5 = 15p. You\'re a natural at this!',
                wrongFb: 'Start with the biggest coin — that\'s the 10p. Then add the 5p. 10 + 5 = 15p. Try counting on from 10: 11, 12, 13, 14, 15!',
              },
              {
                id: 'ms-sp-3-q2',
                type: 'tf',
                text: 'True or False? When counting coins, it helps to start with the biggest one first.',
                correctAnswer: 'True',
                correctFb: '✅ Exactly right! Starting with the biggest makes it easier to keep track. Well done for remembering.',
                wrongFb: 'Actually it really does help! Starting with the biggest coin means you\'re always adding smaller numbers on top — which is much easier to keep track of.',
              },
              {
                id: 'ms-sp-3-q3',
                type: 'mc',
                text: 'You have a 5p, a 2p, and a 1p. What\'s your total?',
                options: [
                  { label: '6p', value: 'wrong' },
                  { label: '7p', value: 'wrong' },
                  { label: '8p', value: 'correct' },
                  { label: '9p', value: 'wrong' },
                ],
                correctFb: '✅ Perfect! 5 + 2 + 1 = 8p. Three coins, one total — nicely done.',
                wrongFb: 'Let\'s count together: start with 5p, add 2p = 7p, then add 1p = 8p. Try it again with real coins if that helps it click!',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'The Counting Challenge',
              desc: 'Ask a grown-up to put a small pile of coins in your hand. Count them up — biggest first — and tell them the total. Were you right? Try it three times and see if you can get all three correct!',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 4 ──────────────────────────────────────────────────────────
      {
        title: 'The Shop Game',
        icon: '🛒',
        xp: 200,
        steps: [
          {
            title: '🛒 Let\'s Learn — The Shop Game!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You can name the coins. You know what they\'re worth. You can add them up. Now let\'s use them — because that\'s what money is actually for! When you buy something in a shop, here\'s what happens: the thing you want has a price — the amount it costs. You hand over coins that add up to that price. You get the thing you wanted! Let\'s say something costs 8p. You could pay with one 5p, one 2p, and one 1p. That\'s 5 + 2 + 1 = 8p. Shopkeepers love it when you can pay with the right amount. It makes their job much easier!',
              facts: [
                { icon: '🏷️', text: 'Every item in a shop has a price. The price tells you how many pence or pounds it costs.' },
                { icon: '💡', text: 'There\'s often more than one way to make the same amount. Six 1p coins = one 5p + one 1p. Both work!' },
                { icon: '🔄', text: 'If you pay too much, you get change back — the difference between what you paid and what it cost.' },
                { icon: '🌟', text: 'Being able to count out the right coins is a superpower you\'ll use your whole life!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Open the Shop!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'ve got a shop! I\'ve set up some things to buy and they\'ve all got prices on them. You\'ve got some coins — let\'s go shopping!',
              doTogether: 'Set up 4 or 5 small household items with price labels — keep prices under 20p (e.g. a crayon = 5p, a rubber = 3p, a sticker = 7p). Give your child a small handful of coins to be their purse. Let them choose something to buy and work out which coins to use. Swap roles — let them be the shopkeeper too.',
              talkAbout: '"How did you decide which coins to use?" / "Was there more than one way you could have paid?" / "Which item would you most like to buy if this were a real shop?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-sp-4-q1',
                type: 'mc',
                text: 'Something costs 6p. Which coins could you use to pay exactly?',
                options: [
                  { label: 'One 5p and one 2p', value: 'wrong' },
                  { label: 'One 5p and one 1p', value: 'correct' },
                  { label: 'Two 2p coins', value: 'wrong' },
                  { label: 'One 10p on its own', value: 'wrong' },
                ],
                correctFb: '✅ 5 + 1 = 6p — exactly right! You found the perfect coins.',
                wrongFb: 'We need exactly 6p. One 5p and one 2p = 7p (one too many!). Two 2p coins = 4p (not enough). One 5p and one 1p = 6p — that\'s the one!',
              },
              {
                id: 'ms-sp-4-q2',
                type: 'tf',
                text: 'True or False? There is always only one way to pay the right amount.',
                correctAnswer: 'False',
                correctFb: '✅ That\'s right — there are often lots of ways! Six 1p coins is the same as one 5p and one 1p. Money is flexible like that.',
                wrongFb: 'Actually there are often lots of different ways to make the same amount! Six 1p coins make 6p, and so does one 5p and one 1p. Both work perfectly.',
              },
              {
                id: 'ms-sp-4-q3',
                type: 'mc',
                text: 'Something costs 10p. You pay with a 20p coin. What should happen next?',
                options: [
                  { label: 'You keep all the change', value: 'wrong' },
                  { label: 'The shopkeeper gives you 10p back', value: 'correct' },
                  { label: 'Nothing — you just take the item', value: 'wrong' },
                  { label: 'You pay again', value: 'wrong' },
                ],
                correctFb: '✅ Exactly! If you pay more than something costs, you get the difference back. That\'s called change!',
                wrongFb: 'If you pay more than the price, the shopkeeper gives you the difference back. You paid 20p for something that costs 10p, so you\'d get 10p back. That\'s called change!',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'The Real Shop Visit',
              desc: 'Next time you go to a shop, ask a grown-up if you can be the one to hand over the money for something small. It could be a small item — anything with a price on it. When you get home, tell someone what you bought and how much it cost.',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 5 ──────────────────────────────────────────────────────────
      {
        title: 'Saving Up',
        icon: '🐷',
        xp: 180,
        steps: [
          {
            title: '🐷 Let\'s Learn — Saving Up!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Here\'s something clever you can do with money — instead of spending it straight away, you can keep it. Keeping money to use later is called saving. People save money when they want something that costs more than they have right now. Let\'s say you really want a toy that costs 50p. You have 20p today. You need 30p more. If you save 10p every week: Week 1: 20p + 10p = 30p. Week 2: 30p + 10p = 40p. Week 3: 40p + 10p = 50p! Three weeks and you can buy it. Saving takes patience — but buying something you saved for yourself feels really special.',
              facts: [
                { icon: '🐷', text: 'A piggy bank or money box is a great place to keep your savings safe.' },
                { icon: '📈', text: 'Every coin you put in brings you closer to what you\'re saving for.' },
                { icon: '⏳', text: 'Saving takes patience — but the wait makes buying it feel even better!' },
                { icon: '🎯', text: 'Having a goal makes saving easier. What are YOU saving for?' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — What Are You Saving For?',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s think about something you\'d really like — and work out how long it would take to save up for it.',
              doTogether: 'Ask your child to think of something small they\'d like (a small toy, a comic, a treat). Look up or estimate how much it costs. Together, decide how much they could save each week from pocket money or small tasks. Count out the weeks on your fingers or draw a simple saving chart.',
              talkAbout: '"How does it feel knowing you could save up for that yourself?" / "Would it feel different buying it with money you\'d saved?" / "Is there anywhere at home you could keep your savings safe?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-sp-5-q1',
                type: 'tf',
                text: 'True or False? Saving means keeping money to use later.',
                correctAnswer: 'True',
                correctFb: '✅ Exactly right! Saving is choosing not to spend money now so you have it for something later. That takes real thinking ahead.',
                wrongFb: 'Actually that\'s exactly what saving is — keeping money now so you can use it for something later. It\'s one of the most useful money habits there is!',
              },
              {
                id: 'ms-sp-5-q2',
                type: 'mc',
                text: 'You have 10p and you save 5p every week. How much will you have after two weeks?',
                options: [
                  { label: '15p', value: 'wrong' },
                  { label: '20p', value: 'correct' },
                  { label: '25p', value: 'wrong' },
                  { label: '10p', value: 'wrong' },
                ],
                correctFb: '✅ 10p + 5p + 5p = 20p. You\'re already thinking like a saver!',
                wrongFb: 'You start with 10p. After week one you add 5p = 15p. After week two you add another 5p = 20p. Counting savings up week by week is a great habit.',
              },
              {
                id: 'ms-sp-5-q3',
                type: 'mc',
                text: 'Where is a good place to keep your savings safe?',
                options: [
                  { label: 'In your pocket', value: 'wrong' },
                  { label: 'Under your pillow', value: 'wrong' },
                  { label: 'In a piggy bank or money box', value: 'correct' },
                  { label: 'Left on the table', value: 'wrong' },
                ],
                correctFb: '✅ A piggy bank or money box is perfect — your coins stay safe and you can watch your savings grow!',
                wrongFb: 'Pockets have holes, pillows get disturbed, and tables are easy to knock! A piggy bank or money box keeps your savings safe and together in one place.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Start Your Savings!',
              desc: 'Find a jar, a box, or a piggy bank at home to be your savings pot. Put whatever coins you have in there to start it off — even just one coin counts. Tell a grown-up what you\'re saving up for.',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 6 ──────────────────────────────────────────────────────────
      {
        title: 'My Coin Kingdom',
        icon: '👑',
        xp: 220,
        steps: [
          {
            title: '👑 Let\'s Learn — My Coin Kingdom!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Look how far you\'ve come! You can name the coins and know what they look like. You know which coins are worth more and which are worth less. You can add coins up to find the total. You know how to pay for something in a shop. And you know that saving means keeping money for something special later. Today you\'re going to use all of that at once — because that\'s what real life is like. When you go to a real shop with real money, all of these things happen together. You look at the price. You count your coins. You check you have enough. You hand over the right amount. And if there\'s any left, you might choose to save it. That\'s not just maths. That\'s being in charge of your own money. And you can already do it!',
              facts: [
                { icon: '🏆', text: 'You\'ve learned to recognise coins, count them and use them. That\'s huge!' },
                { icon: '🛒', text: 'Today you\'ll put it all together — just like in a real shop.' },
                { icon: '🐷', text: 'Whatever\'s left over after spending? That can go straight in your savings pot.' },
                { icon: '👑', text: 'You\'re a Coin Kingdom champion — and this is your graduation day!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — The Big Shop Challenge!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Today you\'re in charge of the whole shop. You\'re going to be the customer AND check the prices AND count your coins AND decide whether to spend or save what\'s left.',
              doTogether: 'Set up a small shop with 5 items and prices up to 20p each. Give your child exactly 30p to spend. Let them choose what to buy, count out the coins, and hand them over. After each purchase, count what\'s left together. At the end: how much did they spend? How much is left? What could they save it for?',
              talkAbout: '"Did you spend all of it or did you keep some? Why?" / "Was there anything you wanted but decided not to buy?" / "What would you do with the coins you have left?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-sp-6-q1',
                type: 'mc',
                text: 'You have 20p. You buy something for 8p. How much do you have left?',
                options: [
                  { label: '10p', value: 'wrong' },
                  { label: '14p', value: 'wrong' },
                  { label: '12p', value: 'correct' },
                  { label: '8p', value: 'wrong' },
                ],
                correctFb: '✅ 20 − 8 = 12p. You\'ve got 12p left — enough to save or spend on something else!',
                wrongFb: 'Start with 20p and take away 8p. Count back from 20: 19, 18, 17, 16, 15, 14, 13, 12. You\'ve got 12p left!',
              },
              {
                id: 'ms-sp-6-q2',
                type: 'tf',
                text: 'True or False? If you have 15p and something costs 20p, you have enough to buy it.',
                correctAnswer: 'False',
                correctFb: '✅ That\'s right — 15p isn\'t quite enough for something that costs 20p. You\'d need 5p more. But you know how to save for that now!',
                wrongFb: 'If something costs 20p and you only have 15p, you\'re 5p short. You don\'t have quite enough — but now you know how to save up the rest!',
              },
              {
                id: 'ms-sp-6-q3',
                type: 'mc',
                text: 'You spent 18p and you started with 30p. How much have you saved?',
                options: [
                  { label: '10p', value: 'wrong' },
                  { label: '14p', value: 'wrong' },
                  { label: '12p', value: 'correct' },
                  { label: '18p', value: 'wrong' },
                ],
                correctFb: '✅ 30 − 18 = 12p saved. You spent wisely and kept some back. That\'s a real money skill — well done!',
                wrongFb: 'Take 18p away from 30p. 30 − 18 = 12p. That\'s what you\'ve got left to save. You started with 30p, spent 18p, and 12p is still yours.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'My Coin Kingdom Crown 👑',
              desc: 'You\'ve completed The Coin Kingdom quest! For your final mission — find your savings pot from last session. Count everything in it. How much have you got altogether? Draw a picture of your coin kingdom — your coins, your savings pot, your favourite coin — and add it to your Memory Wall.',
              note: '🌟 You\'re a coin expert now! This memory goes on your Wall forever.',
            },
          },
        ],
      },
    ],

    // ════════════════════════════════════════════════════════════════════════
    // CLIMBERS
    // ════════════════════════════════════════════════════════════════════════
    climber: [
      // ── SESSION 1 ──────────────────────────────────────────────────────────
      {
        title: 'Coins and Notes — What Have We Got?',
        icon: '💵',
        xp: 200,
        steps: [
          {
            title: '💵 Let\'s Learn — Coins and Notes!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You\'ve probably been handling money for a while now. But here\'s a question worth asking properly: do you actually know what everything is worth? In the UK we use pounds and pence. There are 100 pence in every pound. Our coins go from 1p all the way up to £2, and our notes go from £5 up to £50. Coins are fine for small amounts — a handful of coins can get you a snack or a drink. But if you needed to pay £15 for something, you\'d need fifteen £1 coins. That\'s a heavy pocket. That\'s why notes exist. You might also have noticed that a lot of people pay without coins or notes at all these days — a tap of a card or phone. That\'s still money. The pounds and pence are still there, just moving invisibly.',
              facts: [
                { icon: '🪙', text: 'Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2. Eight different coins!' },
                { icon: '💵', text: 'Notes: £5, £10, £20, £50. Each one a different colour and size on purpose.' },
                { icon: '📱', text: 'Card and phone payments are real money too — just invisible. The same pounds and pence move between accounts.' },
                { icon: '💡', text: '100 pence = £1. So 50p is half a pound, and 25p is a quarter of a pound.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — The Money Count!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to sort all the money we can find at home — coins and notes — and see what we\'ve actually got. Then we\'re going to add it all up.',
              doTogether: 'Gather every coin and note you can find — pockets, jars, wallets (with permission!). Sort them into groups: all the 1ps together, all the 2ps, and so on. Count each group and write down the total for that coin. Add all the groups together for a grand total.',
              talkAbout: '"Which coin did you find the most of? Why do you think that is?" / "If you could only keep notes or only keep coins, which would you choose and why?" / "When do you think it makes more sense to pay with a card instead of cash?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-cl-1-q1',
                type: 'mc',
                text: 'How many pence are in one pound?',
                options: [
                  { label: '10', value: 'wrong' },
                  { label: '50', value: 'wrong' },
                  { label: '100', value: 'correct' },
                  { label: '1000', value: 'wrong' },
                ],
                correctFb: '✅ Exactly right — 100 pence makes one pound. So 50p is half a pound, and 25p is a quarter. That\'s a useful thing to know.',
                wrongFb: 'There are 100 pence in one pound. That means 50p is half a pound and 10p is a tenth of a pound. Worth knowing when you\'re adding up amounts!',
              },
              {
                id: 'ms-cl-1-q2',
                type: 'tf',
                text: 'True or False? A £5 note is worth more than five £1 coins.',
                correctAnswer: 'False',
                correctFb: '✅ Right — they\'re worth exactly the same. £5 is £5 whether it\'s a note or five coins. The note is just easier to carry.',
                wrongFb: 'Actually they\'re worth exactly the same amount — £5. Notes aren\'t worth more than coins, they just make bigger amounts easier to carry.',
              },
              {
                id: 'ms-cl-1-q3',
                type: 'mc',
                text: 'You have one £1 coin, two 20p coins, and one 5p coin. What\'s your total?',
                options: [
                  { label: '£1.40', value: 'wrong' },
                  { label: '£1.50', value: 'wrong' },
                  { label: '£1.45', value: 'correct' },
                  { label: '£1.25', value: 'wrong' },
                ],
                correctFb: '✅ £1 + 20p + 20p + 5p = £1.45. Nice careful adding — that\'s exactly the kind of thinking a money detective uses.',
                wrongFb: 'Build it up step by step. Start with £1. Add 20p = £1.20. Add another 20p = £1.40. Add 5p = £1.45. Always add the biggest amounts first.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Money Count',
              desc: 'Find every coin in your home — check pockets, bags, drawers, jars. Sort them into groups and add up the total. How much is there altogether? Was the amount more or less than you expected?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 2 ──────────────────────────────────────────────────────────
      {
        title: 'Making Change',
        icon: '🔄',
        xp: 200,
        steps: [
          {
            title: '🔄 Let\'s Learn — Making Change!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Every time you buy something, one of two things happens. Either you pay the exact amount — or you pay more than the price and get the difference back. That difference is called change. Here\'s the clever trick: instead of subtracting, you count UP from the price to the amount you paid. If something costs 37p and you pay with 50p — count up: 37p → 40p = 3p, then 40p → 50p = 10p. Total change: 13p. Same answer as subtracting, but most people find counting up faster and easier once they\'ve practised it. And here\'s why it matters: if you know what change you should get before it\'s handed over, you can check. Quietly, quickly — no drama. Just knowing.',
              facts: [
                { icon: '🔄', text: 'Change is the difference between what you paid and what something cost.' },
                { icon: '⬆️', text: 'Count UP from the price to what you paid. It\'s often faster than subtracting.' },
                { icon: '🔍', text: 'Always check your change before leaving the till. Mistakes do happen.' },
                { icon: '💡', text: 'Getting to a round number first (like 40p or £1) makes the counting easier.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — The Shop!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'You\'re running a shop. I\'m going to buy things from you and pay with too much money. Your job is to give me the right change every time — and I\'m going to check you.',
              doTogether: 'Label 5 household items with prices under £1 (e.g. apple = 23p, pen = 46p, book = 75p). Give your child a small pile of coins as their till float. You buy items and always pay with a round amount (10p, 20p, 50p, £1). They work out the change using the counting up method. Swap roles halfway through.',
              talkAbout: '"Which method felt easier — subtracting or counting up?" / "Has a shop ever given you the wrong change? What did you do?" / "Why do you think it\'s worth checking even if it\'s only a few pence?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-cl-2-q1',
                type: 'mc',
                text: 'Something costs 54p. You pay with £1. How much change should you get?',
                options: [
                  { label: '44p', value: 'wrong' },
                  { label: '56p', value: 'wrong' },
                  { label: '46p', value: 'correct' },
                  { label: '36p', value: 'wrong' },
                ],
                correctFb: '✅ Count up from 54p → 60p (6p) → £1 (40p) = 46p. Spot on — that\'s exactly the right change.',
                wrongFb: 'Try counting up: 54p to 60p is 6p, then 60p to £1 is 40p. Add those together: 46p change. Give the counting up method a go — it gets quick with practice.',
              },
              {
                id: 'ms-cl-2-q2',
                type: 'tf',
                text: 'True or False? Counting up from the price to the amount you paid is a good way to work out change.',
                correctAnswer: 'True',
                correctFb: '✅ It really is — and it\'s the method a lot of people use in real life because it\'s fast and easy to check as you go.',
                wrongFb: 'Actually this one is true. Counting up is often quicker than subtracting for most people once they get used to it. Give it a try next time.',
              },
              {
                id: 'ms-cl-2-q3',
                type: 'mc',
                text: 'You buy two items — one costs 32p and one costs 45p. You pay with £1. How much change do you get?',
                options: [
                  { label: '13p', value: 'wrong' },
                  { label: '33p', value: 'wrong' },
                  { label: '23p', value: 'correct' },
                  { label: '77p', value: 'wrong' },
                ],
                correctFb: '✅ Two steps, done perfectly. 32p + 45p = 77p, then count up from 77p to £1: 3p + 20p = 23p change. Excellent thinking.',
                wrongFb: 'Two steps here. First add both prices: 32 + 45 = 77p. Then work out the change from £1: count up from 77p to 80p (3p) then 80p to £1 (20p) = 23p change.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Change Checker',
              desc: 'Next time you\'re in a shop with a grown-up, watch the transaction closely. Work out the change in your head before it\'s handed over. Were you right? Did the shop get it right? Report back what happened.',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 3 ──────────────────────────────────────────────────────────
      {
        title: 'Is It Good Value?',
        icon: '🔍',
        xp: 200,
        steps: [
          {
            title: '🔍 Let\'s Learn — Is It Good Value?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Here\'s something that catches a lot of people out — including adults. Cheaper doesn\'t always mean better value. Value isn\'t just about the price. It\'s about what you get for that price. A small bag of crisps costs 25p and has 25g in it. A big bag costs 60p and has 75g. The small bag costs 1p per gram. The big bag costs 0.8p per gram. The big bag is more expensive — but you get more for your money. It\'s better value. This is called working out the price per unit. Supermarkets actually print this on the shelf label. Most people never look at it. But value isn\'t only about quantity either — if you don\'t need the bigger amount and it goes to waste, it\'s not better value for you.',
              facts: [
                { icon: '🧮', text: 'Price per unit = price divided by quantity. The lower the number, the better the value.' },
                { icon: '🛒', text: 'Supermarkets print the price per 100g or per litre on the shelf label. Look for it next time!' },
                { icon: '⚠️', text: 'A bigger pack is only better value if you\'ll actually use it all.' },
                { icon: '💡', text: 'Good value = the right thing at the right price for YOUR situation.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Value Detective!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'I\'m going to show you two options for the same thing. Your job is to work out which one is better value — and then tell me why.',
              doTogether: 'Pick 2 or 3 real comparisons from your kitchen cupboards or a supermarket website: two different sized bottles of the same drink, two brands of the same product at different prices, a multipack vs individual items. For each one, work out the price per unit together. Decide which is better value — and whether you\'d actually choose it.',
              talkAbout: '"Is the better value one always the right choice? Why or why not?" / "Can you think of a time when buying the cheaper thing wasn\'t actually a good idea?" / "Do you think shops want you to notice which is better value?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-cl-3-q1',
                type: 'mc',
                text: 'A 500ml bottle of juice costs 80p. A 1 litre bottle costs £1.40. Which is better value per ml?',
                options: [
                  { label: 'The 500ml bottle', value: 'wrong' },
                  { label: 'The 1 litre bottle', value: 'correct' },
                  { label: 'They\'re the same value', value: 'wrong' },
                  { label: 'You can\'t tell', value: 'wrong' },
                ],
                correctFb: '✅ The 500ml costs 80p — that\'s 16p per 100ml. The litre costs £1.40 — that\'s 14p per 100ml. The bigger bottle gives you more for your money.',
                wrongFb: 'Work out the price per 100ml for each. 500ml for 80p = 16p per 100ml. 1 litre (1000ml) for £1.40 = 14p per 100ml. The bigger bottle is cheaper per ml — better value even though it costs more overall.',
              },
              {
                id: 'ms-cl-3-q2',
                type: 'tf',
                text: 'True or False? The cheapest option is always the best value.',
                correctAnswer: 'False',
                correctFb: '✅ Right — cheaper doesn\'t always mean better value. If something breaks quickly, or you get less for your money, it might actually cost more in the long run.',
                wrongFb: 'Actually this one is false. Cheaper sometimes means worse quality, or less quantity. Better value means the best deal for what you actually need.',
              },
              {
                id: 'ms-cl-3-q3',
                type: 'mc',
                text: 'A pack of 4 yoghurts costs £1.20. Individual yoghurts cost 35p each. You want 4 yoghurts. Which is better value?',
                options: [
                  { label: 'Buying them individually', value: 'wrong' },
                  { label: 'The pack of 4', value: 'correct' },
                  { label: 'They\'re exactly the same', value: 'wrong' },
                  { label: 'Impossible to say', value: 'wrong' },
                ],
                correctFb: '✅ The pack of 4 costs £1.20 ÷ 4 = 30p each. Individual ones cost 35p each. The pack saves you 5p per yoghurt — better value if you\'re going to eat all four.',
                wrongFb: 'Divide the pack price by 4 — £1.20 ÷ 4 = 30p each. Individual yoghurts are 35p each. The pack works out cheaper per yoghurt — as long as you\'ll eat them all!',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Value Spotter',
              desc: 'Next time you\'re in a supermarket, find two different sizes of the same product. Work out which one is better value per unit. Was it the bigger one? Was it the one on offer? Tell us what you found.',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 4 ──────────────────────────────────────────────────────────
      {
        title: 'Saving for a Goal',
        icon: '🎯',
        xp: 200,
        steps: [
          {
            title: '🎯 Let\'s Learn — Saving for a Goal!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Saving is easy to understand and surprisingly hard to do. Everyone knows you should save — but without a reason, money has a habit of drifting away on smaller things before you get there. The trick is having a goal. A goal gives your saving a point. Here\'s how to set one up: Step 1 — Know your target. How much does it cost? Step 2 — Know your starting point. How much have you got already? Step 3 — Know the gap. Target minus what you have. Step 4 — Know your rate. How much can you save each week? Step 5 — Do the maths. Gap divided by weekly saving = number of weeks. Example: you want something that costs £8. You have £2.50. Gap = £5.50. You can save 50p a week. £5.50 ÷ 50p = 11 weeks. That\'s a plan — not just a wish.',
              facts: [
                { icon: '🎯', text: 'A savings goal gives your money a purpose. Without one, it\'s easy to spend without thinking.' },
                { icon: '📊', text: 'Target − what you have = the gap you need to fill. Always start here.' },
                { icon: '📅', text: 'Gap ÷ weekly saving = number of weeks to reach your goal.' },
                { icon: '💪', text: 'Writing the plan down makes it real. It turns a wish into a target.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — The Savings Plan!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s pick something you actually want — something real — and build a proper savings plan for it.',
              doTogether: 'Your child picks something they genuinely want (£5 to £15 works well). Look up the actual price together. Count any savings they already have. Agree a realistic weekly saving amount. Work through the five steps and write down the plan. If you have a calendar, mark the week they\'d reach their goal.',
              talkAbout: '"Does having a number of weeks make it feel more possible or less possible?" / "What might make it harder to save that amount each week?" / "Is there anything you could do to get there faster?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-cl-4-q1',
                type: 'mc',
                text: 'Something costs £6. You have £1.50 already. How much more do you need to save?',
                options: [
                  { label: '£4.00', value: 'wrong' },
                  { label: '£5.50', value: 'wrong' },
                  { label: '£4.50', value: 'correct' },
                  { label: '£3.50', value: 'wrong' },
                ],
                correctFb: '✅ £6.00 − £1.50 = £4.50 still needed. You\'ve already made a start — £1.50 is closer than nothing!',
                wrongFb: 'Take what you have away from the target: £6.00 − £1.50 = £4.50 still to go. Always subtract what you\'ve already got — it makes the goal feel more achievable.',
              },
              {
                id: 'ms-cl-4-q2',
                type: 'tf',
                text: 'True or False? Saving without a goal is harder than saving for something specific.',
                correctAnswer: 'True',
                correctFb: '✅ Most people find this — a specific goal gives saving a purpose. It\'s much easier to say no to small things when you\'re working towards something real.',
                wrongFb: 'Actually this is true for most people. When saving feels abstract, money tends to drift. A real goal — with a number and a deadline — gives it direction.',
              },
              {
                id: 'ms-cl-4-q3',
                type: 'mc',
                text: 'You need to save £3.00 and you can save 50p a week. How many weeks will it take?',
                options: [
                  { label: '4 weeks', value: 'wrong' },
                  { label: '5 weeks', value: 'wrong' },
                  { label: '6 weeks', value: 'correct' },
                  { label: '8 weeks', value: 'wrong' },
                ],
                correctFb: '✅ £3.00 ÷ 50p = 6 weeks. Six weeks of saving 50p and you\'re there — that\'s a plan, not just a hope.',
                wrongFb: 'Divide the amount you need by the amount you save each week: £3.00 ÷ 50p = 6. It takes 6 weeks. Writing it out like that makes it feel much more manageable.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Savings Plan',
              desc: 'Write down your savings goal — the thing you want, the price, how much you have, and how many weeks it will take. Put it somewhere you\'ll see it — on your wall, in a notebook, on the fridge. Check back on it next week. Are you on track?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 5 ──────────────────────────────────────────────────────────
      {
        title: 'Earning Money',
        icon: '💼',
        xp: 200,
        steps: [
          {
            title: '💼 Let\'s Learn — Earning Money!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'So far you\'ve been thinking about money you already have. But where does money actually come from in the first place? For most adults, money comes from work — they do a job and get paid for it. For you right now, money probably comes from pocket money, gifts, helping out, or selling things. Here\'s a useful way to think about earning. If someone pays you £2 an hour to help with a task and you work for 3 hours, you\'ve earned £2 × 3 = £6. Flip it around: if you want to earn £10 and someone pays £2 an hour, you need £10 ÷ £2 = 5 hours. This is how adults think about work and pay. There\'s also something worth thinking about without a number attached: some ways of earning feel better than others. Getting paid for something you\'re good at, or something that helped someone, is different from just doing any task for any amount.',
              facts: [
                { icon: '💼', text: 'For adults, most money comes from a job — regular work in exchange for regular pay.' },
                { icon: '🧮', text: 'Hours worked × pay per hour = total earned. Flip it to find how long something takes to earn.' },
                { icon: '💡', text: 'For you right now: pocket money, gifts, helping out, selling things — all count as income.' },
                { icon: '🌟', text: 'Money you\'ve earned yourself often feels different to money you\'ve been given.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — The Earner!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s think about all the different ways you could earn some money — and work out how long it would take to earn a specific amount.',
              doTogether: 'Brainstorm together: what are realistic ways your child could earn money? (helping neighbours, doing extra chores, selling something at a car boot, etc.) Pick one and agree a rate — how much per hour or per task. Set a target amount (link it back to their savings goal from Session 4 if possible). Work out how much time or effort it would take to earn that amount.',
              talkAbout: '"Which way of earning would you enjoy most? Does that matter?" / "Is it better to earn a small amount doing something you like, or more doing something you don\'t?" / "How do you think adults decide what job to do?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-cl-5-q1',
                type: 'mc',
                text: 'You earn £3 an hour helping with gardening. You work for 2 hours. How much have you earned?',
                options: [
                  { label: '£5', value: 'wrong' },
                  { label: '£3', value: 'wrong' },
                  { label: '£6', value: 'correct' },
                  { label: '£9', value: 'wrong' },
                ],
                correctFb: '✅ £3 × 2 = £6. Two hours of work, six pounds earned. That\'s how hourly pay works.',
                wrongFb: 'Multiply the hourly rate by the number of hours: £3 × 2 = £6. If you worked one more hour, you\'d have £9 total.',
              },
              {
                id: 'ms-cl-5-q2',
                type: 'tf',
                text: 'True or False? The only way to earn money is to get a full-time job.',
                correctAnswer: 'False',
                correctFb: '✅ Right — there are lots of ways. Helping neighbours, selling things, doing tasks at home — earning comes in many shapes, especially at your age.',
                wrongFb: 'Actually there are lots of ways to earn money, especially when you\'re young — pocket money for extra tasks, selling things, helping people out. A regular job is just one of them.',
              },
              {
                id: 'ms-cl-5-q3',
                type: 'mc',
                text: 'You want to earn £12. Someone will pay you £4 for each task you complete. How many tasks do you need to do?',
                options: [
                  { label: '2', value: 'wrong' },
                  { label: '3', value: 'correct' },
                  { label: '4', value: 'wrong' },
                  { label: '6', value: 'wrong' },
                ],
                correctFb: '✅ £12 ÷ £4 = 3 tasks. Three tasks and you\'ve hit your target. That\'s a satisfying calculation to do before you start.',
                wrongFb: 'Divide the total you want by the amount per task: £12 ÷ £4 = 3. Three completed tasks and you\'re there.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Earner',
              desc: 'Have a conversation with a grown-up about one way you could earn some extra money this week. It doesn\'t have to be much — even £1 or £2 counts. Agree it, do it, and report back. How did it feel to earn it compared to being given it?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      // ── SESSION 6 ──────────────────────────────────────────────────────────
      {
        title: 'The Shopping Challenge',
        icon: '🏆',
        xp: 240,
        steps: [
          {
            title: '🏆 Let\'s Learn — The Shopping Challenge!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Look at everything you\'ve learned across this quest. You can add up coins and notes. You can work out change and check it\'s correct. You know how to spot good value. You can set a savings goal and work out how to reach it. You know how earning works. Today all of that comes together in one challenge. You have a £5 budget and a list of things you could buy. Some are good value, some aren\'t. You need to make smart decisions, check you have enough, and work out your change. A budget is just a limit — the most you\'re allowed to spend. Real life is full of budgets. Learning to work within one now is genuinely useful practice. One last thought: there\'s no single right answer here. Two people with the same budget can make completely different choices and both be right — because value isn\'t just about money. It\'s about what matters to you.',
              facts: [
                { icon: '💰', text: 'A budget is a limit — the most you can spend. Real life is full of them.' },
                { icon: '🔍', text: 'Look for value on the list — some items will give you more for your money than others.' },
                { icon: '➕', text: 'Add up as you go. Don\'t wait until the end to check if you\'re over budget.' },
                { icon: '🏆', text: 'This session uses every skill from Quest 1. You\'re ready for it!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — The £5 Challenge!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'You\'ve got £5 to spend. Here\'s a list of things you can buy. Your job is to choose wisely, add up as you go, stay inside the budget, and tell me what change you\'d have left.',
              doTogether: 'Write up a shopping list with 8–10 items and prices (mix of good and poor value options) — e.g. snack bar 45p / multipack of 4 snack bars £1.20, single pencil 30p / pack of 6 pencils £1.00, small notebook 80p / large notebook £1.10, comic £1.50 / book £2.00. They make their choices, add as they go, and must stay under £5. Work out the change at the end.',
              talkAbout: '"Did you spot any good value choices on the list?" / "Did you have to put anything back because of the budget?" / "Would you make the same choices if you had £10 instead?"',
            },
          },
          {
            title: '🧠 Quiz — What Do You Know?',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-cl-6-q1',
                type: 'mc',
                text: 'You\'ve spent £3.65 from your £5 budget. How much do you have left?',
                options: [
                  { label: '£1.25', value: 'wrong' },
                  { label: '£1.45', value: 'wrong' },
                  { label: '£1.35', value: 'correct' },
                  { label: '£2.35', value: 'wrong' },
                ],
                correctFb: '✅ £5.00 − £3.65 = £1.35. That\'s your remaining budget. Keeping track as you go is the key skill here.',
                wrongFb: 'Subtract carefully: £5.00 − £3.65. Try counting up: £3.65 → £4.00 (35p) → £5.00 (£1.00) = £1.35 left. The counting up method works for budgets too!',
              },
              {
                id: 'ms-cl-6-q2',
                type: 'tf',
                text: 'True or False? Once you\'ve used up your budget, spending a little bit more won\'t matter.',
                correctAnswer: 'False',
                correctFb: '✅ Right — a budget is a limit, not a suggestion. Going over, even by a small amount, means spending money that wasn\'t meant to be spent.',
                wrongFb: 'A budget is a real limit. Going over it — even a little — means spending money that wasn\'t planned. Sticking to it is the whole point of having one.',
              },
              {
                id: 'ms-cl-6-q3',
                type: 'mc',
                text: 'A single apple costs 30p. A bag of 5 apples costs £1.00. You want 5 apples. Which is better value?',
                options: [
                  { label: 'Buying them individually', value: 'wrong' },
                  { label: 'Buying the bag', value: 'correct' },
                  { label: 'They\'re the same', value: 'wrong' },
                  { label: 'You can\'t tell', value: 'wrong' },
                ],
                correctFb: '✅ 5 individual apples = 5 × 30p = £1.50. The bag costs £1.00. The bag saves you 50p — and in a tight budget, that matters.',
                wrongFb: 'Work it out: 5 individual apples at 30p each = £1.50 total. The bag costs £1.00. The bag saves you 50p — and in a tight budget, that\'s significant.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Real Shopping Challenge',
              desc: 'Plan a small real-life shopping trip — snacks, stationery, anything you\'d genuinely buy. Set yourself a budget before you go (agree it with a grown-up). Stick to it. Add up as you go. Work out your change before you get to the till. Did you stay inside the budget? Did you find any good value?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },
    ],

    // ════════════════════════════════════════════════════════════════════════
    // BLOOMERS
    // ════════════════════════════════════════════════════════════════════════
    bloomer: [
      {
        title: 'Adding Up a Real Bill',
        icon: '🧾',
        xp: 220,
        steps: [
          {
            title: '🧾 Let\'s Learn — Adding Up a Real Bill',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You\'ve been handling money for a while now. You can add things up and you know roughly what things cost. But here\'s a situation worth thinking about properly. You\'re out with your family. The meal is finished. The bill arrives — and someone just pays it. Did anyone check it? Most people don\'t. But bills have mistakes in them more often than you\'d think. A drink charged twice. A dish that was swapped but the original is still listed. A price that doesn\'t match the menu. It\'s rarely dishonest — it\'s usually just human error. The person who quietly adds it up before anyone pays is doing something genuinely useful. Checking a bill means two things: adding up every item yourself to reach your own total, and comparing that to the number on the bill. If they match — great. If they don\'t — a calm, polite question is all it takes.',
              facts: [
                { icon: '🧾', text: 'Always add up the items yourself — don\'t just trust the total at the bottom.' },
                { icon: '✏️', text: 'Work in stages: add two items, then add the next, and so on. Decimals are easy to slip up on.' },
                { icon: '💬', text: 'If your total doesn\'t match the bill, ask calmly. Most errors are honest mistakes.' },
                { icon: '🌟', text: 'Most people never check. The ones who do catch mistakes nobody else notices.' },
              ],
            },
          },
          {
            title: '📝 Activity — Check the Bill!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Here\'s a restaurant bill. Check every item, add it up yourself, and tell me whether the total is correct.',
              doTogether: 'Write a simple mock bill — 5 items with prices under £10 each. Hide one deliberate error — a duplicated item, a price slightly higher than listed, or an item that wasn\'t ordered. Work through it with a pen, add it up, compare to the bill total, and report back. A parent can check the working if needed.',
              talkAbout: '"How did you find the mistake — what gave it away?" / "Would you feel comfortable pointing it out in a real restaurant?" / "Why do you think most people just pay without checking?"',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-bl-1-q1',
                type: 'mc',
                text: 'A main course costs £8.25, a drink costs £2.50 and a dessert costs £4.75. What\'s the correct total?',
                options: [
                  { label: '£14.50', value: 'wrong' },
                  { label: '£15.00', value: 'wrong' },
                  { label: '£15.50', value: 'correct' },
                  { label: '£16.25', value: 'wrong' },
                ],
                correctFb: '✅ £8.25 + £2.50 = £10.75, then + £4.75 = £15.50. Working in stages stops small decimal errors creeping in.',
                wrongFb: 'Try adding in two stages — £8.25 + £2.50 = £10.75, then £10.75 + £4.75 = £15.50. Decimals are easy to slip up on so working step by step really helps.',
              },
              {
                id: 'ms-bl-1-q2',
                type: 'mc',
                text: 'You add up a bill and get £13.80. The bill says £14.30. What\'s the most sensible next step?',
                options: [
                  { label: 'Just pay it — the restaurant is always right', value: 'wrong' },
                  { label: 'The restaurant has definitely overcharged on purpose', value: 'wrong' },
                  { label: 'Check your own adding again, then ask calmly if it still doesn\'t match', value: 'correct' },
                  { label: 'The difference is too small to bother with', value: 'wrong' },
                ],
                correctFb: '✅ A 50p difference could be your error or theirs. Check your own maths first, then ask politely if it still doesn\'t add up. It\'s not about blame — it\'s about accuracy.',
                wrongFb: 'A discrepancy is always worth a quiet check — it might be your arithmetic or it might be theirs. Check your own adding first, then ask calmly if the numbers still don\'t match.',
              },
              {
                id: 'ms-bl-1-q3',
                type: 'mc',
                text: 'A family of four each orders the same meal deal for £9.50. Which method gives you the total most reliably?',
                options: [
                  { label: 'Guess based on roughly what £9.50 × 4 might be', value: 'wrong' },
                  { label: 'Add £9.50 four times in a row', value: 'wrong' },
                  { label: 'Double it twice: £9.50 × 2 = £19, then £19 × 2 = £38', value: 'correct' },
                  { label: 'Just trust the till total', value: 'wrong' },
                ],
                correctFb: '✅ Doubling twice is clean and reliable — £9.50 × 2 = £19, then £19 × 2 = £38. Much less room for error than adding four times in a row.',
                wrongFb: 'Adding four times creates more chances to slip up. Doubling twice — £9.50 × 2 = £19, then £19 × 2 = £38 — is faster and more reliable. It\'s a useful trick any time you\'re multiplying by 4.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Bill Checker',
              desc: 'Next time your family has a receipt from a meal, a takeaway, or a supermarket shop — ask to see it before anyone puts it away. Add up every item yourself. Does it match the total? Report back — was it right? Did anything surprise you?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'Making Change With Bigger Amounts',
        icon: '💷',
        xp: 220,
        steps: [
          {
            title: '💷 Let\'s Learn — Bigger Change',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You already know how change works. Now the amounts are bigger — and the arithmetic needs to keep up. The method stays exactly the same. You count up in two stages. Something costs £12.70. You pay with £20. Stage 1 — get to the nearest round number: £12.70 → £13.00 = 30p. Stage 2 — count up to the amount paid: £13.00 → £20.00 = £7.00. Total change: £7.30. Here\'s one with a trickier starting point. Something costs £16.45 and you pay with £20. £16.45 → £16.50 = 5p, then £16.50 → £17.00 = 50p, then £17.00 → £20.00 = £3.00. Change = £3.55. That one needed three stages because 45p isn\'t tidy enough to jump straight to a round pound. The rule is always the same: get to the nearest tidy number first, then work upward in comfortable steps.',
              facts: [
                { icon: '⬆️', text: 'Always count UP from the price to what you paid — never try to subtract in one go.' },
                { icon: '🎯', text: 'Get to the nearest round number first (like £13.00 or £17.00), then jump to what was paid.' },
                { icon: '➕', text: 'Add the stages together at the end. Write them down to avoid losing track.' },
                { icon: '💡', text: 'Larger amounts mean larger potential errors. A £2 mistake is worth catching.' },
              ],
            },
          },
          {
            title: '📝 Activity — Change Practice',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Here are five transactions with bigger amounts. Work out the correct change for each one — then check your answers.',
              doTogether: 'Write five transactions — prices between £8 and £18, paid with £20 notes. Work through each one using the staged counting up method, writing out the stages. Check together and talk through any that went wrong. A parent can verify the answers.',
              talkAbout: '"Which numbers were hardest — what made them tricky?" / "Does writing the stages down help?" / "When would you need to do this quickly in real life?"',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-bl-2-q1',
                type: 'mc',
                text: 'Something costs £11.60. You pay with £20. How much change?',
                options: [
                  { label: '£9.40', value: 'wrong' },
                  { label: '£8.60', value: 'wrong' },
                  { label: '£9.60', value: 'wrong' },
                  { label: '£8.40', value: 'correct' },
                ],
                correctFb: '✅ £11.60 → £12.00 = 40p, then £12.00 → £20.00 = £8.00. Total: £8.40. Two clean stages — well done.',
                wrongFb: 'Stage one: £11.60 to £12.00 is 40p. Stage two: £12.00 to £20.00 is £8.00. Add them: £8.40. Writing the stages down removes the risk of slipping up.',
              },
              {
                id: 'ms-bl-2-q2',
                type: 'mc',
                text: 'Something costs £14.85. You pay with £20. A friend says the change is £5.15. Another says £5.25. Who is right?',
                options: [
                  { label: 'The first friend — £5.15', value: 'correct' },
                  { label: 'The second friend — £5.25', value: 'wrong' },
                  { label: 'Neither — the change is £6.15', value: 'wrong' },
                  { label: 'You\'d need a calculator to be sure', value: 'wrong' },
                ],
                correctFb: '✅ £14.85 → £15.00 = 15p, then £15.00 → £20.00 = £5.00. Total: £5.15. The first friend is correct — and you can verify it in seconds.',
                wrongFb: 'Work it out yourself: £14.85 to £15.00 is 15p, then £15.00 to £20.00 is £5.00. Total change: £5.15. The first friend is correct.',
              },
              {
                id: 'ms-bl-2-q3',
                type: 'mc',
                text: 'You\'re given £3.30 change from a £20 note. What did the item cost?',
                options: [
                  { label: '£16.30', value: 'wrong' },
                  { label: '£17.30', value: 'wrong' },
                  { label: '£16.70', value: 'correct' },
                  { label: '£23.30', value: 'wrong' },
                ],
                correctFb: '✅ £20.00 − £3.30 = £16.70. Working backwards from the change is a handy way to double-check a price.',
                wrongFb: 'If you received £3.30 change from £20, subtract: £20.00 − £3.30 = £16.70. Working backwards from the change is a useful skill when checking prices.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Change Checker',
              desc: 'Next time you\'re out and someone pays with a note, work out the correct change in your head before it arrives. Were you right? Did the shop get it right? Tell us what happened.',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'Comparing Value',
        icon: '⚖️',
        xp: 220,
        steps: [
          {
            title: '⚖️ Let\'s Learn — Comparing Value',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Here\'s something worth knowing: cheaper doesn\'t always mean better value. Value is about what you get for your money — not just the price. The clearest way to compare is to find the price per unit — how much you\'re paying for each gram, millilitre, or item. A 500g bag of rice costs £1.20. A 1kg bag costs £2.10. 500g bag: £1.20 ÷ 500 = 0.24p per gram. 1kg bag: £2.10 ÷ 1000 = 0.21p per gram. The bigger bag is cheaper per gram — better value on paper. But here\'s the important bit: better value per unit isn\'t always the right choice. What if you only need 500g and the rest goes to waste? What if the budget only stretches to the smaller one this week? There\'s also the offer illusion — something on sale looks like a saving, but only if you were going to buy it anyway. If you weren\'t planning to buy it, you haven\'t saved anything. You\'ve spent money you didn\'t plan to.',
              facts: [
                { icon: '🧮', text: 'Price per unit = price ÷ quantity. Lower = better value per unit.' },
                { icon: '⚠️', text: 'Bigger is only better value if you use it all. Wasted product = wasted money.' },
                { icon: '🏷️', text: 'Offers are only savings if you were going to buy it anyway.' },
                { icon: '💡', text: 'Good value = right price for what you actually need in your situation.' },
              ],
            },
          },
          {
            title: '📝 Activity — Value Comparison',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Find three pairs of products at home or online. For each pair, work out which is better value — and then decide whether you\'d actually buy it.',
              doTogether: 'Find three real comparisons — two sizes of the same product, or two brands at different prices. Work out price per unit for each pair. Decide which is better value on paper. Then discuss whether that\'s actually the right choice given the situation. A parent can help check the calculations.',
              talkAbout: '"Did any result surprise you?" / "Can you think of a time the bigger pack wouldn\'t be worth it?" / "Do you think shops make value easy or hard to compare?"',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-bl-3-q1',
                type: 'mc',
                text: 'A 300g pack of pasta costs 75p. A 500g pack costs £1.10. Which is better value per gram?',
                options: [
                  { label: 'The 300g pack — it costs less overall', value: 'wrong' },
                  { label: 'They\'re about the same', value: 'wrong' },
                  { label: 'The 500g pack — cheaper per gram', value: 'correct' },
                  { label: 'You can\'t tell without knowing the brand', value: 'wrong' },
                ],
                correctFb: '✅ 300g pack: 75p ÷ 300 = 0.25p per gram. 500g pack: £1.10 ÷ 500 = 0.22p per gram. The bigger pack is cheaper per gram — better value if you\'ll use it all.',
                wrongFb: 'Divide each price by its weight: 75p ÷ 300 = 0.25p per gram, £1.10 ÷ 500 = 0.22p per gram. The 500g pack is cheaper per gram — better value on the numbers.',
              },
              {
                id: 'ms-bl-3-q2',
                type: 'mc',
                text: 'You weren\'t planning to buy biscuits. You see a pack "was £2.00, now £1.20". Your friend says you\'re saving 80p. What\'s the most accurate response?',
                options: [
                  { label: 'Your friend is right — 80p is a good saving', value: 'wrong' },
                  { label: 'It depends on whether you like the biscuits', value: 'wrong' },
                  { label: 'You haven\'t saved 80p — you\'ve spent £1.20 you didn\'t plan to spend', value: 'correct' },
                  { label: 'Offers are always worth taking advantage of', value: 'wrong' },
                ],
                correctFb: '✅ Exactly right. A saving only exists if you were going to buy the thing anyway. If you weren\'t — you haven\'t saved anything. You\'ve just spent £1.20.',
                wrongFb: 'If you weren\'t going to buy them, there\'s no saving — just £1.20 spent. An offer only creates a genuine saving when the timing aligns with something you already needed.',
              },
              {
                id: 'ms-bl-3-q3',
                type: 'mc',
                text: 'A multipack of 6 juice cartons costs £2.40. Individual cartons cost 45p each. You need exactly 4 cartons. Which is the smarter choice?',
                options: [
                  { label: 'The multipack — always better to buy in bulk', value: 'wrong' },
                  { label: '4 individual cartons — costs less for what you actually need', value: 'correct' },
                  { label: 'The multipack — the extra 2 cartons are basically free', value: 'wrong' },
                  { label: 'Individual cartons are always better', value: 'wrong' },
                ],
                correctFb: '✅ 4 individual cartons = £1.80. The multipack = £2.40. Buying more than you need costs more overall, even if it\'s cheaper per carton.',
                wrongFb: '4 individual cartons at 45p = £1.80. The multipack costs £2.40. Buying more than you need costs more overall. Right choice depends on what you actually need.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Value Spotter',
              desc: 'Next time you\'re in a supermarket, find two different sizes of the same product. Work out the price per unit for each. Which is better value? Is that actually what you\'d buy? Tell us why.',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'Spending Decisions',
        icon: '🤔',
        xp: 220,
        steps: [
          {
            title: '🤔 Let\'s Learn — Spending Decisions',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You\'ve got some money. There are a few things you\'d like to spend it on. You can\'t have all of them. This comes up all the time — and most people make these decisions quickly without much thought. Something catches their eye, it feels worth it in the moment, and the money goes. That\'s not always wrong. But spending without thinking means you sometimes reach the end of the week wondering where it all went. Making a conscious spending decision is simpler than it sounds. Just three questions: Do I actually want this — or does it just look good right now? Is there something I want more that this money could go towards? Would I still think this was a good decision in a week\'s time? That last one is surprisingly powerful. Most impulse purchases don\'t survive it. None of this means agonising over every small thing. It just means spending on purpose rather than by accident.',
              facts: [
                { icon: '⏸️', text: 'Before spending on something unplanned, pause. The urgency to buy now is rarely real.' },
                { icon: '🔄', text: 'Every time you spend on one thing, you\'re choosing not to spend on something else.' },
                { icon: '📅', text: '"Would I still want this next week?" is one of the most useful questions in money.' },
                { icon: '💡', text: 'Spending on purpose — not by accident — is a habit that makes a real difference over time.' },
              ],
            },
          },
          {
            title: '📝 Activity — The £10 Challenge',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Here\'s a list of things you could spend money on this week. You\'ve got £10. Choose what you\'d buy — and explain your thinking.',
              doTogether: 'Write a list of 8–10 options with prices — a mix of things they\'d genuinely want. Some impulsive, some considered, some social, some practical. Total value should exceed £10. They choose what fits the budget and talk through their reasoning. No right answers — the conversation is the point.',
              talkAbout: '"Was there anything you nearly chose but didn\'t? What tipped it?" / "Did any choice feel harder than you expected?" / "If it was £15 instead of £10, would anything change?"',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-bl-4-q1',
                type: 'mc',
                text: 'You have £9 and you\'re deciding between a £7 book you\'ve wanted for six weeks and a £6 snack pack that looks good right now. Which question is most useful?',
                options: [
                  { label: 'Which one costs less?', value: 'wrong' },
                  { label: 'Which one would my friends choose?', value: 'wrong' },
                  { label: 'Which one looks better value per pound?', value: 'wrong' },
                  { label: 'Which one will I still be glad I chose next week?', value: 'correct' },
                ],
                correctFb: '✅ That question cuts through the immediate appeal. The book has lasted six weeks of wanting — the snack probably won\'t last six minutes of eating.',
                wrongFb: 'The most useful question takes you past the moment. "Which will I still be glad I chose next week?" separates a genuine want from something that just looks good right now.',
              },
              {
                id: 'ms-bl-4-q2',
                type: 'mc',
                text: 'You spend £8 on impulse. The next day a friend invites you somewhere that costs £8. What\'s the most honest reflection?',
                options: [
                  { label: 'It\'s just bad luck — you couldn\'t have known', value: 'wrong' },
                  { label: 'You should never spend money on anything unplanned', value: 'wrong' },
                  { label: 'A moment\'s thought beforehand might have changed the decision', value: 'correct' },
                  { label: 'Your friend should have given more notice', value: 'wrong' },
                ],
                correctFb: '✅ Not every impulse purchase leads to this — but a brief pause prevents a lot of these situations. One question: is there anything coming up I might want this money for?',
                wrongFb: 'The lesson isn\'t to never spend — it\'s to take a moment before unplanned purchases. One brief question about upcoming plans is often all it takes.',
              },
              {
                id: 'ms-bl-4-q3',
                type: 'mc',
                text: 'Three friends each have £5. One spends all of it before meeting the others. The group wants to pool money for something costing £12. What\'s the fairest outcome?',
                options: [
                  { label: 'The other two cover it — it\'s not a big deal', value: 'wrong' },
                  { label: 'The friend who spent their money shouldn\'t join in', value: 'wrong' },
                  { label: 'They choose something cheaper that all three can contribute to equally', value: 'wrong' },
                  { label: 'There\'s no single right answer — but the group should decide together openly', value: 'correct' },
                ],
                correctFb: '✅ Exactly — there\'s no clean answer here. The point is that one person\'s spending decision affected the whole group\'s options. Worth thinking about before spending, not after.',
                wrongFb: 'This one doesn\'t have a clean answer — and that\'s deliberate. One person\'s spending decision changed what was possible for everyone. That\'s worth remembering before you spend.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Pause Test',
              desc: 'This week, before you spend money on anything unplanned, wait 24 hours. At the end of that time — do you still want it as much? Report back. Did waiting change your decision?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'A Simple Budget',
        icon: '📊',
        xp: 240,
        steps: [
          {
            title: '📊 Let\'s Learn — A Simple Budget',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'A budget is just a plan for money. You list what\'s coming in — your income. For you that might be pocket money, birthday money spread over a few weeks, or money earned from helping out. Then you list what\'s going out — your outgoings. Then one calculation: Income − Outgoings = What\'s left. Positive — you\'re living within your means. Zero — everything is accounted for. Negative — you\'re spending more than you have. That needs attention. The useful thing about a budget isn\'t the arithmetic — it\'s what the arithmetic shows you. Small regular outgoings that quietly add up. A gap between what you planned to save and what you actually saved. A budget doesn\'t judge you. It just shows you what\'s true — and knowing what\'s true is always better than guessing.',
              facts: [
                { icon: '📥', text: 'Income = everything coming in. List it all, however small.' },
                { icon: '📤', text: 'Outgoings = everything going out. Include saving — that\'s an outgoing with a purpose.' },
                { icon: '➖', text: 'Income − Outgoings = your result. Positive is good. Negative needs attention.' },
                { icon: '📋', text: 'Writing it down often shows you things you hadn\'t noticed about your own spending.' },
              ],
            },
          },
          {
            title: '📝 Activity — Priya\'s Budget',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Meet Priya. She\'s 11. Here\'s her situation: she gets £7 pocket money per week and earns £2 most weeks helping a neighbour. She spends £2.50 on school snacks, £1 on an app (split with her sister), £2.20 on a magazine most weeks, £1.50 saving for headphones, and £1 on other bits. Work through her budget: what\'s her total income? Total outgoings? What\'s left? What if the dog walking doesn\'t happen? What if she wants to save £1 more per week?',
              doTogether: 'Work through Priya\'s budget step by step. Then build a real one for yourself — your actual income, your actual outgoings. Add both columns and subtract. Look at the result together.',
              talkAbout: '"Did anything in the outgoings surprise you?" / "Is the number what you expected?" / "Is there anything that isn\'t really worth what it costs?"',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-bl-5-q1',
                type: 'mc',
                text: 'Priya\'s weekly income is £9 and her outgoings are £8.20. How much is left?',
                options: [
                  { label: '90p', value: 'wrong' },
                  { label: '£1.20', value: 'wrong' },
                  { label: '80p', value: 'correct' },
                  { label: '£1.80', value: 'wrong' },
                ],
                correctFb: '✅ £9.00 − £8.20 = 80p. A small margin — which is exactly why knowing the number matters. If anything unexpected came up, she\'d need to adjust.',
                wrongFb: '£9.00 − £8.20 = 80p. It\'s a small margin — and small margins are where a budget earns its keep, because you can see the tightness before it becomes a problem.',
              },
              {
                id: 'ms-bl-5-q2',
                type: 'mc',
                text: 'The dog walking doesn\'t happen one week, so Priya\'s income drops to £7. Her outgoings stay at £8.20. What\'s her position?',
                options: [
                  { label: 'She breaks even', value: 'wrong' },
                  { label: 'She has 80p left as usual', value: 'wrong' },
                  { label: 'She\'s £1.20 short — spending more than she has', value: 'correct' },
                  { label: 'She needs to earn £7 more to fix it', value: 'wrong' },
                ],
                correctFb: '✅ £7.00 − £8.20 = −£1.20. One missed week of earnings tips a tight budget into the negative. That\'s not a crisis — but it\'s something to plan for.',
                wrongFb: '£7.00 income minus £8.20 outgoings = −£1.20. She\'s spending more than she has that week. Knowing it\'s coming gives her time to adjust before it\'s a problem.',
              },
              {
                id: 'ms-bl-5-q3',
                type: 'mc',
                text: 'Priya wants to save an extra £1 per week. Looking at her outgoings, which cut makes most sense?',
                options: [
                  { label: 'Stop saving for the headphones entirely', value: 'wrong' },
                  { label: 'Cancel the app subscription — saving £1 immediately', value: 'wrong' },
                  { label: 'Reduce the magazine from weekly to every other week — saving about £1.10', value: 'correct' },
                  { label: 'Cut school snacks completely', value: 'wrong' },
                ],
                correctFb: '✅ Buying the magazine fortnightly saves about £1.10 per week — just enough — without cutting anything completely. Small adjustments often work better than big cuts.',
                wrongFb: 'The most balanced option is reducing the magazine to fortnightly — saving about £1.10 without cutting anything out entirely. Small adjustments tend to last longer than big cuts.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'My Budget',
              desc: 'Write a simple budget for yourself — income on one side, outgoings on the other. What\'s the result? Is there anything in the outgoings that surprised you — or that you\'d consider cutting?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'The Supermarket Challenge',
        icon: '🛒',
        xp: 280,
        steps: [
          {
            title: '🛒 Let\'s Learn — The Supermarket Challenge',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Today everything comes together — and this time it\'s a real task. Your family needs a few things from the supermarket. You\'ve been given a budget. Your job is to plan the shop, make the best choices, stay inside the budget, and work out the change. That means adding up as you go — keeping a running total so you know where you stand before you reach the till. Comparing value when there are two options. Making decisions if the total creeps over budget. Checking the receipt when it arrives. Working out the change from whatever is paid. Every one of those skills came from somewhere in this quest. Today they\'re not separate skills anymore. They\'re just — how you do the shop.',
              facts: [
                { icon: '🔢', text: 'Keep a running total as you add items. Don\'t wait until the end to check.' },
                { icon: '⚖️', text: 'Where there are two options, do a quick value comparison before choosing.' },
                { icon: '🧾', text: 'Check the receipt against your running total when you\'re done.' },
                { icon: '💰', text: 'Work out the change before it arrives — then check it matches.' },
              ],
            },
          },
          {
            title: '📝 Activity — The £15 Shop',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Here\'s your budget and your shopping list. Some items have two options — you choose which to buy. Add it up as you go, stay under £15, and tell me the change from £20.',
              doTogether: 'Write a shopping list of 8 items — a mix of straightforward items and a few where there are two size or brand options at different prices. Set a budget of £15. Work through the list, make value decisions where options exist, keep a running total. At the end, calculate change from a £20 note. If possible, take them on the actual shop and let them lead it.',
              talkAbout: '"Did you have to make any swaps to stay inside the budget?" / "Did the running total feel manageable?" / "Was there anything where the better value option wasn\'t obviously better?"',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-bl-6-q1',
                type: 'mc',
                text: 'Your running total is £11.40 and you still need to add an item that costs £2.85. Your budget is £15. How much will you have left after that item?',
                options: [
                  { label: '£3.60', value: 'wrong' },
                  { label: '£2.60', value: 'wrong' },
                  { label: '75p', value: 'correct' },
                  { label: '£1.75', value: 'wrong' },
                ],
                correctFb: '✅ £11.40 + £2.85 = £14.25. £15.00 − £14.25 = 75p remaining. Tight — but inside the budget.',
                wrongFb: 'Add the new item first: £11.40 + £2.85 = £14.25. Then subtract from the budget: £15.00 − £14.25 = 75p left. Always add to your running total before deciding whether you can afford the next item.',
              },
              {
                id: 'ms-bl-6-q2',
                type: 'mc',
                text: 'You reach the till and your receipt total is £14.60. You expected £14.25 based on your running total. What\'s the most sensible first step?',
                options: [
                  { label: 'Just pay it — 35p isn\'t worth the hassle', value: 'wrong' },
                  { label: 'Assume the shop is right and you made a mistake', value: 'wrong' },
                  { label: 'Refuse to pay until it\'s fully investigated', value: 'wrong' },
                  { label: 'Check your running total against each receipt line to find the difference', value: 'correct' },
                ],
                correctFb: '✅ A calm methodical check is all it takes. 35p might seem small — but the habit of checking is the point, not the amount.',
                wrongFb: 'The right move is a quiet check — go through each item on the receipt against your running total. The difference might be your arithmetic, it might be theirs. Either way, knowing is better than guessing.',
              },
              {
                id: 'ms-bl-6-q3',
                type: 'mc',
                text: 'Your final total is £13.85 and you pay with £20. What change should you receive?',
                options: [
                  { label: '£7.25', value: 'wrong' },
                  { label: '£6.05', value: 'wrong' },
                  { label: '£5.85', value: 'wrong' },
                  { label: '£6.15', value: 'correct' },
                ],
                correctFb: '✅ £13.85 → £14.00 = 15p, then £14.00 → £20.00 = £6.00. Total change: £6.15. Two stages, clean answer — and every skill from this quest working together.',
                wrongFb: 'Two stages: £13.85 to £14.00 is 15p, then £14.00 to £20.00 is £6.00. Total: £6.15. Writing each stage separately removes the chance of a slip.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 80,
            missionContent: {
              title: 'The Real Shop',
              desc: 'Do this for real with your family this week. Ask to be in charge of the budget for part of the shop — even just a few items. Keep a running total. Check the receipt. Work out the change. Report back: how did it go? Did anything surprise you?',
              note: '🌟 Quest complete! This memory goes on your Wall forever.',
            },
          },
        ],
      },
    ],

    // ════════════════════════════════════════════════════════════════════════
    // GROWERS
    // ════════════════════════════════════════════════════════════════════════
    grower: [
      {
        title: 'Where Does My Money Come From?',
        icon: '💸',
        xp: 240,
        steps: [
          {
            title: '💸 Let\'s Learn — Where Does My Money Come From?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Before you can make good decisions with money, you need to know exactly what you\'ve got. That sounds obvious — but most people, including most adults, have only a rough idea of their actual income. They know the main thing coming in and quietly ignore the rest. For you, money probably comes from several places: pocket money (regular, weekly or monthly), earning (helping out at home, neighbours, odd jobs — variable, not guaranteed every week), gifts (birthdays, Christmas — meaningful but unpredictable), and selling (things you no longer need). The key insight is that not all income is equal in terms of reliability. Pocket money is regular — you can plan around it. Earnings are variable — some weeks more, some less or nothing. Gifts are irregular — significant when they arrive but can\'t be counted on week to week. When you budget, regular income is what you build from. Variable and irregular income is what you treat carefully — because you can\'t count on it being there every time.',
              facts: [
                { icon: '✅', text: 'Regular income = what you can plan around. Build your budget from this.' },
                { icon: '⚠️', text: 'Variable income = useful when it arrives, but never guaranteed. Treat it as a bonus.' },
                { icon: '🎁', text: 'Irregular income = real money, but not planning money. Don\'t build a lifestyle around it.' },
                { icon: '💡', text: 'Most financial stress comes from treating variable income as if it were guaranteed.' },
              ],
            },
          },
          {
            title: '📝 Activity — Map Your Income',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'List every source of money that came your way in the last month. Separate it into two columns: reliable and unreliable. What\'s your real reliable weekly income?',
              doTogether: 'Work through this independently. List every income source. Separate into reliable and unreliable columns. Add up the reliable column. Note the unreliable column separately. A parent can help if needed — but the learner should lead this.',
              talkAbout: 'Was the total more or less than you expected? Is there any income you\'ve been treating as reliable that probably isn\'t? If the irregular stuff disappeared, would that change how you live week to week?',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-gr-1-q1',
                type: 'mc',
                text: 'You receive £10 pocket money weekly, earn roughly £8 most weeks from odd jobs, and received £50 for your birthday last month. What\'s the most accurate figure to build a weekly budget from?',
                options: [
                  { label: '£68 — add everything including birthday money spread over four weeks', value: 'wrong' },
                  { label: '£18 — pocket money plus earnings since both come regularly', value: 'wrong' },
                  { label: '£10 — only the guaranteed income, treating earnings as a bonus', value: 'correct' },
                  { label: '£8 — the earnings, since that\'s what you actually worked for', value: 'wrong' },
                ],
                correctFb: '✅ Building from guaranteed income only — £10 — means you\'re never relying on money that might not arrive. Earnings become a welcome addition rather than something you\'ve already spent in your head.',
                wrongFb: 'The safest foundation for a budget is guaranteed income only. If you build from £18 and the odd jobs don\'t happen one week, you\'re already short. Treating variable income as a bonus protects you from that.',
              },
              {
                id: 'ms-gr-1-q2',
                type: 'mc',
                text: 'A friend says they always have money because they get a lot for birthdays and Christmas. Why might this be less secure than it sounds?',
                options: [
                  { label: 'Gift money doesn\'t count as real money', value: 'wrong' },
                  { label: 'They probably spend it too quickly', value: 'wrong' },
                  { label: 'Irregular income can\'t be reliably planned around — it distorts how much you think you have', value: 'correct' },
                  { label: 'It depends on how generous their family is', value: 'wrong' },
                ],
                correctFb: '✅ Large irregular amounts feel significant when they arrive — but spread across the year they may add up to less than expected, and they can\'t be counted on week to week.',
                wrongFb: 'The issue is reliability, not amount. A large gift in December feels like security — but it doesn\'t help in March. Irregular income is real money, but it\'s not planning money.',
              },
              {
                id: 'ms-gr-1-q3',
                type: 'mc',
                text: 'You\'ve been earning £15 a week helping a neighbour. They go on holiday for a month. What\'s the most sensible response?',
                options: [
                  { label: 'Assume they\'ll pay you extra when they return to make up for it', value: 'wrong' },
                  { label: 'Spend more freely now and adjust when they come back', value: 'wrong' },
                  { label: 'Borrow from a friend to cover the gap', value: 'wrong' },
                  { label: 'Adjust spending for that month based on your reliable income only', value: 'correct' },
                ],
                correctFb: '✅ Variable income disappearing temporarily is completely normal. The key is not having built a lifestyle that depends on it. Adjusting based on reliable income keeps you in control.',
                wrongFb: 'The right response is to live within reliable income for that period. Borrowing or spending freely creates problems that outlast the gap. Planning for variable income to disappear occasionally is part of managing it well.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'Map Your Income',
              desc: 'Write down every source of money that came your way in the last month. Separate it into reliable and unreliable columns. What\'s your real reliable weekly income? Is it different from what you thought?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'Where Does My Money Go?',
        icon: '📉',
        xp: 240,
        steps: [
          {
            title: '📉 Let\'s Learn — Where Does My Money Go?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Most people have a rougher idea of what they spend than what they earn. Ask someone how much they earn and they\'ll usually know. Ask them what they spent last week and the answer is much vaguer. A few things, some food, a couple of small things — probably about £X. That vagueness is where money quietly disappears. Tracking spending isn\'t about being tight or restrictive. It\'s just about knowing. And knowing — really knowing — tends to change behaviour naturally, without any effort or willpower required. Here\'s what tracking usually reveals: the small regular things add up faster than expected. A £1.50 drink three times a week is £234 a year. Impulse spending is hard to remember — things bought on a whim are forgotten within days but still show up in the total. Some spending delivers real value. Some doesn\'t. Once you can see it laid out, it\'s usually obvious which is which — without anyone having to tell you.',
              facts: [
                { icon: '📝', text: 'Writing down spending — even briefly — catches everything the memory misses.' },
                { icon: '🧮', text: 'Small regular spending adds up faster than expected. £1.50 × 3 per week = £234 a year.' },
                { icon: '🤔', text: 'Impulse purchases are often forgotten within days — but the money is still gone.' },
                { icon: '💡', text: 'Tracking shows you reality. What you do with that reality is entirely your choice.' },
              ],
            },
          },
          {
            title: '📝 Activity — Track the Week',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Try to remember everything you spent money on in the last week — or look back through any transactions if you have a card. Write it all down. Group it into categories. What does the total tell you?',
              doTogether: 'Work through this independently. List every purchase from the last week. Add up the total. Group into categories: food and drink, entertainment, social, saving, other. Look at each category total. A parent can review and discuss the results.',
              talkAbout: 'Was the total more or less than you expected? Which category surprised you most? Is there anything on the list you\'ve already forgotten about?',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-gr-2-q1',
                type: 'mc',
                text: 'You spend £2.20 on a drink on the way to school, around four times a week. Roughly how much is that per year?',
                options: [
                  { label: '£88', value: 'wrong' },
                  { label: '£220', value: 'wrong' },
                  { label: '£457', value: 'correct' },
                  { label: '£344', value: 'wrong' },
                ],
                correctFb: '✅ £2.20 × 4 days × 52 weeks = £457.60. That\'s not a judgment on whether it\'s worth it — it\'s just the real number. Knowing it lets you decide on purpose.',
                wrongFb: '£2.20 × 4 = £8.80 per week, × 52 weeks = £457.60 per year. Small regular spending adds up faster than most people expect. The number itself isn\'t good or bad — it\'s just useful to know.',
              },
              {
                id: 'ms-gr-2-q2',
                type: 'mc',
                text: 'You look back at last week\'s spending and realise you spent £14 on things you can\'t clearly remember buying. What does this most likely suggest?',
                options: [
                  { label: 'You were stolen from', value: 'wrong' },
                  { label: 'You have a memory problem', value: 'wrong' },
                  { label: 'Small transactions are hard to track mentally — a written record would have caught them', value: 'wrong' },
                  { label: 'C is correct — and this is completely normal, not unusual', value: 'correct' },
                ],
                correctFb: '✅ Forgetting small purchases is almost universal. The brain doesn\'t flag them as significant at the time. A simple written or digital record catches everything the memory misses.',
                wrongFb: 'Forgetting small purchases is completely normal — it\'s not a personal failing. The brain treats small transactions as insignificant. Writing them down, even briefly, changes that completely.',
              },
              {
                id: 'ms-gr-2-q3',
                type: 'mc',
                text: 'After tracking for a week, you notice you spent £18 on food and drinks but only £3 on things that genuinely mattered to you. What\'s the most useful response?',
                options: [
                  { label: 'Feel guilty and cut all food and drink spending', value: 'wrong' },
                  { label: 'Ignore it — one week isn\'t representative', value: 'wrong' },
                  { label: 'Notice the pattern but don\'t change anything yet', value: 'wrong' },
                  { label: 'Use it as information — and decide deliberately whether next week looks the same', value: 'correct' },
                ],
                correctFb: '✅ Tracking shows you reality. What you do with that reality is your choice — but making the choice consciously, rather than by default, is the whole point.',
                wrongFb: 'One week of data is a starting point, not a verdict. The useful response is to notice it clearly and then decide — on purpose — whether that pattern reflects what you actually want.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'Track the Week',
              desc: 'For the next seven days, write down every single thing you spend money on — however small. At the end of the week, add it up and group it into categories. What does it tell you?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'Making Money Go Further',
        icon: '📈',
        xp: 240,
        steps: [
          {
            title: '📈 Let\'s Learn — Making Money Go Further',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You know what comes in. You know what goes out. Now let\'s look at whether what goes out is working as hard as it could. Making money go further isn\'t about being restrictive — it\'s about getting more value from the same amount. Three ideas worth understanding properly: Price per unit — the cost divided by quantity. A larger pack is often but not always better value per unit, and only if you use all of it. The false economy — buying something cheap that breaks or doesn\'t work well, then buying it again. Over time the cheap option costs more. The subscription trap — small regular payments that don\'t feel significant individually but add up to a meaningful total. £4.99 a month sounds trivial. £4.99 × 12 = £59.88 a year — for something you might barely use. The common thread: the headline price isn\'t the full story. How long it lasts, how much you use it, and whether you actually needed it all affect the real cost.',
              facts: [
                { icon: '🧮', text: 'Real cost per month = price ÷ months of use. Compare two products this way.' },
                { icon: '♻️', text: 'False economy: cheap things that break and get replaced often cost more than better ones.' },
                { icon: '📱', text: 'Subscription trap: review all subscriptions once or twice a year. Most people have at least one they\'ve forgotten about.' },
                { icon: '💡', text: 'The headline price and the real cost are often very different numbers.' },
              ],
            },
          },
          {
            title: '📝 Activity — The Real Cost',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Work through these three scenarios. For each one, work out the real cost — not just the price tag. Scenario 1: Two pairs of trainers — one £35, lasts 8 months. One £60, lasts 18 months. Which costs less per month? Scenario 2: A streaming subscription at £6.99/month used twice a week vs one at £9.99/month used daily. Which gives better value per use? Scenario 3: A bulk buy of something perishable where a third will likely go to waste. Is it still better value?',
              doTogether: 'Work through each scenario independently. Calculate the real cost per month or per use. Decide which is better value — and explain the reasoning. A parent can review the conclusions.',
              talkAbout: 'Did any result feel counterintuitive? Can you think of a real false economy from your own life? Is there any subscription you\'d struggle to justify if you worked out the cost per use?',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-gr-3-q1',
                type: 'mc',
                text: 'Headphones costing £25 last about 4 months. Headphones costing £55 last 18 months. Which costs less per month?',
                options: [
                  { label: 'The £25 ones — lower upfront cost', value: 'wrong' },
                  { label: 'They work out about the same per month', value: 'wrong' },
                  { label: 'The £55 ones — roughly £3.05/month vs £6.25/month for the cheaper pair', value: 'correct' },
                  { label: 'You can\'t compare them without knowing sound quality', value: 'wrong' },
                ],
                correctFb: '✅ £25 ÷ 4 months = £6.25/month. £55 ÷ 18 months = £3.05/month. The more expensive pair costs less than half per month. That\'s a false economy caught clearly in the numbers.',
                wrongFb: 'Divide each price by its lifespan: £25 ÷ 4 = £6.25/month, £55 ÷ 18 = £3.05/month. The cheaper pair costs more than twice as much per month of use. The upfront price and the real cost are very different things.',
              },
              {
                id: 'ms-gr-3-q2',
                type: 'mc',
                text: 'You have three subscriptions — £4.99, £6.99, and £3.49 per month. You actively use two of them. The third you signed up for a free trial and forgot to cancel. What\'s the real annual cost of the forgotten one?',
                options: [
                  { label: '£3.49 — just one month\'s payment', value: 'wrong' },
                  { label: 'It varies — you might cancel soon', value: 'wrong' },
                  { label: '£41.88 — if it runs another full year uncancelled', value: 'correct' },
                  { label: 'Nothing — most companies cancel automatically', value: 'wrong' },
                ],
                correctFb: '✅ £3.49 × 12 = £41.88. Subscriptions don\'t feel significant monthly but they don\'t stop charging. Reviewing them once or twice a year is one of the easiest ways to find money you didn\'t know you were spending.',
                wrongFb: '£3.49 × 12 = £41.88 over a year. That\'s a meaningful amount for something unused. Most subscriptions won\'t cancel themselves — and the companies are counting on you not noticing.',
              },
              {
                id: 'ms-gr-3-q3',
                type: 'mc',
                text: 'A 1kg bag of coffee costs £9.00. A 250g bag costs £2.80. You only drink coffee occasionally and a 250g bag lasts you about three months before going stale. Which is the better choice?',
                options: [
                  { label: 'The 1kg bag — significantly cheaper per gram', value: 'wrong' },
                  { label: 'The 250g bag — the 1kg would largely go to waste', value: 'correct' },
                  { label: 'The 1kg bag — you could share it with family', value: 'wrong' },
                  { label: 'Neither — coffee is too expensive at both prices', value: 'wrong' },
                ],
                correctFb: '✅ The 1kg is cheaper per gram — but if most of it goes stale, the real cost per gram used is much higher than the 250g bag. Better value per unit only matters when you actually use all the units.',
                wrongFb: 'The 1kg bag is better value per gram — but only if you use it all. If most goes stale, you\'re paying for coffee you never drink. The right choice depends entirely on what you\'ll actually use.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Real Cost Check',
              desc: 'Pick one thing you own or subscribe to and work out its real cost per month or per use. Is it what you expected? Does it still feel worth it when you see the number?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'Building a Budget',
        icon: '📋',
        xp: 260,
        steps: [
          {
            title: '📋 Let\'s Learn — Building a Budget',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You know what comes in. You know what goes out. You know how to make spending work harder. Now let\'s put it all together into a budget — a real one, built from your actual numbers. A budget has three parts: Income — everything coming in (reliable income only — variable income is noted separately, not built from), Outgoings — everything going out including saving (that\'s an outgoing with a purpose), and the Result — income minus outgoings. Positive means within your means. Negative means something needs to change. Here\'s what separates a budget that works from one that doesn\'t: Honesty — a budget built from what you wish you spent rather than what you actually spend is useless. Categories — grouping outgoings helps you see where the weight is. Review — a budget is most useful when you come back to it regularly and check what actually happened against what you planned.',
              facts: [
                { icon: '📥', text: 'Use reliable income only as your foundation. Note variable income separately.' },
                { icon: '📊', text: 'Group outgoings into categories — it shows you where the weight is.' },
                { icon: '🔄', text: 'Review regularly. A budget that\'s become fiction is worse than no budget.' },
                { icon: '✅', text: 'Positive result = within your means. Negative result = something needs to change.' },
              ],
            },
          },
          {
            title: '📝 Activity — Build Your Budget',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Using everything from the last three sessions — your income map, your spending tracker, your value thinking — build a real budget. Reliable income at the top. Outgoings by category below. Result at the bottom. Is it positive, zero, or negative?',
              doTogether: 'Work through this independently using real numbers from Sessions 1 and 2. Write income at the top, outgoings grouped into categories below, result at the bottom. If negative, identify one or two adjustments that would fix it. A parent can review the finished budget.',
              talkAbout: 'Does seeing it all in one place feel different from knowing it roughly? If you wanted to save an extra £5 a month, where would it come from? Is there a category that\'s higher than you expected?',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-gr-4-q1',
                type: 'mc',
                text: 'Your reliable weekly income is £12. Your tracked outgoings are: food and drink £4.50, entertainment £3.00, saving £2.00, other £1.80. What\'s your weekly result?',
                options: [
                  { label: '+£1.20', value: 'wrong' },
                  { label: '−70p', value: 'wrong' },
                  { label: '+70p', value: 'correct' },
                  { label: '−£1.20', value: 'wrong' },
                ],
                correctFb: '✅ Total outgoings: £4.50 + £3.00 + £2.00 + £1.80 = £11.30. £12.00 − £11.30 = 70p positive. Small margin — but positive, and with saving already included.',
                wrongFb: 'Add outgoings: £4.50 + £3.00 = £7.50, + £2.00 = £9.50, + £1.80 = £11.30. Then £12.00 − £11.30 = 70p positive. Small but positive — and saving is already in there.',
              },
              {
                id: 'ms-gr-4-q2',
                type: 'mc',
                text: 'Your budget shows a negative result of £2.50 per week. Which response is most practical?',
                options: [
                  { label: 'Increase income immediately to cover the gap', value: 'wrong' },
                  { label: 'Stop saving entirely to balance it', value: 'wrong' },
                  { label: 'Borrow £2.50 a week from a family member', value: 'wrong' },
                  { label: 'Review outgoings by category and identify the most adjustable line', value: 'correct' },
                ],
                correctFb: '✅ Looking at outgoings by category is almost always the fastest route to a fix. One adjustment often closes a gap like this without touching the things that matter most.',
                wrongFb: 'The most practical first step is reviewing outgoings by category. Increasing income takes time, stopping saving undermines a key goal, and borrowing just delays the problem. One small adjustment often closes a gap like this entirely.',
              },
              {
                id: 'ms-gr-4-q3',
                type: 'mc',
                text: 'You build a budget and stick to it for two weeks. In week three an unexpected cost of £8 comes up. What\'s the most sensible response?',
                options: [
                  { label: 'Abandon the budget — it clearly doesn\'t account for real life', value: 'wrong' },
                  { label: 'Borrow £8 and pay it back from next week\'s income', value: 'wrong' },
                  { label: 'Absorb it from savings if possible, or reduce one outgoing that week to compensate', value: 'correct' },
                  { label: 'Ignore it and hope the budget self-corrects', value: 'wrong' },
                ],
                correctFb: '✅ Unexpected costs are part of real life — a budget that can\'t flex isn\'t a finished budget. Absorbing from savings or making a one-week adjustment keeps things on track without drama.',
                wrongFb: 'Unexpected costs don\'t mean the budget has failed — they mean it\'s meeting reality. Absorbing the cost from savings, or adjusting one outgoing that week, is how a budget handles real life.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'Build Your Budget',
              desc: 'Write a full budget — reliable income, outgoings by category, result at the bottom. Is it what you expected? Is there anything you\'d change? Keep it somewhere — you\'ll want it for next session.',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'When the Plan Meets Reality',
        icon: '⚡',
        xp: 260,
        steps: [
          {
            title: '⚡ Let\'s Learn — When the Plan Meets Reality',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'A budget is a plan. And plans meet reality. Reality means unexpected costs — a friend\'s birthday you forgot to budget for, a phone charger that stops working, a school trip with two weeks\' notice. Reality also means variable income dropping — the odd job that didn\'t happen, the pocket money that came late. And reality means temptation — the thing you didn\'t plan to buy that appeared at exactly the right moment. None of this means budgeting doesn\'t work. It means budgeting needs to be flexible — a tool you adjust, not a rule you break. Here\'s how to handle it: Name the situation (what\'s changed — income, unexpected cost, or spending decision?). Quantify it (how much has changed, and over what timeframe?). Find the adjustment (what can move to accommodate it?). Update the plan. Most financial stress isn\'t caused by big dramatic events. It\'s caused by small unplanned things that weren\'t absorbed, quietly stacking up.',
              facts: [
                { icon: '🏷️', text: 'Name it first: is this an income change, an unexpected cost, or a spending decision?' },
                { icon: '🔢', text: 'Quantify it: how much has changed, and for how long?' },
                { icon: '🔧', text: 'Find the adjustment: what can move? What shouldn\'t move?' },
                { icon: '📋', text: 'Update the plan. A budget that reflects reality — even imperfectly — is more useful than one that\'s become fiction.' },
              ],
            },
          },
          {
            title: '📝 Activity — Meet Jae',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Jae is 15. His reliable weekly income is £15 pocket money. Outgoings: lunch top-ups £3.50, phone credit £5.00, saving for a skateboard £3.00, entertainment and other £2.50. Total outgoings: £14.00. Weekly result: +£1.00. Now three things happen: his phone needs a new case (£8), a friend\'s birthday is in two weeks (he\'d like to spend £10), and his pocket money arrives three days late that week. Work through: what\'s the total additional cost over the next two weeks? How many weeks of £1 surplus covers the phone case alone? Which outgoing would be easiest to reduce temporarily? Should he reduce skateboard saving, entertainment, or both? If the late pocket money means he starts the week £15 short, how does that change the picture?',
              doTogether: 'Work through Jae\'s scenario independently. Then apply the same thinking to your own budget from Session 4. What would you adjust? A parent can review the conclusions and discuss.',
              talkAbout: 'Did the budget hold up or would it need a significant change? Is there anything in your outgoings that acts as a natural buffer? How would you feel about temporarily reducing the saving line?',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-gr-5-q1',
                type: 'mc',
                text: 'Jae has a weekly surplus of £1.00. The phone case costs £8. How many weeks of surplus would cover it — and what does that tell you about relying on surplus alone?',
                options: [
                  { label: '8 weeks — which is fine, he can wait', value: 'wrong' },
                  { label: '8 weeks — which shows the surplus is too small to absorb unexpected costs quickly', value: 'wrong' },
                  { label: '8 weeks — which suggests he needs either a temporary spending reduction or to dip into savings', value: 'correct' },
                  { label: 'It doesn\'t matter — he should just ask his parents', value: 'wrong' },
                ],
                correctFb: '✅ Eight weeks to save £8 from surplus alone isn\'t practical for something needed now. This is exactly the situation a small emergency fund — even £20 saved over time — is designed for.',
                wrongFb: 'Eight weeks is too long for something needed urgently. The surplus alone can\'t absorb this quickly — a temporary adjustment elsewhere, or dipping into existing savings, is the practical answer.',
              },
              {
                id: 'ms-gr-5-q2',
                type: 'mc',
                text: 'Jae reduces his entertainment budget by £1.50 and his skateboard saving by £1.00 for two weeks to cover the phone case. What\'s the real impact on his skateboard goal?',
                options: [
                  { label: 'None — £1 a week doesn\'t make a difference', value: 'wrong' },
                  { label: 'He\'ll never reach his goal now', value: 'wrong' },
                  { label: 'He\'ll reach his goal two weeks later than planned — a manageable delay', value: 'correct' },
                  { label: 'He should stop saving for the skateboard entirely until the phone case is paid for', value: 'wrong' },
                ],
                correctFb: '✅ A temporary reduction causes a temporary delay — not a derailment. Two weeks later is a small price for handling an unexpected cost without borrowing or stress.',
                wrongFb: 'Reducing saving by £1 for two weeks means £2 less towards the skateboard — a small and recoverable delay. Temporary adjustments to reach a goal are normal. The goal doesn\'t disappear, it just moves slightly.',
              },
              {
                id: 'ms-gr-5-q3',
                type: 'mc',
                text: 'The late pocket money means Jae starts the week effectively £15 short. He knows it\'s coming — just late. What\'s the most sensible approach?',
                options: [
                  { label: 'Spend as normal — the money will arrive soon', value: 'wrong' },
                  { label: 'Borrow from a friend and pay back when the money arrives', value: 'wrong' },
                  { label: 'Treat that week as a reduced-income week and adjust spending accordingly', value: 'wrong' },
                  { label: 'C is correct — and flag it in the budget so it doesn\'t catch him off guard', value: 'correct' },
                ],
                correctFb: '✅ Treating a delay as a temporary income reduction — and noting it in the budget — keeps things accurate and in control. Spending as normal on expected income is how small gaps become bigger ones.',
                wrongFb: 'The right move is to treat the week as lower-income and adjust accordingly. Spending as normal on expected income is a common way small manageable situations become stressful ones.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 60,
            missionContent: {
              title: 'The Adjustment Plan',
              desc: 'Think of one unexpected cost that could realistically come up for you in the next month. Work out how your current budget would handle it. What would you adjust — and what would you protect?',
              note: '🌟 Every mission earns bonus XP and goes on your Memory Wall!',
            },
          },
        ],
      },

      {
        title: 'Plan the Sleepover',
        icon: '🏠',
        xp: 320,
        steps: [
          {
            title: '🏠 Let\'s Learn — Plan the Sleepover',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'This is your final session — and today everything comes together in one situation. No new concepts. No new techniques. Just a real scenario that needs every skill you\'ve built across this quest. You\'re organising a sleepover for yourself and three friends — four people total. You\'ve been given a budget. Everything you need to plan it is here. Your job is to make the numbers work, make fair decisions, and come out the other side with a plan that actually holds together. That means working with a fixed budget, making value decisions, splitting costs fairly, handling a change mid-plan, and checking the final numbers before you commit. Every one of those is a skill from a previous session. Today they\'re just — planning a sleepover.',
              facts: [
                { icon: '💰', text: 'Total budget: £32 — £8 per person across four people.' },
                { icon: '⚖️', text: 'Where there are two options, work out which gives better value before choosing.' },
                { icon: '🤝', text: 'Splitting costs fairly is part of the challenge — especially if one person can contribute less.' },
                { icon: '🔢', text: 'Keep a running total as you plan. Check the final numbers before committing.' },
              ],
            },
          },
          {
            title: '📝 Activity — The Sleepover Simulation',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'You\'re hosting a sleepover for four people including yourself. Total shared budget: £32 (£8 per person). Here are your options — Food: frozen pizzas (feeds 4) £5.50 or delivery pizza £14.00, snacks and drinks £4.80, breakfast bits £3.20. Activities: board game hire £6.00, film rental £3.49, both £9.49. Other: face pack kit £4.50, card game pack £2.99, extra blankets £0 (family has them). Tasks: 1) Plan the full sleepover within £32, showing running total after each decision. 2) One friend can only contribute £5 instead of £8 — how does this affect things and what are the options? 3) Work out the change from £35 if the group pays with three £10 notes and a £5. 4) One item on your final list is £1.20 more than expected — does it still fit?',
              doTogether: 'Work through the full scenario independently. Plan it, price it, handle the friend\'s reduced contribution, check the change. A parent can review the final plan and discuss the decisions made.',
              talkAbout: 'Which decision was hardest — and why? How did you handle the friend contributing less? Was there a fair solution? If you did this for real, what would you do differently?',
            },
          },
          {
            title: '🧠 Quiz — Test Yourself',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'ms-gr-6-q1',
                type: 'mc',
                text: 'The group chooses frozen pizzas (£5.50), snacks (£4.80), breakfast (£3.20), and the film rental (£3.49). What\'s the total — and how much is left from £32?',
                options: [
                  { label: '£16.99 spent, £14.01 left', value: 'wrong' },
                  { label: '£17.49 spent, £14.51 left', value: 'wrong' },
                  { label: '£16.99 spent, £15.01 left', value: 'correct' },
                  { label: '£18.49 spent, £13.51 left', value: 'wrong' },
                ],
                correctFb: '✅ £5.50 + £4.80 + £3.20 + £3.49 = £16.99. £32.00 − £16.99 = £15.01 remaining. A solid plan with meaningful budget left for one more choice.',
                wrongFb: 'Add in stages: £5.50 + £4.80 = £10.30, + £3.20 = £13.50, + £3.49 = £16.99. Then £32.00 − £16.99 = £15.01 left. Building the running total item by item keeps the arithmetic clean.',
              },
              {
                id: 'ms-gr-6-q2',
                type: 'mc',
                text: 'One friend can only contribute £5 instead of £8. The shortfall is £3. Which response is fairest?',
                options: [
                  { label: 'The friend misses out on everything that costs extra', value: 'wrong' },
                  { label: 'The other three each contribute £1 more to cover the gap', value: 'wrong' },
                  { label: 'The total budget simply reduces to £29 and the plan adjusts', value: 'wrong' },
                  { label: 'Both B and C are fair — the group should decide together openly', value: 'correct' },
                ],
                correctFb: '✅ There\'s no single right answer — and that\'s the point. The fairest solution is the one everyone agrees to. What matters is that the decision is made openly, not assumed or resented.',
                wrongFb: 'Both options are genuinely fair depending on the group\'s preference. What\'s important is that it\'s discussed openly before money is spent — not assumed and discovered later.',
              },
              {
                id: 'ms-gr-6-q3',
                type: 'mc',
                text: 'The final plan costs £28.48. The group pays with three £10 notes and a £5 note (£35 total). How much change should they receive?',
                options: [
                  { label: '£7.52', value: 'wrong' },
                  { label: '£6.42', value: 'wrong' },
                  { label: '£7.42', value: 'wrong' },
                  { label: '£6.52', value: 'correct' },
                ],
                correctFb: '✅ £28.48 → £29.00 = 52p, then £29.00 → £35.00 = £6.00. Total change: £6.52. Two stages, clean answer — and every skill from this quest working together in one calculation.',
                wrongFb: 'Two stages: £28.48 to £29.00 is 52p, then £29.00 to £35.00 is £6.00. Total change: £6.52. Writing each stage separately removes the risk of a slip on the decimal.',
              },
            ],
          },
          {
            title: '🌟 Real World Mission!',
            type: 'mission',
            xp: 100,
            missionContent: {
              title: 'Real Life Version',
              desc: 'Plan a real sleepover — or any get-together — on a budget you\'d genuinely have available. Research real prices. Plan every cost. Is it actually possible on that budget? If not — what\'s the first thing you\'d change? You don\'t have to do it for real. Just plan it like you would.',
              note: '🌟 Quest complete! You\'ve used every skill from Money Skills Quest 1. This memory goes on your Wall.',
            },
          },
        ],
      },
    ],
  },
}

export default moneySkills