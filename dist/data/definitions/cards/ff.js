"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FantasticFour = void 0;
exports.FantasticFour = {
    id: 4,
    heroes: [
        {
            id: 33,
            name: "Human Torch",
            team: 5,
            cards: [
                {
                    name: "Call for Backup",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/human-torch-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2+",
                    abilities: [
                        [
                            "You may KO a Wound from your hand or discard pile. If you do, you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Hothead",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/human-torch-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    attack: "4",
                    abilities: [
                        [
                            "You gain a Wound."
                        ]
                    ]
                },
                {
                    name: "Flame On!",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/human-torch-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 6,
                    attack: "4+",
                    abilities: [
                        [
                            { keyword: 4, text: "Focus 6" },
                            { icon: 2 },
                            "  ",
                            { icon: 5 },
                            " You get ",
                            { bold: "+4 " },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Nova Flame",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/human-torch-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    attack: "6+",
                    abilities: [
                        [
                            { team: 5 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each city space that contains a Villain."
                        ]
                    ]
                }
            ]
        },
        {
            id: 34,
            name: "Invisible Woman",
            team: 5,
            cards: [
                {
                    name: "Disappearing Act",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/invisible-woman-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 4, text: "Focus 2" },
                            { icon: 2 },
                            "  ",
                            { icon: 5 },
                            " You may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Four of a Kind",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/invisible-woman-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            "If you played any other cards that cost 4 ",
                            { icon: 3 },
                            " this turn, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Unseen Rescue",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/invisible-woman-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 4, text: "Focus 2" },
                            { icon: 2 },
                            "  ",
                            { icon: 5 },
                            " Rescue a Bystander. You may only use this ability up to four times this turn.",
                        ]
                    ]
                },
                {
                    name: "Invisible Barrier",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/invisible-woman-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        [
                            "If an ambush effect would occur, you may reveal this card and draw two cards instead."
                        ]
                    ]
                }
            ]
        },
        {
            id: 35,
            name: "Mr. Fantastic",
            team: 5,
            cards: [
                {
                    name: "Twisting Equations",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mr-fantastic-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 4, text: "Focus 2" },
                            { icon: 2 },
                            "  ",
                            { icon: 5 },
                            " When you draw a new hand of cards at the end of this turn, draw an extra card."
                        ]
                    ]
                },
                {
                    name: "Unstable Molecules",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mr-fantastic-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 5,
                    abilities: [
                        "Draw two cards."
                    ]
                },
                {
                    name: "One Gigantic Hand",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mr-fantastic-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 5,
                    attack: "1+",
                    abilities: [
                        [
                            { team: 5 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each card in your hand."
                        ]
                    ]
                },
                {
                    name: "Ultimate Nullifier",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/mr-fantastic-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    abilities: [
                        [
                            "If an Enemy you fight this turn would have a fight effect, you may cancel that effect instead."
                        ],
                        [
                            { keyword: 4, text: "Focus 1" },
                            { icon: 2 },
                            "  ",
                            { icon: 5 },
                            " You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " usable only against the Mastermind."
                        ]
                    ]
                }
            ]
        },
        {
            id: 36,
            name: "Silver Surfer",
            team: 0,
            cards: [
                {
                    name: "Warp Speed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/silver-surfer-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 4, text: "Focus 2" },
                            { icon: 2 },
                            "  ",
                            { icon: 5 },
                            " Draw a card."
                        ]
                    ]
                },
                {
                    name: "Epic Destiny",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/silver-surfer-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 4, text: "Focus 6" },
                            { icon: 2 },
                            "  ",
                            { icon: 5 },
                            " Defeat a Villain of ",
                            { bold: "5 " },
                            { icon: 1 },
                            " or ",
                            { bold: "6 " },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "The Power Cosmic",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/silver-surfer-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 6,
                    attack: "0+",
                    recruit: "3",
                    abilities: [
                        [
                            { keyword: 4, text: "Focus 9" },
                            { icon: 2 },
                            "  ",
                            { icon: 5 },
                            " You get ",
                            { bold: "+9 " },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Energy Surge",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/silver-surfer-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            "Double the ",
                            { icon: 2 },
                            " you have."
                        ]
                    ]
                }
            ]
        },
        {
            id: 37,
            name: "Thing",
            team: 5,
            cards: [
                {
                    name: "It Started on Yancy Street",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thing-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2+",
                    abilities: [
                        [
                            { team: 5 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Knuckle Sandwich",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thing-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 5,
                    recruit: "3",
                    attack: "0+",
                    abilities: [
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
                    name: "Crime Stopper",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thing-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        "Whenever you defeat a Villain in the Bank this turn, rescue a Bystander.",
                        [
                            { keyword: 4, text: "Focus 1" },
                            { icon: 2 },
                            "  ",
                            { icon: 5 },
                            " Move a Villain to an adjacent city space. If another Villain is already there, swap them."
                        ]
                    ]
                },
                {
                    name: "It's Clobberin' Time!",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thing-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "5+",
                    abilities: [
                        [
                            { hc: 4 },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "for each other ",
                            { hc: 4 },
                            "card you played this turn."
                        ]
                    ]
                }
            ]
        }
    ],
    masterminds: [
        {
            id: 10,
            name: "Galactus",
            vAttack: "20",
            vp: 7,
            cards: [
                {
                    name: "Galactus",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/galactus-01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 6 },
                            ": ",
                            { hc: 4 },
                            { hc: 2 },
                            { hc: 1 },
                            { hc: 5 },
                            { hc: 3 },
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Heralds of Galactus"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Destroy the city space closest to Galactus. Any Villain there escapes. Put this Master Strike there."
                        ],
                        [
                            { bold: "Galactus Wins" },
                            ": When the city is destroyed."
                        ]
                    ]
                },
                {
                    name: "Cosmic Entity",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/galactus-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose ",
                            { hc: 4 },
                            ", ",
                            { hc: 2 },
                            ", ",
                            { hc: 1 },
                            ", ",
                            { hc: 5 },
                            " or ",
                            { hc: 3 },
                            ". Each player reveals any number of cards of that class, then draws that many cards."
                        ]
                    ]
                },
                {
                    name: "Force of Eternity",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/galactus-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": When you draw a new hand of cards at the end of this turn, draw six extra cards, then discard six cards."
                        ]
                    ]
                },
                {
                    name: "Panicked Mobs",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/galactus-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose ",
                            { hc: 4 },
                            ", ",
                            { hc: 2 },
                            ", ",
                            { hc: 1 },
                            ", ",
                            { hc: 5 },
                            " or ",
                            { hc: 3 },
                            ". Each player reveals any number of cards of that class, then rescues that many Bystanders."
                        ]
                    ]
                },
                {
                    name: "Sunder the Earth",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/galactus-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player KOs all Heroes from their discard pile with the same card name as a Hero in the HQ."
                        ]
                    ]
                }
            ]
        },
        {
            id: 11,
            name: "Mole Man",
            vAttack: "7",
            vp: 6,
            cards: [
                {
                    name: "Mole Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mole-man-01.png",
                    vAttack: "7+",
                    abilities: [
                        [
                            "Mole Man gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Subterranea Villain that has escaped."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Subterranea"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": All Subterranea Villains in the city escape. If any Villains escaped this way, each player gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Dig to Freedom",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mole-man-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player chooses a Subterranea Villain in their Victory Pile and puts it into the Escaped Villains pile."
                        ]
                    ]
                },
                {
                    name: "Master of Monsters",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mole-man-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": If this is not the final Tactic, reveal the top six cards of the Villain Deck. Play all the Subterranea Villains you revealed. Put the rest on the bottom of the Villain Deck in random order."
                        ]
                    ]
                },
                {
                    name: "Secret Tunnel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mole-man-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+6" },
                            { icon: 1 },
                            " usable only against Villains in the Streets."
                        ]
                    ]
                },
                {
                    name: "Underground Riches",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mole-man-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+6" },
                            { icon: 2 },
                            " usable only to recruit Heroes in the HQ space under the Streets."
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 14,
            name: "Heralds of Galactus",
            cards: [
                {
                    name: "Firelord",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/heralds-of-galactus-02.png",
                    qtd: 2,
                    vAttack: "9",
                    vp: "4",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 6 },
                            ": ",
                            { hc: 3 },
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player reveals a ",
                            { hc: 3 },
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
                    name: "Morg",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/heralds-of-galactus-01.png",
                    qtd: 2,
                    vAttack: "12",
                    vp: "6",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 6 },
                            ": ",
                            { hc: 2 },
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put each non-",
                            { hc: 2 },
                            " Hero from the HQ on the bottom of the Hero Deck."
                        ]
                    ]
                },
                {
                    name: "Stardust",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/heralds-of-galactus-04.png",
                    qtd: 2,
                    vAttack: "10",
                    vp: "5",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 6 },
                            ": ",
                            { hc: 1 },
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Choose one of your ",
                            { hc: 1 },
                            " Heroes. When you draw a new hand of cards at the end of this turn, add that Hero to your hand as a seventh card."
                        ]
                    ]
                },
                {
                    name: "Terrax the Tamer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/heralds-of-galactus-03.png",
                    qtd: 2,
                    vAttack: "11",
                    vp: "5",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 6 },
                            ": ",
                            { hc: 4 },
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": For each ",
                            { hc: 4 },
                            " Hero in the HQ, Terrax captures a Bystander."
                        ]
                    ]
                }
            ]
        },
        {
            id: 15,
            name: "Subterranea",
            cards: [
                {
                    name: "Giganto",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/subterranea-01.png",
                    qtd: 2,
                    vAttack: "7",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": When you draw a new hand of cards at the end of this turn, draw two extra cards."
                        ],
                        [
                            { keyword: 5 }
                        ]
                    ]
                },
                {
                    name: "Megataur",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/subterranea-03.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Megataur captures two Bystanders."
                        ],
                        [
                            { keyword: 5 }
                        ]
                    ]
                },
                {
                    name: "Moloids",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/subterranea-02.png",
                    qtd: 2,
                    vAttack: "3",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes."
                        ],
                        [
                            { keyword: 5 }
                        ]
                    ]
                },
                {
                    name: "Ra'ktar the Molan King",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/subterranea-04.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Any Villain in the Streets moves to the Bridge, pushing any Villain already there to escape."
                        ],
                        [
                            { keyword: 5 }
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 17,
            name: "Bathe the Earth in Cosmic Rays",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/17Scheme(48).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 6 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Each player in turn does the following: Reveal your hand. KO one of your non-grey Heroes. Choose a Hero from the HQ with the same or lower cost and put it into your hand."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the number of non-grey Heroes in the KO pile is six times the number of players."
                        ],
                    ]
                },
            ]
        },
        {
            id: 18,
            name: "Flood the Planet with Melted Glaciers",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/18Scheme(49).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Stack the Twist next to the Scheme as “Rising Waters.“ Then KO each Hero from the HQ whose cost is less than or equal to the number of Rising Waters in that stack."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 20 non-grey Heroes are KO'd."
                        ],
                    ]
                },
            ]
        },
        {
            id: 19,
            name: "Invincible Force Field",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/19Scheme(50).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 7 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Stack this Twist next to the Mastermind as a “Force Field.“"
                        ],
                        [
                            { bold: "Special Rules" },
                            ": To fight the Mastermind, you must also spend ",
                            { bold: "1" },
                            { icon: 2 },
                            " or ",
                            { bold: "1" },
                            { icon: 1 },
                            " for each Force Field next to them."
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
            id: 20,
            name: "Pull Reality Into the Negative Zone",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/20Scheme(51).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists."
                        ],
                        [
                            { bold: "Twist 2, 4, and 6" },
                            ": Until the next Twist, Enemies cost ",
                            { icon: 2 },
                            " to fight and Heroes cost ",
                            { icon: 1 },
                            " to recruit."
                        ],
                        [
                            { bold: "Twist 7" },
                            ": Evil Wins!"
                        ],
                    ]
                },
            ]
        },
    ]
};
