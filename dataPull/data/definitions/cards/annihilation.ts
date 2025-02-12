import { CardSetDef, HeroCardDef } from '../cardTypes';

export const Annihilation: CardSetDef = {
  id: 30,
  heroes: [
    {
      id: 222,
      name: "Brainstorm",
      team: 5,
      cards: [
        {
          name: "Time Loop Experiments",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/brainstorm_01.png",
          hc: 5,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            "Draw a card. Then put a card from your hand on top of your deck.",
            [
              { hc: 5 },
              ": ",
              { keyword: 23, text: "Woman Out of Time" }
            ]
          ]
        },
        {
          name: "Borrow from the Future",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/brainstorm_02.png",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "1",
          abilities: [
            "Reveal the top card of your deck. If it costs 2 or more, draw it. Otherwise, discard it or put it back.",
            [
              { hc: 3 },
              ": ",
              { keyword: 23, text: "Woman Out of Time" }
            ]
          ]
        },
        {
          name: "Reprogram Doombot Legions",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/brainstorm_03.png",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { team: 5 },
              ": You may look at the top two cards of your deck. If you do, KO one of them and put the other back."
            ]
          ]
        },
        {
          name: "Protégé of Dr. Doom",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/brainstorm_04.png",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              "Use one of Dr. Doom's Mastermind Tactics. You can't use any of them more than once per game. If you have already used them all, get ",
              { bold: "+4" },
              { icon: 1 },
              " instead."
            ],
            [
              { italic: "(Take another turn; or draw three extra cards at end of turn; or you may recruit a " },
              { hc: 5 },
              { italic: " or " },
              { hc: 3 },
              { italic: " Hero for free; or all other players draw a card or discard a card.)" },
            ]
          ]
        }
      ]
    },
    {
      id: 223,
      name: "Fantastic Four United",
      team: 5,
      cards: [
        {
          name: "Human Torch",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ffunited_01.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " KO up to two Wounds from your hand and/or discard pile."
            ],
            [
              { keyword: 4, text: "Focus 6" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " You get ",
              { bold: "+6" },
              { icon: 1 },
              " and gain a Wound."
            ]
          ]
        },
        {
          name: "Thing",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ffunited_02.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "0+",
          recruit: "2+",
          abilities: [
            [
              { team: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ],
            [
              { keyword: 4, text: "Focus 3" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Invisible Woman",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ffunited_03.png",
          hc: 1,
          rarity: 2,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              "If you played any other cards that cost 4 this turn, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."

            ],
            [
              { keyword: 4, text: "Focus 4" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Rescue a Bystander, then you may KO a card from your hand or discard pile.",
            ]
          ]
        },
        {
          name: "Mr. Fantastic",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ffunited_04.png",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "2",
          abilities: [
            "Draw two cards.",
            [
              { keyword: 4, text: "Focus 5" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " You get ",
              { bold: "+7" },
              { icon: 1 },
              " usable only against the Mastermind."
            ]
          ]
        }
      ]
    },
    {
      id: 224,
      name: "Heralds of Galactus",
      team: 0,
      cards: [
        {
          name: "Firelord",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hogalactus_01.png",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "This turn, your Heroes' Conqueror abilities also give you ",
              { icon: 1 },
              " if those city spaces have been destroyed.",
            ],
            [
              { hc: 3 },
              ": ",
              { keyword: 49, text: "Bridge Conqueror 2" },
            ]
          ]
        },
        {
          name: "Silver Surfer",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hogalactus_02.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Draw a card, then you may move a Villain to an adjacent city space. If another Villain is already there, swap them."
            ]
          ]
        },
        {
          name: "Stardust",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hogalactus_03.png",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "4",
          abilities: [
            [
              { keyword: 4, text: "Focus 4" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              { keyword: 49, text: "Rooftops Conqueror 4" },
            ],
            [
              { keyword: 4, text: "Focus 11" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Search the Hero Deck, HQ, or your deck or discard pile for “Galactus Hungers“ and put it on top of your deck. Shuffle any deck you searched."
            ]
          ]
        },
        {
          name: "Galactus Hungers",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hogalactus_04.png",
          hc: 3,
          rarity: 3,
          cost: 10,
          attack: "8+",
          abilities: [
            [
              "If you have played another Herald of Galactus this turn, destroy the leftmost city space, defeat any Villain there, and then you get ",
              { bold: "+2" },
              { icon: 1 },
              " for each destroyed city space. If this destroys the last city space, Galactus consumes the Earth. You Win, Evil Wins, and all other players lose."
            ]
          ]
        }
      ]
    },
    {
      id: 225,
      name: "Psi-Lord",
      team: 5,
      cards: [
        {
          name: "Avert Future Tragedy",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/psilord_01.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of the Villain Deck. If it's a Master Strike, you get ",
              { bold: "+3" },
              { icon: 1 },
              ", KO it, and replace it with the top card from the Bystander Stack."
            ],
            [
              { hc: 2 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Interdimensional Rescue",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/psilord_02.png",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 4, text: "Focus 1" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of the Villain Deck. If it's a Bystander, you get ",
              { bold: "+2" },
              { icon: 1 },
              ", rescue it, and shuffle the top card from the Bystander Stack into the Villain Deck."
            ],
            [
              { hc: 1 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Slip the Timestream",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/psilord_03.png",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "3",
          abilities: [
            [
              { keyword: 4, text: "Focus 1" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of the Villain Deck. If it's a Villain, you get ",
              { bold: "+1" },
              { icon: 1 },
              " and you may fight it this turn."
            ],
            [
              { hc: 2 },
              { hc: 1 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Reshape Reality",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/psilord_04.png",
          hc: 2,
          rarity: 3,
          cost: 7,
          recruit: "3",
          attack: "3+",
          abilities: [
            [
              { keyword: 4, text: "Focus 3" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of the Villain Deck. If it's a Scheme Twist, you get ",
              { bold: "+4" },
              { icon: 1 },
              " and shuffle the Villain Deck."
            ],
            [
              { team: 5 },
              { team: 5 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        }
      ]
    },
    {
      id: 226,
      name: "Super-Skrull",
      team: 0,
      cards: [
        {
          name: "Stretching Credibility",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sskrull_01.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 1 },
              "  ",
              { icon: 5 },
              " When you draw a new hand of cards at the end of this turn, draw an extra card."
            ],
          ]
        },
        {
          name: "Rock Solid",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sskrull_02.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "0+",
          attack: "2+",
          abilities: [
            [
              { hc: 4 },
              ": ",
              { keyword: 49, text: "Sewers Conqueror 1." },
            ],
            [
              { keyword: 4, text: "Focus 3" },
              { icon: 1 },
              "  ",
              { icon: 5 },
              " You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Transparent Motives",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sskrull_03.png",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              { keyword: 49, text: "Bank Conqueror 1" },
            ],
            [
              { keyword: 4, text: "Focus 3" },
              { icon: 1 },
              "  ",
              { icon: 5 },
              " You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Put to the Torch",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sskrull_04.png",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            { keyword: 49, text: "Bridge Conqueror 1" },
            { keyword: 49, text: "Streets Conqueror 1" },
            [
              "You may gain a Wound. If you do, you get ",
              { keyword: 49, text: "Rooftops Congueror 4" },
              "."
            ]

          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 76,
      name: "Annihilus",
      vAttack: "10",
      vp: 6,
      cards: [
        {
          name: "Annihilus",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/annihilus_01.png",
          vAttack: "10+",
          abilities: [
            [
              { keyword: 71, text: "Mass Momentum 2" }
            ],
            [
              { bold: "Always Leads" },
              ": Annihilation Wave ",
              { italic: "(1 player: Use 6 Henchmen.)" },
            ],
            [
              { bold: "Master Strike" },
              ": Reveal the top card of the Villain Deck. If it's a Bystander, Annihilus captures it. If it's a Villain, it enters the city, captures a Bystander, and moves forward an extra space ",
              { italic: "(before doing any Ambush ability)." },
            ],
          ]
        },
        {
          name: "Epic Annihilus",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/annihilus_02.png",
          epic: true,
          vAttack: "12+",
          abilities: [
            { keyword: 71, text: "Mass Momentum 4" },
            [
              { bold: "Always Leads" },
              ": Annihilation Wave. Add an extra Villain Group ",
              { italic: "(even for 1 player.)" },
            ],
            [
              { bold: "Master Strike" },
              ": Play a card from the Villain Deck. If it's a Villain, play a second card from the Villain Deck.",
            ],
          ]
        },
        {
          name: "The Cosmic Control Rod",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/annihilus_06.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals the top three cards of their deck, KOs the highest-cost Hero that is revealed this way and puts the rest back in any order."
            ]
          ]
        },
        {
          name: "Surging Annihilation",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/annihilus_05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Check all Annihilation Wave villains from each other player's victory pile. The one worth the most VP enters the city, and that player rescues bystanders equal to that villain's VP."
            ]
          ]
        },
        {
          name: "Deploy the Planet Killer",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/annihilus_03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final tactic: if Weaponized Galactus is in the city, he escapes. If Weaponized Galactus wasn't in the city and wasn't in any victory pile, then he enters the city from the Villain Deck and you shuffle the Villain Deck."
            ]
          ]
        },
        {
          name: "Pull Into the Negative Zone",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/annihilus_04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The cost of each hero currently in the HQ gets -2 this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 77,
      name: "Kang the Conqueror",
      tacticName: "Kang",
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Kang the Conqueror",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kang_01.png",
          vAttack: "8+",
          abilities: [
            [
              "Kang has ",
              { keyword: 49, text: "Conqueror 2" },
              " for each city space under a Time Incursion. ",
              { italic: "(He benefits from Villains there.)" },
              " Villains under a Time Incursion get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Timelines of Kang"
            ],
            [
              { bold: "Master Strike" },
              ": This Strike becomes a “Time Incursion.“ Put it above the rightmost city space that doesn't yet have a Time Incursion."
            ]
          ]
        },
        {
          name: "Epic Kang the Conqueror",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kang_02.png",
          epic: true,
          vAttack: "10+",
          abilities: [
            [
              "Kang has ",
              { keyword: 49, text: "Conqueror 3" },
              " for each city space under a Time Incursion. Villains under a Time Incursion get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Timelines of Kang"
            ],
            [
              { bold: "Master Strike" },
              ": This Strike becomes a “Time Incursion.“ Put it above the rightmost city space that doesn't yet have a Time Incursion. If there are any Villains in any Time Incursions, each player gains a Wound."
            ]
          ]
        },
        {
          name: "Iron Lad Grows Up to Become Kang",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kang_03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic: Each player reveals their hand. You choose a card named “Iron Lad“ from the Escape Pile, or from ",
              { keyword: 23, text: "Man Out of Time" },
              ", or from any player's hand or discard pile or that you played this turn. Shuffle Iron Lad into Kang's Tactics as a Mastermind Tactic that says “",
              { bold: "Fight" },
              ": Gain this as a Hero.“"
            ]
          ]
        },
        {
          name: "Leap Into the Timestream",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kang_04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic: Take another turn after this one. Don't play a card from the Villain Deck at the start of that turn."
            ]
          ]
        },
        {
          name: "Pull From the Future",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kang_05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top two cards of the Villain Deck. Choose a Villain revealed this way to enter an empty city space under a Time Incursion. Put the rest back in any order."
            ]
          ]
        },
        {
          name: "Savior From Another Timeline",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kang_06.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may gain a Hero from any HQ space under a Time Incurion. Send it as a ",
              { keyword: 23, text: "Man or Woman Out of Time" },
              "."
            ]
          ]
        }
      ]
    },
  ],
  villains: [
    {
      id: 96,
      name: "Annihilation Wave",
      cards: [
        {
          name: "Annihilation Armada",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/annihilation_wave_01.png",
          qtd: 2,
          vAttack: "3+",
          vp: "2",
          abilities: [
            { keyword: 71, text: "Momentum 2" },
            [
              {
                bold: "Ambush"
              },
              ": A Henchmen Villain from your Victory Pile enters the city."
            ],
          ]
        },
        {
          name: "Queens of Annihilation",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/annihilation_wave_02.png",
          qtd: 3,
          vAttack: "4+",
          vp: "3",
          abilities: [
            { keyword: 71, text: "Momentum 3" },
            [
              {
                bold: "Ambush"
              },
              ": Reveal the top card of the Villain Deck. If it's a Villain, play it."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ],
          ]
        },
        {
          name: "Ravenous",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/annihilation_wave_03.png",
          qtd: 2,
          vAttack: "5+",
          vp: "4",
          abilities: [
            { keyword: 71, text: "Momentum 3" },
            [
              {
                bold: "Ambush"
              },
              ": Ravenous swaps places with an Annihilation Wave Villain that isn't Weaponized Galactus."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player reveals a ",
              { hc: 4 },
              " Hero or gains a wound."
            ]
          ]
        },
        {
          name: "Weaponized Galactus",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/annihilation_wave_04.png",
          qtd: 1,
          vAttack: "9+",
          vp: "7",
          abilities: [
            { keyword: 71, text: "Momentum 9" },
            [
              {
                bold: "Ambush"
              },
              ": Weaponized Galactus swaps places with the leftmost Villain in the city."
            ],
            [
              {
                bold: "Escape"
              },
              ": Destroy the leftmost city space. If this destroys the last city space, Evil Wins. Otherwise, each player gains a Wound, and you shuffle Weaponized Galactus back into the Villain Deck. Any Villain from the destroyed city space escapes."
            ]
          ]
        }
      ]
    },
    {
      id: 97,
      name: "Timelines of Kang",
      cards: [
        {
          name: "Immortus",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/timelines_of_kang_01.png",
          qtd: 2,
          vAttack: "5+",
          vp: "5",
          abilities: [
            { keyword: 49, text: "Streets Conqueror 3" },
            [
              {
                bold: "Fight"
              },
              ": Reveal a ",
              { hc: 3 },
              " Hero or reveal the top card of the Villain Deck. If it's a Villain worth 4VP or less, defeat it ",
              { italic: "(do its Fight effect)" },
              " and put Immortus in its place."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player reveals a ",
              { hc: 3 },
              " Hero or gains a Wound. Shuffle Immortus back into the Villain Deck."
            ],
          ]
        },
        {
          name: "Iron Lad",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/timelines_of_kang_02.png",
          qtd: 2,
          vAttack: "4",
          hc: 5,
          team: 0,
          overrideType: 1,
          attack: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": The player of your choice gains this as a Hero."
            ],
            { divider: true },
            [
              { hc: 5 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Pharaoh Rama-Tut",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/timelines_of_kang_03.png",
          qtd: 2,
          vAttack: "4+",
          vp: "4",
          abilities: [
            { keyword: 49, text: "Bridge Conqueror 3" },
            [
              {
                bold: "Ambush"
              },
              ": If the Bridge is empty, move a Villain to the Bridge."
            ],
            [
              {
                bold: "Fight"
              },
              ": Send a ",
              { hc: 4 },
              " or ",
              { hc: 2 },
              " Hero you played this turn as a ",
              { keyword: 23, text: "Man or Woman Out of Time" },
              "."
            ],
          ]
        },
        {
          name: "Scarlet Centurion",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/timelines_of_kang_04.png",
          qtd: 2,
          vAttack: "4+",
          vp: "3",
          abilities: [
            { keyword: 49, text: "Bank Conqueror 2" },
            [
              {
                bold: "Ambush"
              },
              ": Reveal your hand and send your highest-cost Hero as a ",
              { keyword: 23, text: "Man or Woman Out of Time" },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": If you played a ",
              { hc: 1 },
              " Hero this turn, KO one of your Heroes."
            ],
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 138,
      name: "Pulse Waves From the Negative Zone",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/annihilation_scheme_02.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists."
            ],
            [
              { bold: "Twist 1,3,5,7" },
              ": “Negative Pulse“: This turn, Heroes in the HQ cost ",
              { bold: "-1" },
              { icon: 2 },
              " and Villains and Masterminds get ",
              { bold: "-1" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Twist 2,4,6,8" },
              ": “Positive Pulse“: This turn, Heroes in the HQ cost ",
              { bold: "+1" },
              { icon: 2 },
              " and Villains and Masterminds get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Twist 9" },
              ": Evil wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 139,
      name: "Sneak Attack the Heroes' Homes",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/annihilation_scheme_04.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists. Each player chooses a Hero to be part of the Hero Deck. Randomly select other Heroes up to the normal number of Heroes. Each player adds to their starting deck three non-rare cards with different names from the Hero they chose and three Wounds."
            ],
            [
              { bold: "Twist 1-5" },
              ": Each player discards a non-grey Hero or gains a Wound."
            ],
            [
              { bold: "Twist 6" },
              ": Evil Wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 140,
      name: "Put Humanity on Trial",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/annihilation_scheme_03.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. Stack 11 Bystanders next to the Scheme face down as “Galactic Jurors.“"
            ],
            [
              { bold: "Special Rules" },
              ": Each Twist gives you a challenge to achieve this turn. If you do it, you have convinced a Juror, and you rescue them. If you don't, put that Juror face up next to the Villain Deck, voting to condmen Humanity."
            ],
            [
              { bold: "Twist 1-2" },
              ": “Opening Arguments“: Discard three cards with different names."
            ],
            [
              { bold: "Twist 3,5,7" },
              ": “Question Witnesses“: Recruit a Hero that costs 5 or more."
            ],
            [
              { bold: "Twist 4,6,8" },
              ": “Introduce Evidence“: Defeat Villain(s) worth 3VP or more."
            ],
            [
              { bold: "Twist 9-11" },
              ": “Closing Arguments“: Defeat the Mastermind."
            ],
            [
              { bold: "Evil Wins" },
              ": When 6 Jurors vote to Condmen Humanity."
            ],
          ]
        },
      ]
    },
    {
      id: 141,
      name: "Breach Parallel Dimensions",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/annihilation_scheme_01.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists. Add 4 extra Bystanders to the Villain Deck. Deal the shuffled Villain Deck into several “Dimension“ decks where the first Dimension has 1 card, the next has 2 cards, then 3, 4, etc. ",
              { italic: "(The final Dimension might not have enough cards to reach its full number.)" }
            ],
            [
              { bold: "Special Rules" },
              ": Each turn, you choose which Dimension you play a card from. All players have “",
              { keyword: 4, text: "Focus 1" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of any Dimension and put it back on the top or bottom of that deck.“ If a Dimension ever has no cards left, even in the middle of a card ability, it is destroyed. Mark it with a face up Wound."
            ],
            [
              { bold: "Twist" },
              ": Choose a Dimension and play two cards from it. ",
              { italic: "(It's ok if it only has 1.)" }
            ],
            [
              { bold: "Evil Wins" },
              ": When at least half of the original Dimensions are destroyed."
            ],
          ]
        },
      ]
    },
  ]
}