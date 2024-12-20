"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMutants = void 0;
exports.NewMutants = {
    id: 27,
    heroes: [
        {
            id: 203,
            name: "Karma",
            team: 4,
            cards: [
                {
                    name: "Sow Rivalry",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/karma-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 1 },
                            ": Choose a Villain. You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Villain adjacent to it."
                        ]
                    ]
                },
                {
                    name: "Temporary Possession",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/karma-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            "Guess a color. Then reveal the top card of the Hero Deck and put it back on the top or bottom of that deck. If you guessed right, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Karmic Balance",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/karma-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 6,
                    recruit: "4",
                    abilities: [
                        [
                            "Reveal the top card of the Hero Deck. You may recruit it this turn. If you do, you may KO one of your cards or a card from your discard pile."
                        ]
                    ]
                },
                {
                    name: "Control Like a Puppet",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/karma-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    attack: "5+",
                    abilities: [
                        [
                            { team: 4 },
                            ": Choose a Villain in the city. You get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to its VP, usable only against other Villains or the Mastermind."
                        ]
                    ]
                },
            ]
        },
        {
            id: 204,
            name: "Mirage",
            team: 4,
            cards: [
                {
                    name: "Dreams Made Real",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mirage-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": You may discard a card. If you do, draw a card."
                        ]
                    ]
                },
                {
                    name: "Empathic Link",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mirage-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "When a card effect causes you to discard this card, set it aside. At the end of this turn, add it to your hand as an extra card."
                        ]
                    ]
                },
                {
                    name: "Nightmare Wolves",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mirage-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "1+",
                    abilities: [
                        [
                            "You may have a ",
                            { keyword: 65 },
                            ". You get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the cost of the card you discarded this way."
                        ]
                    ]
                },
                {
                    name: "Haunted By the Demon Bear",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mirage-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    abilities: [
                        [
                            "Whenever a card effect causes you to discard a card from your hand this turn, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": You may have a ",
                            { keyword: 65 },
                            "."
                        ]
                    ]
                },
            ]
        },
        {
            id: 205,
            name: "Sunspot",
            team: 4,
            cards: [
                {
                    name: "Absorb Radiation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sunspot-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 2,
                    recruit: "1",
                    abilities: [
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": You may put a Hero from the HQ on the bottom of the Hero Deck."
                        ],
                        [
                            { keyword: 64, text: "Sunlight" },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Solar-Powered",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sunspot-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 64, text: "Sunlight" },
                            ": You may put a card from your hand on the bottom of you deck. If you do, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Thermokinetic Fury",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sunspot-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 6,
                    attack: "4+",
                    abilities: [
                        "To play this, you must put a card from your hand on the bottom of your deck.",
                        [
                            { keyword: 64, text: "Sunlight" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other ",
                            { team: 4 },
                            " card you played this turn."
                        ]
                    ]
                },
                {
                    name: "Empyreal Force",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sunspot-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "3+",
                    abilities: [
                        [
                            "Choose any number of Heroes in the HQ. Put them on the bottom of the Hero Deck."
                        ],
                        [
                            { keyword: 64, text: "Sunlight" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Hero in the HQ with an even-numbered cost."
                        ]
                    ]
                },
            ]
        },
        {
            id: 206,
            name: "Warlock",
            team: 4,
            cards: [
                {
                    name: "Earthling Choices",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warlock-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    abilities: [
                        [
                            "Look at the top two cards of your deck. Draw one and discard the other."
                        ]
                    ]
                },
                {
                    name: "Analyze Planetary Rotation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warlock-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            { keyword: 64, text: "Sunlight" },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ],
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { hc: 5 },
                            ": Instead, you get both."
                        ]
                    ]
                },
                {
                    name: "Techno-Organic Adaptation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warlock-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            { hc: 5 },
                            ": The first time you defeat a Villain this turn, you may KO one of your cards or a card from your discard pile."
                        ]
                    ]
                },
                {
                    name: "Nanite Shapeshifter",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warlock-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 7,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            { keyword: 64, text: "Sunlight" },
                            ": Draw 3 cards."
                        ],
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 2 },
                            " and ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { team: 4 },
                            { team: 4 },
                            { team: 4 },
                            { team: 4 },
                            ": Instead, you get both."
                        ]
                    ]
                },
            ]
        },
        {
            id: 207,
            name: "Wolfsbane",
            team: 4,
            cards: [
                {
                    name: "Night Vision",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wolfsbane-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": Look at the top two cards of your deck. Discard any number of them and put the rest back in any order."
                        ]
                    ]
                },
                {
                    name: "Wolf Out",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wolfsbane-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 64, text: "Sunlight" },
                            ": You may put a Hero from the HQ on the bottom of the Hero Deck."
                        ],
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Howl at the Moon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wolfsbane-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": Look at the top card of your deck. KO it or put it back."
                        ]
                    ]
                },
                {
                    name: "Nocturnal Savagery",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wolfsbane-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    abilities: [
                        "Look at the top three cards of your deck. Discard any number of them and put the rest back in any order.",
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": You get the total printed ",
                            { icon: 1 },
                            " of all the cards you discarded from your deck this turn."
                        ]
                    ]
                },
            ]
        },
    ],
    masterminds: [
        {
            id: 69,
            name: "Belasco, Demon Lord of Limbo",
            tacticName: "Belasco",
            vAttack: "9",
            vp: 6,
            cards: [
                {
                    name: "Belasco, Demon Lord of Limbo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/belasco-01.png",
                    vAttack: "9+",
                    abilities: [
                        [
                            "Belasco gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the number of non-grey Heroes in the KO pile, divided by the number of players ",
                            { italic: "(round down)" },
                            "."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Demons of Limbo"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": ",
                            { keyword: 64, text: "Sunlight" },
                            ": Each player KOs a non-grey Hero from their discard pile. ",
                            { keyword: 64, text: "Moonlight" },
                            ": Each player has a ",
                            { keyword: 65 },
                            ". KO Heroes discarded this way."
                        ]
                    ]
                },
                {
                    name: "Epic Belasco",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/belasco-02.png",
                    vAttack: "10+",
                    epic: true,
                    abilities: [
                        [
                            "Belasco gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the number of non-grey Heroes in the KO pile, divided by the number of players ",
                            { italic: "(round down)" },
                            "."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Demons of Limbo"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": ",
                            { keyword: 64, text: "Sunlight" },
                            ": Each player KOs two non-grey Hero from their discard pile. ",
                            { keyword: 64, text: "Moonlight" },
                            ": Each player has two ",
                            { keyword: 65 },
                            ". KO Heroes discarded this way."
                        ]
                    ]
                },
                {
                    name: "A Demon's Mercy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/belasco-06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player KOs a non-grey Hero from their hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Bargain for Souls",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/belasco-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Reveal cards from the Hero Deck equal to the number of players. Gain one of them and KO the rest."
                        ]
                    ]
                },
                {
                    name: "Rescue from Limbo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/belasco-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You may KO one of your non-grey Heroes or a non-grey Hero from your discard pile. If you do, gain a Hero from the KO pile."
                        ]
                    ]
                },
                {
                    name: "Cleaving Demonblade",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/belasco-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each player chooses a different card in the HQ. Then KO all chosen cards."
                        ]
                    ]
                }
            ]
        },
        {
            id: 70,
            name: "Emma Frost, The White Queen",
            tacticName: "Emma Frost",
            vAttack: "8",
            vp: 6,
            cards: [
                {
                    name: "Emma Frost, The White Queen",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/emma-01.png",
                    vAttack: "8+",
                    abilities: [
                        [
                            "During your turn, Emma Frost gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each grey Hero you have."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Hellions"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Stack this Strike next to Emma Frost. Then each player has a ",
                            { keyword: 65 },
                            " for each Strike stacked here."
                        ]
                    ]
                },
                {
                    name: "Epic Emma Frost",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/emma-02.png",
                    vAttack: "9+",
                    epic: true,
                    abilities: [
                        [
                            "During your turn, Emma Frost gets ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each grey Hero you have."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Hellions"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Stack this Strike next to Emma Frost. Then each player has a ",
                            { keyword: 65 },
                            " for each Strike stacked here, then one more ",
                            { keyword: 65 },
                            ".",
                        ]
                    ]
                },
                {
                    name: "Tempting Bargain",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/emma-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You may play the top card of the Villain Deck. If you do, you get ",
                            { bold: "+5" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Psychic X-Men Link",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/emma-06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player has a ",
                            { keyword: 65 },
                            ". Each of those players who did not discard an ",
                            { team: 4 },
                            " Hero this way gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Assume Diamond Form",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/emma-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Emma Frost cannot be fought again until the start of your next turn."
                        ]
                    ]
                },
                {
                    name: "Contempt for Weaklings",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/emma-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Put a 0-cost Hero from the KO pile on top of each other player's deck."
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 88,
            name: "Demons of Limbo",
            cards: [
                {
                    name: "Crotus",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/limbo-01 (2).png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "3+",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Crotus captures a Bystander. Put an even-numbered Hero on the bottom of the Hero Deck."
                        ],
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": Crotus gets ",
                            { bold: "+4" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "N'astirh",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/limbo-02 (2).png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "3+",
                    abilities: [
                        [
                            { keyword: 64, text: "Sunlight" },
                            ": To fight N'astirh, you must also spend ",
                            { bold: "3" },
                            { icon: 2 },
                            "."
                        ],
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": N'astirh gets ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes."
                        ]
                    ]
                },
                {
                    name: "S'ym",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/limbo-03 (2).png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "7",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { keyword: 64, text: "Sunlight" },
                            ": Each player reveals a ",
                            { hc: 4 },
                            " Hero or gains a Wound. ",
                            { keyword: 64, text: "Moonlight" },
                            ": Each player has a ",
                            { keyword: 65 },
                            "."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Same effect."
                        ]
                    ]
                },
                {
                    name: "Demon Bear",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/limbo-04 (2).png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "5+",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player has a ",
                            { keyword: 65 },
                            ". The Demon Bear captures one of the Heroes discarded this way that has the lowest cost. The Demon Bear gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to that Hero's cost."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": The player of your choice gains that Hero."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": KO the captured Hero."
                        ]
                    ]
                },
                {
                    name: "Witchfire",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/limbo-05.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "4+",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Witchfire captures a Hero from the HQ with the lowest odd-numbered cost. ",
                            { keyword: 64, text: "Sunlight" },
                            ": Witchfire gets ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": The player of your choice gains that Hero."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": KO the captured Hero."
                        ]
                    ]
                }
            ]
        },
        {
            id: 89,
            name: "Hellions",
            cards: [
                {
                    name: "Catseye",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellions-01.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "3+",
                    abilities: [
                        [
                            { keyword: 64, text: "Moonlight" },
                            ": Catseye gets ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes."
                        ]
                    ]
                },
                {
                    name: "Thunderbird",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellions-02.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "4+",
                    abilities: [
                        [
                            { keyword: 64, text: "Sunlight" },
                            ": Thunderbird gets ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes."
                        ]
                    ]
                },
                {
                    name: "Tarot",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellions-03.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Reveal the top card of the Villain Deck. If it's a..."
                        ],
                        "Bystander: Rescue it.",
                        "Scheme Twist: Play it.",
                        "Master Strike: Each player gains a Wound.",
                        [
                            "Villain: Each player has a ",
                            { keyword: 65 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Roulette",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellions-04.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Reveal the top card of the Hero Deck. If it's ",
                            { hc: 5 },
                            " each player gains a Wound. If it's ",
                            { hc: 1 },
                            ", you draw a card."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Same Effect."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Same Effect."
                        ]
                    ]
                },
                {
                    name: "Empath",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellions-05.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "4+",
                    abilities: [
                        [
                            "During your turn, Empath gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each grey Hero you have."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player reveals a ",
                            { hc: 1 },
                            " Hero or has a ",
                            { keyword: 65 },
                            "."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Same effect."
                        ]
                    ]
                },
                {
                    name: "Jetstream",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellions-06.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { italic: "(After this enters the Sewers)" },
                            " Put Jetstream on the Bridge. If there's another Villain there, swap them."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player discards an ",
                            { team: 4 },
                            " Hero or gains a Wound."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 126,
            name: "Demon Bear Saga, The",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/122Scheme(114).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Include Demons of Limbo as one of the Villain Groups. Put the Demon Bear Villain from that groups next to the Scheme."
                        ],
                        [
                            { bold: "Twist" },
                            ": If the Demon Bear is in the city, it escapes. Otherwise, the Demon Bear enters the city from wherever it is. If it was in a player's Victory Pile, that player rescues 4 Bystanders."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Whenever the Demon Bear escapes, stack a Twist next to the Scheme as a “Dream Horror.“"
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 3 Dream Horrors."
                        ],
                    ]
                },
            ]
        },
        {
            id: 127,
            name: "Crash the Moon into the Sun",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/120Scheme(27).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists."
                        ],
                        [
                            { bold: "Twist 1,3,5,7" },
                            ": ",
                            { keyword: 64, text: "Moonlight" },
                            ": Stack this Twist next to the Scheme as an “Altered Orbit.“"
                        ],
                        [
                            { bold: "Twist 2,4,6,8" },
                            ": ",
                            { keyword: 64, text: "Sunlight" },
                            ": Same effect."
                        ],
                        [
                            { bold: "Twist 9,10,11" },
                            ": Same effect."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 4 Altered Orbits."
                        ],
                    ]
                },
            ]
        },
        {
            id: 128,
            name: "Trapped in the Insane Asylum",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/123Scheme(115).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 1 Twist, plus 2 Twists per player."
                        ],
                        [
                            { bold: "Twist" },
                            ": You face a “Sanity Test“: Either keep this Twist in front of you as a “Psychotic Break“, or discard a card and pass this Twist to the player on your left and that player faces a Sanity Test."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": On each of your turns, before you play other cards from your hand, you must play two randomly-selected cards from your hand for each Psychotic Break you have."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When a player has 3 Psychotic Breaks."
                        ],
                    ]
                },
            ]
        },
        {
            id: 129,
            name: "Superhuman Baseball Game",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/121Scheme(113).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 9 Twists. Add an extra Villain Group."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": The Bank nd the Streets do not exist. Put the Villain Deck under the HQ as “Home Plate.“ The Sewers, Rooftops, and Bridge are First, Second, and Third Base."
                        ],
                        [
                            { bold: "Twist" },
                            ": Play the top card of the Villain Deck. If it's a Bystander, rescue that “Cheering Fan.“ If it's a Master Strike, then after it resolves, any Villain on Third Base “Steals Home“ and Escapes. If it's a Villain, it “Hits a Double,“ pushes to Second Base ",
                            { italic: "(the Rooftops)" },
                            " and you play the top card from the Villain Deck."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When Evil has 4 “runs“ ",
                            { italic: "(Villains in the Escape Pile)" },
                            " per player."
                        ],
                    ]
                },
            ]
        },
    ]
};
