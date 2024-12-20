"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntMan = void 0;
exports.AntMan = {
    id: 21,
    heroes: [
        {
            id: 172,
            name: "Ant-Man",
            filterName: "Ant-Man (AM)",
            team: 1,
            cards: [
                {
                    name: "Ride the Ants",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ant-man-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    costAsterisk: true,
                    attack: "1",
                    abilities: [
                        [
                            { keyword: 26 },
                            " ",
                            { hc: 5 }
                        ],
                        "Draw a card."
                    ]
                },
                {
                    name: "Risky Science",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ant-man-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 5,
                    costAsterisk: true,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 50 },
                            " ",
                            { hc: 5 },
                            { hc: 5 },
                            { hc: 5 }
                        ],
                        [
                            { hc: 5 },
                            ": You may discard a card. If you do, draw a card."
                        ]
                    ]
                },
                {
                    name: "Giant Ego",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ant-man-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    costAsterisk: true,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 26 },
                            " ",
                            { hc: 5 }
                        ],
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each extra card you drew this turn."
                        ]
                    ]
                },
                {
                    name: "Pym Particles",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ant-man-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 9,
                    attack: "5",
                    costAsterisk: true,
                    abilities: [
                        [
                            { keyword: 50 },
                            " ",
                            { hc: 5 },
                            { hc: 5 },
                            { hc: 5 },
                            { hc: 5 },
                            { hc: 5 }
                        ],
                        [
                            "A hero in the HQ with no Size-Changing abilities gain ",
                            { keyword: 26 },
                            " ",
                            { hc: 5 },
                            " this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 173,
            name: "Black Knight",
            team: 1,
            cards: [
                {
                    name: "Amulet of Avalon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-knight-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { keyword: 51 },
                            " by the color of your choice."
                        ]
                    ]
                },
                {
                    name: "Defend the Weak",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-knight-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 4 },
                            ": Return a 0-cost card from your discard pile to your hand."
                        ]
                    ]
                },
                {
                    name: "Flying Steed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-knight-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            "When a Master Strike is played, before it takes effect, you may discard this card. If you do, draw three extra cards at the end of this turn."
                        ]
                    ]
                },
                {
                    name: "The Ebony Blade",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-knight-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the printed ",
                            { icon: 1 },
                            " of a Villain in your Victory Pile. ",
                            { italic: "(Mastermind tactics aren't Villains.)" }
                        ]
                    ]
                }
            ]
        },
        {
            id: 174,
            name: "Jocasta",
            team: 1,
            cards: [
                {
                    name: "Creation of Ultron",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jocasta-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 5 },
                            ": You get ",
                            { keyword: 51 },
                            " by ",
                            { hc: 5 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Reprocess",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jocasta-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    recruit: "2+",
                    abilities: [
                        [
                            "If your discard pile is empty, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            ". Otherwise, shuffle your discard pile into your deck."
                        ]
                    ]
                },
                {
                    name: "Holographic Image Inducer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jocasta-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 6,
                    costAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            " ",
                            { hc: 5 }
                        ],
                        "Draw two cards."
                    ]
                },
                {
                    name: "Electromagnetic Eyebeams",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jocasta-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 7,
                    attack: "5+",
                    abilities: [
                        [
                            "If your discard pile is empty, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            ". Otherwise shuffle your discard pile into your deck."
                        ]
                    ]
                }
            ]
        },
        {
            id: 175,
            name: "Wasp",
            filterName: "Wasp (AM)",
            team: 1,
            cards: [
                {
                    name: "Bio-Electric Sting",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wasp-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    costAsterisk: true,
                    attack: "1+",
                    abilities: [
                        [
                            { keyword: 50 },
                            " ",
                            { hc: 1 },
                            { hc: 1 }
                        ],
                        [
                            { hc: 1 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Tiny Winged Justice",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wasp-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    costAsterisk: true,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 26 },
                            " ",
                            { hc: 1 }
                        ],
                        [
                            { hc: 1 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Swarm Tactics",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wasp-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 6,
                    costAsterisk: true,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 26 },
                            " ",
                            { hc: 1 }
                        ],
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each card you recruited this turn."
                        ]
                    ]
                },
                {
                    name: "Founding Avenger",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wasp-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 9,
                    costAsterisk: true,
                    attack: "4+",
                    abilities: [
                        [
                            { keyword: 50 },
                            " ",
                            { hc: 1 },
                            { hc: 1 },
                            { hc: 1 },
                            { hc: 1 },
                            { hc: 1 }
                        ],
                        [
                            { team: 1 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other ",
                            { team: 1 },
                            " card you played this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 176,
            name: "Wonder Man",
            team: 1,
            cards: [
                {
                    name: "One-Hit Wonder",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wonder-man-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        [
                            "Chose one: Draw a card, or you get ",
                            { keyword: 51 },
                            " by ",
                            { hc: 4 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Ionic Energy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wonder-man-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        "You may put a card from the HQ on the bottom of the Hero Deck.",
                        [
                            { hc: 3 },
                            ": You get ",
                            { keyword: 51 },
                            " by ",
                            { hc: 3 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Absorb Ambient Power",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wonder-man-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 5,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            "Put a card from the HQ on the bottom of the Hero Deck. If that card had a ",
                            { icon: 2 },
                            " icon, you get ",
                            { bold: "+3" },
                            { icon: 2 },
                            ". If that card had an ",
                            { icon: 1 },
                            " icon, you get ",
                            { bold: "+3" },
                            { icon: 1 },
                            ". ",
                            { italic: "(if both, get both.)" }
                        ]
                    ]
                },
                {
                    name: "8th Wonder of the World",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wonder-man-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    costAsterisk: true,
                    attack: "4+",
                    abilities: [
                        [
                            { keyword: 26 },
                            " ",
                            { hc: 4 }
                        ],
                        [
                            "Choose any number of cards from the HQ. Put them on the bottom of the Hero Deck. Then you get ",
                            { keyword: 51 },
                            " by ",
                            { hc: 3 },
                            " and ",
                            { hc: 4 },
                            "."
                        ]
                    ]
                }
            ]
        },
    ],
    masterminds: [
        {
            id: 57,
            name: "Morgan Le Fay",
            vAttack: "7",
            vp: 6,
            cards: [
                {
                    name: "Morgan Le Fay",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/morgan-le-fay-01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 52 },
                        [
                            { bold: "Always Leads" },
                            ": Queen's Vengeance"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player in turn reveals a ",
                            { hc: 1 },
                            " Hero or gains a 0-cost Hero or Wound from the KO pile."
                        ]
                    ]
                },
                {
                    name: "Epic Morgan Le Fay",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/morgan-le-fay-02.png",
                    vAttack: "9",
                    vAttackAsterisk: true,
                    epic: true,
                    abilities: [
                        { keyword: 52 },
                        [
                            { bold: "Always Leads" },
                            ": Queen's Vengeance"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player in turn gains a Wound, then gains a 0-cost Hero from the KO pile."
                        ]
                    ]
                },
                {
                    name: "Reverse the Flow of Time",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/morgan-le-fay-06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": For the rest of the game, players take turns in the opposite order around the table."
                        ]
                    ]
                },
                {
                    name: "Sorcerous Blasts",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/morgan-le-fay-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player discards a ",
                            { hc: 1 },
                            " Hero or gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Stolen Tomes of Merlin",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/morgan-le-fay-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+4" },
                            { icon: 2 },
                            " usable only for recruiting ",
                            { hc: 1 },
                            " and/or ",
                            { hc: 3 },
                            " Heroes."
                        ]
                    ]
                },
                {
                    name: "Transmogrify",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/morgan-le-fay-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player in turn KOs a non-grey Hero from their discard pile, then gains a card from the KO pile that has a lower cost."
                        ]
                    ]
                }
            ]
        },
        {
            id: 58,
            name: "Ultron",
            vAttack: "9",
            vp: 6,
            cards: [
                {
                    name: "Ultron",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ultron-01.png",
                    vAttack: "9+",
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Ultron's Legacy"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals a ",
                            { hc: 5 },
                            " Hero or puts a non-grey Hero from their discard pile into a “Threat Analysis pile“ next to Ultron. Ultron is ",
                            { keyword: 51 },
                            " by each color in his Threat Analysis pile."
                        ]
                    ]
                },
                {
                    name: "Epic Ultron",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ultron-02.png",
                    vAttack: "10+",
                    epic: true,
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Ultron's Legacy"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player puts a non-grey Hero from their hand into a “Threat Analysis pile“ next to Ultron. Ultron is ",
                            { keyword: 51, text: "Triple Empowered" },
                            " by each color in his Threat Analysis pile."
                        ]
                    ]
                },
                {
                    name: "Arrogant Blindspot",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ultron-06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You may gain a Hero from Ultron's Threat Analysis pile."
                        ]
                    ]
                },
                {
                    name: "Paralyzing Encephalo-Ray",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ultron-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand and discards each card that has the same card name as any card in Ultron's Threat Analysis pile."
                        ]
                    ]
                },
                {
                    name: "Predictive Analysis",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ultron-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Put the top three cards of the Hero Deck into Ultron's Threat Analysis pile."
                        ]
                    ]
                },
                {
                    name: "Self-Repairing Legions",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ultron-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player in turn reveals a ",
                            { hc: 5 },
                            " Hero or puts an Ultron's Legacy Villain from the Victory Pile into an empty city space."
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 76,
            name: "Ultron's Legacy",
            cards: [
                {
                    name: "Ultron Roboticks",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ultrons-legacy-08.png",
                    qtd: 1,
                    vp: "2",
                    vAttack: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 50 },
                            " ",
                            { hc: 5 },
                            { hc: 5 },
                            { hc: 5 }
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
                    name: "Original Ultron-1",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ultrons-legacy-07.png",
                    qtd: 1,
                    vp: "2",
                    vAttack: "3+",
                    abilities: [
                        [
                            { keyword: 51 },
                            " by ",
                            { hc: 3 }
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
                    name: "Legions of Ultron",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ultrons-legacy-05.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "4+",
                    abilities: [
                        [
                            { keyword: 51 },
                            " by ",
                            { hc: 5 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Alkhema",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ultrons-legacy-06.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "4+",
                    abilities: [
                        [
                            { keyword: 51 },
                            " by ",
                            { hc: 2 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO a card from your discard pile."
                        ]
                    ]
                },
                {
                    name: "Ultron-Pym",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ultrons-legacy-03.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "6",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 50 },
                            " ",
                            { hc: 5 },
                            { hc: 5 },
                            { hc: 5 },
                            { hc: 5 },
                            { hc: 5 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": A Hero in the HQ with no Size-Changing abilites gains ",
                            { keyword: 26 },
                            " ",
                            { hc: 5 },
                            " this turn."
                        ]
                    ]
                },
                {
                    name: "Future Ultron Prime",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ultrons-legacy-04.png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "5+",
                    abilities: [
                        [
                            { keyword: 51, text: "Double Empowered" },
                            " by ",
                            { hc: 5 }
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put all non-",
                            { hc: 5 },
                            " Heroes from the HQ on the bottom of the Hero Deck."
                        ]
                    ]
                },
                {
                    name: "Brutish Ultron-14",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ultrons-legacy-01.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "5+",
                    abilities: [
                        [
                            { keyword: 51 },
                            " by ",
                            { hc: 4 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player reveals a ",
                            { hc: 4 },
                            " Hero or gains a Wound."
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
                    name: "Crimson Cowl",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ultrons-legacy-02.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "5+",
                    abilities: [
                        [
                            { keyword: 51 },
                            " by ",
                            { hc: 1 }
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Crimson Cowl captures a Bystander."
                        ]
                    ]
                }
            ]
        },
        {
            id: 77,
            name: "Queen's Vengeance",
            cards: [
                {
                    name: "Daystar",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/queens-vengeance-03.png",
                    qtd: 1,
                    vp: "2",
                    vAttack: "5",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 50 },
                            " ",
                            { hc: 3 },
                            { hc: 3 },
                            { hc: 3 },
                            { hc: 3 },
                            { hc: 3 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal the top card of your deck. You may KO it."
                        ]
                    ]
                },
                {
                    name: "Blackbird",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/queens-vengeance-04.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 52 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes."
                        ]
                    ]
                },
                {
                    name: "Gigantus",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/queens-vengeance-02.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "7",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 50 },
                            " ",
                            { hc: 4 },
                            { hc: 4 },
                            { hc: 4 },
                            { hc: 4 },
                            { hc: 4 },
                            { hc: 4 }
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
                    name: "Iron Knight",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/queens-vengeance-01.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "4",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 52 },
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player reveals a ",
                            { hc: 5 },
                            " Hero or gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Yeoman America",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/queens-vengeance-08.png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "5",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 52 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each color of Hero you have ",
                            { italic: "(including grey)" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Star-Knight",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/queens-vengeance-07.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 52 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO a card from your discard pile."
                        ]
                    ]
                },
                {
                    name: "Pixie",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/queens-vengeance-06.png",
                    qtd: 1,
                    vp: "2",
                    vAttack: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 50 },
                            " ",
                            { hc: 1 },
                            { hc: 1 },
                            { hc: 1 },
                            { hc: 1 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal a ",
                            { hc: 1 },
                            " Hero or play another card from the Villain Deck."
                        ]
                    ]
                },
                {
                    name: "Mordred the Evil",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/queens-vengeance-05.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Choose a card in your discard pile. The player to your right gains it."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player simultaneously does that same effect."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 106,
            name: "Age of Ultron",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/96Scheme(5).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists. 4-5 Players: Add another Hero."
                        ],
                        [
                            { bold: "Twist" },
                            ": Put the top card of the Hero Deck next to the Scheme in an “Evolution“ Pile. Then this Twist enters the city as an “Evolved Ultron“ Villain."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Evolved Ultrons have ",
                            { bold: "4" },
                            { icon: 1 },
                            " and are ",
                            { keyword: 51 },
                            " by each color in the Evolution pile. They're worth 6VP."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 7 Evolved Ultrons are in the city and/or Escape Pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 107,
            name: "Pull Earth into Medieval Times",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/97Scheme(6).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 9 Twists."
                        ],
                        [
                            { bold: "Twist 1-6" },
                            ": Until the start of your next turn, all Villains and Mastermind everywhere have ",
                            { keyword: 52 },
                            "."
                        ],
                        [
                            { bold: "Twist 7-9" },
                            ": Each player puts a Villain from the Victory Pile into the Escape Pile."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 3 Villains per player have escaped."
                        ],
                    ]
                },
            ]
        },
        {
            id: 108,
            name: "Transform Commuters into Giant Ants",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/98Scheme(7).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": Twists equal to the number of players plus 6."
                        ],
                        [
                            { bold: "Twist" },
                            ": Stack this Twist next to the Scheme. Then for each Twist in that stack, put a Bystander face down next to the Mastermind as a ",
                            { bold: "2" },
                            { icon: 1 },
                            " “Giant Ant“ Villain. When you fight one, rescue it as a Bystander."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When ther are 10 Giant Ants next to the Mastermind."
                        ],
                    ]
                },
            ]
        },
        {
            id: 109,
            name: "Trap Heroes in the Microverse",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/99Scheme(8).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists. Add all 14 cards for and extra Hero the Villain Deck."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Heroes in the Villain Deck are “Micro-Sized“ Villains with ",
                            { icon: 1 },
                            " equal to their printed cost. They have ",
                            { keyword: 26 },
                            " for their card color and no outher abilites while in the city. When you fight one, choose any player to gain it as a Hero."
                        ],
                        [
                            { bold: "Twist" },
                            ": Play two cards from the Villain Deck."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 3 Villains per player have escaped or the Villain Deck runs out."
                        ],
                    ]
                },
            ]
        },
    ]
};
