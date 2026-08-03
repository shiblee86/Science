// Grade 1 Life Science skill content (Units H, I, J).
// NOTE: g1-H-9 and g1-I-2 are authored elsewhere and intentionally excluded here.
const G1_LIFE = [

  // ===================== UNIT H: ANIMALS =====================

  {
    id: 'g1-H-1',
    unit: 'H',
    title: 'What do animals need to survive?',
    type: 'mcq',
    pool: [
      {
        fact: "Elephants can drink up to 50 gallons of water in one day!",
        q: "Which of these do all animals need to survive?",
        correct: "Food, water, and air",
        wrong: ["Money", "A television", "Shoes"],
        hint: "Think about what keeps your body strong and healthy every day.",
        experiment: "🔍 Try this: Watch how much water your pet or a backyard bird drinks in a day."
      },
      {
        fact: "Fish use gills to take oxygen right out of the water!",
        q: "What do fish need to breathe underwater?",
        correct: "Oxygen from the water",
        wrong: ["Oxygen from a balloon", "Sunlight through their skin", "Nothing, fish don't breathe"],
        hint: "Look for the flaps on the side of a fish's head.",
        experiment: "🔍 Try this: Watch a fish in a tank or pond and count how fast its gills move."
      },
      {
        fact: "Bears sleep in cozy dens all winter long, this is called hibernation!",
        q: "Why do bears need a den in winter?",
        correct: "For shelter to stay safe and warm",
        wrong: ["To find more food", "To meet other bears", "To play games"],
        hint: "Think about where you go to stay warm when it's cold outside.",
        experiment: "🔍 Try this: Build a pretend den out of blankets and pillows."
      },
      {
        fact: "Chameleons can move each of their eyes in a different direction at the same time!",
        q: "Why does a chameleon need space to live and hunt?",
        correct: "To find food and stay away from danger",
        wrong: ["To watch TV", "To ride a bike", "To go to school"],
        hint: "Think about needing room to move around safely.",
        experiment: "🔍 Try this: Notice how much space a pet or backyard bug uses in one day."
      },
      {
        fact: "Every breath you take fills your lungs with air, just like it does for dogs and cats!",
        q: "What do animals need in order to breathe?",
        correct: "Air",
        wrong: ["Sand", "Rocks", "Plastic"],
        hint: "Take a big breath in right now, what are you breathing?",
        experiment: "🔍 Try this: Take five slow deep breaths and feel your chest rise and fall."
      }
    ]
  },

  {
    id: 'g1-H-2',
    unit: 'H',
    title: 'How do animals use their body parts?',
    type: 'match',
    pool: [
      {
        prompt: "Match each animal body part to what it helps the animal do.",
        pairs: [
          {left: "🦫 Beaver's teeth", right: "Chewing down trees"},
          {left: "🦅 Eagle's eyes", right: "Spotting prey far away"},
          {left: "🐘 Elephant's trunk", right: "Grabbing food and water"},
          {left: "🦔 Hedgehog's spikes", right: "Protecting from predators"}
        ],
        hint: "Think about what each animal does every day to eat or stay safe.",
        explanation: "Animals have special body parts that are perfectly shaped to help them eat, see, or stay safe."
      },
      {
        prompt: "Match each body part to its job.",
        pairs: [
          {left: "🦉 Owl's ears", right: "Hearing tiny sounds at night"},
          {left: "🦒 Giraffe's long neck", right: "Reaching leaves high in trees"},
          {left: "🦆 Duck's webbed feet", right: "Paddling through water"},
          {left: "🐫 Camel's hump", right: "Storing fat for energy"}
        ],
        hint: "Think about where each animal lives and what it needs to do there.",
        explanation: "Special body parts help animals get food and move around in the place they call home."
      },
      {
        prompt: "Match each body part to what it helps the animal do.",
        pairs: [
          {left: "🦇 Bat's wings", right: "Flying at night to find food"},
          {left: "🐿️ Squirrel's sharp claws", right: "Climbing up trees"},
          {left: "🦭 Seal's flippers", right: "Swimming fast in the ocean"},
          {left: "🐇 Rabbit's long ears", right: "Listening for danger"}
        ],
        hint: "Think about how each animal moves or stays safe from danger.",
        explanation: "An animal's body parts help it move, hunt, or listen out for danger."
      },
      {
        prompt: "Match each body part to its special job.",
        pairs: [
          {left: "🦎 Chameleon's skin", right: "Changing color to hide"},
          {left: "🐻 Bear's sharp claws", right: "Digging and catching fish"},
          {left: "🦈 Shark's sharp teeth", right: "Tearing up food"},
          {left: "🦋 Butterfly's proboscis", right: "Sipping nectar from flowers"}
        ],
        hint: "Think about how each animal eats or hides from other animals.",
        explanation: "Teeth, claws, and other body parts all help animals find and eat their food."
      },
      {
        prompt: "Match each body part to what it helps the animal do.",
        pairs: [
          {left: "🐍 Snake's tongue", right: "Smelling the air around it"},
          {left: "🦔 Porcupine's quills", right: "Poking away hungry predators"},
          {left: "🐦 Woodpecker's beak", right: "Pecking holes in wood for bugs"},
          {left: "🐒 Monkey's tail", right: "Gripping branches while climbing"}
        ],
        hint: "Think about how each animal senses the world or stays safe.",
        explanation: "Animals use their unique body parts to sense, defend themselves, and get around."
      }
    ]
  },

  {
    id: 'g1-H-3',
    unit: 'H',
    title: 'Match animals to their parents',
    type: 'match',
    pool: [
      {
        prompt: "Match each animal to what its baby is called.",
        pairs: [
          {left: "🐄 Cow", right: "Calf"},
          {left: "🐕 Dog", right: "Puppy"},
          {left: "🐈 Cat", right: "Kitten"},
          {left: "🐎 Horse", right: "Foal"}
        ],
        hint: "Think about the special names we use for baby animals.",
        explanation: "Many baby animals have their own special name, different from their parent's name."
      },
      {
        prompt: "Match each animal to what its baby is called.",
        pairs: [
          {left: "🐑 Sheep", right: "Lamb"},
          {left: "🐖 Pig", right: "Piglet"},
          {left: "🐐 Goat", right: "Kid"},
          {left: "🦆 Duck", right: "Duckling"}
        ],
        hint: "Think about the cute nicknames farm animal babies have.",
        explanation: "Farm animals often have special baby names, like lamb, piglet, kid, and duckling."
      },
      {
        prompt: "Match each animal to what its baby is called.",
        pairs: [
          {left: "🦁 Lion", right: "Cub"},
          {left: "🐔 Chicken", right: "Chick"},
          {left: "🐸 Frog", right: "Tadpole"},
          {left: "🦢 Swan", right: "Cygnet"}
        ],
        hint: "Think about baby names for wild animals and animals near water.",
        explanation: "Wild animal babies have their own names too, like cub, chick, tadpole, and cygnet."
      },
      {
        prompt: "Match each animal to what its baby is called.",
        pairs: [
          {left: "🐻 Bear", right: "Cub"},
          {left: "🦉 Owl", right: "Owlet"},
          {left: "🐰 Rabbit", right: "Kit"},
          {left: "🦌 Deer", right: "Fawn"}
        ],
        hint: "Think about baby names for forest animals.",
        explanation: "Forest animals like bears, owls, rabbits, and deer all have special baby names."
      },
      {
        prompt: "Match each animal to what its baby is called.",
        pairs: [
          {left: "🐘 Elephant", right: "Calf"},
          {left: "🦘 Kangaroo", right: "Joey"},
          {left: "🦢 Goose", right: "Gosling"},
          {left: "🐝 Bee", right: "Larva"}
        ],
        hint: "Think about baby names for big animals and small insects.",
        explanation: "Even very different animals, from elephants to bees, have their own special baby names."
      }
    ]
  },

  {
    id: 'g1-H-4',
    unit: 'H',
    title: 'Behaviors that help baby animals survive',
    type: 'mcq',
    pool: [
      {
        fact: "A fawn's spotted coat looks just like sunlight through leaves!",
        q: "Why does a baby deer (fawn) lie very still in the grass?",
        correct: "To hide from predators using camouflage",
        wrong: ["To take a nap for fun", "To practice running", "To find its favorite food"],
        hint: "Think about how its spotted coat helps it blend in with its surroundings.",
        experiment: "🔍 Try this: Try to spot a brown toy hidden in a pile of leaves outside."
      },
      {
        fact: "Baby ducklings learn to recognize their mother within hours of hatching!",
        q: "Why do baby ducklings follow their mother everywhere?",
        correct: "To stay safe and learn where to find food",
        wrong: ["Because they are lost", "Because they like swimming in a line", "Because it is a game"],
        hint: "Think about who protects baby ducks from danger.",
        experiment: "🔍 Try this: Watch a line of ducks or geese if you spot them at a pond."
      },
      {
        fact: "Parent birds can make hundreds of feeding trips to the nest in a single day!",
        q: "Why do baby birds open their mouths wide and chirp loudly when a parent lands on the nest?",
        correct: "To ask their parent for food",
        wrong: ["To sing a song", "To scare the parent away", "To say goodnight"],
        hint: "Think about what usually happens right after they chirp.",
        experiment: "🔍 Try this: Listen for baby birds chirping loudly near a nest in springtime."
      },
      {
        fact: "A zebra's stripes make it hard for predators to pick out just one animal in a big herd!",
        q: "Why do baby zebras stay close to the herd?",
        correct: "There is safety in numbers from predators",
        wrong: ["To find shade only", "To learn new colors", "To play tag"],
        hint: "Think about how many eyes are watching for danger in a big group.",
        experiment: "🔍 Try this: Notice how birds or fish often move together in a group."
      },
      {
        fact: "A playing-dead opossum can stay still for minutes, even with its tongue hanging out!",
        q: "Why does a baby opossum sometimes flop over and play dead?",
        correct: "To trick a predator into losing interest",
        wrong: ["Because it is very tired", "Because it is sick", "Because it is cold"],
        hint: "Think about what a predator usually does when its food stops moving.",
        experiment: "🔍 Try this: Notice how staying very still can help you go unnoticed in hide-and-seek."
      }
    ]
  },

  {
    id: 'g1-H-5',
    unit: 'H',
    title: 'Where do dromedary camels and polar bears live?',
    type: 'match',
    pool: [
      {
        prompt: "Match each animal to the place it lives.",
        pairs: [
          {left: "🐫 Dromedary camel", right: "Hot desert"},
          {left: "🐻‍❄️ Polar bear", right: "Arctic sea ice"},
          {left: "🐧 Penguin", right: "Icy Antarctica"},
          {left: "🐟 Clownfish", right: "Coral reef"}
        ],
        hint: "Think about which animal has a hump for hot sand, and which has thick fur for cold ice.",
        explanation: "Dromedary camels live in hot deserts and store fat in their humps, while polar bears live on Arctic sea ice and stay warm with thick fur."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🐫 Dromedary camel", right: "Hot desert"},
          {left: "🐻‍❄️ Polar bear", right: "Arctic sea ice"},
          {left: "🦭 Seal", right: "Cold ocean water"},
          {left: "🦂 Scorpion", right: "Sandy dunes"}
        ],
        hint: "One home is freezing cold and one home is scorching hot.",
        explanation: "Camels are built for hot, dry deserts, while polar bears are built for the icy, cold Arctic."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🐫 Dromedary camel", right: "Hot desert"},
          {left: "🐻‍❄️ Polar bear", right: "Arctic sea ice"},
          {left: "🦊 Arctic fox", right: "Snowy tundra"},
          {left: "🦎 Desert iguana", right: "Sandy desert floor"}
        ],
        hint: "Think about fur for the cold and long legs for walking on hot sand.",
        explanation: "Camels roam hot, sandy deserts, and polar bears roam the frozen Arctic ice."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🐫 Dromedary camel", right: "Hot desert"},
          {left: "🐻‍❄️ Polar bear", right: "Arctic sea ice"},
          {left: "🐦 Snowy owl", right: "Frozen Arctic land"},
          {left: "🦂 Desert scorpion", right: "Rocky desert"}
        ],
        hint: "Think about which place has snow all year and which has hot sand all year.",
        explanation: "Camels survive with little water in hot deserts, while polar bears hunt seals on Arctic ice."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🐫 Dromedary camel", right: "Hot desert"},
          {left: "🐻‍❄️ Polar bear", right: "Arctic sea ice"},
          {left: "🐋 Narwhal", right: "Arctic ocean waters"},
          {left: "🐍 Desert sidewinder snake", right: "Hot sandy dunes"}
        ],
        hint: "Match each animal's body covering to a hot or cold place.",
        explanation: "Camels are desert animals built for heat, and polar bears are Arctic animals built for cold."
      }
    ]
  },

  {
    id: 'g1-H-6',
    unit: 'H',
    title: 'Where do giraffes and beavers live?',
    type: 'match',
    pool: [
      {
        prompt: "Match each animal to the place it lives.",
        pairs: [
          {left: "🦒 Giraffe", right: "African savanna"},
          {left: "🦫 Beaver", right: "Freshwater river"},
          {left: "🐧 Penguin", right: "Icy Antarctica"},
          {left: "🐬 Dolphin", right: "Ocean waters"}
        ],
        hint: "Think about a grassy plain with tall trees, and a river with trees for building.",
        explanation: "Giraffes live on the grassy African savanna, while beavers live in and around rivers with trees."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🦒 Giraffe", right: "African savanna"},
          {left: "🦫 Beaver", right: "Freshwater river"},
          {left: "🦁 Lion", right: "Grassy plains"},
          {left: "🐊 Alligator", right: "Swampy wetland"}
        ],
        hint: "Think about a warm grassland home and a wet, tree-lined home.",
        explanation: "Giraffes graze on the African savanna, and beavers build dams in rivers and ponds."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🦒 Giraffe", right: "African savanna"},
          {left: "🦫 Beaver", right: "Freshwater river"},
          {left: "🦉 Owl", right: "Forest trees"},
          {left: "🐫 Camel", right: "Hot desert"}
        ],
        hint: "One animal eats leaves from tall trees, one animal chews down trees for a dam.",
        explanation: "Giraffes reach leaves in the savanna, while beavers gnaw down trees near rivers."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🦒 Giraffe", right: "African savanna"},
          {left: "🦫 Beaver", right: "Freshwater river"},
          {left: "🐘 Elephant", right: "African grassland"},
          {left: "🦆 Duck", right: "Calm pond"}
        ],
        hint: "Think about wide open grassland and calm running water.",
        explanation: "Giraffes are savanna animals, and beavers are river animals that build their own dams."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🦒 Giraffe", right: "African savanna"},
          {left: "🦫 Beaver", right: "Freshwater river"},
          {left: "🦜 Parrot", right: "Rainforest treetops"},
          {left: "🐻 Bear", right: "Forest near a stream"}
        ],
        hint: "Think about which animal has a very long neck for reaching leaves.",
        explanation: "Giraffes' long necks help them eat from savanna trees, and beavers' homes are built in rivers."
      }
    ]
  },

  {
    id: 'g1-H-7',
    unit: 'H',
    title: 'Where do whale sharks and tree frogs live?',
    type: 'match',
    pool: [
      {
        prompt: "Match each animal to the place it lives.",
        pairs: [
          {left: "🦈 Whale shark", right: "Warm ocean waters"},
          {left: "🐸 Tree frog", right: "Rainforest trees"},
          {left: "🐢 Sea turtle", right: "Coral reef"},
          {left: "🦜 Toucan", right: "Rainforest canopy"}
        ],
        hint: "One animal swims in the open sea, one climbs among wet, green leaves.",
        explanation: "Whale sharks swim in warm oceans, while tree frogs live up in rainforest trees."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🦈 Whale shark", right: "Warm ocean waters"},
          {left: "🐸 Tree frog", right: "Rainforest trees"},
          {left: "🐬 Dolphin", right: "Open sea"},
          {left: "🦥 Sloth", right: "Rainforest branches"}
        ],
        hint: "Think about the biggest fish in the ocean and a tiny frog high in the trees.",
        explanation: "Whale sharks are the biggest fish and live in warm seas, while tree frogs live in humid rainforest trees."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🦈 Whale shark", right: "Warm ocean waters"},
          {left: "🐸 Tree frog", right: "Rainforest trees"},
          {left: "🐙 Octopus", right: "Ocean floor"},
          {left: "🐆 Jaguar", right: "Tropical rainforest"}
        ],
        hint: "Think about gills for breathing underwater and sticky toe pads for climbing.",
        explanation: "Whale sharks need warm ocean water, and tree frogs need the wet leaves of a rainforest."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🦈 Whale shark", right: "Warm ocean waters"},
          {left: "🐸 Tree frog", right: "Rainforest trees"},
          {left: "🐡 Pufferfish", right: "Tropical reef waters"},
          {left: "🦋 Blue morpho butterfly", right: "Rainforest flowers"}
        ],
        hint: "One home is deep and wet with saltwater, one home is high and wet with rain.",
        explanation: "Whale sharks glide through tropical oceans, while tree frogs cling to leaves in rainforests."
      },
      {
        prompt: "Match each animal to where it lives.",
        pairs: [
          {left: "🦈 Whale shark", right: "Warm ocean waters"},
          {left: "🐸 Tree frog", right: "Rainforest trees"},
          {left: "🐳 Blue whale", right: "Deep open ocean"},
          {left: "🦎 Chameleon", right: "Rainforest leaves"}
        ],
        hint: "Think about which animal has fins and which animal has sticky feet.",
        explanation: "Whale sharks are ocean giants, and tree frogs are small climbers of the rainforest."
      }
    ]
  },

  {
    id: 'g1-H-8',
    unit: 'H',
    title: 'The five senses',
    type: 'match',
    pool: [
      {
        prompt: "Match each sense to something you might see, hear, smell, taste, or feel.",
        pairs: [
          {left: "👀 Eyes", right: "Seeing a rainbow"},
          {left: "👂 Ears", right: "Hearing thunder"},
          {left: "👃 Nose", right: "Smelling fresh cookies"},
          {left: "👅 Tongue", right: "Tasting a sour lemon"},
          {left: "✋ Skin", right: "Feeling a soft blanket"}
        ],
        hint: "Think about which body part you use for each example.",
        explanation: "Your eyes, ears, nose, tongue, and skin are the five senses that help you learn about the world."
      },
      {
        prompt: "Match each sense to an example.",
        pairs: [
          {left: "👀 Eyes", right: "Seeing bright stars at night"},
          {left: "👂 Ears", right: "Hearing a barking dog"},
          {left: "👃 Nose", right: "Smelling a skunk"},
          {left: "👅 Tongue", right: "Tasting sweet honey"},
          {left: "✋ Skin", right: "Feeling hot sand"}
        ],
        hint: "Think about which body part notices each thing.",
        explanation: "Each sense organ picks up different information: sight, sound, smell, taste, or touch."
      },
      {
        prompt: "Match each sense to an example.",
        pairs: [
          {left: "👀 Eyes", right: "Seeing a butterfly land"},
          {left: "👂 Ears", right: "Hearing music play"},
          {left: "👃 Nose", right: "Smelling fresh flowers"},
          {left: "👅 Tongue", right: "Tasting salty popcorn"},
          {left: "✋ Skin", right: "Feeling a cold ice cube"}
        ],
        hint: "Think about which part of your body you'd use for each one.",
        explanation: "We use our five senses together every day to explore and enjoy the world around us."
      },
      {
        prompt: "Match each sense to an example.",
        pairs: [
          {left: "👀 Eyes", right: "Seeing fireworks in the sky"},
          {left: "👂 Ears", right: "Hearing a car honk"},
          {left: "👃 Nose", right: "Smelling fresh bread baking"},
          {left: "👅 Tongue", right: "Tasting a spicy pepper"},
          {left: "✋ Skin", right: "Feeling a bumpy pinecone"}
        ],
        hint: "Think about which sense organ matches each example.",
        explanation: "Sight, hearing, smell, taste, and touch each give your brain different kinds of information."
      },
      {
        prompt: "Match each sense to an example.",
        pairs: [
          {left: "👀 Eyes", right: "Seeing a friend wave"},
          {left: "👂 Ears", right: "Hearing raindrops fall"},
          {left: "👃 Nose", right: "Smelling popcorn at the movies"},
          {left: "👅 Tongue", right: "Tasting a crunchy apple"},
          {left: "✋ Skin", right: "Feeling a soft kitten's fur"}
        ],
        hint: "Think about which body part is doing the sensing in each example.",
        explanation: "Your five senses work together to help you understand everything happening around you."
      }
    ]
  },

  // ===================== UNIT I: PLANTS =====================

  {
    id: 'g1-I-1',
    unit: 'I',
    title: 'What do plants need to survive?',
    type: 'mcq',
    pool: [
      {
        fact: "Plants use sunlight to make their own food, this is called photosynthesis!",
        q: "What do plants need from the sun?",
        correct: "Sunlight to make food",
        wrong: ["Music to grow", "Shade all day", "Nothing from the sun"],
        hint: "Think about what a plant is reaching toward when it grows near a window.",
        experiment: "🔍 Try this: Put one plant in sunlight and one in a dark closet for a week and compare them."
      },
      {
        fact: "Some tree roots can grow even longer than the tree is tall!",
        q: "Why do plant roots need water?",
        correct: "To drink and carry nutrients up the stem",
        wrong: ["To make the plant taller instantly", "To change the flower's color", "To attract more bees only"],
        hint: "Think about what happens to a plant's leaves when it hasn't been watered.",
        experiment: "🔍 Try this: Skip watering a plant for a few days and see what happens to its leaves."
      },
      {
        fact: "A tiny spoonful of healthy soil can hold millions of living things!",
        q: "Why do plants need soil?",
        correct: "Soil holds the roots and has nutrients",
        wrong: ["Soil makes the leaves shiny", "Soil keeps all bugs away", "Plants don't need soil at all"],
        hint: "Think about what holds a plant steady in the ground.",
        experiment: "🔍 Try this: Feel dry soil and wet soil, notice how different they feel."
      },
      {
        fact: "Plants breathe in through tiny holes in their leaves called stomata!",
        q: "What gas do plants take in from the air to help make food?",
        correct: "Carbon dioxide",
        wrong: ["Helium", "Smoke", "Steam"],
        hint: "Think about the gas that people and animals breathe out.",
        experiment: "🔍 Try this: Breathe out gently near a plant, you're giving it a little carbon dioxide!"
      },
      {
        fact: "Giant sequoia tree roots can spread out over an entire acre of ground!",
        q: "Why do plants need space to grow?",
        correct: "So roots and leaves have room to spread out",
        wrong: ["So they can travel to new places", "So they can hide from the sun", "So they can change color"],
        hint: "Think about what happens when too many seeds are planted too close together.",
        experiment: "🔍 Try this: Plant two seeds close together and two far apart, then see which grow better."
      }
    ]
  },

  {
    id: 'g1-I-3',
    unit: 'I',
    title: 'Identify what plant parts do',
    type: 'match',
    pool: [
      {
        prompt: "Match each plant part to what it does.",
        pairs: [
          {left: "🌱 Roots", right: "Soaking up water from the soil"},
          {left: "🌿 Stem", right: "Holding the plant up straight"},
          {left: "🍃 Leaves", right: "Making food from sunlight"},
          {left: "🌸 Flower", right: "Making seeds for new plants"}
        ],
        hint: "Think about which part is underground and which parts are above ground.",
        explanation: "Each plant part has its own job: roots drink, the stem stands tall, leaves make food, and flowers make seeds."
      },
      {
        prompt: "Match each plant part to its job.",
        pairs: [
          {left: "🌱 Roots", right: "Anchoring the plant in the ground"},
          {left: "🌿 Stem", right: "Carrying water up to the leaves"},
          {left: "🍃 Leaves", right: "Breathing in air for the plant"},
          {left: "🍎 Fruit", right: "Protecting the seeds inside"}
        ],
        hint: "Think about how water travels from the ground all the way up to the leaves.",
        explanation: "Water travels from the roots, up the stem, and into the leaves, while fruit protects the seeds."
      },
      {
        prompt: "Match each plant part to its job.",
        pairs: [
          {left: "🌱 Roots", right: "Storing food for the plant"},
          {left: "🌿 Stem", right: "Moving nutrients through the plant"},
          {left: "🌸 Flower", right: "Attracting bees with bright colors"},
          {left: "🍃 Leaves", right: "Catching sunlight to make energy"}
        ],
        hint: "Think about which part attracts insects with its bright color and smell.",
        explanation: "Flowers attract helpers like bees, while leaves catch sunlight to make the plant's food."
      },
      {
        prompt: "Match each plant part to its job.",
        pairs: [
          {left: "🌱 Roots", right: "Drinking water like a straw"},
          {left: "🌿 Stem", right: "Supporting the leaves and flowers"},
          {left: "🍃 Leaves", right: "Turning sunlight into food"},
          {left: "🌰 Seed", right: "Growing into a brand new plant"}
        ],
        hint: "Think about what a tiny seed can eventually grow into.",
        explanation: "A seed can grow into a whole new plant, with roots, a stem, and leaves of its own."
      },
      {
        prompt: "Match each plant part to its job.",
        pairs: [
          {left: "🌱 Roots", right: "Keeping the plant from blowing away"},
          {left: "🌿 Stem", right: "Carrying food to every part of the plant"},
          {left: "🌸 Flower", right: "Making pretty smells to attract bugs"},
          {left: "🍃 Leaves", right: "Letting the plant breathe fresh air"}
        ],
        hint: "Think about what keeps a plant firmly in place even in strong wind.",
        explanation: "Roots anchor the plant, the stem moves food around, and leaves and flowers each have their own job too."
      }
    ]
  },

  {
    id: 'g1-I-4',
    unit: 'I',
    title: 'Match plants to their parents',
    type: 'match',
    pool: [
      {
        prompt: "Match each seed to the plant it grows into.",
        pairs: [
          {left: "🌰 Acorn", right: "Oak tree"},
          {left: "🌻 Sunflower seed", right: "Sunflower plant"},
          {left: "🍎 Apple seed", right: "Apple tree"},
          {left: "🌽 Corn kernel", right: "Corn plant"}
        ],
        hint: "Think about which grown-up plant each little seed will look like one day.",
        explanation: "A seed grows up to look like the parent plant that it came from."
      },
      {
        prompt: "Match each seed to the plant it grows into.",
        pairs: [
          {left: "🥭 Mango seed", right: "Mango tree"},
          {left: "🎃 Pumpkin seed", right: "Pumpkin vine"},
          {left: "🌲 Pinecone seed", right: "Pine tree"},
          {left: "🍓 Strawberry seed", right: "Strawberry plant"}
        ],
        hint: "Every seed is a tiny copy of the plant that made it.",
        explanation: "Seeds grow into new plants that look just like the parent plant they came from."
      },
      {
        prompt: "Match each seed to the plant it grows into.",
        pairs: [
          {left: "🥕 Carrot seed", right: "Carrot plant"},
          {left: "🍅 Tomato seed", right: "Tomato plant"},
          {left: "🌴 Coconut", right: "Palm tree"},
          {left: "🌾 Wheat seed", right: "Wheat plant"}
        ],
        hint: "Think about what kind of plant grows a coconut.",
        explanation: "A coconut is really a giant seed that grows into a tall palm tree, just like its parent."
      },
      {
        prompt: "Match each seed to the plant it grows into.",
        pairs: [
          {left: "🍇 Grape seed", right: "Grape vine"},
          {left: "🍋 Lemon seed", right: "Lemon tree"},
          {left: "🌷 Tulip bulb", right: "Tulip flower"},
          {left: "🥔 Potato eye", right: "Potato plant"}
        ],
        hint: "Some plants grow from seeds, and some grow from a bulb or an eye.",
        explanation: "Not all new plants start as seeds, bulbs and potato eyes can also grow into new plants."
      },
      {
        prompt: "Match each seed to the plant it grows into.",
        pairs: [
          {left: "🌹 Rose seed", right: "Rose bush"},
          {left: "🍑 Peach pit", right: "Peach tree"},
          {left: "🥜 Peanut seed", right: "Peanut plant"},
          {left: "🍒 Cherry pit", right: "Cherry tree"}
        ],
        hint: "Think about the big pit found inside a juicy peach or cherry.",
        explanation: "A pit or seed inside a fruit can grow into a brand new tree just like the parent tree."
      }
    ]
  },

  {
    id: 'g1-I-5',
    unit: 'I',
    title: 'Identify types of plants',
    type: 'sort',
    pool: [
      {
        prompt: "Tap all the pictures that show a TREE.",
        items: [
          {label: "🌳 Oak tree", match: true},
          {label: "🌻 Sunflower", match: false},
          {label: "🌲 Pine tree", match: true},
          {label: "🌵 Cactus", match: false},
          {label: "🌴 Palm tree", match: true},
          {label: "🌷 Tulip", match: false}
        ],
        hint: "Trees are tall plants with a hard, woody trunk.",
        explanation: "Oak, pine, and palm trees are all trees because they have a tall, woody trunk."
      },
      {
        prompt: "Tap all the pictures that show a FLOWER.",
        items: [
          {label: "🌹 Rose", match: true},
          {label: "🌳 Oak tree", match: false},
          {label: "🌻 Sunflower", match: true},
          {label: "🌿 Fern", match: false},
          {label: "🌷 Tulip", match: true},
          {label: "🌾 Wheat", match: false}
        ],
        hint: "Flowers are often colorful and grow at the top of a stem.",
        explanation: "Roses, sunflowers, and tulips are all flowers, with bright colorful petals."
      },
      {
        prompt: "Tap all the pictures that show a plant that grows in WATER.",
        items: [
          {label: "🪷 Water lily", match: true},
          {label: "🌵 Cactus", match: false},
          {label: "🌊 Seaweed", match: true},
          {label: "🌳 Oak tree", match: false},
          {label: "🍀 Duckweed", match: true},
          {label: "🌻 Sunflower", match: false}
        ],
        hint: "Water plants float on ponds, lakes, or oceans instead of growing in soil.",
        explanation: "Water lilies, seaweed, and duckweed are all plants that live and grow in water."
      },
      {
        prompt: "Tap all the pictures that show a plant with a woody trunk (a TREE).",
        items: [
          {label: "🌳 Maple tree", match: true},
          {label: "🌱 Grass", match: false},
          {label: "🌲 Fir tree", match: true},
          {label: "🍄 Mushroom", match: false},
          {label: "🌴 Coconut palm", match: true},
          {label: "🌼 Daisy", match: false}
        ],
        hint: "A tree has a tall, hard trunk that lasts for many years.",
        explanation: "Maple, fir, and coconut palm trees all have a tall, woody trunk that makes them trees."
      },
      {
        prompt: "Tap all the pictures that show a plant that grows on a VINE.",
        items: [
          {label: "🍇 Grape vine", match: true},
          {label: "🌳 Oak tree", match: false},
          {label: "🎃 Pumpkin vine", match: true},
          {label: "🌵 Cactus", match: false},
          {label: "🥒 Cucumber vine", match: true},
          {label: "🌷 Tulip", match: false}
        ],
        hint: "Vine plants have long, winding stems that often climb or crawl along the ground.",
        explanation: "Grapes, pumpkins, and cucumbers all grow on long, winding vines."
      }
    ]
  },

  {
    id: 'g1-I-6',
    unit: 'I',
    title: 'Where do water lilies and saguaros live?',
    type: 'match',
    pool: [
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🪷 Water lily", right: "Calm pond water"},
          {left: "🌵 Saguaro cactus", right: "Hot desert sand"},
          {left: "🐸 Frog", right: "Pond water"},
          {left: "🦂 Scorpion", right: "Rocky desert"}
        ],
        hint: "One plant floats on still water, one plant stores water in its thick stem.",
        explanation: "Water lilies float on calm ponds, while saguaro cactuses grow tall in the hot desert."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🪷 Water lily", right: "Calm pond water"},
          {left: "🌵 Saguaro cactus", right: "Hot desert sand"},
          {left: "🦆 Duck", right: "Freshwater lake"},
          {left: "🦎 Desert lizard", right: "Sandy dunes"}
        ],
        hint: "Think about which plant needs lots of water and which needs very little.",
        explanation: "Water lilies need still, freshwater ponds, while saguaros survive with very little water in the desert."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🪷 Water lily", right: "Calm pond water"},
          {left: "🌵 Saguaro cactus", right: "Hot desert sand"},
          {left: "🐟 Goldfish", right: "Still freshwater"},
          {left: "🦉 Desert owl", right: "Dry desert land"}
        ],
        hint: "Think about roots that float in water and roots that dig deep for hidden water.",
        explanation: "Water lily roots sit in pond mud underwater, while saguaro roots spread wide to catch rare desert rain."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🪷 Water lily", right: "Calm pond water"},
          {left: "🌵 Saguaro cactus", right: "Hot desert sand"},
          {left: "🐢 Pond turtle", right: "Quiet freshwater pond"},
          {left: "🐍 Rattlesnake", right: "Warm desert rocks"}
        ],
        hint: "One home is wet and cool, the other is dry and hot.",
        explanation: "Water lilies thrive in cool, quiet ponds, and saguaro cactuses thrive in hot, dry deserts."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🪷 Water lily", right: "Calm pond water"},
          {left: "🌵 Saguaro cactus", right: "Hot desert sand"},
          {left: "🦋 Dragonfly", right: "Near pond water"},
          {left: "🐪 Camel", right: "Sandy desert"}
        ],
        hint: "Think about flat leaves that float, and a thick spiky stem that stores water.",
        explanation: "Water lilies float their leaves on pond water, while saguaro cactuses store water inside their thick stems."
      }
    ]
  },

  {
    id: 'g1-I-7',
    unit: 'I',
    title: 'Where do bearberries and powdery strap air plants live?',
    type: 'match',
    pool: [
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🫐 Bearberry", right: "Cold mountain tundra"},
          {left: "🌿 Powdery strap air plant", right: "Humid tropical tree branches"},
          {left: "🦌 Caribou", right: "Snowy tundra"},
          {left: "🦜 Parrot", right: "Tropical rainforest"}
        ],
        hint: "One plant grows low to the ground where it's cold, the other clings high up where it's warm and wet.",
        explanation: "Bearberries grow low on cold, mountain tundra ground, while powdery strap air plants cling to warm, humid tropical trees."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🫐 Bearberry", right: "Cold mountain tundra"},
          {left: "🌿 Powdery strap air plant", right: "Humid tropical tree branches"},
          {left: "🐻 Grizzly bear", right: "Rocky mountain slopes"},
          {left: "🐸 Tree frog", right: "Warm rainforest trees"}
        ],
        hint: "Think about a chilly, windy hillside versus a steamy, warm forest.",
        explanation: "Bearberries survive cold, rocky mountain slopes, while air plants thrive in warm, humid rainforest trees."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🫐 Bearberry", right: "Cold mountain tundra"},
          {left: "🌿 Powdery strap air plant", right: "Humid tropical tree branches"},
          {left: "🦊 Arctic fox", right: "Frozen tundra ground"},
          {left: "🦋 Butterfly", right: "Tropical humid forest"}
        ],
        hint: "One plant hugs the frozen ground, the other has no roots in soil at all.",
        explanation: "Bearberries spread across frozen tundra ground, while air plants grow on tree branches without needing soil."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🫐 Bearberry", right: "Cold mountain tundra"},
          {left: "🌿 Powdery strap air plant", right: "Humid tropical tree branches"},
          {left: "🐐 Mountain goat", right: "High rocky slopes"},
          {left: "🦎 Gecko", right: "Tropical tree bark"}
        ],
        hint: "Think about a plant that survives frost and a plant that soaks up rainforest humidity.",
        explanation: "Bearberries are tough little plants that survive cold mountain frost, while air plants soak up moisture in humid tropical air."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🫐 Bearberry", right: "Cold mountain tundra"},
          {left: "🌿 Powdery strap air plant", right: "Humid tropical tree branches"},
          {left: "🦉 Snowy owl", right: "Icy tundra land"},
          {left: "🐒 Monkey", right: "Rainforest treetops"}
        ],
        hint: "One habitat is icy and open, the other is warm and full of tall trees.",
        explanation: "Bearberries live in cold, open tundra, and air plants live high in warm, humid rainforest trees."
      }
    ]
  },

  {
    id: 'g1-I-8',
    unit: 'I',
    title: 'Where do turtle grass and giant sequoias live?',
    type: 'match',
    pool: [
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🌊 Turtle grass", right: "Shallow warm seagrass meadow"},
          {left: "🌲 Giant sequoia", right: "California mountain forest"},
          {left: "🐢 Sea turtle", right: "Warm shallow ocean"},
          {left: "🐿️ Squirrel", right: "Tall mountain forest"}
        ],
        hint: "One plant grows underwater near the coast, the other is one of the tallest trees on land.",
        explanation: "Turtle grass grows in shallow, warm seas, while giant sequoias grow in cool California mountain forests."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🌊 Turtle grass", right: "Shallow warm seagrass meadow"},
          {left: "🌲 Giant sequoia", right: "California mountain forest"},
          {left: "🦀 Crab", right: "Sandy seafloor near shore"},
          {left: "🦉 Owl", right: "Tall forest trees"}
        ],
        hint: "Think about a meadow underwater and a forest of giant trees on land.",
        explanation: "Turtle grass forms underwater meadows in warm seas, while giant sequoias tower over mountain forests."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🌊 Turtle grass", right: "Shallow warm seagrass meadow"},
          {left: "🌲 Giant sequoia", right: "California mountain forest"},
          {left: "🐠 Reef fish", right: "Warm coastal waters"},
          {left: "🐻 Black bear", right: "Mountain forest floor"}
        ],
        hint: "One plant sways underwater near the coast, the other is a giant that grows on the ground for thousands of years.",
        explanation: "Turtle grass sways in warm coastal waters, while giant sequoias can live for thousands of years in mountain forests."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🌊 Turtle grass", right: "Shallow warm seagrass meadow"},
          {left: "🌲 Giant sequoia", right: "California mountain forest"},
          {left: "🦐 Shrimp", right: "Grassy shallow sea"},
          {left: "🦌 Deer", right: "Cool mountain woodland"}
        ],
        hint: "Think about a warm, shallow sea versus a cool, tall forest.",
        explanation: "Turtle grass lives in warm, shallow seas, and giant sequoias live in cool mountain woodlands."
      },
      {
        prompt: "Match each plant to where it grows.",
        pairs: [
          {left: "🌊 Turtle grass", right: "Shallow warm seagrass meadow"},
          {left: "🌲 Giant sequoia", right: "California mountain forest"},
          {left: "🐡 Pufferfish", right: "Warm coastal sea"},
          {left: "🐦 Woodpecker", right: "Giant forest trees"}
        ],
        hint: "One plant is underwater and short, the other is on land and can grow taller than a building.",
        explanation: "Turtle grass grows short and underwater, while giant sequoias are some of the tallest trees on Earth."
      }
    ]
  },

  // ===================== UNIT J: LIVING THINGS =====================

  {
    id: 'g1-J-1',
    unit: 'J',
    title: 'Identify living and nonliving things',
    type: 'sort',
    pool: [
      {
        prompt: "Tap all the pictures that show a LIVING thing.",
        items: [
          {label: "🌳 Tree", match: true},
          {label: "🪨 Rock", match: false},
          {label: "🐿️ Squirrel", match: true},
          {label: "🚗 Toy car", match: false},
          {label: "🌻 Sunflower", match: true},
          {label: "🧸 Teddy bear", match: false}
        ],
        hint: "Living things grow, need food and water, and can make more of themselves.",
        explanation: "Trees, squirrels, and sunflowers are living things because they grow and need food, water, and air."
      },
      {
        prompt: "Tap all the pictures that show a LIVING thing.",
        items: [
          {label: "🐦 Bird", match: true},
          {label: "⚽ Soccer ball", match: false},
          {label: "🐟 Fish", match: true},
          {label: "🪑 Chair", match: false},
          {label: "🍄 Mushroom", match: true},
          {label: "📱 Phone", match: false}
        ],
        hint: "Ask yourself, does it eat, breathe, and grow?",
        explanation: "Birds, fish, and mushrooms are all living things, they grow and need things like food or water to survive."
      },
      {
        prompt: "Tap all the pictures that show a NONLIVING thing.",
        items: [
          {label: "🪨 Rock", match: true},
          {label: "🐕 Dog", match: false},
          {label: "☁️ Cloud", match: true},
          {label: "🌱 Sprout", match: false},
          {label: "🧊 Ice cube", match: true},
          {label: "🦋 Butterfly", match: false}
        ],
        hint: "Nonliving things do not eat, breathe, or grow on their own.",
        explanation: "Rocks, clouds, and ice cubes are nonliving because they don't eat, breathe, or grow."
      },
      {
        prompt: "Tap all the pictures that show a NONLIVING thing.",
        items: [
          {label: "🪁 Kite", match: true},
          {label: "🐝 Bee", match: false},
          {label: "⭐ Star", match: true},
          {label: "🌳 Tree", match: false},
          {label: "🖍️ Crayon", match: true},
          {label: "🐱 Cat", match: false}
        ],
        hint: "Think about which of these things could never grow bigger on its own.",
        explanation: "Kites, stars, and crayons are nonliving, they never eat, grow, or make more of themselves."
      },
      {
        prompt: "Tap all the pictures that show a LIVING thing.",
        items: [
          {label: "🐢 Turtle", match: true},
          {label: "📚 Book", match: false},
          {label: "🌵 Cactus", match: true},
          {label: "🪞 Mirror", match: false},
          {label: "🐛 Caterpillar", match: true},
          {label: "🛴 Scooter", match: false}
        ],
        hint: "Living things need food, water, or sunlight to stay alive and grow.",
        explanation: "Turtles, cactuses, and caterpillars are living things, they all grow and need things to survive."
      }
    ]
  },

  {
    id: 'g1-J-2',
    unit: 'J',
    title: 'Identify plants and animals',
    type: 'sort',
    pool: [
      {
        prompt: "Tap all the pictures that show an ANIMAL.",
        items: [
          {label: "🐕 Dog", match: true},
          {label: "🌳 Tree", match: false},
          {label: "🐦 Bird", match: true},
          {label: "🌻 Sunflower", match: false},
          {label: "🐟 Fish", match: true},
          {label: "🌵 Cactus", match: false}
        ],
        hint: "Animals can move around on their own to find food.",
        explanation: "Dogs, birds, and fish are all animals, they can move around to find their own food."
      },
      {
        prompt: "Tap all the pictures that show a PLANT.",
        items: [
          {label: "🌲 Pine tree", match: true},
          {label: "🐘 Elephant", match: false},
          {label: "🌷 Tulip", match: true},
          {label: "🐻 Bear", match: false},
          {label: "🍄 Mushroom", match: false},
          {label: "🌿 Fern", match: true}
        ],
        hint: "Plants stay rooted in one place and make their own food from sunlight.",
        explanation: "Pine trees, tulips, and ferns are plants, they stay in one place and make food using sunlight."
      },
      {
        prompt: "Tap all the pictures that show an ANIMAL.",
        items: [
          {label: "🦋 Butterfly", match: true},
          {label: "🌾 Wheat", match: false},
          {label: "🐢 Turtle", match: true},
          {label: "🌹 Rose", match: false},
          {label: "🦁 Lion", match: true},
          {label: "🪨 Rock", match: false}
        ],
        hint: "Look for the ones that can walk, swim, or fly on their own.",
        explanation: "Butterflies, turtles, and lions are animals, they can all move around by themselves."
      },
      {
        prompt: "Tap all the pictures that show a PLANT.",
        items: [
          {label: "🌵 Cactus", match: true},
          {label: "🐝 Bee", match: false},
          {label: "🌻 Sunflower", match: true},
          {label: "🐿️ Squirrel", match: false},
          {label: "🌴 Palm tree", match: true},
          {label: "🐸 Frog", match: false}
        ],
        hint: "Plants have roots, stems, and leaves and cannot walk away.",
        explanation: "Cactuses, sunflowers, and palm trees are plants, they grow roots in one spot and make their own food."
      },
      {
        prompt: "Tap all the pictures that show an ANIMAL.",
        items: [
          {label: "🐒 Monkey", match: true},
          {label: "🌲 Pine tree", match: false},
          {label: "🦉 Owl", match: true},
          {label: "🌼 Daisy", match: false},
          {label: "🐍 Snake", match: true},
          {label: "☁️ Cloud", match: false}
        ],
        hint: "Animals usually need to eat other living things to survive.",
        explanation: "Monkeys, owls, and snakes are animals, they move around and eat other living things."
      }
    ]
  },

  {
    id: 'g1-J-3',
    unit: 'J',
    title: 'Compare plants and animals',
    type: 'mcq',
    pool: [
      {
        fact: "Even a tiny seed is alive and growing, just like a puppy!",
        q: "How are plants and animals alike?",
        correct: "Both are living things that grow and need energy",
        wrong: ["Both can fly through the air", "Both have fur and whiskers", "Both can talk to each other"],
        hint: "Think about what all living things need to do to survive.",
        experiment: "🔍 Try this: Compare how a seedling and a kitten both get bigger each week."
      },
      {
        fact: "Most plants stay rooted in one spot their whole lives!",
        q: "How are plants and animals different?",
        correct: "Animals can move around, but most plants stay in one place",
        wrong: ["Plants can run and jump", "Animals never need food", "Plants can talk"],
        hint: "Think about which one can walk, swim, or fly away.",
        experiment: "🔍 Try this: Watch an ant scurry around while a plant in your yard stays still."
      },
      {
        fact: "Both a rose bush and a rabbit need a drink of water to stay healthy!",
        q: "What do both plants and animals need to live?",
        correct: "Water and energy",
        wrong: ["Only shoes", "Only blankets", "Only music"],
        hint: "Think about what you give a thirsty plant and a thirsty pet.",
        experiment: "🔍 Try this: Water a plant and watch a pet drink water on the same day."
      },
      {
        fact: "A leaf can make its own sugary food using nothing but sunlight, water, and air!",
        q: "How do most plants get their food, compared to animals?",
        correct: "Plants make their own food from sunlight, animals eat other living things",
        wrong: ["Animals make food from sunlight too", "Plants eat other plants like animals do", "Neither one needs food"],
        hint: "Think about whether a plant ever has to go hunting for its dinner.",
        experiment: "🔍 Try this: Watch a bird eat a worm, then look at a leaf catching some sunshine."
      },
      {
        fact: "A baby oak tree sprout already has the same basic parts as its giant parent tree!",
        q: "Which of these is true about both plants and animals?",
        correct: "Both can grow and make new living things like themselves",
        wrong: ["Both have four legs", "Both live only in water", "Neither one ever grows"],
        hint: "Think about how a baby plant and a baby animal both start out small.",
        experiment: "🔍 Try this: Look at a baby plant sprout growing next to its parent plant."
      }
    ]
  },

  {
    id: 'g1-J-4',
    unit: 'J',
    title: 'Compare young living things to their parents',
    type: 'mcq',
    pool: [
      {
        fact: "Kittens open their eyes about a week after they are born!",
        q: "Does a baby kitten look like its cat parent?",
        correct: "Yes, but it is smaller with some differences",
        wrong: ["No, it looks nothing like a cat", "Yes, it is exactly the same size", "No, it looks like a puppy"],
        hint: "Think about the shape of a kitten's ears, tail, and whiskers.",
        experiment: "🔍 Try this: Compare a picture of a kitten and a grown cat, what looks the same?"
      },
      {
        fact: "Baby elephants are called calves and can already weigh 200 pounds at birth!",
        q: "Does a baby elephant look like its parent?",
        correct: "Yes, it has the same body shape, just smaller",
        wrong: ["No, baby elephants have no trunk at all", "Yes, it is bigger than its parent", "No, it looks completely different"],
        hint: "Think about whether a baby elephant already has big floppy ears and a trunk.",
        experiment: "🔍 Try this: Compare a picture of a baby elephant and an adult elephant."
      },
      {
        fact: "A young sunflower sprout already has tiny leaves shaped like its parent's leaves!",
        q: "Does a young sunflower plant look like the grown sunflower it came from?",
        correct: "Yes, it will grow to look similar to its parent plant",
        wrong: ["No, it will grow into a completely different flower", "Yes, but it will always stay tiny", "No, seeds never grow into plants"],
        hint: "Think about what kind of flower a sunflower seed always grows into.",
        experiment: "🔍 Try this: Plant a seed and check on it each week to see how it changes."
      },
      {
        fact: "A caterpillar changes completely inside a chrysalis before it becomes a butterfly!",
        q: "Which baby animal looks very different from its parent at first?",
        correct: "A caterpillar, before it becomes a butterfly",
        wrong: ["A puppy compared to a dog", "A calf compared to a cow", "A chick compared to a hen"],
        hint: "Think about an animal that goes through a big transformation as it grows up.",
        experiment: "🔍 Try this: Look up pictures of a caterpillar, a chrysalis, and a butterfly side by side."
      },
      {
        fact: "Puppies are born with the same basic body shape as their dog parents, just much smaller!",
        q: "How are baby animals usually similar to their parents?",
        correct: "They usually have the same basic body parts and shape",
        wrong: ["They are always a different color and shape", "They never grow to look like their parents", "They always look like a totally different animal"],
        hint: "Think about a puppy's ears, tail, and paws compared to its dog parent's.",
        experiment: "🔍 Try this: Compare a baby animal and its parent, count how many body parts match."
      }
    ]
  }

];
