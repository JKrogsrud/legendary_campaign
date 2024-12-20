"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesOfAsgard = void 0;
exports.HeroesOfAsgard = {
    id: 26,
    heroes: [
        {
            id: 198,
            name: "Beta Ray Bill",
            team: 21,
            cards: [
                {
                    name: "Hope of the Korbinites",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/beta-ray-bill-04-1.png",
                    hc: 4,
                    rarity: 1,
                    cost: 1,
                    recruit: "2",
                    abilities: [
                        "To play this, you must discard a card.",
                        [
                            "Then, if you are ",
                            { keyword: 63 },
                            ", draw a card."
                        ]
                    ]
                },
                {
                    name: "Bio-Engineered Cyborg",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/beta-ray-bill-02-1.png",
                    hc: 5,
                    rarity: 1,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        "You may discard a card. If you do, draw a card."
                    ]
                },
                {
                    name: "Stormbreaker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/beta-ray-bill-03-1.png",
                    hc: 3,
                    rarity: 2,
                    cost: 4,
                    abilities: [
                        [
                            "You cannot throw Stormbreaker unless you are ",
                            { keyword: 63 },
                            "."
                        ],
                        [
                            { keyword: 14 },
                            " — To throw this, you must discard a card from your hand. Then you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each card you discarded from your hand this turn."
                        ]
                    ]
                },
                {
                    name: "The Warship Skuttlebutt",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/beta-ray-bill-01-1.png",
                    hc: 5,
                    rarity: 3,
                    cost: 8,
                    attack: "4",
                    abilities: [
                        [
                            "You may discard a card. Then count the number of cards you discarded from your hand this turn. Draw that many cards."
                        ]
                    ]
                },
            ]
        },
        {
            id: 199,
            name: "Lady Sif",
            team: 21,
            cards: [
                {
                    name: "Dimensional Blade",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/lady-sif-04-1.png",
                    hc: 2,
                    rarity: 1,
                    cost: 2,
                    abilities: [
                        [
                            { keyword: 14 },
                            " — When you throw this you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " and ",
                            { bold: "+1" },
                            { icon: 1 },
                            ".",
                        ]
                    ]
                },
                {
                    name: "Weapons Master",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/lady-sif-02-1.png",
                    hc: 2,
                    rarity: 1,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            "If you control any Artifacts, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Winged Helm",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/lady-sif-03-1.png",
                    hc: 4,
                    rarity: 2,
                    cost: 3,
                    abilities: [
                        [
                            { keyword: 14 },
                            " — You may throw this to get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            "During any player's turn, if a player would gain a Wound, you may throw this to prevent that Wound and draw two cards instead."
                        ]
                    ]
                },
                {
                    name: "Golden Apples of Idunn",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/lady-sif-01-1.png",
                    hc: 1,
                    rarity: 3,
                    cost: 7,
                    abilities: [
                        [
                            { keyword: 14 },
                            " — When you throw this, you get ",
                            { bold: "+4" },
                            { icon: 1 },
                            " and you may KO a card from your hand or discard pile."
                        ]
                    ]
                },
            ]
        },
        {
            id: 200,
            name: "Thor",
            filterName: "Thor (HoA)",
            team: 21,
            cards: [
                {
                    name: "Test of Virtue",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thor-04-1%20%282%29.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    recruit: "2",
                    abilities: [
                        [
                            "If you are ",
                            { keyword: 63 },
                            ", you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            ".",
                        ]
                    ]
                },
                {
                    name: "Divine Lightning",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thor-02-1%20%282%29.png",
                    hc: 3,
                    rarity: 1,
                    cost: 5,
                    attack: "3+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other card you played this turn that makes you ",
                            { keyword: 63 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Mjolnir",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thor-03-1%20%282%29.png",
                    hc: 4,
                    rarity: 2,
                    cost: 4,
                    abilities: [
                        [
                            "You cannot throw Mjolnir unless you are ",
                            { keyword: 63 },
                            "."
                        ],
                        [
                            { keyword: 14 },
                            " — When you throw this, you get ",
                            { bold: "+3" },
                            { icon: 1 },
                            ", then you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each ",
                            { hc: 3 },
                            " Hero you played this turn."
                        ]
                    ]
                },
                {
                    name: "Royal Decree",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thor-01-1%20%282%29.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    attack: "5",
                    abilities: [
                        [
                            { team: 21 },
                            ": Each player who is ",
                            { keyword: 63 },
                            " draws a card. Each Villain that isn't worth at least 5VP gets ",
                            { bold: "-1" },
                            { icon: 1 },
                            " this turn."
                        ]
                    ]
                },
            ]
        },
        {
            id: 201,
            name: "Valkyrie",
            team: 21,
            cards: [
                {
                    name: "Dragonfang",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/valkyrie-04-1.png",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    abilities: [
                        [
                            { keyword: 14 },
                            " — When you throw this, you get ",
                            { keyword: 49, text: "Sewers Conqueror 2" },
                            ".",
                        ]
                    ]
                },
                {
                    name: "Flying Stallion",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/valkyrie-03-1.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        { keyword: 49, text: "Rooftops Conqueror 1" },
                        [
                            "When an Ambush ability is played, before it takes effect, you may discard this card. If you do, draw two extra cards at the end of this turn."
                        ]
                    ]
                },
                {
                    name: "Usher to Valhalla",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/valkyrie-02-1.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "2+",
                    abilities: [
                        { keyword: 49, text: "Bridge Conqueror 1" },
                        [
                            { team: 21 },
                            ": The first time you defeat a Villain this turn, you may KO one of your cards or a card from your discard pile."
                        ]
                    ]
                },
                {
                    name: "Ride of the Valkyries",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/valkyrie-01-1.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    abilities: [
                        { keyword: 49, text: "Streets Conqueror 1" },
                        [
                            { hc: 2 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for every 4 Heroes in the KO pile."
                        ]
                    ]
                },
            ]
        },
        {
            id: 202,
            name: "Warriors Three, The",
            team: 21,
            cards: [
                {
                    name: "Fandral the Dashing",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warriors-three-04-1.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        "You may move a Villain to an adjacent city space. If another Villain is already there, swap them.",
                        [
                            { hc: 1 },
                            ": Draw a card.",
                        ]
                    ]
                },
                {
                    name: "Hogun the Grim",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warriors-three-03-1.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 4 },
                            ": You may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Volstagg the Valiant",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warriors-three-02-1.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "3+",
                    abilities: [
                        { keyword: 49, text: "Bridge Conqueror 1" },
                        [
                            { hc: 2 },
                            ": Instead, ",
                            { keyword: 49, text: "Bridge Conqueror 3" },
                        ]
                    ]
                },
                {
                    name: "Three Stand as One",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/warriors-three-01-1.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "4+",
                    abilities: [
                        [
                            "If you played at least three other non-grey Heroes with different card names this turn, you get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ],
                        [
                            { team: 21 },
                            ": ",
                            { keyword: 49, text: "Streets Conqueror 3" }
                        ]
                    ]
                },
            ]
        },
    ],
    masterminds: [
        {
            id: 67,
            name: "Hela, Goddess of Death",
            tacticName: "Hela",
            vAttack: "10",
            vp: 6,
            cards: [
                {
                    name: "Hela, Goddess of Death",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hela-01.png",
                    vAttack: "10+",
                    abilities: [
                        { keyword: 49, text: "Bridge Conqueror 5, Streets Conqueror 5" },
                        [
                            { bold: "Always Leads" },
                            ": Omens of Ragnarok"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": This Strike enters the city as a ",
                            { bold: "5" },
                            { icon: 1 },
                            " “Army of the Dead“ Villain worth 3VP. Then choose a Villain worth 3VP or more from your Victory Pile ",
                            { italic: "(including an Army of the Dead)" },
                            " to enter the city. If you didn't have any, each player gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Epic Hela, Goddess of Death",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hela-02.png",
                    vAttack: "12+",
                    epic: true,
                    abilities: [
                        { keyword: 49, text: "Bridge Conqueror 6, Streets Conqueror 6, Rooftops Conqueror 6" },
                        [
                            { bold: "Always Leads" },
                            ": Omens of Ragnarok"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": This Strike enters the city as a ",
                            { bold: "6" },
                            { icon: 1 },
                            " “Army of the Dead“ Villain worth 4VP. Then choose a Villain worth 4VP or more from your Victory Pile ",
                            { italic: "(including an Army of the Dead)" },
                            " to enter the city. If you didn't have any, each player gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Hela's Cloak",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hela-06.png",
                    tactic: true,
                    vAttack: "+2",
                    vp: -1,
                    overrideType: 4,
                    overrideSubType: 3,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue 4 Bystanders. Hela captures this card as a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            "."
                        ],
                        { divider: true },
                        [
                            { keyword: 13 },
                            " - Once during each player's turn, if you would gain a Wound, you may draw a card instead."
                        ]
                    ]
                },
                {
                    name: "The Nightsword",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hela-05.png",
                    tactic: true,
                    vAttack: "+3",
                    vp: -1,
                    overrideType: 4,
                    overrideSubType: 3,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue 4 Bystanders. Hela captures this card as a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            "."
                        ],
                        { divider: true },
                        [
                            { keyword: 14 },
                            " - When you throw this, you get ",
                            { keyword: 49, text: "Bridge Conqueror 3" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Seize Bifrost, The Rainbow Bridge",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hela-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Reveal the top card of the Villain Deck. If it's a Villain, that Villain enters the Bridge or Streets, if one of those spaces is empty."
                        ]
                    ]
                },
                {
                    name: "Naglfar, Longship of Fingernails",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/hela-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": The player on your right reveals the Villain from their Victory Pile that's worth the most VP. That Villain enters the Bridge or Streets, if one of those spaces is empty."
                        ]
                    ]
                }
            ]
        },
        {
            id: 68,
            name: "Malekith the Accursed",
            tacticName: "Malekith",
            vAttack: "8",
            vp: 6,
            cards: [
                {
                    name: "Malekith the Accursed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/malekith-01.png",
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Dark Council"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Malekith captures a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            " from the city or from any player's control or discard pile. Then this Master Strike enters the city as a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            " called “Darkspear“ that gives ",
                            { bold: "+2" },
                            { icon: 1 },
                            ". When you gain a Darkspear, it becomes a ",
                            { keyword: 14 },
                            " that gives ",
                            { bold: "+2" },
                            { icon: 1 },
                            " when thrown."
                        ]
                    ]
                },
                {
                    name: "Epic Malekith the Accursed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/malekith-02.png",
                    vAttack: "10",
                    epic: true,
                    abilities: [
                        [
                            { bold: "Always Leads" },
                            ": Dark Council"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Malekith captures a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            " from the city, then captures one from any player's control or discard pile. Then this Master Strike enters the city as a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            " called “Darkspear“ that gives ",
                            { bold: "+3" },
                            { icon: 1 },
                            ". When you gain a Darkspear, it becomes a ",
                            { keyword: 14 },
                            " that gives ",
                            { bold: "+2" },
                            { icon: 1 },
                            " when thrown."
                        ]
                    ]
                },
                {
                    name: "Black Hammer of the Accursed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/malekith-03.png",
                    tactic: true,
                    vAttack: "+4",
                    vp: -1,
                    overrideType: 4,
                    overrideSubType: 3,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue 4 Bystanders. Malekith captures a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            " from the city or from any player's control or discard pile. The this Tactic enters the city as a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            "."
                        ],
                        { divider: true },
                        [
                            { keyword: 13 },
                            " - Once per turn, you may KO a Hero from your discard pile."
                        ]
                    ]
                },
                {
                    name: "Dagger of Living Abyss",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/malekith-04.png",
                    tactic: true,
                    vAttack: "+2",
                    vp: -1,
                    overrideType: 4,
                    overrideSubType: 3,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue 4 Bystanders. Malekith captures a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            " from the city or from any player's control or discard pile. The this Tactic enters the city as a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            "."
                        ],
                        { divider: true },
                        [
                            { keyword: 13 },
                            " - Once per turn, you may defeat a Villain worth 2VP or less."
                        ]
                    ]
                },
                {
                    name: "The Hunting Horn of Faerie",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/malekith-06.png",
                    tactic: true,
                    vAttack: "+3",
                    vp: -1,
                    overrideType: 4,
                    overrideSubType: 3,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue 4 Bystanders. Malekith captures a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            " from the city or from any player's control or discard pile. The this Tactic enters the city as a ",
                            { keyword: 82, text: "Villainous Weapon" },
                            "."
                        ],
                        { divider: true },
                        [
                            { keyword: 13 },
                            " - Once per turn, draw a card."
                        ]
                    ]
                },
                {
                    name: "Vulnerable to Cold Iron",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/malekith-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            " for each ",
                            { hc: 5 },
                            " Hero you have."
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 86,
            name: "Dark Council",
            cards: [
                {
                    name: "Laufey, Father Of Loki",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-council-01.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Laufey captures The Casket of Ancient Winters from any Villain, Mastermind, player's control, or discard pile."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": If Laufey holds The Casket of Ancient Winters, say “Fimbulwinter has come,“ and each player discards down to 3 cards."
                        ]
                    ]
                },
                {
                    name: "The Mangog",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-council-02.png",
                    qtd: 1,
                    vp: "4",
                    vAttack: "3+",
                    abilities: [
                        [
                            "The Mangog gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Villain in the Victory Pile of the player on your right."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player who is not ",
                            { keyword: 63 },
                            " gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Ulik, The Troll",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-council-03.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "3+",
                    abilities: [
                        [
                            "Ulik gets ",
                            { bold: "+2" },
                            { icon: 1 },
                            " if you are not ",
                            { keyword: 63 },
                            "."
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
                    name: "Sindr, Fire Giant Queen",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-council-04.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "5",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": If you are ",
                            { keyword: 63 },
                            ", you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Jarnbjorn, First Axe of Thor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-weapon-01.png",
                    qtd: 1,
                    vAttack: "+3",
                    subType: 3,
                    abilities: [
                        { keyword: 82, text: "Villainous Weapon" },
                        { divider: true },
                        [
                            { keyword: 14, text: "Thrown Artifact -" },
                            " When you throw this, you get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "The Casket of Ancient Winters",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-weapon-02.png",
                    qtd: 1,
                    vAttack: "+4",
                    subType: 3,
                    abilities: [
                        { keyword: 82, text: "Villainous Weapon" },
                        { divider: true },
                        [
                            { keyword: 13, text: "Artifact -" },
                            " Once per turn, if you are ",
                            { keyword: 63 },
                            ", you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                }
            ]
        },
        {
            id: 87,
            name: "Omens of Ragnarok",
            cards: [
                {
                    name: "The Eternal Flame",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/omens-weapon-01.png",
                    qtd: 1,
                    vAttack: "+4",
                    subType: 3,
                    abilities: [
                        { keyword: 82, text: "Villainous Weapon" },
                        [
                            {
                                bold: "Ambush"
                            },
                            ": If Surtur is in the city, he captures The Eternal Flame. If a player controls “Surtur's Crown“, that card enters the city as the Villain Surtur and captures The Eternal Flame."
                        ],
                        { divider: true },
                        [
                            { keyword: 13, text: "Artifact -" },
                            " Once per turn, return a 0-cost card from your discard pile to your hand."
                        ]
                    ]
                },
                {
                    name: "The Hel-Crown",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/omens-weapon-02.png",
                    qtd: 1,
                    vAttack: "+3",
                    subType: 3,
                    abilities: [
                        { keyword: 82, text: "Villainous Weapon" },
                        { divider: true },
                        [
                            { keyword: 13, text: "Artifact -" },
                            " Once per turn, you get ",
                            { keyword: 49, text: "Streets Conqueror 1" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Skurge, The Executioner",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/omens-of-ragnarok-01.png",
                    qtd: 2,
                    vp: "2",
                    vAttack: "4+",
                    abilities: [
                        { keyword: 49, text: "Bridge Conqueror 3" },
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes."
                        ]
                    ]
                },
                {
                    name: "Surtur, Fire Giant King",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/omens-of-ragnarok-02.png",
                    qtd: 1,
                    vAttack: "6",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Put this into your discard pile as a “Surtur's Crown“ Artifact."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": If Surtur was holding The Eternal Flame, say “Ragnarok has come“, KO each ",
                            { team: 21 },
                            " Hero from the HQ, and each player gains two Wounds."
                        ],
                        { divider: true },
                        [
                            { keyword: 13, text: "Artifact -" },
                            " Once per turn, you get ",
                            { keyword: 49, text: "Sewers Conqueror 1" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Jormungand, The World-Serpent",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/omens-of-ragnarok-03.png",
                    qtd: 1,
                    vp: "5",
                    vAttack: "5+",
                    abilities: [
                        { keyword: 49, text: "Sewers Conqueror 1" },
                        { keyword: 49, text: "Bank Conqueror 1" },
                        { keyword: 49, text: "Rooftops Conqueror 1" },
                        { keyword: 49, text: "Streets Conqueror 1" },
                        { keyword: 49, text: "Bridge Conqueror 1" },
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each Hero currently in the HQ costs 1 less this turn."
                        ]
                    ]
                },
                {
                    name: "The Fenris Wolf",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/omens-of-ragnarok-04.png",
                    qtd: 2,
                    vp: "3",
                    vAttack: "4+",
                    abilities: [
                        { keyword: 49, text: "Streets Conqueror 2" },
                        [
                            {
                                bold: "Ambush"
                            },
                            ": The Fenris Wolf moves forward to the Rooftops, pushing other Villains forward as normal."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 122,
            name: "Asgardian Test of Worth",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/116Scheme(25).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists."
                        ],
                        [
                            { bold: "Twist 1-7" },
                            ": Each player who is not ",
                            { keyword: 63 },
                            " discards a card. Then, if at least half the players ",
                            { italic: "(round up)" },
                            " are not ",
                            { keyword: 63 },
                            ", put this Twist next to the Scheme as a “Moral Failing.“"
                        ],
                        [
                            { bold: "Twist 8-11" },
                            ": Put this Twist next to the Scheme as a “Moral Failing.“"
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 5 Moral Failings."
                        ],
                    ]
                },
            ]
        },
        {
            id: 123,
            name: "Dark World of Svartalfheim, The",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/118Scheme(111).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 10 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Put this Twist next to a city space of HQ space that doesn't already have one, as “Eternal Darkness.“"
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Villains in city spaces with Eternal Darkness get ",
                            { bold: "+1" },
                            { icon: 1 },
                            ". To recruit a Hero in an HQ space with Eternal Darkness, you must pay an extra ",
                            { bold: "1" },
                            { icon: 2 },
                            "."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When all city spaces or all HQ spaces are covered in Eternal Darkness."
                        ],
                    ]
                },
            ]
        },
        {
            id: 124,
            name: "War of the Frost Giants",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/119Scheme(112).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 9 Twists."
                        ],
                        [
                            { bold: "Twist 1-7" },
                            ": This Twist enters the city as a “Frost Giant Invader“ Villain worth 6VP with ",
                            { bold: "6" },
                            { icon: 1 },
                            " and the ability “If you are not ",
                            { keyword: 63 },
                            ", this gets ",
                            { bold: "+4" },
                            { icon: 1 },
                            ".“"
                        ],
                        [
                            { bold: "Twist 8-9" },
                            ": Same effect, then a Frost Giant Invader from each player's Victory Pile enters the city."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 5 Frost Giant Invaders in the city and/or Escape Pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 125,
            name: "Ragnarok, Twilight of the Gods",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/117Scheme(26).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Choose a Villain from your Victory Pile worth at least 2VP to enter the city. Then, if the total ",
                            { icon: 1 },
                            " of Villains in the city is at least as high as the Guardian ",
                            { icon: 1 },
                            " listed below, put this Twist next to the Scheme as a “Guardian Defeated.“"
                        ],
                        [
                            { bold: "Twist 1" },
                            ": Balder, 11",
                            { icon: 1 }
                        ],
                        [
                            { bold: "Twist 2" },
                            ": Odin, 24",
                            { icon: 1 }
                        ],
                        [
                            { bold: "Twist 3" },
                            ": Vidar, 19",
                            { icon: 1 }
                        ],
                        [
                            { bold: "Twist 4" },
                            ": Tyr, 16",
                            { icon: 1 }
                        ],
                        [
                            { bold: "Twist 5" },
                            ": Heimdall, 12",
                            { icon: 1 }
                        ],
                        [
                            { bold: "Twist 6" },
                            ": Frey, 7",
                            { icon: 1 }
                        ],
                        [
                            { bold: "Twist 7" },
                            ": Frigga, 8",
                            { icon: 1 }
                        ],
                        [
                            { bold: "Twist 8-11" },
                            ": Warriors of Valhalla, 6",
                            { icon: 1 }
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 5 Guardians Defeated."
                        ],
                    ]
                },
            ]
        },
    ]
};
