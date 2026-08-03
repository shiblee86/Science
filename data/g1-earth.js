// Grade 1 Earth & Space Science content pools. Loaded globally alongside sibling data files.
const G1_EARTH = [
  {
    id: 'g1-K-1',
    unit: 'K',
    title: 'How do living things change their environments to meet their needs?',
    type: 'mcq',
    pool: [
      {
        fact: "Beavers are amazing builders! They chew down trees to build dams and make ponds for their homes.",
        q: "What do beavers build to change a stream into a pond?",
        correct: "A dam",
        wrong: ["A nest", "A cave", "A web"],
        hint: "Beavers use sticks and mud to block up flowing water.",
        experiment: "🦫 Try this: Stack up small sticks in a puddle and see how the water piles up behind them!"
      },
      {
        fact: "Ants dig tunnels underground to make their nests. Their digging moves tiny bits of soil around!",
        q: "How do ants change the ground to make a home?",
        correct: "They dig tunnels",
        wrong: ["They build nests in trees", "They spin silk webs", "They melt the snow"],
        hint: "Think about an anthill - where did all that dirt come from?",
        experiment: "🐜 Try this: Look for an anthill outside and see the tiny pile of dirt around it!"
      },
      {
        fact: "Birds build nests out of twigs, grass, and leaves to keep their eggs safe and warm.",
        q: "Why do birds gather twigs and grass?",
        correct: "To build a nest for their eggs",
        wrong: ["To build a dam", "To dig a tunnel", "To make a web"],
        hint: "They need a cozy, safe spot to lay their eggs.",
        experiment: "🐦 Try this: Look outside for a bird's nest tucked in a tree or bush!"
      },
      {
        fact: "Earthworms burrow through soil, mixing it up and making tiny tunnels that let air and water in.",
        q: "How do earthworms change the soil around them?",
        correct: "They dig tunnels that let in air and water",
        wrong: ["They build dams", "They spin webs", "They stack up rocks"],
        hint: "Worms are always wiggling through the dirt.",
        experiment: "🪱 Try this: After it rains, look for tiny worm tunnels in the mud!"
      },
      {
        fact: "Spiders spin sticky webs between branches to catch insects for food.",
        q: "What do spiders make to help them catch food?",
        correct: "A web",
        wrong: ["A dam", "A nest", "A tunnel"],
        hint: "It's sticky, and it's often seen sparkling with morning dew.",
        experiment: "🕸️ Try this: Look for a spider web outside in the morning - it might have dew drops on it!"
      }
    ]
  },
  {
    id: 'g1-K-2',
    unit: 'K',
    title: 'How do gray squirrels change the forest to meet their needs?',
    type: 'mcq',
    pool: [
      {
        fact: "Gray squirrels bury acorns in the ground to save them for later. This is called caching food!",
        q: "Why do gray squirrels bury acorns in the soil?",
        correct: "To save them for food later",
        wrong: ["To grow flowers", "To hide from rain", "To build a dam"],
        hint: "It's like a squirrel's pantry, hidden underground.",
        experiment: "🐿️ Try this: Look under trees for little dug-up spots where a squirrel may have buried a nut!"
      },
      {
        fact: "Squirrels sometimes forget where they buried an acorn. That forgotten acorn can grow into a new tree!",
        q: "What can happen to an acorn a squirrel forgets to dig up?",
        correct: "It can grow into a new tree",
        wrong: ["It turns into a rock", "It becomes a nest", "It melts away"],
        hint: "Acorns are seeds - what do seeds do when left in the ground?",
        experiment: "🌳 Try this: Look for baby oak trees sprouting near a big oak tree!"
      },
      {
        fact: "Squirrels build cozy leaf nests, called dreys, high up in tree branches to stay safe and warm.",
        q: "What do squirrels build up in the branches of trees?",
        correct: "A leaf nest (drey)",
        wrong: ["A mud dam", "An underground tunnel", "A silk web"],
        hint: "It's made of leaves and twigs, way up high.",
        experiment: "🍃 Try this: Look up into tall trees for a clump of leaves that could be a squirrel's nest!"
      },
      {
        fact: "Squirrels gnaw on bark and twigs with their teeth, which can change how a tree branch grows.",
        q: "What might a squirrel's gnawing do to a tree branch?",
        correct: "Change how it grows",
        wrong: ["Make it flood", "Make it grow acorns instantly", "Turn it into soil"],
        hint: "Chewing on something can shape or damage it.",
        experiment: "🐿️ Try this: Look for tiny teeth marks on twigs or pinecones outside!"
      },
      {
        fact: "By digging many small holes to bury acorns, squirrels loosen and mix up the forest soil.",
        q: "How does a squirrel's digging change the forest soil?",
        correct: "It loosens and mixes the soil",
        wrong: ["It turns soil into rock", "It freezes the soil", "It washes the soil away"],
        hint: "Think about all those tiny holes dug all over the forest floor.",
        experiment: "🐿️ Try this: Look at soil under a tree - can you spot small dug-up patches?"
      }
    ]
  },
  {
    id: 'g1-L-1',
    unit: 'L',
    title: 'Earth materials: water, rocks, and soil',
    type: 'sort',
    pool: [
      {
        prompt: "Tap all the pictures that show WATER.",
        items: [
          {label: "🌊 Ocean waves", match: true},
          {label: "🪨 Big gray rock", match: false},
          {label: "💧 Rain drop", match: true},
          {label: "🌱 Dirt with a plant", match: false},
          {label: "🚰 Water from a faucet", match: true},
          {label: "⛰️ Mountain", match: false}
        ],
        hint: "Look for things that are wet and can flow.",
        explanation: "Water can be found in oceans, rain, and faucets - it flows and takes the shape of its container."
      },
      {
        prompt: "Tap all the pictures that show ROCKS.",
        items: [
          {label: "🪨 Gray boulder", match: true},
          {label: "💧 Puddle", match: false},
          {label: "⛰️ Mountain made of stone", match: true},
          {label: "🌾 Soil with grass", match: false},
          {label: "🗿 Big stone statue", match: true},
          {label: "🌊 River water", match: false}
        ],
        hint: "Rocks are hard and solid - they don't flow like water.",
        explanation: "Rocks are hard, solid earth materials like boulders, mountains, and stones."
      },
      {
        prompt: "Tap all the pictures that show SOIL.",
        items: [
          {label: "🟤 Brown dirt patch", match: true},
          {label: "🧊 Ice cube", match: false},
          {label: "🌱 Garden dirt with worms", match: true},
          {label: "🌊 Lake", match: false},
          {label: "🪴 Potting soil in a pot", match: true},
          {label: "🪨 Smooth pebble", match: false}
        ],
        hint: "Soil is the loose brown material plants grow in.",
        explanation: "Soil is made of tiny bits of rock, minerals, and old plant and animal material where plants can grow."
      },
      {
        prompt: "Tap all the pictures that are made mostly of WATER.",
        items: [
          {label: "🌧️ Rain falling", match: true},
          {label: "🏖️ Sandy beach", match: false},
          {label: "🧊 Melting ice", match: true},
          {label: "🪨 Rocky cliff", match: false},
          {label: "🌊 Splashing wave", match: true}
        ],
        hint: "Ice is frozen water - remember that one!",
        explanation: "Rain, ice, and waves are all forms of water, whether liquid or frozen solid."
      },
      {
        prompt: "Tap all the pictures that show ROCKS or SOIL (not water).",
        items: [
          {label: "🪨 Rock pile", match: true},
          {label: "🌊 Ocean", match: false},
          {label: "🟤 Dirt hill", match: true},
          {label: "💧 Rain drop", match: false},
          {label: "⛰️ Rocky mountain", match: true},
          {label: "🚰 Water faucet", match: false}
        ],
        hint: "Water flows and is wet - rocks and soil are the solid ground.",
        explanation: "Rocks and soil are solid earth materials, while water is a liquid that flows."
      }
    ]
  },
  {
    id: 'g1-L-2',
    unit: 'L',
    title: 'Bodies of water',
    type: 'mcq',
    pool: [
      {
        fact: "The ocean is the biggest body of water on Earth, and it's full of salt water!",
        q: "Which body of water is the largest on Earth?",
        correct: "Ocean",
        wrong: ["Pond", "Puddle", "Stream"],
        hint: "It's so big that ships sail across it for days.",
        experiment: "🌊 Fun fact: The ocean covers most of our planet!"
      },
      {
        fact: "A lake is a large body of water surrounded by land on all sides.",
        q: "What do we call a large body of water surrounded by land?",
        correct: "A lake",
        wrong: ["An ocean", "A river", "A puddle"],
        hint: "You can often see land all the way around it.",
        experiment: "🏞️ Try this: Look at a map and find a lake near your home!"
      },
      {
        fact: "A river is a long body of water that flows from higher ground down toward the ocean or a lake.",
        q: "Which body of water flows in one direction, like a long ribbon?",
        correct: "A river",
        wrong: ["A pond", "An ocean", "A puddle"],
        hint: "It moves - think of it like a moving path of water.",
        experiment: "🏞️ Try this: Drop a leaf into a moving stream and watch it float along!"
      },
      {
        fact: "A pond is a small, calm body of water - much smaller than a lake!",
        q: "Which is usually the SMALLEST body of water?",
        correct: "A pond",
        wrong: ["An ocean", "A lake", "A river"],
        hint: "It's cozy and small, sometimes with ducks swimming in it.",
        experiment: "🦆 Try this: If you visit a pond, look for ducks or frogs living there!"
      },
      {
        fact: "A stream is a small, narrow body of flowing water, smaller than a river.",
        q: "Which is a small, narrow flow of water, smaller than a river?",
        correct: "A stream",
        wrong: ["An ocean", "A lake", "A pond"],
        hint: "It's thin, and often you can jump across it!",
        experiment: "💧 Try this: Look for a small stream after it rains - watch which way the water flows!"
      }
    ]
  },
  {
    id: 'g1-L-3',
    unit: 'L',
    title: 'Classify rocks and minerals',
    type: 'sort',
    pool: [
      {
        prompt: "Tap all the ROCKS.",
        items: [
          {label: "🪨 Gray boulder", match: true},
          {label: "💎 Sparkly crystal", match: false},
          {label: "🗻 Mountain stone", match: true},
          {label: "🌟 Shiny gold nugget", match: false},
          {label: "🧱 Granite chunk", match: true}
        ],
        hint: "Rocks are usually made of a mix of minerals, and they look dull or bumpy.",
        explanation: "Rocks like boulders, mountain stone, and granite are made of a mix of minerals."
      },
      {
        prompt: "Tap all the MINERALS.",
        items: [
          {label: "💎 Sparkly crystal", match: true},
          {label: "🪨 Bumpy gray rock", match: false},
          {label: "🌟 Shiny gold nugget", match: true},
          {label: "🗻 Big mountain boulder", match: false},
          {label: "🔷 Clear quartz crystal", match: true}
        ],
        hint: "Minerals are often shiny, smooth, or have a special crystal shape.",
        explanation: "Minerals like gold, quartz, and crystals are single, pure substances that often sparkle or have neat shapes."
      },
      {
        prompt: "Tap all the things that are HARD and SOLID (rocks or minerals).",
        items: [
          {label: "🪨 Rock", match: true},
          {label: "💧 Water drop", match: false},
          {label: "💎 Diamond crystal", match: true},
          {label: "☁️ Cloud", match: false},
          {label: "🗿 Stone statue", match: true}
        ],
        hint: "Skip anything soft, wet, or fluffy.",
        explanation: "Rocks, crystals, and stone are all hard, solid earth materials."
      },
      {
        prompt: "Tap all the ROCKS you might find on the ground outside.",
        items: [
          {label: "🪨 Round pebble", match: true},
          {label: "💎 Rare gemstone", match: false},
          {label: "🧱 Flat gray stone", match: true},
          {label: "🌟 Polished jewel", match: false},
          {label: "🗻 Big boulder", match: true}
        ],
        hint: "These are common and easy to spot on a sidewalk or path.",
        explanation: "Pebbles, flat stones, and boulders are common rocks you can find almost anywhere outdoors."
      },
      {
        prompt: "Tap all the MINERALS that are used to make jewelry.",
        items: [
          {label: "💎 Diamond", match: true},
          {label: "🪨 Plain gray rock", match: false},
          {label: "🌟 Gold", match: true},
          {label: "🧱 Sidewalk stone", match: false},
          {label: "🔷 Amethyst crystal", match: true}
        ],
        hint: "Think about what sparkles in a ring or necklace.",
        explanation: "Diamond, gold, and amethyst are minerals prized for their sparkle and used to make jewelry."
      }
    ]
  },
  {
    id: 'g1-L-4',
    unit: 'L',
    title: 'Types of soils',
    type: 'mcq',
    pool: [
      {
        fact: "Sandy soil has big, loose grains, and water drains through it very quickly!",
        q: "Which type of soil lets water drain through the fastest?",
        correct: "Sandy soil",
        wrong: ["Clay soil", "Silty soil", "Rocky soil"],
        hint: "Think about soil at the beach - does it hold water well?",
        experiment: "🏖️ Try this: Pour water on sand and watch how fast it disappears!"
      },
      {
        fact: "Clay soil has tiny, tightly packed particles, so it holds water for a long time and feels sticky when wet.",
        q: "Which soil feels sticky and holds water the longest?",
        correct: "Clay soil",
        wrong: ["Sandy soil", "Rocky soil", "Silty soil"],
        hint: "It's the kind you can squish and mold, like for pottery!",
        experiment: "🏺 Try this: Wet some clay soil and see if you can squish it into a shape!"
      },
      {
        fact: "Silty soil is smooth and powdery, and it holds water better than sand but not as well as clay.",
        q: "Which soil feels smooth and powdery, like flour?",
        correct: "Silty soil",
        wrong: ["Sandy soil", "Clay soil", "Rocky soil"],
        hint: "Rub it between your fingers - it feels soft and silky.",
        experiment: "🌾 Try this: Rub some soil between your fingers - smooth ones might be silty!"
      },
      {
        fact: "Loam soil is a healthy mix of sand, silt, and clay - it's great for growing plants!",
        q: "Which soil is a mix of sand, silt, and clay, and is great for growing plants?",
        correct: "Loam soil",
        wrong: ["Pure sand", "Pure clay", "Rocky soil"],
        hint: "Farmers and gardeners love this soil best of all!",
        experiment: "🌻 Try this: Look at garden soil - it's often a dark, crumbly mix perfect for plants!"
      },
      {
        fact: "Rocky soil has lots of small stones mixed in, which can make it harder for roots to grow deep.",
        q: "Which soil has lots of small stones mixed into it?",
        correct: "Rocky soil",
        wrong: ["Clay soil", "Silty soil", "Loam soil"],
        hint: "You'd feel bumpy little stones if you dug into it.",
        experiment: "🪨 Try this: Dig a small hole outside and see if you feel any pebbles in the dirt!"
      }
    ]
  },
  {
    id: 'g1-L-5',
    unit: 'L',
    title: 'Natural resources',
    type: 'mcq',
    pool: [
      {
        fact: "Trees are a natural resource - we use their wood to build houses and furniture!",
        q: "Which natural resource comes from trees and is used to build houses?",
        correct: "Wood",
        wrong: ["Plastic", "Glass", "Steel"],
        hint: "It comes from chopping down trees.",
        experiment: "🌳 Try this: Look around your house for things made of wood!"
      },
      {
        fact: "Water is a natural resource we use for drinking, cooking, and washing every single day.",
        q: "Which natural resource do we drink and use to wash our hands?",
        correct: "Water",
        wrong: ["Coal", "Wood", "Sand"],
        hint: "You use gallons of it every day without even thinking!",
        experiment: "🚰 Try this: Count how many times you use water today!"
      },
      {
        fact: "The sun gives us sunlight, a natural resource that helps plants grow and can even make electricity!",
        q: "Which natural resource gives us light and warmth from the sky?",
        correct: "Sunlight",
        wrong: ["Coal", "Wind", "Wood"],
        hint: "It rises every morning and sets every evening.",
        experiment: "☀️ Try this: Feel the warmth of sunlight on your skin outside!"
      },
      {
        fact: "Wind is a natural resource that can be used to make electricity using giant windmills called turbines!",
        q: "Which natural resource can turn giant turbines to make electricity?",
        correct: "Wind",
        wrong: ["Sand", "Wood", "Water"],
        hint: "You feel it on a breezy day, but you can't see it.",
        experiment: "🌬️ Try this: Fly a pinwheel or kite outside and feel the wind push it!"
      },
      {
        fact: "Soil is a natural resource that lets us grow the fruits, vegetables, and grains we eat!",
        q: "Which natural resource do farmers use to grow crops?",
        correct: "Soil",
        wrong: ["Glass", "Plastic", "Steel"],
        hint: "It's the dirt that seeds are planted in.",
        experiment: "🌽 Try this: Plant a seed in some soil and watch it grow!"
      }
    ]
  },
  {
    id: 'g1-M-1',
    unit: 'M',
    title: 'Reduce, reuse, recycle',
    type: 'sort',
    pool: [
      {
        prompt: "Tap all the pictures that show something you can RECYCLE.",
        items: [
          {label: "🥫 Empty can", match: true},
          {label: "🍌 Banana peel", match: false},
          {label: "📰 Newspaper", match: true},
          {label: "🧦 Old sock", match: false},
          {label: "🍾 Glass bottle", match: true}
        ],
        hint: "Recyclable things are often made of metal, paper, or glass.",
        explanation: "Cans, newspaper, and glass bottles can all be recycled and made into new things."
      },
      {
        prompt: "Tap all the pictures that show REUSING something instead of throwing it away.",
        items: [
          {label: "🫙 Using an old jar to hold pencils", match: true},
          {label: "🗑️ Throwing away a plastic bag", match: false},
          {label: "👕 Passing down old clothes to a sibling", match: true},
          {label: "🍕 Throwing away a pizza box", match: false},
          {label: "📦 Turning a box into a toy fort", match: true}
        ],
        hint: "Reusing means giving something a new job instead of tossing it out.",
        explanation: "Using a jar for pencils, sharing clothes, and turning a box into a fort are all ways to reuse things."
      },
      {
        prompt: "Tap all the pictures that show REDUCING waste.",
        items: [
          {label: "🥤 Using a reusable water bottle", match: true},
          {label: "🧴 Throwing out a half-full bottle", match: false},
          {label: "🛍️ Bringing your own bag to the store", match: true},
          {label: "🍽️ Using paper plates for every meal", match: false},
          {label: "💡 Turning off lights when you leave a room", match: true}
        ],
        hint: "Reducing means using less stuff in the first place.",
        explanation: "Using a reusable bottle, bringing your own bag, and turning off lights all help reduce how much we waste."
      },
      {
        prompt: "Tap all the pictures that show something you can RECYCLE.",
        items: [
          {label: "📦 Cardboard box", match: true},
          {label: "🍎 Apple core", match: false},
          {label: "🧃 Empty juice carton", match: true},
          {label: "🧸 Broken toy", match: false},
          {label: "📄 Sheet of paper", match: true}
        ],
        hint: "Look for paper and cardboard items.",
        explanation: "Cardboard, juice cartons, and paper can all be recycled instead of thrown in the trash."
      },
      {
        prompt: "Tap all the pictures that show REUSING something.",
        items: [
          {label: "🛍️ Using a tote bag again and again", match: true},
          {label: "🗑️ Tossing a plastic fork after one use", match: false},
          {label: "🎁 Wrapping a gift in old newspaper", match: true},
          {label: "🍾 Throwing away a jar after one use", match: false},
          {label: "🪣 Using an old bucket as a planter", match: true}
        ],
        hint: "Reusing gives something old a brand new job.",
        explanation: "A tote bag, newspaper wrapping, and a bucket-turned-planter are all great examples of reusing things."
      }
    ]
  },
  {
    id: 'g1-N-1',
    unit: 'N',
    title: 'Describe the weather',
    type: 'mcq',
    pool: [
      {
        fact: "Sunny weather means the sky is clear and bright, with lots of sunshine!",
        q: "What do we call weather when the sky is clear and bright with sunshine?",
        correct: "Sunny",
        wrong: ["Rainy", "Snowy", "Foggy"],
        hint: "You might need sunglasses on a day like this!",
        experiment: "☀️ Try this: Look outside - is the sun shining brightly today?"
      },
      {
        fact: "Cloudy weather means the sky is covered with clouds, so you might not see the sun at all.",
        q: "What do we call weather when clouds cover the sky?",
        correct: "Cloudy",
        wrong: ["Sunny", "Windy", "Snowy"],
        hint: "Look up - can you see fluffy white or gray shapes covering the blue sky?",
        experiment: "☁️ Try this: Look up and count how many clouds you can see!"
      },
      {
        fact: "Windy weather means the air is moving fast, making leaves and flags flap around!",
        q: "What do we call weather when the air moves fast and blows things around?",
        correct: "Windy",
        wrong: ["Sunny", "Rainy", "Foggy"],
        hint: "Notice how the trees sway and leaves rustle.",
        experiment: "🌬️ Try this: Hold up a ribbon outside and see if it flaps in the air!"
      },
      {
        fact: "Rainy weather means water is falling from clouds in the sky - perfect for puddle jumping!",
        q: "What do we call weather when water falls from the clouds?",
        correct: "Rainy",
        wrong: ["Sunny", "Windy", "Snowy"],
        hint: "You'd need an umbrella and boots for this!",
        experiment: "🌧️ Try this: Listen for raindrops tapping on a window!"
      },
      {
        fact: "Foggy weather means a thick, low cloud sits near the ground, making it hard to see far away.",
        q: "What do we call it when a thick, low cloud makes it hard to see far away?",
        correct: "Foggy",
        wrong: ["Sunny", "Windy", "Rainy"],
        hint: "It looks like a misty cloud has come down to the ground.",
        experiment: "🌫️ Try this: On a foggy morning, see how far away you can still see things clearly!"
      }
    ]
  },
  {
    id: 'g1-N-2',
    unit: 'N',
    title: 'Investigate sunlight and shade',
    type: 'mcq',
    pool: [
      {
        fact: "Shade happens when something blocks the sunlight, like a tree or an umbrella.",
        q: "What do we call the cool, dark spot where something blocks the sunlight?",
        correct: "Shade",
        wrong: ["Sunlight", "Rain", "Wind"],
        hint: "It's the cool spot you stand in under a big tree on a hot day.",
        experiment: "🌳 Try this: Stand under a tree on a sunny day - does it feel cooler?"
      },
      {
        fact: "Shadows are made when your body blocks sunlight, creating a dark shape on the ground.",
        q: "What creates a shadow on the ground?",
        correct: "Something blocking the sunlight",
        wrong: ["Rain falling", "Wind blowing", "Clouds moving fast"],
        hint: "Stand in the sun - what dark shape appears behind you?",
        experiment: "🕺 Try this: Stand in the sun and wiggle - watch your shadow move too!"
      },
      {
        fact: "Shadows change size and direction throughout the day as the sun moves across the sky.",
        q: "What happens to your shadow as the day goes on?",
        correct: "It changes size and direction",
        wrong: ["It disappears completely all day", "It always stays exactly the same", "It turns a different color"],
        hint: "Think about morning versus afternoon - is your shadow the same?",
        experiment: "⏰ Try this: Trace your shadow in the morning and again at lunchtime - is it different?"
      },
      {
        fact: "On a hot sunny day, a shaded spot under a tree usually feels cooler than a spot in direct sunlight.",
        q: "Which spot usually feels cooler on a hot day: standing in the sun or standing in the shade?",
        correct: "The shade",
        wrong: ["The sun", "They feel the same", "Neither has a temperature"],
        hint: "Think about which spot blocks the hot sunlight from reaching you.",
        experiment: "🌡️ Try this: Touch the ground in a sunny spot, then in a shady spot - which feels warmer?"
      },
      {
        fact: "Sunlight can pass through some materials, like a thin curtain, but not through solid things like a wall!",
        q: "Which object would block sunlight completely and make a dark shadow?",
        correct: "A solid wooden fence",
        wrong: ["A thin sheet of paper", "A window made of glass", "Clear water"],
        hint: "Solid, thick objects block light the best - light can't pass through them.",
        experiment: "🔦 Try this: Shine a flashlight at different objects and see which ones block the light!"
      }
    ]
  },
  {
    id: 'g1-N-3',
    unit: 'N',
    title: 'Types of precipitation',
    type: 'sort',
    pool: [
      {
        prompt: "Tap all the pictures that show RAIN falling.",
        items: [
          {label: "🌧️ Raindrops falling from a cloud", match: true},
          {label: "❄️ Snowflakes drifting down", match: false},
          {label: "💧 A rain puddle forming", match: true},
          {label: "⛄ A snowman", match: false},
          {label: "☔ Water dripping off an umbrella", match: true}
        ],
        hint: "Rain is liquid water falling from the sky.",
        explanation: "Raindrops, puddles, and dripping umbrellas are all signs of rain."
      },
      {
        prompt: "Tap all the pictures that show SNOW falling.",
        items: [
          {label: "❄️ Snowflakes falling", match: true},
          {label: "🌧️ Rain splashing in a puddle", match: false},
          {label: "⛄ Building a snowman", match: true},
          {label: "☀️ A sunny clear sky", match: false},
          {label: "🏔️ A snow-covered mountain", match: true}
        ],
        hint: "Snow is frozen, soft, and white, and it's cold outside when it falls.",
        explanation: "Snowflakes, snowmen, and snow-covered mountains all show snow, which is frozen precipitation."
      },
      {
        prompt: "Tap all the pictures that show HAIL.",
        items: [
          {label: "🧊 Small icy balls bouncing off a car", match: true},
          {label: "🌧️ Soft rain falling gently", match: false},
          {label: "🧊 Icy pellets hitting a roof loudly", match: true},
          {label: "☁️ A fluffy white cloud", match: false},
          {label: "🧊 Hard round ice balls on the ground", match: true}
        ],
        hint: "Hail is made of hard, icy balls that fall fast and can bounce.",
        explanation: "Hail is precipitation made of small, hard balls of ice that fall during some storms."
      },
      {
        prompt: "Tap all the pictures that show precipitation (water falling from the sky).",
        items: [
          {label: "🌧️ Rain falling", match: true},
          {label: "☀️ Bright sunshine", match: false},
          {label: "❄️ Snow falling", match: true},
          {label: "🌬️ Wind blowing leaves", match: false},
          {label: "🧊 Hail falling", match: true}
        ],
        hint: "Precipitation means water falling from clouds, in any form.",
        explanation: "Rain, snow, and hail are all types of precipitation - water falling from the sky."
      },
      {
        prompt: "Tap all the pictures that show SLEET (icy rain).",
        items: [
          {label: "🌨️ Small icy rain pellets", match: true},
          {label: "☀️ Warm sunny sky", match: false},
          {label: "🌨️ Frozen rain bouncing off a sidewalk", match: true},
          {label: "🌈 A colorful rainbow", match: false},
          {label: "🌨️ Icy drizzle coating the ground", match: true}
        ],
        hint: "Sleet looks like tiny bits of ice, not big fluffy snowflakes.",
        explanation: "Sleet is precipitation that falls as small, icy pellets - colder than rain but not as fluffy as snow."
      }
    ]
  },
  {
    id: 'g1-N-4',
    unit: 'N',
    title: 'Weather patterns',
    type: 'mcq',
    pool: [
      {
        fact: "Weather patterns often repeat with the seasons - it usually gets colder every winter!",
        q: "Which season usually brings the coldest, snowiest weather?",
        correct: "Winter",
        wrong: ["Summer", "Spring", "Fall"],
        hint: "Think about when you wear a big warm coat and mittens.",
        experiment: "🧣 Try this: Look at what you wear outside in winter versus summer!"
      },
      {
        fact: "In summer, the weather pattern is usually hot and sunny, perfect for swimming!",
        q: "Which season usually has the hottest weather?",
        correct: "Summer",
        wrong: ["Winter", "Fall", "Spring"],
        hint: "It's the season with the longest, warmest days - great for the pool!",
        experiment: "🏊 Try this: Think about your favorite summer activities - why do they work best when it's hot?"
      },
      {
        fact: "Weather forecasters look at patterns in clouds, wind, and temperature to predict tomorrow's weather.",
        q: "What do weather forecasters study to guess what tomorrow's weather will be?",
        correct: "Patterns in clouds, wind, and temperature",
        wrong: ["What they had for breakfast", "The color of the sky at noon only", "How many birds they see"],
        hint: "They watch the sky and use tools like thermometers.",
        experiment: "📺 Try this: Watch a weather forecast and see if it comes true tomorrow!"
      },
      {
        fact: "Spring weather patterns often bring more rain, which helps flowers and plants grow.",
        q: "Which season is known for lots of rain that helps flowers grow?",
        correct: "Spring",
        wrong: ["Summer", "Winter", "Fall"],
        hint: "Think of the saying: 'April showers bring May flowers.'",
        experiment: "🌷 Try this: Watch for flowers blooming after a spring rain!"
      },
      {
        fact: "In fall, temperatures drop and the weather pattern gets cooler, and leaves change color!",
        q: "Which season has cooling weather and leaves changing color?",
        correct: "Fall",
        wrong: ["Summer", "Spring", "Winter"],
        hint: "Think about pumpkins, cooler air, and colorful leaves.",
        experiment: "🍂 Try this: Collect a few fallen leaves and see how many colors you can find!"
      }
    ]
  },
  {
    id: 'g1-N-5',
    unit: 'N',
    title: 'Severe weather: blizzards',
    type: 'mcq',
    pool: [
      {
        fact: "A blizzard is a big snowstorm with strong winds and blowing snow that makes it hard to see.",
        q: "What is a blizzard?",
        correct: "A big snowstorm with strong winds",
        wrong: ["A hot, sunny day", "A light rain shower", "A calm, cloudy day"],
        hint: "Think snow plus very strong wind, all mixed together.",
        experiment: "❄️ Try this: Watch a weather report to see if any snowstorms are in the forecast this winter!"
      },
      {
        fact: "During a blizzard, it's safest and warmest to stay inside with your family.",
        q: "What is the safest thing to do during a blizzard?",
        correct: "Stay inside where it's warm",
        wrong: ["Go for a long walk outside", "Ride a bike far from home", "Swim in a lake"],
        hint: "Think about the cozy, warm place you'd want to be.",
        experiment: "🏠 Try this: Make a cozy blanket fort - perfect for a snowy day indoors!"
      },
      {
        fact: "Blizzards often bring very cold temperatures, so people wear warm coats, hats, and mittens.",
        q: "What should you wear if you go outside in cold, snowy weather?",
        correct: "A warm coat, hat, and mittens",
        wrong: ["A swimsuit", "Shorts and a t-shirt", "Sandals"],
        hint: "Think about what keeps your body warm and toasty.",
        experiment: "🧤 Try this: Find your warmest coat and mittens and see if they still fit!"
      },
      {
        fact: "Blizzards can make it hard to see far away because so much snow is blowing around in the wind.",
        q: "Why is it hard to see far during a blizzard?",
        correct: "Snow is blowing around in strong wind",
        wrong: ["It gets too sunny", "Fog rolls in from the ocean", "It becomes too hot"],
        hint: "Picture lots of snowflakes swirling around in the air.",
        experiment: "🌨️ Try this: Shake a snow globe and watch how the swirling flakes make it hard to see inside!"
      },
      {
        fact: "Families often keep flashlights, blankets, and food ready at home in case a snowstorm causes a power outage.",
        q: "Why might a family keep flashlights and blankets ready before a big snowstorm?",
        correct: "In case the power goes out and it gets dark or cold",
        wrong: ["To build a sandcastle", "To go swimming", "To water the garden"],
        hint: "Storms can sometimes knock out the electricity - what would help you then?",
        experiment: "🔦 Try this: Find a flashlight at home and check if it still works!"
      }
    ]
  },
  {
    id: 'g1-N-6',
    unit: 'N',
    title: 'Severe weather: tornadoes',
    type: 'mcq',
    pool: [
      {
        fact: "A tornado is a spinning tube of air that reaches down from a storm cloud to the ground.",
        q: "What is a tornado?",
        correct: "A spinning tube of air from a storm cloud",
        wrong: ["A gentle breeze", "A light snow flurry", "A sunny warm day"],
        hint: "Think of a fast, spinning funnel shape.",
        experiment: "🌪️ Try this: Swirl water in a clear bottle to make a mini funnel shape, like a tornado's spin!"
      },
      {
        fact: "The safest place to be during a tornado is in a basement or a small inside room, away from windows.",
        q: "Where is the safest place to go during a tornado?",
        correct: "A basement or small inside room away from windows",
        wrong: ["Next to a big window", "Outside in a field", "On the roof"],
        hint: "Think of a small, sturdy spot with no glass nearby.",
        experiment: "🏠 Try this: With a grown-up, find the safest room in your house for stormy weather!"
      },
      {
        fact: "Tornadoes often form during strong thunderstorms, when warm and cool air mix and spin together.",
        q: "What kind of storm can sometimes create a tornado?",
        correct: "A strong thunderstorm",
        wrong: ["A light snow shower", "A sunny clear day", "A gentle breeze"],
        hint: "Think about storms with lots of dark clouds, thunder, and lightning.",
        experiment: "⛈️ Try this: Next time there's a thunderstorm, count the seconds between lightning and thunder!"
      },
      {
        fact: "A weather siren or alert warns people that a tornado might be coming, so they can find shelter.",
        q: "What warns people that a tornado might be coming?",
        correct: "A weather siren or alert",
        wrong: ["A rainbow", "A sunny sky", "A quiet, still morning"],
        hint: "It's a loud sound or a message on the news that tells you to take cover.",
        experiment: "📻 Try this: Ask a grown-up what your family's safety plan is for stormy weather!"
      },
      {
        fact: "Tornadoes usually don't last very long, often just a few minutes, before they weaken and disappear.",
        q: "About how long does a typical tornado usually last?",
        correct: "Just a few minutes",
        wrong: ["Several weeks", "A whole year", "Many months"],
        hint: "It's quick - shorter than a movie or a car ride.",
        experiment: "⏱️ Try this: Time one minute on a clock - a tornado is often not much longer than a few of those!"
      }
    ]
  },
  {
    id: 'g1-N-7',
    unit: 'N',
    title: 'Severe weather: hurricanes',
    type: 'mcq',
    pool: [
      {
        fact: "A hurricane is a huge, spinning storm that forms over warm ocean water, bringing strong wind and rain.",
        q: "What is a hurricane?",
        correct: "A huge spinning storm with strong wind and rain",
        wrong: ["A light breeze", "A single snowflake", "A calm sunny beach day"],
        hint: "It's a giant swirling storm, much bigger than a regular rainstorm.",
        experiment: "🌀 Try this: Stir water in a bowl in a circle to see a mini swirl, like a hurricane's spin!"
      },
      {
        fact: "Scientists use satellites in space to track hurricanes and warn people days before the storm arrives.",
        q: "How do scientists know a hurricane is coming, days in advance?",
        correct: "They track it with satellites",
        wrong: ["They guess randomly", "They wait until it arrives", "They ask a bird"],
        hint: "Think about cameras way up in space looking down at Earth.",
        experiment: "🛰️ Try this: Watch a weather map on TV or a tablet and see the spinning storm shape!"
      },
      {
        fact: "Before a hurricane arrives, families often pack a safety kit with water, food, and flashlights.",
        q: "What might a family pack before a hurricane arrives?",
        correct: "Water, food, and flashlights",
        wrong: ["Beach toys only", "Birthday balloons", "Garden flowers"],
        hint: "Think of things you'd need if you had to stay inside for a while.",
        experiment: "🎒 Try this: Help a grown-up find a flashlight and see where extra water is kept at home!"
      },
      {
        fact: "Hurricanes form over warm ocean water and get weaker once they move over land.",
        q: "Where do hurricanes get their energy to grow strong?",
        correct: "Warm ocean water",
        wrong: ["Cold mountain snow", "A dry desert", "A frozen lake"],
        hint: "Think about warm water, like a bathtub, but much bigger - the ocean!",
        experiment: "🌊 Try this: Feel the difference between warm and cold water in the sink!"
      },
      {
        fact: "The calm, clear middle of a hurricane is called the eye of the storm.",
        q: "What is the calm, clear center of a hurricane called?",
        correct: "The eye",
        wrong: ["The tail", "The heart", "The wing"],
        hint: "It's named after a part of your face that can look calmly in one direction.",
        experiment: "🌀 Try this: Draw a spiral on paper and mark a calm little circle in the very center!"
      }
    ]
  },
  {
    id: 'g1-O-1',
    unit: 'O',
    title: 'The daytime sky',
    type: 'mcq',
    pool: [
      {
        fact: "The sun is the brightest object we see in the daytime sky, giving us light and warmth!",
        q: "What is the brightest object in the daytime sky?",
        correct: "The sun",
        wrong: ["The moon", "A star", "A cloud"],
        hint: "You should never look straight at it - it's super bright!",
        experiment: "☀️ Try this: Feel the sun's warmth on your hand outside (but never look right at it)!"
      },
      {
        fact: "Clouds float in the daytime sky and are made of tiny water droplets floating together.",
        q: "What are clouds made of?",
        correct: "Tiny water droplets",
        wrong: ["Cotton candy", "Smoke", "Sand"],
        hint: "They form when water in the air gathers together up high.",
        experiment: "☁️ Try this: Lie back and watch the clouds - what shapes can you spot?"
      },
      {
        fact: "The sky looks blue during the day because sunlight bounces around in the air in a special way.",
        q: "What color does the sky usually look like during a clear day?",
        correct: "Blue",
        wrong: ["Purple", "Black", "Green"],
        hint: "Look up on a sunny afternoon - what color do you usually see?",
        experiment: "🔵 Try this: Look up on a clear day and check the color of the sky!"
      },
      {
        fact: "Sometimes you can see the moon in the daytime sky too, even though the sun is out!",
        q: "Besides the sun, what else can sometimes be seen in the daytime sky?",
        correct: "The moon",
        wrong: ["Shooting stars", "The Milky Way", "Constellations"],
        hint: "It's usually seen at night, but sometimes it's visible during the day too!",
        experiment: "🌙 Try this: Look up during the daytime - can you spot a pale moon in the sky?"
      },
      {
        fact: "Airplanes sometimes leave long white trails called contrails across the daytime sky.",
        q: "What do we call the long white trails an airplane sometimes leaves in the sky?",
        correct: "Contrails",
        wrong: ["Rainbows", "Sunbeams", "Shadows"],
        hint: "You can see them stretching behind a flying plane.",
        experiment: "✈️ Try this: Look for an airplane in the sky and see if it leaves a white trail behind it!"
      }
    ]
  },
  {
    id: 'g1-O-2',
    unit: 'O',
    title: 'The night sky',
    type: 'mcq',
    pool: [
      {
        fact: "Stars are giant balls of hot, glowing gas so far away they look like tiny twinkling dots!",
        q: "What are stars?",
        correct: "Giant balls of hot, glowing gas",
        wrong: ["Tiny pieces of ice", "Flying birds", "Bright clouds"],
        hint: "They twinkle way up high in the night sky, very far away.",
        experiment: "⭐ Try this: Go outside after dark and count how many stars you can spot!"
      },
      {
        fact: "The moon doesn't make its own light - it reflects light from the sun, like a mirror!",
        q: "Why does the moon glow in the night sky?",
        correct: "It reflects light from the sun",
        wrong: ["It makes its own fire", "It is a giant light bulb", "It borrows light from stars"],
        hint: "Think of a mirror bouncing light back at you.",
        experiment: "🌙 Try this: Shine a flashlight on a mirror in a dark room - see how it bounces light, just like the moon!"
      },
      {
        fact: "A shooting star isn't really a star at all - it's a tiny piece of space rock burning up in our sky!",
        q: "What is a 'shooting star' actually?",
        correct: "A tiny piece of space rock burning up",
        wrong: ["A star falling out of the sky", "A firefly flying high", "A piece of the moon breaking off"],
        hint: "It's small, fast, and burns brightly for just a second.",
        experiment: "🌠 Try this: On a clear night, watch the sky quietly for a few minutes to spot a shooting star!"
      },
      {
        fact: "Planets like Mars can sometimes be seen in the night sky, and unlike stars, they don't twinkle much!",
        q: "What is one thing you might see glowing steadily in the night sky, besides stars and the moon?",
        correct: "A planet",
        wrong: ["A rainbow", "A cloud", "The sun"],
        hint: "It looks like a bright dot, but it barely twinkles like the stars do.",
        experiment: "🔭 Try this: Look for a bright, steady dot in the night sky - it might be a planet!"
      },
      {
        fact: "A telescope is a special tool that helps us see faraway things in the night sky, like stars and planets, much more clearly.",
        q: "What tool helps us see faraway stars and planets more clearly?",
        correct: "A telescope",
        wrong: ["A microscope", "A magnifying glass", "A flashlight"],
        hint: "It's a long tube with special glass lenses for looking far away.",
        experiment: "🔭 Try this: Look through a paper towel tube at the sky - it's like a pretend telescope!"
      }
    ]
  },
  {
    id: 'g1-O-3',
    unit: 'O',
    title: 'Seasonal daylight patterns',
    type: 'mcq',
    pool: [
      {
        fact: "In summer, the days are longer, so the sun rises early and sets late in the evening!",
        q: "In which season do we usually get the MOST hours of daylight?",
        correct: "Summer",
        wrong: ["Winter", "Neither, it's always the same", "Only during a full moon"],
        hint: "Think about summer evenings - it stays light out really late!",
        experiment: "☀️ Try this: Notice what time it gets dark tonight, then compare it to winter!"
      },
      {
        fact: "In winter, the days are shorter, so it gets dark earlier in the evening.",
        q: "In which season do we usually get the FEWEST hours of daylight?",
        correct: "Winter",
        wrong: ["Summer", "It never changes", "Spring is always shortest"],
        hint: "Think about how early it gets dark when it's cold outside.",
        experiment: "🌙 Try this: Notice how early it gets dark on a winter evening!"
      },
      {
        fact: "As summer turns to fall, the days slowly get shorter and shorter, little by little.",
        q: "What happens to the length of daylight as summer changes into fall?",
        correct: "The days get shorter",
        wrong: ["The days get longer", "Daylight disappears completely", "Nothing changes at all"],
        hint: "Think about it slowly getting darker earlier and earlier each evening.",
        experiment: "📅 Try this: Check what time the sun sets each week this fall - watch it get earlier!"
      },
      {
        fact: "As winter turns to spring, the days slowly get longer, with more sunlight each day!",
        q: "What happens to daylight as winter turns into spring?",
        correct: "The days get longer",
        wrong: ["The days get shorter", "It stays dark all day", "Nothing changes at all"],
        hint: "Think about it staying light out a little later each evening.",
        experiment: "🌷 Try this: Notice if it's still light outside a bit later each week as spring arrives!"
      },
      {
        fact: "The amount of daylight changes throughout the year because of how Earth tilts as it circles the sun.",
        q: "Why does the amount of daylight change throughout the year?",
        correct: "Because Earth tilts as it circles the sun",
        wrong: ["Because the sun turns off sometimes", "Because clouds block it all year", "Because the moon blocks the sun"],
        hint: "It has to do with the way our planet is tilted while it travels around the sun.",
        experiment: "🌍 Try this: Spin a ball at a tilt while walking in a circle - that's like Earth traveling around the sun!"
      }
    ]
  },
  {
    id: 'g1-P-1',
    unit: 'P',
    title: 'Design a race car track',
    type: 'mcq',
    pool: [
      {
        fact: "Engineers test different track shapes to see which ones let toy cars go the fastest!",
        q: "Which shape of turn would make a toy car slow down the LEAST?",
        correct: "A wide, gentle curve",
        wrong: ["A sharp, tight corner", "A complete stop sign", "A steep uphill climb"],
        hint: "Think about which turn lets a car keep moving smoothly without much slowing.",
        experiment: "🚗 Try this: Roll a toy car around a wide curve, then a sharp corner - which one keeps it moving faster?"
      },
      {
        fact: "A smooth, flat track lets a toy car roll faster than a bumpy, rough track.",
        q: "Which track surface would let a toy car race the fastest?",
        correct: "A smooth, flat surface",
        wrong: ["A bumpy, rough surface", "A surface covered in sand", "A surface covered in carpet"],
        hint: "Think about which surface has less to slow the wheels down.",
        experiment: "🏁 Try this: Roll a toy car on a smooth floor, then on a carpet - which is faster?"
      },
      {
        fact: "A downhill ramp gives a toy car extra speed because of gravity pulling it down!",
        q: "Which part of a track would help a toy car speed up the MOST?",
        correct: "A downhill ramp",
        wrong: ["A flat straight path", "An uphill ramp", "A full stop"],
        hint: "Think about gravity - which direction pulls things faster?",
        experiment: "⛰️ Try this: Roll a toy car down a ramp, then push it on flat ground - which goes faster?"
      },
      {
        fact: "Guard rails along the edges of a track help keep a fast-moving toy car from flying off the side!",
        q: "What could engineers add to a track to keep a fast car from flying off the edge on a curve?",
        correct: "Guard rails along the sides",
        wrong: ["More sharp corners", "A rougher surface", "A steeper hill"],
        hint: "Think about something that acts like a wall to keep the car safely on the path.",
        experiment: "🧱 Try this: Build little wall 'guard rails' out of blocks along a toy car track's curve!"
      },
      {
        fact: "A wider track gives a car more room to turn, which helps it keep its speed better than a narrow track.",
        q: "Which track would help a fast car turn a corner more smoothly: a wide track or a narrow track?",
        correct: "A wide track",
        wrong: ["A narrow track", "Neither makes a difference", "A track with no turns is always better"],
        hint: "Think about which track gives the car more room to curve around safely.",
        experiment: "📏 Try this: Build a wide curve and a narrow curve with blocks, then race a toy car through both!"
      }
    ]
  },
  {
    id: 'g1-P-2',
    unit: 'P',
    title: 'Design a sunshade',
    type: 'mcq',
    pool: [
      {
        fact: "A good sunshade blocks a lot of sunlight to help keep you cool and protect your skin!",
        q: "Which material would make the BEST sunshade: one that blocks a lot of light, or one that blocks only a little light?",
        correct: "One that blocks a lot of light",
        wrong: ["One that blocks only a little light", "One that lets all the light through", "It doesn't matter which one"],
        hint: "Think about what would keep the most sunshine off of you.",
        experiment: "🕶️ Try this: Hold different fabrics up to a sunny window and see which one blocks the most light!"
      },
      {
        fact: "Dark, thick fabric usually blocks more sunlight than thin, see-through fabric.",
        q: "Which fabric would make a better sunshade: thick and dark, or thin and see-through?",
        correct: "Thick and dark",
        wrong: ["Thin and see-through", "Neither blocks any sunlight", "Both work exactly the same"],
        hint: "Think about which fabric you can see less light through when you hold it up.",
        experiment: "☂️ Try this: Hold a thick towel and a thin scarf up to the sun and compare how much light passes through!"
      },
      {
        fact: "A sunshade with a wide top covers more area and casts a bigger patch of shade underneath.",
        q: "Which sunshade would cover more area with shade: a wide umbrella or a narrow one?",
        correct: "A wide umbrella",
        wrong: ["A narrow umbrella", "They cover the same amount", "Neither one makes shade"],
        hint: "Think about which shape would block sunlight over a bigger space.",
        experiment: "☂️ Try this: Open an umbrella outside and see how big a shady circle it makes on the ground!"
      },
      {
        fact: "Shiny, light-colored materials can reflect sunlight away, helping keep the shaded area cooler.",
        q: "Which color sunshade would likely stay cooler in the sun: light-colored or dark-colored?",
        correct: "Light-colored",
        wrong: ["Dark-colored", "Color doesn't matter at all", "Only clear materials work"],
        hint: "Think about which color you'd rather wear on a very hot, sunny day.",
        experiment: "🌡️ Try this: Touch a light-colored shirt and a dark-colored shirt after they've been in the sun - which feels warmer?"
      },
      {
        fact: "A sturdy frame keeps a sunshade from collapsing or blowing away, so it can do its job well.",
        q: "Why does a good sunshade need a sturdy frame to hold it up?",
        correct: "So it stays up and doesn't collapse or blow away",
        wrong: ["So it can block sound instead of light", "So it can hold water for drinking", "So it changes colors in the sun"],
        hint: "Think about what would happen to a wobbly, weak sunshade on a windy day.",
        experiment: "🏗️ Try this: Build a small sunshade with blocks and craft sticks - does it stay standing on its own?"
      }
    ]
  },
  {
    id: 'g1-P-3',
    unit: 'P',
    title: 'Design knee pads',
    type: 'mcq',
    pool: [
      {
        fact: "Good knee pads use soft, squishy padding to cushion your knee if you fall down!",
        q: "Which material would protect knees best if you fall: soft and squishy, or hard and stiff?",
        correct: "Soft and squishy",
        wrong: ["Hard and stiff", "Thin and see-through", "Wet and slippery"],
        hint: "Think about which material would cushion a bump instead of hurting more.",
        experiment: "🛡️ Try this: Press your knee gently onto a soft pillow, then a hard table - which feels safer to fall on?"
      },
      {
        fact: "Knee pads need straps that fit snugly, so they stay in place while you play and move around.",
        q: "Why do knee pads need snug straps that fit well?",
        correct: "So they stay in place while you move",
        wrong: ["So they can fall off easily", "So they make more noise", "So they change color"],
        hint: "Think about what would happen if the straps were too loose while you were running.",
        experiment: "🎽 Try this: Try wrapping a soft strap around your knee - does it stay put when you move your leg?"
      },
      {
        fact: "A hard outer shell on a knee pad can help spread out the force of a bump, protecting the knee underneath.",
        q: "What is the job of the hard outer shell on some knee pads?",
        correct: "To spread out the force of a bump",
        wrong: ["To make your knee feel wet", "To make your leg glow in the dark", "To make it easier to slip"],
        hint: "Think about how a helmet works to protect your head - the shell spreads out a hit.",
        experiment: "🥚 Try this: Wrap a spoon in soft padding, then in nothing, and gently tap both on a table - which feels safer?"
      },
      {
        fact: "Knee pads should bend a little at the knee joint so you can still walk, run, and crawl comfortably.",
        q: "Why should knee pads still bend a little at the knee?",
        correct: "So you can still move your leg comfortably",
        wrong: ["So your leg can't bend at all", "So they feel heavier", "So they make you taller"],
        hint: "Think about whether you could walk if your knee pad was totally stiff and straight.",
        experiment: "🦵 Try this: Bend your knee while wearing a soft bandage wrap - can you still move easily?"
      },
      {
        fact: "Testing knee pads by gently kneeling on a soft mat helps engineers see if the padding really protects the knee.",
        q: "How could you test if a knee pad design really protects a knee?",
        correct: "Gently kneel on a soft mat while wearing it",
        wrong: ["Never test it at all", "Only look at its color", "Only smell the material"],
        hint: "Think about actually trying it out safely to see if it works.",
        experiment: "🧪 Try this: Put a padded sock over your knee and gently kneel on a soft rug to see how it feels!"
      }
    ]
  }
];
