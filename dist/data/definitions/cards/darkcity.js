"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkCity = void 0;
exports.DarkCity = {
    id: 3,
    heroes: [
        {
            id: 16,
            name: "Angel",
            team: 4,
            cards: [
                {
                    name: "Diving Catch",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/angel-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            "When a card effect causes you to discard this card, rescue a Bystander and draw two cards.",
                        ]
                    ]
                },
                {
                    name: "High-Speed Chase",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/angel-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    abilities: [
                        "Draw two cards, then discard a card."
                    ]
                },
                {
                    name: "Drop off a Friend",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/angel-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            "You may discard a card. You get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to that card's ",
                            { icon: 3 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Strength of Spirit",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/angel-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 7,
                    attack: "4",
                    abilities: [
                        [
                            "Discard any number of cards. Draw that many cards."
                        ]
                    ]
                }
            ]
        },
        {
            id: 17,
            name: "Bishop",
            team: 4,
            cards: [
                {
                    name: "Absorb Energies",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bishop-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    recruit: "0+",
                    abilities: [
                        [
                            "Whenever a card you own is KO'd this turn, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Whatever the Cost",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bishop-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 2,
                    abilities: [
                        "Draw a card.",
                        [
                            { hc: 1 },
                            ": You may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Concussive Blast",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bishop-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            { hc: 3 },
                            { hc: 3 },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Firepower from the Future",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bishop-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    abilities: [
                        [
                            "Discard the top four cards of your deck. You get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to those cards' printed ",
                            { icon: 1 },
                            "."
                        ],
                        [
                            { team: 4 },
                            ": KO any number of those cards."
                        ]
                    ]
                }
            ]
        },
        {
            id: 18,
            name: "Blade",
            team: 6,
            cards: [
                {
                    name: "Night Hunter",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/blade-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    recruit: "0+",
                    abilities: [
                        [
                            "Whenever you defeat a Villain in the Sewers or Rooftops this turn, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Stalk the Prey",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/blade-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        "You may move a Villain to an adjacent city space. If another Villain is already there, swap them."
                    ]
                },
                {
                    name: "Nowhere to Hide",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/blade-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            "Whenever you defeat a Villain in the Sewers or Rooftops this turn, draw two cards."
                        ]
                    ]
                },
                {
                    name: "Vampiric Surge",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/blade-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Villain in your Victory Pile."
                        ]
                    ]
                }
            ]
        },
        {
            id: 19,
            name: "Cable",
            team: 7,
            cards: [
                {
                    name: "Disaster Survivalist",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cable-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "When a Master Strike is played, before it takes effect, you may discard this card. If you do, draw three extra cards at the end of this turn."
                        ]
                    ]
                },
                {
                    name: "Strike at the Heart of Evil",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cable-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " only when fighting Masterminds."
                        ]
                    ]
                },
                {
                    name: "Rapid Response Force",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cable-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "3+",
                    abilities: [
                        [
                            { keyword: 1 }
                        ],
                        [
                            { team: 7 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other ",
                            { team: 7 },
                            " Hero you played this turn."
                        ]
                    ]
                },
                {
                    name: "Army of One",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cable-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    attack: "5+",
                    abilities: [
                        [
                            "KO any number of cards from your hand. You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each card KO'd this way."
                        ]
                    ]
                }
            ]
        },
        {
            id: 20,
            name: "Colossus",
            team: 7,
            cards: [
                {
                    name: "Draw Their Fire",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/colossus-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 1,
                    attack: "3",
                    abilities: [
                        [
                            "You gain a Wound."
                        ]
                    ]
                },
                {
                    name: "Invulnerability",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/colossus-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "If you would gain a Wound, you may discard this card instead. If you do, draw two cards."
                        ]
                    ]
                },
                {
                    name: "Silent Statue",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/colossus-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "4+",
                    abilities: [
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
                    name: "Russian Heavy Tank",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/colossus-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "6",
                    abilities: [
                        [
                            "If another player would gain a Wound, you may reveal this card to gain that Wound and draw a card."
                        ]
                    ]
                }
            ]
        },
        {
            id: 21,
            name: "Daredevil",
            filterName: "Daredevil (Dark City)",
            team: 6,
            cards: [
                {
                    name: "Backflip",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "When you play Backflip, the next Hero you recruit this turn goes on top of your deck."
                        ]
                    ]
                },
                {
                    name: "Radar Sense",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            "Choose a number, then reveal the top card of your deck. If the card is that ",
                            { icon: 3 },
                            ", you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Blind Justice",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        [
                            "Choose a number, then reveal the top card of your deck. If the card is that ",
                            { icon: 3 },
                            ", draw it."
                        ]
                    ]
                },
                {
                    name: "The Man Without Fear",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 8,
                    attack: "7",
                    abilities: [
                        [
                            "Choose a number, then reveal the top card of your deck. If the card is that ",
                            { icon: 3 },
                            ", draw it and repeat this process."
                        ]
                    ]
                }
            ]
        },
        {
            id: 22,
            name: "Domino",
            team: 7,
            cards: [
                {
                    name: "Lucky Break",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/domino-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 1,
                    recruit: "0+",
                    attack: "0+",
                    abilities: [
                        [
                            "Draw a card."
                        ],
                        [
                            { team: 7 },
                            ": ",
                            { keyword: 3, text: "Versatile 1" }
                        ]
                    ]
                },
                {
                    name: "Ready for Anything",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/domino-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            { keyword: 3, text: "Versatile 2" }
                        ]
                    ]
                },
                {
                    name: "Specialized Ammunition",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/domino-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 5,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            "You may discard a card from your hand. If that card had a ",
                            { icon: 2 },
                            " icon, you get ",
                            { bold: "+4" },
                            { icon: 2 },
                            ". If that card had an ",
                            { icon: 1 },
                            " icon, you get ",
                            { bold: "+4" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Against All Odds",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/domino-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            { keyword: 3, text: "Versatile 5" }
                        ],
                        [
                            { team: 7 },
                            ": This card and each other Versatile ability you use for the rest of this turn produces both ",
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
            id: 23,
            name: "Elektra",
            team: 6,
            cards: [
                {
                    name: "First Strike",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/elektra-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 1,
                    attack: "1+",
                    abilities: [
                        [
                            "If this is the first card you played this turn, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Ninjitsu",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/elektra-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 2,
                    recruit: "0+",
                    abilities: [
                        "Draw a card.",
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
                    name: "Sai Blades",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/elektra-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 6,
                    attack: "4+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Hero you played this turn that costs ",
                            { bold: "1" },
                            { icon: 3 },
                            " or ",
                            { bold: "2" },
                            { icon: 3 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Silent Meditation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/elektra-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    recruit: "5+",
                    abilities: [
                        [
                            "When you play Silent Meditation, the next Hero you recruit this turn goes into your hand."
                        ],
                        [
                            { team: 6 },
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
            id: 24,
            name: "Forge",
            team: 7,
            cards: [
                {
                    name: "Dirty Work",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/forge-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 5 },
                            ": Any Villain you fight in the Sewers this turn gets ",
                            { bold: "-2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Reboot",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/forge-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 5 },
                            ": You may discard a card. If you do, draw two cards."
                        ]
                    ]
                },
                {
                    name: "Overdrive",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/forge-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 5,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            { keyword: 3, text: "Versatile 3" }
                        ]
                    ]
                },
                {
                    name: "B.F.G.",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/forge-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        [
                            { hc: 5 },
                            { hc: 5 },
                            ": Defeat the Mastermind once for free."
                        ]
                    ]
                }
            ]
        },
        {
            id: 25,
            name: "Ghost Rider",
            team: 6,
            cards: [
                {
                    name: "Blazing Hellfire",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ghost-rider-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            "You may KO a Villain from your Victory Pile. If you do, you get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Hell on Wheels",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ghost-rider-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    recruit: "2+",
                    abilities: [
                        [
                            { team: 6 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Infernal Chains",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ghost-rider-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 2,
                    abilities: [
                        "Draw a card.",
                        [
                            { hc: 4 },
                            ": Defeat a Villain of ",
                            { bold: "3" },
                            { icon: 1 },
                            " or less for free."
                        ]
                    ]
                },
                {
                    name: "Penance Stare",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ghost-rider-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    attack: "3+",
                    abilities: [
                        [
                            "Each player KOs a Villain from their Victory Pile. You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Villain KO'd this way."
                        ],
                        [
                            { team: 6 },
                            ": Put one of those Villains into your Victory Pile."
                        ]
                    ]
                }
            ]
        },
        {
            id: 26,
            name: "Iceman",
            team: 4,
            cards: [
                {
                    name: "Deep Freeze",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iceman-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 2,
                    recruit: "0+",
                    abilities: [
                        "Draw a card.",
                        [
                            { hc: 3 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each other ",
                            { hc: 3 },
                            " Hero you played this turn."
                        ]
                    ]
                },
                {
                    name: "Ice Slide",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iceman-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 3 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other ",
                            { hc: 3 },
                            " Hero you played this turn."
                        ]
                    ]
                },
                {
                    name: "Frost Spike Armor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iceman-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        [
                            { hc: 3 },
                            ": Draw a card for each ",
                            { hc: 3 },
                            " Hero you played this turn."
                        ]
                    ]
                },
                {
                    name: "Impenetrable Ice Wall",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iceman-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    attack: "7",
                    abilities: [
                        [
                            "If a Villain, Master Strike, or Mastermind Tactic would cause you to gain any Wounds or discard any cards, you may reveal this card instead."
                        ]
                    ]
                }
            ]
        },
        {
            id: 27,
            name: "Iron Fist",
            team: 6,
            cards: [
                {
                    name: "Focus Chi",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-fist-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each Hero with a different ",
                            { icon: 3 },
                            " you have."
                        ]
                    ]
                },
                {
                    name: "Wield the Iron Fist",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-fist-03.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Hero with a different ",
                            { icon: 3 },
                            " you have."
                        ]
                    ]
                },
                {
                    name: "Ancient Legacy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-fist-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 1,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        "Draw a card.",
                        [
                            { hc: 4 },
                            { hc: 4 },
                            ": ",
                            { keyword: 3, text: "Versatile 2" }
                        ]
                    ]
                },
                {
                    name: "Living Weapon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-fist-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 9,
                    attack: "8",
                    abilities: [
                        [
                            "Reveal cards from your deck until you have revealed two cards with the same ",
                            { icon: 3 },
                            ". Draw all the cards you revealed."
                        ]
                    ]
                }
            ]
        },
        {
            id: 28,
            name: "Jean Grey",
            team: 4,
            cards: [
                {
                    name: "Psychic Search",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jean-grey-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { team: 4 },
                            ": Rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Read Your Thoughts",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jean-grey-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 5,
                    recruit: "3+",
                    abilities: [
                        [
                            "Whenever you rescue a Bystander this turn, you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Mind Over Matter",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jean-grey-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        "Whenever you rescue a Bystander this turn, draw a card."
                    ]
                },
                {
                    name: "Telekinetic Mastery",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jean-grey-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 7,
                    attack: "5+",
                    abilities: [
                        [
                            "Whenever you rescue a Bystander this turn, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { team: 4 },
                            ": Rescue a Bystander for each other ",
                            { team: 4 },
                            " Hero you played this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 29,
            name: "Nightcrawler",
            team: 4,
            cards: [
                {
                    name: "Bamf!",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nightcrawler-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 1 }
                        ]
                    ]
                },
                {
                    name: "Blend Into Shadows",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nightcrawler-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        { keyword: 1 }
                    ]
                },
                {
                    name: "Swashbuckler",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nightcrawler-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            { hc: 2 },
                            { hc: 1 },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Along for the Ride",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nightcrawler-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        [
                            { keyword: 1 }
                        ],
                        [
                            "When you play or ",
                            { keyword: 1 },
                            " this card, you may also ",
                            { keyword: 1 },
                            " up to three other cards from your hand."
                        ]
                    ]
                }
            ]
        },
        {
            id: 30,
            name: "Professor X",
            team: 4,
            cards: [
                {
                    name: "Psionic Astral Form",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/professor-x-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 2,
                    attack: "1+",
                    abilities: [
                        [
                            { team: 4 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Class Dismissed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/professor-x-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        "You may put a Hero from the HQ on the bottom of the Hero Deck.",
                        [
                            { hc: 2 },
                            ": You may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Telepathic Probe",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/professor-x-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        "Reveal the top card of the Villain Deck. If it's a Bystander, you may rescue it. If it's a Villain, you may fight it this turn."
                    ]
                },
                {
                    name: "Mind Control",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/professor-x-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 8,
                    attack: "6",
                    abilities: [
                        [
                            "Whenever you defeat a Villain this turn, you may gain it. It becomes a grey Hero with no text that gives ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to its ",
                            { icon: 1 },
                            ". ",
                            { italic: "( You still get its " },
                            { icon: 4 },
                            { italic: ".)" }
                        ]
                    ]
                }
            ]
        },
        {
            id: 31,
            name: "Punisher",
            team: 6,
            cards: [
                {
                    name: "Boom Goes the Dynamite",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/punisher-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    abilities: [
                        [
                            "Reveal the top card of your deck. If it costs 0",
                            { icon: 3 },
                            ", KO it."
                        ],
                        [
                            { hc: 5 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Hail of Bullets",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/punisher-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            "Reveal the top card of the Villain Deck. If it's a Villain, you get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to its printed ",
                            { icon: 4 },
                            "."
                        ],
                        [
                            { hc: 5 },
                            { hc: 5 },
                            ": You may defeat that Villain for free."
                        ]
                    ]
                },
                {
                    name: "Hostile Interrogation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/punisher-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 3,
                    recruit: "2+",
                    abilities: [
                        [
                            { hc: 4 },
                            ": Each other player reveals the top card of their deck. If that card costs 4",
                            { icon: 3 },
                            " or more, discard it. You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each card discarded this way."
                        ]
                    ]
                },
                {
                    name: "The Punisher",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/punisher-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 8,
                    attack: "4+",
                    abilities: [
                        [
                            "Reveal cards from the Hero Deck until you have revealed two cards with the same ",
                            { icon: 3 },
                            ". You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each card revealed this way. Put them on the bottom of the Hero Deck in random order."
                        ]
                    ]
                }
            ]
        },
        {
            id: 32,
            name: "Wolverine",
            filterName: "Wolverine (Dark City)",
            team: 7,
            cards: [
                {
                    name: "Animal Instincts",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/x-force-wolverine-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        "Draw a card.",
                        [
                            { hc: 2 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Sudden Ambush",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/x-force-wolverine-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            "If you drew any extra cards this turn, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "No Mercy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/x-force-wolverine-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 4,
                    abilities: [
                        [
                            "Draw a card.",
                        ],
                        [
                            "You may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Reckless Abandon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/x-force-wolverine-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "3",
                    abilities: [
                        [
                            "Count the number of extra cards you drew this turn. Draw that many cards."
                        ]
                    ]
                }
            ]
        }
    ],
    masterminds: [
        {
            id: 5,
            name: "Apocalypse",
            vAttack: "12",
            vp: 6,
            cards: [
                {
                    name: "Apocalypse",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/apocalypse-01.png",
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Four Horsemen"
                        ],
                        [
                            "Four Horsemen Villains get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { bold: "Apocalypse Wins" },
                            ": When Famine, Pestilence, War, and Death have escaped."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals their hand and puts all their Heroes that cost 1",
                            { icon: 3 },
                            " or more on top of their deck."
                        ]
                    ]
                },
                {
                    name: "Apocalyptic Destruction",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/apocalypse-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player KOs two Heroes from their discard pile that each cost 1",
                            { icon: 3 },
                            " or more."
                        ]
                    ]
                },
                {
                    name: "The End of All Things",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/apocalypse-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals the top three cards of their deck, KOs each one of those cards that cost 1 ",
                            { icon: 3 },
                            " or more, and puts the rest back in any order."
                        ]
                    ]
                },
                {
                    name: "Horsemen Are Drawing Nearer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/apocalypse-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player plays a Four Horsemen Villain from their Victory Pile as if playing it from the Villain Deck."
                        ]
                    ]
                },
                {
                    name: "Immortal and Undefeated",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/apocalypse-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": If this is not the final Tactic, rescue six Bystanders and shuffle this Tactic back into the other Tactics."
                        ]
                    ]
                }
            ]
        },
        {
            id: 6,
            name: "Kingpin",
            vAttack: "13",
            vp: 6,
            cards: [
                {
                    name: "Kingpin",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kingpin-01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 2 },
                        [
                            { bold: "Always Leads" },
                            ": Streets of New York"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals a ",
                            { team: 6 },
                            " Hero or discards their hand and draws 5 cards."
                        ]
                    ]
                },
                {
                    name: "Call a Hit",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kingpin-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose a Hero from each player's discard pile and KO it."
                        ]
                    ]
                },
                {
                    name: "Criminal Empire",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kingpin-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": If this is not the final Tactic, reveal the top three cards of the Villain Deck. Play all the Villains you revealed. Put the rest back in random order."
                        ]
                    ]
                },
                {
                    name: "Dirty Cops",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kingpin-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Put a 0 ",
                            { icon: 3 },
                            " Hero from the KO pile on top of each other player's deck."
                        ]
                    ]
                },
                {
                    name: "Mob War",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/kingpin-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player plays a Henchman Villain from their Victory Pile as if playing it from the Villain Deck."
                        ]
                    ]
                }
            ]
        },
        {
            id: 7,
            name: "Mephisto",
            vAttack: "10",
            vp: 6,
            cards: [
                {
                    name: "Mephisto",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mephisto-01.png",
                    abilities: [
                        "Whenever a player gains a Wound, put it on top of that player's deck.",
                        [
                            { bold: "Always Leads" },
                            ": Underworld"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals a ",
                            { team: 6 },
                            " Hero or gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Damned If You Do...",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mephisto-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player KOs a Bystander from their Victory Pile or gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Devilish Torment",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mephisto-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player puts all 0 ",
                            { icon: 3 },
                            " cards from their discard pile on top of their deck in any order."
                        ]
                    ]
                },
                {
                    name: "Pain Begets Pain",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mephisto-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose any number of Wounds from your hand and discard pile. The player to your right gains them."
                        ]
                    ]
                },
                {
                    name: "The Price of Failure",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mephisto-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player without a Mastermind Tactic in their Victory Pile gains a Wound."
                        ]
                    ]
                }
            ]
        },
        {
            id: 8,
            name: "Mr. Sinister",
            vAttack: "8",
            vp: 6,
            cards: [
                {
                    name: "Mr. Sinister",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mr-sinister-01.png",
                    vAttack: "8+",
                    abilities: [
                        [
                            "Mr. Sinister gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Bystander he has."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Marauders"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Mr. Sinister captures a Bystander. Then each player with exactly 6 cards reveals a ",
                            { hc: 1 },
                            " Hero or discards cards equal to the number of Bystanders Mr. Sinister has."
                        ]
                    ]
                },
                {
                    name: "Human Experimentation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mr-sinister-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Mr. Sinister captures Bystanders equal to the number of Villains in the city."
                        ]
                    ]
                },
                {
                    name: "Master Geneticist",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mr-sinister-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Reveal the top seven cards of the Villain Deck. Mr. Sinister captures all of the Bystanders you revealed. Put the rest back in random order."
                        ]
                    ]
                },
                {
                    name: "Plans Within Plans",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mr-sinister-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Mr. Sinister captures a Bystander for each Mr. Sinister Tactic in players' Victory Piles, including this Tactic."
                        ]
                    ]
                },
                {
                    name: "Telepathic Manipulation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mr-sinister-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Mr. Sinister captures a Bystander from each other player's Victory Pile."
                        ]
                    ]
                }
            ]
        },
        {
            id: 9,
            name: "Stryfe",
            vAttack: "7",
            vp: 6,
            cards: [
                {
                    name: "Stryfe",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/stryfe-01.png",
                    vAttack: "7+",
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": MLF"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Stack this Master Strike next to Stryfe. Stryfe gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Master Strike stacked next to him. Each player reveals a ",
                            { team: 7 },
                            " Hero or discards a card at random."
                        ]
                    ]
                },
                {
                    name: "Furious Wrath",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/stryfe-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Reveal the top six cards of the Villain Deck. Play all the Master Strikes you revealed. Put the rest back in random order."
                        ]
                    ]
                },
                {
                    name: "Psychic Torment",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/stryfe-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Look at the top five cards of your deck. Put one into your hand and discard the rest."
                        ]
                    ]
                },
                {
                    name: "Swift Vengeance",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/stryfe-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": A Wound from the Wound Stack becomes a Master Strike that takes effect immediately."
                        ]
                    ]
                },
                {
                    name: "Tide of Retribution",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/stryfe-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals an ",
                            { team: 7 },
                            " Hero or gains a Wound."
                        ]
                    ]
                }
            ]
        },
    ],
    henchmen: [
        {
            id: 5,
            name: "Maggia Goons",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/maggia-goons.png",
            vAttack: "4",
            vp: 1,
            cards: [
                {
                    vAttackAsterisk: true,
                    abilities: [
                        { keyword: 2 },
                        [
                            { bold: "Fight" },
                            ": KO one of your Heroes."
                        ]
                    ]
                },
            ]
        },
        {
            id: 6,
            name: "Phalanx",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/phalanx.png",
            vAttack: "3",
            vp: 1,
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Reveal a ",
                            { hc: 5 },
                            " Hero or KO one of your Heroes with a ",
                            { icon: 1 },
                            " icon.",
                        ]
                    ]
                },
            ]
        },
    ],
    villains: [
        {
            id: 8,
            name: "Emissaries of Evil",
            cards: [
                {
                    name: "Egghead",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/emissaries-of-evil-03.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Reveal the top card of the Villain Deck. If it's a Villain, play it."
                        ]
                    ]
                },
                {
                    name: "Electro",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/emissaries-of-evil-02.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Reveal the top card of the Villain Deck. If it's a Scheme Twist, play it."
                        ]
                    ]
                },
                {
                    name: "Gladiator",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/emissaries-of-evil-04.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Reveal the top card of the Villain Deck. If it's a Bystander, Gladiator captures it."
                        ]
                    ]
                },
                {
                    name: "Rhino",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/emissaries-of-evil-01.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Reveal the top card of the Villain Deck. If it's a Master Strike, each player gains a Wound."
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
            id: 9,
            name: "Four Horsemen",
            cards: [
                {
                    name: "Death",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/four-horsemen-04.png",
                    qtd: 2,
                    vAttack: "7",
                    vp: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each other player reveals their hand and KOs one of their Heroes that costs 1",
                            { icon: 3 },
                            " or more."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player does that same effect."
                        ]
                    ]
                },
                {
                    name: "Famine",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/four-horsemen-03-1.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each other player reveals an ",
                            { hc: 2 },
                            " Hero or discards a card."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player does that same effect."
                        ]
                    ]
                },
                {
                    name: "Pestilence",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/four-horsemen-02-1.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each other player reveals the top three cards of their deck, discards each of those cards that costs 1",
                            { icon: 3 },
                            " or more, and puts the rest back in any order."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player does that same effect."
                        ]
                    ]
                },
                {
                    name: "War",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/four-horsemen-01-1.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each other player reveals an ",
                            { hc: 2 },
                            " Hero or gains a Wound."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player does that same effect."
                        ]
                    ]
                }
            ]
        },
        {
            id: 10,
            name: "Marauders",
            cards: [
                {
                    name: "Blockbuster",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/marauders-03.png",
                    qtd: 2,
                    vAttack: "4+",
                    vp: "2",
                    abilities: [
                        [
                            "Blockbuster gets ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each Bystander he has."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": If there is a Villain in the Bank that Villain and Blockbuster each capture a Bystander."
                        ]
                    ]
                },
                {
                    name: "Chimera",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/marauders-02.png",
                    qtd: 2,
                    vAttack: "3+",
                    vp: "3",
                    abilities: [
                        [
                            "Chimera gets ",
                            { bold: "+3" },
                            { icon: 1 },
                            " for each Bystander she has."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Reveal the top three cards of the Villain Deck. Chimera captures all the Bystander cards you revealed. Put the rest back in random order."
                        ]
                    ]
                },
                {
                    name: "Scalphunter",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/marauders-01.png",
                    qtd: 2,
                    vAttack: "4+",
                    vp: "2",
                    abilities: [
                        [
                            "Scalphunter gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Bystander he has."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player chooses a Bystander from their Victory Pile. Scalphunter captures those Bystanders."
                        ]
                    ]
                },
                {
                    name: "Vertigo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/marauders-04.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player discards all the cards in their hand, then draws as many cards as they discarded."
                        ]
                    ]
                }
            ]
        },
        {
            id: 11,
            name: "Mutant Liberation Front",
            subtitle: "Villain - MLF",
            cards: [
                {
                    name: "Forearm",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/mlf-03.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "4",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "To fight Forearm, you must also reveal four Hero cards with different card names."
                        ]
                    ]
                },
                {
                    name: "Reignfire",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/mlf-04.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Escape"
                            },
                            ": Reignfire becomes a Master Strike that takes effect immediately."
                        ]
                    ]
                },
                {
                    name: "Wildside",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/mlf-02.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": If you fight Wildside in the Sewers or Bank, KO two of your Heroes."
                        ]
                    ]
                },
                {
                    name: "Zero",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/mlf-01.png",
                    qtd: 2,
                    vAttack: "0",
                    vp: "2",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "To fight Zero, you must also discard three cards that cost 0",
                            { icon: 3 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 12,
            name: "Streets of New York",
            cards: [
                {
                    name: "Bullseye",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/streets-of-new-york-01.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes with a ",
                            { icon: 2 },
                            " icon and one of your Heroes with an ",
                            { icon: 1 },
                            " icon."
                        ]
                    ]
                },
                {
                    name: "Hammerhead",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/streets-of-new-york-03.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "2",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 2 }
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes with a ",
                            { icon: 2 },
                            " icon."
                        ]
                    ]
                },
                {
                    name: "Jigsaw",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/streets-of-new-york-02.png",
                    qtd: 2,
                    vAttack: "11",
                    vp: "5",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player discards three cards, then draws two cards."
                        ],
                        [
                            { keyword: 2 }
                        ]
                    ]
                },
                {
                    name: "Tombstone",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/streets-of-new-york-04.png",
                    qtd: 2,
                    vAttack: "8",
                    vp: "4",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { keyword: 2 }
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player reveals a ",
                            { hc: 4 },
                            " Hero or gains a Wound."
                        ]
                    ]
                }
            ]
        },
        {
            id: 13,
            name: "Underworld",
            cards: [
                {
                    name: "Azazel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/underworld-03.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": A card in your hand gains ",
                            { keyword: 1 },
                            " this turn."
                        ]
                    ]
                },
                {
                    name: "Blackheart",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/underworld-01.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": The player to your right reveals a ",
                            { team: 6 },
                            " Hero or gains a Wound."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Same effect."
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
                    name: "Dracula",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/underworld-02.png",
                    qtd: 2,
                    vAttack: "3+",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Dracula captures the top card of the Hero Deck. Dracula gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to that card's Cost."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Gain that card."
                        ]
                    ]
                },
                {
                    name: "Lilith, Daughter of Dracula",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/underworld-04.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player without Dracula in their Victory Pile gains a Wound."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 9,
            name: "Capture Baby Hope",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/9Scheme(40).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Put a token on this Scheme to represent the baby, Hope Summers."
                        ],
                        [
                            { bold: "Twist" },
                            ": If a Villain has the baby, that Villain escapes. Otherwise, the baby is captured by the closest Villain to the Villain Deck. ",
                            { italic: "(If there are no Villains, do nothing.)" }
                        ],
                        [
                            { bold: "Special Rules" },
                            ": The Villain with the baby gets ",
                            { bold: "+4" },
                            { icon: 1 },
                            ". If you defeat that Villain, rescue the baby to your Victory Pile ",
                            { italic: "(until the next Twist)" },
                            ". The baby is worth ",
                            { bold: "+6" },
                            { icon: 4 },
                            " at the end of the game. If a Villain escapes with the baby, stack a Twist next to the Mastermind and return the baby to this Scheme card."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 3 Twists stacked next to the Mastermind."
                        ],
                    ]
                },
            ]
        },
        {
            id: 10,
            name: "Detonate the Helicarrier",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/13Scheme(44).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. 6 Heroes in the Hero Deck."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Whenever a Hero is KO'd from the HQ, turn that Hero face down on that HQ space, representing an Explosion on the Helicarrier. When an HQ space has 6 Explosions, that space is Destroyed and can't hold Heroes anymore."
                        ],
                        [
                            { bold: "Twist" },
                            ": Stack this Twist next to the Scheme. Then for each Twist in that stack, KO the leftmost Hero in the HQ and immediately refill that space."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When all HQ spaces are Destroyed or the Hero Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 11,
            name: "Massive Earthquake Generator",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/15Scheme(46).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Each player reveals a ",
                            { hc: 4 },
                            " Hero or KOs the top card of their deck."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the number of non grey Heroes in the KO pile is 3 times the number of players."
                        ],
                    ]
                },
            ]
        },
        {
            id: 12,
            name: "Organized Crime Wave",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/16Scheme(47).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Include 10 Maggia Goons as one of the Henchman Groups."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Goons also have the ability “Ambush: Play another card from the Villain Deck.“"
                        ],
                        [
                            { bold: "Twist" },
                            ": Each Goon in the city escapes. Shuffle all Goons from each players' Victory Piles into the Villain Deck."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 5 Goons escape."
                        ],
                    ]
                },
            ]
        },
        {
            id: 13,
            name: "Save Humanity",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/14Scheme(45).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. 24 Bystanders in the Hero Deck. ",
                            { italic: "(1 player: 12 Bystanders in the Hero Deck)" }
                        ],
                        [
                            { bold: "Special Rules" },
                            ": You may spend ",
                            { bold: "2" },
                            { icon: 2 },
                            " to rescue a Bystander from the HQ."
                        ],
                        [
                            { bold: "Twist" },
                            ": KO all Bystanders in the HQ. Then each player reveals an ",
                            { hc: 2 },
                            " Hero or KOs a Bystander from their Victory Pile."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the number of Bystanders KO'd and/or carried off is 4 times the number of players."
                        ],
                    ]
                },
            ]
        },
        {
            id: 14,
            name: "Steal the Weaponized Plutonium",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/12Scheme(43).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists representing Plutonium. Add an extra Villain Group."
                        ],
                        [
                            { bold: "Twist" },
                            ": This Plutonium is captured by the closest Villain to the Villain Deck. If there are no Villains in the city, KO this Plutonium. Either way, play another card from the Villain Deck."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Each Villain gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Plutonium it has. When a Villain with any Plutonium is defeated, shuffle that Plutonium back into the Villain Deck."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 4 Plutonium have been carried off by Villains."
                        ],
                    ]
                },
            ]
        },
        {
            id: 15,
            name: "Transform Citizens Into Demons",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/11Scheme(42).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Villain Deck includes 14 extra Jean Grey cards and no Bystanders."
                        ],
                        [
                            { bold: "Twist" },
                            ": Stack 5 Bystanders face down next to the Scheme. Bystanders stacked here are “Demon Goblin“ Villains. They have ",
                            { bold: "2" },
                            { icon: 1 },
                            ". Players can fight these Demon Goblins to rescue them as Bystanders."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Each Jean Grey card counts as a “Goblin Queen“ Villain. It's worth ",
                            { bold: "4" },
                            { icon: 4 },
                            " . It has ",
                            { icon: 1 },
                            " equal to its ",
                            { icon: 3 },
                            " plus the number of Demon Goblins stacked next to the Scheme."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 4 Goblin Queen cards escape."
                        ],
                    ]
                },
            ]
        },
        {
            id: 16,
            name: "X-Cutioner's Song",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/10Scheme(41).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Villain Deck includes 14 cards for an extra Hero and no Bystanders."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Whenever you play a Hero from the Villain Deck, that Hero is captured by the closest enemy to the Villain Deck. Each Villain gets ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each Hero it has. When you fight an enemy, gain all the Heroes captured by that enemy."
                        ],
                        [
                            { bold: "Twist" },
                            ": KO all Heroes captured by enemies. Then play another card from the Villain Deck."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": 9 non grey Heroes are KO'd or carried off."
                        ],
                    ]
                },
            ]
        },
    ],
    bystanders: [
        {
            id: 2,
            name: "News Reporter",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-news-reporter.png",
            vp: 1,
            cards: [
                {
                    qtd: 4,
                    abilities: [
                        "When you rescue this Bystander, draw a card."
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "Paramedic",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-paramedic.png",
            vp: 1,
            cards: [
                {
                    qtd: 3,
                    abilities: [
                        "When you rescue this Bystander, you may KO a Wound from your hand or from any player's discard pile."
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Radiation Scientist",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-radiation-scientist.png",
            vp: 1,
            cards: [
                {
                    qtd: 4,
                    abilities: [
                        "When you rescue this Bystander, you may KO one of your Heroes or a Hero from your discard pile."
                    ]
                }
            ]
        },
    ],
};
