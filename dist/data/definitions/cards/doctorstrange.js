"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorStrange = void 0;
exports.DoctorStrange = {
    id: 32,
    heroes: [
        {
            id: 235,
            name: "Doctor Strange",
            filterName: "Doctor Strange (DS)",
            team: 1,
            cards: [
                {
                    name: "Wand of Watoomb",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ds_dr_strange_01.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    abilities: [
                        [
                            { keyword: 78 },
                            " — If you drew a card, you may discard Wand of Watoomb to get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Keeper of the Sanctum",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ds_dr_strange_02.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            "If you control an ",
                            { keyword: 13 },
                            ", draw a card."
                        ],
                    ]
                },
                {
                    name: "Book of Cagliostro",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ds_dr_strange_03.png",
                    hc: 2,
                    rarity: 2,
                    cost: 2,
                    abilities: [
                        [
                            { keyword: 78 },
                            " — If you fought a Villain, you may discard Book of Cagliostro to get ",
                            { bold: "+" },
                            { icon: 2 },
                            " equal to that enemy's VP."
                        ],
                    ]
                },
                {
                    name: "The Eye of Agamotto",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ds_dr_strange_04.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    abilities: [
                        [
                            { keyword: 78 },
                            " — If you played another ",
                            { keyword: 13 },
                            " or three other cards of the same Hero Class, you may discard the Eye of Agamotto to get ",
                            { bold: "+7" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                }
            ]
        },
        {
            id: 236,
            name: "Doctor Voodoo",
            team: 1,
            cards: [
                {
                    name: "Commune with the Spirit World",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/doctor_voodoo_01.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "You may discard an ",
                            { keyword: 13 },
                            " you control or three cards from your hand. If you do, KO a card from your hand or discard pile."
                        ],
                    ]
                },
                {
                    name: "Medallion of Many Loas",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/doctor_voodoo_02.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    abilities: [
                        [
                            { keyword: 78 },
                            " — If you have at least three Hero Classes, you may discard Medallion of Many Loas to get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Hero Class you have, including this one."
                        ],
                    ]
                },
                {
                    name: "Staff of Legba",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/doctor_voodoo_03.png",
                    hc: 4,
                    rarity: 2,
                    cost: 5,
                    abilities: [
                        [
                            { keyword: 78 },
                            " — If you recruited a Hero, you may discard Staff of Legba to get ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to that Hero's cost."
                        ],
                    ]
                },
                {
                    name: "Posessed by Brother's Spirit",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/doctor_voodoo_04.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    recruit: "0+",
                    abilities: [
                        [
                            "The first time that one of your Heroes or a Hero from your deck or discard pile is KO'd this turn, you get ",
                            { bold: "+4" },
                            { icon: 2 },
                            " or ",
                            { bold: "+4" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                }
            ]
        },
        {
            id: 237,
            name: "Clea",
            team: 6,
            cards: [
                {
                    name: "Prepare Dark Magic",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/clea_01.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            "Draw a card. Then put a card from your hand on top of your deck."
                        ],
                    ]
                },
                {
                    name: "Demonic Descendant",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/clea_02.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    recruit: "2+",
                    abilities: [
                        [
                            "You may make a ",
                            { keyword: 77 },
                            " to get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Bind the Dark Dimension",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/clea_03.png",
                    hc: 3,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            { hc: 3 },
                            ": You may choose a player to make a ",
                            { keyword: 77 },
                            " to KO up to one Hero of their choice from their hand or discard pile."
                        ],
                    ]
                },
                {
                    name: "The Purple Gem",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/clea_04.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            { keyword: 78 },
                            " — If any cards were “revealed“, “looked at“, or “discarded“ from any deck, you may discard the Purple Gem to get ",
                            { bold: "+6" },
                            { icon: 1 },
                            ". ",
                            { italic: "(Just drawing or playing a card from a deck doesn't count.)" }
                        ],
                    ]
                }
            ]
        },
        {
            id: 238,
            name: "Ancient One, The",
            team: 0,
            cards: [
                {
                    name: "Astral Confrontation",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ancient_one_01.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "You may have a Villain from the city enter the ",
                            { keyword: 76 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Teachings of Kamar-Taj",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ancient_one_02.png",
                    hc: 2,
                    rarity: 1,
                    cost: 5,
                    abilities: [
                        [
                            "Draw two cards."
                        ],
                    ]
                },
                {
                    name: "War of the Mind",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ancient_one_03.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    recruit: "3+",
                    abilities: [
                        [
                            "You may fight the Mastermind using only ",
                            { icon: 2 },
                            " instead of ",
                            { icon: 1 },
                            " this turn."
                        ],
                        [
                            { hc: 1 },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 2 },
                            ".",
                        ],
                    ]
                },
                {
                    name: "The Orb of Agamotto",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ancient_one_04.png",
                    hc: 2,
                    rarity: 3,
                    cost: 8,
                    abilities: [
                        [
                            { keyword: 78 },
                            " — If you fought a Villain or Mastermind, you may set aside the Orb of Agamotto to reveal the top four cards of your deck. KO up to one of them, put two of them in your hand, and put the rest back on top in any order. Then discard the Orb of Agamotto.",
                        ],
                    ]
                }
            ]
        },
        {
            id: 239,
            name: "Vishanti, The",
            team: 0,
            cards: [
                {
                    name: "Oshtur",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/vishanti_01.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            "You may KO a Wound from your hand or discard pile. If you do, draw a card."
                        ],
                    ]
                },
                {
                    name: "Hoggoth",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/vishanti_02.png",
                    hc: 2,
                    rarity: 1,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            "You may make a ",
                            { keyword: 77 },
                            " to get ",
                            { bold: "+2" },
                            { icon: 1 },
                            ".",
                        ],
                    ]
                },
                {
                    name: "Agamotto",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/vishanti_03.png",
                    hc: 3,
                    rarity: 2,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            "Reveal the top card of your deck. Discard it or put it back."
                        ],
                        [
                            { hc: 3 },
                            ": You may choose a player to make a ",
                            { keyword: 77 },
                            " to draw two extra cards at the end of this turn.",
                        ],
                    ]
                },
                {
                    name: "The Book of the Vishanti",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/vishanti_04.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            { keyword: 78 },
                            " — If any player gained a Wound, you may set aside the Book of the Vishanti to KO up to one Wound from any player's discard pile, then draw three cards. Then discard the Book of the Vishanti. You can use this during any player's turn.",
                        ],
                    ]
                }
            ]
        },
    ],
    masterminds: [
        {
            id: 81,
            name: "Nightmare",
            vAttack: "6",
            vp: 6,
            cards: [
                {
                    name: "Nightmare",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nightmare_01.png",
                    abilities: [
                        [
                            "When you fight Nightmare in the ",
                            { keyword: 76 },
                            ", instead of revealing a Tactic, KO one of your Heroes and Nightmare moves to the Mastermind Space."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Fear Lords"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Nightmare enters the ",
                            { keyword: 76 },
                            ". If he was already there, each player discards a random card."
                        ],
                        [
                            { bold: "Escape" },
                            ": Each player KOs one of their non-grey Heroes. Nightmare moves to the Mastermind space.",
                        ],
                    ]
                },
                {
                    name: "Epic Nightmare",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nightmare_02.png",
                    vAttack: "8",
                    epic: true,
                    abilities: [
                        [
                            "When you fight Nightmare in the ",
                            { keyword: 76 },
                            ", instead of revealing a Tactic, KO one of your Heroes and Nightmare moves to the Mastermind Space."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Fear Lords"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Nightmare enters the ",
                            { keyword: 76 },
                            ". If he was already there, each player discards two random cards."
                        ],
                        [
                            { bold: "Escape" },
                            ": Each player KOs one of their non-grey Heroes. Nightmare moves to the Mastermind space.",
                        ],
                    ]
                },
                {
                    name: "Don't Fall Asleep",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nightmare_04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player discards two cards with ",
                            { icon: 2 },
                            " icons. Nightmare enters the ",
                            { keyword: 76 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Dream Weaver",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nightmare_05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": For each of your ",
                            { hc: 3 },
                            " Heroes, rescue a Bystander. Nightmare enters the ",
                            { keyword: 76 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Night Terrors",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nightmare_06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals a ",
                            { hc: 1 },
                            " Hero or gains a Wound. Nightmare enters the ",
                            { keyword: 76 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Deadly Waking Nightmares",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/nightmare_03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player KOs one of their non-grey Heroes. Each player who KO'd a Hero this way draws a card. Nightmare enters the ",
                            { keyword: 76 },
                            "."
                        ],
                    ]
                },
            ]
        },
        {
            id: 82,
            name: "Dormammu",
            vAttack: "11",
            vp: 6,
            cards: [
                {
                    name: "Dormammu",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dormammu_01.png",
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Lords of the Netherworld"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player makes a ",
                            { keyword: 77 },
                            " with Dormammu to discard down to four cards."
                        ],
                    ]
                },
                {
                    name: "Epic Dormammu",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dormammu_02.png",
                    vAttack: "13",
                    epic: true,
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Lords of the Netherworld"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player reveals the top card of their deck and discards it if it costs 0. Then each player makes a ",
                            { keyword: 77 },
                            " with Dormammu to discard down to three cards."
                        ],
                    ]
                },
                {
                    name: "Demonic Hellfire",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dormammu_04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player makes a ",
                            { keyword: 77 },
                            " with Dormammu to KO a non-grey Hero from their discard pile."
                        ],
                    ]
                },
                {
                    name: "Flames of Regency",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dormammu_05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player makes a ",
                            { keyword: 77 },
                            " with Dormammu to discard a card with an ",
                            { icon: 1 },
                            " icon."
                        ],
                    ]
                },
                {
                    name: "Barter for Souls",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dormammu_03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose a player to make a ",
                            { keyword: 77 },
                            " with Dormammu to gain a Hero from the HQ that costs 6 or less."
                        ],
                    ]
                },
                {
                    name: "Torments of the Dark Dimension",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dormammu_06.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player makes a ",
                            { keyword: 77 },
                            " with Dormammu to gain a 0-cost Hero from the KO pile."
                        ],
                    ]
                },
            ]
        }
    ],
    villains: [
        {
            id: 102,
            name: "Fear Lords",
            cards: [
                {
                    name: "Nox",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/fear_lords_03.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": KO one of your Heroes. Then, if Nox was in the city, she enters the ",
                            { keyword: 76 },
                            " and captures a Bystander."
                        ],
                    ]
                },
                {
                    name: "D'Spayre",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/fear_lords_01.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": D'Spayre enters the ",
                            { keyword: 76 },
                            " and captures a Bystander."
                        ],
                        [
                            { bold: "Fight" },
                            ": KO a Hero. Then, if D'Spayre was in the ",
                            { keyword: 76 },
                            ", he enters the city, ignoring his Ambush ability."
                        ],
                    ]
                },
                {
                    name: "Dreamstalker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/fear_lords_02.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Draw two cards. Then, if Dreamstalker was in the city, it enters the ",
                            { keyword: 76 },
                            "."
                        ],
                        [
                            { bold: "Escape" },
                            ": Each player discards down to four cards.",
                        ],
                    ]
                },
                {
                    name: "The Lurking Unknown",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/fear_lords_04.png",
                    qtd: 2,
                    vAttack: "2",
                    vp: "3",
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Reveal the top card of the Hero Deck. You may spend ",
                            { icon: 2 },
                            " equal to that card's cost to have the player of your choice gain that Hero. If you don't, the Lurking Unknown enters the ",
                            { keyword: 76 },
                            { italic: " (even if it was already there)." },
                        ],
                        [
                            { bold: "Escape" },
                            ": Reveal the top card of the Hero Deck. Each player reveals their hand and KOs a Hero with that cost."
                        ],
                    ]
                },
            ]
        },
        {
            id: 103,
            name: "Lords of the Netherworld",
            cards: [
                {
                    name: "Mindless Ones",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/lords_of_the_netherworld_02.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": Mindless Ones capture the rightmost Hero in the HQ that costs 4 or less."
                        ],
                        [
                            { bold: "Fight" },
                            ": Choose a player to make a ",
                            { keyword: 77 },
                            " with the Lords of the Netherworld to gain that Hero."
                        ],
                    ]
                },
                {
                    name: "Baron Mordo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/lords_of_the_netherworld_01.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose a player to make a ",
                            { keyword: 77 },
                            " with Baron Mordo to draw two extra cards at the end of this turn."
                        ],
                    ]
                },
                {
                    name: "Satana Hellstrom",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/lords_of_the_netherworld_03.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose a player to make a ",
                            { keyword: 77 },
                            " with Satana Hellstrom to rescue three Bystanders."
                        ],
                    ]
                },
                {
                    name: "Satannish",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/lords_of_the_netherworld_04.png",
                    qtd: 1,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": Choose a player to make a ",
                            { keyword: 77 },
                            " with Satannish to reveal the top card of the Hero Deck and gain it if it costs 4 or less.",
                        ],
                        [
                            { bold: "Fight" },
                            ": Same effect, but cost 6 or less.",
                        ],
                        [
                            { bold: "Escape" },
                            ": Same effect, but cost 2 or less."
                        ],
                    ]
                },
                {
                    name: "Umar",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/lords_of_the_netherworld_05.png",
                    qtd: 1,
                    vAttack: "7",
                    vp: "5",
                    abilities: [
                        [
                            { bold: "Ambush" },
                            ": Choose a player to make a ",
                            { keyword: 77 },
                            " with Umar to KO a Hero of their choice from the HQ.",
                        ],
                        [
                            { bold: "Fight" },
                            ": Choose a player to make a ",
                            { keyword: 77 },
                            " with Umar to gain a Hero of their choice that costs 6 or less from the KO pile.",
                        ],
                        [
                            { bold: "Escape" },
                            ": Same as Fight effect, but cost 0."
                        ],
                    ]
                },
            ]
        },
    ],
    schemes: [
        {
            id: 150,
            name: "War for the Dream Dimension",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/ds_scheme_04.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 7 Twists. Add an extra Villain Group.",
                        ],
                        [
                            { bold: "Twist" },
                            ": Reveal the top two cards of the Villain Deck. The Villain you revealed with the highest printed ",
                            { icon: 1 },
                            " enters the ",
                            { keyword: 76 },
                            ". ",
                            { italic: "(It does not do any Ambush abilities.)" },
                            " If you revealed a second Villain this way, that Villain enters the city. Put the rest of the revealed cards back in any order."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 3 Villains per player in the Escape Pile or the Villain Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 151,
            name: "Claim Souls for Demons",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/ds_scheme_01.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists.",
                        ],
                        [
                            { bold: "Twist 1-3" },
                            ": Each player makes a ",
                            { keyword: 77 },
                            " to rescue a Bystander. If that Bargain wounds that player, stack that Bystander next to the Scheme as a “Tormented Soul“ instead."
                        ],
                        [
                            { bold: "Twist 4-8" },
                            ": Each player makes a ",
                            { keyword: 77 },
                            "  to gain a S.H.I.E.L.D. Officer. If that Bargain wounds that player, stack that Officer next to the Scheme as a “Tormented Soul“ instead."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the number of Tormented Souls is four times the number of players."
                        ],
                    ]
                },
            ]
        },
        {
            id: 152,
            name: "Cursed Pages of the Darkhold Tome",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/ds_scheme_02.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists, representing Cursed Pages of the Darkhold Tome. Add an extra Villain Group.",
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Cursed Pages are ",
                            { keyword: 78, text: "Ritual Artifacts" },
                            " with “If you fought a Villain or Mastermind, you may discard this to get ",
                            { bold: "+3" },
                            { icon: 2 },
                            ".“"
                        ],
                        [
                            { bold: "Twist" },
                            ": Put this Cursed Page next to the Mastermind, plus a Cursed Page from any player's control or discard pile or the KO pile. For this turn only, the first time you fight a Villain or Mastermind, put one of the Mastermind's Cursed Pages into your discard pile."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the Mastermind has 7 Cursed Pages at the end of any player's turn or the Villain Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 153,
            name: "Duels of Science and Magic",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/ds_scheme_03.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 2 players: 9 Twists. 1 or 4 players: 10 Twists. 3 or 5 players: 11 Twists.",
                        ],
                        [
                            { bold: "Twist 1, 3, and 5" },
                            ": “Duel of Science“: Each player reveals a ",
                            { hc: 5 },
                            " or ",
                            { hc: 3 },
                            " Hero or discards down to 4 cards. If at least half the players ",
                            { italic: "(round up)" },
                            " failed to reveal, put this Twist next to the Mastermind as a “Duel Won.“"
                        ],
                        [
                            { bold: "Twist 2, 4, and 6" },
                            ": “Duel of Magic“: Same effect, but with ",
                            { hc: 2 },
                            " or ",
                            { hc: 1 },
                            "."
                        ],
                        [
                            { bold: "Twist 7-11" },
                            ": “Duel of Science and Magic“: Same effect, but each player must reveal at least three of these colors: ",
                            { hc: 2 },
                            ", ",
                            { hc: 1 },
                            ", ",
                            { hc: 5 },
                            ", ",
                            { hc: 3 },
                            "."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the Mastermind has won 5 Duels."
                        ],
                    ]
                },
            ]
        },
    ]
};
