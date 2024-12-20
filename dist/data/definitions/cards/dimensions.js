"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dimensions = void 0;
exports.Dimensions = {
    id: 23,
    heroes: [
        {
            id: 182,
            name: "Jessica Jones",
            team: 6,
            cards: [
                {
                    name: "Alter Ego",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jessica_04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        { keyword: 56, text: "Switcheroo 4" }
                    ]
                },
                {
                    name: "Alias Investigations",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jessica_03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "1",
                    abilities: [
                        { keyword: 56, text: "Switcheroo 5" },
                        { divider: true },
                        [
                            { keyword: 32 },
                            " for a card with an ",
                            { icon: 1 },
                            " icon."
                        ]
                    ]
                },
                {
                    name: "Crack the Case",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jessica_02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    recruit: "3",
                    abilities: [
                        { keyword: 56, text: "Switcheroo 6" },
                        { divider: true },
                        [
                            { keyword: 32 },
                            " for a card with an ",
                            { icon: 2 },
                            " icon. You may draw that card or KO it."
                        ]
                    ]
                },
                {
                    name: "Uncover Hidden Evil",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jessica_01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "4",
                    abilities: [
                        [
                            { hc: 1 },
                            ": ",
                            { keyword: 32 },
                            " the Villain Deck for a Villain. You may put it into your Victory Pile and do its Fight effect. Otherwise, put it back on the top or bottom of that deck."
                        ]
                    ]
                }
            ]
        },
        {
            id: 183,
            name: "Ms. America",
            team: 1,
            cards: [
                {
                    name: "Star Power",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ms_america_04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "1+",
                    abilities: [
                        { keyword: 1 },
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
                    name: "Search Parallel Dimensions",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ms_america_03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 32 },
                            " for an ",
                            { team: 1 },
                            " card and ",
                            { keyword: 1 },
                            " that card."
                        ]
                    ]
                },
                {
                    name: "Kick a Hole in Reality",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ms_america_02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            { hc: 4 },
                            ": Reveal the top card of your deck. KO it or ",
                            { keyword: 1 },
                            " it."
                        ]
                    ]
                },
                {
                    name: "Hyper-Cosmic Awareness",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ms_america_01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other card in your hand."
                        ]
                    ]
                }
            ]
        },
        {
            id: 184,
            name: "Squirrel Girl",
            team: 1,
            cards: [
                {
                    name: "Find Tiny Friends",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/squirrel_04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 2,
                    abilities: [
                        { keyword: 56, text: "Switcheroo 3" },
                        { divider: true },
                        [
                            { keyword: 32 },
                            " for a card that costs 3 or less."
                        ]
                    ]
                },
                {
                    name: "Nut Punch",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/squirrel_03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "1+",
                    abilities: [
                        { keyword: 56, text: "Switcheroo 4" },
                        { divider: true },
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
                    name: "Squirrelgility",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/squirrel_02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        { keyword: 56, text: "Switcheroo 5" },
                        { divider: true },
                        [
                            "You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " if at least 2 cards entered the HQ this turn."
                        ]
                    ]
                },
                {
                    name: "Unbeatable Squirrel Girl",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/squirrel_01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 8,
                    attack: "5",
                    abilities: [
                        [
                            "You may choose a number from 1 to 5. A Hero in your hand gains ",
                            { keyword: 56 },
                            " for that number."
                        ],
                        [
                            { hc: 2 },
                            { hc: 2 },
                            ": You may choose a number from 1 to 8 instead."
                        ]
                    ]
                }
            ]
        },
    ],
    masterminds: [
        {
            id: 61,
            name: "J. Jonah Jameson",
            vAttack: "4",
            vp: 5,
            cards: [
                {
                    name: "J. Jonah Jameson",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/jameson_01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { bold: "Start of Game" },
                            ": Put 2 S.H.I.E.L.D. Officers per player into a face down “Angry Mobs“ stack."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": You can spend ",
                            { bold: "4" },
                            { icon: 1 },
                            " to reveal a random Angry Mob and put it into any player's discard pile. You can't fight J. Jonah Jameson while he has Angry Mobs."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Spider-Slayers"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player ",
                            { keyword: 32, text: "Investigates" },
                            " their deck for a card and puts it into the Angry Mobs stack."
                        ]
                    ]
                },
                {
                    name: "Epic J. Jonah Jameson",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/jameson_02.png",
                    vAttack: "5",
                    vAttackAsterisk: true,
                    epic: true,
                    abilities: [
                        [
                            { bold: "Start of Game" },
                            ": Put 3 S.H.I.E.L.D. Officers per player into a face down “Angry Mobs“ stack."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": You can spend ",
                            { bold: "5" },
                            { icon: 1 },
                            " to reveal a random Angry Mob and put it into any player's discard pile. You can't fight J. Jonah Jameson while he has Angry Mobs."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Spider-Slayers"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player ",
                            { keyword: 32, text: "Investigates" },
                            " their deck for a card and puts it into the Angry Mobs stack. If that card cost 0, that player gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Incite Violent Riots",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/jameson_04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each player puts a Wound from the Wound Stack into the Angry Mobs stack."
                        ]
                    ]
                },
                {
                    name: "Promote Spider-Slayer Security",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/jameson_05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player puts a Spider-Slayer from their Victory Pile into the Angry Mobs stack. When a Spider-Slayer is revealed from the Angry Mobs, it enters the city."
                        ]
                    ]
                },
                {
                    name: "Slanderous Editorial",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/jameson_03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player ",
                            { keyword: 32, text: "Investigates" },
                            " their deck for a non-grey Hero and puts it into the Angry Mobs stack. Players reveal all the cards they investigated."
                        ]
                    ]
                },
                {
                    name: "That Menace Spider-Man!",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/jameson_06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand and discard a ",
                            { team: 3 },
                            " Hero. Any player who cannot must instead put a non-grey card from their hand into the Angry Mobs stack."
                        ]
                    ]
                }
            ]
        },
    ],
    bystanders: [
        {
            id: 42,
            name: "Forklift Driver",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/forklift-driver.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, put any number of Heroes from the HQ on the bottom of the Hero Deck.",
                        ]
                    ]
                }
            ]
        },
    ],
};
