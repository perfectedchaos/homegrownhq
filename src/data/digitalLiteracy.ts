import { SubjectData } from './naturalWorld'

const digitalLiteracy: SubjectData = {
  id: 'digital',
  name: 'Digital Literacy',
  icon: '💻',
  color: '#185FA5',
  darkColor: '#042C53',
  bands: {
    sprout: [
      // Q1 S1
      {
        title: 'What is a Computer?',
        icon: '🖥️',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — What is a Computer?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Look around you right now. Can you see a phone? A tablet? Maybe a TV or a laptop? All of those things are computers. A computer is a machine that can take in information, think about it, and do something with it. When you tap a button on a tablet and a game appears — that\'s a computer taking in your tap and doing something with it. And here\'s the most important thing: computers were made by people. That means computers aren\'t magic. They\'re tools — like a hammer, or a paintbrush, or a really clever pair of scissors.',
              facts: [
                { icon: '🏛️', text: 'Long ago, computers were the size of a whole room and weighed as much as a car! People had to walk around inside them to fix them.' },
                { icon: '📱', text: 'Now you can hold a computer in your hand. A smartphone is a tiny, powerful computer that fits in a pocket.' },
                { icon: '🌟', text: 'Every computer in the world was invented by a person who had an idea. Which means you could help invent the next one.' },
              ],
            },
          },
          {
            title: 'Activity — Computer Hunt',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s find all the computers hiding around you! Some are obvious — and some might surprise you.',
              doTogether: 'Part 1: Spot the Computer — find all the computers you can see right now. Part 2: Then and Now — look at pictures of old and new computers and spot the differences together. Part 3: Draw Your Favourite Device — grab paper and crayons and draw your favourite device, or one you\'d love to have one day.',
              talkAbout: 'Ask your grown-up: what was the first computer or device they ever used? What did it look like?',
            },
          },
          {
            title: 'Quiz — What Do You Know?',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s1-q1',
                type: 'mc',
                text: 'What is a computer?',
                options: [
                  { label: 'A machine that thinks like a human', value: 'a' },
                  { label: 'A machine that takes in information and does something with it', value: 'b' },
                  { label: 'A type of television', value: 'c' },
                  { label: 'Something only grown-ups use', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Exactly right! A computer takes in information and does something with it — like showing a game when you tap a button.',
                wrongFb: 'Nearly! Computers follow instructions very fast but don\'t think like people do. The right answer is: a machine that takes in information and does something with it.',
              },
              {
                id: 'dl-s1-q2',
                type: 'mc',
                text: 'Who made computers?',
                options: [
                  { label: 'Robots', value: 'a' },
                  { label: 'Nobody — they grew naturally', value: 'b' },
                  { label: 'People', value: 'c' },
                  { label: 'Scientists from another planet', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Yes! Computers were made by people — just like you and me. People had ideas and worked hard to build them.',
                wrongFb: 'Computers were made by people! People had ideas and worked hard to build them. That means you could help build one someday too.',
              },
              {
                id: 'dl-s1-q3',
                type: 'mc',
                text: 'Which of these is a computer?',
                options: [
                  { label: 'A paintbrush', value: 'a' },
                  { label: 'A book', value: 'b' },
                  { label: 'A smartwatch', value: 'c' },
                  { label: 'A sandwich', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'A smartwatch is a tiny computer on your wrist! It tracks your steps, tells the time, and can even send messages.',
                wrongFb: 'A sandwich is wonderful — but a smartwatch is the computer here. It sits on your wrist and does computer things.',
              },
            ],
          },
          {
            title: 'Mission — Computer Detective',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Computer Detective',
              desc: 'Go on a computer hunt around your home with your grown-up. How many computers can you find? Remember — phones, tablets, smart TVs and laptops all count! When you find one, ask your grown-up what it does and who uses it most.',
              note: '🔍 Come back and tell us how many you found!',
            },
          },
        ],
      },
      // Q1 S2
      {
        title: 'Devices We Use',
        icon: '📱',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Devices We Use',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'A device is just another word for a computer tool. Some devices fit in your pocket. Some sit on a desk. Some you wear on your wrist. Some hang on your wall. A phone goes everywhere with you. A laptop is great for detailed work. A tablet is easy to hold. A smartwatch sits on your wrist. A smart TV connects to the internet so you can watch programmes from anywhere in the world. People choose the right tool for the job — just like you\'d use a paintbrush for painting and a spoon for soup.',
              facts: [
                { icon: '⌚', text: 'A smartwatch is a computer so small it fits on your wrist. It can count your steps, check your heartbeat and send messages.' },
                { icon: '💻', text: 'The first laptops were so heavy people could barely carry them. Now they\'re thinner than a notebook.' },
                { icon: '📺', text: 'A smart TV can connect to the internet and show you programmes from all over the world — even ones made in other countries.' },
              ],
            },
          },
          {
            title: 'Activity — Device Explorer',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s explore all the different devices and find out what each one is really good at!',
              doTogether: 'Part 1: Match the Device to the Job — match each device to what it\'s best for. Part 2: Our Family\'s Devices — find all the devices in your home. Part 3: Then, Now and Someday — fold paper into three columns. Draw a device from the past, one from today, and invent one for the future!',
              talkAbout: 'Ask your grown-up: which device do they use most? Which one could they not live without?',
            },
          },
          {
            title: 'Quiz — Devices',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s2-q1',
                type: 'mc',
                text: 'What is a device?',
                options: [
                  { label: 'A type of game', value: 'a' },
                  { label: 'A computer tool', value: 'b' },
                  { label: 'A kind of television', value: 'c' },
                  { label: 'Something only adults can use', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A device is a computer tool — and they come in all shapes and sizes, from a smartwatch to a smart TV.',
                wrongFb: 'A device is a computer tool — phones, tablets, laptops, smartwatches — all devices!',
              },
              {
                id: 'dl-s2-q2',
                type: 'mc',
                text: 'Why might someone choose a laptop instead of a phone for some jobs?',
                options: [
                  { label: 'Laptops are cheaper', value: 'a' },
                  { label: 'Laptops are newer', value: 'b' },
                  { label: 'Laptops have a bigger screen and keyboard for detailed work', value: 'c' },
                  { label: 'Phones are too heavy', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Exactly! A laptop has a bigger screen and a proper keyboard — brilliant for writing or detailed work.',
                wrongFb: 'It\'s about the right tool for the job. A laptop has a bigger screen and keyboard — great for detailed work.',
              },
              {
                id: 'dl-s2-q3',
                type: 'mc',
                text: 'Which device would be most useful on a long walk?',
                options: [
                  { label: 'A desktop computer', value: 'a' },
                  { label: 'A smart TV', value: 'b' },
                  { label: 'A smartwatch', value: 'c' },
                  { label: 'A printer', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'A smartwatch sits on your wrist — it goes wherever you go and can track your steps too!',
                wrongFb: 'A desktop or TV would be very tricky to carry! A smartwatch sits on your wrist and goes wherever you go.',
              },
            ],
          },
          {
            title: 'Mission — Ask Someone Older',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Ask Someone Older',
              desc: 'Find someone older than your grown-up — maybe a grandparent or an older family friend. Together with your grown-up, ask them: What did you use to talk to people far away when you were young? Did you have a computer? What did it look like? What does it do now that it couldn\'t do before?',
              note: '🎙️ You might get some very surprising answers!',
            },
          },
        ],
      },
      // Q1 S3
      {
        title: 'How Do We Communicate?',
        icon: '✉️',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — How We Communicate',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Communication means sharing something with someone else — a thought, a feeling, a piece of news, a question. People have always needed to communicate. Long ago, they painted pictures on cave walls, beat drums and lit fires on hilltops to send signals. Then came writing — but letters took weeks to arrive. Then the telephone let you hear someone\'s voice from miles away. Then the internet made everything faster. Today we use phone calls, video calls, messages, emails, photos and voice notes. But some ways of communicating are better for some things than others. A hug tells someone you love them in a way a message can\'t.',
              facts: [
                { icon: '🪨', text: 'The oldest cave paintings are over 40,000 years old. People have always wanted to share stories.' },
                { icon: '☎️', text: 'The first telephone call was made in 1876. Alexander Graham Bell said: "Mr Watson, come here — I want to see you."' },
                { icon: '💌', text: 'A handwritten letter that someone took time to write feels different to a typed message. Both are lovely in their own way.' },
              ],
            },
          },
          {
            title: 'Activity — Then and Now',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Communication has changed so much across history. Let\'s travel through time and explore!',
              doTogether: 'Part 1: Then and Now — match the old way of communicating to the new way. Part 2: Which Way Would You Choose? — for each situation, choose how you\'d communicate and why. Part 3: Write or Draw a Message the Old Way — write or draw a short message to someone you love and send it by post if you can.',
              talkAbout: 'Ask your grown-up: how did they keep in touch with friends before smartphones? Did they write letters? Use a phone attached to a wall?',
            },
          },
          {
            title: 'Quiz — Communication',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s3-q1',
                type: 'mc',
                text: 'What does communication mean?',
                options: [
                  { label: 'Talking on the phone', value: 'a' },
                  { label: 'Sharing something with someone else', value: 'b' },
                  { label: 'Sending emails', value: 'c' },
                  { label: 'Using a computer', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Communication means any way of sharing something with someone — a hug, a drawing, a letter, a voice note. All of it!',
                wrongFb: 'Talking on the phone is one kind — but communication means any way of sharing something with someone. A hug, a drawing, a letter — all communication!',
              },
              {
                id: 'dl-s3-q2',
                type: 'mc',
                text: 'How did people send messages a very long time ago, before writing?',
                options: [
                  { label: 'They used smartphones', value: 'a' },
                  { label: 'They sent emails', value: 'b' },
                  { label: 'They used drums, fires and cave paintings', value: 'c' },
                  { label: 'They didn\'t communicate at all', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'People have always found clever ways to communicate! Drums, signal fires and cave paintings — all before anyone had paper.',
                wrongFb: 'People have always found clever ways to communicate! Long before writing or phones, they used drums, signal fires and cave paintings.',
              },
              {
                id: 'dl-s3-q3',
                type: 'mc',
                text: 'Why might a handwritten letter feel special even though a message is much faster?',
                options: [
                  { label: 'Because letters are louder', value: 'a' },
                  { label: 'Because someone took time and care to write it by hand', value: 'b' },
                  { label: 'Because letters arrive faster', value: 'c' },
                  { label: 'Because phones don\'t work for letters', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A handwritten letter shows someone took their time — they thought about you and wrote something just for you. That feels different to a quick message.',
                wrongFb: 'Speed isn\'t everything! A handwritten letter shows someone took their time — they thought about you and wrote something just for you.',
              },
            ],
          },
          {
            title: 'Mission — The Old Way',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Send a Message the Old Way',
              desc: 'Together with your grown-up, send a message to someone you love the old-fashioned way. A handwritten note, a drawing in an envelope, or a proper letter. It doesn\'t have to be long. Even a picture with your name on it will make someone\'s day.',
              note: '💌 You just did something people have been doing for thousands of years.',
            },
          },
        ],
      },
      // Q1 S4
      {
        title: 'The Internet — What Is It?',
        icon: '🌐',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — What is the Internet?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'The internet is like an enormous invisible road. Information — words, pictures, videos, voices — travels along it at incredible speed. Faster than you can blink. Almost as fast as light. Just like a road connects towns and cities, the internet connects computers and phones and tablets all over the world. Millions and millions of them, all joined together. Nobody built it in a day. Lots of clever, curious people who loved asking "what if" worked for years to make it happen. And the most wonderful thing? The internet is still being invented. Right now, somewhere in the world, someone is thinking of something new. Maybe one day, that someone will be you.',
              facts: [
                { icon: '⚡', text: 'Information travels along the internet at almost the speed of light. A message can reach the other side of the world in less than a second.' },
                { icon: '🌍', text: 'The internet connects billions of devices all over the world — from tiny villages to huge cities.' },
                { icon: '💡', text: 'The internet was invented by people who used their imagination first. Every new thing on it starts as someone\'s idea.' },
              ],
            },
          },
          {
            title: 'Activity — Invisible Roads',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s discover how the internet works and imagine what new things we could add to it!',
              doTogether: 'Part 1: The Invisible Road — watch a message travel from a tablet all the way to a grandparent\'s phone. Part 2: What Travels on the Internet? — sort things into two piles: travels on the internet, or doesn\'t. Part 3: Invent Your Own Internet Thing — draw or describe something you wish the internet could do that it can\'t do yet.',
              talkAbout: 'Ask your grown-up: do they remember a time before the internet? What was different about life then?',
            },
          },
          {
            title: 'Quiz — The Internet',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s4-q1',
                type: 'mc',
                text: 'What is the internet a bit like?',
                options: [
                  { label: 'A type of television', value: 'a' },
                  { label: 'An invisible road that information travels along', value: 'b' },
                  { label: 'A very big computer', value: 'c' },
                  { label: 'Something only grown-ups understand', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'The internet is like an invisible road — information travels along it at incredible speed to reach people all over the world.',
                wrongFb: 'The internet is a bit like an invisible road — information travels along it at incredible speed to reach people all over the world.',
              },
              {
                id: 'dl-s4-q2',
                type: 'mc',
                text: 'Who built the internet?',
                options: [
                  { label: 'Robots', value: 'a' },
                  { label: 'One very clever person', value: 'b' },
                  { label: 'Lots of curious people who used their imagination', value: 'c' },
                  { label: 'Nobody — it appeared by itself', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'The internet was built by lots of curious people over many years. They imagined something that didn\'t exist and worked hard to make it real.',
                wrongFb: 'The internet was built by lots of different curious people over many years. They imagined something that didn\'t exist and worked hard to create it.',
              },
              {
                id: 'dl-s4-q3',
                type: 'mc',
                text: 'Which of these can travel along the internet?',
                options: [
                  { label: 'A sandwich', value: 'a' },
                  { label: 'A real flower', value: 'b' },
                  { label: 'A voice message', value: 'c' },
                  { label: 'A pair of shoes', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'A voice message travels as information along the internet and arrives in seconds. Amazing!',
                wrongFb: 'The internet can only carry information — like words, pictures, sounds and videos. It can\'t carry real objects. Not yet, anyway!',
              },
            ],
          },
          {
            title: 'Mission — Your Big Idea',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Your Internet Invention',
              desc: 'Tonight, with your grown-up, talk about this question: if you could invent something new for the internet, what would it do? It doesn\'t have to make sense. It doesn\'t have to be possible. The only rule is that it has to be YOUR idea. Draw it, describe it, or just talk about it.',
              note: '💡 Every single thing on the internet started as an idea in someone\'s head. Including yours.',
            },
          },
        ],
      },
      // Q1 S5
      {
        title: 'Staying Safe Online',
        icon: '⭐',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Staying Safe Online',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You know that feeling when something just feels a bit wrong? Maybe something makes your tummy feel funny or you\'re not quite sure what to do. That feeling is really important — it\'s your inside voice, and it\'s very good at its job. The internet is a wonderful place. And just like anywhere wonderful, it helps to have one simple thing to remember: if something ever feels wrong, you tell a grown-up straight away. Not later. Not after one more tap. Straight away. It doesn\'t matter what it is. It doesn\'t matter if you think it\'s silly. If something feels wrong — even a tiny bit — you go to your grown-up and you tell them.',
              facts: [
                { icon: '💛', text: 'Your inside voice is the feeling in your tummy that tells you when something seems wrong. Everyone has one. It\'s worth listening to.' },
                { icon: '🤝', text: 'Your grown-up isn\'t going to be cross with you. They just want to help. That\'s what grown-ups are for.' },
                { icon: '🌟', text: 'Even grown-ups come across things online they weren\'t expecting. Nobody has to deal with anything on their own.' },
              ],
            },
          },
          {
            title: 'Activity — How Does This Make You Feel?',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s look at some things that might happen online. For each one, think about how it makes you feel. There are no wrong answers here.',
              doTogether: 'Part 1: How Does This Make You Feel? — talk through each scenario together. Part 2: Who Do You Tell? — name the grown-ups in your life you could go to if something felt wrong. Part 3: Our Family\'s Online Rule — decide on one simple rule for your family together and write it down.',
              talkAbout: 'Tell your child out loud: there is nothing they could ever show you or tell you that would make you cross with them. You\'re always on their side.',
            },
          },
          {
            title: 'Quiz — Staying Safe',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s5-q1',
                type: 'mc',
                text: 'If something online makes your tummy feel funny, what should you do?',
                options: [
                  { label: 'Keep watching to see if it gets better', value: 'a' },
                  { label: 'Tell a grown-up straight away', value: 'b' },
                  { label: 'Turn the device off and never use it again', value: 'c' },
                  { label: 'Try to figure it out on your own', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Your inside voice is telling you something important. The best thing is to go straight to your grown-up — they\'re always there to help.',
                wrongFb: 'Your inside voice is telling you something important. The best thing to do is go straight to your grown-up — they\'re always there to help.',
              },
              {
                id: 'dl-s5-q2',
                type: 'mc',
                text: 'Will a grown-up be cross if you tell them something felt wrong online?',
                options: [
                  { label: 'Yes, they might take my device away', value: 'a' },
                  { label: 'I\'m not sure', value: 'b' },
                  { label: 'No — they just want to help', value: 'c' },
                ],
                correctAnswer: 'c',
                correctFb: 'They won\'t be cross at all. They just want to make sure you\'re okay. That\'s their job, and they\'re very good at it.',
                wrongFb: 'It can feel scary sometimes — but they won\'t be cross. They just want to make sure you\'re okay.',
              },
              {
                id: 'dl-s5-q3',
                type: 'mc',
                text: 'What is your inside voice?',
                options: [
                  { label: 'A voice that comes from the internet', value: 'a' },
                  { label: 'The feeling that tells you when something seems wrong', value: 'b' },
                  { label: 'Something only grown-ups have', value: 'c' },
                  { label: 'A character in a game', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Your inside voice is that feeling you get when something doesn\'t seem quite right. Everyone has one. And it\'s worth listening to.',
                wrongFb: 'Your inside voice is that feeling in your tummy when something doesn\'t seem quite right. Everyone has one.',
              },
            ],
          },
          {
            title: 'Mission — The Special Signal',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Your Special Signal',
              desc: 'Together with your grown-up, come up with a special signal — just between you — that means: something felt wrong and I need to talk to you. It could be a word, a hand signal, a look, or a tap on the arm. You might never need it. But it\'s nice to have.',
              note: '⭐ You\'ve got your inside voice, your grown-up team, and your special signal. You\'re all set.',
            },
          },
        ],
      },
      // Q1 S6
      {
        title: 'Screens and Other Things We Love',
        icon: '💛',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Screens and Other Things We Love',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Screens are wonderful. We\'ve talked about all the amazing things they can do — connecting us to people we love, taking us to places we\'ve never been, showing us things that make us laugh and wonder. But here\'s something interesting: when you\'ve been on a screen for a long time — really long — how do you feel? Sometimes brilliant. Sometimes a little bit tired. Sometimes like you need to run around. That\'s your body talking to you. Screens are one of the wonderful things in your life. But they\'re not the only one.',
              facts: [
                { icon: '🌿', text: 'When you run around outside, your body gets strong and your mind gets clear. Both are important.' },
                { icon: '📚', text: 'Reading stories, drawing, building things, playing with friends — all of these do different things for your brain.' },
                { icon: '💛', text: 'Screens are one of the wonderful things in your life. Running, drawing, cooking, cuddles — all the others are wonderful too.' },
              ],
            },
          },
          {
            title: 'Activity — My Wonderful Things',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s make a collection of YOUR wonderful things — everything you love, not just screens!',
              doTogether: 'Part 1: My Wonderful Things — name everything you love from different categories. Part 2: How Do I Feel? — talk about how the child in each scenario might feel at the end. Part 3: My Perfect Day — draw your perfect day from morning to bedtime. Screens can go in too!',
              talkAbout: 'Tell your child one of your favourite things to do that has nothing to do with a screen.',
            },
          },
          {
            title: 'Quiz — Balance',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s6-q1',
                type: 'mc',
                text: 'Why is it good to do lots of different things in a day — not just screens?',
                options: [
                  { label: 'Because screens are bad', value: 'a' },
                  { label: 'Because your body and mind need different things at different times', value: 'b' },
                  { label: 'Because grown-ups say so', value: 'c' },
                  { label: 'Because screens are boring', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'You are brilliant — and brilliant people need lots of different things. Fresh air, movement, creativity, rest, and yes, screens too!',
                wrongFb: 'It\'s not that screens are bad — it\'s that you are brilliant and brilliant people need lots of different things.',
              },
              {
                id: 'dl-s6-q2',
                type: 'mc',
                text: 'What might your body be telling you if you feel tired and grumpy after a long time on a screen?',
                options: [
                  { label: 'That screens are dangerous', value: 'a' },
                  { label: 'That you need a snack, fresh air or a change', value: 'b' },
                  { label: 'That you should never use screens again', value: 'c' },
                  { label: 'Nothing — bodies don\'t talk to us', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Our bodies are very clever! Feeling tired or grumpy can mean: time for something different. A run, a snack, a cuddle.',
                wrongFb: 'Our bodies send us little signals. Feeling tired or grumpy can just mean: time for something different. A run, a snack, a cuddle.',
              },
              {
                id: 'dl-s6-q3',
                type: 'mc',
                text: 'Which of these is true about screens?',
                options: [
                  { label: 'Screens are the best thing in the world', value: 'a' },
                  { label: 'Screens are bad for you', value: 'b' },
                  { label: 'Screens are one of many wonderful things in your life', value: 'c' },
                  { label: 'Only grown-ups should use screens', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Screens are genuinely wonderful — and so is running, drawing, reading and time with the people you love.',
                wrongFb: 'Screens are genuinely wonderful — but so is everything else you love. You\'ve got lots of wonderful things. Screens are one of them.',
              },
            ],
          },
          {
            title: 'Mission — The Wonderful Things Jar',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'The Wonderful Things Jar',
              desc: 'Find a jar, a box, or a bowl. Together with your grown-up, write or draw some of your wonderful things on small pieces of paper and put them inside. Screens can go in too — absolutely. But fill it with everything. On a day when you\'re not sure what to do, reach in and pick something out.',
              note: '🌱 You\'ve just finished Quest 1. You\'ve been a Computer Detective, a Junior Reporter, a Message Maker, a Big Thinker, found your Inside Voice — and now you\'ve got a jar full of wonderful things. That\'s quite a quest.',
            },
          },
        ],
      },
      // Q2 S1
      {
        title: 'Apps and What They Do',
        icon: '📲',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Apps and What They Do',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'App is a short word for application. An app is like a little door on your device. You tap it and it opens up into its own little world. A game. A story. A drawing tool. A way of talking to someone. Every app was made by a person — or a team of people — who had an idea. They thought: what if we made something that could do THIS? Apps come in all kinds: some help you create, some help you learn, some help you play, some help you connect with people, and some help you find things out.',
              facts: [
                { icon: '🎨', text: 'Some apps help you create things — drawing, making music, building stories. You\'re the artist and the app is your tool.' },
                { icon: '🎮', text: 'Game apps are carefully designed so every sound, every flash, every satisfying moment was planned on purpose by a game designer.' },
                { icon: '💡', text: 'The best apps in the world started as a sketch on a piece of paper. Someone had an idea and drew it before they built it.' },
              ],
            },
          },
          {
            title: 'Activity — App Explorer',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s explore the world of apps — what they do, how they work and what one YOU might make!',
              doTogether: 'Part 1: What Kind of App Is It? — sort apps into five categories: Create, Learn, Play, Connect, Find Out. Part 2: Explore a pretend app together and discover what happens when you tap different things. Part 3: Design Your Own App — draw your app on paper. What does the icon look like? What happens when you open it?',
              talkAbout: 'Ask your child: what\'s your favourite app? Do they know what it does or how it might work?',
            },
          },
          {
            title: 'Quiz — Apps',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s7-q1',
                type: 'mc',
                text: 'What is an app?',
                options: [
                  { label: 'A type of computer', value: 'a' },
                  { label: 'A little door on your device that opens into its own world', value: 'b' },
                  { label: 'Something only grown-ups use', value: 'c' },
                  { label: 'A kind of game', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'An app is like a little door — you tap it and it opens up into its own world. A game, a story, a drawing tool, or lots of other things.',
                wrongFb: 'An app is like a little door on your device. You tap it and it opens up into its own world.',
              },
              {
                id: 'dl-s7-q2',
                type: 'mc',
                text: 'Who makes apps?',
                options: [
                  { label: 'They appear by themselves', value: 'a' },
                  { label: 'Only very famous people', value: 'b' },
                  { label: 'People who have an idea and work hard to build it', value: 'c' },
                  { label: 'Computers make themselves', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Every app was made by a person or a team of people who had an idea and built it. Every button, every colour, every sound was chosen by someone.',
                wrongFb: 'Every single app was made by a person who had an idea and built it. Every button, every colour, every sound was chosen by someone just like you.',
              },
              {
                id: 'dl-s7-q3',
                type: 'mc',
                text: 'Which of these is a type of app?',
                options: [
                  { label: 'A sandwich', value: 'a' },
                  { label: 'A pencil', value: 'b' },
                  { label: 'A drawing app that helps you create pictures', value: 'c' },
                  { label: 'A pair of wellies', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'A drawing app is a great example — it lives on your device and opens up into a creative world.',
                wrongFb: 'A drawing app is a great example — it lives on your device and opens up into a creative world. Sandwiches and wellies are wonderful, but not apps!',
              },
            ],
          },
          {
            title: 'Mission — App Detective',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'App Detective',
              desc: 'With your grown-up, open up the apps on a phone or tablet and explore together. Find one app that helps you create something, one that helps you connect with someone, and one that helps you find something out. Try to guess what each one does before you tap it.',
              note: '🔍 You\'re officially an App Detective. And maybe, one day, an App Maker too.',
            },
          },
        ],
      },
      // Q2 S2
      {
        title: 'Photos and Videos',
        icon: '📷',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Photos and Videos',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'About 200 years ago, someone invented the camera. For the first time ever, you could capture a real moment — freeze it — and look at it again later. The first cameras were enormous and took a very long time to take one photo. Now you can take a photo in less than a second on a device in your pocket. Photos and videos let you hold onto moments and share them with people far away. But a photo is a memory — it\'s not the same as the memory itself. The best moments happen when you\'re really, truly there — looking, feeling, laughing.',
              facts: [
                { icon: '📸', text: 'The first photograph ever taken was in 1826. The person had to stand completely still for eight hours for it to work!' },
                { icon: '🎬', text: 'A video is just lots of photographs shown very quickly one after another — so fast they look like real life moving.' },
                { icon: '💛', text: 'It\'s always kind to ask someone before you take their photo. Their face belongs to them.' },
              ],
            },
          },
          {
            title: 'Activity — Photos and Memories',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s explore how cameras have changed, think about what makes a great photo, and look at a favourite family memory!',
              doTogether: 'Part 1: Then and Now Cameras — look at cameras from the past all the way to today\'s smartphone. Part 2: What Makes a Good Photo? — look at pairs of photos and talk about what makes each one special. Part 3: Our Favourite Photo — find a favourite family photo together and talk about the story behind it.',
              talkAbout: 'Share a favourite family photo with your child and tell them the story behind it.',
            },
          },
          {
            title: 'Quiz — Photos and Videos',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s8-q1',
                type: 'mc',
                text: 'What does a photo do?',
                options: [
                  { label: 'It makes a memory disappear', value: 'a' },
                  { label: 'It captures a moment so you can remember and share it', value: 'b' },
                  { label: 'It only works on big cameras', value: 'c' },
                  { label: 'It shows the future', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A photo captures a moment — freezes it — so you can look back at it and share it. A wonderful way of holding onto memories.',
                wrongFb: 'A photo captures a moment — freezes it — so you can look back at it and share it with people who weren\'t there.',
              },
              {
                id: 'dl-s8-q2',
                type: 'mc',
                text: 'Before taking a photo of someone, what is the kind thing to do?',
                options: [
                  { label: 'Take it as fast as possible before they move', value: 'a' },
                  { label: 'Ask them first', value: 'b' },
                  { label: 'Only take photos of things, never people', value: 'c' },
                  { label: 'Ask a grown-up to do it instead', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Someone\'s face belongs to them — so it\'s always kind to ask before you take their photo.',
                wrongFb: 'Someone\'s face belongs to them — so it\'s always kind to ask before you take their photo. Most people are happy to say yes!',
              },
              {
                id: 'dl-s8-q3',
                type: 'mc',
                text: 'What is something a photo cannot capture?',
                options: [
                  { label: 'What someone looks like', value: 'a' },
                  { label: 'The colour of something', value: 'b' },
                  { label: 'How something smelled or felt', value: 'c' },
                  { label: 'Where something happened', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Photos can\'t hold a smell, a feeling, a sound, or the warmth of a really good day. That part lives in your memory.',
                wrongFb: 'Photos are brilliant at what things look like — but they can\'t hold a smell, a feeling, or the warmth of a really good day. That lives in your memory.',
              },
            ],
          },
          {
            title: 'Mission — Take Three Photos',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Take Three Photos',
              desc: 'With your grown-up\'s help, take three photos today. One of something beautiful. One of something that makes you happy. One of someone you love — ask them first! Look at them together afterwards. Which one is your favourite? Why?',
              note: '📷 Every photo you take is a little piece of a story. You\'re the storyteller.',
            },
          },
        ],
      },
      // Q2 S3
      {
        title: 'Games — How They Work',
        icon: '🎮',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Games and How They Work',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Has a game ever made you feel really good when you got something right? That brilliant feeling isn\'t an accident — someone put it there on purpose. Games are one of the most carefully made things on the internet. The people who make them — game designers — spend a huge amount of time thinking about how a game will feel to play. When you level up and hear that exciting sound? Designed. When you just miss out and want to try one more time? Designed. Every element is planned. And games have been around forever — long before screens, people played board games, card games and running around games. Screen games are just the newest kind.',
              facts: [
                { icon: '🎯', text: 'Game designers build worlds for you to walk around in. Instead of bricks, they use pictures, sounds, rules and ideas.' },
                { icon: '🧠', text: 'Some games teach you things. Some tell stories. Some let you create whole new worlds. Some are just brilliantly fun — and that\'s fine too.' },
                { icon: '🏆', text: 'The oldest board game ever found is over 5,000 years old. People have always loved to play.' },
              ],
            },
          },
          {
            title: 'Activity — Game World',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think about how games work, how they make us feel, and try inventing one of our own!',
              doTogether: 'Part 1: Design a Level — place a starting point, some obstacles, some rewards and a finishing point. Part 2: How Does This Game Make You Feel? — talk about feelings for each gaming scenario. Part 3: Invent a Game — with your grown-up, invent a simple game using only things you can find at home.',
              talkAbout: 'Tell your child about a game you loved when you were young — screen or otherwise.',
            },
          },
          {
            title: 'Quiz — Games',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s9-q1',
                type: 'mc',
                text: 'Who designs the sounds and feelings in a game?',
                options: [
                  { label: 'Nobody — they happen by accident', value: 'a' },
                  { label: 'Game designers who plan every detail on purpose', value: 'b' },
                  { label: 'The device itself', value: 'c' },
                  { label: 'Only very old people', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Every sound, every flash, every satisfying click was put there by a game designer on purpose. They plan every detail.',
                wrongFb: 'Every sound, every flash, every satisfying moment was put there by a game designer on purpose. They plan every detail.',
              },
              {
                id: 'dl-s9-q2',
                type: 'mc',
                text: 'What is a good thing to do if a game is making you feel really frustrated?',
                options: [
                  { label: 'Throw the device', value: 'a' },
                  { label: 'Keep playing until the feeling goes away', value: 'b' },
                  { label: 'Put it down, have a break, and come back later', value: 'c' },
                  { label: 'Never play that game again', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Everyone gets frustrated at games sometimes — it\'s completely normal! A break always helps.',
                wrongFb: 'Everyone gets frustrated at games — it\'s normal! Put it down, have a break and come back later. You\'ll almost always feel better.',
              },
              {
                id: 'dl-s9-q3',
                type: 'mc',
                text: 'Were there games before screen games?',
                options: [
                  { label: 'No — games were invented with computers', value: 'a' },
                  { label: 'Yes — people have always loved to play games', value: 'b' },
                  { label: 'Only grown-ups played games before screens', value: 'c' },
                  { label: 'Games were only invented 10 years ago', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'People have been playing games forever! Board games, card games, running around games — screen games are just the newest kind.',
                wrongFb: 'People have been playing games forever! Board games, card games, running games — screen games are just the newest kind.',
              },
            ],
          },
          {
            title: 'Mission — Teach Your Grown-Up a Game',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'You\'re the Teacher',
              desc: 'Pick any game you know — a card game, a made-up game, a clapping game, anything — and teach it to your grown-up from scratch. Teaching something is one of the best ways to understand it better. And grown-ups are surprisingly bad at learning new games. Good luck.',
              note: '🎮 You were the teacher today. That\'s a big deal.',
            },
          },
        ],
      },
      // Q2 S4
      {
        title: 'Asking a Grown-Up',
        icon: '🙋',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Asking a Grown-Up',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Asking is one of the most powerful things you can do. It\'s how you find things out. It\'s how you stay safe. It\'s how you learn. And on the internet — just like anywhere else — asking a grown-up is always the right move when you\'re not sure about something. Here are three great times to ask: Before — before you download something or go somewhere on the internet you haven\'t been. During — if something unexpected appears or something feels wrong. After — if something happened that you want to talk about. Before. During. After.',
              facts: [
                { icon: '💬', text: 'Asking doesn\'t mean you can\'t do things. It just means you\'ve got someone on your team. And having someone on your team is always better.' },
                { icon: '🤝', text: 'Even grown-ups come across things online they weren\'t expecting. Even grown-ups ask for help sometimes.' },
                { icon: '⭐', text: 'Asking brilliant questions is one of the most important skills there is. The people who ask the best questions learn the most.' },
              ],
            },
          },
          {
            title: 'Activity — Before, During or After?',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s practise knowing when to ask and how to ask in a way that feels easy!',
              doTogether: 'Part 1: Before, During or After? — sort scenarios into the right moment. Part 2: Practise Asking — for each situation, choose what you could say to your grown-up. Part 3: Our Asking Plan — decide together when you\'ll use devices and what\'s the easiest way to ask if unsure.',
              talkAbout: 'Tell your child out loud: asking is never annoying. You want them to ask. Every single time.',
            },
          },
          {
            title: 'Quiz — Asking',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s10-q1',
                type: 'mc',
                text: 'When is a good time to ask a grown-up about something online?',
                options: [
                  { label: 'Only when something goes wrong', value: 'a' },
                  { label: 'Never — you should figure it out yourself', value: 'b' },
                  { label: 'Before, during, or after — any time you\'re not sure', value: 'c' },
                  { label: 'Only at bedtime', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Any time is a good time to ask! Before something new, during if something unexpected happens, or after if something\'s on your mind.',
                wrongFb: 'Any time is a good time to ask — before, during or after. There\'s no wrong moment.',
              },
              {
                id: 'dl-s10-q2',
                type: 'mc',
                text: 'Does asking a grown-up mean you can\'t do things yourself?',
                options: [
                  { label: 'Yes — asking means you\'re not capable', value: 'a' },
                  { label: 'No — it just means you\'ve got someone on your team', value: 'b' },
                  { label: 'Yes — only grown-ups should use the internet', value: 'c' },
                  { label: 'Asking is only for babies', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Asking doesn\'t mean you can\'t do things — it means you\'re clever enough to know when to get help.',
                wrongFb: 'Asking doesn\'t mean you can\'t do things — it means you\'re clever enough to know when to get help. That\'s what teams are for.',
              },
              {
                id: 'dl-s10-q3',
                type: 'mc',
                text: 'What are the three good times to ask a grown-up?',
                options: [
                  { label: 'Morning, afternoon, evening', value: 'a' },
                  { label: 'Before, during and after', value: 'b' },
                  { label: 'Only when you\'re scared', value: 'c' },
                  { label: 'When a grown-up asks you first', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Before, during and after — those three cover everything.',
                wrongFb: 'Before, during and after — any time you\'re not sure is a good time to ask.',
              },
            ],
          },
          {
            title: 'Mission — Three Questions',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Ask Three Questions',
              desc: 'Ask your grown-up three questions about the internet or devices — anything you\'ve wondered about, anything you don\'t understand, anything you\'re curious about. They don\'t have to know all the answers. In fact it\'s even better if they don\'t — you can find out together.',
              note: '🙋 Asking brilliant questions is one of the most important skills there is. You\'ve got it.',
            },
          },
        ],
      },
      // Q2 S5
      {
        title: 'Kind and Unkind Online',
        icon: '💛',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Kind and Unkind Online',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You already know how to be kind. You know that kind means sharing, listening, being gentle, saying nice things, helping someone who\'s upset. And you know that unkind means the opposite. Here\'s the thing: being online doesn\'t change any of it. When you send a message to someone, they read it with real feelings. When you play a game with someone online, they\'re a real person sitting somewhere. The screen in the middle doesn\'t change the feelings on the other side. So everything you already know about being kind — it all works online too. Exactly the same.',
              facts: [
                { icon: '💌', text: 'Kindness travels just as fast as any message. A kind word arrives in seconds and can make someone\'s whole day better.' },
                { icon: '🌊', text: 'When someone is kind to you, you often feel like being kind to someone else. Kindness spreads — like dropping a stone in a pond.' },
                { icon: '💛', text: 'If someone says something unkind to you online, you tell a grown-up. Same as always. You don\'t have to deal with it on your own.' },
              ],
            },
          },
          {
            title: 'Activity — Kindness Online',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think about kindness online and practise being kind in the ways we already know!',
              doTogether: 'Part 1: Kind or Unkind? — sort gentle scenarios into kind or unkind. Part 2: Make It Kinder — for each pair of messages, choose the kinder version. Part 3: A Kind Message — think of someone who might appreciate a kind message today and send them something kind.',
              talkAbout: 'Give your child an example of something kind you\'ve seen or sent online recently.',
            },
          },
          {
            title: 'Quiz — Kindness Online',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s11-q1',
                type: 'mc',
                text: 'Does being online change the rules about kindness?',
                options: [
                  { label: 'Yes — online is totally different', value: 'a' },
                  { label: 'No — kindness works exactly the same online', value: 'b' },
                  { label: 'Yes — you can say anything online', value: 'c' },
                  { label: 'Only grown-ups need to be kind online', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Real feelings are always on the other side of the screen. Everything you already know about being kind works exactly the same online.',
                wrongFb: 'Real feelings are always on the other side of the screen. Everything you already know about being kind works exactly the same online — nothing changes.',
              },
              {
                id: 'dl-s11-q2',
                type: 'mc',
                text: 'If someone sends you an unkind message, what should you do?',
                options: [
                  { label: 'Send an unkind message back', value: 'a' },
                  { label: 'Tell a grown-up', value: 'b' },
                  { label: 'Try to forget about it and say nothing', value: 'c' },
                  { label: 'Stop using the internet forever', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'If something unkind happens online, you tell a grown-up — just like you would with anything else that didn\'t feel right.',
                wrongFb: 'If something unkind happens online, tell a grown-up — just like you would with anything else that didn\'t feel right.',
              },
              {
                id: 'dl-s11-q3',
                type: 'mc',
                text: 'Which of these is a kind thing to do online?',
                options: [
                  { label: 'Sharing something about someone without asking', value: 'a' },
                  { label: 'Ignoring someone\'s message on purpose', value: 'b' },
                  { label: 'Sending a drawing to cheer a friend up', value: 'c' },
                  { label: 'Saying something mean in a message', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Sending something to cheer someone up is brilliant online kindness. It travels through the screen and lands with real warmth.',
                wrongFb: 'Sending something to cheer someone up — that\'s brilliant online kindness. It travels through the screen and lands with real warmth.',
              },
            ],
          },
          {
            title: 'Mission — The Kindness Ripple',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Start a Kindness Ripple',
              desc: 'When someone is kind to you, you often feel like being kind to someone else — and then they do the same. It ripples outward. Today\'s mission: start a kindness ripple. Do one kind thing online — a message, a drawing, a voice note — and see if it comes back to you.',
              note: '💛 You already knew how to be kind. Now you know how to be kind everywhere.',
            },
          },
        ],
      },
      // Q2 S6
      {
        title: 'Switching Off',
        icon: '🌙',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Switching Off',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Here\'s a secret that brilliant people know: rest is not the opposite of doing things. Rest IS doing something. When you sleep, your brain sorts through everything it learned that day and files it away. When you run around outside, your body gets strong and your mind gets clear. Think about your device — when the battery runs out, it stops working until you charge it. You\'re a bit like that too. Not with a wire — but with sleep, food, fresh air, quiet, play and the people you love. Screens will always be there when you come back. The world outside is worth noticing while you\'re in it.',
              facts: [
                { icon: '🧠', text: 'When you sleep, your brain actually replays everything you learned that day and stores it properly. Sleep makes you smarter.' },
                { icon: '🌿', text: 'Fresh air and running around help your brain work better. The world outside is worth noticing while you\'re in it.' },
                { icon: '🔋', text: 'Screens will always be there when you come back. The people and moments right in front of you are worth being present for.' },
              ],
            },
          },
          {
            title: 'Activity — Recharge',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think about how we recharge — and build your perfect wind-down for the end of the day!',
              doTogether: 'Part 1: Recharge or Run Down? — sort things into what fills you up and what empties you out. Part 2: My Recharge Routine — build your perfect wind-down for the end of the day. Part 3: Screen-Free Challenge — for the rest of today after this session, no screens. Do one thing from your Wonderful Things Jar together.',
              talkAbout: 'Tell your child what you do to recharge — what\'s your favourite way to switch off?',
            },
          },
          {
            title: 'Quiz — Rest and Recharge',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'dl-s12-q1',
                type: 'mc',
                text: 'Why is rest important?',
                options: [
                  { label: 'It isn\'t — you should always be doing something', value: 'a' },
                  { label: 'It\'s how your brain and body recharge and get ready for more', value: 'b' },
                  { label: 'Only grown-ups need rest', value: 'c' },
                  { label: 'Rest is only important at night', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Rest is one of the most important things you can do. When you sleep, your brain sorts everything out. When you play outside, your body gets strong.',
                wrongFb: 'Rest is one of the most important things you can do. When you sleep, your brain sorts through everything you learned. Rest IS doing something.',
              },
              {
                id: 'dl-s12-q2',
                type: 'mc',
                text: 'What happens to a device when its battery runs out?',
                options: [
                  { label: 'It keeps going forever', value: 'a' },
                  { label: 'It stops working until it\'s recharged', value: 'b' },
                  { label: 'It gets faster', value: 'c' },
                  { label: 'It turns into a different device', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'When a device runs out of battery, it needs charging. You\'re similar — sleep, food, fresh air and play are how YOU recharge.',
                wrongFb: 'When a device runs out of battery, it needs charging before it can work again. You\'re similar — sleep, food, fresh air and play are how YOU recharge.',
              },
              {
                id: 'dl-s12-q3',
                type: 'mc',
                text: 'Which of these is a good way to recharge?',
                options: [
                  { label: 'Staying up all night', value: 'a' },
                  { label: 'Sitting completely still for hours', value: 'b' },
                  { label: 'A good sleep, some fresh air, and time with people you love', value: 'c' },
                  { label: 'Skipping meals', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'A good sleep, fresh air, food, play and the people you love — those are the things that keep you at your best.',
                wrongFb: 'A good sleep, fresh air, food, play and the people you love — those are your recharge superpowers.',
              },
            ],
          },
          {
            title: 'Mission — The Switch Off Moment',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'The Switch Off Moment',
              desc: 'Close this app. Put the device down. Go and do something you love with your grown-up. That\'s it. That\'s the whole mission.',
              note: '🌟 You\'ve done it. You\'ve completed Quest 2. The internet is a tool made by people, for people. And the most important person in your world isn\'t on a screen. They\'re probably right next to you. Go and enjoy them.',
            },
          },
        ],
      },
    ],
    climber: [
      // Q1 S1
      {
        title: 'How Does the Internet Connect Us?',
        icon: '🔌',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — How Does the Internet Connect Us?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You already know what the internet is — that enormous invisible road that carries information all over the world. But have you ever wondered how it actually does that? When you send a message, it doesn\'t float through the air like magic. It travels along real things. Wires under the ground. Cables under the ocean. Signals bouncing off satellites high above the Earth. Right now, underneath the street outside your home, there are probably cables carrying internet information. And under the ocean — right at the bottom of the sea — there are enormous cables connecting countries together. Sometimes the signal travels through the air too — that\'s what wifi is. Your router takes the signal from a wire and turns it into something that floats through the walls to your device.',
              facts: [
                { icon: '🌊', text: 'There are over 400 undersea cables on the ocean floor carrying almost all international internet traffic. Some are thinner than a garden hose.' },
                { icon: '📡', text: 'Wifi is radio waves — the same type of wave used by radios and microwaves, just at a different frequency.' },
                { icon: '⚡', text: 'Data travels along fibre optic cables as pulses of light, moving at nearly the speed of light itself.' },
              ],
            },
          },
          {
            title: 'Activity — Follow the Signal',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s trace the journey of a message from your device all the way to someone else\'s — and discover all the real, physical things it travels through.',
              doTogether: 'Part 1: Trace the Journey — tap through each step of how a message travels from your tablet to a friend\'s phone. Part 2: Real or Not Real? — sort things into physical parts of the internet and invisible parts. Part 3: Map Your Internet — draw a simple map showing the journey the internet takes to reach your home.',
              talkAbout: 'Can you find where the internet enters your home? Have a look together for the router or the cable coming through the wall.',
            },
          },
          {
            title: 'Quiz — Internet Connections',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s1-q1',
                type: 'mc',
                text: 'How does internet information travel between countries?',
                options: [
                  { label: 'Through the air like radio waves', value: 'a' },
                  { label: 'Along cables under the ocean', value: 'b' },
                  { label: 'By being carried on aeroplanes', value: 'c' },
                  { label: 'It teleports instantly', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Enormous cables on the ocean floor carry most of the information between countries. Real cables, at the bottom of the sea, right now.',
                wrongFb: 'Some internet signals travel through the air — but between countries, enormous cables on the ocean floor carry most of the information.',
              },
              {
                id: 'cl-s1-q2',
                type: 'mc',
                text: 'What does a router do?',
                options: [
                  { label: 'It stores all the websites in the world', value: 'a' },
                  { label: 'It takes a wired signal and turns it into wifi', value: 'b' },
                  { label: 'It creates the internet', value: 'c' },
                  { label: 'It sends satellites into space', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A router takes the internet signal that arrives through a wire and turns it into wifi — the signal that floats through your walls to reach your devices.',
                wrongFb: 'A router takes the internet signal that arrives through a wire and turns it into wifi — the signal that reaches your devices wirelessly.',
              },
              {
                id: 'cl-s1-q3',
                type: 'mc',
                text: 'Who built all the cables and connections that make up the internet?',
                options: [
                  { label: 'Nobody — it built itself', value: 'a' },
                  { label: 'One very clever company', value: 'b' },
                  { label: 'Engineers and teams of people working over many decades', value: 'c' },
                  { label: 'The government of one country', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'The internet was built by thousands of engineers across many countries over many decades. It\'s one of the biggest building projects in human history.',
                wrongFb: 'The internet was built by thousands of engineers and teams of people across many countries over many decades — and it\'s still being added to today.',
              },
            ],
          },
          {
            title: 'Mission — Internet Detective',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Internet Detective',
              desc: 'Investigate the internet in your own home. Find your router — what do the lights mean? Find where the wire brings internet into your home. Count how many devices are connected to your wifi right now. Ask a grown-up: do they know who laid the cables under your street?',
              note: '🔌 The internet isn\'t magic — it\'s engineering. And now you know a little bit of how it works.',
            },
          },
        ],
      },
      // Q1 S2
      {
        title: 'What is a Website?',
        icon: '🌐',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — What is a Website?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'A website is a collection of pages that live on the internet. When you type an address into a browser, your device sends a request to a computer called a server. The server sends the website back to you — all in less than a second. A server is just a computer that\'s switched on all the time, day and night, so that whenever anyone asks for a website it\'s ready to send it. Some servers are enormous rooms full of computers, humming away quietly somewhere in the world. Every website you\'ve ever visited was made by someone — a person or team who decided what it would look like, what it would say, and how it would work. They wrote instructions in a special language computers understand, called code.',
              facts: [
                { icon: '🖥️', text: 'The first ever website was built by Tim Berners-Lee in 1991. It\'s still online today — you can visit it.' },
                { icon: '🏢', text: 'Large websites like Google or Amazon run on thousands of servers in huge buildings called data centres, using as much electricity as a small town.' },
                { icon: '💡', text: 'Anyone can learn to build a website. The people who built the first websites weren\'t special — they were just curious.' },
              ],
            },
          },
          {
            title: 'Activity — Website Explorer',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s look at how websites actually reach you, what they\'re made of, and design one of your own!',
              doTogether: 'Part 1: How Does a Website Reach You? — tap through the steps of what happens when you visit a website. Part 2: What Makes a Website? — tap on the different parts of a website to discover what each one is. Part 3: Design Your Own Website — sketch out a website on paper. What\'s it called? What\'s on the front page? Who would visit it?',
              talkAbout: 'Pick a website you visit regularly and look at the very bottom of the page together. Can you find who made it?',
            },
          },
          {
            title: 'Quiz — Websites',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s2-q1',
                type: 'mc',
                text: 'What is a server?',
                options: [
                  { label: 'A person who brings food at a restaurant', value: 'a' },
                  { label: 'A computer that\'s always on, ready to send websites to people who ask', value: 'b' },
                  { label: 'The address bar in a browser', value: 'c' },
                  { label: 'The cable under the ocean', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A server is a special computer that stays switched on all the time. When you ask for a website, the server sends it to you instantly.',
                wrongFb: 'A server is a special computer that stays on all the time. When you ask for a website, the server sends it back to you.',
              },
              {
                id: 'cl-s2-q2',
                type: 'mc',
                text: 'What language do people use to build websites?',
                options: [
                  { label: 'English or French depending on where they live', value: 'a' },
                  { label: 'A special computer language called code', value: 'b' },
                  { label: 'Websites build themselves automatically', value: 'c' },
                  { label: 'A secret language only experts know', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Code is a special language that computers understand. It tells the computer exactly what a website should look like and how it should work.',
                wrongFb: 'People build websites using code — a special language that computers understand, telling them what the website should look like and how it works.',
              },
              {
                id: 'cl-s2-q3',
                type: 'mc',
                text: 'Who makes websites?',
                options: [
                  { label: 'Only very large companies', value: 'a' },
                  { label: 'Only people who went to university', value: 'b' },
                  { label: 'Anyone who learns how — from huge teams to one person at a kitchen table', value: 'c' },
                  { label: 'Computers make websites automatically', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Anyone can learn to make a website. Some are made by huge teams, some by one person. The first websites were made by curious people who just wanted to try.',
                wrongFb: 'Anyone can learn to make a website — from huge companies to one curious person at a kitchen table. The first websites were made by people just like that.',
              },
            ],
          },
          {
            title: 'Mission — Website Explorer',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Website Explorer',
              desc: 'Pick any website you visit regularly and investigate it. Who made it? When was it last updated? How many different pages does it have? What\'s the most interesting thing you\'ve never noticed before?',
              note: '🌐 You just looked at a website like a detective instead of just a visitor. That\'s a different way of seeing the world.',
            },
          },
        ],
      },
      // Q1 S3
      {
        title: 'How Do Searches Work?',
        icon: '🔍',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — How Do Searches Work?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'A search engine constantly explores the internet using tiny programmes called crawlers that travel from website to website, reading what\'s there and making notes. All those notes get stored in an enormous index — like a giant library catalogue for the whole internet. When you type a search, the engine looks through its index and tries to find the most useful results. But here\'s something important: some results are adverts — companies that have paid to appear at the top. They\'re usually labelled, but it\'s worth knowing they\'re there. And how you search matters. Specific words get better results than vague ones. A search engine doesn\'t know what you meant — it just matches your words to what\'s in its index.',
              facts: [
                { icon: '🕷️', text: 'Google\'s crawlers visit billions of web pages every day, constantly updating their index of what\'s on the internet.' },
                { icon: '🎯', text: 'The most common search mistake is using too few words. "hedgehog diet winter" gets much better results than just "animals".' },
                { icon: '💰', text: 'Businesses pay to appear at the top of search results. In 2023, Google made over £200 billion from advertising.' },
              ],
            },
          },
          {
            title: 'Activity — Search Safari',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s experiment with how searches work — and discover how to get much better results!',
              doTogether: 'Part 1: Good Search, Better Search — tap to choose the more specific search for each scenario and see why it gets better results. Part 2: Spot the Advert — look at a mock search results page and identify which results are adverts. Part 3: Search Safari — pick something you\'re genuinely curious about and search for it together, then analyse what you find.',
              talkAbout: 'Try searching the same thing in vague words, then specific words. Compare the results together.',
            },
          },
          {
            title: 'Quiz — Search Engines',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s3-q1',
                type: 'mc',
                text: 'What does a search engine crawler do?',
                options: [
                  { label: 'It cleans up old websites', value: 'a' },
                  { label: 'It travels around the internet reading websites and making notes', value: 'b' },
                  { label: 'It creates new websites', value: 'c' },
                  { label: 'It blocks dangerous websites', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Crawlers travel from website to website, reading what\'s there and storing the information so the search engine can find it when you search.',
                wrongFb: 'Crawlers are tiny programmes that travel from website to website, reading what\'s there and making notes so the search engine can find results.',
              },
              {
                id: 'cl-s3-q2',
                type: 'mc',
                text: 'Why do more specific search words get better results?',
                options: [
                  { label: 'Because search engines prefer long words', value: 'a' },
                  { label: 'Because specific words help the search engine match what you actually need', value: 'b' },
                  { label: 'Because short words are blocked', value: 'c' },
                  { label: 'Because vague searches cost more', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A search engine matches your words to what\'s in its index. The more specific your words, the easier it is to find exactly what you need.',
                wrongFb: 'A search engine matches your words to what\'s in its index. Specific words give it more to work with and lead to much more useful results.',
              },
              {
                id: 'cl-s3-q3',
                type: 'mc',
                text: 'What is a sponsored result in a search?',
                options: [
                  { label: 'The most helpful result on the page', value: 'a' },
                  { label: 'A result that a company has paid to appear at the top', value: 'b' },
                  { label: 'A result from the government', value: 'c' },
                  { label: 'A result that has been checked for accuracy', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Sponsored results are adverts — companies pay to appear near the top of search results. They\'re usually labelled, but it\'s worth spotting them.',
                wrongFb: 'Sponsored results are paid adverts. Companies pay for their website to appear near the top. They\'re usually labelled — worth spotting the difference.',
              },
            ],
          },
          {
            title: 'Mission — The Search Experiment',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'The Search Experiment',
              desc: 'Pick one topic and search for it three different ways: one very short vague search, one medium search as a question, and one very specific detailed search. Compare the results. Which search got the most useful answers? Write down what you found.',
              note: '🔍 Knowing how to search well is one of the most useful skills you can have.',
            },
          },
        ],
      },
      // Q1 S4
      {
        title: 'What is Personal Information?',
        icon: '🔒',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — What is Personal Information?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Personal information is information that belongs to you, about you — your name, where you live, your birthday, what school you go to, what you look like, who your friends are. In real life, you probably already know to be careful about who you share this with. Online, the same rules apply — but it can feel different because you can\'t see who you\'re sharing with. When you use an app or website, it often knows things about you. Sometimes you told it directly. Sometimes it found things out from how you use it. The most important personal information to be careful with: your full name, your address, your school, your phone number, and passwords. If an app asks for personal information and you\'re not sure — ask a grown-up first.',
              facts: [
                { icon: '🧩', text: 'Individually, pieces of information seem harmless. But your first name + school + area + age together gives someone a lot to work with.' },
                { icon: '📍', text: 'Location data is particularly sensitive — it can reveal where you live, where you go to school, and your daily routine.' },
                { icon: '🔑', text: 'Passwords are the most sensitive personal information of all — they\'re the keys to your online accounts.' },
              ],
            },
          },
          {
            title: 'Activity — Personal Information Sorted',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think about what personal information is, what to keep private, and what to do when someone asks for it.',
              doTogether: 'Part 1: Share or Keep Private? — sort different types of information into fine to share and keep private. Part 2: Who\'s Asking? — for each scenario, decide whether sharing the information seems reasonable. Part 3: Our Privacy Checklist — make a simple list of what personal information you share online and whether you\'re happy with that.',
              talkAbout: 'Talk through together: what personal information do you share online regularly? Is there anything you\'d want to be more careful with?',
            },
          },
          {
            title: 'Quiz — Personal Information',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s4-q1',
                type: 'mc',
                text: 'Which of these should you keep private online?',
                options: [
                  { label: 'Your favourite colour', value: 'a' },
                  { label: 'Your home address', value: 'b' },
                  { label: 'Your username in a game', value: 'c' },
                  { label: 'Your favourite animal', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Your home address is personal information that should stay private. Favourite colours and animals are fine to share — they don\'t tell anyone where you live.',
                wrongFb: 'Your home address should stay private. Favourite colours, animals and game usernames are generally fine — but your address, school and full name need more care.',
              },
              {
                id: 'cl-s4-q2',
                type: 'mc',
                text: 'Why is it worth being careful about personal information online?',
                options: [
                  { label: 'Because the internet is always dangerous', value: 'a' },
                  { label: 'Because you can\'t always see who you\'re sharing information with', value: 'b' },
                  { label: 'Because personal information costs money', value: 'c' },
                  { label: 'Because all websites are run by strangers', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Online, you can\'t always see who you\'re sharing with. The same caution you\'d apply with a stranger applies online.',
                wrongFb: 'Online, you can\'t always see who you\'re sharing with. In real life you\'d be careful with a stranger — the same thinking applies online.',
              },
              {
                id: 'cl-s4-q3',
                type: 'mc',
                text: 'What should you do if a website asks for personal information and you\'re not sure?',
                options: [
                  { label: 'Share it and see what happens', value: 'a' },
                  { label: 'Ask a grown-up first', value: 'b' },
                  { label: 'Never use that website again', value: 'c' },
                  { label: 'Make up fake information', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'If you\'re not sure whether to share personal information — ask a grown-up first. That\'s always the right move.',
                wrongFb: 'If you\'re not sure whether to share personal information online, ask a grown-up first. That\'s always the right move.',
              },
            ],
          },
          {
            title: 'Mission — Information Audit',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Information Audit',
              desc: 'Look at one or two apps or games you use regularly and find out: what information did you give them when you signed up? Do they know your location? Is there anything you\'d want to change? You can do this with a grown-up if you like.',
              note: '🔒 Being in control of your information is a skill. You\'re building it right now.',
            },
          },
        ],
      },
      // Q1 S5
      {
        title: 'Adverts Online — What\'s Happening?',
        icon: '🎯',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Adverts Online',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Have you ever noticed that adverts online seem to know what you\'re interested in? You look at something once and suddenly it appears everywhere. That\'s because many apps and websites track what you look at, search for and tap on — then use that information to show you adverts for things they think you might want. The companies that make apps often make their money from adverts. That\'s why so many things online are free — you\'re not paying with money, but information about what you like is being used to target you. Adverts are designed by clever, skilled people to make you want things. Knowing that doesn\'t mean adverts are bad — it just means you can look at them with your eyes open.',
              facts: [
                { icon: '👁️', text: 'Online adverts can be targeted with extraordinary precision — shown to specific ages, locations, interests and even moods based on behaviour patterns.' },
                { icon: '🆓', text: 'Most free apps and websites make their money from advertising. The app is free — your attention is the product being sold to advertisers.' },
                { icon: '🧠', text: 'Advertisers use techniques like scarcity ("only 2 left!"), social proof ("10,000 people bought this") and celebrity endorsement to make adverts more persuasive.' },
              ],
            },
          },
          {
            title: 'Activity — Advert Detectives',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s become advert detectives — spotting them, understanding what they\'re doing, and making one ourselves!',
              doTogether: 'Part 1: Spot the Advert — identify adverts in different contexts online. Part 2: Advert Techniques — for each advert, identify which technique it\'s using to persuade you. Part 3: Make Your Own Advert — create an advert for something completely made up. Think about what feeling you want people to have.',
              talkAbout: 'Have you ever noticed an advert following you around online? Talk about it — does knowing why it happens change how it feels?',
            },
          },
          {
            title: 'Quiz — Online Adverts',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s5-q1',
                type: 'mc',
                text: 'Why do adverts online often seem to know what you\'re interested in?',
                options: [
                  { label: 'It\'s a coincidence', value: 'a' },
                  { label: 'Apps track what you look at and use it to show relevant adverts', value: 'b' },
                  { label: 'Adverts are shown randomly to everyone', value: 'c' },
                  { label: 'Someone is watching your screen', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Many apps track what you look at and search for, then use that information to show you adverts for things you might want.',
                wrongFb: 'Many apps and websites track what you look at and search for, then use that information to show you relevant adverts. It\'s not magic — it\'s data.',
              },
              {
                id: 'cl-s5-q2',
                type: 'mc',
                text: 'How do many free apps and websites make their money?',
                options: [
                  { label: 'They don\'t make any money', value: 'a' },
                  { label: 'They charge secretly', value: 'b' },
                  { label: 'They make money from adverts shown to their users', value: 'c' },
                  { label: 'The government pays for them', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Many free apps make money from advertising. You pay with your attention and information rather than with money.',
                wrongFb: 'Many free apps make their money from advertising. You\'re not paying with money — your attention and information is what\'s valuable to them.',
              },
              {
                id: 'cl-s5-q3',
                type: 'mc',
                text: 'What\'s a useful question to ask yourself when you see an advert?',
                options: [
                  { label: 'How much does it cost?', value: 'a' },
                  { label: 'Is this something I actually want, or is it just well designed to make me think I do?', value: 'b' },
                  { label: 'Who made the advert?', value: 'c' },
                  { label: 'Is this advert from my country?', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Adverts are designed to make you want things. Asking whether you actually want something — or whether it just looks appealing — is a really useful habit.',
                wrongFb: 'Adverts are designed by skilled people to make you want things. Asking whether you actually want it — or whether it just seems appealing — is a great habit.',
              },
            ],
          },
          {
            title: 'Mission — Advert Safari',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Advert Safari',
              desc: 'Go on an advert safari — online, on TV, or anywhere. Find three adverts and for each one ask: what is it trying to make you feel? What technique is it using? Does it make you want the thing — and why?',
              note: '🎯 You just looked at adverts like someone who understands them. That\'s a genuinely useful skill for the rest of your life.',
            },
          },
        ],
      },
      // Q1 S6
      {
        title: 'Staying Safe — A Bit More Detail',
        icon: '🛡️',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Staying Safe Online',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You already know the most important thing: if something feels wrong, tell a grown-up. That\'s still true. But now we can go a little deeper. Passwords keep your accounts safe — a good password is long, uses a mix of letters and numbers, and isn\'t obvious like your name or birthday. Not every link goes where it says it goes — if something unexpected arrives saying "click here", check with a grown-up first. If something online is offering something amazing for free, it\'s worth being sceptical. And people online aren\'t always who they say they are — if someone you\'ve only met online asks to meet in real life, or asks for personal information, tell a grown-up immediately.',
              facts: [
                { icon: '🔑', text: 'The most common passwords in the world are "123456" and "password" — both take less than a second to guess.' },
                { icon: '🎣', text: 'Phishing is when someone creates a fake link or message to trick you into giving personal information. The name comes from "fishing" — casting out bait.' },
                { icon: '🎁', text: '"You\'ve won a prize — click here!" is one of the oldest tricks online. Genuine prizes don\'t usually arrive unexpectedly in messages.' },
              ],
            },
          },
          {
            title: 'Activity — Safety Scenarios',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s test your safety knowledge with some real scenarios — and make a plan for keeping your accounts secure.',
              doTogether: 'Part 1: Strong or Weak Password? — rate each password and understand what makes a strong one. Part 2: What Would You Do? — choose the best response for each online safety scenario. Part 3: Our Updated Family Agreement — talk through and agree on your family\'s rules about passwords and unexpected links.',
              talkAbout: 'Talk through together: what\'s your rule about passwords? What do you do with unexpected links?',
            },
          },
          {
            title: 'Quiz — Staying Safe',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s6-q1',
                type: 'mc',
                text: 'What makes a strong password?',
                options: [
                  { label: 'Your name and birthday', value: 'a' },
                  { label: 'The word "password"', value: 'b' },
                  { label: 'A long mix of letters, numbers and symbols that isn\'t obvious', value: 'c' },
                  { label: 'Your pet\'s name', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'A strong password is long, random and mixes letters, numbers and symbols. Avoid anything obvious like your name, birthday or pet.',
                wrongFb: 'A strong password is long, random and mixes letters, numbers and symbols. Avoid anything obvious — those are the first things someone would guess.',
              },
              {
                id: 'cl-s6-q2',
                type: 'mc',
                text: 'If you receive an unexpected message with a link, what should you do?',
                options: [
                  { label: 'Click it to see what it is', value: 'a' },
                  { label: 'Ask a grown-up before clicking', value: 'b' },
                  { label: 'Delete your account', value: 'c' },
                  { label: 'Forward it to all your friends', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Unexpected links — especially ones that seem exciting or urgent — are worth checking with a grown-up before clicking.',
                wrongFb: 'Unexpected links are worth checking with a grown-up before clicking. Links can go somewhere different to where they say.',
              },
              {
                id: 'cl-s6-q3',
                type: 'mc',
                text: 'If someone you\'ve only met online asks to meet in real life, what should you do?',
                options: [
                  { label: 'Agree if they seem nice', value: 'a' },
                  { label: 'Ignore them', value: 'b' },
                  { label: 'Tell a grown-up immediately', value: 'c' },
                  { label: 'Ask them more questions', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'If someone you\'ve only met online asks to meet in real life, tell a grown-up immediately. People online aren\'t always who they say they are.',
                wrongFb: 'If someone you\'ve only met online asks to meet in real life, tell a grown-up immediately. A grown-up will know what to do.',
              },
            ],
          },
          {
            title: 'Mission — Password Health Check',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Password Health Check',
              desc: 'With a grown-up, think about the passwords used for apps and accounts you use. Without sharing them out loud — are any of them obvious or easy to guess? Are any the same across multiple accounts? Could any be stronger? Make a plan if needed.',
              note: '🛡️ Quest 1 complete. You know how the internet works, how websites are built, how searches work, how to protect your information, how adverts work, and how to stay safer online.',
            },
          },
        ],
      },
      // Q2 S1
      {
        title: 'Why Do We See What We See?',
        icon: '🫧',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Algorithms',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Have you ever noticed that two people searching for the same thing might see different results? That\'s because of algorithms. An algorithm is a set of rules that a computer follows to make a decision. The algorithm that decides what you see online is trying to show you things it thinks you\'ll like — based on what you\'ve looked at before. If you watch lots of videos about animals, the algorithm notices and suggests more animal videos. This can be useful — but it can also mean you end up in a bubble, seeing more and more of the same things. The algorithm\'s main rule is usually: show them whatever keeps them watching longest. That\'s not the same as showing you what\'s most interesting, true, or useful.',
              facts: [
                { icon: '🤖', text: 'YouTube\'s recommendation algorithm is responsible for over 70% of the time people spend on the platform — most of what you watch was suggested, not searched for.' },
                { icon: '🫧', text: 'A "filter bubble" is when you keep seeing similar content because that\'s what you\'ve engaged with — meaning you might miss lots of other interesting things.' },
                { icon: '📊', text: 'Algorithms are updated constantly — the rules that decide what you see today are slightly different from last week.' },
              ],
            },
          },
          {
            title: 'Activity — Algorithm Explorer',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s spot algorithms in action, think about filter bubbles, and deliberately step outside them!',
              doTogether: 'Part 1: Spot the Algorithm — identify where algorithms are working in different online contexts. Part 2: Same Search, Different Results? — discuss why two people might get different results for the same search. Part 3: Go Off Script — spend five minutes exploring something completely outside your usual online habits.',
              talkAbout: 'Look at a video or music app together. Can you spot the algorithm at work — things being suggested based on what you\'ve already watched or listened to?',
            },
          },
          {
            title: 'Quiz — Algorithms',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s7-q1',
                type: 'mc',
                text: 'What is an algorithm?',
                options: [
                  { label: 'A type of computer virus', value: 'a' },
                  { label: 'A set of rules a computer follows to make decisions', value: 'b' },
                  { label: 'The address of a website', value: 'c' },
                  { label: 'A kind of password', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'An algorithm is a set of rules that a computer follows to make a decision — like deciding which videos to suggest or which search results to show first.',
                wrongFb: 'An algorithm is a set of rules that a computer follows to make a decision — deciding what you see, what gets suggested, what appears first.',
              },
              {
                id: 'cl-s7-q2',
                type: 'mc',
                text: 'What is a filter bubble?',
                options: [
                  { label: 'Your internet connection being filtered', value: 'a' },
                  { label: 'Seeing more and more of the same kinds of things and less of everything else', value: 'b' },
                  { label: 'Your search results being blocked', value: 'c' },
                  { label: 'Using the internet too much', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A filter bubble happens when the algorithm keeps showing you similar things because that\'s what you\'ve engaged with — meaning you might miss a lot of other interesting content.',
                wrongFb: 'A filter bubble is when the algorithm keeps showing you similar things, gradually narrowing what you see and reinforcing what you already think.',
              },
              {
                id: 'cl-s7-q3',
                type: 'mc',
                text: 'What does the algorithm usually optimise for?',
                options: [
                  { label: 'Showing you the most accurate content', value: 'a' },
                  { label: 'Showing you the most balanced content', value: 'b' },
                  { label: 'Keeping you using the platform as long as possible', value: 'c' },
                  { label: 'Showing you the newest content', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Most platform algorithms optimise for time spent — they try to keep you using the platform as long as possible, because longer use means more adverts seen.',
                wrongFb: 'Most algorithms optimise for time spent on the platform — not accuracy, balance or usefulness. That\'s worth knowing.',
              },
            ],
          },
          {
            title: 'Mission — Break the Bubble',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Break the Bubble',
              desc: 'This week, deliberately search for something completely outside your usual interests. A place in the world you know nothing about, a type of music you\'ve never listened to, an animal you\'ve never heard of. Come back and note what you found. The algorithm would never have shown you this — you found it yourself.',
              note: '🫧 You just took control of what you see online instead of letting the algorithm decide.',
            },
          },
        ],
      },
      // Q2 S2
      {
        title: 'Online Friendships — Real and Fake',
        icon: '🤝',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Online Friendships',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Online, you can connect with people all over the world. That\'s one of the most brilliant things about the internet. But online friendships are a little different from in-person ones. When you\'re with someone in person, you can see their face, tell if they\'re nervous or happy, pick up on how they really are. Online, you have much less information. You see what someone chooses to show you — their words, maybe a picture, a username. People can choose to show you anything. Someone could say they\'re the same age as you when they\'re not. Real online friendships — with people you actually know in real life too — are wonderful. Where it\'s worth being more careful is with people you\'ve only ever met online.',
              facts: [
                { icon: '👤', text: 'Online, you only know what someone chooses to tell you about themselves. That\'s very different from the information you naturally pick up in person.' },
                { icon: '🌍', text: 'Online communities can allow people to find others who share unusual interests or experiences that nobody around them understands. That\'s genuinely valuable.' },
                { icon: '⚠️', text: 'If someone you\'ve only met online asks for personal information, photos, or to meet up — tell a grown-up immediately.' },
              ],
            },
          },
          {
            title: 'Activity — Real Connections',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think about what we actually know about people online, and how to build genuine connections safely.',
              doTogether: 'Part 1: What Do You Actually Know? — sort what you can and can\'t know about someone online. Part 2: Real or Uncertain? — evaluate different online connection scenarios. Part 3: Qualities of a Good Friend — write or talk about what makes a good friend online or off.',
              talkAbout: 'Talk together about the online connections your child has. Are there any worth discussing further?',
            },
          },
          {
            title: 'Quiz — Online Friendships',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s8-q1',
                type: 'mc',
                text: 'What\'s the main difference between meeting someone in person and meeting them online?',
                options: [
                  { label: 'Online people are less friendly', value: 'a' },
                  { label: 'In person you have much more information — their face, body language, how they really are', value: 'b' },
                  { label: 'There is no real difference', value: 'c' },
                  { label: 'Online friends are always more honest', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'In person you can see someone\'s face, hear their voice, and pick up on how they\'re really feeling. Online, you only see what someone chooses to show you.',
                wrongFb: 'In person you have so much more information — face, voice, body language. Online, you only see what someone chooses to show you, which might not be the full picture.',
              },
              {
                id: 'cl-s8-q2',
                type: 'mc',
                text: 'What should you do if someone you\'ve only met online makes you feel uncomfortable?',
                options: [
                  { label: 'Try to sort it out yourself', value: 'a' },
                  { label: 'Stop using the internet', value: 'b' },
                  { label: 'Tell a grown-up straight away', value: 'c' },
                  { label: 'Block them and forget about it', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'If anyone online makes you feel uncomfortable — for any reason — you tell a grown-up straight away. You don\'t have to deal with it on your own.',
                wrongFb: 'If anyone online makes you feel uncomfortable, tell a grown-up straight away. You don\'t have to deal with it alone.',
              },
              {
                id: 'cl-s8-q3',
                type: 'mc',
                text: 'Which of these is the safest type of online connection?',
                options: [
                  { label: 'Someone you\'ve been chatting to in a game for a few weeks', value: 'a' },
                  { label: 'Someone who has lots of followers online', value: 'b' },
                  { label: 'A friend or family member you know in real life too', value: 'c' },
                  { label: 'Someone who says they go to a school near you', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'The safest online connections are people you already know in real life. Online-only connections need more time and care before you trust them.',
                wrongFb: 'The safest online connections are people you already know in real life — friends, family, people whose real identity you know.',
              },
            ],
          },
          {
            title: 'Mission — Reach Out to Someone Real',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Reach Out to Someone Real',
              desc: 'This week, use technology to reach out to someone real in your life — a friend, a grandparent, a cousin, anyone you care about. A message, a voice note, a video call, a drawing sent as a photo — anything. The best thing the internet can do is bring real people closer together.',
              note: '🤝 The internet is best when it connects real people. You just used it exactly right.',
            },
          },
        ],
      },
      // Q2 S3
      {
        title: 'Cyberbullying — What It Is and What To Do',
        icon: '💙',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Cyberbullying',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Cyberbullying is bullying that happens through technology — messages, games, social media, group chats. It can happen any time of day or night and can feel harder to escape because it follows you onto your device. If it\'s happening to you: tell a grown-up. You don\'t have to deal with it alone. You don\'t have to respond. If you see it happening to someone else: don\'t join in. Even just watching without saying anything can feel like support to the person doing the bullying. If you can, let the person know you\'ve seen it and it wasn\'t okay. And tell a grown-up. It is never the fault of the person being bullied. Ever.',
              facts: [
                { icon: '💙', text: 'The distance of a screen can make unkindness feel easier — but the hurt on the other side is completely real.' },
                { icon: '📱', text: 'Unlike in-person bullying, cyberbullying can follow someone home and happen at any time — which is why it can feel especially overwhelming.' },
                { icon: '🦸', text: 'Someone who stands up for a person being bullied — online or in person — is called an upstander. It takes courage and it makes a real difference.' },
              ],
            },
          },
          {
            title: 'Activity — Upstander Training',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think about what cyberbullying looks like, what to do about it, and how to be someone others can count on.',
              doTogether: 'Part 1: Is This Cyberbullying? — identify which scenarios are cyberbullying and which aren\'t. Part 2: What Would You Do? — choose the best response to each scenario. Part 3: Kind Words Practice — write a kind message to someone who might need one today.',
              talkAbout: 'This is a good moment to check in openly: has your child seen or experienced anything like this? No pressure — just an open door.',
            },
          },
          {
            title: 'Quiz — Cyberbullying',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s9-q1',
                type: 'mc',
                text: 'What is cyberbullying?',
                options: [
                  { label: 'Any argument that happens online', value: 'a' },
                  { label: 'Bullying that happens through technology — repeated, deliberate unkindness', value: 'b' },
                  { label: 'Using the internet too much', value: 'c' },
                  { label: 'Getting a virus on your device', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Cyberbullying is bullying through technology — repeated, deliberate unkindness through messages, games or online spaces.',
                wrongFb: 'Cyberbullying is bullying through technology — repeated, deliberate unkindness. It\'s the same as real-life bullying, just through a screen.',
              },
              {
                id: 'cl-s9-q2',
                type: 'mc',
                text: 'If cyberbullying is happening to you, what should you do?',
                options: [
                  { label: 'Respond with unkind messages back', value: 'a' },
                  { label: 'Try to sort it out yourself', value: 'b' },
                  { label: 'Tell a grown-up', value: 'c' },
                  { label: 'Delete all your accounts', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'If cyberbullying is happening to you, tell a grown-up. You don\'t have to deal with it alone and you don\'t have to respond.',
                wrongFb: 'If cyberbullying is happening to you, tell a grown-up. You don\'t have to deal with it alone, and responding usually makes things worse.',
              },
              {
                id: 'cl-s9-q3',
                type: 'mc',
                text: 'Whose fault is it when someone is cyberbullied?',
                options: [
                  { label: 'The person being bullied, for being online', value: 'a' },
                  { label: 'The person doing the bullying', value: 'b' },
                  { label: 'Both people equally', value: 'c' },
                  { label: 'Nobody\'s — it just happens', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'It is never the fault of the person being bullied. Ever. The responsibility lies entirely with the person doing the bullying.',
                wrongFb: 'It is never the fault of the person being bullied. The responsibility lies entirely with the person doing the bullying.',
              },
            ],
          },
          {
            title: 'Mission — The Kindness Commitment',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'The Kindness Commitment',
              desc: 'Make a commitment — just for yourself — that if you ever see cyberbullying happening, to you or to someone else, you will tell a grown-up. Not because you\'re telling tales. Because unkindness left unchecked just grows. And because the person on the receiving end deserves to have someone in their corner.',
              note: '💙 You now know what to look for and what to do. That makes you someone others can count on.',
            },
          },
        ],
      },
      // Q2 S4
      {
        title: 'Creative Uses of Technology',
        icon: '🎨',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Creative Technology',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Technology has made it possible for almost anyone, anywhere, with almost no money, to make and share something with the whole world. Music produced on a laptop in a bedroom. Films made on a phone. Books written in the notes app. Games built by small teams. A child your age, somewhere in the world right now, is making something on a device that someone on the other side of the world might see and love. That\'s never been possible before in human history. You don\'t have to be an expert. You don\'t have to be an adult. The tools are there — drawing apps, music apps, coding games, video editors, story builders. Most of them are free. The question isn\'t whether you could make something. It\'s: what would you make?',
              facts: [
                { icon: '🎵', text: 'Many number one records have been produced in home studios using free or cheap software. Professional equipment is no longer the barrier it once was.' },
                { icon: '🎮', text: 'Minecraft, one of the best-selling games of all time, was created by one person — Markus "Notch" Persson — working alone.' },
                { icon: '📱', text: 'The phone in your pocket has better video capabilities than the cameras used to film major films just twenty years ago.' },
              ],
            },
          },
          {
            title: 'Activity — Make Something',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s explore what you could make with technology — and actually start making something!',
              doTogether: 'Part 1: What Can You Make With Technology? — tap to explore creative categories and what\'s possible in each. Part 2: Creative Heroes — discover real examples of young people who made extraordinary things with simple technology. Part 3: Your Creative Project — plan a creative project you could actually start. What\'s the smallest version you could begin today?',
              talkAbout: 'Ask your child: if they could make anything using technology, what would it be? What would they need to learn to do it?',
            },
          },
          {
            title: 'Quiz — Creative Technology',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s10-q1',
                type: 'mc',
                text: 'What has technology made possible that wasn\'t before?',
                options: [
                  { label: 'Making friends', value: 'a' },
                  { label: 'Almost anyone being able to make and share something with the whole world', value: 'b' },
                  { label: 'Reading books', value: 'c' },
                  { label: 'Drawing pictures', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Technology means that almost anyone — regardless of age, money or location — can now make something and share it with the whole world. That\'s genuinely new.',
                wrongFb: 'Technology has made it possible for almost anyone, anywhere, to make something and share it with the world. That\'s a genuinely new development in human history.',
              },
              {
                id: 'cl-s10-q2',
                type: 'mc',
                text: 'What do you need to start making something creative with technology?',
                options: [
                  { label: 'Lots of money and expensive equipment', value: 'a' },
                  { label: 'To be an adult', value: 'b' },
                  { label: 'A device, a free app, and a willingness to start', value: 'c' },
                  { label: 'Years of training first', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Most creative tools are free and designed so that anyone can start. You don\'t need to be an expert — you just need to begin.',
                wrongFb: 'Most creative tools are free and designed so that anyone can start using them. You don\'t need to be an expert — you just need to begin.',
              },
              {
                id: 'cl-s10-q3',
                type: 'mc',
                text: 'Which of these is a creative use of technology?',
                options: [
                  { label: 'Watching videos someone else made', value: 'a' },
                  { label: 'Building a simple game on a coding platform', value: 'b' },
                  { label: 'Reading someone else\'s website', value: 'c' },
                  { label: 'Searching for information', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Building a game, making music, writing a story — these are creative uses. You\'re making something rather than just consuming something.',
                wrongFb: 'Building a game, making music, writing a story, creating art — these are all creative uses. You\'re making something rather than consuming something.',
              },
            ],
          },
          {
            title: 'Mission — Make a Start',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Make a Start',
              desc: 'Today, make a start on something creative using technology. One drawing, one sentence, one beat, one level designed on paper — anything. It doesn\'t matter how small. Starting is the hardest part.',
              note: '🎨 You\'re not just someone who uses technology. You\'re someone who makes things with it. That\'s different. And it\'s brilliant.',
            },
          },
        ],
      },
      // Q2 S5
      {
        title: 'My Digital Footprint',
        icon: '👣',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Digital Footprint',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Every time you use an app, visit a website, search for something, post a comment or like something — you leave a trace. Together, all those traces make up your digital footprint. Some of it you put there on purpose — things you posted, comments you wrote, photos you shared. Some of it happens without you really noticing — websites you visited, searches you made, apps you used. Some of those traces last a very long time. Something posted online can be hard to take back — even if you delete it, someone might have saved or shared it already. A useful question before sharing anything: would I be happy for anyone to see this? If yes — go ahead. If not — it\'s worth pausing.',
              facts: [
                { icon: '👣', text: 'Your digital footprint includes both what you deliberately share and what\'s collected automatically from how you use technology.' },
                { icon: '🔍', text: 'Future employers, universities and others may search your name online. What they find is part of your digital footprint.' },
                { icon: '⏳', text: 'The internet has a long memory. Something posted years ago may still be findable — even after you\'ve deleted it.' },
              ],
            },
          },
          {
            title: 'Activity — Footprint Aware',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s understand what\'s in your digital footprint, think about what you\'re happy with, and make some intentional choices.',
              doTogether: 'Part 1: What\'s in a Digital Footprint? — sort intentional and unintentional traces. Part 2: Think Before You Post — for each scenario, decide whether you\'d post it. Part 3: Your Digital Self — talk about what your digital footprint currently says about you and what you\'d want it to say.',
              talkAbout: 'Try searching your own name together — just out of curiosity. What comes up? Is there anything surprising?',
            },
          },
          {
            title: 'Quiz — Digital Footprint',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s11-q1',
                type: 'mc',
                text: 'What is a digital footprint?',
                options: [
                  { label: 'A type of computer virus', value: 'a' },
                  { label: 'The trail of information you leave behind when you use the internet', value: 'b' },
                  { label: 'Your password for a website', value: 'c' },
                  { label: 'The history on your search engine', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Your digital footprint is the trail of information you leave behind — things you post, searches you make, websites you visit, apps you use.',
                wrongFb: 'Your digital footprint is the trail of information you leave behind online — posts, searches, websites visited, apps used. It accumulates over time.',
              },
              {
                id: 'cl-s11-q2',
                type: 'mc',
                text: 'Why is it worth thinking before you post something online?',
                options: [
                  { label: 'Because the internet is always watching', value: 'a' },
                  { label: 'Because once something is online it can be hard to take back', value: 'b' },
                  { label: 'Because posting things costs money', value: 'c' },
                  { label: 'Because your parents will always find out', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Once something is posted online it can be hard to fully remove — someone might have saved or shared it already.',
                wrongFb: 'Once something is posted online it can be hard to fully remove — someone might have saved or shared it. Taking a moment to think before posting is a good habit.',
              },
              {
                id: 'cl-s11-q3',
                type: 'mc',
                text: 'What\'s a useful question to ask before sharing something online?',
                options: [
                  { label: 'Will this get lots of likes?', value: 'a' },
                  { label: 'Would I be happy for anyone to see this?', value: 'b' },
                  { label: 'Is this the most interesting thing I\'ve ever made?', value: 'c' },
                  { label: 'Has my friend already posted something similar?', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Before posting, ask: would I be happy for anyone to see this — my family, a teacher, a stranger? If yes, go ahead. If not, it\'s worth pausing.',
                wrongFb: 'Before posting, ask yourself: would I be happy for anyone to see this? If yes, go ahead. If not, pause. You can always post later.',
              },
            ],
          },
          {
            title: 'Mission — Footprint Review',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Footprint Review',
              desc: 'Look back at something you\'ve posted or shared online recently. Are you still happy with it? Does it represent you the way you want to be represented? Is there anything you\'d do differently? Your digital footprint is yours to shape.',
              note: '👣 You now understand something a lot of adults are still figuring out.',
            },
          },
        ],
      },
      // Q2 S6
      {
        title: 'My Digital Life',
        icon: '🌟',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — My Digital Life',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You\'ve come a long way in this quest. You\'ve learned how the internet works, what websites are, how searches work, why personal information matters, how adverts work, and how to stay safe. In Quest 2 you\'ve explored algorithms, online friendships, cyberbullying, creative technology and digital footprints. Technology is part of your life. It always will be. The question isn\'t whether to use it — it\'s how to use it well. Using it well means being curious about how things work, being thoughtful about what you share, being kind, being creative, and knowing when to put it down. The people who use technology best aren\'t the ones who use it most. They\'re the ones who use it with intention.',
              facts: [
                { icon: '🎯', text: 'Using technology with intention means deciding what you\'re going to do before you open an app — rather than just scrolling and seeing what happens.' },
                { icon: '🌱', text: 'The skills you\'ve built in this quest — thinking critically, staying safe, creating — will keep being useful as technology changes.' },
                { icon: '🌟', text: 'You now understand things about how the internet works that most adults don\'t. That knowledge is worth using.' },
              ],
            },
          },
          {
            title: 'Activity — My Digital Skills',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s look back at everything you\'ve learned and think about how you want to use it going forward.',
              doTogether: 'Part 1: My Digital Skills Check — tap each skill you feel confident about after completing this quest. Part 2: My Digital Balance — reflect honestly on how you currently use technology and how you\'d like to. Part 3: My Digital Intentions — write three intentions for your digital life going forward.',
              talkAbout: 'What\'s one thing from this whole Digital Literacy quest that surprised you — or that you\'ll think about differently from now on?',
            },
          },
          {
            title: 'Quiz — Digital Life',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'cl-s12-q1',
                type: 'mc',
                text: 'What does it mean to use technology with intention?',
                options: [
                  { label: 'Using technology as much as possible', value: 'a' },
                  { label: 'Understanding what you\'re doing online and why', value: 'b' },
                  { label: 'Only using technology for school', value: 'c' },
                  { label: 'Never using social media', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Using technology with intention means understanding what you\'re doing and why — being thoughtful rather than just going along with what the screen suggests.',
                wrongFb: 'Using technology with intention means understanding what you\'re doing and why — deciding how you want to use it rather than just reacting to it.',
              },
              {
                id: 'cl-s12-q2',
                type: 'mc',
                text: 'Which of these describes someone who uses technology well?',
                options: [
                  { label: 'Someone who uses it for the longest time', value: 'a' },
                  { label: 'Someone who has the most followers', value: 'b' },
                  { label: 'Someone who uses it thoughtfully — creating, staying safe, and knowing when to stop', value: 'c' },
                  { label: 'Someone who never makes mistakes online', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Using technology well isn\'t about using it the most — it\'s about using it thoughtfully. Creating things, staying safe, being kind, and knowing when to put it down.',
                wrongFb: 'Using technology well is about thoughtful use — creating, staying safe, being kind, knowing when to stop. Not about how much or how long.',
              },
              {
                id: 'cl-s12-q3',
                type: 'mc',
                text: 'What\'s the main thing this Digital Literacy quest has been trying to build?',
                options: [
                  { label: 'Fear of the internet', value: 'a' },
                  { label: 'How to use technology with understanding, kindness and intention', value: 'b' },
                  { label: 'How to spend more time online', value: 'c' },
                  { label: 'How to avoid all risks by avoiding the internet', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'The goal has been to use technology with understanding, kindness and intention. That\'s what this whole quest has been about.',
                wrongFb: 'The goal was never to avoid technology or to fear it — it was to use it with understanding, kindness and intention. That\'s what digital literacy actually means.',
              },
            ],
          },
          {
            title: 'Mission — Teach Someone Something',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Teach Someone Something',
              desc: 'Pick one thing from this quest that surprised you or that you think is important — about algorithms, digital footprints, how to spot an advert, how the internet works — and teach it to someone. A parent, a sibling, a friend. Teaching something is the best way to really know it.',
              note: '🌟 Climbers Digital Literacy complete. You understand how the internet works, how to use it safely and thoughtfully, and how to make something brilliant with it.',
            },
          },
        ],
      },
    ],
    bloomer: [
      // Q1 S1
      {
        title: 'How Apps Make Money',
        icon: '💰',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — How Apps Make Money',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Why are so many apps free? Instagram, TikTok, YouTube — most apps cost nothing to download. But the companies that make them are worth billions. The answer, for most free apps, is advertising. Companies pay to show you adverts. The more time you spend in the app, the more adverts you see, and the more money the app makes. This means the app\'s main goal isn\'t to make you happy — it\'s to keep you using it for as long as possible. Every feature — the notifications, the likes, the endless scroll — is designed with that goal in mind. That\'s not a conspiracy theory. It\'s just business. But it\'s worth understanding, because once you see it you can\'t unsee it.',
              facts: [
                { icon: '📱', text: 'Most free apps make money from advertising. Your attention — the time you spend in the app — is what\'s being sold to advertisers.' },
                { icon: '🔄', text: 'Features like infinite scroll and autoplay remove natural stopping points. They\'re designed to keep you in the app longer.' },
                { icon: '💡', text: 'Some apps work differently — subscriptions, one-time purchases, or funded by governments or charities. But most free apps rely on your attention.' },
              ],
            },
          },
          {
            title: 'Activity — Follow the Money',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s investigate how the apps you use actually make their money — and what that means for how they\'re designed.',
              doTogether: 'Part 1: How Does This App Make Money? — identify the business model for different apps. Part 2: Designed to Keep You There — identify which app features are designed to maximise time spent. Part 3: Your Attention Audit — think about the apps you use most and ask: am I using this because I want to, or because it\'s designed to pull me back?',
              talkAbout: 'Pick one app you use regularly and research how it makes money. Does knowing that change anything about how you feel about using it?',
            },
          },
          {
            title: 'Quiz — App Business Models',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s1-q1',
                type: 'mc',
                text: 'Why are so many apps free to use?',
                options: [
                  { label: 'Because they\'re made by charities', value: 'a' },
                  { label: 'Because making apps doesn\'t cost anything', value: 'b' },
                  { label: 'Because they make money from advertising instead', value: 'c' },
                  { label: 'Because governments pay for them', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Most free apps make their money from advertising. The more time you spend in the app, the more adverts you see and the more money the app makes.',
                wrongFb: 'Most free apps make their money from advertising. The more time you spend, the more adverts you see and the more money they make.',
              },
              {
                id: 'bl-s1-q2',
                type: 'mc',
                text: 'What does it mean to say "your attention is the product"?',
                options: [
                  { label: 'You have to pay attention in school', value: 'a' },
                  { label: 'Apps make money by selling your attention to advertisers', value: 'b' },
                  { label: 'You are being watched by the government', value: 'c' },
                  { label: 'Apps are trying to make you more focused', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'When an app is free, advertisers are paying to reach you. Your attention — the time you spend in the app — is what\'s being sold.',
                wrongFb: 'When an app is free, your attention is what\'s being sold to advertisers. You pay with time and engagement rather than money.',
              },
              {
                id: 'bl-s1-q3',
                type: 'mc',
                text: 'Why do apps use features like infinite scroll and autoplay?',
                options: [
                  { label: 'To make the app easier to use', value: 'a' },
                  { label: 'To keep you using the app longer so it makes more money', value: 'b' },
                  { label: 'Because users asked for them', value: 'c' },
                  { label: 'Because they make the app look better', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Features like infinite scroll and autoplay remove natural stopping points — they\'re designed to keep you in the app longer, meaning more adverts and more money.',
                wrongFb: 'These features remove natural stopping points and are designed to keep you in the app longer — meaning more adverts seen and more money made.',
              },
            ],
          },
          {
            title: 'Mission — Follow the Money',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Follow the Money',
              desc: 'Pick one app you use regularly and investigate its business model. Search for how it makes money. Look at when and how adverts appear. Notice which features seem designed to keep you there. Write down what you find — does knowing how it works change how you feel about using it?',
              note: '💰 Understanding how something works puts you in control of it.',
            },
          },
        ],
      },
      // Q1 S2
      {
        title: 'Data Basics — What Gets Collected',
        icon: '🔐',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Data Basics',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Every time you use an app or website, it learns things about you. Data is just information — and apps collect a lot of it. What device you\'re using, where you are, what time it is, what you searched for, what you looked at, how long you looked at it, what you tapped, who you talk to. Some you gave deliberately when you created an account. Some was collected automatically from how you used the app. All this data is stored in enormous computer centres called data centres. Why do companies collect so much? Because data is useful — it helps them show you more of what you like, target adverts precisely, and it can be valuable to sell. Most apps have a privacy policy explaining what they collect. Almost nobody reads them. But you have more control than you might think.',
              facts: [
                { icon: '🏢', text: 'Data centres — enormous buildings full of servers storing information — use as much electricity as small cities. The data economy has a significant physical footprint.' },
                { icon: '🔄', text: 'Your data can be shared with third-party companies you\'ve never heard of. A single app interaction can involve dozens of companies receiving data.' },
                { icon: '⚙️', text: 'Privacy settings exist on almost every app and device — but they\'re usually set to share the most by default.' },
              ],
            },
          },
          {
            title: 'Activity — Data Aware',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s find out what data gets collected about you — and what you can do to have more control over it.',
              doTogether: 'Part 1: What Does This App Know? — match types of data to the apps most likely to collect them. Part 2: Privacy Settings Walkthrough — find the privacy settings on a device or app and look at what permissions have been granted. Part 3: Data Deal — write a short reflection on one app you use: what do you get, what do they get, is it a fair trade?',
              talkAbout: 'Look at the privacy settings on a device together. Find at least one permission you could turn off without losing anything important.',
            },
          },
          {
            title: 'Quiz — Data Collection',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s2-q1',
                type: 'mc',
                text: 'What is data in the context of apps and websites?',
                options: [
                  { label: 'A type of computer programme', value: 'a' },
                  { label: 'Information collected about how you use technology', value: 'b' },
                  { label: 'The design of a website', value: 'c' },
                  { label: 'Your password', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Data, in this context, means information — what you search for, what you look at, where you are, how long you spend on things. Apps collect a lot of it.',
                wrongFb: 'Data means information — what you search for, look at, tap on, where you are. Apps collect enormous amounts of this automatically.',
              },
              {
                id: 'bl-s2-q2',
                type: 'mc',
                text: 'Why do companies collect so much data about their users?',
                options: [
                  { label: 'To help users remember their passwords', value: 'a' },
                  { label: 'To understand users better, target adverts and sometimes sell the data', value: 'b' },
                  { label: 'Because they are required to by law', value: 'c' },
                  { label: 'To make apps run faster', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Companies collect data to understand what users like, show more relevant adverts, and sometimes sell information to other companies. Data is genuinely valuable.',
                wrongFb: 'Companies collect data to understand users, target adverts more precisely, and sometimes sell it. Data has real commercial value.',
              },
              {
                id: 'bl-s2-q3',
                type: 'mc',
                text: 'What can you do to have more control over your data?',
                options: [
                  { label: 'Nothing — apps collect what they want', value: 'a' },
                  { label: 'Delete all apps', value: 'b' },
                  { label: 'Check and adjust privacy settings to limit what apps can access', value: 'c' },
                  { label: 'Only use apps made in your own country', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Privacy settings let you control what apps can access — your location, camera, contacts and more. Most apps work fine with less access than they ask for.',
                wrongFb: 'Privacy settings give you real control. You can limit what apps access — location, camera, contacts — and most apps work fine with less than they ask for.',
              },
            ],
          },
          {
            title: 'Mission — Privacy Settings Check',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Privacy Settings Check',
              desc: 'Go through the privacy settings on one device or one app you use regularly. Find at least one permission you can turn off or limit without affecting how you actually use the app. Write down what you changed.',
              note: '🔐 Most people never do this. You just did. That\'s genuinely more than most adults.',
            },
          },
        ],
      },
      // Q1 S3
      {
        title: 'Algorithms and Why You See What You See',
        icon: '🫧',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Algorithms Deep Dive',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'An algorithm is a set of instructions — feed it information and it produces a result. The algorithms running social media and video platforms are extraordinarily complex, processing billions of pieces of information every second. But they all have one thing in common: they\'re optimising for something. Usually that\'s time spent on the platform. The algorithm has learned that content making you feel strong emotions — outrage, excitement, fear, joy — tends to keep people watching longer. So it shows you more of it. This isn\'t the algorithm being evil. It\'s doing what it was told. The problem is that "keeps people watching longest" isn\'t the same as "is good for people" or "is true" or "is balanced." Understanding this means you can be a more thoughtful consumer of what you see online.',
              facts: [
                { icon: '📊', text: 'Platform algorithms are updated constantly — the rules deciding what you see today are different from last week, and are shaped by what keeps people engaged.' },
                { icon: '😮', text: 'Research suggests emotionally activating content — particularly outrage — spreads faster and further than neutral content online.' },
                { icon: '🔍', text: 'You can often find settings to see a chronological feed rather than an algorithmic one — giving you back control over what you see.' },
              ],
            },
          },
          {
            title: 'Activity — Algorithm Investigator',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s go deeper into how algorithms work and think about how to use the internet more intentionally.',
              doTogether: 'Part 1: What Is the Algorithm Optimising For? — match each platform to its likely optimisation goal. Part 2: Filter Bubble Experiment — think about a topic you follow a lot and ask whether you mostly see one perspective or many. Part 3: Algorithm vs Choice — for one day this week try watching or reading things you choose deliberately rather than following suggestions.',
              talkAbout: 'Look at a feed together. Can you identify which content seems to be there because of algorithmic recommendations versus what you actually sought out?',
            },
          },
          {
            title: 'Quiz — Algorithms',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s3-q1',
                type: 'mc',
                text: 'What does it mean to say an algorithm is optimising for something?',
                options: [
                  { label: 'It is improving the quality of content', value: 'a' },
                  { label: 'It is trying to maximise a specific measurement like time spent on the platform', value: 'b' },
                  { label: 'It is removing low quality content', value: 'c' },
                  { label: 'It is sorting content alphabetically', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Optimising means trying to maximise a number. Most platform algorithms optimise for time spent — keeping you on the platform as long as possible.',
                wrongFb: 'Optimising means maximising a specific measurement. For most platforms, that measurement is time spent — keeping you there as long as possible.',
              },
              {
                id: 'bl-s3-q2',
                type: 'mc',
                text: 'Why might an algorithm show you more emotionally charged content?',
                options: [
                  { label: 'Because it is higher quality', value: 'a' },
                  { label: 'Because emotional content tends to get more engagement and keeps people watching longer', value: 'b' },
                  { label: 'Because it is more accurate', value: 'c' },
                  { label: 'Because users ask for it', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Content that triggers strong emotions gets more engagement. Algorithms learn this and show more of it because engagement is what they\'re measuring.',
                wrongFb: 'Emotionally activating content gets more engagement — likes, shares, comments. Algorithms learn this pattern and show more of it.',
              },
              {
                id: 'bl-s3-q3',
                type: 'mc',
                text: 'What is a filter bubble?',
                options: [
                  { label: 'A tool that blocks harmful content', value: 'a' },
                  { label: 'When an algorithm keeps showing similar content, gradually narrowing what you see', value: 'b' },
                  { label: 'A privacy setting on social media', value: 'c' },
                  { label: 'When too many adverts appear on one page', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A filter bubble happens when an algorithm keeps showing you similar content, gradually narrowing your view and reinforcing what you already think.',
                wrongFb: 'A filter bubble is when the algorithm keeps showing you similar things — gradually narrowing what you see and reinforcing existing views.',
              },
            ],
          },
          {
            title: 'Mission — Step Outside the Bubble',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Step Outside the Bubble',
              desc: 'This week, deliberately seek out one perspective or piece of content you wouldn\'t normally encounter. A news source you\'ve never read, a video about a topic you know nothing about, a podcast from a different point of view. You don\'t have to agree with it. You just have to encounter it.',
              note: '🫧 You just did something the algorithm is designed to prevent. That takes deliberate effort.',
            },
          },
        ],
      },
      // Q1 S4
      {
        title: 'Spotting Unreliable Information',
        icon: '🔍',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Spotting Unreliable Information',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Not everything you read online is true. That sounds obvious — but in practice it can be surprisingly hard to tell the difference, especially when something is written confidently and confirms what you already believed. Useful questions to ask: Who wrote this — do they have relevant knowledge? Where is it published — is it a reputable source? When was it written — could it be out of date? Why was it written — to inform, persuade, sell, or make you angry? Does it match other sources — if only one place is saying something dramatic, that\'s worth noticing. You don\'t need to fact-check everything. But for anything important — anything you\'ll act on or share — these questions are worth asking.',
              facts: [
                { icon: '🧠', text: 'Confirmation bias means we\'re more likely to believe information that confirms what we already think — and less likely to scrutinise it.' },
                { icon: '📰', text: 'Legitimate news organisations have editorial standards and correction policies. Unknown websites with dramatic claims often don\'t.' },
                { icon: '🔎', text: 'Reverse image search lets you find out where an image originally came from — useful for checking whether a photo is being used misleadingly.' },
              ],
            },
          },
          {
            title: 'Activity — Fact Checker',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s build your ability to spot unreliable information — a skill that matters more every year.',
              doTogether: 'Part 1: Reliable or Unreliable? — evaluate different sources and decide how much you\'d trust each one. Part 2: Apply the Questions — run a suspicious-looking piece of information through the key questions. Part 3: Fact Check Something — find something you\'ve seen or heard recently that you\'re not completely sure is true and check it using two different reliable sources.',
              talkAbout: 'Have you ever shared something that turned out not to be true? What made it seem credible at the time?',
            },
          },
          {
            title: 'Quiz — Reliable Information',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s4-q1',
                type: 'mc',
                text: 'Which of these is a useful question to ask about information you find online?',
                options: [
                  { label: 'How many likes does it have?', value: 'a' },
                  { label: 'Who wrote it and where is it published?', value: 'b' },
                  { label: 'How dramatic is the headline?', value: 'c' },
                  { label: 'Does it have a lot of images?', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Knowing who wrote something and where it\'s published tells you a lot about how reliable it might be. Likes and dramatic headlines tell you almost nothing about accuracy.',
                wrongFb: 'Who wrote it and where it\'s published are the most useful questions. Likes and dramatic headlines can actually be signs of unreliable content.',
              },
              {
                id: 'bl-s4-q2',
                type: 'mc',
                text: 'Why is it worth checking whether multiple reliable sources report the same thing?',
                options: [
                  { label: 'Because one source is never enough to confirm anything', value: 'a' },
                  { label: 'Because if only one place is reporting something dramatic, it may not be accurate', value: 'b' },
                  { label: 'Because all sources are unreliable on their own', value: 'c' },
                  { label: 'Because search engines reward popular stories', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'If something dramatic is only being reported by one source, that\'s worth noticing. Genuine important stories are usually covered by multiple reliable sources.',
                wrongFb: 'If something dramatic is only reported in one place, that\'s a warning sign. Real significant stories are usually covered by multiple reliable sources.',
              },
              {
                id: 'bl-s4-q3',
                type: 'mc',
                text: 'What is confirmation bias?',
                options: [
                  { label: 'Checking information before sharing it', value: 'a' },
                  { label: 'The tendency to believe information that confirms what we already think', value: 'b' },
                  { label: 'Only reading news from one source', value: 'c' },
                  { label: 'Sharing information without checking it', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Confirmation bias means we apply less scrutiny to information that fits our existing beliefs — making us more susceptible to misinformation that aligns with what we already think.',
                wrongFb: 'Confirmation bias means we\'re more likely to believe and less likely to question information that confirms what we already think.',
              },
            ],
          },
          {
            title: 'Mission — One Fact Check',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'One Fact Check',
              desc: 'This week, fact-check one thing. A claim from a friend, something in the news, a statistic you\'ve heard — anything. Use at least two reliable sources. Write down what you found: was it accurate, partially accurate, or misleading?',
              note: '🔍 Most people share things without checking. You just did the opposite. That matters.',
            },
          },
        ],
      },
      // Q1 S5
      {
        title: 'Digital Wellbeing — The Evidence',
        icon: '🧠',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Digital Wellbeing',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'There\'s a lot of conversation about screens and mental health. But what does the evidence actually say? The honest answer is: it\'s complicated. Research suggests the relationship between screen time and wellbeing depends a lot on what you\'re doing, not just how long. Passively scrolling social media for hours tends to be associated with lower mood. Actively creating, communicating with real friends, or learning tends to have neutral or positive effects. The comparison trap is one of the best-evidenced concerns — spending time looking at curated images of other people\'s lives and measuring your own against them. Sleep is probably the clearest finding: using devices late at night disrupts sleep, and disrupted sleep affects almost everything else.',
              facts: [
                { icon: '😴', text: 'Sleep disruption from late-night device use is the most consistently evidenced negative effect. Poor sleep affects mood, concentration and physical health.' },
                { icon: '📊', text: 'Research effect sizes are often smaller than media coverage suggests. "Social media causes depression" is a dramatic simplification of much more nuanced findings.' },
                { icon: '🎮', text: 'Type of use matters more than total time. Active, social, creative uses tend to have different effects than passive consumption.' },
              ],
            },
          },
          {
            title: 'Activity — Evidence Researcher',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s look at the actual evidence about screens and wellbeing — and think about what it means for your own life.',
              doTogether: 'Part 1: Evidence Sort — evaluate claims about screens and mental health as well-supported, exaggerated, or contested. Part 2: Your Own Evidence — reflect on how you feel after different types of screen use. Part 3: One Change — identify one small specific change to how you use technology that might improve how you feel.',
              talkAbout: 'What\'s your honest experience? Does how you feel after using screens vary depending on what you were doing?',
            },
          },
          {
            title: 'Quiz — Digital Wellbeing',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s5-q1',
                type: 'mc',
                text: 'According to research, what matters most for digital wellbeing?',
                options: [
                  { label: 'The total number of hours spent on screens', value: 'a' },
                  { label: 'What you\'re doing on screens — type of use matters more than time', value: 'b' },
                  { label: 'Which devices you use', value: 'c' },
                  { label: 'Whether you use screens alone or with others', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Research suggests type of use matters more than total time. Actively creating and communicating tends to have different effects than passively scrolling.',
                wrongFb: 'Type of use matters more than total time. What you do on screens has more impact on wellbeing than how many hours you spend.',
              },
              {
                id: 'bl-s5-q2',
                type: 'mc',
                text: 'What is the comparison trap in the context of social media?',
                options: [
                  { label: 'Comparing how many followers you have', value: 'a' },
                  { label: 'Measuring your own life against the curated highlights of others online', value: 'b' },
                  { label: 'Checking whether your posts get as many likes as similar ones', value: 'c' },
                  { label: 'Comparing how fast different apps load', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'The comparison trap means measuring your real life against other people\'s carefully edited online presentations — which rarely reflect reality accurately.',
                wrongFb: 'The comparison trap is measuring your real life against other people\'s carefully curated highlights online. It\'s an unfair comparison because one is edited and one isn\'t.',
              },
              {
                id: 'bl-s5-q3',
                type: 'mc',
                text: 'What is the most clearly evidenced negative effect of late night device use?',
                options: [
                  { label: 'It makes you less creative', value: 'a' },
                  { label: 'It disrupts sleep, which affects mood, concentration and health', value: 'b' },
                  { label: 'It causes permanent eye damage', value: 'c' },
                  { label: 'It makes you less social', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Disrupted sleep is the most consistent finding. And poor sleep affects almost everything — mood, concentration, physical health.',
                wrongFb: 'Disrupted sleep is the most consistently evidenced effect of late night device use. And poor sleep affects mood, concentration and physical health.',
              },
            ],
          },
          {
            title: 'Mission — Your Wellbeing Experiment',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Your Wellbeing Experiment',
              desc: 'For one week, try the one small change you identified in the activity. At the end of the week, notice whether anything felt different. You don\'t have to report back with dramatic results. Just pay attention.',
              note: '🧠 You just approached your own wellbeing the same way a scientist would — with evidence and an experiment.',
            },
          },
        ],
      },
      // Q1 S6
      {
        title: 'Privacy Settings and Why They Matter',
        icon: '⚙️',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Privacy Settings',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Privacy settings exist on almost every app and device — and most people never look at them. The defaults are almost always set to collect and share the most. That\'s not an accident. Apps are designed this way because more data is more valuable. But you can change the defaults. Location: does this app need to know where you are? A map app needs it. A game probably doesn\'t. Camera and microphone: think about whether the app actually needs this. Contacts: giving access means the app gets information about everyone in your phone, not just you. Who can see your content: posts are often public by default — anyone in the world can see them. You have a right to privacy. Privacy settings are one practical way to exercise it.',
              facts: [
                { icon: '⚙️', text: 'Default settings are designed for the app\'s benefit, not yours. The adjusted setting is set for yours.' },
                { icon: '📍', text: 'Location "always on" means an app can track your movements even when you\'re not using it. "Only while using" is usually sufficient.' },
                { icon: '👥', text: 'Giving an app contacts access means it gets the names and numbers of everyone in your phone — not just your own information.' },
              ],
            },
          },
          {
            title: 'Activity — Privacy Audit',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s do a proper privacy audit and think about where you personally draw the line between convenience and privacy.',
              doTogether: 'Part 1: Default vs Adjusted — look at common default settings and what you\'d change them to. Part 2: Privacy Audit — spend five minutes going through a device\'s privacy settings and note anything surprising. Part 3: The Trade-Off — write a short response to: where do you personally draw the line between convenience and privacy?',
              talkAbout: 'Do a full privacy audit of one device together. Go through every app with location, camera, microphone or contacts access.',
            },
          },
          {
            title: 'Quiz — Privacy Settings',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s6-q1',
                type: 'mc',
                text: 'Why are app default settings usually set to collect and share the most data?',
                options: [
                  { label: 'Because it makes the app run faster', value: 'a' },
                  { label: 'Because more data is more valuable to the app and its advertisers', value: 'b' },
                  { label: 'Because users prefer it that way', value: 'c' },
                  { label: 'Because it is required by law', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Default settings are designed for the app\'s benefit, not yours. More data means more ability to target adverts and more value to the business.',
                wrongFb: 'Default settings are set for the app\'s benefit — more data is more valuable. You have to actively change them to set them for your benefit.',
              },
              {
                id: 'bl-s6-q2',
                type: 'mc',
                text: 'Why should you think carefully before giving an app access to your contacts?',
                options: [
                  { label: 'Because it slows your phone down', value: 'a' },
                  { label: 'Because it gives the app information about everyone in your phone, not just you', value: 'b' },
                  { label: 'Because contacts are needed for hacking', value: 'c' },
                  { label: 'Because it costs data to share', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Giving an app access to your contacts means it gets information about all the people in your phone — their names and numbers — not just you.',
                wrongFb: 'Contacts access means the app gets information about everyone in your phone — not just your own data. It\'s more than most apps actually need.',
              },
              {
                id: 'bl-s6-q3',
                type: 'mc',
                text: 'What does it mean when a social media post is set to public?',
                options: [
                  { label: 'Only your followers can see it', value: 'a' },
                  { label: 'Anyone in the world can see it', value: 'b' },
                  { label: 'It has been checked and approved', value: 'c' },
                  { label: 'It will be shown to more people by the algorithm', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Public means exactly that — anyone, anywhere, can see it. A friends-only or private setting limits who has access.',
                wrongFb: 'Public means anyone in the world can see it. That\'s the default on many platforms — a friends-only or private setting changes that.',
              },
            ],
          },
          {
            title: 'Mission — Full Privacy Audit',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Full Privacy Audit',
              desc: 'Do a full privacy audit of one device. Go through every app that has been granted location, camera, microphone or contacts access. Decide which ones actually need it. Turn off the ones that don\'t. This takes about ten minutes and gives you back meaningful control over your own information.',
              note: '⚙️ Quest 1 complete. You understand how apps make money, what data gets collected, how algorithms work, how to spot unreliable information, what the evidence says about digital wellbeing, and how to use privacy settings.',
            },
          },
        ],
      },
      // Q2 S1
      {
        title: 'AI — A Friendly Introduction',
        icon: '🤖',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — What is AI?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Artificial intelligence — AI — is software that can do things that previously only humans could do: recognise images, understand language, make decisions, generate text, translate between languages. It works by learning from enormous amounts of data. A language AI has been trained on billions of pieces of text. It\'s learned patterns — what words tend to follow other words, how topics are discussed. When you ask it a question, it generates a response based on those patterns. It\'s important to understand: AI doesn\'t know things the way you know things. It doesn\'t understand or feel or have opinions. It generates outputs that are statistically likely to be useful. Sometimes this is impressive. Sometimes it confidently produces something completely wrong. You\'ve almost certainly already used AI — in autocorrect, photo filters, voice assistants, recommendation systems.',
              facts: [
                { icon: '🤖', text: 'AI is not one thing — it covers image recognition, voice assistants, recommendation systems, language models, and much more. They work differently and are useful for different things.' },
                { icon: '⚠️', text: 'AI can be confidently wrong. It generates plausible-sounding outputs without truly understanding accuracy — which is why checking AI outputs matters.' },
                { icon: '📱', text: 'Autocorrect, next-word suggestions, face recognition to unlock your phone, music recommendations — AI is already very present in everyday tools.' },
              ],
            },
          },
          {
            title: 'Activity — AI Explorer',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s explore what AI actually is, where it already exists in your life, and how to use it thoughtfully.',
              doTogether: 'Part 1: AI or Not AI? — identify which tools and features use AI and which don\'t. Part 2: What AI Can and Can\'t Do — sort capabilities into things AI is good at and things it genuinely struggles with. Part 3: Try It Yourself — if you have access to an AI tool, try asking it something and then evaluate the answer critically.',
              talkAbout: 'Spend five minutes looking for AI in the tools and apps you already use. You might be surprised how many there are.',
            },
          },
          {
            title: 'Quiz — Artificial Intelligence',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s7-q1',
                type: 'mc',
                text: 'How does a language AI generate responses?',
                options: [
                  { label: 'It looks up answers in a database of facts', value: 'a' },
                  { label: 'It thinks through problems the way a human does', value: 'b' },
                  { label: 'It generates outputs based on patterns learned from enormous amounts of text', value: 'c' },
                  { label: 'It connects to the internet to find answers', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Language AI generates responses by predicting what text is likely to follow, based on patterns learned from billions of examples. It doesn\'t look things up or think the way humans do.',
                wrongFb: 'Language AI generates outputs by predicting what text is likely based on patterns from billions of examples. It doesn\'t think or look things up — it pattern-matches.',
              },
              {
                id: 'bl-s7-q2',
                type: 'mc',
                text: 'Why might an AI give a confident but wrong answer?',
                options: [
                  { label: 'Because AI is designed to deceive', value: 'a' },
                  { label: 'Because AI generates plausible-sounding outputs without truly understanding accuracy', value: 'b' },
                  { label: 'Because AI hasn\'t been trained enough', value: 'c' },
                  { label: 'Because the user asked the question wrong', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'AI generates outputs that are statistically likely to sound right, based on its training. It doesn\'t have a sense of what\'s actually true — so it can produce confident nonsense.',
                wrongFb: 'AI generates plausible-sounding outputs without truly understanding accuracy. It can be confidently wrong — which is why checking AI outputs matters.',
              },
              {
                id: 'bl-s7-q3',
                type: 'mc',
                text: 'Which of these is an example of AI you might already use?',
                options: [
                  { label: 'A calculator', value: 'a' },
                  { label: 'A light switch', value: 'b' },
                  { label: 'Autocorrect or next-word suggestions on your phone', value: 'c' },
                  { label: 'A printed book', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Autocorrect and next-word suggestions use AI — they\'ve learned from millions of examples what words tend to follow each other.',
                wrongFb: 'Autocorrect and next-word suggestions are AI — they\'ve learned from millions of examples what words typically follow each other. AI is already very everyday.',
              },
            ],
          },
          {
            title: 'Mission — AI in Your Life',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'AI in Your Life',
              desc: 'Spend five minutes looking for AI in the tools and apps you already use. Make a short list of where you find it and what it\'s doing in each case. You might be surprised how many there are.',
              note: '🤖 AI isn\'t something coming in the future. It\'s already here, in the tools you use every day. Now you know what it actually is.',
            },
          },
        ],
      },
      // Q2 S2
      {
        title: 'Social Media and Feelings — What\'s Worth Knowing',
        icon: '📱',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Social Media and Feelings',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'There are some specific things worth knowing about social media and feelings — not to make you feel bad about using it, but because understanding them helps you use it more intentionally. The highlight reel effect: most people share their best moments. What you don\'t see is the ordinary days, the arguments, the insecurities. When you\'re scrolling through other people\'s highlights while sitting in your ordinary life, the comparison can feel unfair — because it is unfair. The performance pressure: some people feel pressure to present a more confident, interesting version of themselves online. The validation loop: likes and comments provide a small hit of positive feeling. Platforms are designed to make you want more of them. None of this makes social media bad. But going in with eyes open means you\'re less likely to be affected without realising it.',
              facts: [
                { icon: '🎭', text: 'Most people curate their social media presence — sharing highlights and positive moments, which creates a misleading impression of other people\'s lives.' },
                { icon: '👍', text: 'The validation loop — the small positive feeling from likes and comments — is deliberately engineered by platform designers to keep you coming back.' },
                { icon: '🌟', text: 'Genuine connection, creative expression, finding communities — these are real benefits of social media. The goal is intentional use, not avoidance.' },
              ],
            },
          },
          {
            title: 'Activity — Intentional Social Media',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think honestly about how social media affects how you feel — and how to use it on your own terms.',
              doTogether: 'Part 1: Real vs Presented — for things commonly shared on social media, think about what\'s usually left out. Part 2: How Do You Feel After? — reflect honestly on how you feel before and after different types of social media use. Part 3: Intentional Use — identify one change to how you use social media that might improve how you feel about it.',
              talkAbout: 'Have you ever noticed social media affecting your mood? What was happening — what type of content were you looking at?',
            },
          },
          {
            title: 'Quiz — Social Media and Wellbeing',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s8-q1',
                type: 'mc',
                text: 'What is the highlight reel effect on social media?',
                options: [
                  { label: 'When a platform shows you only the most popular content', value: 'a' },
                  { label: 'When people share their best moments, making others\' lives seem better than they really are', value: 'b' },
                  { label: 'When an algorithm filters out negative content', value: 'c' },
                  { label: 'When videos are edited to look more exciting', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Most people share their best moments online — the good days, the flattering photos, the achievements. This creates an impression that doesn\'t represent real life accurately.',
                wrongFb: 'The highlight reel effect is when people share their best moments, creating an impression that other people\'s lives are better or more exciting than your own.',
              },
              {
                id: 'bl-s8-q2',
                type: 'mc',
                text: 'What is the validation loop in social media?',
                options: [
                  { label: 'When a platform verifies your identity', value: 'a' },
                  { label: 'When likes and comments provide positive feelings that make you want more', value: 'b' },
                  { label: 'When you check whether a post is accurate', value: 'c' },
                  { label: 'When friends confirm they\'ve seen your posts', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'The validation loop refers to the small positive feeling from likes and comments, and the way platforms are designed to make you seek more of them.',
                wrongFb: 'The validation loop is the positive feeling from likes and comments — and the way platforms deliberately engineer this to keep you coming back for more.',
              },
              {
                id: 'bl-s8-q3',
                type: 'mc',
                text: 'What is one genuine benefit of social media?',
                options: [
                  { label: 'It always improves mental health', value: 'a' },
                  { label: 'It provides accurate information about other people\'s lives', value: 'b' },
                  { label: 'It can enable genuine connection, creative expression and finding communities', value: 'c' },
                  { label: 'It removes the need for real-life relationships', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Social media has genuine benefits — staying connected, finding communities, creative expression. The goal is to use it in ways that add to your life.',
                wrongFb: 'Genuine connection, creative expression, finding communities — these are real benefits of social media. The goal is intentional use, not avoidance.',
              },
            ],
          },
          {
            title: 'Mission — A Week of Intentional Use',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'A Week of Intentional Use',
              desc: 'For one week, try using social media — or one platform in particular — with a specific intention rather than just habit. Decide before you open it: what am I here for? A specific person? A specific interest? Notice whether using it with an intention feels different from opening it out of habit.',
              note: '📱 Using something intentionally rather than habitually is a skill that applies far beyond social media.',
            },
          },
        ],
      },
      // Q2 S3
      {
        title: 'Online Communities — Good and Bad',
        icon: '🏘️',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Online Communities',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'One of the genuinely wonderful things about the internet is that it lets people find each other. If you have an unusual interest or a question nobody around you can answer, the internet almost certainly has a community of people who share it. These communities can be genuinely valuable. But online communities can also go wrong. Echo chambers: communities that only welcome one view, where disagreement is punished and everyone becomes more extreme over time. Toxic dynamics: communities where cruelty and mockery are normal. And the simple problem of scale: when a community gets very large, the worst behaviour gets amplified. Being able to recognise when a community is pulling you somewhere unhealthy — and having the confidence to step back — is a genuinely valuable skill.',
              facts: [
                { icon: '🌍', text: 'Online communities allow people with rare conditions, unusual interests, or experiences nobody around them understands to find others who get it. That\'s genuinely valuable.' },
                { icon: '⚠️', text: 'An echo chamber reinforces existing views by excluding dissent. Being in one can make extreme views feel normal and mainstream.' },
                { icon: '🚪', text: 'Feeling free to leave a community without pressure is a sign of a healthy one. If leaving feels difficult or comes with social consequences, that\'s worth noticing.' },
              ],
            },
          },
          {
            title: 'Activity — Community Evaluator',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think about what makes online communities healthy or unhealthy — and evaluate the ones you\'re part of.',
              doTogether: 'Part 1: Healthy or Unhealthy Community? — identify signs of healthy and unhealthy online communities. Part 2: Communities You\'re Part Of — think about online communities you belong to and run them through the healthy/unhealthy checklist. Part 3: Finding Good Communities — think about what a good online community for one of your interests would look like.',
              talkAbout: 'Think about an online community you\'re part of. Does it make you feel good about yourself and others? Are different views welcomed?',
            },
          },
          {
            title: 'Quiz — Online Communities',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s9-q1',
                type: 'mc',
                text: 'What is an echo chamber in the context of online communities?',
                options: [
                  { label: 'A community where sound quality is important', value: 'a' },
                  { label: 'A community that only welcomes one view, where disagreement is punished', value: 'b' },
                  { label: 'A community that is very large', value: 'c' },
                  { label: 'A community focused on music', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'An echo chamber is a community where only one perspective is welcomed and dissent is punished — meaning people hear the same views reflected back, which can amplify and reinforce them.',
                wrongFb: 'An echo chamber is a community where only one view is welcome — disagreement is punished and views become increasingly reinforced and extreme over time.',
              },
              {
                id: 'bl-s9-q2',
                type: 'mc',
                text: 'What is one genuine benefit of online communities?',
                options: [
                  { label: 'They replace the need for real-life friends', value: 'a' },
                  { label: 'They allow people with unusual interests to find others who understand', value: 'b' },
                  { label: 'They are always more honest than real-life communities', value: 'c' },
                  { label: 'They are safer than real-life communities', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Online communities can allow people to find others who share unusual interests or experiences. For people who feel different or isolated, this can be genuinely valuable.',
                wrongFb: 'Online communities allow people with unusual interests, rare experiences, or who feel misunderstood to find others who get it. That\'s a real and valuable thing.',
              },
              {
                id: 'bl-s9-q3',
                type: 'mc',
                text: 'What is a sign that an online community might be becoming unhealthy?',
                options: [
                  { label: 'It is very large', value: 'a' },
                  { label: 'It welcomes lots of different opinions', value: 'b' },
                  { label: 'It is gradually shifting towards more extreme views and punishing dissent', value: 'c' },
                  { label: 'It has been around for a long time', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Gradual movement towards more extreme positions, combined with punishment of disagreement, is a warning sign worth paying attention to.',
                wrongFb: 'Gradual shift towards extremism and punishment of dissent are warning signs. Healthy communities can accommodate different views without becoming more extreme.',
              },
            ],
          },
          {
            title: 'Mission — Community Evaluation',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Community Evaluation',
              desc: 'Think about one online community you\'re part of — or one you\'re curious about joining. Run it through the healthy/unhealthy checklist from the activity. Write down your honest assessment.',
              note: '🏘️ Being able to evaluate a community — rather than just joining it — is a skill that matters more as communities become more influential.',
            },
          },
        ],
      },
      // Q2 S4
      {
        title: 'Digital Creativity',
        icon: '🎨',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Digital Creativity',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'The barrier to making things and sharing them with the world has never been lower. But there\'s a difference between using creative tools and developing genuine creative skill. A camera doesn\'t make you a photographer. The tool is the starting point, not the destination. What develops skill is practice, attention, feedback and the willingness to make things that are bad before they get good. There\'s also something worth thinking about with AI creative tools — text generators, image generators, music generators. These can produce impressive outputs quickly. But if an AI makes something, who made it? These are genuinely interesting questions without simple answers. What\'s clear is that human creative skill — work that comes from your own experience, perspective and voice — remains valuable. Probably more valuable, not less, as AI tools become more common.',
              facts: [
                { icon: '🎵', text: 'Many successful records have been produced in bedroom studios with free or cheap software. Professional equipment is no longer the main barrier.' },
                { icon: '🤖', text: 'AI creative tools raise genuine questions about authorship. If you describe what you want and AI creates it, the question of who is the creator is genuinely unresolved.' },
                { icon: '✨', text: 'As AI-generated content becomes more common, work that clearly comes from a genuine human voice and real experience may become more valuable.' },
              ],
            },
          },
          {
            title: 'Activity — Create Something',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s explore creative tools, think about the AI question, and — most importantly — make something.',
              doTogether: 'Part 1: Creative Tools — explore what\'s possible with free and low-cost creative technology across music, art, writing, games and film. Part 2: The AI Question — consider whether AI-generated content is equally creative to human-created content and write a short response. Part 3: Make Something — make anything, using whatever tool you have. It just has to be yours.',
              talkAbout: 'If you could make anything using technology, what would it be? What would you need to learn?',
            },
          },
          {
            title: 'Quiz — Digital Creativity',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s10-q1',
                type: 'mc',
                text: 'What develops genuine creative skill?',
                options: [
                  { label: 'Having access to the best tools', value: 'a' },
                  { label: 'Practice, attention, feedback and making things that are bad before they get good', value: 'b' },
                  { label: 'Watching lots of creative content', value: 'c' },
                  { label: 'Using AI to generate ideas', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'The tool is the starting point, not the destination. Creative skill develops through practice, paying attention, getting feedback, and being willing to make imperfect things.',
                wrongFb: 'Creative skill develops through practice, attention, feedback and the willingness to make imperfect things. The tool is the starting point — not the skill itself.',
              },
              {
                id: 'bl-s10-q2',
                type: 'mc',
                text: 'What is one genuine question raised by AI creative tools?',
                options: [
                  { label: 'Whether AI tools are too expensive', value: 'a' },
                  { label: 'Whether there is a difference between using a tool creatively and having a tool do the creating', value: 'b' },
                  { label: 'Whether AI is better than humans at everything', value: 'c' },
                  { label: 'Whether creative tools should be free', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'AI creative tools raise interesting questions about authorship and creativity — if an AI makes something based on a prompt, who is the creative? These are genuinely unresolved.',
                wrongFb: 'The difference between using a tool creatively and having a tool do the creating is a genuinely interesting question that the creative industries are actively wrestling with.',
              },
              {
                id: 'bl-s10-q3',
                type: 'mc',
                text: 'Why might human creative skill become more valuable as AI tools improve?',
                options: [
                  { label: 'Because AI will eventually stop working', value: 'a' },
                  { label: 'Because human creativity comes from real experience and perspective that AI can\'t replicate', value: 'b' },
                  { label: 'Because AI tools will become too expensive', value: 'c' },
                  { label: 'Because people will ban AI creativity', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Human creativity comes from genuine experience, emotion and perspective. As AI-generated content becomes more common, work with a clear human voice may become more valuable.',
                wrongFb: 'Human creativity comes from real experience and genuine perspective. As AI-generated content becomes more common, authentic human work may become more valuable, not less.',
              },
            ],
          },
          {
            title: 'Mission — Share Something You Made',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Share Something You Made',
              desc: 'Share something you made with at least one person — a parent, a friend, anyone. It doesn\'t matter what it is or how finished it is. The act of sharing is the point.',
              note: '🎨 Making things and sharing them is one of the most human things there is. You just did it.',
            },
          },
        ],
      },
      // Q2 S5
      {
        title: 'Tech and Jobs — What\'s Changing',
        icon: '🔭',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Tech and Jobs',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Technology has always changed the kinds of jobs people do. The printing press, the industrial revolution, computers, the internet — each shifted what work looked like. AI is the current big question. Some jobs that currently require humans — writing routine reports, analysing data, creating certain types of images — AI can now do faster and cheaper. But the picture is complicated. AI is a tool, and tools need people to use them, build them and decide what to do with the results. The jobs most at risk tend to involve routine, predictable tasks. The jobs least at risk tend to involve genuine human judgment, creativity, empathy and relationship. Nobody knows exactly how this will unfold. What seems clear is that adaptability — the ability to keep learning and work with new tools — will matter more than specific knowledge that can go out of date.',
              facts: [
                { icon: '🏭', text: 'Every major technological shift has destroyed some jobs and created new ones. The industrial revolution was terrifying to many contemporaries and ultimately raised living standards dramatically.' },
                { icon: '💡', text: 'Jobs that exist today that didn\'t 20 years ago include: social media manager, app developer, data scientist, podcast producer, UX designer, AI trainer.' },
                { icon: '🔄', text: 'Adaptability — the ability to keep learning and apply judgment to new situations — is likely to matter more than any single fixed expertise.' },
              ],
            },
          },
          {
            title: 'Activity — Future of Work',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think about how technology is changing work — and what skills are likely to matter most in the world you\'re growing up into.',
              doTogether: 'Part 1: Jobs at Risk / Jobs That Grow — sort types of work into more and less at risk from automation. Part 2: Jobs That Didn\'t Exist — research five jobs that exist today that didn\'t exist 20 years ago. Part 3: What Skills Matter? — write a short paragraph about which skills you think will be most valuable in the world you\'re growing into.',
              talkAbout: 'Interview a grown-up about how technology has changed their work since they started their career. What\'s different? What did they have to learn?',
            },
          },
          {
            title: 'Quiz — Technology and Work',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s11-q1',
                type: 'mc',
                text: 'What has happened every time a major technology has changed the job market?',
                options: [
                  { label: 'All jobs were destroyed', value: 'a' },
                  { label: 'Some jobs disappeared and new ones were created', value: 'b' },
                  { label: 'Nothing changed', value: 'c' },
                  { label: 'Only skilled workers were affected', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Every major technological shift has destroyed some jobs and created others. The printing press, the industrial revolution, computers — all changed what work looked like and all created new kinds of work.',
                wrongFb: 'Every major technological shift destroys some jobs and creates others. That\'s been consistently true across history — the question is always which ones and how quickly.',
              },
              {
                id: 'bl-s11-q2',
                type: 'mc',
                text: 'Which types of jobs seem least at risk from AI automation?',
                options: [
                  { label: 'Routine data entry', value: 'a' },
                  { label: 'Jobs involving genuine human judgment, empathy and creativity', value: 'b' },
                  { label: 'Simple translation tasks', value: 'c' },
                  { label: 'Basic report writing', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Jobs most at risk tend to involve routine, predictable tasks. Jobs involving genuine human judgment, empathy, creativity and relationship are harder to automate.',
                wrongFb: 'Jobs involving genuine human judgment, empathy and creativity are harder to automate. Routine, predictable tasks are more at risk.',
              },
              {
                id: 'bl-s11-q3',
                type: 'mc',
                text: 'What quality is likely to matter most in an uncertain job market?',
                options: [
                  { label: 'Having one specific expertise', value: 'a' },
                  { label: 'Adaptability — the ability to keep learning and work with new tools', value: 'b' },
                  { label: 'Physical strength', value: 'c' },
                  { label: 'Following rules exactly', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'In a rapidly changing job market, adaptability — the ability to keep learning, apply judgment to new situations and work with new tools — is likely to matter most.',
                wrongFb: 'Adaptability — keeping learning, applying judgment to new situations, working with new tools — will matter more than any single fixed expertise.',
              },
            ],
          },
          {
            title: 'Mission — Future Jobs Interview',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Future Jobs Interview',
              desc: 'Interview a grown-up about how technology has changed their job or work since they started their career. Ask: what\'s different about how you work now? What tools did you have to learn that didn\'t exist before? What do you think will change most in the next ten years?',
              note: '🔭 The best preparation for an uncertain future is curiosity and adaptability. You\'re building both.',
            },
          },
        ],
      },
      // Q2 S6
      {
        title: 'What Do I Actually Think About Technology?',
        icon: '💭',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Forming Your Own View',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'You\'ve covered a lot of ground. How apps make money, data, algorithms, spotting unreliable information, digital wellbeing, privacy, AI, social media, online communities, creativity, jobs. All of it has been building one thing: the ability to think for yourself about technology. Not what to think. How to think. Technology is genuinely complicated. The same tool can be brilliant and harmful. The same platform can connect people meaningfully and damage their wellbeing. Anyone who tells you technology is simply good or simply bad is not paying attention. What matters is that you have your own view — formed from evidence, open to updating, and not borrowed from whoever shouted loudest. Sitting comfortably with complexity is one of the most useful things a person can do.',
              facts: [
                { icon: '🧠', text: 'Critical thinking about technology means forming your own evidence-based view — neither blindly positive nor reflexively negative.' },
                { icon: '🔄', text: 'Being willing to update your view when you encounter good arguments is a strength, not a weakness. It means you\'re actually thinking.' },
                { icon: '💭', text: 'Most important questions about technology don\'t have simple answers. Being comfortable with that complexity is genuinely useful.' },
              ],
            },
          },
          {
            title: 'Activity — Your View',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'This is the final activity of Bloomers Digital Literacy. Let\'s consolidate what you actually think.',
              doTogether: 'Part 1: Where Do You Stand? — tap your honest position on a series of questions about technology. No right answers. Part 2: The Best and Worst — write two short paragraphs: the best thing about technology and the thing that concerns you most. Part 3: Your Digital Manifesto — write five to ten sentences about how you want to use technology going forward.',
              talkAbout: 'Have a genuine conversation about technology — not about rules or screen time, but about the bigger picture. What do you think? What do they think?',
            },
          },
          {
            title: 'Quiz — Critical Thinking About Technology',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'bl-s12-q1',
                type: 'mc',
                text: 'What does it mean to think critically about technology?',
                options: [
                  { label: 'Believing that technology is mostly bad', value: 'a' },
                  { label: 'Having a negative opinion of tech companies', value: 'b' },
                  { label: 'Forming your own evidence-based view, open to updating when you encounter new information', value: 'c' },
                  { label: 'Only using technology that has been approved by experts', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Critical thinking about technology means forming your own view based on evidence — neither blindly positive nor reflexively negative — and being willing to update it.',
                wrongFb: 'Critical thinking means forming your own evidence-based view, open to updating. Not automatically positive or negative — genuinely considered.',
              },
              {
                id: 'bl-s12-q2',
                type: 'mc',
                text: 'Why is it valuable to be comfortable with complexity and uncertainty?',
                options: [
                  { label: 'Because it means you never have to make a decision', value: 'a' },
                  { label: 'Because most important questions don\'t have simple answers', value: 'b' },
                  { label: 'Because it makes you seem more intelligent', value: 'c' },
                  { label: 'Because uncertainty is always the correct position', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Most important questions — about technology, about society — don\'t have simple answers. Being comfortable with complexity means you can engage honestly with difficult questions.',
                wrongFb: 'Most important questions don\'t have simple answers. Comfort with complexity means engaging honestly rather than reaching for false certainty.',
              },
              {
                id: 'bl-s12-q3',
                type: 'mc',
                text: 'What has been the main goal of this entire Digital Literacy quest?',
                options: [
                  { label: 'To make you distrust technology', value: 'a' },
                  { label: 'To teach you all the rules for using the internet safely', value: 'b' },
                  { label: 'To build your ability to think for yourself about technology', value: 'c' },
                  { label: 'To prepare you for a career in technology', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'The goal has never been to tell you what to think about technology. It\'s been to give you the understanding and confidence to think for yourself.',
                wrongFb: 'The goal throughout has been to build your ability to think for yourself about technology. Not what to think — how to think. That\'s what digital literacy actually means.',
              },
            ],
          },
          {
            title: 'Mission — Have the Conversation',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Have the Conversation',
              desc: 'Find someone and have a genuine conversation about technology — not about safety rules or screen time limits, but about the bigger picture. What do they think? What do you think? Where do you agree and disagree? The ability to have a thoughtful conversation about technology is rarer than it should be.',
              note: '💭 Bloomers Digital Literacy complete. You now understand how technology works, how it affects you, and how to think about it clearly.',
            },
          },
        ],
      },
    ],
    grower: [
      // Q1 S1
      {
        title: 'Who Owns the Internet?',
        icon: '🗺️',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Who Owns the Internet?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Nobody owns all of the internet. And lots of different entities own different parts of it. The physical infrastructure — the cables under the ocean, the data centres, the satellites — is owned by a mixture of private companies, governments and international organisations. The platforms — the apps and websites where most people experience the internet — are overwhelmingly owned by a small number of very large companies. Five companies — Alphabet (Google), Meta, Amazon, Apple and Microsoft — have an extraordinary concentration of influence over what the internet looks and feels like for most people. Then there are technical standards, managed by international bodies, and content — owned by everyone who creates it and by the platforms that claim rights over what you post on them. This distributed ownership is both the internet\'s greatest strength — no single entity can simply switch it off — and a source of ongoing tension about who gets to make decisions.',
              facts: [
                { icon: '🌊', text: 'Google, Meta and Microsoft have all invested heavily in undersea cable networks — meaning they own significant parts of the physical internet infrastructure as well as the platforms.' },
                { icon: '🏢', text: 'Five companies — Alphabet, Meta, Amazon, Apple and Microsoft — are among the most valuable in human history and touch almost every aspect of how people use technology.' },
                { icon: '💪', text: 'The distributed nature of the internet means it\'s very difficult for any one entity to shut down or fully control. That\'s a feature, not a bug.' },
              ],
            },
          },
          {
            title: 'Activity — Power Mapper',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s map out who actually owns and controls the different parts of the internet — and think about what that means.',
              doTogether: 'Part 1: Who Owns What? — match ownership to different layers of the internet. Part 2: Concentration of Power — consider the implications of five companies owning most of what people use online. Part 3: Your Internet Dependency Map — for one typical day, map which companies\' services you interact with.',
              talkAbout: 'Map out your own internet dependency. For one day, note every digital service you use and who owns it. How concentrated is it?',
            },
          },
          {
            title: 'Quiz — Internet Ownership',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s1-q1',
                type: 'mc',
                text: 'Why does nobody own the internet in its entirety?',
                options: [
                  { label: 'Because it was made by governments that share control', value: 'a' },
                  { label: 'Because ownership is fragmented across infrastructure, platforms, standards and content', value: 'b' },
                  { label: 'Because the internet is a public resource', value: 'c' },
                  { label: 'Because it\'s too large for anyone to own', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Different parts of the internet are owned differently — physical cables by companies and governments, platforms by private companies, standards by international bodies. This fragmentation means no single entity controls it all.',
                wrongFb: 'Ownership is fragmented across physical infrastructure, platforms, technical standards and content — with different entities owning different parts. No single entity controls the whole.',
              },
              {
                id: 'gr-s1-q2',
                type: 'mc',
                text: 'What is significant about five companies — Alphabet, Meta, Amazon, Apple and Microsoft?',
                options: [
                  { label: 'They invented the internet', value: 'a' },
                  { label: 'They collectively own an extraordinary proportion of the services most people use online', value: 'b' },
                  { label: 'They are controlled by governments', value: 'c' },
                  { label: 'They operate only in the United States', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'These five companies own the search engines, social networks, app stores, cloud infrastructure and devices that most people in the developed world rely on daily.',
                wrongFb: 'These five companies collectively own most of what people use online — search, social media, app stores, cloud infrastructure, devices. That\'s a remarkable concentration of influence.',
              },
              {
                id: 'gr-s1-q3',
                type: 'mc',
                text: 'What is one reason the distributed ownership of the internet is considered a strength?',
                options: [
                  { label: 'It makes the internet faster', value: 'a' },
                  { label: 'It means no single government or company can simply switch it off', value: 'b' },
                  { label: 'It keeps costs low', value: 'c' },
                  { label: 'It ensures equal access for everyone', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'The distributed nature of the internet means it\'s very difficult for any one entity to shut down or fully control. That\'s a deliberate feature with real consequences.',
                wrongFb: 'The distributed nature means no single entity can control or shut down the whole internet. That\'s been a key feature of its resilience.',
              },
            ],
          },
          {
            title: 'Mission — Your Tech Map',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Your Tech Map',
              desc: 'Map out your own internet dependency. For one day, note every digital service you use and who owns it. At the end of the day: how concentrated is your internet use? What would you lose if one of those companies disappeared tomorrow?',
              note: '🗺️ Understanding who owns the systems you depend on is the first step to thinking clearly about them.',
            },
          },
        ],
      },
      // Q1 S2
      {
        title: 'Big Tech — Different Perspectives',
        icon: '⚖️',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Big Tech Perspectives',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Big tech companies are praised and criticised by the same people in the same breath. Let\'s hold both sides fairly. The case for big tech: these companies have created tools that genuinely improve lives. Google Search has made information accessible to billions. Smartphones have transformed healthcare and education in the developing world. The scale of innovation is real. The case for concern: the same concentration of power that enables these benefits raises serious questions. These companies make decisions — about what information people see, what content is allowed, how data is used — that affect billions of people, with very limited democratic accountability. Their size means they can acquire or crush competitors. Their lobbying shapes the laws meant to regulate them. Neither side has a monopoly on truth. The honest position is probably: remarkable achievements, legitimate concerns, genuinely difficult questions about governance.',
              facts: [
                { icon: '🌍', text: 'Smartphones have transformed healthcare, education and economic opportunity in parts of the world that previously had very limited access to either.' },
                { icon: '🏛️', text: 'Big tech companies spend enormous sums on lobbying — shaping the laws and regulations that are supposed to govern them.' },
                { icon: '🔄', text: 'When a large tech company acquires a smaller competitor, competition regulators sometimes block it — but often don\'t. The question of when acquisitions harm competition is genuinely contested.' },
              ],
            },
          },
          {
            title: 'Activity — Steel-Manning Both Sides',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s practice holding both sides of a complex argument fairly — a skill that matters far beyond this topic.',
              doTogether: 'Part 1: Steel-Manning Both Sides — for one big tech company, write the strongest case FOR and the strongest case AGAINST. Part 2: What Should Regulation Look Like? — consider what good regulation of big tech would look like and write a short response. Part 3: Your Position — write one short paragraph: what do you think is the single most important thing society needs to address about big tech?',
              talkAbout: 'Find someone who has a different view from you on big tech and have a genuine conversation. Try to find at least one valid point you hadn\'t fully considered.',
            },
          },
          {
            title: 'Quiz — Big Tech',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s2-q1',
                type: 'mc',
                text: 'What is one genuine benefit attributed to big tech companies?',
                options: [
                  { label: 'They have eliminated inequality', value: 'a' },
                  { label: 'They have made information, tools and goods accessible to billions of people', value: 'b' },
                  { label: 'They have reduced government power', value: 'c' },
                  { label: 'They have created a free internet', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Genuine benefits include making information globally accessible, enabling communication, transforming healthcare and education access in developing countries. The benefits are real.',
                wrongFb: 'Making information accessible, enabling global communication, transforming access to healthcare and education — these are real benefits, even where concerns are also legitimate.',
              },
              {
                id: 'gr-s2-q2',
                type: 'mc',
                text: 'What is one legitimate concern about big tech\'s concentration of power?',
                options: [
                  { label: 'That their products are too expensive', value: 'a' },
                  { label: 'That they make decisions affecting billions with limited democratic accountability', value: 'b' },
                  { label: 'That they employ too many people', value: 'c' },
                  { label: 'That they are based in America', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Decisions about what information people see, what content is allowed and how data is used affect billions of people — but are made by private companies, not democratic institutions.',
                wrongFb: 'Decisions affecting billions being made by private companies with limited democratic accountability is a genuine concern regardless of political perspective.',
              },
              {
                id: 'gr-s2-q3',
                type: 'mc',
                text: 'What does it mean to steel-man an argument?',
                options: [
                  { label: 'To argue as aggressively as possible', value: 'a' },
                  { label: 'To make the strongest possible version of an argument, including one you disagree with', value: 'b' },
                  { label: 'To use statistics and data', value: 'c' },
                  { label: 'To find flaws in someone else\'s position', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Steel-manning means constructing the strongest possible version of an argument — especially one you\'re sceptical of. It leads to more honest thinking than attacking a weak version.',
                wrongFb: 'Steel-manning is making the strongest possible version of an argument — including ones you disagree with. It\'s the opposite of a straw man and leads to better thinking.',
              },
            ],
          },
          {
            title: 'Mission — The Debate',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'The Debate',
              desc: 'Find someone who has a different view from you on big tech — more positive if you\'re sceptical, more concerned if you\'re positive. Have a genuine conversation where you try to understand their position. Find at least one thing they say that you think is a valid point you hadn\'t fully considered.',
              note: '⚖️ Changing your mind when you encounter good arguments is a strength. It means you\'re actually thinking.',
            },
          },
        ],
      },
      // Q1 S3
      {
        title: 'How Your Data Is Used',
        icon: '📊',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Surveillance Capitalism',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'The business model of most free platforms is sometimes described as surveillance capitalism — human behaviour has become the raw material of a new kind of economy. Your clicks, pauses, patterns, relationships, emotions as expressed through what you engage with — all observed, collected, packaged and sold. Not sold as a personal file. What\'s sold is access to you — or to people like you. Advertisers buy the ability to reach people with specific characteristics at specific moments. "Show this advert to 16-18 year olds in London who have been looking at running shoes in the last week." The targeting is extraordinarily precise. There are also secondary markets — data brokers that aggregate information from multiple sources and sell detailed profiles. Your data can move through multiple hands in ways that are almost impossible to track.',
              facts: [
                { icon: '🔄', text: 'Data brokers are companies that aggregate information from social media, public records, purchase history and location data — then sell detailed profiles. Most people have never heard of them.' },
                { icon: '📍', text: 'Location data alone can reveal where you live, work, worship, socialise and seek medical care — making it among the most sensitive data collected.' },
                { icon: '📜', text: 'Privacy policies are written by lawyers for legal protection, not for user understanding. They\'re long, complex and almost nobody reads them — which is probably intentional.' },
              ],
            },
          },
          {
            title: 'Activity — Data Journey',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s trace what actually happens to data from a single interaction — and think about what informed participation in this system means.',
              doTogether: 'Part 1: The Data Journey — trace the path of data from a single interaction on a social media platform through to advertising revenue. Part 2: What Do They Know? — if a platform had recorded everything about you for a year, what would it reveal? Part 3: Informed Participant — write a short response: now that you understand how your data is used, does it change anything about how you\'ll behave online?',
              talkAbout: 'Find a privacy policy for an app you use. Read the section about data sharing with third parties. What did you find?',
            },
          },
          {
            title: 'Quiz — Data and Surveillance Capitalism',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s3-q1',
                type: 'mc',
                text: 'What does the term surveillance capitalism refer to?',
                options: [
                  { label: 'Government surveillance of internet users', value: 'a' },
                  { label: 'A business model where human behaviour data is the raw material of profit', value: 'b' },
                  { label: 'Security cameras in public places', value: 'c' },
                  { label: 'Capitalism that operates online', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Surveillance capitalism refers to a business model where observed human behaviour — clicks, pauses, patterns — becomes the raw material that generates profit through targeted advertising.',
                wrongFb: 'Surveillance capitalism is a business model where human behaviour data — clicks, pauses, patterns — is the raw material that generates commercial value.',
              },
              {
                id: 'gr-s3-q2',
                type: 'mc',
                text: 'When advertisers buy your data, what are they actually buying?',
                options: [
                  { label: 'A file containing your personal information', value: 'a' },
                  { label: 'The ability to reach people with specific characteristics at specific moments', value: 'b' },
                  { label: 'Access to your private messages', value: 'c' },
                  { label: 'Your browsing history directly', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Advertisers buy access to targeting — the ability to show adverts to people with specific inferred characteristics, at specific moments. Not personal files.',
                wrongFb: 'Advertisers buy targeting access — the ability to reach people with specific inferred characteristics. They don\'t typically receive your personal data directly.',
              },
              {
                id: 'gr-s3-q3',
                type: 'mc',
                text: 'What are data brokers?',
                options: [
                  { label: 'Companies that help you protect your data', value: 'a' },
                  { label: 'Companies that aggregate data from multiple sources and sell detailed profiles', value: 'b' },
                  { label: 'Government agencies that regulate data use', value: 'c' },
                  { label: 'Platforms that store your data securely', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Data brokers collect information from multiple sources — social media, public records, purchase history, location — aggregate it into profiles, and sell those profiles.',
                wrongFb: 'Data brokers aggregate information from multiple sources and sell detailed profiles. Most people have never heard of them, but they hold significant amounts of personal information.',
              },
            ],
          },
          {
            title: 'Mission — Privacy Policy Speed Read',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Privacy Policy Speed Read',
              desc: 'Pick one app or service you use regularly. Find its privacy policy. Read the section about how your data is shared with third parties. Write down what you find — did anything surprise you?',
              note: '📊 Most people never read privacy policies. You just did. That\'s a form of power.',
            },
          },
        ],
      },
      // Q1 S4
      {
        title: 'Misinformation — How It Spreads and Why',
        icon: '🔎',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Misinformation',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Misinformation has always existed. What\'s new is the speed and scale at which it can spread. Why does it spread? Emotion drives sharing — content triggering strong emotions gets shared more than neutral content. Misinformation is often more emotionally charged than accurate information. We share before we check — most people share within seconds, before any critical evaluation. Confirmation bias — we\'re more likely to believe information that confirms what we already think. Algorithms amplify engagement — emotionally charged content gets more engagement, so the algorithm serves it to more people. And more sophisticated forms: deliberately created false narratives, manipulated images, AI-generated content that\'s hard to distinguish from genuine material. Defending yourself against misinformation means slowing down before you share, checking sources, and being sceptical of content that triggers a strong emotion.',
              facts: [
                { icon: '⚡', text: 'Research by MIT found that false news spreads faster and wider than true news on social media — driven by novelty and emotional reaction rather than accuracy.' },
                { icon: '🤖', text: 'AI-generated content — including realistic fake images, audio and video — is making it increasingly difficult to verify whether media is genuine.' },
                { icon: '🧠', text: 'Knowing about confirmation bias doesn\'t make you immune to it. The first step is recognising it in yourself, not just in others.' },
              ],
            },
          },
          {
            title: 'Activity — Truth Tracer',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s understand why misinformation spreads, examine our own biases, and build a verification toolkit.',
              doTogether: 'Part 1: Why Did This Spread? — for each example of misinformation, identify the mechanism that allowed it to spread. Part 2: Your Own Biases — write honestly about a topic where you\'d be more likely to believe negative information about one side than the other. Part 3: Verification Toolkit — research and note down the tools and methods that can be used to verify whether information is accurate.',
              talkAbout: 'Trace a news story or claim that\'s currently circulating back to its original source. Has anything been added, exaggerated or changed as it spread?',
            },
          },
          {
            title: 'Quiz — Misinformation',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s4-q1',
                type: 'mc',
                text: 'Why does emotionally charged content spread faster than neutral content?',
                options: [
                  { label: 'Because it is usually more accurate', value: 'a' },
                  { label: 'Because people share based on emotional reaction before checking accuracy', value: 'b' },
                  { label: 'Because algorithms are designed to fact-check', value: 'c' },
                  { label: 'Because emotional content is easier to understand', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Research consistently shows that content triggering strong emotions gets shared faster and more widely. The sharing happens before checking.',
                wrongFb: 'People share emotionally activating content before they check it. The emotional reaction drives the share — the verification, if it happens, comes later.',
              },
              {
                id: 'gr-s4-q2',
                type: 'mc',
                text: 'What is confirmation bias in the context of misinformation?',
                options: [
                  { label: 'Bias towards confirmed news sources', value: 'a' },
                  { label: 'The tendency to believe and share information that confirms what we already think', value: 'b' },
                  { label: 'Checking information before sharing', value: 'c' },
                  { label: 'Bias towards positive news', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Confirmation bias means we apply less scrutiny to information that fits our existing beliefs — making us more susceptible to misinformation that aligns with what we already think.',
                wrongFb: 'Confirmation bias means we scrutinise information that challenges our beliefs more than information that confirms them — making us susceptible to misinformation that fits our worldview.',
              },
              {
                id: 'gr-s4-q3',
                type: 'mc',
                text: 'What is one practical step to limit spreading misinformation?',
                options: [
                  { label: 'Only read news from one trusted source', value: 'a' },
                  { label: 'Never share anything you read online', value: 'b' },
                  { label: 'Pause before sharing, check the source, be sceptical of emotionally triggering content', value: 'c' },
                  { label: 'Fact-check every piece of content you encounter', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Pausing before sharing — especially when something triggers a strong emotional reaction — is one of the most effective individual actions. The emotional reaction is often a signal to check.',
                wrongFb: 'Pausing before sharing, especially when emotionally activated, is the most effective individual step. The emotional reaction is a signal to check, not to share.',
              },
            ],
          },
          {
            title: 'Mission — Trace a Story',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Trace a Story',
              desc: 'Find a news story or claim that is currently circulating. Trace it back to its original source. Is the original source what you\'d expect? Has anything been added, exaggerated or changed as the story has spread? Write down what you find.',
              note: '🔎 Tracing information back to its source is something most people never do. That\'s a habit worth keeping.',
            },
          },
        ],
      },
      // Q1 S5
      {
        title: 'Digital Rights — Do You Have Them?',
        icon: '⚖️',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Digital Rights',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Digital rights is a growing area of law, policy and activism. Key questions being debated: The right to privacy — in the UK and EU, GDPR gives people rights over their data: to know what\'s collected, request deletion, object to certain processing. In practice, exercising these rights is often difficult. The right to free expression — platforms are private companies that can set their own rules. This creates tension: removing harmful content is arguably good; removing legitimate political speech is arguably censorship. Who decides where the line is? The right to access — is internet access a right? In a world where jobs, education and civic participation increasingly require it, the argument gains strength. The right to be forgotten — should you be able to request information about you is removed from search results? The EU has established this right. These aren\'t settled questions. They\'re live debates with genuine disagreement among thoughtful people.',
              facts: [
                { icon: '🔒', text: 'GDPR — the General Data Protection Regulation — gives EU and UK residents significant rights over their personal data, including the right to request deletion.' },
                { icon: '🗣️', text: 'Who decides what counts as "harmful" content on platforms is itself a political question — one that governments, courts and civil society are actively contesting.' },
                { icon: '🌍', text: 'Around 2.7 billion people still lack internet access. Whether access is a right — and who has responsibility to provide it — is a live policy debate.' },
              ],
            },
          },
          {
            title: 'Activity — Rights in Action',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s understand what digital rights you actually have, where they\'re contested, and how to exercise them.',
              doTogether: 'Part 1: Which Right Applies? — match different scenarios to the relevant digital right. Part 2: The Free Expression Dilemma — consider the genuine tension between platforms removing harmful content and becoming arbiters of acceptable speech. Part 3: Know Your Rights — research one specific digital right that applies in the UK and find out what it actually gives you and how to exercise it.',
              talkAbout: 'Using your GDPR rights, make a Subject Access Request to one company — requesting a copy of the data they hold about you.',
            },
          },
          {
            title: 'Quiz — Digital Rights',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s5-q1',
                type: 'mc',
                text: 'What does GDPR give individuals the right to do?',
                options: [
                  { label: 'Sue tech companies for any use of their data', value: 'a' },
                  { label: 'Know what data is held, request correction or deletion, and object to certain processing', value: 'b' },
                  { label: 'Use any platform without data being collected', value: 'c' },
                  { label: 'Access the data of other users', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'GDPR gives individuals rights including knowing what data is held about them, requesting it be corrected or deleted, and objecting to certain types of processing.',
                wrongFb: 'GDPR gives individuals rights including: knowing what data is held, requesting correction or deletion, and objecting to certain types of processing.',
              },
              {
                id: 'gr-s5-q2',
                type: 'mc',
                text: 'Why is free expression online a complicated issue?',
                options: [
                  { label: 'Because the internet is international', value: 'a' },
                  { label: 'Because platforms are private companies setting their own rules, creating tension between preventing harm and censorship', value: 'b' },
                  { label: 'Because free expression is not a legal right', value: 'c' },
                  { label: 'Because all speech online is already regulated', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Platforms are private companies that can set their own rules. This creates genuine tension — removing harmful content seems clearly good, but private companies becoming arbiters of speech raises serious questions.',
                wrongFb: 'Platforms setting their own rules creates genuine tension between removing real harm and private companies becoming arbiters of acceptable political speech. There\'s no simple resolution.',
              },
              {
                id: 'gr-s5-q3',
                type: 'mc',
                text: 'What is the right to be forgotten?',
                options: [
                  { label: 'The right to delete your social media accounts', value: 'a' },
                  { label: 'The right to request that certain information about you is removed from search results', value: 'b' },
                  { label: 'The right to remain anonymous online', value: 'c' },
                  { label: 'The right not to be photographed', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'The right to be forgotten allows individuals to request that certain information — particularly outdated or irrelevant information — is removed from search engine results. It exists in EU and UK law.',
                wrongFb: 'The right to be forgotten allows individuals to request removal of certain information from search results — particularly outdated information. It\'s established in EU and UK law but contested elsewhere.',
              },
            ],
          },
          {
            title: 'Mission — Exercise a Right',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Exercise a Right',
              desc: 'Using your GDPR rights, make a Subject Access Request to one company — requesting a copy of the data they hold about you. Most large companies have a process for this on their website. Note what you receive. Was it what you expected?',
              note: '⚖️ Most people have never exercised their data rights. You just did. That\'s what informed citizenship looks like.',
            },
          },
        ],
      },
      // Q1 S6
      {
        title: 'Your Digital Identity',
        icon: '🪞',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Digital Identity',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Your digital identity — the version of yourself that exists in online spaces — is shaped by choices you make and by forces you may not have fully considered. There\'s the identity you construct deliberately: the username you choose, the posts you make, the image you project. Most people curate this. But there are also less obvious aspects. The data trails you leave construct a detailed profile used by companies to make inferences about you. This inferred identity may be more revealing than the identity you deliberately construct. And then there\'s reputation — the more durable sense of who you are online. Something posted years ago might still be findable. And there are identity questions that are genuinely complex: the relationship between who you are online and who you are in person. For some people these align closely. For others there\'s a significant gap. This can be a space for exploration and self-expression, but it can also be exhausting and disconnecting.',
              facts: [
                { icon: '🎭', text: 'The gap between performed digital identity and real identity can be psychologically costly — maintaining a version of yourself that differs from how you experience yourself takes effort.' },
                { icon: '🔍', text: 'Future employers, universities and others search candidates online as a matter of course. Your digital identity is part of how you\'re evaluated.' },
                { icon: '📊', text: 'Data-inferred identity — built from behavioural patterns — can be more revealing than deliberately constructed identity. Companies may know things about you that you haven\'t consciously acknowledged.' },
              ],
            },
          },
          {
            title: 'Activity — Identity Reflection',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think carefully about who you are online, who you want to be, and what your data says about you.',
              doTogether: 'Part 1: Identity Audit — for different online spaces you inhabit, consider how you present yourself and whether you\'re happy with it. Part 2: The Inferred Self — write a profile of yourself based only on what your data would reveal. Part 3: Your Intentional Digital Identity — write a statement about who you want to be online.',
              talkAbout: 'Take one deliberate action this week to bring your digital identity closer to the one you\'d be proud of.',
            },
          },
          {
            title: 'Quiz — Digital Identity',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s6-q1',
                type: 'mc',
                text: 'What is the difference between constructed and inferred digital identity?',
                options: [
                  { label: 'There is no difference', value: 'a' },
                  { label: 'Constructed is what you deliberately present; inferred is built from data trails without your control', value: 'b' },
                  { label: 'Inferred identity is more accurate', value: 'c' },
                  { label: 'Constructed identity is only relevant on social media', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Your constructed identity is what you choose to post and present. Your inferred identity is built from behavioural data — what you search, pause on, buy, where you go. Only one is under your control.',
                wrongFb: 'Constructed identity is what you deliberately share. Inferred identity is built by companies from your behavioural patterns — often without your awareness. Both exist; only one is in your control.',
              },
              {
                id: 'gr-s6-q2',
                type: 'mc',
                text: 'Why does the internet\'s long memory matter for digital identity?',
                options: [
                  { label: 'Because old content is more popular', value: 'a' },
                  { label: 'Because things posted in the past may still be findable and may not reflect who you are now', value: 'b' },
                  { label: 'Because the internet never updates', value: 'c' },
                  { label: 'Because past posts earn more advertising revenue', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Digital identity accumulates over time. Comments, photos or opinions from years ago may still be findable — and may not reflect your current values.',
                wrongFb: 'Things posted years ago may still be findable and may not reflect who you are now. Digital identity accumulates and persists in ways physical identity doesn\'t.',
              },
              {
                id: 'gr-s6-q3',
                type: 'mc',
                text: 'What does it mean to be intentional about your digital identity?',
                options: [
                  { label: 'Only posting positive content', value: 'a' },
                  { label: 'Deleting all social media', value: 'b' },
                  { label: 'Making conscious choices about how you present yourself rather than letting it develop by default', value: 'c' },
                  { label: 'Keeping all accounts private', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Being intentional means actively deciding who you want to be online — rather than having your digital identity formed by habit and default settings.',
                wrongFb: 'Being intentional means actively deciding who you want to be online, rather than letting it develop by default through habit and unexamined choices.',
              },
            ],
          },
          {
            title: 'Mission — One Intentional Action',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'One Intentional Action',
              desc: 'Take one deliberate action this week to bring your digital identity closer to the one you described in the activity. Post something you\'re genuinely proud of. Delete something you\'re not. Change how you engage in a space. Start something you\'ve been thinking about. One action. Intentional.',
              note: '🪞 Quest 1 complete. You understand who owns the internet, the arguments about big tech, how your data is used, how misinformation spreads, what digital rights you have, and what your digital identity actually means.',
            },
          },
        ],
      },
      // Q2 S1
      {
        title: 'Social Media Regulation — The Arguments',
        icon: '📜',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Social Media Regulation',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Should social media be regulated? This is one of the most contested policy debates of our time. The case for stronger regulation: platforms have extraordinary influence over public discourse, mental health and children\'s development. They\'ve consistently failed to self-regulate. Democratic societies have always regulated powerful industries when the public interest requires it. The case for caution: governments regulating speech is historically dangerous. Who decides what is "harmful" is itself a political question. Heavy regulation tends to entrench incumbents — large companies can comply with complex rules; smaller ones cannot. In practice, different approaches are being tried: the EU\'s Digital Services Act, the UK\'s Online Safety Act, the US\'s more hands-off approach. None has yet been shown to work well. The honest answer to "what should we do?" is: we don\'t know yet. We\'re trying things. We should watch carefully to see what works.',
              facts: [
                { icon: '🇪🇺', text: 'The EU\'s Digital Services Act requires large platforms to be more transparent about algorithms, do more to remove illegal content, and give users more control.' },
                { icon: '🇬🇧', text: 'The UK\'s Online Safety Act imposes duties of care on platforms, particularly regarding children — but has been criticised for potentially threatening end-to-end encryption.' },
                { icon: '⚖️', text: 'Every regulatory approach involves trade-offs. Content removal requirements reduce harm but raise questions about who decides. Algorithm transparency helps users but may not change outcomes.' },
              ],
            },
          },
          {
            title: 'Activity — Policy Thinker',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s engage seriously with the arguments about social media regulation — this debate will shape the internet you grow up into.',
              doTogether: 'Part 1: Approaches to Regulation — evaluate different regulatory approaches and their trade-offs. Part 2: Design Your Regulation — write a short policy proposal with three to five specific measures and their justifications. Part 3: Who Should Decide? — consider who should have authority to decide what content is acceptable and write a short justified response.',
              talkAbout: 'Find a recent news article about social media regulation. Read it carefully and identify: what are the competing interests? Who benefits from each outcome?',
            },
          },
          {
            title: 'Quiz — Social Media Regulation',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s7-q1',
                type: 'mc',
                text: 'What is one argument in favour of regulating social media?',
                options: [
                  { label: 'To give governments control over public opinion', value: 'a' },
                  { label: 'Because platforms have significant influence and have consistently failed to self-regulate', value: 'b' },
                  { label: 'Because social media is inherently harmful', value: 'c' },
                  { label: 'Because all powerful industries should be nationalised', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Advocates for regulation argue platforms have documented harms, extraordinary influence over public life, and a poor track record of self-regulation.',
                wrongFb: 'The case for regulation rests on documented harms, significant public influence, and consistent failure to self-regulate — similar to why other powerful industries have been regulated.',
              },
              {
                id: 'gr-s7-q2',
                type: 'mc',
                text: 'What is one concern about heavy-handed social media regulation?',
                options: [
                  { label: 'That it would make platforms more profitable', value: 'a' },
                  { label: 'That governments regulating speech creates risks of political censorship', value: 'b' },
                  { label: 'That it would reduce advertising revenue', value: 'c' },
                  { label: 'That users would stop using platforms', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Government regulation of speech carries historical risks. Who decides what is "harmful" is itself a political question, and governments have incentives to define it self-servingly.',
                wrongFb: 'Government regulation of speech has historically created risks of censorship. Who decides what\'s "harmful" is a political question — one governments have incentives to answer in their own favour.',
              },
              {
                id: 'gr-s7-q3',
                type: 'mc',
                text: 'What does the EU\'s Digital Services Act require of large platforms?',
                options: [
                  { label: 'To share all user data with governments', value: 'a' },
                  { label: 'To do more to remove illegal content and give users more control over algorithms', value: 'b' },
                  { label: 'To charge users for previously free services', value: 'c' },
                  { label: 'To submit to government oversight of all content decisions', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'The Digital Services Act requires large platforms to be more transparent about algorithms, do more to remove illegal content, and give users more control over what they see.',
                wrongFb: 'The DSA requires transparency about algorithms, more active removal of illegal content, and greater user control. It\'s one of the most significant pieces of platform regulation globally.',
              },
            ],
          },
          {
            title: 'Mission — Find a Real Debate',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Find a Real Debate',
              desc: 'Find a recent news article about social media regulation — a specific law, court case or controversy. Read it carefully. Identify: what are the competing interests? Who benefits from each outcome? What\'s been decided or proposed — and do you think it\'s the right approach?',
              note: '📜 Policy debates about technology will shape the world you grow up in. Being an informed participant is a form of citizenship.',
            },
          },
        ],
      },
      // Q2 S2
      {
        title: 'AI and the Future of Work — Multiple Views',
        icon: '🤖',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — AI and Work',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'There are several distinct positions on AI and jobs, each held by serious people. The optimistic view: AI will do what every previous technology has done — destroy some jobs, create others, increase productivity. The history of technology supports this. The concerned view: this time is different. Previous automation replaced physical labour; AI can replace cognitive labour — work that previously seemed uniquely human. The transition may be faster than society can adapt to. Benefits may accrue disproportionately to capital owners. The transformative view: AI will change work so fundamentally that our current framework — jobs, salaries, working hours — will need rethinking. The sceptical view: predictions about AI replacing human work have been made before and have consistently overstated the pace of change. What seems clear is that the distribution of AI\'s benefits is a political choice, not a technical inevitability.',
              facts: [
                { icon: '🏭', text: 'Previous automation primarily replaced physical labour. AI can perform cognitive tasks — writing, analysis, creative work — that previously seemed uniquely human.' },
                { icon: '💰', text: 'Who benefits from AI productivity gains is fundamentally a political question determined by policy choices about taxation, ownership and social safety nets.' },
                { icon: '🔄', text: 'Ideas like universal basic income — giving every citizen a basic income regardless of employment — become more relevant in a world where many current jobs can be automated.' },
              ],
            },
          },
          {
            title: 'Activity — Multiple Views',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s engage seriously with all four positions on AI and work — and think about what policies might respond to the challenge.',
              doTogether: 'Part 1: Which View Do You Find Most Convincing? — for each of the four views, write the strongest evidence for and against, then identify which you find most convincing. Part 2: Policy Responses — research and evaluate at least two potential policy responses to AI-driven job displacement. Part 3: Your Working Life — think about what you might want to do and which aspects would be difficult to automate.',
              talkAbout: 'Interview someone whose work might be significantly affected by AI in the next ten years. Are they thinking about this? What do they think will change?',
            },
          },
          {
            title: 'Quiz — AI and Work',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s8-q1',
                type: 'mc',
                text: 'What is one reason some argue AI\'s impact on jobs will be different from previous technological change?',
                options: [
                  { label: 'Because AI is more expensive', value: 'a' },
                  { label: 'Because AI can replace cognitive labour, not just physical tasks', value: 'b' },
                  { label: 'Because AI will only affect wealthy countries', value: 'c' },
                  { label: 'Because AI development is slower', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Previous automation primarily replaced physical labour. AI can perform cognitive tasks — writing, analysis, creative work — that previously seemed uniquely human. This is why some argue the impact could be qualitatively different.',
                wrongFb: 'AI can perform cognitive tasks — writing, analysis, customer service, some creative work — that previously seemed uniquely human. This distinguishes it from previous waves of automation.',
              },
              {
                id: 'gr-s8-q2',
                type: 'mc',
                text: 'What does the transformative view of AI and work suggest?',
                options: [
                  { label: 'That AI will have no impact on employment', value: 'a' },
                  { label: 'That AI will change work so fundamentally that current frameworks of jobs may need rethinking', value: 'b' },
                  { label: 'That AI will only affect highly skilled workers', value: 'c' },
                  { label: 'That AI will create more jobs than it destroys', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'The transformative view holds that AI may change work so fundamentally that concepts like "jobs" and "working hours" themselves need reimagining — making ideas like universal basic income more relevant.',
                wrongFb: 'The transformative view holds that AI may change work so fundamentally that our current framework of employment itself needs rethinking — not just which jobs exist.',
              },
              {
                id: 'gr-s8-q3',
                type: 'mc',
                text: 'What determines whether AI\'s benefits are widely shared?',
                options: [
                  { label: 'The technical capabilities of AI systems', value: 'a' },
                  { label: 'Political choices about taxation, ownership, education and social safety nets', value: 'b' },
                  { label: 'The speed of AI development', value: 'c' },
                  { label: 'How many people use AI tools', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Who benefits from AI productivity is fundamentally a political question. Policy decisions about how productivity is taxed, who owns AI systems, and what social support exists all determine who benefits.',
                wrongFb: 'The distribution of AI\'s benefits is a political choice — determined by policy decisions about taxation, ownership, education and social safety nets, not by the technology itself.',
              },
            ],
          },
          {
            title: 'Mission — Future of Work Interview',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Future of Work Interview',
              desc: 'Find someone whose work might be significantly affected by AI in the next ten years. Have a genuine conversation: are they thinking about this? What do they think will change? How do they feel about it? Write down what you learn.',
              note: '🤖 The future of work is being decided now — in policy choices, investment decisions and cultural shifts. Understanding the debate means you\'re part of it.',
            },
          },
        ],
      },
      // Q2 S3
      {
        title: 'Privacy vs Security — A Genuine Tension',
        icon: '🔒',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Privacy vs Security',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Privacy and security both matter. The problem is they sometimes conflict. Effective security — catching criminals, preventing terrorism — is often easier if authorities have access to private communications and location data. But widespread surveillance carries serious risks for civil liberties and democracy. What has changed is the scale and ease of digital surveillance. A phone generates an extraordinarily detailed record of a person\'s life. The case for security: serious crimes cause real harm. Intelligence agencies need capabilities to prevent them. End-to-end encryption can be used to facilitate serious criminality. The case for privacy: mass surveillance has a chilling effect on free speech and political activity — people behave differently when they know they\'re being watched. Surveillance capabilities are often used beyond intended purposes. Backdoors in encryption weaken security for everyone. Thoughtful people are on both sides of this debate.',
              facts: [
                { icon: '🔐', text: 'End-to-end encryption means only the sender and recipient can read messages — not the platform, not the government. The UK government has argued this should be changed.' },
                { icon: '🌡️', text: 'A chilling effect occurs when people change their behaviour — especially political activity — because they know they\'re being watched, even without explicit threats.' },
                { icon: '🚪', text: 'A backdoor in encryption — allowing government access — cannot be guaranteed to remain available only to government. It creates a vulnerability that anyone with sufficient capability could exploit.' },
              ],
            },
          },
          {
            title: 'Activity — Privacy Thinker',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s engage seriously with one of the most contested and consequential policy debates in digital rights.',
              doTogether: 'Part 1: The Sliding Scale — for each scenario, consider where on the scale from clearly acceptable to clearly unacceptable you\'d place it. Part 2: The Encryption Debate — research both sides of the argument about backdoors in encryption and write a short summary with your own position. Part 3: Drawing Your Line — write a short statement of where you personally draw the line between privacy and security.',
              talkAbout: 'Find a recent news story about either government surveillance, encryption policy or data access by law enforcement. What\'s actually being proposed?',
            },
          },
          {
            title: 'Quiz — Privacy and Security',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s9-q1',
                type: 'mc',
                text: 'Why has digital technology intensified the privacy vs security tension?',
                options: [
                  { label: 'Because digital communications are less secure', value: 'a' },
                  { label: 'Because digital devices generate far more detailed records of people\'s lives than previous technologies', value: 'b' },
                  { label: 'Because security services have smaller budgets', value: 'c' },
                  { label: 'Because encryption was only invented recently', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A smartphone generates a remarkably detailed record of a person\'s movements, communications, interests and relationships. The scale of what can be accessed has fundamentally changed the trade-off.',
                wrongFb: 'The scale and detail of what digital devices record has changed the tension fundamentally. A phone is a comprehensive record of a life — previous technologies weren\'t.',
              },
              {
                id: 'gr-s9-q2',
                type: 'mc',
                text: 'What is a chilling effect in the context of surveillance?',
                options: [
                  { label: 'When surveillance slows down internet speeds', value: 'a' },
                  { label: 'When people change their behaviour because they know they\'re being watched', value: 'b' },
                  { label: 'When governments freeze the assets of suspects', value: 'c' },
                  { label: 'When surveillance cameras malfunction', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A chilling effect is when surveillance — or even the possibility of it — causes people to avoid certain searches, associations or speech. Free behaviour changes under observation.',
                wrongFb: 'A chilling effect is when awareness of being watched changes behaviour — particularly political or expressive behaviour. Surveillance doesn\'t need to be used to have this effect.',
              },
              {
                id: 'gr-s9-q3',
                type: 'mc',
                text: 'What is one concern about building backdoors into encrypted communications?',
                options: [
                  { label: 'That it would make messages longer', value: 'a' },
                  { label: 'That backdoors weaken security for everyone, not just criminals', value: 'b' },
                  { label: 'That it would reduce internet speeds', value: 'c' },
                  { label: 'That it would be too expensive', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A backdoor available to law enforcement cannot be guaranteed to remain available only to law enforcement — it creates a vulnerability that could be exploited by anyone with sufficient capability.',
                wrongFb: 'Backdoors create vulnerabilities that cannot be selectively available. A backdoor for law enforcement is a backdoor for anyone with sufficient technical capability — including criminals and hostile states.',
              },
            ],
          },
          {
            title: 'Mission — Find the News',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Find the News',
              desc: 'Find a recent news story about government surveillance, encryption policy or data access by law enforcement. Read it carefully and identify: what is actually being proposed or decided? Who benefits? Who is harmed? What do you think?',
              note: '🔒 This tension isn\'t going away. Being able to think about it clearly is a form of civic intelligence.',
            },
          },
        ],
      },
      // Q2 S4
      {
        title: 'Technology and Democracy',
        icon: '🗳️',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Technology and Democracy',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Democracy depends on an informed citizenry. Technology has both strengthened and threatened that foundation. Ways it has strengthened democracy: unprecedented access to information from multiple sources, citizens holding power to account through video evidence and investigative tools, movements for democratic reform organised online. Ways it has threatened democracy: platforms distribute misinformation and often amplify it, political advertising can be targeted with extraordinary precision in ways difficult to scrutinise, the concentration of information infrastructure in a few private companies means those companies make decisions with political consequences, coordinated influence operations have demonstrably affected democratic elections. There are also deeper concerns about what happens to political culture when most public discourse happens on platforms optimised for engagement rather than deliberation. Outrage travels faster than nuance. The middle ground shrinks.',
              facts: [
                { icon: '🎯', text: 'Political micro-targeting allows different messages to be shown to different voters based on detailed profiles — meaning the public cannot see or scrutinise what\'s being circulated.' },
                { icon: '🌐', text: 'Coordinated inauthentic behaviour — fake accounts, bot networks, coordinated amplification — has been documented in elections across multiple countries.' },
                { icon: '📰', text: 'The decline of local news and the rise of social media has changed where people get political information — with significant but contested effects on democratic participation.' },
              ],
            },
          },
          {
            title: 'Activity — Democratic Thinker',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s think carefully about how technology affects democratic health — and what an informed citizen can do about it.',
              doTogether: 'Part 1: Democracy Audit — for each aspect of democratic health, consider whether technology has made it better, worse, or both. Part 2: Your Information Diet — audit where you get political and current affairs information and how diverse it is. Part 3: What Would You Change? — write a specific proposal for one change to how technology interacts with democracy.',
              talkAbout: 'Deliberately read political or current affairs content from a source you wouldn\'t normally encounter — a different political perspective or a different country\'s media.',
            },
          },
          {
            title: 'Quiz — Technology and Democracy',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s10-q1',
                type: 'mc',
                text: 'What is one way technology has strengthened democratic participation?',
                options: [
                  { label: 'By making all political information equally reliable', value: 'a' },
                  { label: 'By giving citizens unprecedented access to information and tools to hold power to account', value: 'b' },
                  { label: 'By eliminating political advertising', value: 'c' },
                  { label: 'By making elections faster to conduct', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Technology has given citizens remarkable tools — access to information, video evidence, freedom of information tools, ability to organise — that can strengthen democratic accountability.',
                wrongFb: 'Technology has given citizens genuine tools for democratic accountability — access to information, video evidence, organising capacity. These benefits are real even alongside the harms.',
              },
              {
                id: 'gr-s10-q2',
                type: 'mc',
                text: 'Why is micro-targeted political advertising a concern for democracy?',
                options: [
                  { label: 'Because it is more expensive than traditional advertising', value: 'a' },
                  { label: 'Because it allows different messages to reach different voters in ways hard to scrutinise publicly', value: 'b' },
                  { label: 'Because it reaches too many people', value: 'c' },
                  { label: 'Because it is more effective than traditional advertising', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Micro-targeted advertising allows different political messages to be shown to different people — meaning the public cannot see what messages are being circulated or scrutinise their accuracy.',
                wrongFb: 'The concern is opacity — different voters see different messages, making it impossible for the public to scrutinise what\'s being said or to whom.',
              },
              {
                id: 'gr-s10-q3',
                type: 'mc',
                text: 'What individual behaviour contributes to better democratic information quality?',
                options: [
                  { label: 'Only reading news from government sources', value: 'a' },
                  { label: 'Avoiding political content entirely', value: 'b' },
                  { label: 'Checking information before sharing, seeking diverse sources, engaging thoughtfully rather than tribally', value: 'c' },
                  { label: 'Sharing as much political content as possible', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'Individuals who check before sharing, seek diverse perspectives, and engage to understand rather than just to express identity contribute to healthier democratic discourse.',
                wrongFb: 'Checking before sharing, seeking diverse sources, and engaging thoughtfully rather than tribally are individual habits that contribute to healthier democratic information.',
              },
            ],
          },
          {
            title: 'Mission — Diversify Your Information Diet',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Diversify Your Information Diet',
              desc: 'This week, deliberately read political or current affairs content from a source you wouldn\'t normally encounter — a different political perspective, a different country\'s media, a long-form investigation. Did it change anything about how you think about the issue? Did it challenge any assumptions?',
              note: '🗳️ Democracy depends on informed citizens. You\'re building the habits that make that possible.',
            },
          },
        ],
      },
      // Q2 S5
      {
        title: 'Digital Wellbeing for Real',
        icon: '🧘',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — Digital Wellbeing for Real',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Digital wellbeing has become an industry. Screen time tracking apps, digital detox retreats, books telling you to delete social media. Most is well-intentioned. Some is well-evidenced. A lot is oversimplified. The honest position: the relationship between technology use and wellbeing is genuinely complex. At the population level, some associations exist. But associations across populations don\'t translate cleanly to individuals, and effect sizes are often smaller than media coverage suggests. What research does consistently support: agency matters. People who feel in control of their technology use report better wellbeing than those who feel controlled by it. The same amount of use feels different depending on whether it\'s a deliberate choice or a compulsive habit. And there are structural factors that individual willpower alone can\'t solve. Platforms are designed by teams of experts to maximise engagement. The individual trying to self-regulate is not on equal footing.',
              facts: [
                { icon: '🎯', text: 'Agency over technology use — feeling in control rather than controlled — is one of the most consistently evidenced factors in digital wellbeing research.' },
                { icon: '🏗️', text: 'Individual self-regulation alone cannot fully address structural design choices. The contest between an individual\'s willpower and a platform\'s engagement team is unequal.' },
                { icon: '📊', text: 'Effect sizes in research linking social media to mental health are often small and inconsistent — more modest than media coverage typically suggests.' },
              ],
            },
          },
          {
            title: 'Activity — Wellbeing Realist',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'Let\'s approach digital wellbeing the way a researcher would — with evidence, honest self-assessment, and realistic thinking about what can actually change.',
              doTogether: 'Part 1: Evidence vs Hype — evaluate claims about screens and wellbeing as well-evidenced, exaggerated or contested. Part 2: Your Relationship With Technology — answer honestly: are there apps where you feel controlled rather than in control? Part 3: Structural vs Individual — write a short analysis of how much individual choices can improve digital wellbeing and where they hit their limits.',
              talkAbout: 'Identify one change to how a platform you use is designed that would improve your wellbeing. Is this something you can implement yourself or does it require the platform to change?',
            },
          },
          {
            title: 'Quiz — Digital Wellbeing',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s11-q1',
                type: 'mc',
                text: 'What does research most consistently suggest about agency and digital wellbeing?',
                options: [
                  { label: 'People with less technology use always have better wellbeing', value: 'a' },
                  { label: 'People who feel in control of their technology use report better wellbeing than those who feel controlled', value: 'b' },
                  { label: 'Wellbeing only improves when technology is eliminated', value: 'c' },
                  { label: 'Agency over technology use has no effect on wellbeing', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'Feeling in control of your technology use — rather than feeling compelled by it — is consistently associated with better wellbeing across different studies.',
                wrongFb: 'Agency — feeling in control rather than controlled by technology — is one of the most consistent findings in digital wellbeing research, regardless of total usage.',
              },
              {
                id: 'gr-s11-q2',
                type: 'mc',
                text: 'Why is digital wellbeing partly a structural problem?',
                options: [
                  { label: 'Because individuals don\'t have smartphones', value: 'a' },
                  { label: 'Because platforms are designed by experts to maximise engagement, creating an unequal contest with self-regulation', value: 'b' },
                  { label: 'Because wellbeing research is too complicated for individuals', value: 'c' },
                  { label: 'Because people don\'t care about their wellbeing', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'When individuals try to self-regulate against platforms specifically designed by experts to maximise engagement, the contest is unequal. Individual willpower alone cannot solve a structurally engineered problem.',
                wrongFb: 'Platforms are designed by teams of experts to maximise engagement. Individual willpower against that is unequal — which is why structural and regulatory solutions matter alongside individual choices.',
              },
              {
                id: 'gr-s11-q3',
                type: 'mc',
                text: 'What is a more accurate description of social media\'s relationship with mental health?',
                options: [
                  { label: 'Social media causes depression in everyone who uses it heavily', value: 'a' },
                  { label: 'Social media has no effect on mental health', value: 'b' },
                  { label: 'The relationship is complex, varies by individual and type of use, involving associations not simple causation', value: 'c' },
                  { label: 'The effects are the same for all age groups', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'The relationship between social media and mental health is genuinely complex — it varies by individual, age group, type of use, and other factors. Simple causal claims are oversimplifications.',
                wrongFb: 'The relationship is complex, varies considerably by individual and type of use, and involves associations rather than simple causation. The evidence is more nuanced than most coverage suggests.',
              },
            ],
          },
          {
            title: 'Mission — One Structural Change',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'One Structural Change',
              desc: 'Identify one change to how a platform you use is designed that would improve your wellbeing. Could be removing infinite scroll, removing like counts, showing usage time, adding friction. Is this something you can implement through settings — or does it require the platform to change? What does that tell you?',
              note: '🧘 Understanding digital wellbeing clearly means you can make better choices and have better conversations about what needs to change.',
            },
          },
        ],
      },
      // Q2 S6
      {
        title: 'My Relationship With Technology',
        icon: '🌟',
        xp: 180,
        steps: [
          {
            title: 'Let\'s Learn — My Relationship With Technology',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'This is the final session of Growers Digital Literacy — and the final session of the entire Digital Literacy subject across all four age bands. You\'ve come an enormous distance. From Sprouts discovering that computers are tools made by people, to understanding surveillance capitalism, digital rights, misinformation and what kind of citizen you want to be. Information without reflection is incomplete. So this final session is about you — your actual relationship with technology, your genuine values, and the kind of digital citizen you want to be. There\'s a version of this session that tells you what to think. That\'s not what we\'re going to do. Instead: form your own view. Not borrowed from a worried parent or an enthusiastic tech optimist. Not shaped by what you think you\'re supposed to say. A genuinely considered position, developed from evidence and honest self-reflection, that you\'re willing to defend and willing to update.',
              facts: [
                { icon: '🧠', text: 'Information without reflection is incomplete. Knowing something and understanding what it means for how you live are different things.' },
                { icon: '🔄', text: 'A genuinely considered position is one you\'re willing to defend and willing to update. Certainty that can\'t be updated isn\'t thinking — it\'s belief.' },
                { icon: '🌱', text: 'From Sprouts to Growers, the goal has been one thing: building your capacity to think for yourself about technology. That\'s what digital literacy actually means.' },
              ],
            },
          },
          {
            title: 'Activity — Final Reflection',
            type: 'activity',
            xp: 60,
            activityContent: {
              childHears: 'This is your final activity across all of Digital Literacy. Let\'s make it count.',
              doTogether: 'Part 1: What Has Changed? — write short answers to: what\'s the most important thing you\'ve learned, what surprised you most, what do you now think differently about. Part 2: Your Honest Assessment — write honest answers to: what do you genuinely value about technology, what genuinely concerns you, where do you feel most and least in control. Part 3: Your Digital Manifesto — Final Version — write your final manifesto: a considered statement of how you want to engage with technology.',
              talkAbout: 'Find someone and share one thing from this entire Digital Literacy subject that you think they should know. Not a lecture — just a conversation.',
            },
          },
          {
            title: 'Quiz — Final Reflections',
            type: 'quiz',
            xp: 60,
            quizContent: [
              {
                id: 'gr-s12-q1',
                type: 'mc',
                text: 'What is the difference between information and understanding?',
                options: [
                  { label: 'They are the same thing', value: 'a' },
                  { label: 'Information is facts; understanding is what you do with them — how they connect and what follows', value: 'b' },
                  { label: 'Understanding is just having more information', value: 'c' },
                  { label: 'Information requires technology; understanding doesn\'t', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'You can have a lot of information without understanding — knowing facts without knowing what they mean or how they connect. Understanding requires reflection on information.',
                wrongFb: 'Information is facts. Understanding is what you do with them — how they connect, what they mean, what follows from them. One requires the other, but they\'re not the same thing.',
              },
              {
                id: 'gr-s12-q2',
                type: 'mc',
                text: 'What does it mean to have a genuinely considered position?',
                options: [
                  { label: 'A position that agrees with expert consensus', value: 'a' },
                  { label: 'A position formed from evidence and honest reflection, willing to defend and willing to update', value: 'b' },
                  { label: 'A position you\'ve held for a long time', value: 'c' },
                  { label: 'A position more nuanced than other people\'s', value: 'd' },
                ],
                correctAnswer: 'b',
                correctFb: 'A genuinely considered position is formed from evidence and honest self-reflection — held with enough confidence to defend but enough humility to update when you encounter good arguments.',
                wrongFb: 'A genuinely considered position is formed from evidence and reflection, held confidently enough to defend but humbly enough to update. Not borrowed, not performative — genuinely yours.',
              },
              {
                id: 'gr-s12-q3',
                type: 'mc',
                text: 'What has been the underlying goal of this entire Digital Literacy subject?',
                options: [
                  { label: 'To make you use technology less', value: 'a' },
                  { label: 'To warn you about the dangers of the internet', value: 'b' },
                  { label: 'To build your capacity to think clearly and form your own views about technology', value: 'c' },
                  { label: 'To prepare you for a career in technology', value: 'd' },
                ],
                correctAnswer: 'c',
                correctFb: 'From Sprouts to Growers, the consistent goal has been one thing: building your capacity to think for yourself about technology. Not what to think — how to think.',
                wrongFb: 'The goal throughout has been to build your capacity to think for yourself about technology. Not what to think — how to think. That\'s what digital literacy actually means.',
              },
            ],
          },
          {
            title: 'Mission — Share What You\'ve Learned',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Share What You\'ve Learned',
              desc: 'Find someone — a parent, a sibling, a friend, anyone — and share one thing from this entire Digital Literacy subject that you think they should know. Not a lecture. Just a conversation. One genuine insight, offered honestly.',
              note: '🌟 You\'ve completed Digital Literacy across all four age bands. From Sprouts discovering that computers are tools made by people, to Growers wrestling with surveillance capitalism, digital rights and what kind of citizen you want to be in digital spaces. That\'s a genuine education. Use it well.',
            },
          },
        ],
      },
    ],
  },
}

export default digitalLiteracy
