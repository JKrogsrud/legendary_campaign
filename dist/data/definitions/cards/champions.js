"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Champions = void 0;
exports.Champions = {
    id: 18,
    heroes: [
        {
            id: 152,
            name: "Gwenpool",
            team: 18,
            cards: [
                {
                    name: "Come On, Nobody Reads Card Names",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gwen_04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        { keyword: 3, text: "Versatile 1" },
                        [
                            { hc: 1 },
                            ": Instead, ",
                            { keyword: 3, text: "Versatile 3" },
                            "."
                        ]
                    ]
                },
                {
                    name: "I'll Rescue You If I Feel Like It",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gwen_03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            "Reveal the top card of the Bystander Deck. If it's a Special Bystander, rescue it. Otherwise, put it on the bottom of that deck."
                        ]
                    ]
                },
                {
                    name: "I Heard Keywords Are Powerful",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gwen_02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 6,
                    costAsterisk: true,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 2 }
                        ],
                        [
                            { hc: 2 },
                            ": Draw a card."
                        ],
                        { keyword: 44 }
                    ]
                },
                {
                    name: "I'm the Best at Board Games",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gwen_01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        [
                            { keyword: 9 },
                            " each other player. For each player that discards a card this way, draw a card."
                        ]
                    ]
                }
            ]
        },
        {
            id: 153,
            name: "Ms. Marvel",
            team: 18,
            cards: [
                {
                    name: "Long Arm of the Law",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ms-marvel_04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    costAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 1 }
                        ],
                        "Draw a card.",
                        [
                            { hc: 1 },
                            ": Rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Big Impact",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ms-marvel_03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    costAsterisk: true,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 4 }
                        ],
                        { keyword: 3, text: "Versatile 2" },
                    ]
                },
                {
                    name: "Need to Stretch My Legs",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ms-marvel_02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    costAsterisk: true,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 1 }
                        ],
                        [
                            { team: 18 },
                            ": You may KO a card from your hand or discard pile."
                        ],
                        { keyword: 44 }
                    ]
                },
                {
                    name: "Rising Hope",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ms-marvel_01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 9,
                    costAsterisk: true,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 4 },
                            { bold: ", " },
                            { hc: 1 }
                        ],
                        { keyword: 3, text: "Versatile 4" },
                        { keyword: 44 }
                    ]
                }
            ]
        },
        {
            id: 154,
            name: "Nova",
            filterName: "Nova (Champions)",
            team: 18,
            cards: [
                {
                    name: "Space Cop",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nova-c-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        { keyword: 3, text: "Versatile 1" },
                        [
                            { team: 18 },
                            ": Rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Interstellar Hero",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nova-c-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        { keyword: 3, text: "Versatile 2" },
                        { keyword: 44 }
                    ]
                },
                {
                    name: "Holographic Projection",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nova-c-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 5,
                    attack: "2+",
                    recruit: "0+",
                    abilities: [
                        [
                            { hc: 3 },
                            { bold: ": " },
                            { keyword: 3, text: "Versatile 3" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Growing Nova Force",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nova-c-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 9,
                    costAsterisk: true,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 3 },
                            { bold: ", " },
                            { hc: 4 }
                        ],
                        [
                            "For each other card you played this turn with a ",
                            { icon: 2 },
                            " icon, you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            ". For each other card you played this turn with an ",
                            { icon: 1 },
                            " icon, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 155,
            name: "Totally Awesome Hulk",
            team: 18,
            cards: [
                {
                    name: "Beloved Behemoth",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/awesome_hulk_04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    costAsterisk: true,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 4 }
                        ],
                        [
                            { hc: 4 },
                            ": The first time you defeat a Villain this turn, rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Incredible Mind, Awesome Body",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/awesome_hulk_03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    costAsterisk: true,
                    recruit: "1",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 5 }
                        ],
                        "Draw a card.",
                        { keyword: 44 }
                    ]
                },
                {
                    name: "Growing Pains",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/awesome_hulk_02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    costAsterisk: true,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 4 }
                        ],
                        [
                            "If you have a Wound in your hand or discard pile, KO it and you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            ". Otherwise, gain a Wound."
                        ]
                    ]
                },
                {
                    name: "7th Smartest Man in the World",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/awesome_hulk_01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 9,
                    costAsterisk: true,
                    attack: "5+",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 5 },
                            { bold: ", " },
                            { hc: 4 }
                        ],
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each extra card you drew this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 156,
            name: "Viv Vision",
            team: 18,
            cards: [
                {
                    name: "Walking Wi-Fi",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/viv_04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 5 },
                            ": Whenever you recruit a Hero from the HQ this turn, rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Expanding Neural Network",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/viv_03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    costAsterisk: true,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 5 }
                        ],
                        [
                            { hc: 5 },
                            ": When you draw a new hand of cards at the end of this turn, draw an extra card."
                        ]
                    ]
                },
                {
                    name: "Crowdsourcing",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/viv_02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 6,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        { keyword: 3, text: "Versatile 3" },
                        { keyword: 44 }
                    ]
                },
                {
                    name: "Alter Molecular Density",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/viv_01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 9,
                    costAsterisk: true,
                    recruit: "5",
                    attack: "0+",
                    abilities: [
                        [
                            { keyword: 26 },
                            { bold: ": " },
                            { hc: 5 },
                            { bold: ", " },
                            { hc: 3 }
                        ],
                        [
                            "Whenever you recruit a Hero this turn, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
    ],
    masterminds: [
        {
            id: 48,
            name: "Fin Fang Foom",
            vAttack: "20",
            vp: 7,
            cards: [
                {
                    name: "Fin Fang Foom",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/fin-fang-foom-01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            ": ",
                            { hc: 4 },
                            ",",
                            { hc: 2 },
                            ",",
                            { hc: 1 },
                            ",",
                            { hc: 5 },
                            ",",
                            { hc: 3 }
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Monsters Unleashed"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": ",
                            { keyword: 9 },
                            " each player, then do it again for each Monsters Unleashed Villain in the city and Escape Pile."
                        ]
                    ]
                },
                {
                    name: "Epic Fin Fang Foom",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/fin-fang-foom-02.png",
                    vAttack: "24",
                    epic: true,
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            ": ",
                            { hc: 4 },
                            ",",
                            { hc: 2 },
                            ",",
                            { hc: 1 },
                            ",",
                            { hc: 5 },
                            ",",
                            { hc: 3 }
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Monsters Unleashed"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": ",
                            { keyword: 9 },
                            " each player, then do it again for each Monsters Unleashed Villain in the city and Escape Pile. KO all the Heroes ",
                            { keyword: 9, text: "Demolished" },
                            " this way."
                        ]
                    ]
                },
                {
                    name: "Alien Dragon Technology",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/fin-fang-foom-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": A Hero in the HQ gets ",
                            { keyword: 26 },
                            ": ",
                            { hc: 4 },
                            ",",
                            { hc: 2 },
                            ",",
                            { hc: 1 },
                            ",",
                            { hc: 5 },
                            ",",
                            { hc: 3 },
                            " this turn."
                        ]
                    ]
                },
                {
                    name: "Flammable Acid Breath",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/fin-fang-foom-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": KO the top card of the Hero Deck. Then each other player KOs a Hero of that Hero class from their discard pile (",
                            { hc: 4 },
                            ",",
                            { hc: 2 },
                            ",",
                            { hc: 1 },
                            ",",
                            { hc: 5 },
                            ",",
                            { hc: 3 },
                            ")."
                        ]
                    ]
                },
                {
                    name: "Multipronged Assault",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/fin-fang-foom-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals at least 3 Hero Classes (",
                            { hc: 4 },
                            ",",
                            { hc: 2 },
                            ",",
                            { hc: 1 },
                            ",",
                            { hc: 5 },
                            ",",
                            { hc: 3 },
                            ") or gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Supersonic Dive Attack",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/fin-fang-foom-06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": KO the top card of the Hero Deck. Then each other player reveals their hand and discards a Hero of that Hero Class (",
                            { hc: 4 },
                            ",",
                            { hc: 2 },
                            ",",
                            { hc: 1 },
                            ",",
                            { hc: 5 },
                            ",",
                            { hc: 3 },
                            ")."
                        ]
                    ]
                }
            ]
        },
        {
            id: 49,
            name: "Pagliacci",
            vAttack: "9",
            vp: 6,
            cards: [
                {
                    name: "Pagliacci",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/pagliacci-01.png",
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Wrecking Crew"
                        ],
                        [
                            { bold: "Master Strike 1, 5" },
                            ": This card becomes a Scheme Twist that takes effect immediately."
                        ],
                        [
                            { bold: "Master Strike 2, 3, 4" },
                            ": ",
                            { keyword: 9 },
                            " each player."
                        ]
                    ]
                },
                {
                    name: "Epic Pagliacci",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/pagliacci-02.png",
                    vAttack: "11",
                    epic: true,
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Wrecking Crew"
                        ],
                        [
                            { bold: "Master Strike 1, 3, 5" },
                            ": This card becomes a Scheme Twist that takes effect immediately."
                        ],
                        [
                            { bold: "Master Strike 2, 4" },
                            ": ",
                            { keyword: 9 },
                            " each player."
                        ]
                    ]
                },
                {
                    name: "Commedia Dell'Morte",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/pagliacci-06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player may gain two Wounds. ",
                            { keyword: 9 },
                            " each of those players who does not."
                        ]
                    ]
                },
                {
                    name: "Creative Assassin",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/pagliacci-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { keyword: 3, text: "Versatile 3" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Insane Clown Has a Posse",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/pagliacci-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player may KO a Wrecking Crew Villain from their Victory Pile. ",
                            { keyword: 9 },
                            " each of those players who does not."
                        ]
                    ]
                },
                {
                    name: "Jester of a Twisted Opera",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/pagliacci-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player may KO a card from their discard pile that costs 1 or more. ",
                            { keyword: 9 },
                            " each of those players who does not."
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 62,
            name: "Monsters Unleashed",
            cards: [
                {
                    name: "Goom",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/monsters-unleashed-01.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Goom captures a Bystander."
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
                    name: "Groot from Planet X",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/monsters-unleashed-02.png",
                    qtd: 1,
                    vp: "2",
                    vAttack: "6",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            ": ",
                            { hc: 4 },
                            ", ",
                            { hc: 1 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Two Bystanders from the Bystander Stack enter the city as ",
                            { bold: "3" },
                            { icon: 1 },
                            " “Splintered Half-Groot“ Villains. When you fight one, rescue it as a Bystander."
                        ]
                    ]
                },
                {
                    name: "Monsteroso",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/monsters-unleashed-05.png",
                    qtd: 1,
                    vp: "2",
                    vAttack: "5",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            ": ",
                            { hc: 4 },
                            ", ",
                            { hc: 2 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": When you draw a new hand of cards at the end of this turn, draw an extra card."
                        ]
                    ]
                },
                {
                    name: "Orrgo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/monsters-unleashed-07.png",
                    qtd: 1,
                    vp: "2",
                    vAttack: "2",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "You can't fight Orrgo unless you have already defeated another Villain this turn."
                        ]
                    ]
                },
                {
                    name: "Sporr",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/monsters-unleashed-08.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "7",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            ": ",
                            { hc: 5 },
                            ", ",
                            { hc: 3 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": A Hero in the HQ gains ",
                            { keyword: 26 },
                            ": ",
                            { hc: 5 },
                            ", ",
                            { hc: 3 },
                            " this turn."
                        ]
                    ]
                },
                {
                    name: "Tim Boo Ba",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/monsters-unleashed-04.png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "12",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            ": ",
                            { hc: 4 },
                            ", ",
                            { hc: 2 },
                            ", ",
                            { hc: 1 },
                            ", ",
                            { hc: 5 },
                            ", ",
                            { hc: 3 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": All Heroes currently in the HQ cost 1 less this turn."
                        ]
                    ]
                },
                {
                    name: "Trull the Unhuman",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/monsters-unleashed-06.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "8",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            ": ",
                            { hc: 1 },
                            ", ",
                            { hc: 5 }
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Trull captures a Bystander. Then ",
                            { keyword: 9 },
                            " each player."
                        ]
                    ]
                },
                {
                    name: "Zzutak",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/monsters-unleashed-03.png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "9",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 26 },
                            ": ",
                            { hc: 3 },
                            ", ",
                            { hc: 2 }
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": ",
                            { keyword: 9 },
                            " each player."
                        ]
                    ]
                }
            ]
        },
        {
            id: 63,
            name: "Wrecking Crew",
            cards: [
                {
                    name: "Bulldozer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/wc_01.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Bulldozer moves an extra space forward. If this pushes any Villains forward, ",
                            { keyword: 9 },
                            " each player."
                        ]
                    ]
                },
                {
                    name: "Piledriver",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/wc_03.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": ",
                            { keyword: 9 },
                            " each player."
                        ]
                    ]
                },
                {
                    name: "Thunderball",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/wc_02.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": If you fight Thunderball in the Sewers or Bank, ",
                            { keyword: 9 },
                            " each other player."
                        ]
                    ]
                },
                {
                    name: "The Wrecker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/wc_04.png",
                    qtd: 2,
                    vp: "5",
                    vAttack: "7",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": For each Wrecking Crew Villain in the city ",
                            { italic: "(including this one)" },
                            ", ",
                            { keyword: 9 },
                            " each player."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 88,
            name: "Clash of the Monsters Unleashed",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/86Scheme(3).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 10 Twists. 6 Wounds per player in the Wound Stack. Shuffle 8 Monsters Unleashed Villains into a face-down “Monster Pit“ deck."
                        ],
                        [
                            { bold: "Twist 3-10" },
                            ": Each player chooses a Villain from their Victory Pile as their “Gladiator.“ Then the top card of the Monster Pit enteres the city. Each player whose Gladiator has a lower printed ",
                            { icon: 1 },
                            " than that Monster gains a Wound."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the Wound Stack or Monster Pit Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 89,
            name: "Divide and Conquer",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/85Scheme(2).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ":  8 Twists. 7 Heroes. Sort the Hero Deck by Hero Class: ",
                            { hc: 4 },
                            ",",
                            { hc: 2 },
                            ",",
                            { hc: 1 },
                            ",",
                            { hc: 5 },
                            ",",
                            { hc: 3 },
                            ". ",
                            { italic: "(If a card has multiple Classes, break ties at random.)" },
                            " Put these 5 smaller, shuffled Hero Decks beneath the 5 HQ Spaces."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Whenever an HQ Space is empty, fill it with the top card of the Hero Deck below that space."
                        ],
                        [
                            { bold: "Twist 1-3" },
                            ": KO all Heroes in the HQ."
                        ],
                        [
                            { bold: "Twist 4-8" },
                            ": KO one of the Hero Decks."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When all Hero Decks are gone."
                        ],
                    ]
                },
            ]
        },
        {
            id: 90,
            name: "Hypnotize Every Human",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/84Scheme(1).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Add another Henchman Villain Group. No Bystanders in the Villain Deck."
                        ],
                        [
                            { bold: "Twist 1-6" },
                            ": Put a Bystander from the Bystander Stack above each city space as a facedown ",
                            { bold: "2" },
                            { icon: 1 },
                            " “Hypno-Thrall“ Villain. They don't move. When you fight one, rescue it as a Bystander. You can't fight a Villain in a city space that has any Hypno-Thralls above it."
                        ],
                        [
                            { bold: "Twist 7-8" },
                            ": Each player puts a Villain from their Victory Pile into the Escape pile."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 8 Villains are in the Escape pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 91,
            name: "Steal All Oxygen on Earth",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/87Scheme(4).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. The “Oxygen Level“ starts at 8."
                        ],
                        [
                            { bold: "Twist" },
                            ": Stack this Twist next to the Scheme. The Oxygen Level decreases by 1. Then KO each Hero from the HQ whose cost is greater than the Oxygen Level."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 20 non-grey Heroes are KO'd."
                        ],
                    ]
                },
            ]
        },
    ]
};
