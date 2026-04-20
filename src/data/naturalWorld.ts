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
  badge?: {
    emoji: string
    title: string
    desc: string
  }
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
        badge: {
          emoji: '🌱',
          title: 'Nature Spotter',
          desc: 'I can spot living things!',
        },
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
        badge: {
          emoji: '🍂',
          title: 'Season Watcher',
          desc: 'I know all four seasons!',
        },
        steps: [
          {
            title: '🌿 Let\'s Learn — Four Amazing Seasons!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Did you know the world changes its outfit four times a year? Spring, summer, autumn and winter each feel completely different — different weather, different colours, and different things to spot outside. Let\'s explore them all!',
              facts: [
                { icon: '🌸', text: 'Spring — flowers bloom, baby animals are born, and days get longer. It\'s nature\'s big wake-up!' },
                { icon: '☀️', text: 'Summer — warm and sunny, with the longest days of the year. Perfect for picnics and paddling!' },
                { icon: '🍂', text: 'Autumn — leaves turn red, orange and gold and fall to the ground. Animals start getting ready for winter.' },
                { icon: '❄️', text: 'Winter — cold and dark, with shorter days. Some animals sleep through it — that\'s called hibernation!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Season Sorting!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to sort pictures or draw things that belong to each season. Let\'s make a seasons poster together!',
              doTogether: 'Fold a piece of paper into four boxes and label each one with a season. Take turns drawing or describing things you\'d see — sun hats for summer, snowflakes for winter, blossom for spring, conkers for autumn. See who can fill their box first!',
              talkAbout: '"Which is your favourite season and why?" Then ask: "What\'s something special you can ONLY do in that season?" Help them think of seasonal moments — collecting conkers, splashing in puddles, building snowmen.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-s-2-q1',
                type: 'mc',
                text: 'In which season do leaves fall off trees?',
                options: [
                  { label: '🌸 Spring', value: 'wrong' },
                  { label: '☀️ Summer', value: 'wrong' },
                  { label: '🍂 Autumn', value: 'correct' },
                  { label: '❄️ Winter', value: 'wrong' },
                ],
                correctFb: '✅ Autumn! Trees drop their leaves to save energy for the cold months ahead. Smart trees!',
                wrongFb: 'Think about which season feels like things are winding down and getting ready for cold weather...',
              },
              {
                id: 'nw-s-2-q2',
                type: 'tf',
                text: 'True or False? Summer has the longest days of the year.',
                correctAnswer: 'True',
                correctFb: '✅ True! In summer the sun stays up for much longer, which is why it\'s still light at bedtime!',
                wrongFb: 'Actually this one is TRUE — summer days are the longest of the year. That\'s why it feels like it stays light forever!',
              },
              {
                id: 'nw-s-2-q3',
                type: 'mc',
                text: 'What is it called when animals sleep through winter?',
                options: [
                  { label: '💤 A nap', value: 'wrong' },
                  { label: '🐻 Hibernation', value: 'correct' },
                  { label: '🏃 Migration', value: 'wrong' },
                  { label: '😴 A long rest', value: 'wrong' },
                ],
                correctFb: '✅ Hibernation! Animals like hedgehogs and bears sleep right through winter to save energy when food is scarce.',
                wrongFb: 'The special word for a very long winter sleep is hibernation — not just a nap, but months of deep sleep!',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Season Spotter!',
              desc: 'Go outside and find three signs of the current season. Look for things like falling leaves, flowers, frost, or sunshine. Tell a grown-up what season you think it is and what clues told you!',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Mini Beasts!',
        icon: '🐛',
        xp: 180,
        badge: {
          emoji: '🐛',
          title: 'Bug Explorer',
          desc: 'I love mini beasts!',
        },
        steps: [
          {
            title: '🌿 Let\'s Learn — Amazing Mini Beasts!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Mini beasts are small creatures that live all around us — in gardens, parks, under stones and in puddles. Spiders, worms, snails, beetles, butterflies — they\'re all mini beasts! They might be small but they do HUGE jobs for nature.',
              facts: [
                { icon: '🐝', text: 'Bees visit flowers and carry pollen from one to another. Without bees, many plants couldn\'t make seeds — and we wouldn\'t have lots of our favourite fruits!' },
                { icon: '🪱', text: 'Worms tunnel through the soil and make it healthy for plants. They\'re like tiny underground farmers!' },
                { icon: '🦋', text: 'Butterflies start life as caterpillars, spin into a chrysalis, and emerge completely changed. That transformation is called metamorphosis!' },
                { icon: '🕷️', text: 'Spiders aren\'t insects — they have 8 legs, not 6. They\'re called arachnids. Their silk is stronger than steel of the same thickness!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Mini Beast Hunt!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s go on a mini beast hunt! We\'re going to look in secret places where tiny creatures hide. Be very gentle — we look, then leave them in peace.',
              doTogether: 'Head outside to a garden, park or patch of grass. Carefully look: under a stone or log (replace it gently!), on the underside of leaves, in the soil, on flowers. Count the legs of anything you find — 6 legs = insect, 8 legs = spider! Make a list of what you discover.',
              talkAbout: '"How do you think a worm feels when we lift up its stone?" Then talk about why we put things back — mini beasts have homes too, and we\'re just visiting!',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-s-3-q1',
                type: 'mc',
                text: 'How many legs does an insect have?',
                options: [
                  { label: '4 legs', value: 'wrong' },
                  { label: '6 legs', value: 'correct' },
                  { label: '8 legs', value: 'wrong' },
                  { label: '10 legs', value: 'wrong' },
                ],
                correctFb: '✅ 6 legs! All insects have exactly 6 legs. Spiders have 8 and aren\'t insects at all!',
                wrongFb: 'Insects always have exactly 6 legs — it\'s one of the things that makes them insects!',
              },
              {
                id: 'nw-s-3-q2',
                type: 'tf',
                text: 'True or False? Worms are bad for gardens.',
                correctAnswer: 'False',
                correctFb: '✅ False! Worms are brilliant for gardens. They mix up the soil and make it much better for plants to grow.',
                wrongFb: 'Actually worms are garden superheroes! They tunnel through soil making it healthier and helping plants grow.',
              },
              {
                id: 'nw-s-3-q3',
                type: 'mc',
                text: 'What is the change from caterpillar to butterfly called?',
                options: [
                  { label: '🌙 Hibernation', value: 'wrong' },
                  { label: '🦋 Metamorphosis', value: 'correct' },
                  { label: '🔄 Migration', value: 'wrong' },
                  { label: '🌱 Germination', value: 'wrong' },
                ],
                correctFb: '✅ Metamorphosis! It\'s a big word for a big change — the caterpillar wraps up in a chrysalis and comes out as a completely different creature.',
                wrongFb: 'The special word for when a caterpillar transforms into a butterfly is metamorphosis — it means "big change"!',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Mini Beast Log!',
              desc: 'Find at least two different mini beasts and count their legs. Are they insects (6 legs) or something else? Draw them or describe them to a grown-up. Remember — look gently and leave them where you found them!',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Oceans & Rivers',
        icon: '🌊',
        xp: 220,
        badge: {
          emoji: '🌊',
          title: 'Water Explorer',
          desc: 'I know about water and oceans!',
        },
        steps: [
          {
            title: '🌿 Let\'s Learn — Water, Water Everywhere!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Most of our planet is covered in water! Big salty oceans, freshwater rivers, still lakes and tiny streams — water is home to millions of creatures. Did you know the ocean is so deep that the tallest mountain on land would fit inside it and still be underwater?',
              facts: [
                { icon: '🌍', text: 'About 71% of Earth\'s surface is covered in water. Our planet should really be called "Ocean" not "Earth"!' },
                { icon: '🐠', text: 'Coral reefs are home to about 25% of all sea creatures — even though they cover less than 1% of the ocean floor. They\'re like cities under the sea!' },
                { icon: '🦈', text: 'Sharks have been swimming in the oceans for longer than trees have existed on land — over 450 million years!' },
                { icon: '🌊', text: 'Rivers start high up in mountains and travel all the way to the sea, collecting water as they go. The Amazon River in South America is so wide you can\'t see the other side!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Water Watch!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s do a water experiment! We\'re going to see why sea water is different from river water.',
              doTogether: 'Fill two glasses with water. In one, mix in 3 teaspoons of salt and stir. Now try to float a grape or small object in each glass — it should sink in the fresh water but float in the salty water! Talk about how saltwater is denser (heavier) than fresh water, which is why things float more easily in the sea.',
              talkAbout: '"Can you drink sea water?" (No — it would actually make you more thirsty!) "Where do you think the salt in the sea comes from?" (Rivers wash tiny bits of salt from rocks into the sea over millions of years.)',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-s-4-q1',
                type: 'mc',
                text: 'What covers most of planet Earth?',
                options: [
                  { label: '🏔️ Mountains', value: 'wrong' },
                  { label: '🌊 Water', value: 'correct' },
                  { label: '🌳 Forests', value: 'wrong' },
                  { label: '🏜️ Deserts', value: 'wrong' },
                ],
                correctFb: '✅ Water! About 71% of Earth is covered in ocean. Our planet is mostly blue from space!',
                wrongFb: 'Most of our planet is actually covered in water — that\'s why Earth looks blue from space!',
              },
              {
                id: 'nw-s-4-q2',
                type: 'tf',
                text: 'True or False? You can drink sea water when you\'re thirsty.',
                correctAnswer: 'False',
                correctFb: '✅ False! Sea water has so much salt that drinking it would actually make you more thirsty and could make you very ill.',
                wrongFb: 'Sea water is too salty to drink — it would actually pull water OUT of your body and make you more dehydrated!',
              },
              {
                id: 'nw-s-4-q3',
                type: 'mc',
                text: 'Coral reefs are called "the rainforests of the sea" because...',
                options: [
                  { label: '🌧️ They get lots of rain', value: 'wrong' },
                  { label: '🐠 They\'re home to huge numbers of creatures', value: 'correct' },
                  { label: '🌿 They have plants like trees', value: 'wrong' },
                  { label: '🌡️ They\'re always hot', value: 'wrong' },
                ],
                correctFb: '✅ Exactly! Coral reefs are packed with life — home to a quarter of all sea creatures despite being tiny compared to the whole ocean.',
                wrongFb: 'Coral reefs are amazing because of the enormous amount of life they support — like an underwater city!',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Water Watcher!',
              desc: 'Find a source of water near you — a pond, stream, puddle, fountain or even a drainpipe. Look carefully: can you spot any creatures living in or near it? What tells you the water is there (sounds, smells, plants nearby)?',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Wild Animals & Food Chains',
        icon: '🦊',
        xp: 200,
        badge: {
          emoji: '🦊',
          title: 'Wild Expert',
          desc: 'I understand food chains!',
        },
        steps: [
          {
            title: '🌿 Let\'s Learn — Who Eats Who?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'In nature, everything eats something else. A caterpillar eats a leaf. A bird eats the caterpillar. A fox eats the bird. This is called a food chain! Every food chain starts with a plant, because plants can make their own food from sunlight.',
              facts: [
                { icon: '☀️', text: 'Plants are called "producers" because they produce (make) food from sunlight, water and air. They\'re the base of every food chain.' },
                { icon: '🐛', text: 'Animals that eat plants are called "herbivores" — like rabbits, deer and caterpillars.' },
                { icon: '🦊', text: 'Animals that eat other animals are called "carnivores" — like foxes, owls and sharks.' },
                { icon: '🐻', text: 'Animals that eat BOTH plants and animals are called "omnivores" — like bears, badgers and humans!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Build a Food Chain!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s build a food chain together using paper links! Each link is something that gets eaten by the next thing.',
              doTogether: 'Cut strips of paper. Write one creature or plant on each strip and make them into a chain — the sun feeds the grass, the grass feeds a rabbit, the rabbit feeds a fox. Hold the chain up and pull gently at each end. When you remove the middle link (the rabbit), the chain breaks — show how removing one animal can affect the whole chain!',
              talkAbout: '"What would happen if all the foxes disappeared?" (Too many rabbits → they eat all the grass → other animals have less food). This is a great way to talk about why every animal matters, even ones that seem scary.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-s-5-q1',
                type: 'mc',
                text: 'What do we call an animal that only eats plants?',
                options: [
                  { label: '🥩 Carnivore', value: 'wrong' },
                  { label: '🥗 Herbivore', value: 'correct' },
                  { label: '🍽️ Omnivore', value: 'wrong' },
                  { label: '🌿 Producer', value: 'wrong' },
                ],
                correctFb: '✅ Herbivore! From the Latin "herba" meaning plant. Rabbits, deer, cows and caterpillars are all herbivores.',
                wrongFb: 'A plant-only eater is called a herbivore — think of the word "herb" in there. Carnivores eat meat, omnivores eat both.',
              },
              {
                id: 'nw-s-5-q2',
                type: 'tf',
                text: 'True or False? All food chains start with a plant.',
                correctAnswer: 'True',
                correctFb: '✅ True! Plants are the only living things that can make food from sunlight. Everything else ultimately depends on them.',
                wrongFb: 'This is actually TRUE — every food chain on land starts with plants, because plants are the only things that can create food from sunlight.',
              },
              {
                id: 'nw-s-5-q3',
                type: 'mc',
                text: 'Humans are omnivores. What does that mean?',
                options: [
                  { label: '🥩 We only eat meat', value: 'wrong' },
                  { label: '🥗 We only eat plants', value: 'wrong' },
                  { label: '🍽️ We eat both plants and animals', value: 'correct' },
                  { label: '☀️ We make food from sunlight', value: 'wrong' },
                ],
                correctFb: '✅ We eat both! That makes humans very adaptable — we can survive on lots of different foods. Bears and badgers are omnivores too.',
                wrongFb: 'Omnivore means eating everything — both plants AND animals. "Omni" is Latin for "all". Humans eat a bit of everything!',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Food Chain Builder!',
              desc: 'Think of a simple food chain you might find near your home — like grass → snail → bird. Draw it or describe it to a grown-up. Can you think of what might eat the bird? Keep extending the chain as far as you can!',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
    ],
    climber: [
      {
        title: 'How Plants Grow',
        icon: '🌻',
        xp: 200,
        badge: {
          emoji: '🌻',
          title: 'Plant Scientist',
          desc: 'I understand how plants grow!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — The Science of Plants!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Plants are incredible living factories. Using just water, carbon dioxide from the air, and energy from sunlight, they build everything they need — leaves, roots, flowers and fruit. This process is called photosynthesis, and it also produces the oxygen we breathe. Every time you take a breath, thank a plant!',
              facts: [
                { icon: '🌿', text: 'Leaves are like solar panels — their green colour (from a chemical called chlorophyll) soaks up sunlight to power photosynthesis.' },
                { icon: '💧', text: 'Roots do two jobs: they anchor the plant in the soil AND suck up water and minerals. Some tree roots spread wider underground than the branches above!' },
                { icon: '🌸', text: 'Flowers exist to attract pollinators like bees and butterflies, which carry pollen from flower to flower so plants can make seeds.' },
                { icon: '🍎', text: 'Fruit is a seed container — it\'s often delicious so animals eat it, travel far away, and deposit the seeds elsewhere in their droppings. Clever plants!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Celery Colour Science!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to watch a plant drink! It\'s like magic — we\'ll see water travelling up a celery stalk in real time.',
              doTogether: 'Put a stick of celery (with leaves) in a glass of water with a few drops of food colouring mixed in. Leave it for a few hours or overnight. Cut the stalk at the bottom and look — you\'ll see coloured dots! Those are the tubes (xylem) that carried the water up. You can also try it with a white flower like a carnation.',
              talkAbout: '"How did the colour get all the way to the top of the celery?" Lead them to discover that plants can "drink" water upwards against gravity. Compare it to sucking through a straw — what\'s pulling it up?',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-c-1-q1',
                type: 'mc',
                text: 'What is the process called when plants make food using sunlight?',
                options: [
                  { label: '🔄 Respiration', value: 'wrong' },
                  { label: '☀️ Photosynthesis', value: 'correct' },
                  { label: '🌱 Germination', value: 'wrong' },
                  { label: '🌿 Pollination', value: 'wrong' },
                ],
                correctFb: '✅ Photosynthesis! Photo = light, synthesis = making. Plants literally build their food from light.',
                wrongFb: 'The word is photosynthesis — "photo" means light, and "synthesis" means making something. Plants make food from light!',
              },
              {
                id: 'nw-c-1-q2',
                type: 'mc',
                text: 'What gas do plants produce during photosynthesis that we need to breathe?',
                options: [
                  { label: '💨 Carbon dioxide', value: 'wrong' },
                  { label: '🌬️ Oxygen', value: 'correct' },
                  { label: '💧 Water vapour', value: 'wrong' },
                  { label: '🌫️ Nitrogen', value: 'wrong' },
                ],
                correctFb: '✅ Oxygen! Plants take in CO₂ and release oxygen — the complete opposite of what we do. We\'re perfectly matched!',
                wrongFb: 'Plants absorb carbon dioxide and release oxygen as a by-product of photosynthesis. That\'s the oxygen we breathe!',
              },
              {
                id: 'nw-c-1-q3',
                type: 'tf',
                text: 'True or False? Fruit is just for humans to eat — it has no purpose for the plant.',
                correctAnswer: 'False',
                correctFb: '✅ False! Fruit is a clever seed-delivery system. Animals eat it, travel far, then deposit the seeds in a new place. The plant spreads without moving!',
                wrongFb: 'Fruit has a brilliant purpose — it tempts animals to eat it so they carry the seeds far away. The plant is using animals as taxi drivers!',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Seed Investigator!',
              desc: 'Find three different types of seeds — maybe in fruit, on a dandelion, or in a plant pot. For each one, try to figure out HOW it travels: does it fly on the wind, get eaten by animals, or hitch a ride on fur or clothing? Report your findings!',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Weather & the Water Cycle',
        icon: '⛅',
        xp: 200,
        badge: {
          emoji: '⛅',
          title: 'Weather Watcher',
          desc: 'I understand weather and the water cycle!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Where Does Rain Come From?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'The rain that falls today might have been in the ocean last week — and in a dinosaur\'s body millions of years ago! Water travels in a constant cycle around our planet: evaporating into clouds, falling as rain, flowing to rivers and seas, then evaporating again. This never-ending journey is called the water cycle.',
              facts: [
                { icon: '☀️', text: 'Evaporation: Heat from the sun turns water from oceans, lakes and puddles into invisible water vapour that rises into the sky.' },
                { icon: '☁️', text: 'Condensation: High up, the air is cold. Water vapour cools and turns back into tiny droplets, forming clouds.' },
                { icon: '🌧️', text: 'Precipitation: When droplets in clouds get heavy enough, they fall as rain, snow, sleet or hail depending on the temperature.' },
                { icon: '🌊', text: 'Collection: Water flows into rivers, lakes and oceans — and soaks into the ground. Then the whole cycle starts again!' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Make a Mini Water Cycle!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to make our own water cycle in a bag — evaporation, condensation and rain all in one zip-lock bag!',
              doTogether: 'Half-fill a clear zip-lock bag with water and add a few drops of blue food colouring. Seal it well. Tape the bag to a sunny window. After an hour or so, you\'ll see water droplets forming on the top and sides — then they\'ll "rain" back down. That\'s evaporation then condensation happening right before your eyes!',
              talkAbout: '"Where did the water on the top of the bag come from — it started at the bottom!" Lead them to understand that heat made it evaporate and travel upward, then it cooled at the top and condensed. Just like the real water cycle!',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-c-2-q1',
                type: 'mc',
                text: 'What is the correct order of the water cycle?',
                options: [
                  { label: '🌧️ Rain → clouds → evaporation', value: 'wrong' },
                  { label: '☀️ Evaporation → condensation → precipitation', value: 'correct' },
                  { label: '☁️ Clouds → rain → evaporation → sun', value: 'wrong' },
                  { label: '💧 Condensation → evaporation → rain', value: 'wrong' },
                ],
                correctFb: '✅ That\'s it! Sun warms water → evaporation → water vapour rises → condensation into clouds → precipitation (rain/snow).',
                wrongFb: 'The cycle goes: sun heats water (evaporation) → vapour rises and cools into clouds (condensation) → falls as rain (precipitation).',
              },
              {
                id: 'nw-c-2-q2',
                type: 'tf',
                text: 'True or False? The Earth keeps getting new water from space.',
                correctAnswer: 'False',
                correctFb: '✅ False! Earth has essentially the same water it\'s always had — it just keeps recycling. The water you drink might be ancient!',
                wrongFb: 'Earth doesn\'t get significant new water — it just keeps recycling the same water through the water cycle. Your glass of water is very, very old!',
              },
              {
                id: 'nw-c-2-q3',
                type: 'mc',
                text: 'What causes water to evaporate from the ocean?',
                options: [
                  { label: '🌙 The moon\'s gravity', value: 'wrong' },
                  { label: '☀️ Heat from the sun', value: 'correct' },
                  { label: '💨 Wind blowing across the water', value: 'wrong' },
                  { label: '🌊 The waves moving', value: 'wrong' },
                ],
                correctFb: '✅ The sun\'s heat! Solar energy gives water molecules enough energy to escape into the air as vapour. No sun = much less evaporation.',
                wrongFb: 'It\'s the sun\'s heat that drives evaporation — it gives water molecules enough energy to break free and float upwards as vapour.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Cloud Spotter!',
              desc: 'Spend five minutes looking at the sky. Can you spot different types of clouds? Fluffy white ones (cumulus), flat grey layers (stratus), or wispy streaks (cirrus)? Take note of what the weather is like and whether the clouds match. Are there any rain clouds forming?',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Insects & Their Jobs',
        icon: '🐝',
        xp: 220,
        badge: {
          emoji: '🐝',
          title: 'Pollination Pro',
          desc: 'I understand what insects do for nature!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Why Insects Matter!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Insects are the most numerous animals on Earth — there are more species of beetles alone than all known plant species! They do vital jobs that the entire ecosystem depends on: pollinating plants, recycling dead matter, feeding birds and fish, and aerating soil. Without insects, most life on land would collapse.',
              facts: [
                { icon: '🐝', text: 'Around a third of all the food we eat depends on pollination by insects — fruits, vegetables, nuts and seeds. Bees are the most important pollinators.' },
                { icon: '🐜', text: 'Ants and beetles break down dead leaves and animals, returning nutrients to the soil. They\'re nature\'s recycling squad.' },
                { icon: '🦟', text: 'Even mosquitoes have a role — in the Arctic, they\'re a crucial food source for migrating birds and fish. Remove them and food chains collapse.' },
                { icon: '🦗', text: 'Insect numbers have declined by up to 75% in some areas in the last 30 years, mostly due to pesticides and habitat loss. This is a major environmental crisis.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Bee-Friendly Garden Planner!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Bees are struggling because there are fewer flowers for them to feed from. Let\'s design a bee-friendly patch to help them out!',
              doTogether: 'Look up (or draw from memory) five flowers that bees love — lavender, sunflowers, foxgloves, clover, and wildflowers like poppies. On paper, design a small "bee patch" — it could be a window box, a pot, or a garden corner. Consider: when do the flowers bloom? Try to plan so something is always flowering from spring to autumn.',
              talkAbout: '"Why do flowers have colours and scents?" Guide them: it\'s advertising! Flowers evolved bright colours and sweet smells specifically to attract pollinators. It\'s a partnership — flowers give nectar, insects do the pollination.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-c-3-q1',
                type: 'mc',
                text: 'Approximately what fraction of our food depends on insect pollination?',
                options: [
                  { label: '🍎 One tenth', value: 'wrong' },
                  { label: '🍎 One third', value: 'correct' },
                  { label: '🍎 Two thirds', value: 'wrong' },
                  { label: '🍎 Almost all of it', value: 'wrong' },
                ],
                correctFb: '✅ About one third! Without pollinators like bees, we\'d lose most fruits, vegetables and nuts from our diet.',
                wrongFb: 'Around a third of our food supply depends on insect pollination — that\'s why declining bee populations are such a serious issue.',
              },
              {
                id: 'nw-c-3-q2',
                type: 'tf',
                text: 'True or False? If all insects disappeared tomorrow, it would mostly be fine — we\'d just have fewer bugs.',
                correctAnswer: 'False',
                correctFb: '✅ False! Losing all insects would trigger a catastrophic collapse of food chains. Most birds, fish, and land animals depend on insects as food.',
                wrongFb: 'This would be catastrophic — insects are foundational to almost all terrestrial food chains. Their disappearance would cause mass extinctions up the food chain.',
              },
              {
                id: 'nw-c-3-q3',
                type: 'mc',
                text: 'Why have insect numbers fallen so dramatically in recent decades?',
                options: [
                  { label: '🌡️ Natural climate cycles', value: 'wrong' },
                  { label: '🌿 More trees being planted', value: 'wrong' },
                  { label: '🧪 Pesticides and habitat loss', value: 'correct' },
                  { label: '🐦 Too many birds eating them', value: 'wrong' },
                ],
                correctFb: '✅ Pesticides kill insects directly, while habitat loss destroys the wildflowers and woodland they need to survive.',
                wrongFb: 'The main culprits are pesticides (which kill insects along with pests) and habitat loss as wildflower meadows and hedgerows disappear.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Pollinator Count!',
              desc: 'Find a patch of flowers and watch for 5 minutes. Count how many insects visit. What types can you spot — bees, butterflies, hoverflies? Notice which flowers get the most visitors and try to figure out why (colour, scent, flower shape).',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Habitats & Adaptation',
        icon: '🦎',
        xp: 200,
        badge: {
          emoji: '🦎',
          title: 'Habitat Expert',
          desc: 'I understand habitats and adaptation!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Built for Where They Live!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Every animal has a habitat — the place that provides everything it needs to survive. Over millions of years, animals evolve features that make them perfectly suited to their habitat. A polar bear couldn\'t survive in a desert, and a camel would be useless in the Arctic. These special features are called adaptations.',
              facts: [
                { icon: '🐧', text: 'Penguins have waterproof feathers, blubber for warmth, and wings evolved into flippers for swimming — perfectly adapted to cold oceans.' },
                { icon: '🦒', text: 'Giraffes\' long necks evolved to reach leaves high in trees that other animals can\'t access — giving them food no one competes for.' },
                { icon: '🐠', text: 'Many deep-sea fish produce their own light (bioluminescence) — in the pitch-black deep ocean, it\'s used to find mates or lure prey.' },
                { icon: '🌵', text: 'Desert animals often hunt at night to avoid the heat, and have kidneys that concentrate urine to save every drop of water.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Design an Adapted Animal!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'You\'re a wildlife designer! Your challenge is to invent an animal perfectly adapted to a challenging habitat.',
              doTogether: 'Choose a habitat: deep ocean, Arctic tundra, or a hot rainforest. Draw or describe the perfect animal for that environment. Consider: what does it eat? How does it stay warm or cool? How does it find food? How does it hide from predators or catch prey? Share your designs and explain the adaptations.',
              talkAbout: '"Could your animal survive in a different habitat?" Explore how adaptations that are brilliant in one place would be useless or harmful elsewhere — a polar bear\'s thick fur would overheat it in the desert.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-c-4-q1',
                type: 'mc',
                text: 'What is the word for special features that help animals survive in their habitat?',
                options: [
                  { label: '🔄 Evolution', value: 'wrong' },
                  { label: '🦎 Adaptations', value: 'correct' },
                  { label: '🌿 Behaviour', value: 'wrong' },
                  { label: '🧬 Mutations', value: 'wrong' },
                ],
                correctFb: '✅ Adaptations! They develop over many generations as animals with helpful features survive and reproduce more successfully.',
                wrongFb: 'The word is adaptations — the special features that make an animal well-suited to its habitat, developed over thousands of generations.',
              },
              {
                id: 'nw-c-4-q2',
                type: 'tf',
                text: 'True or False? A giraffe\'s long neck evolved purely because giraffes wanted to reach high leaves.',
                correctAnswer: 'False',
                correctFb: '✅ False! Animals don\'t evolve by "wanting" things. Giraffes with slightly longer necks survived better, had more offspring, and over time the average neck length increased.',
                wrongFb: 'Evolution doesn\'t work by animals wanting features — giraffes with longer necks happened to survive better and have more offspring, so long necks gradually became the norm.',
              },
              {
                id: 'nw-c-4-q3',
                type: 'mc',
                text: 'Why do many desert animals hunt at night?',
                options: [
                  { label: '🌙 They prefer darkness', value: 'wrong' },
                  { label: '🌡️ To avoid the extreme heat of the day', value: 'correct' },
                  { label: '🦅 To hide from daytime predators', value: 'wrong' },
                  { label: '🌿 More food is available at night', value: 'wrong' },
                ],
                correctFb: '✅ To avoid the heat! Daytime desert temperatures can be fatal. Hunting at night when it\'s cooler is a survival adaptation.',
                wrongFb: 'Desert daytime temperatures can reach over 50°C — hunting at night when it\'s cooler is how desert animals survive extreme heat.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Adaptation Spotter!',
              desc: 'Find an animal near you — a bird, squirrel, snail, or even your pet. Pick two of its features and explain how each one helps it survive. For example: a bird\'s beak shape tells you what it eats. What can you work out from what you observe?',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Ecosystems & Balance',
        icon: '🌍',
        xp: 220,
        badge: {
          emoji: '🌍',
          title: 'Ecosystem Thinker',
          desc: 'I understand how ecosystems work!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Nature\'s Balancing Act!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'An ecosystem is a community of living things all depending on each other and their environment. Every species has a role to play, and removing even one can send the whole system off balance. In Yellowstone National Park, when wolves were reintroduced after 70 years, they changed not just the deer population — they changed the rivers.',
              facts: [
                { icon: '🐺', text: 'Wolves hunted deer near riverbanks. Deer moved away from rivers. Riverside plants recovered. Trees and shrubs stabilised the banks. Rivers ran cleaner and straighter. All because wolves came back!' },
                { icon: '🌊', text: 'This knock-on chain of events is called a "trophic cascade" — changes at the top of a food chain ripple all the way to the bottom.' },
                { icon: '🌿', text: 'Keystone species are animals whose presence is disproportionately important to an ecosystem — remove them and everything changes.' },
                { icon: '♻️', text: 'Decomposers (bacteria, fungi, worms) break down dead matter and return nutrients to the soil — without them, nutrients would be locked away forever.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — The Web of Life Game!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to build a web that shows how everything in an ecosystem is connected — and see what happens when we break a strand.',
              doTogether: 'Each person holds a ball of string and names an animal, plant or element (sun, water, soil). When two things are connected (sun feeds grass, grass feeds rabbits), pass the string between them while holding onto it. Once everyone is connected, one person "goes extinct" — they drop their string. Notice how everything connected to them is affected. This shows how interconnected ecosystems are.',
              talkAbout: '"What surprised you about what was connected?" Then discuss: "What would the most damaging species to lose be?" There\'s no single right answer — it\'s a great discussion!',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-c-5-q1',
                type: 'mc',
                text: 'What is an ecosystem?',
                options: [
                  { label: '🌿 A type of plant community', value: 'wrong' },
                  { label: '🌍 A community of living things interdependent with their environment', value: 'correct' },
                  { label: '🐾 A group of the same species living together', value: 'wrong' },
                  { label: '🗺️ A geographic region', value: 'wrong' },
                ],
                correctFb: '✅ An ecosystem includes ALL living things in an area plus their physical environment — soil, water, air — and the relationships between them all.',
                wrongFb: 'An ecosystem is broader than just plants or animals — it\'s the whole community of living things AND their environment, all interconnected.',
              },
              {
                id: 'nw-c-5-q2',
                type: 'tf',
                text: 'True or False? When wolves were reintroduced to Yellowstone, they only affected deer numbers.',
                correctAnswer: 'False',
                correctFb: '✅ False! The wolves triggered a trophic cascade that changed plant communities, stabilised riverbanks, and altered the course of rivers — changing the whole ecosystem.',
                wrongFb: 'The effect was much bigger — wolves changed deer behaviour, which allowed riverside plants to recover, which stabilised riverbanks and transformed the rivers. Everything connected!',
              },
              {
                id: 'nw-c-5-q3',
                type: 'mc',
                text: 'What do decomposers do in an ecosystem?',
                options: [
                  { label: '🍃 Produce food from sunlight', value: 'wrong' },
                  { label: '🐾 Hunt and eat other animals', value: 'wrong' },
                  { label: '♻️ Break down dead matter and return nutrients to the soil', value: 'correct' },
                  { label: '💧 Filter water in rivers', value: 'wrong' },
                ],
                correctFb: '✅ Decomposers are nature\'s recyclers — bacteria, fungi and worms break down dead plants and animals, releasing nutrients back into the soil.',
                wrongFb: 'Decomposers break down dead organic matter and return nutrients to the soil — without them, nutrients would pile up in dead material and never be reused.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Ecosystem Mapper!',
              desc: 'Pick a small patch of ground — even just a square metre of garden or park. List every living thing you can find in it: plants, insects, worms, birds visiting it, fungi. Draw lines connecting things that depend on each other. How many connections can you find?',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
    ],
    bloomer: [
      {
        title: 'Biomes of the World',
        icon: '🗺️',
        xp: 220,
        badge: {
          emoji: '🗺️',
          title: 'Biome Explorer',
          desc: 'I can identify and explain the world\'s major biomes!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Earth\'s Major Biomes!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'A biome is a large region of Earth with a particular climate and characteristic plants and animals. The same biome can appear on different continents — tropical rainforests, for example, grow in South America, Africa and Southeast Asia, all with remarkably similar species that evolved independently. Earth has around ten major biomes, each with unique biodiversity.',
              facts: [
                { icon: '🌳', text: 'Tropical rainforests cover just 6% of Earth\'s surface but contain over 50% of all species. They\'re biodiversity hotspots, most still unexplored.' },
                { icon: '🌾', text: 'Grasslands (savanna, prairie, steppe) cover nearly a third of Earth\'s land and support the world\'s largest animal migrations.' },
                { icon: '🌵', text: 'Deserts are defined by lack of rainfall, not necessarily heat — Antarctica is technically the world\'s largest desert.' },
                { icon: '🌊', text: 'The deep ocean is the largest biome by volume but least studied — more humans have walked on the moon than have visited the deepest ocean trenches.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Biome Trading Cards!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to create biome trading cards — each one has the key stats and characteristic species for one biome.',
              doTogether: 'Create a card for each of six biomes: tropical rainforest, desert, tundra, grassland, temperate forest, and coral reef. Each card should list: location (which continents?), temperature range, typical rainfall, and three characteristic animals. Compare cards — which biome would you most want to visit? Which is most at risk from climate change?',
              talkAbout: '"Why do rainforests have so many species?" Lead them to the climate: warm and wet year-round = perfect growing conditions = lots of food = lots of animals can specialise. Compare to the tundra: short growing season, few plant species, so fewer animal species.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-b-1-q1',
                type: 'mc',
                text: 'Tropical rainforests cover about 6% of Earth\'s land surface. What percentage of all species live there?',
                options: [
                  { label: '6%', value: 'wrong' },
                  { label: '25%', value: 'wrong' },
                  { label: '50%', value: 'correct' },
                  { label: '80%', value: 'wrong' },
                ],
                correctFb: '✅ Over 50%! Rainforests are extraordinarily biodiverse. The warm, wet, stable climate allows thousands of species to specialise and coexist.',
                wrongFb: 'Over half of all known species live in tropical rainforests despite them covering only a small fraction of the Earth\'s surface.',
              },
              {
                id: 'nw-b-1-q2',
                type: 'tf',
                text: 'True or False? Antarctica is the world\'s largest desert.',
                correctAnswer: 'True',
                correctFb: '✅ True! Deserts are defined by low precipitation, not heat. Antarctica receives almost no snow or rain each year, making it technically a polar desert.',
                wrongFb: 'This is true — Antarctica is the world\'s largest desert because deserts are defined by precipitation, not temperature. It receives almost no rain or snow annually.',
              },
              {
                id: 'nw-b-1-q3',
                type: 'mc',
                text: 'Which of the following is the least explored biome on Earth?',
                options: [
                  { label: '🌵 Hot desert', value: 'wrong' },
                  { label: '🌲 Boreal forest', value: 'wrong' },
                  { label: '🌊 Deep ocean', value: 'correct' },
                  { label: '🌾 Grassland', value: 'wrong' },
                ],
                correctFb: '✅ The deep ocean! More humans have been to the moon than to the deepest ocean trenches. Most of the deep sea remains unmapped and unstudied.',
                wrongFb: 'The deep ocean is by far the least explored — the extreme pressure, total darkness and inaccessibility mean most of it has never been studied.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Biome Comparison!',
              desc: 'Find images or video of two contrasting biomes — perhaps a rainforest and a desert, or a coral reef and tundra. List the adaptations animals in each need to survive. What\'s the single most challenging thing about surviving in each biome? Write up your comparison.',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Evolution & Natural Selection',
        icon: '🧬',
        xp: 240,
        badge: {
          emoji: '🧬',
          title: 'Evolution Expert',
          desc: 'I understand how evolution works!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — How Life Changes Over Time!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Life on Earth has been changing for 3.8 billion years. From the first single-celled organisms to the extraordinary diversity of species today, all life is related — connected by a vast family tree. The mechanism that drives this change is natural selection, an idea proposed by Charles Darwin in 1859 that changed science forever.',
              facts: [
                { icon: '🐦', text: 'Darwin noticed that finches on different Galapagos Islands had different beak shapes suited to different foods. Same ancestor, different adaptations — this helped him understand evolution.' },
                { icon: '🔄', text: 'Natural selection works like this: individuals vary slightly, those with helpful variations survive better, they have more offspring, and helpful traits spread through the population over generations.' },
                { icon: '🦕', text: 'Birds are technically dinosaurs — specifically, they evolved from theropod dinosaurs. When you see a pigeon, you\'re looking at a living dinosaur!' },
                { icon: '🧬', text: 'Humans share 98.7% of their DNA with chimpanzees, 85% with mice, and even 36% with daffodils. All life shares common ancestry.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Natural Selection Simulation!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to simulate natural selection using sweets and a timer — you\'ll be predators hunting for prey!',
              doTogether: 'Scatter different coloured sweets (or paper squares) on a patterned carpet or outside on grass. Give each player 30 seconds to pick up as many as they can (no looking before the timer starts). Count which colours were picked most — those colours were "easier to spot" and got "eaten". Repeat 3 rounds. The colours that survived are the "camouflaged" ones that would go on to reproduce. How does the population change?',
              talkAbout: '"Could a brightly-coloured animal ever survive?" Yes — in some environments bright colours signal poison (like dart frogs). Context matters. Selection pressure is different in different environments.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-b-2-q1',
                type: 'mc',
                text: 'What is natural selection?',
                options: [
                  { label: '🌿 Animals choosing to adapt to their environment', value: 'wrong' },
                  { label: '🔄 Individuals with helpful traits surviving and passing them on', value: 'correct' },
                  { label: '🧬 Random changes to DNA', value: 'wrong' },
                  { label: '🐾 Animals competing to be the strongest', value: 'wrong' },
                ],
                correctFb: '✅ Exactly! Individuals with slightly helpful variations survive better, reproduce more, and pass on those traits. Over generations, helpful traits become common.',
                wrongFb: 'Natural selection isn\'t animals choosing to change — it\'s that individuals with helpful variations happen to survive and reproduce better, passing on those traits.',
              },
              {
                id: 'nw-b-2-q2',
                type: 'tf',
                text: 'True or False? Birds evolved from dinosaurs.',
                correctAnswer: 'True',
                correctFb: '✅ True! Birds are living dinosaurs, descended from theropod dinosaurs. The line between "bird" and "dinosaur" is blurry — Archaeopteryx had both feathers and dinosaur teeth!',
                wrongFb: 'This is true — birds are actually living dinosaurs! They descended from feathered theropod dinosaurs and are more closely related to T-Rex than T-Rex was to Stegosaurus.',
              },
              {
                id: 'nw-b-2-q3',
                type: 'mc',
                text: 'Why did Darwin\'s observation of finch beaks on different Galapagos islands matter?',
                options: [
                  { label: '🐦 He discovered a new species of finch', value: 'wrong' },
                  { label: '🔬 He saw that species could change to suit different environments', value: 'correct' },
                  { label: '🌍 He proved all islands have different wildlife', value: 'wrong' },
                  { label: '🍎 He learned about different foods birds eat', value: 'wrong' },
                ],
                correctFb: '✅ He realised the same ancestral finch had changed over generations to fill different ecological niches on each island — evidence that species could change over time.',
                wrongFb: 'The key insight was that one ancestral finch species had diversified into many, each with a beak suited to a different food source — evidence species could change over time.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Common Ancestor Hunt!',
              desc: 'Pick two very different animals — say, a whale and a bat. Research their skeletons and look for similarities in their limb bones. What does this tell you about their shared ancestry? Draw the bones side by side and annotate the similarities.',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'The Carbon Cycle & Climate',
        icon: '🌡️',
        xp: 240,
        badge: {
          emoji: '🌡️',
          title: 'Carbon Cycle Scientist',
          desc: 'I understand the carbon cycle and its role in climate!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Carbon: The Building Block of Life!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Carbon is the fundamental building block of all life on Earth — it\'s in every cell of your body, in every plant, in every animal. Carbon moves constantly between living things, the atmosphere, oceans and rocks in what\'s called the carbon cycle. Human activity has disrupted this cycle, which is why we\'re experiencing rapid climate change.',
              facts: [
                { icon: '🌿', text: 'Plants absorb CO₂ from the atmosphere during photosynthesis, locking carbon into their tissues. Forests are giant carbon stores — called "carbon sinks".' },
                { icon: '🔥', text: 'When we burn fossil fuels (coal, oil, gas), we release carbon that was locked underground for millions of years — adding it to the atmosphere all at once.' },
                { icon: '🌡️', text: 'Carbon dioxide and methane act like a greenhouse — they trap heat in the atmosphere. More greenhouse gases = warmer planet.' },
                { icon: '🌊', text: 'Oceans absorb about 30% of human CO₂ emissions, but this makes seawater more acidic — threatening coral reefs and shellfish that build shells from calcium carbonate.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Carbon Store Audit!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to audit the carbon stores in and around our home — everything from the wood in our furniture to the food in the kitchen.',
              doTogether: 'Walk around the house and identify things that contain carbon: wooden furniture (carbon from trees), cotton clothing (carbon from plants), food (all food contains carbon), plastic (carbon from fossil fuels), books (carbon from wood pulp). Try to trace each item back to its carbon source. Then discuss: when each item eventually decomposes or is burned, where does that carbon go?',
              talkAbout: '"What\'s the difference between carbon in wood furniture and carbon in petrol?" The furniture will slowly return to carbon naturally over decades; burning petrol dumps its carbon into the atmosphere instantly — that speed is the problem.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-b-3-q1',
                type: 'mc',
                text: 'Why are forests called "carbon sinks"?',
                options: [
                  { label: '🌳 They produce carbon as they grow', value: 'wrong' },
                  { label: '🌿 They absorb and store carbon from the atmosphere', value: 'correct' },
                  { label: '💧 They sink into the ground and take carbon with them', value: 'wrong' },
                  { label: '🔄 They recycle carbon between animals', value: 'wrong' },
                ],
                correctFb: '✅ Carbon sinks absorb more carbon than they release. Trees pull CO₂ from the air during photosynthesis and lock the carbon into wood, roots and soil.',
                wrongFb: 'Forests are carbon sinks because trees absorb CO₂ during photosynthesis and store that carbon in their wood, roots and surrounding soil.',
              },
              {
                id: 'nw-b-3-q2',
                type: 'tf',
                text: 'True or False? Burning fossil fuels releases carbon that has been stored underground for millions of years.',
                correctAnswer: 'True',
                correctFb: '✅ True! Coal, oil and gas formed from ancient organisms over millions of years. Burning them releases all that stored carbon into the atmosphere in a geological instant.',
                wrongFb: 'This is true — fossil fuels are ancient carbon stores. When burned, we release in seconds carbon that took millions of years to accumulate underground.',
              },
              {
                id: 'nw-b-3-q3',
                type: 'mc',
                text: 'What happens when oceans absorb too much CO₂?',
                options: [
                  { label: '🌊 The water becomes warmer', value: 'wrong' },
                  { label: '🧪 The water becomes more acidic', value: 'correct' },
                  { label: '🐟 Fish grow larger', value: 'wrong' },
                  { label: '🌿 More seaweed grows', value: 'wrong' },
                ],
                correctFb: '✅ Ocean acidification! CO₂ dissolved in seawater forms carbonic acid. This makes it harder for shellfish and corals to build their calcium carbonate shells and skeletons.',
                wrongFb: 'CO₂ dissolved in seawater forms carbonic acid, making oceans more acidic — threatening coral reefs and shellfish that rely on calcium carbonate to build their structures.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Carbon Footprint Investigator!',
              desc: 'Think about three things you did today: what you ate, how you travelled somewhere, and something you bought or used. For each one, research or estimate the carbon footprint. Which activity had the biggest carbon impact? What one change could reduce it most?',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Biodiversity & Conservation',
        icon: '🦁',
        xp: 240,
        badge: {
          emoji: '🦁',
          title: 'Conservation Champion',
          desc: 'I understand biodiversity and why it matters!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Why Variety in Nature Matters!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Biodiversity refers to the variety of life on Earth — species diversity, genetic diversity within species, and ecosystem diversity. High biodiversity makes ecosystems resilient: if one species disappears, others can fill its role. We\'re currently living through the sixth mass extinction, with species disappearing at rates 1,000 times the natural background rate — mostly caused by human activity.',
              facts: [
                { icon: '🐾', text: 'We\'ve identified about 8.7 million species on Earth, but estimates suggest there may be 1 trillion species in total — meaning we\'ve only found less than 1% of life on our planet.' },
                { icon: '🌿', text: 'Over 25% of all modern medicines were originally discovered in rainforest plants — yet we\'re destroying rainforests before we\'ve even studied most species there.' },
                { icon: '🐝', text: 'The Irish Potato Famine of the 1840s killed over a million people partly because farmers grew only one genetic variety of potato — when a disease struck, there was no diversity to resist it.' },
                { icon: '♻️', text: 'Rewilding — reintroducing native species to areas from which they\'ve been removed — has shown remarkable results in restoring biodiversity and ecosystem function.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Extinction Timeline!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Let\'s look at the history of extinctions on Earth — from natural extinctions to the current crisis — and see what changed when humans arrived.',
              doTogether: 'Create a timeline on a long piece of paper. Mark: 66 million years ago (dinosaur extinction), 10,000 years ago (megafauna extinctions — mammoths, cave lions), 1600s onwards (dodo, great auk, Tasmanian tiger), and today (current extinction rate). Discuss what changed: the first was an asteroid, the rest increasingly linked to human activity. Research one extinct species together — what did it look like, and why did it disappear?',
              talkAbout: '"Is extinction always bad?" (Natural background extinction is normal — it\'s the rate and cause that matters.) "What would the world look like if humans had never existed?" This isn\'t guilt — it\'s understanding our scale of impact.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-b-4-q1',
                type: 'mc',
                text: 'We\'ve identified about 8.7 million species. What fraction of total estimated life on Earth is that?',
                options: [
                  { label: '🐾 About half', value: 'wrong' },
                  { label: '🔬 About a quarter', value: 'wrong' },
                  { label: '🌿 Less than 1%', value: 'correct' },
                  { label: '🌍 About 10%', value: 'wrong' },
                ],
                correctFb: '✅ Less than 1%! There may be a trillion species on Earth, and we\'ve only catalogued a tiny fraction — mostly in accessible environments we can easily study.',
                wrongFb: 'We\'ve found less than 1% of estimated species — the vast majority live in places we\'ve barely explored, like deep ocean, rainforest canopies, and soil microbiomes.',
              },
              {
                id: 'nw-b-4-q2',
                type: 'tf',
                text: 'True or False? Having only one genetic variety of a crop is fine, as long as it\'s a good variety.',
                correctAnswer: 'False',
                correctFb: '✅ False! The Irish Potato Famine showed the danger: one disease wiped out the single variety grown, causing catastrophic famine. Genetic diversity is insurance against disaster.',
                wrongFb: 'This is dangerously false — the Irish Potato Famine was caused partly by genetic uniformity. One disease killed the single variety grown. Diversity protects against this.',
              },
              {
                id: 'nw-b-4-q3',
                type: 'mc',
                text: 'What is "rewilding"?',
                options: [
                  { label: '🌿 Letting gardens grow wild', value: 'wrong' },
                  { label: '🐺 Reintroducing native species to restore ecosystems', value: 'correct' },
                  { label: '🌍 Creating nature reserves', value: 'wrong' },
                  { label: '🔬 Studying wild animals in labs', value: 'wrong' },
                ],
                correctFb: '✅ Rewilding means reintroducing species that were once native, allowing natural processes to recover. Wolves in Yellowstone is a famous example of its dramatic success.',
                wrongFb: 'Rewilding is the reintroduction of native species that have been lost from an area, allowing natural ecological processes to re-establish themselves.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Local Biodiversity Survey!',
              desc: 'Count how many different plant species you can find in a 10-metre radius of your home. Don\'t worry about names — just count distinct types by leaf shape, flower colour, etc. Compare your count to what you might find in a species-rich habitat like a wildflower meadow. What practical thing could you do to increase local biodiversity?',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Human Impact on Nature',
        icon: '🏭',
        xp: 240,
        badge: {
          emoji: '🏭',
          title: 'Environmental Analyst',
          desc: 'I can evaluate human impact on the natural world!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Our Footprint on the Planet!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Humans have transformed the natural world more than any other species in Earth\'s history. In the last 50 years alone, human population has doubled, wild animal populations have fallen by 69%, and around half of the world\'s topsoil has been lost to poor farming practices. But humans also have the unique capacity to understand and reverse this damage.',
              facts: [
                { icon: '🌳', text: 'Deforestation: We\'ve cleared about half of Earth\'s original forests. Forests are cleared mainly for agriculture — particularly cattle farming and palm oil plantations.' },
                { icon: '🌊', text: 'Ocean plastic: Around 8 million tonnes of plastic enters the ocean each year. Microplastics have now been found in the deepest ocean trenches and in human blood.' },
                { icon: '🌾', text: 'Industrial agriculture: Pesticides, fertiliser run-off and soil erosion have degraded farmland globally, while monocultures have drastically reduced agricultural biodiversity.' },
                { icon: '🌱', text: 'Nature recovery: Despite damage, restoration is possible — rewilding projects, marine protected areas, and regenerative farming show impressive results when given the chance.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Your Food\'s Hidden Impact!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Did you know that what you eat has a bigger environmental impact than how much you travel? Let\'s investigate the real cost of some common foods.',
              doTogether: 'Look at the week\'s meals together. For three or four foods, research the environmental impact: beef has a huge carbon footprint (land use, methane from cattle); avocados require large amounts of water; some fish are overfished; chocolate often involves deforestation. Then look for lower-impact alternatives for the same meals. This isn\'t about guilt — it\'s about informed choices.',
              talkAbout: '"Is it possible to eat well and have a lower impact?" Yes — plant-rich diets generally have much lower footprints. But also discuss: not everyone has the same food choices, and individual action is less powerful than policy change.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-b-5-q1',
                type: 'mc',
                text: 'What is the primary driver of deforestation worldwide?',
                options: [
                  { label: '🏠 Urban development', value: 'wrong' },
                  { label: '🌾 Agriculture (especially cattle and palm oil)', value: 'correct' },
                  { label: '🌳 Timber for furniture', value: 'wrong' },
                  { label: '⛏️ Mining', value: 'wrong' },
                ],
                correctFb: '✅ Agriculture drives most deforestation — particularly clearing land for cattle grazing and palm oil plantations, often in tropical regions.',
                wrongFb: 'Agriculture — especially cattle ranching and palm oil production — is the primary driver of deforestation, accounting for around 80% of tropical deforestation.',
              },
              {
                id: 'nw-b-5-q2',
                type: 'tf',
                text: 'True or False? Wild animal populations have roughly stayed the same over the last 50 years.',
                correctAnswer: 'False',
                correctFb: '✅ False! Wild animal populations have fallen by an average of 69% since 1970, according to the WWF Living Planet Report.',
                wrongFb: 'Sadly false — wild animal populations have fallen by an average of 69% since 1970. This is one of the starkest measures of human impact on the natural world.',
              },
              {
                id: 'nw-b-5-q3',
                type: 'mc',
                text: 'Microplastics have been found in which surprising places?',
                options: [
                  { label: '🌊 Only near coastal cities', value: 'wrong' },
                  { label: '🏔️ The deepest ocean trenches and human blood', value: 'correct' },
                  { label: '🧊 Only in Arctic ice', value: 'wrong' },
                  { label: '🌿 Only in river sediments', value: 'wrong' },
                ],
                correctFb: '✅ Microplastics are now essentially everywhere — in the deepest ocean trenches, mountain air, Arctic ice, drinking water, and most recently in human blood.',
                wrongFb: 'Microplastics have been found almost everywhere — including the deepest ocean trenches, the top of Mount Everest, and inside human bodies.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Plastic Audit!',
              desc: 'For one day, record every piece of single-use plastic you encounter — packaging, bottles, bags, wrappers. At the end of the day, count them. Multiply by 365 — that\'s your household\'s potential single-use plastic per year. Which category is biggest? What one change would have the most impact?',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
    ],
    grower: [
      {
        title: 'Climate Systems & Tipping Points',
        icon: '🌐',
        xp: 260,
        badge: {
          emoji: '🌐',
          title: 'Climate Systems Analyst',
          desc: 'I can explain climate systems and tipping points!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Earth\'s Climate Machine!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Earth\'s climate is not a simple thermostat — it\'s an extraordinarily complex system of interconnected feedbacks. The same natural mechanisms that kept Earth stable for millions of years can, when pushed too far, create reinforcing loops that amplify change. Climate scientists are particularly concerned about "tipping points" — thresholds beyond which changes become self-sustaining and irreversible.',
              facts: [
                { icon: '🌊', text: 'The Atlantic Meridional Overturning Circulation (AMOC) — the "conveyor belt" current that keeps Northern Europe warm — is weakening due to melting ice diluting salty water. If it collapses, Northern Europe could experience a dramatic temperature drop.' },
                { icon: '🌡️', text: 'Permafrost tipping point: Melting Arctic permafrost releases stored methane (a greenhouse gas 80x more potent than CO₂), which warms the planet, which melts more permafrost — a self-amplifying loop.' },
                { icon: '🌿', text: 'Amazon dieback: If the Amazon loses enough tree cover, it can no longer generate its own rainfall — potentially triggering a shift from rainforest to savanna, releasing stored carbon and decimating biodiversity.' },
                { icon: '📊', text: 'The IPCC (Intergovernmental Panel on Climate Change) reviews thousands of scientific papers and provides the most authoritative consensus on climate science — its reports form the basis of international climate agreements.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Feedback Loop Mapping!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to map positive and negative feedback loops in the climate system — and understand why "positive" isn\'t always good news.',
              doTogether: 'Draw a climate feedback diagram together. Start with "More CO₂ → warmer temperatures". Then map: warmer temperatures → melting Arctic ice → less white ice to reflect sunlight → Earth absorbs more heat → warmer temperatures (a positive/amplifying feedback loop). Then contrast with a negative feedback loop: warmer temperatures → more water evaporation → more clouds → some clouds reflect sunlight → slight cooling effect. Discuss which loop is currently dominant.',
              talkAbout: '"In science, does \'positive feedback\' mean good or bad?" Neither — it means amplifying, self-reinforcing. Negative feedback is stabilising. Most of Earth\'s historic climate stability came from negative feedbacks. The concern is that we\'re activating positive feedbacks that could overwhelm natural stabilisers.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-g-1-q1',
                type: 'mc',
                text: 'In climate science, a "tipping point" refers to...',
                options: [
                  { label: '🌡️ The maximum safe temperature rise', value: 'wrong' },
                  { label: '🔄 A threshold beyond which change becomes self-sustaining', value: 'correct' },
                  { label: '📊 The point when countries agree to act', value: 'wrong' },
                  { label: '🌊 The sea level rise at which flooding becomes severe', value: 'wrong' },
                ],
                correctFb: '✅ A tipping point is where the system crosses a threshold and then drives itself forward — like a ball going over a hilltop, rolling down under its own momentum.',
                wrongFb: 'A tipping point is a threshold: once crossed, the system self-accelerates without needing further external input. It\'s the point of no easy return.',
              },
              {
                id: 'nw-g-1-q2',
                type: 'mc',
                text: 'Why is melting permafrost a particularly concerning climate feedback?',
                options: [
                  { label: '🌊 It raises sea levels dramatically', value: 'wrong' },
                  { label: '🔥 It releases methane, which warms the planet, which melts more permafrost', value: 'correct' },
                  { label: '🌿 It destroys habitats for Arctic animals', value: 'wrong' },
                  { label: '💧 It contaminates fresh water sources', value: 'wrong' },
                ],
                correctFb: '✅ It\'s a self-amplifying positive feedback loop: permafrost melts → releases methane → warms the planet → melts more permafrost. Once this accelerates, it\'s very difficult to stop.',
                wrongFb: 'Permafrost thaw releases methane (80x more potent than CO₂), which warms the planet further, which melts more permafrost — a self-reinforcing feedback loop that could become unstoppable.',
              },
              {
                id: 'nw-g-1-q3',
                type: 'tf',
                text: 'True or False? In climate science, "positive feedback" means a beneficial development.',
                correctAnswer: 'False',
                correctFb: '✅ False! In systems science, "positive" means amplifying or self-reinforcing, not beneficial. Positive feedbacks amplify change — which in the context of climate warming is dangerous.',
                wrongFb: 'In science, "positive feedback" means self-amplifying, not good. A positive climate feedback amplifies warming — which is generally the opposite of good.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Tipping Point Research!',
              desc: 'Research one climate tipping point in depth — the AMOC slowdown, Amazon dieback, Greenland ice sheet, or West Antarctic Ice Sheet. For your chosen tipping point: what is the current status? What would crossing it mean for the planet? What would it take to avoid it? Prepare a clear summary as if briefing a policy maker.',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Genetics, DNA & Heredity',
        icon: '🧬',
        xp: 260,
        badge: {
          emoji: '🧬',
          title: 'Genetics Pioneer',
          desc: 'I understand genetics, DNA and heredity!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — The Code of Life!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Every cell in your body contains a complete set of instructions for building you — encoded in a molecule called DNA. This molecule, discovered in 1953, is structured as a double helix and contains about 3 billion base pairs. All life on Earth uses essentially the same genetic code, which is one of the strongest pieces of evidence for common ancestry.',
              facts: [
                { icon: '🔬', text: 'If you stretched out all the DNA in a single human cell, it would be about 2 metres long. Your body has around 37 trillion cells — all that DNA lined up end to end would reach the sun and back about 60 times.' },
                { icon: '🧬', text: 'DNA is made of just four bases: Adenine, Thymine, Cytosine and Guanine (A, T, C, G). The sequence of these four letters encodes all the instructions for life.' },
                { icon: '👨‍👩‍👧', text: 'You inherit half your DNA from each parent — but due to genetic recombination during reproduction, you\'re genetically unique even from siblings.' },
                { icon: '🐭', text: 'Humans share 85% of their DNA with mice, 60% with fruit flies, 36% with daffodils, and 31% with brewer\'s yeast. The shared genes are often related to basic cellular processes all life needs.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Trait Detective!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to investigate which of your physical traits are inherited — and which are more environmental.',
              doTogether: 'Make a chart of traits: earlobe attachment (free or attached), ability to roll your tongue, dominant hand, eye colour, hair curl. Check each family member present. Try to trace traits through two generations if possible. Then discuss which traits are genetic and which might be environmental — and why some traits are more heritable than others. Note: tongue rolling is actually not as simple as textbooks suggest!',
              talkAbout: '"Does your DNA determine everything about you?" No — genetics sets possibilities and constraints, but environment, experience and choices shape who you are. This is the "nature vs nurture" debate, though most scientists now say it\'s always both.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-g-2-q1',
                type: 'mc',
                text: 'DNA is made of four bases. What do the letters stand for?',
                options: [
                  { label: '🔤 Amino, Thymine, Carbon, Glycine', value: 'wrong' },
                  { label: '🧬 Adenine, Thymine, Cytosine, Guanine', value: 'correct' },
                  { label: '🔬 Adenine, Tryptophan, Chlorine, Glucose', value: 'wrong' },
                  { label: '💊 Arginine, Thiamine, Copper, Galactose', value: 'wrong' },
                ],
                correctFb: '✅ Adenine, Thymine, Cytosine and Guanine — A, T, C, G. These four letters, arranged in sequences 3 billion units long, encode all the instructions for a human being.',
                wrongFb: 'The four DNA bases are Adenine, Thymine, Cytosine and Guanine — A, T, C, G. The sequence of these bases is the "code" that carries genetic information.',
              },
              {
                id: 'nw-g-2-q2',
                type: 'tf',
                text: 'True or False? If you stretched the DNA from one human cell, it would be about 2 metres long.',
                correctAnswer: 'True',
                correctFb: '✅ True! The DNA in a single cell is incredibly tightly packed. If stretched out it would be about 2 metres — yet it fits inside a nucleus just 6 micrometres wide.',
                wrongFb: 'This is true — DNA is extraordinarily compact. Each cell contains 2 metres of DNA tightly coiled into a nucleus you can\'t see with the naked eye.',
              },
              {
                id: 'nw-g-2-q3',
                type: 'mc',
                text: 'What does sharing 36% of our DNA with daffodils tell us?',
                options: [
                  { label: '🌸 Humans evolved from plants', value: 'wrong' },
                  { label: '🌿 That shared DNA runs very basic cellular processes common to all life', value: 'correct' },
                  { label: '🔬 Our DNA tests are inaccurate', value: 'wrong' },
                  { label: '🧬 Daffodils are more complex than we thought', value: 'wrong' },
                ],
                correctFb: '✅ Shared DNA relates to fundamental life processes — cell division, energy production, gene reading — that all complex life uses. We share common ancestry with all life on Earth.',
                wrongFb: 'The shared genes control basic cellular processes that all complex life needs — like how to copy DNA, produce energy, and build cells. It\'s evidence of our shared ancestry with all life.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Family Genetics Map!',
              desc: 'Interview family members (parents, grandparents if possible) about heritable traits. Create a two-generation genetics chart tracking 5 traits. For each trait, try to identify whether it appears to be dominant or recessive. Write up your findings and identify anything surprising or unexpected in the patterns.',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Sustainability & Systems Thinking',
        icon: '♻️',
        xp: 260,
        badge: {
          emoji: '♻️',
          title: 'Systems Thinker',
          desc: 'I can apply systems thinking to sustainability challenges!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — Thinking in Systems!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'Many of the world\'s most pressing environmental problems are "systems problems" — where causes and effects are separated in time and space, and where simple solutions often backfire. Sustainability isn\'t just about recycling or switching to LED bulbs: it requires understanding the complex web of economic, social and ecological systems that generate unsustainable outcomes in the first place.',
              facts: [
                { icon: '🔄', text: 'The "Jevons Paradox": When something becomes more efficient, we often use more of it, not less. More fuel-efficient cars can lead to MORE total fuel use if people drive further or buy bigger cars.' },
                { icon: '🌾', text: 'Regenerative agriculture doesn\'t just reduce harm — it can actively restore soil health, sequester carbon, and increase biodiversity while still producing food. It\'s an example of "restorative" rather than just "less bad" thinking.' },
                { icon: '🏙️', text: 'Cities are the world\'s most resource-efficient form of human settlement per capita — dense urban living typically has lower carbon footprints than rural lifestyles due to shared infrastructure.' },
                { icon: '🌱', text: 'The "doughnut economics" model argues we need to meet the needs of all people within the means of the living planet — a space between social foundations and ecological ceilings.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Circular Economy Design!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'In a circular economy, waste from one process becomes the input for another — like nature. Let\'s redesign a product using circular principles.',
              doTogether: 'Pick a common item: a mobile phone, a pair of trainers, or a t-shirt. Map its current linear lifecycle: extract raw materials → manufacture → use → dispose. Then redesign it with circular principles: Could it be designed for disassembly and reuse? Could waste from making it feed another process? Could it be leased rather than sold, so the manufacturer is incentivised to make it last? Draw the circular system.',
              talkAbout: '"Who benefits most from us buying new things frequently?" And: "If companies had to take back products at end of life, how would that change what they make?" Systems change requires changing incentives, not just individual behaviour.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-g-3-q1',
                type: 'mc',
                text: 'What is the "Jevons Paradox"?',
                options: [
                  { label: '🌿 Efficiency improvements always reduce total resource use', value: 'wrong' },
                  { label: '🔄 Efficiency improvements can lead to MORE total resource use, not less', value: 'correct' },
                  { label: '⚡ Renewable energy is paradoxically more expensive', value: 'wrong' },
                  { label: '♻️ Recycling sometimes increases waste', value: 'wrong' },
                ],
                correctFb: '✅ When something becomes more efficient (and cheaper per unit), demand often rises enough to increase total use. This is a critical insight for sustainability policy.',
                wrongFb: 'The Jevons Paradox is the counterintuitive finding that efficiency improvements often increase total resource use, because cheaper usage leads to increased consumption.',
              },
              {
                id: 'nw-g-3-q2',
                type: 'tf',
                text: 'True or False? Dense cities typically have higher carbon footprints per person than rural areas.',
                correctAnswer: 'False',
                correctFb: '✅ False! Dense cities are actually more carbon-efficient per person — shared infrastructure, public transport, smaller homes and shorter distances all reduce per-capita footprints.',
                wrongFb: 'Counterintuitively, dense cities are more carbon-efficient per capita — shared walls, buildings, transport and utilities mean much less energy per person than dispersed rural living.',
              },
              {
                id: 'nw-g-3-q3',
                type: 'mc',
                text: 'In a circular economy, waste from one process...',
                options: [
                  { label: '🗑️ Is minimised and sent to landfill efficiently', value: 'wrong' },
                  { label: '🔄 Becomes the input for another process', value: 'correct' },
                  { label: '♻️ Is recycled back into the same product', value: 'wrong' },
                  { label: '💨 Is converted to energy by burning', value: 'wrong' },
                ],
                correctFb: '✅ In a circular economy, outputs from one process become inputs for another — modelled on how natural ecosystems work. Nothing is truly "wasted".',
                wrongFb: 'The circular economy principle is that outputs from one process feed another — like how fallen leaves become soil nutrients. True circularity means nothing is waste.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Systems Problem Analysis!',
              desc: 'Pick one local environmental issue — plastic in a local park, a polluted stream, loss of a green space. Map the system: who are the actors? What incentives drive the problem? What would need to change to solve it permanently? Go beyond blaming individuals — identify the system structures that produce the problem. Write a one-page analysis.',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'Ocean Science & Marine Ecosystems',
        icon: '🐋',
        xp: 260,
        badge: {
          emoji: '🐋',
          title: 'Marine Biologist',
          desc: 'I have deep knowledge of ocean science and marine ecosystems!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — The Ocean\'s Hidden World!',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'The ocean covers 71% of Earth\'s surface and contains 97% of its water, yet we\'ve explored less than 20% of it. The deep sea is the largest habitat on Earth and likely contains millions of species we\'ve never seen. The ocean also regulates Earth\'s climate — absorbing heat and CO₂, generating half of Earth\'s oxygen, and driving weather patterns through massive current systems.',
              facts: [
                { icon: '🦑', text: 'The deep ocean is under enormous pressure — at the deepest point (Challenger Deep, 11km down), the pressure is 1,100 times greater than at sea level. Life there has extraordinary adaptations: no eyes, bioluminescence, bodies that can compress.' },
                { icon: '🐳', text: 'Whales play a crucial role in ocean carbon cycling — their iron-rich excretions fertilise phytoplankton, which captures CO₂. When whales recover from hunting, they help the ocean absorb more carbon.' },
                { icon: '🌡️', text: 'The ocean has absorbed 90% of the excess heat from climate change — slowing warming on land but causing ocean warming, coral bleaching, and species range shifts.' },
                { icon: '🌊', text: 'Ocean thermohaline circulation (the "great conveyor belt") moves water around the globe over thousands of years, distributing heat and nutrients — and its disruption is one of the most feared climate tipping points.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — Ocean Layer Investigation!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'We\'re going to map the ocean\'s depth zones and the extraordinary creatures that live in each one.',
              doTogether: 'Draw a vertical cross-section of the ocean from surface to 11km deep. Mark the depth zones: sunlit zone (0-200m), twilight zone (200-1000m), midnight zone (1000-4000m), abyssal zone (4000-6000m), hadal zone (trenches, 6000m+). For each zone, research one creature adapted to that zone — considering how pressure, light, temperature and food availability change with depth. The contrasts should be extraordinary.',
              talkAbout: '"Why do you think we\'ve explored more of space than the deep ocean?" Cost, pressure, darkness, and distance from land all play a role. But technology is catching up — autonomous submarines are now mapping the deep sea in unprecedented detail.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-g-4-q1',
                type: 'mc',
                text: 'The ocean has absorbed approximately what fraction of excess heat from climate change?',
                options: [
                  { label: '🌡️ About 20%', value: 'wrong' },
                  { label: '🌡️ About 50%', value: 'wrong' },
                  { label: '🌡️ About 90%', value: 'correct' },
                  { label: '🌡️ About 60%', value: 'wrong' },
                ],
                correctFb: '✅ About 90%! The ocean has been an enormous buffer against climate change. Without it, land temperatures would have risen far more dramatically already.',
                wrongFb: 'The ocean has absorbed around 90% of the excess heat from climate change — this is why sea temperatures are rising and coral bleaching is occurring at scale.',
              },
              {
                id: 'nw-g-4-q2',
                type: 'tf',
                text: 'True or False? Whale excretions are environmentally harmful to the ocean.',
                correctAnswer: 'False',
                correctFb: '✅ False! Whale excretions are rich in iron, which fertilises phytoplankton near the surface. More phytoplankton = more carbon absorbed. Whales are actually climate allies!',
                wrongFb: 'Whale excretions are actually enormously beneficial — rich in iron, they fertilise phytoplankton blooms that capture CO₂. Recovering whale populations help the ocean absorb more carbon.',
              },
              {
                id: 'nw-g-4-q3',
                type: 'mc',
                text: 'What makes the hadal zone (ocean trenches) so challenging for life?',
                options: [
                  { label: '🧊 Extreme cold only', value: 'wrong' },
                  { label: '🌑 Complete darkness only', value: 'wrong' },
                  { label: '🔴 Extreme pressure, total darkness, near-freezing temperatures, and scarce food', value: 'correct' },
                  { label: '🌊 Strong currents and turbulence', value: 'wrong' },
                ],
                correctFb: '✅ The hadal zone combines multiple extreme challenges — crushing pressure (1,100× surface), total darkness, near-freezing temperatures, and food arriving only as "marine snow" sinking from above.',
                wrongFb: 'Life in ocean trenches faces multiple simultaneous challenges: 1,100× surface pressure, zero light, near-freezing temperatures, and scarce food. Adaptations there are extraordinary.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Ocean Health Assessment!',
              desc: 'Research the current health status of one specific ocean ecosystem — a named coral reef system, a specific sea, or a marine protected area. Find: current status, main threats, conservation measures in place, and trajectory (improving or declining?). If you\'re near the coast, visit and observe what you can. Write a health assessment report.',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
      {
        title: 'The Future of Nature',
        icon: '🌱',
        xp: 280,
        badge: {
          emoji: '🌱',
          title: 'Nature\'s Future Thinker',
          desc: 'I can think critically about nature\'s future and humanity\'s role in it!',
        },
        steps: [
          {
            title: '🔬 Let\'s Learn — What Could the Future Look Like?',
            type: 'learn',
            xp: 20,
            learnContent: {
              intro: 'The future of nature is not predetermined. Depending on choices made in the next decade, we could head towards continued ecological breakdown — or towards a genuinely nature-positive future where biodiversity recovers and sustainable systems replace destructive ones. The science of what\'s possible is often more optimistic than the headlines suggest.',
              facts: [
                { icon: '🌍', text: 'If 30% of Earth\'s land and ocean were protected, modelling suggests we could halt most extinction risk, stabilise climate feedback loops, and allow wild populations to recover.' },
                { icon: '🌿', text: 'Nature-based solutions — protecting forests, restoring wetlands, regenerating soils — could provide up to a third of the emissions reductions needed to meet the Paris Agreement goals.' },
                { icon: '🔬', text: 'De-extinction technology (using ancient DNA to resurrect extinct species) is advancing — the woolly mammoth project aims to restore cold-adapted elephants to Siberian permafrost to help stabilise it.' },
                { icon: '🏙️', text: 'Biophilic design — integrating nature into cities through green roofs, urban forests and river rewilding — is improving urban biodiversity and human mental health simultaneously.' },
              ],
            },
          },
          {
            title: '🤝 Family Activity — 2050 Nature Scenario Planning!',
            type: 'activity',
            xp: 40,
            activityContent: {
              childHears: 'Scenario planning is a tool used by governments and scientists to think about different possible futures — not to predict, but to prepare. Let\'s build two detailed scenarios for nature in 2050.',
              doTogether: 'Together, develop two scenarios for 2050: "Business as usual" (current trends continue) and "Nature positive" (ambitious but achievable changes happen). For each scenario, describe: What does the Amazon look like? What\'s the state of coral reefs? What does a typical garden contain? What has happened to insect populations? What does your local area look like? Ground both scenarios in evidence from what you\'ve learned.',
              talkAbout: '"What would have had to change for the positive scenario to happen?" This is a powerful question — it moves from despair to agency. Then: "What can a person your age realistically influence?" From consumer choices to political engagement to career paths.',
            },
          },
          {
            title: '🧠 Quiz — Test What You Know!',
            type: 'quiz',
            xp: 80,
            quizContent: [
              {
                id: 'nw-g-5-q1',
                type: 'mc',
                text: 'What is the "30x30" proposal in conservation?',
                options: [
                  { label: '🌳 Planting 30 billion trees by 2030', value: 'wrong' },
                  { label: '🌍 Protecting 30% of land and ocean by 2030', value: 'correct' },
                  { label: '📉 Reducing emissions by 30% before 2030', value: 'wrong' },
                  { label: '🐾 Protecting 30 key endangered species', value: 'wrong' },
                ],
                correctFb: '✅ 30x30 means protecting 30% of the Earth\'s land and oceans by 2030. Modelling suggests this target could halt most extinction risk and stabilise important climate feedbacks.',
                wrongFb: '30x30 is the goal to protect 30% of Earth\'s land and ocean by 2030 — a target endorsed by over 190 countries and supported by scientific modelling as sufficient to bend the biodiversity curve.',
              },
              {
                id: 'nw-g-5-q2',
                type: 'tf',
                text: 'True or False? Nature-based solutions (protecting forests, restoring wetlands) could deliver up to one third of needed climate emissions reductions.',
                correctAnswer: 'True',
                correctFb: '✅ True! Nature-based solutions are one of the most cost-effective climate tools we have — restoring and protecting ecosystems can sequester enormous amounts of carbon.',
                wrongFb: 'This is true — nature-based solutions could provide up to a third of the emissions cuts needed. Protecting and restoring natural ecosystems is as important as technological solutions.',
              },
              {
                id: 'nw-g-5-q3',
                type: 'mc',
                text: 'De-extinction projects aim to reintroduce woolly mammoths to Siberia for what environmental purpose?',
                options: [
                  { label: '🌿 To control Arctic plant growth', value: 'wrong' },
                  { label: '🧊 To help stabilise permafrost by restoring grassland ecosystems', value: 'correct' },
                  { label: '🐘 To restore elephant populations globally', value: 'wrong' },
                  { label: '🎭 Primarily for tourism and education', value: 'wrong' },
                ],
                correctFb: '✅ Mammoths grazed Arctic grasslands, which reflect more sunlight than the shrubs and moss that replaced them. Restoring grassland ecosystems could help keep permafrost frozen longer.',
                wrongFb: 'The ecological rationale is permafrost stabilisation — mammoths maintain grasslands that reflect sunlight and insulate frozen ground better than the shrubs/moss that now grow there.',
              },
            ],
          },
          {
            title: '📸 Real World Mission!',
            type: 'mission',
            xp: 40,
            missionContent: {
              title: 'Nature Recovery Plan!',
              desc: 'Write a Nature Recovery Plan for your local area — your garden, street, or neighbourhood park. Identify: what\'s currently there, what\'s missing that was once present, what actions (planting, reducing pesticide use, creating habitat features) could improve biodiversity, and what the realistic 10-year outcome could be. Make it evidence-based and specific.',
              note: '🌟 Every real-world mission earns bonus XP. The Memory Wall is coming soon — you\'ll be able to share your moments there!',
            },
          },
        ],
      },
    ],
  },
}

export default naturalWorld
