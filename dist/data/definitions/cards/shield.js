"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shield = void 0;
exports.Shield = {
    id: 25,
    heroes: [
        {
            id: 194,
            name: "Agent Phil Coulson",
            team: 2,
            cards: [
                {
                    name: "Impeccable Planning",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/agent-coulson_04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 61, text: "S.H.I.E.L.D. Level 3" },
                            ": When you draw a new hand of cards at the end of this turn, draw an extra card."
                        ]
                    ]
                },
                {
                    name: "Build the Strike Team",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/agent-coulson_03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        "Reveal the top card of the S.H.I.E.L.D. Officer Stack. Gain it or put it on the bottom of the stack.",
                        [
                            { hc: 1 },
                            ": You may send it ",
                            { keyword: 60 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Approve Orbital Strike",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/agent-coulson_02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 6,
                    attack: "0+",
                    abilities: [
                        "Choose one:",
                        [
                            "- Send a ",
                            { team: 2 },
                            " Hero from your hand ",
                            { keyword: 60 },
                            "."
                        ],
                        [
                            "- Or you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each 2 ",
                            { keyword: 61, text: "S.H.I.E.L.D. Levels" },
                            " you have."
                        ]
                    ]
                },
                {
                    name: "Fake But Inspiring Death",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/agent-coulson_01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 8,
                    attack: "4+",
                    abilities: [
                        [
                            "During any player's turn, when another ",
                            { team: 2 },
                            " Hero is put into the KO pile, you may discard this card to send that Hero ",
                            { keyword: 60 },
                            " in your Victory Pile instead. If you do, draw three cards."
                        ],
                        [
                            { keyword: 61, text: "S.H.I.E.L.D. Level 8" },
                            ": You get ",
                            { bold: "+4" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
            ]
        },
        {
            id: 195,
            name: "Deathlok",
            team: 2,
            cards: [
                {
                    name: "Authorize Lethal Force",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deathlok_04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        "Draw a card.",
                        [
                            { keyword: 61, text: "S.H.I.E.L.D. Level 1" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Reanimate Into Service",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deathlok_03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 5 },
                            ": You may send a ",
                            { team: 2 },
                            " Hero ",
                            { keyword: 60 },
                            " from your discard pile or the KO pile."
                        ]
                    ]
                },
                {
                    name: "Headlok",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deathlok_02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    attack: "0+",
                    recruit: "3",
                    abilities: [
                        [
                            { keyword: 61, text: "S.H.I.E.L.D. Level 3" },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            "If your S.H.I.E.L.D. Level is less than 3, you may send a ",
                            { team: 2 },
                            " card from your discard pile ",
                            { keyword: 60 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Behind Enemy Lines",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deathlok_01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 8,
                    attack: "5",
                    recruit: "0+",
                    abilities: [
                        [
                            "You may send a ",
                            { team: 2 },
                            " Hero from your discard pile ",
                            { keyword: 60 },
                            "."
                        ],
                        [
                            { keyword: 61, text: "S.H.I.E.L.D. Level 3" },
                            ": You get the total printed ",
                            { icon: 2 },
                            " of all the ",
                            { team: 2 },
                            " Heroes in your Victory Pile."
                        ]
                    ]
                },
            ]
        },
        {
            id: 196,
            name: "Mockingbird",
            team: 2,
            cards: [
                {
                    name: "Take Cover",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mockingbird_04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        "Look at the top card of your deck. Discard it or put it back.",
                        [
                            { hc: 2 },
                            ": If that card was a ",
                            { team: 2 },
                            " Hero, you may send it, ",
                            { keyword: 60 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Battle Staves",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mockingbird_03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 61, text: "S.H.I.E.L.D. Level 2" },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Spymaster",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mockingbird_02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "1+",
                    abilities: [
                        "Choose one:",
                        [
                            "- Send a card from the S.H.I.E.L.D. Officer Stack  ",
                            { keyword: 60 },
                            "."
                        ],
                        [
                            "- Or you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each 2 ",
                            { keyword: 61, text: "S.H.I.E.L.D. Levels" },
                            " you have."
                        ]
                    ]
                },
                {
                    name: "Infinity Formula",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mockingbird_01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 7,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        "Draw a card.",
                        [
                            "Send two cards from the S.H.I.E.L.D. Officer Stack ",
                            { keyword: 60 },
                            "."
                        ],
                        [
                            "Then you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " and ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each 2 ",
                            { keyword: 61, text: "S.H.I.E.L.D. Levels" },
                            " you have."
                        ]
                    ]
                },
            ]
        },
        {
            id: 197,
            name: "Quake",
            team: 2,
            cards: [
                {
                    name: "Going Underground",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/quake_04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    recruit: "3",
                    abilities: [
                        [
                            "To play this, you must discard a ",
                            { team: 2 },
                            " Hero."
                        ],
                        [
                            { hc: 3 },
                            ": You may send the Hero you discarded ",
                            { keyword: 60 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Aftershock",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/quake_03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 61, text: "S.H.I.E.L.D. Level 2" },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Tectonic Wave",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/quake_02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "2+",
                    abilities: [
                        [
                            "Whenever you fight a Villain this turn, if its ",
                            { icon: 1 },
                            " is higher than your ",
                            { keyword: 61 },
                            ", you may send a ",
                            { team: 2 },
                            " Hero from the S.H.I.E.L.D. Officer Stack ",
                            { keyword: 60 },
                            "."
                        ],
                        [
                            { keyword: 61, text: "S.H.I.E.L.D. Level 4" },
                            ": You get ",
                            { bold: "+4" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Roil the Earth",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/quake_01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 7,
                    attack: "0+",
                    abilities: [
                        [
                            "You may send a ",
                            { team: 2 },
                            " Hero from the S.H.I.E.L.D. Officer Stack ",
                            { keyword: 60 },
                            "."
                        ],
                        [
                            "Then, for each ",
                            { keyword: 61 },
                            " you have up to 5, choose a Hero from the HQ. Put all those Heroes on the bottom of the Hero Deck and you get their total printed ",
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
            ]
        },
    ],
    masterminds: [
        {
            id: 65,
            name: "Hydra High Council",
            vp: 6,
            cards: [
                {
                    name: "Red Skull",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hydra-high-council_04.png",
                    tactic: true,
                    vAttack: "7+",
                    abilities: [
                        [
                            "Red Skull gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each two ",
                            { keyword: 62, text: "Hydra Levels" },
                            "."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Hydra Elite"
                        ],
                        [
                            { bold: "Start Game" },
                            ": ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player KOs one of their non-grey Heroes. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": KO one of your grey Heroes. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ]
                    ]
                },
                {
                    name: "Viper",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hydra-high-council_02.png",
                    tactic: true,
                    vAttack: "9+",
                    abilities: [
                        [
                            "Viper gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Hydra Villain in the city."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": If there are any Hydra Villains in the city, each player gains a Wound. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": Discard any number of cards, then draw that many cards. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ]
                    ]
                },
                {
                    name: "Arnim Zola",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hydra-high-council_03.png",
                    tactic: true,
                    vAttack: "6+",
                    abilities: [
                        [
                            "Arnim Zola gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the total printed ",
                            { icon: 1 },
                            " of all heroes in the HQ."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player discards two Heroes with ",
                            { icon: 1 },
                            " icons. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": You may gain a Hero from the HQ with an ",
                            { icon: 1 },
                            " icon. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ]
                    ]
                },
                {
                    name: "Baron Helmut Zemo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hydra-high-council_01.png",
                    tactic: true,
                    vAttack: "16",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "Baron Helmut Zemo gets ",
                            { bold: "-1" },
                            { icon: 1 },
                            " for each Villain in your Victory Pile."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player KOs a Hydra Villain from their Victory Pile or gains a Wound. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": Each other player KOs a Hydra Villain from their Victory Pile or gains a Wound. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ]
                    ]
                },
            ]
        },
        {
            id: 66,
            name: "Hydra Super-Adaptoid",
            vp: 6,
            cards: [
                {
                    name: "Black Widow's Bite",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hydra-super-adaptoid_03.png",
                    tactic: true,
                    vAttack: "8",
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": A.I.M., Hydra Offshoot"
                        ],
                        [
                            { bold: "Start Game" },
                            ": ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player KOs two Bystanders from their Victory Pile or gains a Wound. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": For each of your ",
                            { hc: 1 },
                            " Heroes, rescue a Bystander. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ]
                    ]
                },
                {
                    name: "Captain America's Shield",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hydra-super-adaptoid_02.png",
                    tactic: true,
                    vAttack: "10",
                    abilities: [
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals an ",
                            { hc: 2 },
                            " Hero or discards their hand and draws four cards. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each color of Hero you have ",
                            { italic: "(including grey)" },
                            ". ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ]
                    ]
                },
                {
                    name: "Iron Man's Armor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hydra-super-adaptoid_01.png",
                    tactic: true,
                    vAttack: "12",
                    abilities: [
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals a ",
                            { hc: 5 },
                            " Hero or discards down to 3 cards. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": Count you ",
                            { hc: 5 },
                            " Heroes, then draw that many cards. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ]
                    ]
                },
                {
                    name: "Thor's Hammer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hydra-super-adaptoid_04.png",
                    tactic: true,
                    vAttack: "14",
                    abilities: [
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals a ",
                            { hc: 3 },
                            " Hero or gains a Wound. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": For each of your ",
                            { hc: 4 },
                            " Heroes, KO one of your Heroes. ",
                            { rule: 8, text: "Adapt", keywordStyle: true },
                            "."
                        ]
                    ]
                },
            ]
        },
    ],
    villains: [
        {
            id: 84,
            name: "A.I.M., Hydra Offshoot",
            cards: [
                {
                    name: "Taskmaster",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/aim_01.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put a card from the S.H.I.E.L.D. Officer Stack into the Escape Pile."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player must reveal as many Hero colors ",
                            { italic: "(including grey)" },
                            " as the ",
                            { keyword: 62 },
                            " or gain a Wound."
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
                    name: "Superia",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/aim_02.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put a card from the S.H.I.E.L.D. Officer Stack into the Escape Pile. Then each player reveals a random card from their hand. If the ",
                            { keyword: 62 },
                            " is higher than that card's cost, that player discards that card."
                        ]
                    ]
                },
                {
                    name: "Graviton",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/aim_03.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put a card from the S.H.I.E.L.D. Officer Stack into the Escape Pile.  Then, for each 2 ",
                            { keyword: 62, text: "Hydra Levels" },
                            ", Heroes currently in the HQ cost 1 more to recruit this turn."
                        ]
                    ]
                },
                {
                    name: "Mentallo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/aim_04.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "3+",
                    abilities: [
                        [
                            "Mentallo gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Officer he has."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put a card from the S.H.I.E.L.D. Officer Stack into the Escape Pile.  Then Mentallo vaptures a S.H.I.E.L.D. Officer for each 2 ",
                            { keyword: 62, text: "Hydra Levels" },
                            "."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Gain an Officer captured by Mentallo or send it ",
                            { keyword: 60 },
                            ".  KO the rest."
                        ]
                    ]
                }
            ]
        },
        {
            id: 85,
            name: "Hydra Elite",
            cards: [
                {
                    name: "Growing Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-elite_01.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "0+",
                    abilities: [
                        [
                            "Growing Man gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the Mastermind's ",
                            { keyword: 62 },
                            "."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put a card from the S.H.I.E.L.D. Officer Stack into the Escape Pile."
                        ]
                    ]
                },
                {
                    name: "Crossbones",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-elite_02.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put a card from the S.H.I.E.L.D. Officer Stack into the Escape Pile. Then each player gains a Wound unless that player reveals at least as many ",
                            { team: 2 },
                            " Heroes as the ",
                            { keyword: 62 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Hive",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-elite_03.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put a card form the S.H.I.E.L.D. Officer Stack into the Escape Pile. Then each player reveals their hand and discards a card with cost equal to the ",
                            { keyword: 62 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Gorgon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-elite_04.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put a card from the S.H.I.E.L.D. Officer Stack into the Escape Pile. Then check the ",
                            { keyword: 62 },
                            ".  You can't play Heroes of that cost this turn."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 118,
            name: "S.H.I.E.L.D. vs. HYDRA War",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/114Scheme(23).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 7 Twists. Include either the “Hydra Elite“ or “A.I.M., Hydra Offshoot“ Villain Group, but not both."
                        ],
                        [
                            { bold: "Twist" },
                            ": Each player puts a card from the S.H.I.E.L.D. Officer Stack face up next to the Scheme as a ",
                            { bold: "3" },
                            { icon: 1 },
                            " “Double Agent“ Villain. If any Double Agents were already there, put one into the Escape Pile and put the rest on the bottom of the S.H.I.E.L.D. Officer Stack. You can fight any Double Agent next to the Scheme to gain it or send it ",
                            { keyword: 60 },
                            "."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the ",
                            { keyword: 62 },
                            " is 11."
                        ],
                    ]
                },
            ]
        },
        {
            id: 119,
            name: "Hail Hydra",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/112Scheme(21).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists."
                        ],
                        [
                            { bold: "Twist 1-9" },
                            ": Choose one:"
                        ],
                        [
                            "-Say “I'd never abandon S.H.I.E.L.D.“, and you can't fight this turn."
                        ],
                        [
                            "-Or whisper “Hail Hydra“, you can't recruit this turn, and a Villain captures a Bystander."
                        ],
                        [
                            { bold: "Twist 10" },
                            ": Evil Wins!"
                        ],
                    ]
                },
            ]
        },
        {
            id: 120,
            name: "Hydra Helicarriers Hunt Heroes",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/113Scheme(22).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Add an extra Hero."
                        ],
                        [
                            { bold: "Twist" },
                            ": Stack this Twist next to the Scheme. Then for each Twist stacked there, choose a different Hero Class ",
                            { italic: "(" },
                            { hc: 4 },
                            ",",
                            { hc: 2 },
                            ",",
                            { hc: 1 },
                            ",",
                            { hc: 5 },
                            ",",
                            { hc: 3 },
                            { italic: ")" },
                            ", to a maximum of 5. KO each Hero from the HQ that has any of those Hero Classes."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 18 non-grey Heroes in the KO pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 121,
            name: "Secret Empire of Betrayal",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/115Scheme(24).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists. Randomly pick 5 cards that cost 5 or less from an additional Hero. Shuffle them to form a “Dark Loyalty“ deck."
                        ],
                        [
                            { bold: "Twist" },
                            ": Shuffle this Twist into the Dark Loyalty deck as a “Vicious Betrayal.“ Then reveal the top card of that deck. If it's a Hero, gain it. If it's a Vicious Betrayal, put it next to the Scheme and each other player gains a Wound."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 6 Vicious Betrayals next to the Scheme."
                        ],
                    ]
                },
            ]
        },
    ]
};
