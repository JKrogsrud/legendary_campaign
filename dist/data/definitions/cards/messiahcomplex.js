"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessiahComplex = void 0;
exports.MessiahComplex = {
    id: 31,
    heroes: [
        {
            id: 227,
            name: "Multiple Man",
            team: 23,
            cards: [
                {
                    name: "Finding Myself",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/multiple_man_01.png",
                    hc: 5,
                    qtd: 4,
                    rarity: 1,
                    cost: 4,
                    attack: "1",
                    abilities: [
                        [
                            { keyword: 32 },
                            " for a card that has the same card name as any of your cards. ",
                            { italic: "(You don't need to choose a specific card name before you Investigate.)" }
                        ],
                        [
                            { hc: 5 },
                            ": ",
                            { keyword: 72 },
                        ],
                    ]
                },
                {
                    name: "Me, Myself, and I",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/multiple_man_02.png",
                    hc: 2,
                    qtd: 4,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 75, text: "Tactical Formation 444" },
                            ": Draw a card."
                        ],
                        [
                            { hc: 2 },
                            ": ",
                            { keyword: 72 },
                        ],
                    ]
                },
                {
                    name: "Perfect Match",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/multiple_man_03.png",
                    hc: 5,
                    qtd: 4,
                    rarity: 1,
                    cost: 4,
                    attack: "1+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each card name that you played at least twice this turn."
                        ],
                        [
                            { hc: 5 },
                            ": ",
                            { keyword: 72 },
                        ],
                    ]
                },
                {
                    name: "Reabsorb Duplicates",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/multiple_man_04.png",
                    hc: 2,
                    qtd: 2,
                    rarity: 3,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 75, text: "Tactical Formation 44" },
                            ": You may KO a card from your hand or discard pile."
                        ],
                        [
                            { team: 23 },
                            ": ",
                            { keyword: 72 },
                        ]
                    ]
                }
            ]
        },
        {
            id: 228,
            name: "Shatterstar",
            team: 7,
            cards: [
                {
                    name: "Strive for Greatness",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/shatterstar_01.png",
                    hc: 2,
                    qtd: 4,
                    rarity: 1,
                    cost: 3,
                    recruit: "2+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited —" },
                            { hc: 2 },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { hc: 2 },
                            ": You get another ",
                            { bold: "+2" },
                            { icon: 2 },
                            " usable only to recruit Heroes that cost 5 or more.",
                        ],
                    ]
                },
                {
                    name: "Bioelectric Surge",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/shatterstar_02.png",
                    hc: 3,
                    qtd: 4,
                    rarity: 1,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited —" },
                            { hc: 3 },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { keyword: 75, text: "Tactical Formation 55" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Gladiator's Blades",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/shatterstar_03.png",
                    hc: 2,
                    qtd: 4,
                    rarity: 1,
                    cost: 5,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited —" },
                            { hc: 2 },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { hc: 2 },
                            ": Draw a card.",
                        ],
                    ]
                },
                {
                    name: "Gene-Spliced Creation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/shatterstar_04.png",
                    hc: 2,
                    qtd: 2,
                    rarity: 3,
                    cost: 5,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited —" },
                            { team: 7 },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { hc: 3 },
                            { hc: 2 },
                            ": ",
                            { keyword: 73 },
                            " the Mastermind.",
                        ],
                    ]
                }
            ]
        },
        {
            id: 229,
            name: "Stepford Cuckoos",
            team: 4,
            cards: [
                {
                    name: "Find Mutants with Cerebro",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stepford_cuckoos_01.png",
                    hc: 5,
                    qtd: 4,
                    rarity: 1,
                    cost: 2,
                    attack: "1",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited" },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { hc: 5 },
                            ": ",
                            { keyword: 32 },
                            " the Sidekick Stack for a card and put it in your discard pile.",
                        ],
                    ]
                },
                {
                    name: "Shared Thoughts",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stepford_cuckoos_02.png",
                    hc: 1,
                    qtd: 4,
                    rarity: 1,
                    cost: 2,
                    attack: "1+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited" },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { keyword: 75, text: "Tactical Formation 22" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { keyword: 75, text: "Tactical Formation 33" },
                            ": ",
                            { keyword: 32 },
                            " for a card with an ",
                            { icon: 1 },
                            " icon."
                        ],
                    ]
                },
                {
                    name: "Telepathic Warning",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stepford_cuckoos_03.png",
                    hc: 3,
                    qtd: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited" },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { keyword: 75, text: "Tactical Formation 22" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { keyword: 75, text: "Tactical Formation 33" },
                            ": Reveal the top card of the Villain Deck. If it's a Master Strike, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " and you may shuffle the Villain Deck."
                        ],
                    ]
                },
                {
                    name: "Mind Wipe",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stepford_cuckoos_04.png",
                    hc: 3,
                    qtd: 2,
                    rarity: 3,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited" },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { keyword: 75, text: "Tactical Formation 223" },
                            ": Reveal the top card of the Villain Deck. If it's a Villain, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " and you may fight it this turn. If you fight it, put a card from the Bystander stack on top of the Villain Deck."
                        ],
                    ]
                }
            ]
        },
        {
            id: 230,
            name: "M",
            team: 23,
            cards: [
                {
                    name: "Penance Form",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/m_1.png",
                    hc: 4,
                    qtd: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited —" },
                            { hc: 4 },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            "If you have a Wound in your hand or discard pile, KO it and you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            ". Otherwise, gain a Wound.",
                        ],
                    ]
                },
                {
                    name: "Three Sisters Combined",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/m_2.png",
                    hc: 4,
                    qtd: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited —" },
                            { hc: 4 },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        "Draw a card.",
                        [
                            { keyword: 75, text: "Tactical Formation 333" },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Uncover Family Secrets",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/m_03.png",
                    hc: 1,
                    qtd: 4,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited —" },
                            { hc: 1 },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { keyword: 32 },
                            " for a card that costs 3."
                        ],
                    ]
                },
                {
                    name: "Interweaving Powers",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/m_4.png",
                    hc: 1,
                    qtd: 2,
                    rarity: 3,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 72, text: "When Recruited —" },
                            { team: 23 },
                            ": ",
                            { keyword: 72 },
                        ],
                        { divider: true },
                        [
                            { keyword: 75, text: "Tactical Formation 3333" },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                }
            ]
        },
        {
            id: 231,
            name: "Strong Guy",
            team: 23,
            cards: [
                {
                    name: "X-Factor Investigations",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/strong_guy_01.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 32 },
                            " for a card that's ",
                            { hc: 4 },
                            " and/or ",
                            { team: 23 },
                            ".",
                        ],
                    ]
                },
                {
                    name: "Absorb Kinetic Energy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/strong_guy_02.png",
                    hc: 4,
                    rarity: 1,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        "If any player would gain a Wound, you may discard this card instead. If you do, draw two cards."
                    ]
                },
                {
                    name: "Go Big",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/strong_guy_03.png",
                    hc: 4,
                    rarity: 2,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 75, text: "Tactical Formation 445" },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Treasure Hunt",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/strong_guy_04.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "3",
                    abilities: [
                        [
                            { keyword: 32 },
                            " for one of these options, then a different option, then a third different option:",
                        ],
                        {
                            points: [
                                [
                                    "A ",
                                    { hc: 4 },
                                    " card."
                                ],
                                [
                                    "An ",
                                    { team: 23 },
                                    " card."
                                ],
                                "A card that costs 4.",
                                "A card that costs 5."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 232,
            name: "Warpath",
            team: 7,
            cards: [
                {
                    name: "Grim Tracker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warpath_01.png",
                    hc: 2,
                    rarity: 1,
                    cost: 2,
                    attack: "1",
                    abilities: [
                        [
                            "Choose a number 1 or more. ",
                            { keyword: 32 },
                            " for a card of that cost.",
                        ],
                    ]
                },
                {
                    name: "Endless Endurance",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warpath_02.png",
                    hc: 4,
                    rarity: 1,
                    cost: 5,
                    abilities: [
                        "When you draw a new hand of cards at the end of this turn, draw two extra cards."
                    ]
                },
                {
                    name: "Dangerous Maneuver",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warpath_03.png",
                    hc: 1,
                    rarity: 2,
                    cost: 2,
                    attack: "0+",
                    abilities: [
                        [
                            "Reveal the top card of your deck. If it costs 0, you may KO it."
                        ],
                        [
                            { keyword: 75, text: "Tactical Formation 225" },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Superhuman Senses",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warpath_04.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "3+",
                    abilities: [
                        [
                            "Whenever you “reveal“ or “look at“ any number of cards from your deck this turn, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            ". ",
                            { italic: "(Just drawing or discarding a card from your deck doesn't count.)" }
                        ],
                        [
                            "Choose a number 1 or more. ",
                            { keyword: 32 },
                            " for a card of that cost."
                        ],
                    ]
                }
            ]
        },
        {
            id: 233,
            name: "Siryn",
            team: 23,
            cards: [
                {
                    name: "Echolocation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/siryn_01.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    attack: "1",
                    abilities: [
                        [
                            "Choose a Hero Class. ",
                            { keyword: 32 },
                            " for a card of that Hero Class.",
                        ],
                    ]
                },
                {
                    name: "Hypnotic Call",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/siryn_02.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 1 },
                            ": ",
                            { keyword: 73 },
                            " each Hero currently in the HQ whose printed cost is 2, 4, 6, and/or 8."
                        ]
                    ]
                },
                {
                    name: "Three-Octave Arpeggio",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/siryn_03.png",
                    hc: 3,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        [
                            { keyword: 75, text: "Tactical Formation 246" },
                            ": ",
                            { keyword: 73 },
                            " all Villains."
                        ],
                    ]
                },
                {
                    name: "Splintering Shriek",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/siryn_04.png",
                    hc: 1,
                    rarity: 3,
                    cost: 8,
                    abilities: [
                        [
                            { keyword: 73 },
                            " the Mastermind. KO up to two cards from your hand and/or discard pile.",
                        ],
                    ]
                }
            ]
        },
        {
            id: 234,
            name: "Rictor",
            team: 23,
            cards: [
                {
                    name: "Underground Cave-In",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rictor_01.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 3 },
                            ": ",
                            { keyword: 73 },
                            " a Villain in the Sewers.",
                        ],
                    ]
                },
                {
                    name: "Unearth Tectonic Power",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rictor_02.png",
                    hc: 2,
                    rarity: 1,
                    cost: 5,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 32 },
                            " for a card that's ",
                            { hc: 3 },
                            " and/or ",
                            { hc: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Trace the Fault Lines",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rictor_03.png",
                    hc: 3,
                    rarity: 2,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 3 },
                            ": ",
                            { keyword: 32 },
                            " for a card that costs 0. KO it or discard it."
                        ],
                    ]
                },
                {
                    name: "Massive Earthquake",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rictor_04.png",
                    hc: 3,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            { keyword: 73 },
                            " the Mastermind  or ",
                            { keyword: 73 },
                            " all Heroes currently in the HQ."
                        ],
                    ]
                }
            ]
        },
    ],
    masterminds: [
        {
            id: 78,
            name: "Lady Deathstrike",
            vAttack: "8",
            vp: 6,
            cards: [
                {
                    name: "Lady Deathstrike",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/lady_deathstrike_01.png",
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Reavers"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": If she is ",
                            { keyword: 74, text: "Preying" },
                            " on a player, ",
                            { keyword: 74, text: "Finish the Prey" },
                            ". Otherwise, ",
                            { keyword: 74 },
                            " on the fewest ",
                            { hc: 2 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player gains two Wounds. Each other player discards two cards. ",
                            { italic: "(1-player game: Instead, gain a Wound and discard a card.)" }
                        ],
                    ]
                },
                {
                    name: "Epic Lady Deathstrike",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/lady_deathstrike_02.png",
                    vAttack: "11",
                    epic: true,
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Reavers"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": If she is ",
                            { keyword: 74, text: "Preying" },
                            " on a player, ",
                            { keyword: 74, text: "Finish the Prey" },
                            ". Then, whether she was preying or not, ",
                            { keyword: 74 },
                            " on the fewest ",
                            { hc: 2 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player gains Wounds to the top and bottom of their deck. Each other player discards down to three cards. ",
                            { italic: "(1-player game: Instead, gain a Wound and discard two cards.)" }
                        ],
                    ]
                },
                {
                    name: "Cybernetic Healing Factor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/lady_deathstrike_03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": If this is not the final Tactic, and if Lady Deathstrike was not ",
                            { keyword: 74, text: "Preying" },
                            " on a player: KO up to two of your Heroes, rescue 4 Bystanders, and shuffle this Tactic back into her remaining Tactics."
                        ],
                    ]
                },
                {
                    name: "Prey on the Weak",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/lady_deathstrike_04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each Villain that's ",
                            { keyword: 74, text: "Preying" },
                            " on a player ",
                            { keyword: 74, text: "Finishes the Prey" },
                            ". After those have all entered the city, then each Villain in the city with a “",
                            { keyword: 74 },
                            "“ Ambush does that Ambush, starting from the Sewers.",
                        ],
                    ]
                },
                {
                    name: "Relentless Assassin",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/lady_deathstrike_05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": If Lady Deathstrike was not ",
                            { keyword: 74, text: "Preying" },
                            " on a player, each other player reveals their hand. She ",
                            { keyword: 74, text: "Preys" },
                            " on the one of those players with the fewest non-grey Heroes.",
                        ],
                    ]
                },
                {
                    name: "Stretching Adamantium Claws",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/lady_deathstrike_06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You may KO one of your Heroes. If you have a ",
                            { hc: 2 },
                            " Hero, you may instead KO up to two of your Heroes.",
                        ],
                    ]
                },
            ]
        },
        {
            id: 79,
            name: "Bastion, Fused Sentinel",
            tacticName: "Bastion",
            vAttack: "4+",
            vp: 6,
            cards: [
                {
                    name: "Bastion, Fused Sentinel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/bastion_01.png",
                    abilities: [
                        [
                            "All Sentinel Masterminds get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Master Strike in the KO pile, even after Bastion is defeated."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Purifiers and any Sentinel Henchmen Group."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": A card from the Bystander Stack ascends to become a ",
                            { bold: "3" },
                            { icon: 1 },
                            " ",
                            { rule: 3, text: "“Prime Sentinel“ Mastermind" },
                            " with “",
                            { bold: "Fight" },
                            ": Rescue this. ",
                            { bold: "Master Strike" },
                            ": Each player reveals the top card of their deck and discards it if it costs 1 or more.“",
                        ],
                    ]
                },
                {
                    name: "Epic Bastion, Fused Sentinel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/bastion_02.png",
                    vAttack: "6+",
                    epic: true,
                    abilities: [
                        [
                            "All Sentinel enemies get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Master Strike in the KO pile, even after Bastion is defeated."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Purifiers and any Sentinel Henchmen Group."
                        ],
                        [
                            { bold: "Master Strike" },
                            ": A card from the Bystander Stack ascends to become a ",
                            { bold: "4" },
                            { icon: 1 },
                            " ",
                            { rule: 3, text: "“Prime Sentinel“ Mastermind" },
                            " with “",
                            { bold: "Fight" },
                            ": Rescue this. ",
                            { bold: "Master Strike" },
                            ": Each player reveals the top card of their deck and KOs it if it costs 1 or more.“",
                        ],
                    ]
                },
                {
                    name: "Master Mold, Sentinel Factory",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/bastion_04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue three Bystanders. KO one of your Heroes. Master Mold ascends to become an ",
                            { rule: 3, text: "additional Mastermind" },
                            " whose only ability is:",
                        ],
                        { divider: true },
                        [
                            { bold: "Master Strike" },
                            ": A Sentinel Henchmen from the Villain Deck enters the city. Shuffle the Villain Deck."
                        ]
                    ]
                },
                {
                    name: "Template, Infected Sentinel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/bastion_06.png",
                    vAttack: "5+",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue three Bystanders. KO one of your Heroes. Template ascends to become an ",
                            { rule: 3, text: "additional Mastermind" },
                            " whose only ability is:",
                        ],
                        { divider: true },
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals a ",
                            { hc: 1 },
                            " Hero or discards one of their non-grey Heroes.",
                        ]
                    ]
                },
                {
                    name: "Nimrod, Future Sentinel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/bastion_05.png",
                    vAttack: "6+",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue three Bystanders. KO one of your Heroes. Nimrod ascends to become an ",
                            { rule: 3, text: "additional Mastermind" },
                            " whose only abilities are:",
                        ],
                        { divider: true },
                        [
                            { bold: "Master Strike" },
                            ": Choose ",
                            { icon: 2 },
                            " or ",
                            { icon: 1 },
                            ". Each player discards a card with the chosen icon.",
                        ]
                    ]
                },
                {
                    name: "Machine Man, Sentinel Supereme",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/bastion_03.png",
                    vAttack: "7+",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue three Bystanders. KO one of your Heroes. Machine Man ascends to become an ",
                            { rule: 3, text: "additional Mastermind" },
                            " whose only ability is:",
                        ],
                        { divider: true },
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals a ",
                            { hc: 5 },
                            " Hero or gains a Wound.",
                        ]
                    ]
                },
            ]
        },
        {
            id: 80,
            name: "Exodus",
            vAttack: "32",
            vp: 7,
            cards: [
                {
                    name: "Exodus",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/exodus_06.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            "You may pay ",
                            { bold: "3" },
                            { icon: 2 },
                            " any number of times to ",
                            { keyword: 73 },
                            " Exodus.",
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Acolytes"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Choose ",
                            { team: 4 },
                            ", ",
                            { team: 7 },
                            ", ",
                            { team: 23 },
                            ", or ",
                            { team: 11 },
                            ". Each player discards one of those Heroes or gains a Wound.",
                        ],
                    ]
                },
                {
                    name: "Epic Exodus",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/exodus_02.png",
                    vAttack: "36",
                    vAttackAsterisk: true,
                    epic: true,
                    abilities: [
                        [
                            "Any number of times, you may ",
                            { keyword: 73 },
                            " Exodus by spending  ",
                            { bold: "2" },
                            { icon: 2 },
                            " plus ",
                            { bold: "1" },
                            { icon: 2 },
                            " for each Immortality stacked here.",
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Acolytes"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Stack this Strike next to Exodus as an “Immortality.“ Choose ",
                            { team: 4 },
                            ", ",
                            { team: 7 },
                            ", ",
                            { team: 23 },
                            ", or ",
                            { team: 11 },
                            ". Each player KOs one of those Heroes or gains a Wound to the top of their deck.",
                        ],
                    ]
                },
                {
                    name: "Unite All Mutantkind",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/exodus_01.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player chooses one of their ",
                            { team: 4 },
                            ", ",
                            { team: 7 },
                            ", ",
                            { team: 23 },
                            ", or ",
                            { team: 11 },
                            " Heroes to enter the city as a Villain with ",
                            { icon: 1 },
                            " equal to its cost and “",
                            { bold: "Fight" },
                            ": Gain this as a Hero.“ If no card enters the city this way, then each player gains a Wound.",
                        ],
                    ]
                },
                {
                    name: "Omega-Level Mutant",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/exodus_04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand, discards all their cards that cost 1 or more, then draws that many cards.",
                        ]
                    ]
                },
                {
                    name: "Avalon, Asteroid Haven",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/exodus_03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You may gain a ",
                            { team: 4 },
                            ", ",
                            { team: 7 },
                            ", ",
                            { team: 23 },
                            ", or ",
                            { team: 11 },
                            " Hero from the HQ. Each other player discards two cards that aren't any of those teams."
                        ],
                    ]
                },
                {
                    name: "Resurrect the Dead",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/exodus_05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose a player. That player gains a ",
                            { team: 4 },
                            ", ",
                            { team: 7 },
                            ", ",
                            { team: 23 },
                            ", or ",
                            { team: 11 },
                            " Hero from the KO pile, then chooses a Non-Henchmen Villain from their Victory Pile to enter the city."
                        ],
                    ]
                },
            ]
        },
    ],
    henchmen: [
        {
            id: 37,
            name: "Mr. Sinister Clones",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/mc_henchman_mr_sinister_clones.png",
            vAttack: "3",
            vp: 1,
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 72 },
                            ". When the cloned copy enters the city, shuffle a Bystander into the Villain Deck."
                        ],
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 72 },
                            " the next Hero you recruit this turn that has printed cost 4 or less."
                        ]
                    ]
                },
            ]
        },
        {
            id: 44,
            name: "Sentinel Squad O∗N∗E∗",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/mc_henchman_sentinel_squad_one.png",
            vAttack: "2",
            vp: 1,
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": If there are no other Sentinel Squad O∗N∗E∗s in the city, ",
                            { keyword: 72 },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": If there are no other Sentinel Squad O∗N∗E∗s in the city, KO one of your Heroes and put this Villain on the bottom of the Villain Deck."
                        ]
                    ]
                },
            ]
        },
    ],
    villains: [
        {
            id: 98,
            name: "Reavers",
            cards: [
                {
                    name: "Donald Pierce",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/reavers_02.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the fewest ",
                            { hc: 5 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": KO one of that player's non-grey Heroes.",
                        ],
                        [
                            { bold: "Fight" },
                            ": KO one of your grey Heroes."
                        ],
                    ]
                },
                {
                    name: "Bonebreaker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/reavers_01.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the fewest ",
                            { hc: 4 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player gains a Wound to the top of their deck.",
                        ],
                        [
                            { bold: "Fight" },
                            ": Reveal the top card of your deck. KO it or draw it."
                        ],
                    ]
                },
                {
                    name: "Skullbuster",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/reavers_04.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the fewest ",
                            { hc: 3 },
                            ". Skullbuster captures one Bystander from the Bystander Stack and two Bystanders from that player's Victory Pile of their choice."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": KO the captured Bystanders, and each player discards a card.",
                        ],
                    ]
                },
                {
                    name: "Pretty Boy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/reavers_03.png",
                    qtd: 2,
                    vAttack: "2",
                    vp: "2",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the fewest ",
                            { hc: 1 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player discards a card.",
                        ],
                        [
                            { bold: "Fight" },
                            ": Discard the top card of your deck. If it has a ",
                            { icon: 2 },
                            " icon, you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            "  and this Villain ",
                            { keyword: 74, text: "Preys" },
                            " on the fewest ",
                            { hc: 1 },
                            "."
                        ],
                    ]
                },
            ]
        },
        {
            id: 99,
            name: "Purifiers",
            cards: [
                {
                    name: "Predator X (Ranged)",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/purifiers_07.png",
                    qtd: 1,
                    vAttack: "3",
                    vp: "2",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the most ",
                            { hc: 3 },
                            ". ",
                            { keyword: 72 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player discards a ",
                            { hc: 3 },
                            " Hero. If they can't, they discard any non-grey Hero instead."
                        ],
                    ]
                },
                {
                    name: "Predator X (Tech)",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/purifiers_06.png",
                    qtd: 1,
                    vAttack: "3",
                    vp: "2",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the most ",
                            { hc: 5 },
                            ". ",
                            { keyword: 72 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player discards a ",
                            { hc: 5 },
                            " Hero. If they can't, they discard any non-grey Hero instead."
                        ],
                    ]
                },
                {
                    name: "Predator X (Covert)",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/purifiers_05.png",
                    qtd: 1,
                    vAttack: "3",
                    vp: "2",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the most ",
                            { hc: 1 },
                            ". ",
                            { keyword: 72 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player discards a ",
                            { hc: 1 },
                            " Hero. If they can't, they discard any non-grey Hero instead."
                        ],
                    ]
                },
                {
                    name: "Predator X (Instinct)",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/purifiers_04.png",
                    qtd: 1,
                    vAttack: "3",
                    vp: "2",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the most ",
                            { hc: 2 },
                            ". ",
                            { keyword: 72 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player discards a ",
                            { hc: 2 },
                            " Hero. If they can't, they discard any non-grey Hero instead."
                        ],
                    ]
                },
                {
                    name: "Predator X (Strength)",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/purifiers_03.png",
                    qtd: 1,
                    vAttack: "3",
                    vp: "2",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the most ",
                            { hc: 4 },
                            ". ",
                            { keyword: 72 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player discards a ",
                            { hc: 4 },
                            " Hero. If they can't, they discard any non-grey Hero instead."
                        ],
                    ]
                },
                {
                    name: "Leper Queen",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/purifiers_02.png",
                    qtd: 1,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the most ",
                            { team: 4 },
                            "+",
                            { team: 7 },
                            "+",
                            { team: 23 },
                            "+",
                            { team: 11 },
                            "."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": That player gains a Wound and KOs two Bystanders from their Victory Pile."
                        ],
                        [
                            { bold: "Fight" },
                            ": Shuffle two cards from the Bystander Stack into the Villain Deck."
                        ],
                    ]
                },
                {
                    name: "Reverend William Stryker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/purifiers_08.png",
                    qtd: 1,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the most ",
                            { team: 4 },
                            "+",
                            { team: 7 },
                            "+",
                            { team: 23 },
                            "+",
                            { team: 11 },
                            ". Stryker captures one ",
                            { rule: 11, text: "Sidekick" },
                            " from the ",
                            { rule: 11, text: "Sidekick" },
                            " Stack and two ",
                            { rule: 11 },
                            " from that player's hand and/or discard pile of their choice."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": KO the captured ",
                            { rule: 11 },
                            "."
                        ],
                        [
                            { bold: "Fight" },
                            ": Gain the captured ",
                            { rule: 11 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Cameron Hodge",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/purifiers_01.png",
                    qtd: 1,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": ",
                            { keyword: 74 },
                            " on the most ",
                            { team: 4 },
                            "+",
                            { team: 7 },
                            "+",
                            { team: 23 },
                            "+",
                            { team: 11 },
                            ". Cameron Hodge captures one of that player's non-grey Heroes of their choice."
                        ],
                        [
                            { keyword: 74, text: "Finish the Prey" },
                            ": KO the captured Hero."
                        ],
                        [
                            { bold: "Fight" },
                            ": Choose a player to gain the captured Hero."
                        ],
                    ]
                },
            ]
        },
        {
            id: 100,
            name: "Acolytes",
            cards: [
                {
                    name: "Unuscione",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/acolytes_04.png",
                    qtd: 2,
                    vAttack: "8",
                    vAttackAsterisk: true,
                    vp: "4",
                    abilities: [
                        [
                            "You may pay ",
                            { bold: "2" },
                            { icon: 2 },
                            " any number of times to ",
                            { keyword: 73 },
                            " Unuscione.",
                        ],
                        [
                            { bold: "Ambush" },
                            ": Unuscione captures a Bystander."
                        ],
                    ]
                },
                {
                    name: "Tempo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/acolytes_03.png",
                    qtd: 2,
                    vAttack: "16",
                    vAttackAsterisk: true,
                    vp: "2",
                    abilities: [
                        [
                            "You may ",
                            { keyword: 73 },
                            " Tempo any number of times. Each time you do this, draw one fewer card when you draw a new hand of cards at the end of this turn.",
                        ],
                        [
                            { bold: "Fight" },
                            ": Draw two cards."
                        ],
                    ]
                },
                {
                    name: "Frenzy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/acolytes_01.png",
                    qtd: 2,
                    vAttack: "12",
                    vAttackAsterisk: true,
                    vp: "3",
                    abilities: [
                        [
                            "You may pay ",
                            { bold: "1" },
                            { icon: 2 },
                            " any number of times to ",
                            { keyword: 73 },
                            " Frenzy. Each time you do, reveal the top card of the Hero Deck and put it on the bottom of that deck. If it's ",
                            { hc: 4 },
                            ", gain a Wound. If it's ",
                            { hc: 2 },
                            ", the player on your right gains a Wound.",
                        ],
                        [
                            { bold: "Fight" },
                            ": KO one of your heroes."
                        ],
                    ]
                },
                {
                    name: "Random",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/acolytes_02.png",
                    qtd: 2,
                    vAttack: "10",
                    vAttackAsterisk: true,
                    vp: "4",
                    abilities: [
                        [
                            "You may pay ",
                            { bold: "1" },
                            { icon: 2 },
                            " any number of times to ",
                            { keyword: 73 },
                            " Random. Each time you do, reveal the top card of the Hero Deck and put it on the bottom of that deck. If it's ",
                            { hc: 1 },
                            ", ",
                            { hc: 5 },
                            ", or ",
                            { hc: 3 },
                            ", Random then gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to that card's cost.",
                        ],
                        [
                            { bold: "Escape" },
                            ": Each player discards a card at random."
                        ],
                    ]
                },
            ]
        },
        {
            id: 101,
            name: "Clan Yashida",
            cards: [
                {
                    name: "Silver Samurai",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/clan_yashida_04.png",
                    qtd: 2,
                    vAttack: "3",
                    vAttackAsterisk: true,
                    vp: "3",
                    abilities: [
                        { keyword: 52 },
                        [
                            { bold: "Ambush" },
                            ": The Villain in the city worth the most VP captures a Bystander."
                        ],
                        [
                            { bold: "Fight" },
                            ": KO a card from your discard pile."
                        ],
                    ]
                },
                {
                    name: "Scarlet Samurai",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/clan_yashida_03.png",
                    qtd: 2,
                    vAttack: "3",
                    vAttackAsterisk: true,
                    hc: 2,
                    team: 8,
                    attack: "2",
                    overrideType: 1,
                    abilities: [
                        { keyword: 52 },
                        [
                            { bold: "Fight" },
                            ": Gain this as a Hero."
                        ],
                        { divider: true },
                        [
                            { hc: 2 },
                            ": Draw a card."
                        ],
                    ]
                },
                {
                    name: "Lord Shingen",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/clan_yashida_02.png",
                    qtd: 2,
                    vAttack: "4",
                    vAttackAsterisk: true,
                    vp: "5",
                    abilities: [
                        { keyword: 52 },
                        [
                            { bold: "Ambush" },
                            ": Lord Shingen captures a Bystander.",
                        ],
                        [
                            "Bystanders held by Lord Shingen are “Samurai Bodyguards.“ You can't fight Lord Shingen while he has any Bodyguards. You can fight them as if they were ",
                            { bold: "3" },
                            { icon: 1 },
                            " Villains with “",
                            { keyword: 52 },
                            ". ",
                            { bold: "Fight" },
                            ": Rescue this as a Bystander.“",
                        ],
                    ]
                },
                {
                    name: "Gorgon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/clan_yashida_01.png",
                    qtd: 2,
                    vAttack: "5",
                    vAttackAsterisk: true,
                    vp: "4",
                    abilities: [
                        { keyword: 52 },
                        [
                            { bold: "Ambush" },
                            ": Choose a Hero Name. You can't play Heroes this turn unless they are that Hero Name or grey Heroes."
                        ],
                        [
                            { bold: "Fight" },
                            ": KO one of your Heroes."
                        ],
                    ]
                },
            ]
        },
    ],
    schemes: [
        {
            id: 142,
            name: "Hack Cerebro Servers To...",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/mc_scheme_02.png",
            cards: [
                {
                    veiled: true,
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 10 Twists.",
                        ],
                        [
                            { bold: "Twist 1-5" },
                            ": Put a card from the Bystander Stack next to this Scheme as a “Hacker.“ KO a Hero from the HQ with cost equal to the number of Hackers. If you KO'd a Hero this way, stack this Twist next to the Mastermind as “Stolen Cerebro Data.“"
                        ],
                        [
                            { bold: "Twist 6" },
                            ": Put the Hackers on the bottom of the Bystander Stack. This Scheme ",
                            { rule: 13, text: "Transforms", keywordStyle: true },
                            " into a random ",
                            { rule: 13, text: "Unveiled Scheme" },
                            ". Do its Twist effect."
                        ],
                    ]
                },
            ]
        },
        {
            id: 143,
            name: "...Control the Mutant Messiah",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/mc_scheme_02_1.png",
            sortName: "Control the Mutant Messiah",
            cards: [
                {
                    unveiled: true,
                    abilities: [
                        [
                            { bold: "When revealed" },
                            ": Twists stacked next to the Mastermind are “Manipulations.“ Shuffle a random extra Hero into a face down “Mutant Messiah“ stack.",
                        ],
                        [
                            { bold: "Twist" },
                            ": Add this Twist to the Manipulations. ",
                            { keyword: 32 },
                            " the Mutant Messiah stack for a card and set it aside. This turn you may gain that card to the top of your deck by spending ",
                            { icon: 2 },
                            " equal to its cost, ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each Manipulation. If you don't, then put that card into a “Fallen Messiah“ stack next to the Scheme."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 3 cards in the Fallen Messiah stack or the Villain Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 144,
            name: "Drain Mutant Powers To...",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/mc_scheme_01.png",
            cards: [
                {
                    veiled: true,
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists.",
                        ],
                        [
                            { bold: "Twist 1-6" },
                            ": Stack the top two cards of the ",
                            { rule: 11, text: "Sidekick" },
                            " Stack face down next to the Scheme as “Kidnapped Mutants.“ If there were any Kidnapped Mutants already there, put those on the bottom of the ",
                            { rule: 11, text: "Sidekick" },
                            " Stack and put this Twist next to the Mastermind as a “Drained Power.“"
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Playes may spend ",
                            { bold: "3" },
                            { icon: 2 },
                            " or ",
                            { bold: "3" },
                            { icon: 1 },
                            " to gain a Kidnapped Mutant."
                        ],
                        [
                            { bold: "Twist 7" },
                            ": KO all Kidnapped Mutants. This Scheme ",
                            { rule: 13, text: "Transforms", keywordStyle: true },
                            " into a random ",
                            { rule: 13, text: "Unveiled Scheme" },
                            ". Do its Twist effect."
                        ],
                    ]
                },
            ]
        },
        {
            id: 145,
            name: "...Open Rifts to Future Timelines",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/mc_scheme_01_1.png",
            sortName: "Open Rifts to Future Timelines",
            cards: [
                {
                    unveiled: true,
                    abilities: [
                        [
                            { bold: "When revealed" },
                            ": Shuffle a random additional Villain Group into the Villain Deck. Twists stacked next to the Mastermind are “Temporal Rifts.“",
                        ],
                        [
                            { bold: "Twist" },
                            ": Add this Twist to the Temporal Rifts. Then reveal and set aside cards from the Villain Deck equal to the number of Temporal Rifts. Play a Henchman you revealed, then play the Villain you revealed that is worth the most VP. Shuffle the other set aside cards into the Villain Deck. ",
                            { italic: "(If the Villain Deck runs out during this, that doesn't end the game.)" }
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 7 Temporal Rifts or the Villain Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 146,
            name: "Hire Singularity Investigations To...",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/mc_scheme_03.png",
            cards: [
                {
                    veiled: true,
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 9 Twists.",
                        ],
                        [
                            { bold: "Twist 1-4" },
                            ": If there are any “Singularity Investigators“ in the city, stack this Twist next to the Mastermind as a “Dark Discovery.“ Whether you did that or not, ",
                            { keyword: 32 },
                            " the Bystander Stack for a card and have it enter the city as a “Singularity Investigator“ Villain. It has ",
                            { bold: "6" },
                            { icon: 1 },
                            " and “",
                            { bold: "Fight" },
                            ": Rescue this as a Bystander. Then KO one of your Heroes. Then ",
                            { keyword: 32 },
                            " your deck for a card with a ",
                            { icon: 2 },
                            " icon.“"
                        ],
                        [
                            { bold: "Twist 5" },
                            ": This Scheme ",
                            { rule: 13, text: "Transforms", keywordStyle: true },
                            " into a random ",
                            { rule: 13, text: "Unveiled Scheme" },
                            ". Do its Twist effect."
                        ],
                    ]
                },
            ]
        },
        {
            id: 147,
            name: "...Reveal The Heroes' Evil Clones",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/mc_scheme_03_1.png",
            sortName: "Reveal The Heroes' Evil Clones",
            cards: [
                {
                    unveiled: true,
                    abilities: [
                        [
                            { bold: "When revealed" },
                            ": Twists stacked next to the Mastermind are “Cloning Breakthroughs.“",
                        ],
                        [
                            { bold: "Twist" },
                            ": Add this Twist to the Cloning Breakthroughs. The top card of the Hero Deck enters the city as an “Evil Clone“ Villain. ",
                            { keyword: 72 },
                            " a copy of it from the HQ or Hero Deck as another Evil Clone.",
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Each Evil Clone has ",
                            { icon: 1 },
                            " equal to its cost plus the number of Cloning Breakthroughs. It has “",
                            { bold: "Fight" },
                            ": A player gains this as a Hero. KO one of your Heroes.“"
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 7 Evil Clones in the city and/or Escape Pile, or the Villain Deck or Hero Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 148,
            name: "Raid Gene Banks To...",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/mc_scheme_04.png",
            cards: [
                {
                    veiled: true,
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists.",
                        ],
                        [
                            { bold: "Twist 1-3" },
                            ": If there is a Villain in the Bank, stack this Twist next to the Mastermind as a “Mutant Genome.“ Otherwise, move a Villain from another city space to the Bank."
                        ],
                        [
                            { bold: "Twist 4" },
                            ": This Scheme ",
                            { rule: 13, text: "Transforms", keywordStyle: true },
                            " into a random ",
                            { rule: 13, text: "Unveiled Scheme" },
                            ". Do its Twist effect."
                        ],
                    ]
                },
            ]
        },
        {
            id: 149,
            name: "...Unleash an Anti-Mutant Bioweapon",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/mc_scheme_04_1.png",
            sortName: "Unleash an Anti-Mutant Bioweapon",
            cards: [
                {
                    unveiled: true,
                    abilities: [
                        [
                            { bold: "When revealed" },
                            ": Twists stacked next to the Mastermind are “Bioweapon Adaptations.“",
                        ],
                        [
                            { bold: "Twist" },
                            ": Add this Twist to the Bioweapon Adaptations. Then for each card in that stack, choose a different number from 2-6. KO all Heroes from the HQ that have any of those costs.",
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 15 non-grey Heroes in the KO pile or the Villain Deck or Hero Deck runs out."
                        ],
                    ]
                },
            ]
        },
    ],
    bystanders: [
        {
            id: 49,
            name: "Cloning Technician",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/mc_bystander_cloning_technician.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, ",
                            { keyword: 72 },
                            " the next Hero you recruit this turn that has printed cost 3 or less.",
                        ]
                    ]
                }
            ]
        },
        {
            id: 50,
            name: "Opera Singer",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/mc_bystander_opera_singer.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, ",
                            { keyword: 73 },
                            " a Villain in the Bank or ",
                            { keyword: 73 },
                            " a Hero in the HQ space under the Bank.",
                        ]
                    ]
                }
            ]
        },
        {
            id: 51,
            name: "Private Investigator",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/mc_bystander_private_investigator.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, choose ",
                            { icon: 2 },
                            " or ",
                            { icon: 1 },
                            ". ",
                            { keyword: 32 },
                            " for a card with that icon.",
                        ]
                    ]
                }
            ]
        },
    ],
};
