"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FearItself = void 0;
exports.FearItself = {
    id: 8,
    heroes: [
        {
            id: 63,
            name: "Greithoth, Breaker of Wills",
            team: 10,
            cards: [
                {
                    name: "Absorb Metal",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/greithoth-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    attack: "1+",
                    abilities: [
                        [
                            "If you control an ",
                            { keyword: 13 },
                            ", you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Mace of Chains",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/greithoth-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    abilities: [
                        { keyword: 14 },
                        [
                            "When you throw this, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Break the Will to Resist",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/greithoth-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            { hc: 1 },
                            ": Each player discards the bottom card of their deck. For each non-grey card discard this way, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Body of Uru",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/greithoth-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the total number of ",
                            { keyword: 13, text: "Artifacts" },
                            " controlled by players and ",
                            { keyword: 13, text: "Artifacts" },
                            " the Lair."
                        ]
                    ]
                }
            ]
        },
        {
            id: 64,
            name: "Kuurth, Breaker of Stone",
            team: 10,
            cards: [
                {
                    name: "Reach for Power",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/kuurth-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    recruit: "2+",
                    abilities: [
                        [
                            "Reveal the top or bottom card of your deck. If it costs 4 or more, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Unstoppable Sledge",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/kuurth-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    abilities: [
                        { keyword: 14 },
                        [
                            "When you throw this, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Contest of Strength",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/kuurth-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            { team: 10 },
                            ": Discard the top card of any player's deck. Then reveal the top or bottom card of your deck. If the card you revealed has an equal or higher cost, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Break Every Bone",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/kuurth-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 7,
                    attack: "0+",
                    abilities: [
                        [
                            "Reveal a card from your hand, the top card of your deck, and the bottom card of your deck. You get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to their total costs."
                        ]
                    ]
                }
            ]
        },
        {
            id: 65,
            name: "Nerkkod, Breaker of Oceans",
            team: 10,
            cards: [
                {
                    name: "Pull of the Tides",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nerkkod-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "You may move an Adversary to an adjacent city space. If another Adversary is already there, swap them."
                        ]
                    ]
                },
                {
                    name: "Feed My Undersea Legions",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nerkkod-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            "Whenever you defeat an Adversary on the Bridge this turn, you may KO one of your cards or a card from your discard pile. If you do, gain a New Recruit."
                        ]
                    ]
                },
                {
                    name: "Cudgel of the Deep",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nerkkod-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 5,
                    abilities: [
                        { keyword: 14 },
                        [
                            "When you throw this, you get ",
                            { bold: "+3" },
                            { icon: 1 },
                            ", usable only against Adversaries on the Bridge or the Commander."
                        ]
                    ]
                },
                {
                    name: "Break Their Loyalties",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nerkkod-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        [
                            { team: 10 },
                            ": Each other player reveals their hand. Choose a New Recruit or Madame HYDRA from each of those players' hands and put them into your hand."
                        ]
                    ]
                }
            ]
        },
        {
            id: 66,
            name: "Nul, Breaker of Worlds",
            team: 10,
            cards: [
                {
                    name: "Demolition Derby",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nul-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 4 },
                            ": Choose a player and ",
                            { keyword: 9 },
                            " them. If that player discards a card this way, draw a card."
                        ]
                    ]
                },
                {
                    name: "Otherworldly Maul",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nul-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    abilities: [
                        { keyword: 14 },
                        [
                            "When you throw this, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each ",
                            { hc: 4 },
                            " Ally you played this turn."
                        ]
                    ]
                },
                {
                    name: "Nul Smash!",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nul-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        [
                            "Say “NUL SMASH!“ Then each player slaps a palm on the table. The last other player to slap a palm on the table gains a Bindings."
                        ]
                    ]
                },
                {
                    name: "Break the World",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nul-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 8,
                    attack: "6",
                    abilities: [
                        [
                            "KO up to two cards from your hand and/or discard pile. For each Bindings you KO this way, ",
                            { keyword: 9, text: "demolish" },
                            " each other player."
                        ]
                    ]
                }
            ]
        },
        {
            id: 67,
            name: "Skadi",
            team: 13,
            cards: [
                {
                    name: "Dark Prophecy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skadi-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 5 },
                            ": Gain a Madame HYDRA."
                        ]
                    ]
                },
                {
                    name: "Ancient Oath of HYDRA",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skadi-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 5,
                    attack: "1",
                    abilities: [
                        [
                            "You may discard a",
                            { team: 13 },
                            " Ally. If you do, draw two cards."
                        ]
                    ]
                },
                {
                    name: "Hammer of the Serpent",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skadi-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    abilities: [
                        { keyword: 14 },
                        [
                            "When you throw this, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each card you discarded this turn."
                        ],
                        { italic: "(Throwing an Artifact does not count as “discarding“ it.)" }
                    ]
                },
                {
                    name: "War Banner of HYDRA",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skadi-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        { keyword: 14 },
                        [
                            "When you throw this, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other",
                            { team: 13 },
                            " Ally you played this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 68,
            name: "Skirn, Breaker of Men",
            team: 10,
            cards: [
                {
                    name: "Towering Leader",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skirn-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    abilities: [
                        "Gain two New Recruits.",
                        [
                            { hc: 2 },
                            ": Gain a third New Recruit."
                        ]
                    ]
                },
                {
                    name: "Underhanded Dealings",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skirn-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        "Look at the bottom card of your deck. Discard it or put it back.",
                        [
                            { hc: 1 },
                            ": Draw a card from the bottom of your deck."
                        ]
                    ]
                },
                {
                    name: "Titanic Bludgeon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skirn-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 2,
                    abilities: [
                        { keyword: 14 },
                        [
                            "When you throw this, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each card you've drawn this turn. ",
                            { italic: "(This doesn't count the six cards you draw at the end of your turn.)" }
                        ]
                    ]
                },
                {
                    name: "Break Your Hopes",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skirn-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 7,
                    attack: "4",
                    abilities: [
                        [
                            "Each player reveals a ",
                            { hc: 1 },
                            " Ally or discards a card. For each card discarded this way, you draw a card."
                        ]
                    ]
                }
            ]
        },
    ],
    masterminds: [
        {
            id: 20,
            name: "Uru-Enchanted Iron Man",
            tacticName: "Uru Iron Man",
            vAttack: "7",
            vp: 6,
            cards: [
                {
                    name: "Uru-Enchanted Iron Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/uru-enchanted-iron-man-01-1.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": The Mighty"
                        ],
                        [
                            { bold: "Command Strike" },
                            ": ",
                            { keyword: 9 },
                            " each player. Then stack this Strike next to Iron Man. Uru-Enchanted Iron Man has an ",
                            { keyword: 15, text: "Uru-Enchanted Weapon" },
                            " for each Strike stacked here."
                        ]
                    ]
                },
                {
                    name: "Armor of the Destroyer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/uru-enchanted-iron-man-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": For each ",
                            { hc: 5 },
                            " Ally you have, ",
                            { keyword: 9, text: "demolish" },
                            " each other player."
                        ]
                    ]
                },
                {
                    name: "Pepper Potts in Rescue Armor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/uru-enchanted-iron-man-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": A Bystander from the Bystander Stack becomes a Command Strike that takes effect immediately."
                        ]
                    ]
                },
                {
                    name: "Quantum Inventions",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/uru-enchanted-iron-man-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Draw two cards. Then, if you reveal a ",
                            { hc: 5 },
                            " card, draw two more cards.",
                        ]
                    ]
                },
                {
                    name: "Repulsor Coils",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/uru-enchanted-iron-man-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals a ",
                            { hc: 5 },
                            " Ally or gains a Bindings.",
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 27,
            name: "Mighty, The",
            subtitle: "Adversary - The Mighty",
            cards: [
                {
                    name: "Black Widow",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-mighty-05.png",
                    qtd: 1,
                    vAttack: "3",
                    vp: "4",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 15, text: "2 Uru-Enchanted Weapons" },
                        [
                            { keyword: 100 },
                            ": If her Uru-Enchanted Weapons revealed any Bystanders, kidnap them."
                        ]
                    ]
                },
                {
                    name: "Dr. Strange",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-mighty-06.png",
                    qtd: 1,
                    vAttack: "5",
                    vp: "4",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Reveal the top three cards of the Adversary Deck. Put the Adversary you revealed with the highest printed VP on top of that deck. Put the rest on the bottom of that deck in random order."
                        ],
                        { keyword: 15, text: "Uru-Enchanted Weapon" },
                        [
                            { keyword: 100 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Hawkeye",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-mighty-01.png",
                    qtd: 1,
                    vAttack: "3",
                    vp: "2",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 15, text: "Uru-Enchanted Weapon" },
                        [
                            { keyword: 100 },
                            ": Choose one: Each other player draws a card, or each other player discards a card."
                        ]
                    ]
                },
                {
                    name: "Iron Fist",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-mighty-04.png",
                    qtd: 1,
                    vAttack: "3",
                    vp: "2",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 15, text: "Uru-Enchanted Weapon" },
                        [
                            { keyword: 100 },
                            ": If his Uru-Enchanted Weapon revealed an Adversary, KO one of your Allies."
                        ]
                    ]
                },
                {
                    name: "Ms. Marvel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-mighty-08.png",
                    qtd: 1,
                    vAttack: "4",
                    vp: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 15, text: "Uru-Enchanted Weapon" },
                        [
                            { keyword: 100 },
                            ": If her Uru-Enchanted Weapon revealed a Command Strike or Plot Twist, play it."
                        ],
                        [
                            {
                                bold: "Overrun"
                            },
                            ": Each player reveals a ",
                            { hc: 3 },
                            " Ally or gains a Bindings."
                        ]
                    ]
                },
                {
                    name: "Red She-Hulk",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-mighty-07.png",
                    qtd: 1,
                    vAttack: "4",
                    vp: "2",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 15, text: "Uru-Enchanted Weapon" },
                        [
                            { keyword: 100 },
                            ": If her Uru-Enchanted Weapon revealed an Adversary, put that Adversary into your Victory Pile."
                        ]
                    ]
                },
                {
                    name: "Spider-Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-mighty-03.png",
                    qtd: 1,
                    vAttack: "2",
                    vp: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 15, text: "2 Uru-Enchanted Weapons" },
                        [
                            { keyword: 100 },
                            ": Play all the cards revealed by his Uru-Enchanted Weapon that are worth 2 VP or less."
                        ],
                        [
                            {
                                bold: "Overrun"
                            },
                            ": Each player gains a Bindings."
                        ]
                    ]
                },
                {
                    name: "Wolverine",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/the-mighty-02.png",
                    qtd: 1,
                    vAttack: "5",
                    vp: "6",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 15, text: "2 Uru-Enchanted Weapons" },
                        [
                            { keyword: 100 },
                            ": Draw two cards."
                        ],
                        [
                            {
                                bold: "Overrun"
                            },
                            ": Each player reveals an ",
                            { hc: 2 },
                            " Ally or gains a Bindings. Then put Wolverine on top of the Adversary Deck."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 37,
            name: "Fear Itself",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/39Scheme(11).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 10 Twists."
                        ],
                        [
                            "Earth's “Fear Level“ starts at 8. The number of Allies in the Lair is always equal to the Fear Level."
                        ],
                        [
                            { bold: "Twist" },
                            ": KO an Ally from the Lair. The Fear Level goes down by 1."
                        ],
                        [
                            { bold: "Good Wins" },
                            ": When the Fear Level is 0."
                        ],
                    ]
                },
            ]
        },
        {
            id: 38,
            name: "Last Stand at Avengers Tower",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/37Scheme(9).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 6 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Stack this Twist above the Rooftops as “StarkTech Defenses.“ If there is an Adversary on the Rooftops, choose 3 Allies from the Lair & KO them."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": While an Adversary is on the Rooftops, it gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each StarkTech Defenses."
                        ],
                        [
                            { bold: "Good Wins" },
                            ": When there are 13 non-grey Allies in the KO pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 39,
            name: "Traitor, The",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/38Scheme(10).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 2+ players only. 8 Twists. Shuffle a 'Betrayal Deck' of 3 Bindings per player and a 9th Twist."
                        ],
                        [
                            { bold: "Twists 1-3" },
                            ": If there is no revealed Traitor, each player puts a 'Betrayal Card' from the Betrayal Deck face down in front of them and looks at it."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": During your turn, you may reveal a Twist from your Betrayal Cards to become 'the Traitor'. If you do, each other player gains all the Bindings from their Betrayal Cards."
                        ],
                        [
                            "During your turns, you may spend ",
                            { bold: "4" },
                            { icon: 1 },
                            " any number of times to play an additional card from the Adversary Deck."
                        ],
                        [
                            { bold: "Twists 8" },
                            ": Good wins! The Traitor reveals themself and also wins."
                        ],
                        [
                            { bold: "When the players win" },
                            ": The Traitor reveals themself and loses."
                        ],
                    ]
                },
            ]
        },
    ]
};
