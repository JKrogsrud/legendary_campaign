"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldWarHulk = void 0;
exports.WorldWarHulk = {
    id: 19,
    heroes: [
        {
            id: 157,
            name: "Amadeus Cho",
            team: 18,
            cards: [
                {
                    name: "Extrapolate",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/amadeus-cho-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 2,
                    recruit: "1",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Gamma-Draining Nanites",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/amadeus-cho-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    abilities: [
                        [
                            "Draw a card."
                        ],
                        [
                            "Then, if you drew two cards this turn, ",
                            { keyword: 45 },
                            " this into Like Totally Smart Hulk."
                        ]
                    ]
                },
                {
                    name: "Like Totally Smart Hulk",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/amadeus-cho-01a.png",
                    subtitle: "Amadeus Cho, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 1,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Renegade Genius",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/amadeus-cho-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 6,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each different cost of Hero you have."
                        ],
                        [
                            { keyword: 46 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Visualize the Variables",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/amadeus-cho-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 8,
                    attack: "4",
                    abilities: [
                        [
                            "Whenever you use an ",
                            { keyword: 46 },
                            " ability this turn, you may use it an extra time. "
                        ],
                        [
                            { keyword: 46 },
                            ": Look at the top card of your deck. KO it or put it back."
                        ]
                    ]
                }
            ]
        },
        {
            id: 158,
            name: "Bruce Banner",
            filterName: "Bruce Banner (WWH)",
            team: 1,
            cards: [
                {
                    name: "Solve the Impossible",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bruce-banner-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    attack: "1",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": When you draw a new hand of cards at the end of this turn, draw an extra card."
                        ]
                    ]
                },
                {
                    name: "Gamma Bomb Disaster",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bruce-banner-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": ",
                            { keyword: 45 },
                            " this into Savage Hulk Unleashed."
                        ]
                    ]
                },
                {
                    name: "Savage Hulk Unleashed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bruce-banner-01a.png",
                    subtitle: "Bruce Banner, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 1,
                    cost: 5,
                    attack: "0+",
                    abilities: [
                        [
                            {
                                keyword: 47,
                                text: "Smash 4"
                            }
                        ]
                    ]
                },
                {
                    name: "Dangerous Testing",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bruce-banner-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            { hc: 5 },
                            ": Reveal the top card of your deck. If it costs 0, KO it."
                        ]
                    ]
                },
                {
                    name: "Gamma Ray Experiment",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bruce-banner-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 7,
                    attack: "4",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": Look at the top three cards of your deck. Draw one of them, KO one, and put one back."
                        ]
                    ]
                }
            ]
        },
        {
            id: 159,
            name: "Caiera",
            team: 19,
            cards: [
                {
                    name: "Shadow Queen",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/caiera-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    attack: "1",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Shadowforged Blade",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/caiera-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 1 },
                            ": ",
                            {
                                keyword: 47,
                                text: "Smash 2"
                            }
                        ]
                    ]
                },
                {
                    name: "Focus The Old Power",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/caiera-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": You may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Dutiful Protector",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/caiera-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            "Double the ",
                            { icon: 2 },
                            " you have."
                        ],
                        [
                            "If there are at least 3 Heroes per player in the KO pile, ",
                            { keyword: 45 },
                            " this into Vengeful Destructor."
                        ]
                    ]
                },
                {
                    name: "Vengeful Destructor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/caiera-01a.png",
                    subtitle: "Caiera, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            "Double the ",
                            { icon: 1 },
                            " you have."
                        ]
                    ]
                }
            ]
        },
        {
            id: 160,
            name: "Gladiator Hulk",
            team: 19,
            cards: [
                {
                    name: "Don't Make Me Angry",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gladiator-hulk-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    abilities: [
                        [
                            "Draw a card."
                        ],
                        [
                            {
                                keyword: 47,
                                text: "Smash 2"
                            }
                        ]
                    ]
                },
                {
                    name: "Seize The Throne",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gladiator-hulk-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "0+",
                    abilities: [
                        [
                            {
                                keyword: 47,
                                text: "Smash 3"
                            }
                        ],
                        [
                            "Then, if you discarded at least two cards this turn, ",
                            { keyword: 45 },
                            " this into Hulk Is King and put it on top of your deck."
                        ]
                    ]
                },
                {
                    name: "Hulk Is King",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gladiator-hulk-01a.png",
                    subtitle: "Gladiator Hulk, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 1,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        [
                            "When a card effect causes you to discard this card, you may return this card to your hand."
                        ]
                    ]
                },
                {
                    name: "The Green Scar",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gladiator-hulk-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            { hc: 4 },
                            ": ",
                            {
                                keyword: 17,
                                text: "Cross-Dimensional Hulk Rampage."
                            }
                        ],
                        [
                            "If any players gained a Wound this way, you get ",
                            { keyword: 48 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Double-Fisted Smashing",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gladiator-hulk-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "0+",
                    abilities: [
                        [
                            "You get double",
                            { icon: 1 },
                            " from each Smash this turn."
                        ],
                        [
                            {
                                keyword: 47,
                                text: "Smash 3"
                            }
                        ]
                    ]
                }
            ]
        },
        {
            id: 161,
            name: "Hiroim",
            team: 19,
            cards: [
                {
                    name: "Seek Redemption",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hiroim-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 1 },
                            ": The first time you defeat a Villain this turn, rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Save from the Rubble",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hiroim-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    recruit: "1",
                    abilities: [
                        [
                            "Draw a card.",
                        ],
                        [
                            "If there are at least 2 Bystanders in your Victory Pile, ",
                            { keyword: 45 },
                            " this into Hiroim Redeemed."
                        ]
                    ]
                },
                {
                    name: "Hiroim Redeemed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hiroim-01a.png",
                    subtitle: "Hiroim, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 1,
                    cost: 5,
                    attack: "1+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "for every two Bystanders in your Victory Pile."
                        ]
                    ]
                },
                {
                    name: "Mystic Shadow Priest",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hiroim-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "2",
                    abilities: [
                        [
                            { team: 19 },
                            ": You may KO a 0-cost card from any player's discard pile. If you KO a Wound this way, rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Blade of the People",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hiroim-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            "Choose one: Rescue three Bystanders, or defeat any Villain or Mastermind whose ",
                            { icon: 1 },
                            " is less than the number of Bystanders in your Victory Pile."
                        ]
                    ]
                }
            ]
        },
        {
            id: 162,
            name: "Hulkbuster Iron Man",
            team: 1,
            cards: [
                {
                    name: "Pound for Pound",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulkbuster-iron-man-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        [
                            "Draw a card."
                        ],
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
                    name: "Attune Techtonic Transducer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulkbuster-iron-man-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": ",
                            {
                                keyword: 47,
                                text: "Smash 2"
                            }
                        ]
                    ]
                },
                {
                    name: "Build the Suit",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulkbuster-iron-man-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 5,
                    recruit: "3",
                    abilities: [
                        [
                            { hc: 5 },
                            { hc: 4 },
                            ": ",
                            { keyword: 45 },
                            " this into Ultra-Massive Armor."
                        ]
                    ]
                },
                {
                    name: "Ultra-Massive Armor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulkbuster-iron-man-01a.png",
                    subtitle: "Hulkbuster Iron Man, transformed",
                    transformed: true,
                    hc: 5,
                    rarity: 2,
                    cost: 6,
                    attack: "0+",
                    abilities: [
                        [
                            "Draw two cards."
                        ],
                        [
                            {
                                keyword: 47,
                                text: "Smash 2"
                            }
                        ]
                    ]
                },
                {
                    name: "Final Battle",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulkbuster-iron-man-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 8,
                    attack: "5+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each other ",
                            { hc: 5 },
                            " and/or ",
                            { hc: 4 },
                            " card you played this turn.",
                        ]
                    ]
                }
            ]
        },
        {
            id: 163,
            name: "Joe Fixit, Grey Hulk",
            team: 8,
            cards: [
                {
                    name: "Carefully Considered Smashing",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/grey-hulk-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    attack: "0+",
                    abilities: [
                        [
                            { hc: 4 },
                            ": ",
                            {
                                keyword: 47,
                                text: "Smash 2"
                            }
                        ]
                    ]
                },
                {
                    name: "Threaten And Bribe",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/grey-hulk-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            "Choose a Villain. You can spend any combination of",
                            { icon: 2 },
                            "and",
                            { icon: 1 },
                            "to fight it this turn."
                        ]
                    ]
                },
                {
                    name: "Ambitious Enforcer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/grey-hulk-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            "When you defeat a Villain this turn that has ",
                            { bold: "6" },
                            { icon: 1 },
                            " or more, ",
                            { keyword: 45 },
                            " this into Underworld Boss and put it on top of your deck."
                        ]
                    ]
                },
                {
                    name: "Underworld Boss",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/grey-hulk-01a.png",
                    subtitle: "Joe Fixit, Grey Hulk, transformed",
                    transformed: true,
                    hc: 2,
                    rarity: 2,
                    cost: 6,
                    attack: "0+",
                    abilities: [
                        [
                            "Choose a Villain in your Victory Pile, You get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to it's printed VP."
                        ]
                    ]
                },
                {
                    name: "Hulk Runs This Town",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/grey-hulk-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    recruit: "4",
                    abilities: [
                        [
                            "You can spend any combination of",
                            { icon: 2 },
                            "and",
                            { icon: 1 },
                            "to fight the Mastermind this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 164,
            name: "Korg",
            team: 19,
            cards: [
                {
                    name: "Nothing Beats Rock",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/korg-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        [
                            "Draw a card."
                        ],
                        [
                            { hc: 4 },
                            ": ",
                            {
                                keyword: 47,
                                text: "Smash 2"
                            },
                            ". If you ",
                            { keyword: 47 },
                            " a Wound this way, KO it."
                        ]
                    ]
                },
                {
                    name: "Move Mountains",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/korg-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Forged by Fire",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/korg-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 4 },
                            { hc: 4 },
                            ": ",
                            { keyword: 45 },
                            " this into Lord of Granite."
                        ]
                    ]
                },
                {
                    name: "Lord of Granite",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/korg-01a.png",
                    subtitle: "Korg, transformed",
                    transformed: true,
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "0+",
                    abilities: [
                        [
                            "Draw a card."
                        ],
                        [
                            {
                                keyword: 47,
                                text: "Smash 3"
                            }
                        ]
                    ]
                },
                {
                    name: "Kronan Tactician",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/korg-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "0+",
                    abilities: [
                        [
                            "Put all cards from the HQ on the bottom of the Hero Deck in random order. You get their total printed",
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 165,
            name: "Miek, The Unhived",
            team: 19,
            cards: [
                {
                    name: "This Bug Smashes You",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/miek-the-unhived-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            {
                                keyword: 47,
                                text: "Smash 1"
                            }
                        ]
                    ]
                },
                {
                    name: "Devouring Frenzy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/miek-the-unhived-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            "Look at the top card of your deck. Put it back on the top or bottom."
                        ],
                        [
                            { hc: 2 },
                            ": You may ",
                            { keyword: 8 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Endless Appetite",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/miek-the-unhived-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        [
                            "Whenever a card is KO'd from your deck this turn, you may draw a card."
                        ]
                    ]
                },
                {
                    name: "Metamorphosis",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/miek-the-unhived-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    recruit: "5",
                    abilities: [
                        [
                            "You may ",
                            { keyword: 8 },
                            ". Then, if a card with an",
                            { icon: 1 },
                            " icon was KO'd from your deck this turn, ",
                            { keyword: 45 },
                            " this into Hive King Miek."
                        ]
                    ]
                },
                {
                    name: "Hive King Miek",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/miek-the-unhived-01a.png",
                    subtitle: "Miek, The Unhived, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "6",
                    abilities: [
                        [
                            "Look at the top three cards of your deck and put them back in any order. Then you may ",
                            { keyword: 8 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 166,
            name: "Namora",
            team: 18,
            cards: [
                {
                    name: "Crushing Tsunami",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/namora-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    abilities: [
                        [
                            "Draw a card."
                        ],
                        [
                            { hc: 3 },
                            ": ",
                            {
                                keyword: 47,
                                text: "Smash 3"
                            }
                        ]
                    ]
                },
                {
                    name: "Heart of the Ocean",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/namora-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            ", usable only against Villains in the Sewers or Bridge or the Mastermind."
                        ]
                    ]
                },
                {
                    name: "Herculean Effort",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/namora-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 5,
                    recruit: "3",
                    abilities: [
                        [
                            "When you defeat a Villain in the Sewers or Bridge, ",
                            { keyword: 45 },
                            " this into Master of Depths and put it on top of your deck."
                        ]
                    ]
                },
                {
                    name: "Master of Depths",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/namora-01a.png",
                    subtitle: "Namora, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "0+",
                    abilities: [
                        [
                            {
                                keyword: 47,
                                text: "Smash 3"
                            }
                        ],
                        [
                            "If you ",
                            { keyword: 47 },
                            " a 0-cost Hero this way, KO it."
                        ]
                    ]
                },
                {
                    name: "Turning The Tide",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/namora-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        [
                            { hc: 1 },
                            ": If the Bridge is empty, you may move a Villain there from another city space. A Villain moved this way gets",
                            { bold: " -3" },
                            { icon: 1 },
                            " this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 167,
            name: "No-Name, Brood Queen",
            team: 19,
            cards: [
                {
                    name: "Surprise Attack",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/brood-queen-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    attack: "1",
                    abilities: [
                        [
                            "If this is the first card you played this turn, draw a card."
                        ]
                    ]
                },
                {
                    name: "Appetite for Destruction",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/brood-queen-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            "Look at the top card of your deck. Discard it or put it back."
                        ],
                        [
                            { hc: 1 },
                            ": You may ",
                            { keyword: 8 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Bursting with Life",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/brood-queen-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "You may ",
                            { keyword: 8 },
                            ". Then, if a non-grey Hero was KO'd from your deck this turn, ",
                            { keyword: 45 },
                            " this into Torrent of Broodlings."
                        ]
                    ]
                },
                {
                    name: "Torrent of Broodlings",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/brood-queen-01a.png",
                    subtitle: "No-Name, Brood Queen, transformed",
                    transformed: true,
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "2",
                    abilities: [
                        [
                            "Draw a card."
                        ]
                    ]
                },
                {
                    name: "World-Spanning Hunger",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/brood-queen-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 8,
                    attack: "4+",
                    abilities: [
                        [
                            "Look at the top card of your deck. Then ",
                            { keyword: 8 },
                            " up to three times. You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each non-grey Hero that was KO'd from your deck this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 168,
            name: "Rick Jones",
            team: 2,
            cards: [
                {
                    name: "Hacktivist",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rick-jones-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 5 },
                            ": Reveal the top card of your deck. If it's a",
                            { team: 2 },
                            ", draw it."
                        ]
                    ]
                },
                {
                    name: "Seek the Nega-Bands",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rick-jones-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            "Reveal the top card of your deck. If it costs 3 or more, ",
                            { keyword: 45 },
                            " this into Captain Marvel."
                        ]
                    ]
                },
                {
                    name: "Captain Marvel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rick-jones-01a.png",
                    subtitle: "Rick Jones, transformed",
                    transformed: true,
                    hc: 3,
                    team: 1,
                    rarity: 1,
                    cost: 5,
                    attack: "2",
                    abilities: [
                        [
                            "Reveal the top card of your deck. If it costs 3 or more, draw it."
                        ]
                    ]
                },
                {
                    name: "Irradiated Blood",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rick-jones-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        [
                            "If you have at least 5 Villains in your Victory Pile, ",
                            { keyword: 45 },
                            " this into A-Bomb and put it on top of your deck."
                        ]
                    ]
                },
                {
                    name: "A-Bomb",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rick-jones-01b.png",
                    subtitle: "Rick Jones, transformed",
                    transformed: true,
                    hc: 4,
                    team: 0,
                    rarity: 2,
                    cost: 6,
                    attack: "0+",
                    abilities: [
                        [
                            {
                                keyword: 47,
                                text: "Smash 5"
                            }
                        ]
                    ]
                },
                {
                    name: "Caught in Kree-Skrull War",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rick-jones-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "4",
                    abilities: [
                        [
                            "If you defeat two Villains this turn, ",
                            { keyword: 45 },
                            " this into The Destiny Force and put it on top of your deck."
                        ]
                    ]
                },
                {
                    name: "The Destiny Force",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rick-jones-01c.png",
                    subtitle: "Rick Jones, transformed",
                    transformed: true,
                    hc: 3,
                    team: 1,
                    rarity: 3,
                    cost: 9,
                    abilities: [
                        [
                            "Count the number of different printed VP values in your Victory Pile. Draw that many cards."
                        ]
                    ]
                }
            ]
        },
        {
            id: 169,
            name: "Sentry",
            team: 1,
            cards: [
                {
                    name: "Agoraphobia",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sentry-03-1.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    abilities: [
                        [
                            { keyword: 45 },
                            " this into Golden Guardian of Good and put it in your discard pile."
                        ]
                    ]
                },
                {
                    name: "Golden Guardian of Good",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sentry-01a-1.png",
                    subtitle: "Sentry, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 1,
                    cost: 6,
                    attack: "0+",
                    abilities: [
                        [
                            "You may ",
                            { keyword: 45 },
                            " this into Agoraphobia and put it in your discard pile. If you do, you get ",
                            { bold: "+4" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Rival Personalities",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sentry-04-1.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "for each card that ",
                            { keyword: 45, text: "Transformed" },
                            " this turn."
                        ]
                    ]
                },
                {
                    name: "Mournful Sentinel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sentry-02-1.png",
                    hc: 3,
                    rarity: 2,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "Reveal the top card of your deck. If it costs 1 or more, ",
                            { keyword: 45 },
                            " this into The Void Unchained and put it on top of your deck."
                        ]
                    ]
                },
                {
                    name: "The Void Unchained",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sentry-01b.png",
                    subtitle: "Sentry, transformed",
                    transformed: true,
                    team: 0,
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        [
                            "Reveal the top card of your deck. If it costs 0, then ",
                            { keyword: 8 },
                            ". Otherwise, ",
                            { keyword: 45 },
                            " this into Mournful Sentinel and put it in your discard pile."
                        ]
                    ]
                },
                {
                    name: "Vast Unstable Power",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/sentry-01-1.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    attack: "0+",
                    abilities: [
                        [
                            "Reveal the top five cards of the Hero Deck, gain their total printed",
                            { icon: 1 },
                            ", and put them on the bottom of that deck. If this card makes ",
                            { bold: "12" },
                            { icon: 1 },
                            " or more, then ",
                            { keyword: 45 },
                            " this card into ",
                            { rule: 3, text: "The Void Mastermind" },
                            " and add it to the game at the start of the next turn with one random Tactic."
                        ]
                    ]
                }
            ]
        },
        {
            id: 170,
            name: "She-Hulk",
            team: 1,
            cards: [
                {
                    name: "Hurl Legal Objections",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/she-hulk-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "Once this turn, if you made at least ",
                            { bold: "6" },
                            { icon: 2 },
                            "this turn, ",
                            { keyword: 45 },
                            " this into Hurl Trucks."
                        ]
                    ]
                },
                {
                    name: "Hurl Trucks",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/she-hulk-01a.png",
                    subtitle: "She-Hulk, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 1,
                    cost: 6,
                    attack: "2+",
                    abilities: [
                        [
                            {
                                keyword: 47,
                                text: "Smash 2"
                            }
                        ],
                        [
                            {
                                keyword: 47,
                                text: "Smash 2"
                            }
                        ]
                    ]
                },
                {
                    name: "Window of Opportunity",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/she-hulk-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 46 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Radioactive Riot",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/she-hulk-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            "Once this turn, if you made at least ",
                            { bold: "6" },
                            { icon: 2 },
                            "this turn, you may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Jade Giantess",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/she-hulk-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    recruit: "4",
                    attack: "0+",
                    abilities: [
                        [
                            "For every ",
                            { bold: "2" },
                            { icon: 2 },
                            "you made this turn, Reveal the top card of the Hero Deck, put it on the bottom of that deck, and you get that card's printed",
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 171,
            name: "Skaar, Son of Hulk",
            team: 1,
            cards: [
                {
                    name: "Anger Management",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skaar-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "1+",
                    abilities: [
                        [
                            { hc: 4 },
                            ": ",
                            {
                                keyword: 47,
                                text: "Smash 3"
                            }
                        ]
                    ]
                },
                {
                    name: "Scarred Past",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skaar-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 2 },
                            ": ",
                            { keyword: 48 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Mood Swings",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skaar-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 5,
                    recruit: "3",
                    abilities: [
                        [
                            { hc: 2 },
                            ": You may gain a Wound. If you do, ",
                            { keyword: 45 },
                            " this into Raging Savage."
                        ]
                    ]
                },
                {
                    name: "Raging Savage",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skaar-01a.png",
                    subtitle: "Skaar, Son of Hulk, transformed",
                    transformed: true,
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "3+",
                    abilities: [
                        [
                            { keyword: 48 }
                        ]
                    ]
                },
                {
                    name: "Planetary-Level Revenge",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/skaar-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "4+",
                    abilities: [
                        [
                            { keyword: 48 }
                        ],
                        [
                            "Then, you may KO any number of Wounds from your hand and/or discard pile, then draw that many cards."
                        ]
                    ]
                }
            ]
        }
    ],
    masterminds: [
        {
            id: 50,
            name: "General “Thunderbolt” Ross",
            tacticName: "Ross/Red Hulk",
            vAttack: "6",
            vp: 6,
            cards: [
                {
                    name: "General “Thunderbolt” Ross",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/general-ross-01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { bold: "Start of Game" },
                            ": Stack 8 Bystanders next to General Ross as “Helicopter“ Villains with ",
                            { bold: "2" },
                            { icon: 1 },
                            ". You can fight them to rescue them as Bystanders. You can't fight General Ross while he has any Helicopters."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Code Red"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": General Ross ",
                            { keyword: 45, text: "Transforms" },
                            ", then ",
                            { keyword: 17, text: "Cross-Dimensional Hulk Rampage" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Red Hulk",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/red-hulk-01a.png",
                    vAttack: "9+",
                    transformed: true,
                    abilities: [
                        { keyword: 48 },
                        [
                            "You can't fight Helicopters, and they don't stop you from fighting Red Hulk."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Red Hulk ",
                            { keyword: 45, text: "Transforms" },
                            ", then stack a random Bystander from each player's Victory Pile next to this as a Helicopter. Each player who didn't have a Bystander gains a Wound instead."
                        ]
                    ]
                },
                {
                    name: "Bust You Down to Private",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/general-ross-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player puts a non-grey Hero from their hand on the bottom of the Hero Deck, then puts a 0-cost Hero from the KO pile into their hand."
                        ],
                        [
                            "This Mastermind ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Call Out the Army",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/general-ross-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Put 3 Bystanders from the Bystander Stack next to this Mastermind as “Helicopters.“"
                        ],
                        [
                            "This Mastermind ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Personal Arsenal",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/general-ross-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": For each Master Strike in the KO pile, put a Bystander from the Bystander Stack next to the Mastermind as a “Helicopter.“"
                        ],
                        [
                            "This Mastermind ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Urban Warfare",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/general-ross-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Put a random Bystander next to the Mastermind as a “Helicopter“ from each of these places: The Bystander Stack, the Escape Pile, each city space, and each other player's Victory Pile."
                        ],
                        [
                            "This Mastermind ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 51,
            name: "Illuminati, Secret Society",
            tacticName: "Illuminati",
            vAttack: "11",
            vp: 7,
            cards: [
                {
                    name: "Illuminati, Secret Society",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/illuminati-01-1.png",
                    vAttack: "11+",
                    abilities: [
                        [
                            "This Mastermind gets ",
                            { bold: "+4" },
                            { icon: 1 },
                            " unless you ",
                            { keyword: 46 },
                            " them."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Illuminati"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals their hand and discards two cards that each cost between 1 and 4. The Illuminati ",
                            { keyword: 45 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Illuminati, Open Warfare",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/illuminati-01a.png",
                    vAttack: "13",
                    transformed: true,
                    abilities: [
                        [
                            "Whenever a card effect causes a player to draw any number of cards, that player must then also discard a card."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals their hand and discards two cards that each cost between 5 and 8. The Illuminati ",
                            { keyword: 45 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Black Bolt's Omni-Shout",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/illuminati-02-1.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand and discards two cards with no rules text."
                        ],
                        [
                            "The Illuminati ",
                            { keyword: 45 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Dr. Strange's Orb of Agamotto",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/illuminati-03-1.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand and discards a ",
                            { hc: 3 },
                            " or ",
                            { hc: 2 },
                            " Hero."
                        ],
                        [
                            "The Illuminati ",
                            { keyword: 45 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Hulkbuster's Hammer Fist",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/illuminati-04-1.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand and KOs a ",
                            { hc: 5 },
                            " or ",
                            { hc: 4 },
                            " Hero from their hand or discard pile."
                        ],
                        [
                            "The Illuminati ",
                            { keyword: 45 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Zom's Manacles of Living Bondage",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/illuminati-05-1.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals a ",
                            { hc: 1 },
                            " Hero or gains a Wound."
                        ],
                        [
                            "The Illuminati ",
                            { keyword: 45 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 52,
            name: "King Hulk, Sakaarson",
            tacticName: "King Hulk",
            vAttack: "9",
            vp: 6,
            cards: [
                {
                    name: "King Hulk, Sakaarson",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/king-hulk-01.png",
                    vAttack: "9+",
                    abilities: [
                        [
                            "King Hulk gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Warbound Villain in the city and in the Escape Pile."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Warbound"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player KO's a Warbound Villain from their Victory Pile or gains a Wound. King Hulk ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "King Hulk, Worldbreaker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/king-hulk-01a.png",
                    vAttack: "10+",
                    transformed: true,
                    abilities: [
                        { keyword: 48 },
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals their hand, then KO's a card from their hand or discard pile that has the same card name as a card in the HQ. King Hulk ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Fury of the Green Scar",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/king-hulk-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand and discards a Hero that isn't grey and isn't ",
                            { hc: 4 },
                            "."
                        ],
                        [
                            "King Hulk ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Oath of the Warbound",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/king-hulk-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": The Villain in the Escape Pile with the highest printed ",
                            { icon: 1 },
                            " enters the Sewers."
                        ],
                        [
                            "King Hulk ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Revenge from the Stars",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/king-hulk-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": After you put this in your Victory Pile, ",
                            { keyword: 17, text: "Cross-Dimensional Hulk Rampage" },
                            "."
                        ],
                        [
                            "King Hulk ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Rule By the Strongest",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/king-hulk-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each of your ",
                            { hc: 4 },
                            " Heroes."
                        ],
                        [
                            "King Hulk ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 53,
            name: "M.O.D.O.K.",
            vAttack: "9",
            vp: 6,
            cards: [
                {
                    name: "M.O.D.O.K.",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/modok-01.png",
                    abilities: [
                        [
                            "All cards' ",
                            { keyword: 46 },
                            " abilities require four different costs instead of three."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Intelligencia"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player who can't ",
                            { keyword: 46 },
                            " M.O.D.O.K. gains a Wound, then M.O.D.O.K. ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "M.O.D.O.K., Network Nightmare",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/modok-01a.png",
                    vAttack: "8",
                    vAttackAsterisk: true,
                    transformed: true,
                    abilities: [
                        [
                            "You can only fight M.O.D.O.K. with ",
                            { icon: 2 },
                            ", not ",
                            { icon: 1 },
                            "."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player who can't ",
                            { keyword: 46 },
                            " M.O.D.O.K. KO's a non-grey Hero from their discard pile. M.O.D.O.K. ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Brain Scramble",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/modok-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player discards their hand, then draws as many cards as they discarded."
                        ],
                        [
                            "M.O.D.O.K. ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Designed Only For...K.O.ING",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/modok-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Reveal the top three cards of your deck. KO one of them, draw one, and discard one."
                        ],
                        [
                            "M.O.D.O.K. ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Don't Get a Big head About It",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/modok-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Draw a card for each Intelligencia Villain in your Victory Pile."
                        ],
                        [
                            "M.O.D.O.K. ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Redundancy Algorithim",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/modok-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand and discards two cards that hand the same cost."
                        ],
                        [
                            "M.O.D.O.K. ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 54,
            name: "Red King, The",
            tacticName: "Red King",
            vAttack: "7",
            vp: 6,
            cards: [
                {
                    name: "The Red King",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/the-red-king-01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "You can't fight the Red King while any Villains are in the city."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Sakaar Imperial Guard"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": The Red King ",
                            { keyword: 45, text: "Transforms" },
                            ", then each player reveals a ",
                            { hc: 5 },
                            " card or gains a Wound."
                        ]
                    ]
                },
                {
                    name: "The Red King, Power Armored",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/the-red-king-01a.png",
                    vAttack: "10",
                    transformed: true,
                    abilities: [
                        [
                            { bold: "Master Strike" },
                            ": The Red King ",
                            { keyword: 45, text: "Transforms" },
                            ", then play another card from the Villain Deck."
                        ]
                    ]
                },
                {
                    name: "Haughty Spite",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/the-red-king-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player without a Red King Tactic in their Victory Pile gains a Wound."
                        ],
                        [
                            "The Red King ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Royal Bodyguard",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/the-red-king-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Reveal cards from the Villain Deck until you reveal a Sakaar Imperial Guard. If you find one, play it. Either way, shuffle all the other revealed cards back into the Villain Deck."
                        ],
                        [
                            "The Red King ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Treasury of Sakaar",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/the-red-king-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each Sakaar Imperial Guard and Red King Tactic in your Victory Pile, including this one."
                        ],
                        [
                            "The Red King ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Vast Armies of Sakaar",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/the-red-king-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": If this is not the final Tactic, reveal the top three cards of the Villain Deck. Play all the Villains you revealed. Put the rest back in random order."
                        ],
                        [
                            "The Red King ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 55,
            name: "Sentry, The",
            tacticName: "Sentry/Void",
            vAttack: "10",
            vp: 6,
            cards: [
                {
                    name: "The Sentry",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/sentry-01.png",
                    abilities: [
                        [
                            { bold: "Start of Game" },
                            ": Shuffle 2 Wounds into each player's deck before drawing starting hands."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Aspects of the Void"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": The Sentry ",
                            { keyword: 45, text: "Transforms" },
                            ", then ",
                            { keyword: 17, text: "Cross-Dimensional Void Rampage" },
                            "."
                        ]
                    ]
                },
                {
                    name: "The Void",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/sentry-01a.png",
                    vAttack: "11+",
                    transformed: true,
                    abilities: [
                        { keyword: 48 },
                        [
                            { bold: "Master Strike" },
                            ": ",
                            { keyword: 8 },
                            " on each player. If this feasts on a player's grey Hero, that player gains a Wound. The Void ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Pacifying Light",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/sentry-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand and discard two cards with ",
                            { icon: 2 },
                            " icons."
                        ],
                        [
                            "This Mastermind ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Power of a Million Exploding Suns",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/sentry-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Put all Heroes from the HQ on the bottom of the Hero Deck. Each other player reveals their hand and discards each card with the same card name as any of those cards."
                        ],
                        [
                            "This Mastermind ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Reflexive Teleportation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/sentry-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose one of your Heroes that costs 5 or less. When you draw a new hand of cards at the end of this turn, add that Hero to your hand as an extra card."
                        ],
                        [
                            "This Mastermind ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Repressed Darkness",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/sentry-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals a ",
                            { hc: 3 },
                            " Hero or plays an Aspects of the Void Villain from their Victory Pile as if playing it from the Villain Deck."
                        ],
                        [
                            "This Mastermind ",
                            { keyword: 45, text: "Transforms" },
                            "."
                        ]
                    ]
                }
            ]
        },
    ],
    henchmen: [
        {
            id: 26,
            name: "Cytoplasm Spikes",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/cytoplasm-spikes.png",
            vAttack: "3",
            vp: 1,
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 8 },
                            ". If Cytoplasm Spikes feasts on a non-grey Hero, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
            ]
        },
        {
            id: 27,
            name: "Death's Heads",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/deaths-heads.png",
            vAttack: "3",
            vp: 1,
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": If you ",
                            { keyword: 46 },
                            " these Death's Heads, KO one of your cards that costs 0."
                        ]
                    ]
                },
            ]
        },
        {
            id: 28,
            name: "Sakaaran Hivelings",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/sakaaran-hivelings.png",
            vAttack: "3",
            vp: 1,
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Look at the top card of your deck. Put it back on the top or bottom. Then ",
                            { keyword: 8 },
                            "."
                        ]
                    ]
                },
            ]
        }
    ],
    villains: [
        {
            id: 64,
            name: "Aspects of the Void",
            cards: [
                {
                    name: "Black Anti-Hurricane",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/aspects-of-the-void-04.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player simultaneously puts a card from their discard pile into the discard pile of the player to their right."
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
                    name: "Demonform",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/aspects-of-the-void-05.png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "7",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 8 },
                            ". If Demonform feasts on a non-grey Hero, gain a Hero from the HQ of that cost or less."
                        ]
                    ]
                },
                {
                    name: "Infini-Tendrils",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/aspects-of-the-void-03.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "4+",
                    abilities: [
                        { keyword: 48 },
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Infini-Tendrils captures a Bystander."
                        ]
                    ]
                },
                {
                    name: "Psychotic Break",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/aspects-of-the-void-01.png",
                    qtd: 1,
                    vp: "2",
                    subType: 1,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Play another card from the Villain Deck."
                        ],
                        [
                            { bold: "By End of Turn" },
                            ": Defeat a Villain."
                        ],
                        [
                            { bold: "Or Suffer" },
                            ": ",
                            { italic: "(After you draw your new hand)" },
                            " Psychotic Break becomes a Master Strike that takes effect immediately."
                        ],
                    ]
                },
                {
                    name: "Shadow Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/aspects-of-the-void-02.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 65,
            name: "Code Red",
            cards: [
                {
                    name: "Caught Red-Handed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/code-red-06.png",
                    qtd: 1,
                    vp: "3",
                    subType: 1,
                    abilities: [
                        [
                            { bold: "By End of Turn" },
                            ": Recruit a ",
                            { hc: 1 },
                            " Hero or recruit any two Heroes."
                        ],
                        [
                            { bold: "Or Suffer" },
                            ": ",
                            { italic: "(After you draw your new hand)" },
                            " Each player reveals a ",
                            { hc: 1 },
                            " Hero or gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Crimson Dynamo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/code-red-04.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "4",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Choose a ",
                            { hc: 1 },
                            " Hero in the HQ. It costs 2 less this turn."
                        ]
                    ]
                },
                {
                    name: "Elektra, Red Blades",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/code-red-05.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": If you played a ",
                            { hc: 1 },
                            " Hero this turn, KO one of your Heroes."
                        ]
                    ]
                },
                {
                    name: "Punisher, Red Dot Sniper",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/code-red-02.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal the top card of your deck. If it costs 0, KO it. If it's ",
                            { hc: 1 },
                            ", draw it."
                        ]
                    ]
                },
                {
                    name: "Red She-Hulk",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/code-red-03.png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "6+",
                    abilities: [
                        { keyword: 48 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player reveals a ",
                            { hc: 1 },
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
                    name: "Thundra",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/code-red-01.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "4+",
                    abilities: [
                        [
                            "Thundra gets ",
                            { bold: "+2" },
                            { icon: 1 },
                            " if there are any number of ",
                            { hc: 1 },
                            " Heroes in the HQ."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Put each non-",
                            { hc: 1 },
                            " Hero from the HQ on the bottom of the Hero Deck."
                        ]
                    ]
                }
            ]
        },
        {
            id: 66,
            name: "Illuminati",
            cards: [
                {
                    name: "Black Bolt",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/illuminati-04.png",
                    qtd: 2,
                    vp: "5",
                    vAttack: "13",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "During your turn, any number of times, you may discard a card that has no rules text to give Black Bolt ",
                            { bold: "-2" },
                            { icon: 1 },
                            " this turn."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player discards a card with no rules text."
                        ]
                    ]
                },
                {
                    name: "Dr. Strange",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/illuminati-01.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player who can't ",
                            { keyword: 46 },
                            " Dr. Strange discards a card."
                        ]
                    ]
                },
                {
                    name: "Dr. Strange, Possessed by Zom",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/illuminati-02.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "5+",
                    abilities: [
                        [
                            "This Villain gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Bystander in the city."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": This Villain captures 3 Bystanders."
                        ]
                    ]
                },
                {
                    name: "Enchain the Hulk",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/illuminati-03.png",
                    qtd: 1,
                    vp: "4",
                    subType: 1,
                    abilities: [
                        [
                            { bold: "By End of Turn" },
                            ": Discard two cards of the same Hero Class or recruit two cards of the same Hero Class. (",
                            { hc: 4 },
                            ", ",
                            { hc: 2 },
                            ", ",
                            { hc: 1 },
                            ", ",
                            { hc: 5 },
                            ", ",
                            { hc: 3 },
                            ", but not grey)"
                        ],
                        [
                            { bold: "Or Suffer" },
                            ": ",
                            { italic: "(After you draw your new hand) " },
                            { keyword: 17, text: "Cross-Dimensional Hulk Rampage" }
                        ]
                    ]
                },
                {
                    name: "Hulkbuster Iron Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/illuminati-05.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "6+",
                    abilities: [
                        [
                            "Hulkbuster Iron Man gets ",
                            { bold: "+3" },
                            { icon: 1 },
                            " unless you ",
                            { keyword: 46 },
                            " him."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": ",
                            { keyword: 17, text: "Cross-Dimensional Illuminati Rampage" }
                        ]
                    ]
                }
            ]
        },
        {
            id: 67,
            name: "Intelligencia",
            cards: [
                {
                    name: "Battle of Wits",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/intelligencia-02.png",
                    qtd: 2,
                    vp: "3",
                    subType: 1,
                    abilities: [
                        [
                            { bold: "By End of Turn" },
                            ": ",
                            { keyword: 46 },
                            " this trap."
                        ],
                        [
                            { bold: "Or Suffer" },
                            ": ",
                            { italic: "(After you draw your new hand)" },
                            " Each player discards down to 4 cards."
                        ]
                    ]
                },
                {
                    name: "Cosmic Hulk Robot",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/intelligencia-01.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "5+",
                    abilities: [
                        { keyword: 48 },
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player who can't ",
                            { keyword: 46 },
                            " Cosmic Hulk Robot gains a Wound."
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
                    name: "Doc Samson",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/intelligencia-04.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "4+",
                    abilities: [
                        [
                            "Doc Samson has ",
                            { bold: "+4" },
                            { icon: 1 },
                            " unless you ",
                            { keyword: 46 },
                            " him."
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
                    name: "The Leader, Gamma Fiend",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/intelligencia-03.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": If you can't ",
                            { keyword: 46 },
                            " the Leader, play the top card of the Villain Deck."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Same effect."
                        ]
                    ]
                }
            ]
        },
        {
            id: 68,
            name: "Sakaar Imperial Guard",
            cards: [
                {
                    name: "Gladiators' Colosseum",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sakaar-imperial-guard-05.png",
                    qtd: 1,
                    vp: "4",
                    subType: 1,
                    abilities: [
                        [
                            { bold: "By End of Turn" },
                            ": Only play cards from a single Team of your choice this turn (e.g. ",
                            { team: 2 },
                            ", ",
                            { team: 1 },
                            ", ",
                            { team: 4 },
                            ", ",
                            { team: 19 },
                            ", etc.)"
                        ],
                        [
                            { bold: "Or Suffer" },
                            ": ",
                            { italic: "(After you draw your new hand)" },
                            " Each player reveals their hand, chooses a Team, and discards all cards that don't belong to that Team."
                        ]
                    ]
                },
                {
                    name: "Great Devil Corker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sakaar-imperial-guard-03.png",
                    qtd: 2,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Look at the top three cards of your deck. Put them back in any order. Then ",
                            { keyword: 8 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Headman Charr",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sakaar-imperial-guard-01.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "2+",
                    abilities: [
                        [
                            "During your turn, Headman Charr gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Villain in your Victory Pile."
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
                    name: "Lieutenant Caiera",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sakaar-imperial-guard-04.png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "7",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": If you ",
                            { keyword: 46 },
                            " Lieutenant Caiera draw two cards."
                        ]
                    ]
                },
                {
                    name: "Primus Vand",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sakaar-imperial-guard-02.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "3+",
                    abilities: [
                        [
                            "Primus Vand gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Villain adjacent to him."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes."
                        ]
                    ]
                }
            ]
        },
        {
            id: 69,
            name: "U-Foes",
            cards: [
                {
                    name: "Ironclad",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/u-foes-03.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player reveals a ",
                            { hc: 4 },
                            " Hero or KO's a Hero that costs 1 or more from their discard pile."
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
                    name: "Vapor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/u-foes-05.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "4",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player reveals a ",
                            { hc: 1 },
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
                    name: "Vector",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/u-foes-02.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "4",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player who reveals an ",
                            { hc: 2 },
                            " Hero draws a card."
                        ]
                    ]
                },
                {
                    name: "Unidentified Flying U-Foes",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/u-foes-04.png",
                    qtd: 1,
                    vp: "3",
                    subType: 1,
                    abilities: [
                        [
                            { bold: "By End of Turn" },
                            ": Discard a ",
                            { hc: 5 },
                            " Hero or discard three cards."
                        ],
                        [
                            { bold: "Or Suffer" },
                            ": Play two extra cards from the Villain Deck next turn."
                        ]
                    ]
                },
                {
                    name: "X-Ray",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/u-foes-01.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player who reveals a ",
                            { hc: 3 },
                            " Hero may KO a card from their discard pile."
                        ]
                    ]
                }
            ]
        },
        {
            id: 70,
            name: "Warbound",
            cards: [
                {
                    name: "Elloe Kaifi",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/warbound-03.png",
                    qtd: 1,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Draw a card. Another player of your choice also draws a card."
                        ]
                    ]
                },
                {
                    name: "Hiroim",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/warbound-05.png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "7",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO a card from the HQ. Each player reveals their hand and KO's a card with that same cost."
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
                    name: "Korg",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/warbound-04.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": KO a Hero from the HQ. Each player reveals their hand and discards a card with that same cost."
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
                    name: "Miek The Unhived",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/warbound-02.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Look at the top two cards of your deck. Put them back on the top and/or bottom. Then ",
                            { keyword: 8 },
                            "."
                        ]
                    ]
                },
                {
                    name: "No-Name, Brood Queen",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/warbound-01.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "4+",
                    abilities: [
                        { keyword: 48 },
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 8 },
                            ". If this feasts on a non-grey Hero, draw two cards."
                        ]
                    ]
                },
                {
                    name: "Warbound Rescue",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/warbound-06.png",
                    qtd: 1,
                    vp: "7",
                    subType: 1,
                    abilities: [
                        [
                            { bold: "By End of Turn" },
                            ": Put a Warbound Villain and Henchman Villain from your Victory Pile back into the city."
                        ],
                        [
                            { bold: "Or Suffer" },
                            ": Each player gains a Wound."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 92,
            name: "Break the Planet Asunder",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/91Scheme(100).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 9 Twists. 7 Heroes."
                        ],
                        [
                            { bold: "Twist" },
                            ": Stack this Twist next to the Scheme as a “Tectonic Break.“ Then KO each Hero from the HQ whose printed ",
                            { icon: 1 },
                            " is less than the number of Tectonic Breaks ",
                            { italic: "(no printed " },
                            { icon: 1 },
                            { italic: " counts as 0)." }
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 25 non-grey Heroes are KO'd."
                        ],
                    ]
                },
            ]
        },
        {
            id: 93,
            name: "Cytoplasm Spike Invasion",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/90Scheme(99).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 10 Twists. Shuffle together 20 Bystanders and 10 Cytoplasm Spike Henchmen as an “Infected Deck.“"
                        ],
                        [
                            { bold: "Twist" },
                            ": Reveal the top three cards of the Infected Deck. KO all Bystanders you revealed. All Spikes you revealed enter the city."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the KO pile and Escape Pile combine to have 18 Bystanders and/or Spikes."
                        ],
                    ]
                },
            ]
        },
        {
            id: 94,
            name: "Fall of the Hulks",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/89Scheme(18).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 10 Twists. 6 Wounds per player in Wound Stack. Use exactly two Heroes with “Hulk“ in their Hero Names."
                        ],
                        [
                            { bold: "Twist 3-6" },
                            ": ",
                            { keyword: 17, text: "Cross-Dimension Hulk Rampage" },
                            "."
                        ],
                        [
                            { bold: "Twist 7-10" },
                            ": Each player gains a Wound."
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
            id: 95,
            name: "Gladiator Pits of Sakaar",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/88Scheme(17).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 6 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Until the start of your next turn, each player can only play cards from a single Team of their choice during their turn. ",
                            { italic: "(e.g. " },
                            { team: 2 },
                            ",",
                            { team: 1 },
                            ",",
                            { team: 4 },
                            ",",
                            { team: 19 },
                            { italic: ", etc.)" }
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 2 Villains per player have escaped or the Villain Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 96,
            name: "Mutating Gamma Rays",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/92Scheme(101).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 7 Twists. Take 14 cards from an extra Hero with “Hulk“ in its Hero Name. Put them in a face-up “Mutation Pile.“"
                        ],
                        [
                            { bold: "Twist 1-6" },
                            ": Each player in turn does the following: Put a non-grey Hero from your hand into the Mutation Pile. Then you may put a different card name with the same cost from the Mutation Pile into your discard pile."
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
            id: 97,
            name: "Shoot Hulk into Space",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/93Scheme(102).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Take 14 cards from an extra Hero with “Hulk“ in its Hero Name. Shuffle them into a “Hulk Deck.“"
                        ],
                        [
                            { bold: "Twist" },
                            ": Put 2 cards from the Hulk Deck into a face-up “Prison Ship“ stack next to the S.H.I.E.L.D. Officer Stack."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": You may recruit the top card of the Prison Ship stack."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 10 cards in the Prison Ship or the Hulk Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 98,
            name: "Subjugate with Obedience Disks",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/94Scheme(103).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Put this Twist under an HQ space as an “Obedience Disk.“ No space can have two more Obedience Disks than any other space."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": To recruit a Hero in the HQ, you must also pay ",
                            { bold: "1" },
                            { icon: 2 },
                            " for each Obedience Disk under it."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When each HQ space has 2 Obedience Disks."
                        ],
                    ]
                },
            ]
        },
        {
            id: 99,
            name: "World War Hulk",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/95Scheme(104).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 9 Twists. Put three additional Masterminds out of play, “Lurking.“ Each of the four Masterminds has two random Tactics."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": When you defeat all of a Mastermind's Tactics, KO its face card and a random Lurking Mastermind enters play."
                        ],
                        [
                            { bold: "Twist 1-8" },
                            ": Swap the current Mastermind with a random Lurking Mastermind."
                        ],
                        [
                            { bold: "Twist 9" },
                            ": Evil Wins!"
                        ],
                    ]
                },
            ]
        },
    ],
    bystanders: [
        {
            id: 33,
            name: "Actor",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/actor.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, choose a Hero in the HQ that costs 4 or less. You get its printed ",
                            { icon: 2 },
                            " and ",
                            { icon: 1 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 34,
            name: "Animal Trainer",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/animal-trainer.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, each ",
                            { hc: 2 },
                            " and/or ",
                            { hc: 1 },
                            " Hero currently in the HQ costs 1 less this turn.",
                        ]
                    ]
                }
            ]
        },
        {
            id: 35,
            name: "Tourist Couple",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/tourist-couple.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " if the Rooftops are empty and ",
                            { bold: "+1" },
                            { icon: 2 },
                            " if the Bridge is empty.",
                        ]
                    ]
                }
            ]
        },
        {
            id: 36,
            name: "Triage Nurse",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/triage-nurse.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, look at the top three cards of your deck. KO one, discard one, and put one back.",
                        ]
                    ]
                }
            ]
        },
    ],
};
