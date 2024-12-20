"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretWars1 = void 0;
exports.SecretWars1 = {
    id: 10,
    heroes: [
        {
            id: 71,
            name: "Apocalyptic Kitty Pryde",
            team: 4,
            cards: [
                {
                    name: "Phase Out",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/apocalyptic-kitty-pryde-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 1 },
                            ": You may KO a card from your hand or discard pile. If you do, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Infiltrate HQ",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/apocalyptic-kitty-pryde-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "You may put a Hero from the HQ on the bottom of the Hero Deck. The Hero that replaces it in the HQ costs 1 less during this turn."
                        ]
                    ]
                },
                {
                    name: "Disrupt Circuits",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/apocalyptic-kitty-pryde-02.png",
                    hc: 1,
                    hc2: 5,
                    rarity: 2,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1 " },
                            { icon: 1 },
                            " for each ",
                            { hc: 5 },
                            " Hero in the HQ."
                        ]
                    ]
                },
                {
                    name: "Untouchable",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/apocalyptic-kitty-pryde-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    recruit: "5",
                    abilities: [
                        "When any player defeats a Villain or Mastermind with a “Fight“ effect, you may discard this card to cancel that fight effect. If you do, draw three cards."
                    ]
                }
            ]
        },
        {
            id: 72,
            name: "Black Bolt",
            filterName: "Black Bolt (SW1)",
            team: 15,
            cards: [
                {
                    name: "Destructive Whisper",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-bolt-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " if you reveal four cards with no rules text."
                        ]
                    ]
                },
                {
                    name: "Speak No Words",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-bolt-03.png",
                    hc: 1,
                    hc2: 3,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    attack: "1",
                    abilities: [
                        []
                    ]
                },
                {
                    name: "Silence is Golden",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-bolt-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "4+",
                    recruit: "0+",
                    abilities: [
                        [
                            "Choose a card you played this turn with no rules text. You get its ",
                            { icon: 2 },
                            " and ",
                            { icon: 1 },
                            " again."
                        ]
                    ]
                },
                {
                    name: "Hypersonic Scream",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-bolt-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    attack: "3",
                    abilities: [
                        "For each card with no rules text you played this turn, draw a card."
                    ]
                }
            ]
        },
        {
            id: 73,
            name: "Black Panther",
            filterName: "Black Panther (SW1)",
            team: 15,
            cards: [
                {
                    name: "Catlike Reflexes",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-panther-03.png",
                    hc: 2,
                    hc2: 1,
                    rarity: 1,
                    cost: 3,
                    recruit: "1",
                    abilities: [
                        "Draw a card."
                    ]
                },
                {
                    name: "Multifaceted Genius",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-panther-04.png",
                    hc: 4,
                    hc2: 5,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other multicolored card you played this turn."
                        ]
                    ]
                },
                {
                    name: "Stalk the Urban Jungle",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-panther-02.png",
                    hc: 4,
                    hc2: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        "Whenever you defeat a Villain on the Rooftops or Streets this turn, you may KO one of your cards or a card from your discard pile."
                    ]
                },
                {
                    name: "King of Wakanda",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-panther-01.png",
                    hc: 2,
                    hc2: 5,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            "Gain three ",
                            { rule: 11 },
                            "."
                        ],
                        [
                            { team: 15 },
                            ": Put them on top of your deck."
                        ]
                    ]
                }
            ]
        },
        {
            id: 74,
            name: "Captain Marvel",
            filterName: "Captain Marvel (SW1)",
            team: 1,
            cards: [
                {
                    name: "Absorb Energies",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-marvel-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    recruit: "2+",
                    abilities: [
                        [
                            { hc: 3 },
                            ": For each other ",
                            { hc: 3 },
                            " Hero you have played this turn, you get",
                            { bold: "+1" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Supersonic Flight",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-marvel-04.png",
                    hc: 4,
                    hc2: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "1",
                    abilities: [
                        [
                            "Draw a card."
                        ]
                    ]
                },
                {
                    name: "Marvelous Strength",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-marvel-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            { hc: 4 },
                            ": For each other ",
                            { hc: 4 },
                            " Hero you have played this turn, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Cosmic Energies",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-marvel-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 7,
                    attack: "5+",
                    abilities: [
                        [
                            { hc: 4 },
                            { hc: 4 },
                            { hc: 3 },
                            { hc: 3 },
                            ": You get ",
                            { bold: "+6" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 75,
            name: "Dr. Strange",
            filterName: "Dr. Strange (SW1)",
            team: 15,
            cards: [
                {
                    name: "Cloak of Levitation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/dr-strange-03-1.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 3 },
                            ": Reveal the top card of your deck. Draw it or ",
                            { keyword: 1 },
                            " it.",
                        ]
                    ]
                },
                {
                    name: "Trust Me, I'm a Doctor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/dr-strange-04-1.png",
                    hc: 2,
                    hc2: 3,
                    rarity: 1,
                    cost: 2,
                    recruit: "1+",
                    abilities: [
                        [
                            { team: 15 },
                            ": You may KO a card from your hand or discard pile. If you do, you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Fight the Future",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/dr-strange-02-1.png",
                    hc: 2,
                    rarity: 2,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            { hc: 2 },
                            ": Reveal the top card of the Villain Deck. If it's a Villain, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " and may fight that Villain this turn."
                        ]
                    ]
                },
                {
                    name: "Sorcerer Supreme",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/dr-strange-01-1.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            "Reveal the top three cards of your deck. Draw any number of them and ",
                            { keyword: 1 },
                            " the rest."
                        ]
                    ]
                }
            ]
        },
        {
            id: 76,
            name: "Lady Thor",
            team: 1,
            cards: [
                {
                    name: "Mysterious Origin",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/lady-thor-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "Once per turn, if you made at least ",
                            { bold: "6" },
                            { icon: 2 },
                            " this turn, draw a card."
                        ]
                    ]
                },
                {
                    name: "Chosen by Asgard",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/lady-thor-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    attack: "0+",
                    abilities: [
                        [
                            "Once per turn, if you made at least ",
                            { bold: "6" },
                            { icon: 2 },
                            " this turn, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Heir to the Hammer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/lady-thor-02.png",
                    hc: 4,
                    hc2: 3,
                    rarity: 2,
                    cost: 6,
                    attack: "4+",
                    abilities: [
                        [
                            { hc: 4 },
                            { hc: 3 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Living Thunderstorm",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/lady-thor-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "0+",
                    recruit: "4",
                    abilities: [
                        [
                            "Once per turn, if you made at least ",
                            { bold: "6" },
                            { icon: 2 },
                            " this turn, you get ",
                            { bold: "+6" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 77,
            name: "Magik",
            team: 4,
            cards: [
                {
                    name: "Rally the New Mutants",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/magik-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    abilities: [
                        [
                            "Gain a ",
                            { rule: 11, text: "Sidekick" },
                            ".",
                        ],
                        [
                            { hc: 1 },
                            ": Gain another ",
                            { rule: 11, text: "Sidekick" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Travel through Limbo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/magik-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "1+",
                    abilities: [
                        { keyword: 1 },
                        [
                            { hc: 3 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Dimensional Portal",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/magik-02.png",
                    hc: 1,
                    hc2: 3,
                    rarity: 2,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        { keyword: 1 },
                        [
                            "For each ",
                            { rule: 11, text: "Sidekick" },
                            " you played this turn, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Wield the Soulsword",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/magik-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "2+",
                    abilities: [
                        { keyword: 1 },
                        [
                            "Choose a Villain or Mastermind in your Victory Pile. You get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to its printed VP."
                        ]
                    ]
                }
            ]
        },
        {
            id: 78,
            name: "Maximus",
            team: 14,
            cards: [
                {
                    name: "Mental Domination",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/maximus-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 1 },
                            ": Defeat a Henchman Villain for free"
                        ]
                    ]
                },
                {
                    name: "Enslave the Will",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/maximus-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 5 },
                            ": Whenever you defeat a Villain this turn, you gain a ",
                            { rule: 11, text: "Sidekick" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Pieces on a Chessboard",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/maximus-02.png",
                    hc: 1,
                    hc2: 5,
                    rarity: 2,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        "You may have a Henchman Villain from your Victory Pile enter the city. If you do, draw a card."
                    ]
                },
                {
                    name: "Inhuman Mastery",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/maximus-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    abilities: [
                        [
                            "Each other player reveals a",
                            { hc: 5 },
                            " hero or chooses a Henchman Villain from their Victory Pile. You defeat all those Henchmen for free."
                        ],
                        [
                            { team: 14 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "for each Henchman you defeated this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 79,
            name: "Namor, the Sub-Mariner",
            team: 14,
            cards: [
                {
                    name: "Lead the Armies of Atlantis",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/namor-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 2 },
                            ": Gain a ",
                            { rule: 11, text: "Sidekick" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Ruler of the Seas",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/namor-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 4 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            ", usable only against Villains on the Bridge or the Mastermind."
                        ]
                    ]
                },
                {
                    name: "Feed the Sharks",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/namor-02.png",
                    hc: 4,
                    hc2: 2,
                    rarity: 2,
                    cost: 6,
                    attack: "2",
                    abilities: [
                        "You may KO a card from your hand or discard pile. If you do, draw a card."
                    ]
                },
                {
                    name: "Imperius Rex",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/namor-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        "Defeat a Villain for free.",
                        [
                            { hc: 4 },
                            { hc: 4 },
                            { hc: 2 },
                            { hc: 2 },
                            ": Instead, defeat the Mastermind once for free."
                        ]
                    ]
                }
            ]
        },
        {
            id: 80,
            name: "Old Man Logan",
            team: 4,
            cards: [
                {
                    name: "Last Survivor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/old-man-logan-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 2 },
                            ": You may KO a card from your hand or discard pile. If you KO a wound this way, draw a card."
                        ]
                    ]
                },
                {
                    name: "Loner",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/old-man-logan-04.png",
                    hc: 2,
                    hc2: 1,
                    rarity: 1,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            "If you don't recruit any heroes this turn, you get .",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Rage Out",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/old-man-logan-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 6,
                    attack: "3+",
                    abilities: [
                        [
                            { hc: 2 },
                            { keyword: 17, text: ": Cross-Dimensional Wolverine Rampage." },
                            " For each other player who gained a Wound this way, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "No More Heroes",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/old-man-logan-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "5+",
                    abilities: [
                        [
                            "Reveal your hand. You get ",
                            { bold: "+5" },
                            { icon: 1 },
                            " if you haven't played any ",
                            { team: 2 },
                            " or ",
                            { team: 13 },
                            " cards this turn and don't have any in your hand."
                        ]
                    ]
                }
            ]
        },
        {
            id: 81,
            name: "Proxima Midnight",
            team: 14,
            cards: [
                {
                    name: "Inspiration Through Power",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/proxima-midnight-04.png",
                    hc: 2,
                    hc2: 1,
                    rarity: 1,
                    cost: 2,
                    attack: "1",
                    recruit: "1",
                    abilities: []
                },
                {
                    name: "Master Combatant",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/proxima-midnight-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            "If the most recent Hero you have played this turn has a ",
                            { icon: 2 },
                            " icon, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            ". If it has an ",
                            { icon: 1 },
                            " icon, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "General of the Black Order",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/proxima-midnight-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "3",
                    recruit: "0+",
                    abilities: [
                        [
                            { hc: 2 },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Supernova Spear",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/proxima-midnight-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 8,
                    attack: "4+",
                    recruit: "4+",
                    abilities: [
                        [
                            { hc: 1 },
                            ": You get ",
                            { bold: "+4" },
                            { icon: 2 },
                            " and ",
                            { bold: "+4" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 82,
            name: "Superior Iron Man",
            team: 15,
            cards: [
                {
                    name: "Armor Upgrades",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/superior-iron-man-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    attack: "1+",
                    abilities: [
                        [
                            { hc: 5 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Optimized Technology",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/superior-iron-man-03.png",
                    hc: 5,
                    hc2: 3,
                    rarity: 1,
                    cost: 5,
                    attack: "2",
                    abilities: [
                        [
                            "Draw a card."
                        ]
                    ]
                },
                {
                    name: "Superior to Others",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/superior-iron-man-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 3 },
                            ": Look at the top two cards of your deck. If one of them has a higher cost than the other, draw it. Put the rest back in any order.",
                        ]
                    ]
                },
                {
                    name: "#Humblebrag",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/superior-iron-man-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 8,
                    attack: "5",
                    abilities: [
                        [
                            "Draw a card for each other player who has fewer cards in their Victory Pile than you."
                        ]
                    ]
                }
            ]
        },
        {
            id: 83,
            name: "Thanos",
            team: 14,
            cards: [
                {
                    name: "Transdimensional Overlord",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thanos-04-1.png",
                    hc: 4,
                    rarity: 1,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        { keyword: 1 },
                        [
                            "You may KO a Bystander from your Victory Pile. If you do, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Revel in Destruction",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thanos-03-1.png",
                    hc: 4,
                    hc2: 3,
                    rarity: 1,
                    cost: 3,
                    recruit: "2+",
                    abilities: [
                        [
                            { team: 14 },
                            ": KO a Bystander from the Bystander Stack. Then, you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for every three Bystanders in the KO pile."
                        ]
                    ]
                },
                {
                    name: "Galactic Domination",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thanos-02-1.png",
                    hc: 3,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        [
                            { hc: 3 },
                            ": Each other player reveals a ",
                            { hc: 3 },
                            " Hero or chooses a Bystander from their Victory Pile. You “rescue“ those bystanders.",
                        ]
                    ]
                },
                {
                    name: "Utter Annihilation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thanos-01-1.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    abilities: [
                        [
                            "KO six Bystanders from the Bystander Stack. Then, defeat any Villain or Mastermind whose ",
                            { icon: 1 },
                            " is less than the number of Bystanders in the KO pile."
                        ]
                    ]
                }
            ]
        },
        {
            id: 84,
            name: "Ultimate Spider-Man",
            team: 3,
            cards: [
                {
                    name: "Leaping Spider",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ultimate-spider-man-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        "Reveal the top card of your deck. If it costs 2 or less, draw it.",
                        [
                            { hc: 4 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Marvel Team-Up",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ultimate-spider-man-03.png",
                    hc: 4,
                    hc2: 2,
                    rarity: 1,
                    cost: 2,
                    abilities: [
                        [
                            "Gain a ",
                            { rule: 11, text: "Sidekick" },
                            ".",
                        ],
                        [
                            "Reveal the top card of your deck. If it costs 2 or less, draw it."
                        ]
                    ]
                },
                {
                    name: "Web-Slinger",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ultimate-spider-man-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            ", usable only against the Mastermind or Villains on the Rooftops or Bridge."
                        ],
                        [
                            "Reveal the top card of your deck. If it costs 2 or less, draw it."
                        ]
                    ]
                },
                {
                    name: "Hero from Another Dimension",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ultimate-spider-man-05.png",
                    hc: 1,
                    rarity: 3,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each other card you have played this turn that costs 1 or 2."
                        ]
                    ]
                }
            ]
        }
    ],
    masterminds: [
        {
            id: 21,
            name: "Madelyne Pryor, Goblin Queen",
            tacticName: "Madelyne Pryor",
            vAttack: "10",
            vp: 6,
            cards: [
                {
                    name: "Madelyne Pryor, Goblin Queen",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/madelyne-pryor-01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "Bystanders captured by Madelyne are “Demon Goblin“ Villains with ",
                            { bold: "2" },
                            { icon: 1 },
                            ". You can fight them to rescue them as Bystanders. You can't fight her while she has any Demon Goblins."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Limbo"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Madelyne captures 4 Bystanders. If she already had any Bystanders before that, then each player gains a Wound."
                        ]
                    ]
                },
                {
                    name: "City of Demon Goblins",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/madelyne-pryor-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Madelyne captures five Bystanders."
                        ]
                    ]
                },
                {
                    name: "Corrupted Clone of Jean Grey",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/madelyne-pryor-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals an ",
                            { team: 4 },
                            " Hero or gains a Wound.",
                        ]
                    ]
                },
                {
                    name: "Everyone's a Demon on the Inside",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/madelyne-pryor-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Madelyne captures a Bystander from each other player's Victory Pile.",
                        ]
                    ]
                },
                {
                    name: "Gather the Harvest",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/madelyne-pryor-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": For each Limbo Villain in the city and/or Escape Pile, Madelyne captures a Bystander."
                        ]
                    ]
                }
            ]
        },
        {
            id: 22,
            name: "Nimrod, Super Sentinel",
            tacticName: "Nimrod",
            vAttack: "6",
            vp: 6,
            cards: [
                {
                    name: "Nimrod, Super Sentinel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nimrod-01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "You can't fight Nimrod unless you made at least ",
                            { bold: "6" },
                            { icon: 2 },
                            " this turn."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Sentinel Territories"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player who does not reveal a ",
                            { hc: 5 },
                            " Hero must choose ",
                            { icon: 2 },
                            " or ",
                            { icon: 1 },
                            ", then discard all their cards with that icon."
                        ]
                    ]
                },
                {
                    name: "Adapt and Destroy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nimrod-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ":  Choose ",
                            { icon: 2 },
                            " or ",
                            { icon: 1 },
                            ". Each other player reveals their hand and discards a card with that icon."
                        ]
                    ]
                },
                {
                    name: "Detect Mutation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nimrod-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ":  Choose ",
                            { icon: 2 },
                            " or ",
                            { icon: 1 },
                            ". Then, reveal the top card of your deck. If that card has that icon, draw it and repeat this process."
                        ]
                    ]
                },
                {
                    name: "Scatter the Mutants",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nimrod-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ":  Choose ",
                            { icon: 2 },
                            " or ",
                            { icon: 1 },
                            ". Put all Heroes from the HQ with that icon on the bottom of the Hero Deck."
                        ]
                    ]
                },
                {
                    name: "Teleport and Incarcerate",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nimrod-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ":  Choose ",
                            { icon: 2 },
                            " or ",
                            { icon: 1 },
                            ". Then, reveal the top card of that Hero Deck. If that card has that icon, gain that card, and ",
                            { keyword: 1 },
                            " it."
                        ]
                    ]
                }
            ]
        },
        {
            id: 23,
            name: "Wasteland Hulk",
            vAttack: "7",
            vp: 6,
            cards: [
                {
                    name: "Wasteland Hulk",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/wasteland-hulk-01.png",
                    vAttack: "7+",
                    abilities: [
                        [
                            "Wasteland Hulk gets ",
                            { bold: "+3" },
                            { icon: 1 },
                            " for each of his Mastermind Tactics among all players' Victory Piles."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Wasteland"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": ",
                            { keyword: 17, text: "Cross-Dimensional Hulk Rampage" }
                        ]
                    ]
                },
                {
                    name: "Brutal Beating",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/wasteland-hulk-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player counts the number of Wounds in their discard pile, then discards that many cards."
                        ]
                    ]
                },
                {
                    name: "Memories of Pain",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/wasteland-hulk-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player puts two Wounds from their discard pile on top of their deck.",
                        ]
                    ]
                },
                {
                    name: "Radioactive Regeneration",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/wasteland-hulk-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": KO up to two Wounds from your hand and/or discard pile.",
                        ]
                    ]
                },
                {
                    name: "Revert to Bruce Banner",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/wasteland-hulk-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You gain a ",
                            { hc: 5 },
                            "Hero from the HQ for free."
                        ]
                    ]
                }
            ]
        },
        {
            id: 24,
            name: "Zombie Green Goblin",
            tacticName: "Green Goblin",
            vAttack: "11",
            vp: 6,
            cards: [
                {
                    name: "Zombie Green Goblin",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/zombie-green-goblin-01.png",
                    vAttack: "11+",
                    abilities: [
                        [
                            "Zombie Green Goblin gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Hero in the KO pile that costs 7 or more."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": The Deadlands"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": ",
                            { keyword: 16 },
                            ". KO each Hero in the HQ that costs 7 or more. Then, each player discards a card for each Hero in the KO pile that costs 7 or more."
                        ]
                    ]
                },
                {
                    name: "Army of Cadavers",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/zombie-green-goblin-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 16 },
                            { italic: " (this effect never makes Mastermind Tactics return.)" },
                            " Then, each other player discards a card for each Villain in the city that has “",
                            { keyword: 16 },
                            ".“"
                        ]
                    ]
                },
                {
                    name: "The Hungry Dead",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/zombie-green-goblin-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 16 },
                            { italic: " (this effect never makes Mastermind Tactics return.)" },
                            " Then, each other player gains a Wound if there are any Villains in the city with “",
                            { keyword: 16 },
                            ".“"
                        ]
                    ]
                },
                {
                    name: "Love to Have You for Dinner",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/zombie-green-goblin-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 16 },
                            { italic: " (this effect never makes Mastermind Tactics return.)" },
                            " Then, reveal the top 5 cards of the Hero Deck. KO all those Heroes that cost 7 or more. Put the rest on the bottom of the Hero Deck in random order."
                        ]
                    ]
                },
                {
                    name: "Reign of Terror",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/zombie-green-goblin-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 16 },
                            { italic: " (this effect never makes Mastermind Tactics return.)" },
                            " Then, put all Heroes from the HQ that cost 6 or less on the bottom of the Hero Deck."
                        ]
                    ]
                }
            ]
        },
    ],
    henchmen: [
        {
            id: 13,
            name: "Ghost Racers",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/ghost-racers.png",
            vAttack: "3",
            vp: 1,
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 16 }
                        ],
                        [
                            { bold: "Fight" },
                            ": Reveal a ",
                            { hc: 1 },
                            " Hero or KO one of your Heroes with an ",
                            { icon: 1 },
                            " icon."
                        ]
                    ]
                },
            ]
        },
        {
            id: 14,
            name: "M.O.D.O.K.s",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/modoks.png",
            vAttack: "3",
            vp: 1,
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": KO a Hero from your discard pile or the HQ. If that Hero has a ",
                            { icon: 2 },
                            " icon, you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
            ]
        },
        {
            id: 15,
            name: "Thor Corps",
            vp: 1,
            vAttack: "3",
            cards: [
                {
                    name: "Thor Corps",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/thor-corps.png",
                    hc: 4,
                    hc2: 3,
                    team: 1,
                    recruit: "2+",
                    overrideType: 1,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Gain this as a Hero."
                        ],
                        { divider: true },
                        [
                            { hc: 4 },
                            { hc: 3 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
            ]
        },
    ],
    villains: [
        {
            id: 28,
            name: "Deadlands, The",
            subtitle: "Villain - The Deadlands",
            cards: [
                {
                    name: "Zombie Baron Zemo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-deadlands-06.png",
                    qtd: 1,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { keyword: 16 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": For each of your ",
                            { team: 1 },
                            " Heroes, rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Zombie Loki",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-deadlands-04.png",
                    qtd: 1,
                    vAttack: "8",
                    vp: "6",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { keyword: 16 }
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Loki ascends to become a ",
                            { rule: 3, text: "new Mastermind" },
                            ". He gains the ability, “",
                            { bold: "Master Strike" },
                            ": Each player reveals a ",
                            { hc: 4 },
                            " Hero or gains a Wound.“"
                        ]
                    ]
                },
                {
                    name: "Zombie Madame Hydra",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-deadlands-03.png",
                    qtd: 1,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { keyword: 16 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your ",
                            { team: 2 },
                            " Heroes or ",
                            { team: 13 },
                            " Allies."
                        ]
                    ]
                },
                {
                    name: "Zombie Mr. Sinister",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-deadlands-01.png",
                    qtd: 1,
                    vAttack: "7",
                    vp: "5",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { keyword: 16 }
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Sinister ascends to become a ",
                            { rule: 3, text: "new Mastermind" },
                            ". He gains the ability, “",
                            { bold: "Master Strike" },
                            ": Sinister captures a Bystander. Then, each player with exactly 6 cards reveals a ",
                            { hc: 1 },
                            " Hero or discards cards equal to the number of Bystanders Sinister has.“"
                        ]
                    ]
                },
                {
                    name: "Zombie M.O.D.O.K.",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-deadlands-02.png",
                    qtd: 1,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { keyword: 16 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your heroes with a ",
                            { icon: 2 },
                            " icon."
                        ]
                    ]
                },
                {
                    name: "Zombie Mysterio",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-deadlands-07.png",
                    qtd: 1,
                    vAttack: "6",
                    vp: "6",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { keyword: 16 }
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Shuffle this card into the Mastermind's face-down Mastermind Tactics. It becomes a Mastermind Tactic that says “",
                            { bold: "Fight" },
                            ": Draw two cards.“"
                        ]
                    ]
                },
                {
                    name: "Zombie Thanos",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-deadlands-08.png",
                    qtd: 1,
                    vAttack: "9",
                    vp: "6",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { keyword: 16 }
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Thanos ascends to become a ",
                            { rule: 3, text: "new Mastermind" },
                            ". He gains the ability, “",
                            { bold: "Master Strike" },
                            ": Each player reveals their hand and KOs one of their non-grey Heroes.“"
                        ]
                    ]
                },
                {
                    name: "Zombie Venom",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-deadlands-05.png",
                    qtd: 1,
                    vAttack: "5",
                    vp: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": ",
                            { keyword: 16 }
                        ],
                        [
                            "You can't defeat Zombie Venom unless you have a ",
                            { hc: 1 },
                            " Hero."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player gains a Wound."
                        ]
                    ]
                }
            ]
        },
        {
            id: 29,
            name: "Domain of Apocalypse",
            cards: [
                {
                    name: "Apocalyptic Blink",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/domain-of-apocalypse-04.png",
                    qtd: 3,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal the top card of your deck. Draw it or ",
                            { keyword: 1 },
                            " it."
                        ]
                    ]
                },
                {
                    name: "Apocalyptic Magneto",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/domain-of-apocalypse-02.png",
                    qtd: 1,
                    vAttack: "8",
                    vp: "6",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Gain an ",
                            { team: 4 },
                            " Hero from the HQ for free."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Magneto ascends to become a ",
                            { rule: 3, text: "new Mastermind" },
                            ". He gains the ability, “",
                            { bold: "Master Strike" },
                            ": Each player reveals an ",
                            { team: 4 },
                            " Hero or discards down to 4 cards.“"
                        ]
                    ]
                },
                {
                    name: "Apocalyptic Rogue",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/domain-of-apocalypse-01.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal the top card of the Hero deck. The player of your choice gains it."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Reveal the top card of the Hero deck. Each player reveals their hand and discards a card of that class."
                        ]
                    ]
                },
                {
                    name: "Apocalyptic Weapon X",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/domain-of-apocalypse-03.png",
                    qtd: 2,
                    vAttack: "7",
                    vp: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your heroes."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": ",
                            { keyword: 17, text: "Cross-Dimensional Wolverine Rampage" }
                        ]
                    ]
                }
            ]
        },
        {
            id: 30,
            name: "Limbo",
            cards: [
                {
                    name: "Inferno Colossus",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/limbo-01.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": The Mastermind captures a Bystander."
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
                    name: "Inferno Cyclops",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/limbo-02.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Inferno Cyclops captures a Bystander."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": The Mastermind captures all the Bystanders this Villain had."
                        ],
                        { italic: "(Players still discard for the Bystander being carried away.)" }
                    ]
                },
                {
                    name: "Inferno Darkchilde",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/limbo-04.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal the top card of your deck. KO it or ",
                            { keyword: 1 },
                            " it."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player ",
                            { keyword: 1, text: "Teleports" },
                            " a random card from their hand."
                        ]
                    ]
                },
                {
                    name: "Inferno Nightcrawler",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/limbo-03.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Up to two cards in your hand that have a ",
                            { icon: 2 },
                            " icon gain ",
                            { keyword: 1 },
                            " this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 31,
            name: "Manhattan (Earth-1610)",
            cards: [
                {
                    name: "Ultimate Captain America",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/manhattan-earth-1610-04.png",
                    qtd: 2,
                    vAttack: "6",
                    hc: 4,
                    team: 1,
                    overrideType: 1,
                    attack: "0+",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Gain this as a Hero."
                        ],
                        { divider: true },
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each color of Hero you have. ",
                            { italic: "(including " },
                            { hc: 4 },
                            { italic: " and grey)" }
                        ]
                    ]
                },
                {
                    name: "Ultimate Captain Marvel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/manhattan-earth-1610-01.png",
                    qtd: 2,
                    vAttack: "4",
                    hc: 3,
                    team: 1,
                    overrideType: 1,
                    recruit: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Gain this as a Hero."
                        ],
                        { divider: true },
                        { keyword: 1 }
                    ]
                },
                {
                    name: "Ultimate Thor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/manhattan-earth-1610-03.png",
                    qtd: 2,
                    vAttack: "7",
                    hc: 3,
                    team: 1,
                    overrideType: 1,
                    attack: "3+",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Gain this as a Hero."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": ",
                            { keyword: 17, text: "Cross-Dimensional Thor Rampage" }
                        ],
                        { divider: true },
                        [
                            { hc: 3 },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Ultimate Wasp",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/manhattan-earth-1610-02.png",
                    qtd: 2,
                    vAttack: "5",
                    hc: 1,
                    team: 1,
                    overrideType: 1,
                    attack: "2+",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Gain this as a Hero."
                        ],
                        { divider: true },
                        [
                            { hc: 1 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 32,
            name: "Sentinel Territories",
            cards: [
                {
                    name: "Colossus of Future Past",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sentinel-territories-02.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { italic: "Colossus alters the future" },
                            ": Don't play a Villain card at the beginning of next turn."
                        ]
                    ]
                },
                {
                    name: "Kate Pryde of Future Past",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sentinel-territories-01.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            ". Then, ",
                            { italic: "Kate Pryde alters the future" },
                            ": At the beginning of the next player's turn, that player gets ",
                            { bold: "+1" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Rachel Summers of Future Past",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sentinel-territories-04.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { italic: "Rachel Summers alters the future" },
                            ": During the next player's turn, all Villains and the Mastermind get ",
                            { bold: "-1" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": This turn, all Villains and the Mastermind get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Wolverine of Future Past",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sentinel-territories-03.png",
                    qtd: 2,
                    vAttack: "7",
                    vp: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { italic: "Wolverine alters the future" },
                            ": At the start of the next player's turn, you draw a card, and that player draws a card."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": ",
                            { keyword: 17, text: "Cross-Dimensional Wolverine Rampage" }
                        ]
                    ]
                }
            ]
        },
        {
            id: 33,
            name: "Wasteland",
            cards: [
                {
                    name: "The Hulk Gang",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/wasteland-01.png",
                    qtd: 3,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 17, text: "Cross-Dimensional Hulk Rampage" }
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
                    name: "Wasteland Kingpin",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/wasteland-04.png",
                    qtd: 1,
                    vAttack: "11",
                    vp: "6",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 2 }
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Kingpin ascends to become a ",
                            { rule: 3, text: "new Mastermind" },
                            ". He gains the ability, “",
                            { bold: "Master Strike" },
                            ": Each player reveals an ",
                            { hc: 2 },
                            " Hero or discards their hand and draws 5 cards.“"
                        ]
                    ]
                },
                {
                    name: "Wasteland Hawkeye",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/wasteland-02.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Wasteland Hawkeye captures a Bystander."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each other player draws a card, or each other player discards a card."
                        ],
                    ]
                },
                {
                    name: "Wasteland Spider-Girl",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/wasteland-03.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal the top card of your deck. If it costs 2 or less, KO it."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 40,
            name: "Build an Army of Annihilation",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/45Scheme(65).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 9 Twists. Put 10 extra Annihilation Wave Henchmen in the KO pile."
                        ],
                        [
                            { bold: "Twist" },
                            ": KO all Annihilation Henchmen from players' Victory Piles. Stack this Twist next to the Scheme. Then, for each Twist in that stack, put an Annihilation Henchman from the KO pile next to the Mastermind. Players can fight those Henchmen.",
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 10 Annihilation Henchmen next to the Mastermind."
                        ],
                    ]
                },
            ]
        },
        {
            id: 41,
            name: "Corrupt the Next Generation of Heroes",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/46Scheme(66).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Add 10 ",
                            { rule: 11 },
                            " to the Villain Deck."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": ",
                            { rule: 11 },
                            " in the Villain Deck and city are Villains. Their ",
                            { icon: 1 },
                            " is 2 plus the number of Twists stacked next to this Scheme. When you defeat a ",
                            { rule: 11, text: "Sidekick" },
                            ", gain it to the top of your deck."
                        ],
                        [
                            { bold: "Twists 1-7" },
                            ": Each player returns a ",
                            { rule: 11, text: "Sidekick" },
                            " from their discard pile to the ",
                            { rule: 11, text: "Sidekick" },
                            " Stack. Then, two ",
                            { rule: 11 },
                            " from the ",
                            { rule: 11, text: "Sidekick" },
                            " Stack enter the city.",
                        ],
                        [
                            { bold: "Twist 8" },
                            ": All ",
                            { rule: 11 },
                            " in the city escape.",
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 4 ",
                            { rule: 11 },
                            " escape."
                        ],
                    ]
                },
            ]
        },
        {
            id: 42,
            name: "Crush Them With My Bare Hands",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/47Scheme(67).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 5 Twists. If playing solo, add an extra Villain Group."
                        ],
                        [
                            { bold: "Twist" },
                            ": This Twist becomes a Master Strike that takes effect immediately.",
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 8 Master Strikes have taken effect."
                        ],
                    ]
                },
            ]
        },
        {
            id: 43,
            name: "Dark Alliance",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/43Scheme(63).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists."
                        ],
                        [
                            { bold: "Twist 1" },
                            ": Add a random ",
                            { rule: 3, text: "second Mastermind" },
                            " to the game with one Mastermind Tactic."
                        ],
                        [
                            { bold: "Twist 2-4" },
                            ": If the ",
                            { rule: 3, text: "second Mastermind" },
                            " is still in play, it gains another Mastermind Tactic."
                        ],
                        [
                            { bold: "Twist 5-6" },
                            ": Each Mastermind captures a Bystander."
                        ],
                        [
                            { bold: "Twist 7" },
                            ": Evil Wins!"
                        ],
                    ]
                },
            ]
        },
        {
            id: 44,
            name: "Fragmented Realities",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/42Scheme(62).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": Add an extra Villain Group. Shuffle the Villain Deck, then split it as evenly as possible into a Villain Deck for each player. Then, shuffle 2 Twists into each player's Villain Deck."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": The normal city does not exist. Instead, each player has a different dimension in front of them with one city space. Villains and Bystanders from your Villain Deck enter your dimension. You can fight Villains in any dimension."
                        ],
                        [
                            { bold: "Twist" },
                            ": Play two card from your Villain Deck."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the number of non-grey Heroes in the KO pile is 5 times the number of players."
                        ],
                    ]
                },
            ]
        },
        {
            id: 45,
            name: "Master of Tyrants",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/41Scheme(61).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Choose 3 other Masterminds, and shuffle their 12 Tactics into the Villain Deck. Those Tactics are “Tyrant Villains“ with their printed ",
                            { icon: 1 },
                            " and no abilities."
                        ],
                        [
                            { bold: "Twist 1-7" },
                            ": Put this Twist under a Tyrant Villain as “Dark Power.“ It gets ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { bold: "Twist 8" },
                            ": All Tyrant Villains in the city escape."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 5 Tyrant Villains escape."
                        ],
                    ]
                },
            ]
        },
        {
            id: 46,
            name: "Pan-Dimensional Plague",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/40Scheme(60).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 10 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": KO all Wounds from next to the HQ. Then, put a Wound from the Wound Stack next to each Hero in the HQ."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": When a player recruits a Hero with a Wound next to it, that player can either gain that Wound or pay ",
                            { bold: "1" },
                            { icon: 2 },
                            " to return that Wound to the Wound Stack."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the Wound Stack runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 47,
            name: "Smash Two Dimensions Together",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/44Scheme(64).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Add an extra Villain Group. Put the Villain Deck on the Bank space."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": The Sewers and Bank do not exist, so the city is only 3 spaces. There is a parallel dimension with 3 city spaces above the main city. Whenever a Villain enters the city, the current player chooses which city it enters."
                        ],
                        [
                            { bold: "Twist 1-7" },
                            ": Play two cards from the Villain Deck."
                        ],
                        [
                            { bold: "Twist 8" },
                            ": All Villains in both dimensions escape."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 10 Villains escape."
                        ],
                    ]
                },
            ]
        },
    ],
    bystanders: [
        {
            id: 15,
            name: "Banker",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-banker.png",
            vp: 1,
            cards: [
                {
                    qtd: 3,
                    abilities: [
                        [
                            "When you rescue this Bystander, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            ", usable only to recruit Heroes in the HQ space under the Bank."
                        ]
                    ]
                }
            ]
        },
    ],
};
