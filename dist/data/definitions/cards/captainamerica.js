"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptainAmerica = void 0;
exports.CaptainAmerica = {
    id: 12,
    heroes: [
        {
            id: 101,
            name: "Agent X-13",
            team: 2,
            cards: [
                {
                    name: "Sniper Squad",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/agent-x-13-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "1",
                    recruit: "1",
                    abilities: [
                        [
                            { team: 2 },
                            { team: 2 },
                            { team: 2 },
                            { team: 2 },
                            ": ",
                            { keyword: 23, text: "Woman Out of Time" }
                        ]
                    ]
                },
                {
                    name: "Paramilitary Ops",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/agent-x-13-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other ",
                            { team: 2 },
                            " Hero you played this turn that costs 1 or more."
                        ]
                    ]
                },
                {
                    name: "Spy Network",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/agent-x-13-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 4,
                    attack: "0+",
                    abilities: [
                        [
                            "Choose one: Gain a S.H.I.E.L.D. Officer, or you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { hc: 1 },
                            ": ",
                            { keyword: 23, text: "Woman Out of Time" }
                        ]
                    ]
                },
                {
                    name: "Mobilize for War",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/agent-x-13-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    abilities: [
                        [
                            "KO up to two ",
                            { team: 2 },
                            " Heroes from your hand and/or discard pile."
                        ],
                        [
                            { keyword: 24 },
                            ": For each card KO'd this way, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 102,
            name: "Captain America (Falcon)",
            team: 1,
            cards: [
                {
                    name: "Aerial Catch",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/falcon-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 2 },
                            ": Rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Winged Salvation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/falcon-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 24 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Flying Shield Block",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/falcon-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        "Once per turn, if a player would gain a Wound, you may reveal this card and rescue a Bystander instead."
                    ]
                },
                {
                    name: "Star-Spangled Hero",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/falcon-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each Hero Class you have."
                        ],
                        [
                            { keyword: 24 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            " for each Hero Class you have."
                        ]
                    ]
                }
            ]
        },
        {
            id: 103,
            name: "Captain America 1941",
            team: 1,
            cards: [
                {
                    name: "Devoted Patriot",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-1941-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    abilities: [
                        "Draw a card.",
                        [
                            { hc: 4 },
                            ": ",
                            { keyword: 23, text: "Man Out of Time" }
                        ]
                    ]
                },
                {
                    name: "Storm the Beachhead",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-1941-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 5,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Hero class you have."
                        ],
                        [
                            { keyword: 23, text: "Man Out of Time" }
                        ]
                    ]
                },
                {
                    name: "Liberate the Prisoners",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-1941-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            { team: 1 },
                            ": Rescue a Bystander."
                        ],
                        [
                            { keyword: 24 },
                            ": ",
                            "Draw a Card."
                        ]
                    ]
                },
                {
                    name: "Punch Evil in the Face",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-1941-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 8,
                    attack: "5",
                    abilities: [
                        [
                            { keyword: 24 },
                            ": ",
                            { keyword: 23, text: "Man Out of Time" }
                        ]
                    ]
                }
            ]
        },
        {
            id: 104,
            name: "Steve Rogers, Director of S.H.I.E.L.D.",
            filterName: "Steve Rogers",
            team: 2,
            cards: [
                {
                    name: "International Strike Force",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/steve-rogers-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each Hero Class you have."
                        ],
                        [
                            { keyword: 24 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Hero Class you have."
                        ]
                    ]
                },
                {
                    name: "Reassign to Civilian Duty",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/steve-rogers-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 5,
                    attack: "2",
                    abilities: [
                        [
                            { team: 2 },
                            { team: 2 },
                            { team: 2 },
                            ": You may KO a ",
                            { team: 2 },
                            " Hero that you played this turn. If you do, rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Shadow of Wars Past",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/steve-rogers-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 24 },
                            ": ",
                            { keyword: 23, text: "Man Out of Time" }
                        ]
                    ]
                },
                {
                    name: "Save the World",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/steve-rogers-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 8,
                    attack: "4+",
                    abilities: [
                        "Rescue a Bystander.",
                        [
                            { keyword: 24 },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 105,
            name: "Winter Soldier",
            team: 0,
            cards: [
                {
                    name: "Bionic Arm",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/winter-soldier-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 5 },
                            ": ",
                            { keyword: 23, text: "Man Out of Time" }
                        ]
                    ]
                },
                {
                    name: "Sniper Nest",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/winter-soldier-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    recruit: "1",
                    abilities: [
                        "Draw a card.",
                        [
                            { hc: 5 },
                            ": ",
                            { keyword: 23, text: "Man Out of Time" }
                        ]
                    ]
                },
                {
                    name: "KGB Training",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/winter-soldier-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            "If you played at least 7 other cards this turn you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "2>4",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/winter-soldier-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 7,
                    attack: "4",
                    abilities: [
                        [
                            "A Hero in your hand gains ",
                            { keyword: 23, text: "Man Out of Time" },
                            " this turn."
                        ],
                        [
                            { hc: 5 },
                            ": Another Hero in your hand gains ",
                            { keyword: 23, text: "Man Out of Time" },
                            " this turn."
                        ]
                    ]
                }
            ]
        }
    ],
    masterminds: [
        {
            id: 29,
            name: "Arnim Zola",
            vAttack: "6",
            vp: 6,
            cards: [
                {
                    name: "Arnim Zola",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arnim-zola-01.png",
                    vAttack: "6+",
                    abilities: [
                        [
                            { keyword: 25, text: "Ultimate Abomination" }
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Zola's Creations"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": For each Hero in the HQ that has less than 2 printed ",
                            { icon: 1 },
                            ", put that Hero on the bottom of the Hero Deck, and each player discards a card of that Hero's cost."
                        ]
                    ]
                },
                {
                    name: "Dominate the Weak",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arnim-zola-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": The player of your choice gains a Hero from the HQ that has less than 2 printed ",
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Computer-Uploaded Genius",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arnim-zola-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals a ",
                            { hc: 5 },
                            " Hero or discards a card.",
                        ]
                    ]
                },
                {
                    name: "Pet Projects",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arnim-zola-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals a Zola's Creations Villain from their Victory Pile or gains a Wound.",
                        ]
                    ]
                },
                {
                    name: "Crush Pacifist Resistance",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arnim-zola-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": KO up to two of your Heroes that have less than 2 printed ",
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 30,
            name: "Baron Heinrich Zemo",
            tacticName: "Baron Zemo",
            vAttack: "9",
            vp: 6,
            cards: [
                {
                    name: "Baron Heinrich Zemo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-zemo-01.png",
                    vAttack: "9+",
                    abilities: [
                        [
                            "Whenever you fight a Villain, you may use 2",
                            { icon: 2 },
                            " to rescue a Bystander. Baron Zemo gets ",
                            { bold: "+9" },
                            { icon: 1 },
                            " unless you are a ",
                            { keyword: 24 },
                            "."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Masters of Evil (WWII)"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player KOs a Bystander from their Victory Pile. Any player who cannot do so gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Fallen Idols",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-zemo-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player that is not a ",
                            { keyword: 24 },
                            " discards a card."
                        ]
                    ]
                },
                {
                    name: "Finding Zemo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-zemo-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Reveal the top five cards of the Villain Deck. If you revealed any Bystanders, KO them and each other player gains a Wound. Put the rest back in random order.",
                        ]
                    ]
                },
                {
                    name: "Hatred for the Avengers",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-zemo-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": For each of your ",
                            { team: 1 },
                            " Heroes, rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Prisoners of War",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-zemo-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals an ",
                            { team: 1 },
                            " Hero or chooses a Bystander from their Victory Pile, and you rescue that Bystander."
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 40,
            name: "Zola's Creations",
            cards: [
                {
                    name: "Captain Zolandia",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/zolas-creations-01.png",
                    qtd: 2,
                    vAttack: "6+",
                    vp: "5",
                    abilities: [
                        { keyword: 25 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each Hero Class you have."
                        ]
                    ]
                },
                {
                    name: "Doughboy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/zolas-creations-04.png",
                    qtd: 2,
                    vAttack: "4+",
                    vp: "3",
                    abilities: [
                        { keyword: 25 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes."
                        ]
                    ]
                },
                {
                    name: "Man-Fish",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/zolas-creations-03.png",
                    qtd: 2,
                    vAttack: "5+",
                    vp: "4",
                    abilities: [
                        { keyword: 25 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": If you fought Man-Fish in the Sewers or Bridge, then each other player gains a Wound."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Primus",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/zolas-creations-02.png",
                    qtd: 2,
                    vAttack: "3",
                    vp: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "To fight Primus, you must also discard a card that costs 2, 3, 5, or 7."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": each player discards a Hero that costs 2, 3, 5, or 7."
                        ]
                    ]
                }
            ]
        },
        {
            id: 41,
            name: "Masters of Evil (WWII)",
            cards: [
                {
                    name: "Black Knight",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/masters-of-evil-03-1.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Black Knight captures a Bystander."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 24 },
                            ": KO one of your Heroes."
                        ]
                    ]
                },
                {
                    name: "Executioner",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/masters-of-evil-04-1.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Executioner captures a Bystander."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 24 },
                            ": Draw a card."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": KO a Bystander from each player's Victory Pile."
                        ]
                    ]
                },
                {
                    name: "Melter (WWII)",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/masters-of-evil-01-2.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Melter captures a Bystander."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 24 },
                            ": Each player reveals the top card of their deck. For each card, you choose to KO it or put it back."
                        ]
                    ]
                },
                {
                    name: "Radioactive Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/masters-of-evil-02-1.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Radioactive Man captures a Bystander."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player who is not a ",
                            { keyword: 24 },
                            " gains a Wound."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Same effect."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 56,
            name: "Brainwash the Military",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/59Scheme(78).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 7 Twists. Add 12 S.H.I.E.L.D. Officers to the Villain Deck."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": S.H.I.E.L.D. Officers in the Villain Deck are Villains. Their ",
                            { icon: 1 },
                            " is 3 plus the number of Twists stacked next to this Scheme. When you defeat a S.H.I.E.L.D. Officer, gain it as a Hero."
                        ],
                        [
                            { bold: "Twist 1-6" },
                            ": Stack this Twists next to the Scheme as a “Traitor Battalion.“ Play another card from the Villain Deck."
                        ],
                        [
                            { bold: "Twist 7" },
                            ": All S.H.I.E.L.D. Officers in the city escape."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 5 S.H.I.E.L.D. Officers escape."
                        ],
                    ]
                },
            ]
        },
        {
            id: 57,
            name: "Change the Outcome of WWII",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/58Scheme(77).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 7 Twists. Add an extra Villain Group."
                        ],
                        [
                            { bold: "Twist" },
                            ": The Axis invades a new country. Put all Villains and Bystanders from the city on the bottom of the Villain Deck. The number of city spaces changes. Play 2 cards from the Villain Deck. If any Villains escape this country, stack a Twist next to the scheme as a “conquered capital.“"
                        ],
                        [
                            { bold: "Twist 1" },
                            ": Poland: 4 spaces."
                        ],
                        [
                            { bold: "Twist 2" },
                            ": France: 3 spaces."
                        ],
                        [
                            { bold: "Twist 3" },
                            ": USSR: 6 spaces."
                        ],
                        [
                            { bold: "Twist 4" },
                            ": England: 3 spaces."
                        ],
                        [
                            { bold: "Twist 5" },
                            ": USA: 5 spaces."
                        ],
                        [
                            { bold: "Twist 6" },
                            ": Australia: 2 spaces."
                        ],
                        [
                            { bold: "Twist 7" },
                            ": Switzerland: 1 space."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 3 capitals are conquered."
                        ],
                    ]
                },
            ]
        },
        {
            id: 58,
            name: "Go Back in Time to Slay Heroes' Ancestors",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/57Scheme(76).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 9 Twists. 8 Heroes in Hero deck."
                        ],
                        [
                            { bold: "Twist" },
                            ": Put a Hero form the HQ next to the Scheme, “Purged from the Timestream.“"
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Whenever a Hero is in the HQ whose Hero Name has been Purged from the Timestream, KO that Hero."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the Hero Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 59,
            name: "Unbreakable Enigma Code, The",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/56Scheme(12).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 6 Twists."
                        ],
                        [
                            { bold: "Twists 1-5" },
                            ": Put a card from the Hero Deck face down next to the scheme as part of the “Enigma Code.“ Mix up those cards face-down."
                        ],
                        [
                            { bold: "Twist 6" },
                            ": Evil Wins!"
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Whenever you fight a Villain, you may pay ",
                            { bold: "1" },
                            { icon: 2 },
                            " to look at one of the face-down Enigma Cards. When you fight the Mastermind, first guess the color of each Enigma card, and then reveal them. If you guessed them right, fight the Mastermind as normal. If not, your turn ends, and mix up the Enigma cards face-down."
                        ],
                    ]
                },
            ]
        },
    ]
};
