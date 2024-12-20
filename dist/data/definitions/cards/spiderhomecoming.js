"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiderManHomecoming = void 0;
exports.SpiderManHomecoming = {
    id: 17,
    heroes: [
        {
            id: 147,
            name: "Happy Hogan",
            team: 0,
            cards: [
                {
                    name: "Head of Security",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/happy-hogan-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        { keyword: 43 },
                        "KO all Wounds you gained this turn."
                    ]
                },
                {
                    name: "Watchful Eye",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/happy-hogan-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 2 },
                            ": ",
                            { keyword: 41, text: "Danger Sense 2" },
                            ". If this revealed any Master Strikes, KO those Strikes, then you may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Loyal Friend",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/happy-hogan-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 5,
                    attack: "0+",
                    abilities: [
                        { keyword: 43 },
                        { keyword: 42 }
                    ]
                },
                {
                    name: "Asset Management",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/happy-hogan-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 5,
                    attack: "0+",
                    abilities: [
                        { keyword: 42, text: "Double Striker" }
                    ]
                }
            ]
        },
        {
            id: 148,
            name: "High Tech Spider-Man",
            team: 3,
            cards: [
                {
                    name: "Advanced Targeting System",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ht-spiderman_03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    abilities: [
                        "Reveal the top card of your deck. If it costs 2 or less, draw it.",
                        [
                            { hc: 1 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Recon Drone Connection",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ht-spiderman_04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        { keyword: 7 },
                        { keyword: 41, text: "Danger Sense 3" }
                    ]
                },
                {
                    name: "Spider-Grip",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ht-spiderman_02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 2,
                    attack: "2",
                    abilities: [
                        { keyword: 7 },
                        [
                            { hc: 5 },
                            ": Choose two Villains in adjacent city spaces. Each of them gets ",
                            { bold: "-1" },
                            { icon: 1 },
                            " this turn."
                        ]
                    ]
                },
                {
                    name: "Friendly Neighborhood...",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ht-spiderman_01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        { keyword: 7 },
                        { keyword: 43 },
                        [
                            "You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            ", usable only against the Mastermind or Villains on the Rooftops or Streets."
                        ]
                    ]
                }
            ]
        },
        {
            id: 149,
            name: "Peter Parker, Homecoming",
            team: 3,
            cards: [
                {
                    name: "Avenger in Training",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peter-parker-hc-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 2,
                    attack: "2+",
                    abilities: [
                        { keyword: 7 },
                        [
                            { hc: 2 },
                            ": ",
                            { keyword: 41, text: "Danger Sense 1" },
                            ". If this revealed a Villain, you may fight it."
                        ]
                    ]
                },
                {
                    name: "Heightened Senses",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peter-parker-hc-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        { keyword: 41, text: "Danger Sense 2" },
                        "Reveal the top card of your deck. If it costs 2 or less, draw it."
                    ]
                },
                {
                    name: "Homemade Web-Shooters",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peter-parker-hc-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 2,
                    attack: "2+",
                    abilities: [
                        { keyword: 7 },
                        [
                            { hc: 5 },
                            ": ",
                            { keyword: 41, text: "Danger Sense 1" },
                            ". If this revealed a Bystander, rescue it."
                        ]
                    ]
                },
                {
                    name: "Something is Happening",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peter-parker-hc-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        { keyword: 7 },
                        { keyword: 43 },
                        [
                            { keyword: 41, text: "Danger Sense 4" },
                            ". If this revealed any Scheme Twists, you may shuffle the Villain Deck."
                        ]
                    ]
                }
            ]
        },
        {
            id: 150,
            name: "Peter's Allies",
            team: 3,
            cards: [
                {
                    name: "Ned",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peters-allies-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    recruit: "1+",
                    abilities: [
                        { keyword: 43 },
                        [
                            { hc: 1 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Michelle",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peters-allies-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "You may choose a Villain or Mastermind. You can fight it using only ",
                            { icon: 2 },
                            " this turn."
                        ]
                    ]
                },
                {
                    name: "Liz",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peters-allies-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 6,
                    recruit: "4",
                    abilities: [
                        [
                            "Whenever you ",
                            { keyword: 43 },
                            " a card to another player, you may reveal this to draw two cards instead of one."
                        ]
                    ]
                },
                {
                    name: "May Parker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peters-allies-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    recruit: "5",
                    abilities: [
                        { keyword: 43 },
                        [
                            { team: 3 },
                            ": Each Villain gets ",
                            { bold: "-2" },
                            { icon: 1 },
                            " this turn. The next time you fight the Mastermind this turn, it gets ",
                            { bold: "-2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 151,
            name: "Tony Stark",
            team: 1,
            cards: [
                {
                    name: "Genius, Billionaire...",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/tony-stark-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    recruit: "1",
                    attack: "1",
                    abilities: [
                        { keyword: 43 }
                    ]
                },
                {
                    name: "Stay Out of Trouble",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/tony-stark-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        { keyword: 43 },
                        [
                            { hc: 5 },
                            ": ",
                            { keyword: 41, text: "Danger Sense 2" }
                        ]
                    ]
                },
                {
                    name: "Little Grey Area",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/tony-stark-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            { team: 1 },
                            ": ",
                            { keyword: 41, text: "Danger Sense 1" },
                            ". If this revealed a Villain, then Villains from that same Villain Group get ",
                            { bold: "-1" },
                            { icon: 1 },
                            " this turn."
                        ]
                    ]
                },
                {
                    name: "As Usual, I Did All the Work",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/tony-stark-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        { keyword: 43 },
                        [
                            "If another player accepts this ",
                            { keyword: 43 },
                            ", then at the end of this turn, move all cards that entered that player's Victory Pile this turn into your Victory Pile."
                        ]
                    ]
                }
            ]
        },
    ],
    masterminds: [
        {
            id: 46,
            name: "Adrian Toomes",
            vAttack: "5",
            vp: 6,
            cards: [
                {
                    name: "Adrian Toomes",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/adrian-toomes-01.png",
                    vAttack: "5+",
                    abilities: [
                        [
                            { keyword: 42, text: "Double Striker" }
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Salvagers"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Starting from the Sewers, each Villain in the city uses its “Escape“ ability."
                        ]
                    ]
                },
                {
                    name: "Epic Adrian Toomes",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/adrian-toomes-02.png",
                    vAttack: "5+",
                    epic: true,
                    abilities: [
                        [
                            { keyword: 42, text: "Triple Striker" }
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Salvagers"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Starting from the Sewers, each Villain in the city uses its “Ambush“ ability, then its “Escape“ ability."
                        ]
                    ]
                },
                {
                    name: "Don't Interfere",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/adrian-toomes-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 41, text: "Danger Sense 4" },
                            ". If this revealed any Bystanders, rescue them."
                        ]
                    ]
                },
                {
                    name: "More Harm than Good",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/adrian-toomes-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player discards a ",
                            { team: 3 },
                            " Hero or gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Take Everything",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/adrian-toomes-06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You may put a card from your discard pile on top of your deck."
                        ]
                    ]
                },
                {
                    name: "The World's Changed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/adrian-toomes-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 41, text: "Danger Sense 3" },
                            ". Put all Henchmen Villains revealed this way into your Victory Pile, then do their “Fight“ abilities."
                        ]
                    ]
                }
            ]
        },
        {
            id: 47,
            name: "Vulture",
            vAttack: "8",
            vp: 6,
            cards: [
                {
                    name: "Vulture",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/vulture-01.png",
                    vAttack: "8+",
                    abilities: [
                        [
                            { keyword: 42 }
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Vulture Tech"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Put a Wound from the Wound Stack below each HQ space as a “Winged Assault.“ Whenever a player gains or KOs a Hero from the HQ, the player on their right gains one of the Wounds below that HQ space."
                        ]
                    ]
                },
                {
                    name: "Epic Vulture",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/vulture-02.png",
                    vAttack: "10+",
                    epic: true,
                    abilities: [
                        [
                            { keyword: 42 }
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Vulture Tech"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Put a Wound from the Wound Stack or KO pile below each HQ space as a “Winged Assault.“ Whenever a player gains or KOs a Hero from the HQ, the player on their right gains one of the Wounds below that HQ space, putting it on top of their deck."
                        ]
                    ]
                },
                {
                    name: "Bird of Prey",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/vulture-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player discards a ",
                            { team: 3 },
                            " Hero or discards two cards."
                        ]
                    ]
                },
                {
                    name: "Lurking Shadow",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/vulture-06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 41, text: "Danger Sense 2" },
                            ". If the Rooftops are empty, a Villain you revealed enters the Rooftops."
                        ]
                    ]
                },
                {
                    name: "Mid Air Heist",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/vulture-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+5" },
                            { icon: 2 },
                            " usable only to recruit ",
                            { hc: 5 },
                            " Heroes."
                        ]
                    ]
                },
                {
                    name: "Winged Assault",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/vulture-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Put two “Winged Assault“ Wounds from under the HQ into each other player's discard pile."
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 60,
            name: "Salvagers",
            cards: [
                {
                    name: "Hybrid Alien Tech",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/salvagers-04.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "4+",
                    abilities: [
                        { keyword: 42 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your 0-cost Heroes."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": The current player reveals a ",
                            { hc: 3 },
                            " Hero or gains a 0-cost Hero from the KO pile."
                        ]
                    ]
                },
                {
                    name: "Shocker #1",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/salvagers-03.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "3+",
                    abilities: [
                        { keyword: 42 },
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player reveals an ",
                            { hc: 2 },
                            " Hero or discards a card."
                        ]
                    ]
                },
                {
                    name: "Shocker #2",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/salvagers-02.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player reveals their hand and discards all cards with the same card name as a card in the HQ."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": ",
                            { italic: "(After the normal HQ KO for this escaping)" },
                            " Same effect."
                        ]
                    ]
                },
                {
                    name: "Tinkerer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/salvagers-01.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "4",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each ",
                            { hc: 5 },
                            " Hero in the HQ."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player reveals a ",
                            { hc: 5 },
                            " Hero or gains a Wound."
                        ]
                    ]
                }
            ]
        },
        {
            id: 61,
            name: "Vulture Tech",
            cards: [
                {
                    name: "Chitauri Weapon Assault",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/vulture-tech-03.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "4+",
                    abilities: [
                        { keyword: 42 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes with a ",
                            { icon: 2 },
                            " icon."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player discards a card with a ",
                            { icon: 2 },
                            " icon."
                        ]
                    ]
                },
                {
                    name: "High Tech Helmet",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/vulture-tech-02.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "3+",
                    abilities: [
                        { keyword: 42 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 41, text: "Danger Sense 3" }
                        ]
                    ]
                },
                {
                    name: "Razor Talons",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/vulture-tech-01.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "2+",
                    abilities: [
                        { keyword: 42 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": The next Hero you gain this turn has ",
                            { keyword: 7 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Turbine Powered",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/vulture-tech-04.png",
                    qtd: 2,
                    vp: "5",
                    vAttack: "5+",
                    abilities: [
                        { keyword: 42 },
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Turbine Powered captures a Bystander. Then move this Villain to the Rooftops. If there's already a Villain there, swap them."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 84,
            name: "Distract the Hero",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-distract-the-hero.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Use at least 1",
                            { team: 3 },
                            " Hero."
                        ],
                        [
                            { bold: "Twist" },
                            ": If you get any Victory Points this turn, put this Twist on the bottom of the Villain Deck. Otherwise, stack this Twist next to the Scheme as a “Villainous Interruption.“"
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there have been 5 Villainous Interruptions."
                        ],
                    ]
                },
            ]
        },
        {
            id: 85,
            name: "Explosion at the Washington Monument",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-explosion-at-the-washington-monument.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Shuffle 18 Bystanders and 14 Wounds, then deal them evenly into eight decks. Put these decks in a row, as Floors of the Washington Monument."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Whenever you fight a Villain, you may reveal any face-down card from any Floor. If it's a Bystander, rescue it. If it's a Wound, put it back face-up."
                        ],
                        [
                            { bold: "Twist" },
                            ": KO the topmost Floor of the Washington Monument. You gain one of the Wounds KO'd this way."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 10 Bystanders are in the KO pile and/or Escape Pile, or all Floors are KO'd."
                        ],
                    ]
                },
            ]
        },
        {
            id: 86,
            name: "Ferry Disaster",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-ferry-disaster.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 9 Twists. Put the Bystander Stack above the Sewers as the “Ferry.“"
                        ],
                        [
                            { bold: "Twist 1-4" },
                            ": If there's a Villain in the city space below the Ferry, KO 2 Bystanders from the Ferry. Whether you KO'd or not, the Ferry moves one space left."
                        ],
                        [
                            { bold: "Twist 5-8" },
                            ": Same effect, but it moves right."
                        ],
                        [
                            { bold: "Twist 9" },
                            ": KO half the Bystanders from the Bystander deck, rounding up."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 7 Bystanders are in the KO pile and/or Escape Pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 87,
            name: "Scavenge Alien Weaponry",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-scavenge-alien-weaponry.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 7 Twists. Add an extra Henchmen Group of 10 cards as “Smugglers.“"
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Smugglers have ",
                            { keyword: 42 },
                            "."
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
    ],
    bystanders: [
        {
            id: 32,
            name: "Damage Control",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/scheme-damage-control.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, reveal the top two cards of your deck. Put any that cost 2 or less into your hand. Put the rest back in any order."
                        ]
                    ]
                }
            ]
        },
    ],
};
