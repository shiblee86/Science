// Hand-authored Grade 1 skills: life-cycle sequences and the plant-parts diagram.
const G1_EXTRA = [
  {
    id: 'g1-H-9',
    unit: 'H',
    title: 'Read animal life cycle diagrams',
    type: 'sequence',
    pool: [
      {
        prompt: "Put the butterfly's life cycle in order.",
        steps: ["🥚 Egg", "🐛 Caterpillar", "🟤 Chrysalis", "🦋 Butterfly"],
        hint: "It starts out tiny on a leaf, then grows and grows before it can fly.",
        explanation: "A butterfly starts as an egg, hatches into a caterpillar, rests inside a chrysalis, and comes out as a butterfly!"
      },
      {
        prompt: "Put the frog's life cycle in order.",
        steps: ["🥚 Egg", "🐟 Tadpole", "🐸 Froglet", "🐸 Frog"],
        hint: "It begins in water and swims with a tail before it grows legs.",
        explanation: "A frog starts as an egg in the water, hatches into a swimming tadpole, grows legs as a froglet, and becomes a full-grown frog!"
      },
      {
        prompt: "Put the chicken's life cycle in order.",
        steps: ["🥚 Egg", "🐤 Chick", "🐔 Young chicken", "🐓 Adult chicken"],
        hint: "It hatches from a shell all fluffy and small, then grows bigger feathers.",
        explanation: "A chicken starts as an egg, hatches into a fluffy chick, grows into a young chicken, and becomes an adult chicken!"
      },
      {
        prompt: "Put the ladybug's life cycle in order.",
        steps: ["🥚 Egg", "🐛 Larva", "🟢 Pupa", "🐞 Adult ladybug"],
        hint: "It looks like a tiny spiky worm long before it gets its spotted shell.",
        explanation: "A ladybug starts as an egg, hatches into a larva, rests as a pupa, and becomes a spotted adult ladybug!"
      }
    ]
  },
  {
    id: 'g1-I-2',
    unit: 'I',
    title: 'Identify plant parts',
    type: 'label',
    pool: [
      {
        prompt: "Which part of the plant soaks up water from the soil?",
        parts: [
          {name: "🌸 Flower", correct: false},
          {name: "🍃 Leaf", correct: false},
          {name: "🟫 Stem", correct: false},
          {name: "🌱 Roots", correct: true}
        ],
        hint: "This part is under the ground, digging deep to find a drink!",
        explanation: "Roots grow underground and soak up water and nutrients from the soil."
      },
      {
        prompt: "Which part of the plant makes food using sunlight?",
        parts: [
          {name: "🌸 Flower", correct: false},
          {name: "🍃 Leaf", correct: true},
          {name: "🟫 Stem", correct: false},
          {name: "🌱 Roots", correct: false}
        ],
        hint: "This part is flat and green and loves to sit in a sunny spot.",
        explanation: "Leaves use sunlight to make food for the plant — this is called photosynthesis!"
      },
      {
        prompt: "Which part of the plant carries water up to the leaves?",
        parts: [
          {name: "🌸 Flower", correct: false},
          {name: "🍃 Leaf", correct: false},
          {name: "🟫 Stem", correct: true},
          {name: "🌱 Roots", correct: false}
        ],
        hint: "This part stands up tall, like a straw connecting the roots to the leaves.",
        explanation: "The stem carries water from the roots up to the leaves and flowers, and holds the plant up tall."
      },
      {
        prompt: "Which part of the plant makes seeds so new plants can grow?",
        parts: [
          {name: "🌸 Flower", correct: true},
          {name: "🍃 Leaf", correct: false},
          {name: "🟫 Stem", correct: false},
          {name: "🌱 Roots", correct: false}
        ],
        hint: "This part is colorful and pretty, and bees love to visit it.",
        explanation: "Flowers make seeds that can grow into brand new plants!"
      }
    ]
  },
  {
    id: 'g1-K-3',
    unit: 'K',
    title: 'Food chains',
    type: 'sequence',
    pool: [
      {
        prompt: "Put this forest food chain in order, starting with the sun.",
        steps: ["☀️ Sun", "🌿 Grass", "🐇 Rabbit", "🦊 Fox"],
        hint: "Energy from the sun helps plants grow first, then plant-eaters, then meat-eaters.",
        explanation: "The sun's energy helps grass grow, a rabbit eats the grass, and a fox eats the rabbit."
      },
      {
        prompt: "Put this pond food chain in order, starting with the sun.",
        steps: ["☀️ Sun", "🌱 Pond plant", "🐸 Frog", "🐍 Snake"],
        hint: "Start with plants that grow using sunlight, then who eats them, then who eats that.",
        explanation: "The sun helps pond plants grow, insects and small animals like frogs eat plants or bugs, and a snake eats the frog."
      },
      {
        prompt: "Put this ocean food chain in order, starting with the sun.",
        steps: ["☀️ Sun", "🦠 Tiny algae", "🐟 Small fish", "🦈 Shark"],
        hint: "Even in the ocean, everything starts with tiny sun-powered living things.",
        explanation: "Sunlight helps tiny algae grow, small fish eat the algae, and a shark eats the small fish."
      },
      {
        prompt: "Put this meadow food chain in order, starting with the sun.",
        steps: ["☀️ Sun", "🌾 Wheat", "🐭 Mouse", "🦉 Owl"],
        hint: "Plants use sunlight first, then a small animal eats the plant, then a bigger animal eats that one.",
        explanation: "The sun helps wheat grow, a mouse eats the wheat, and an owl eats the mouse."
      }
    ]
  }
];
