"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackWidow = void 0;
exports.BlackWidow = {
    id: 35,
    heroes: [
        {
            id: 250,
            name: "Black Widow",
            filterName: "Black Widow (BW)",
            team: 2,
            cards: [
                {
                    name: "Evasive Acrobatics",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackWidowShield_2Common.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 10 }
                        ],
                        [
                            "When you ",
                            { keyword: 10 },
                            " with or play this card, you may also ",
                            { keyword: 10 },
                            " with another card from your hand."
                        ]
                    ]
                },
                {
                    name: "Widow's Bite",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackWidowShield_3Common.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    attack: "1+",
                    abilities: [
                        [
                            { keyword: 10 },
                        ],
                        [
                            { keyword: 58 },
                        ]
                    ]
                },
                {
                    name: "Weave a Web of Spies",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackWidowShield_4Uncommon.png",
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 10 },
                        ],
                        [
                            "If you drew any cards this turn, you may send one of your other Heroes ",
                            { keyword: 60 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Infiltrate the Conspiracy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackWidowShield_1Rare.png",
                    hc: 3,
                    rarity: 3,
                    cost: 7,
                    attack: "4+",
                    abilities: [
                        [
                            "You may send one of your Heroes ",
                            { keyword: 60 },
                            "."
                        ],
                        [
                            "You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            " if you have at least 4 Bystanders and/or Undercover Heroes in your Victory Pile."
                        ]
                    ]
                }
            ]
        },
        {
            id: 251,
            name: "Yelena Belova",
            team: 2,
            cards: [
                {
                    name: "Strike and Fade",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/YelenaBelova_2Common.png",
                    hc: 1,
                    rarity: 1,
                    cost: 2,
                    attack: "3",
                    abilities: [
                        [
                            "Send this ",
                            { keyword: 60 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Unveil Identity",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/YelenaBelova_3Common.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 2 },
                            ": You may ",
                            { keyword: 84 },
                            " one of your Heroes from ",
                            { keyword: 60 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Twilight Ops",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/YelenaBelova_4Uncommon.png",
                    hc: 5,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            { keyword: 10 },
                        ],
                        [
                            "When you ",
                            { keyword: 10 },
                            " with this card, you may ",
                            { keyword: 84 },
                            " one of your Heroes from ",
                            { keyword: 60 },
                            ".",
                        ],
                        [
                            "When you play this card, send it ",
                            { keyword: 60 },
                            ".",
                        ],
                    ]
                },
                {
                    name: "Destroy the Red Room",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/YelenaBelova_1Rare.png",
                    hc: 5,
                    rarity: 3,
                    cost: 8,
                    attack: "4",
                    abilities: [
                        [
                            "You may ",
                            { keyword: 84 },
                            " one of your Heroes from ",
                            { keyword: 60 },
                            ".",
                        ],
                        [
                            "You may send a Hero from your discard pile ",
                            { keyword: 60 },
                            ".",
                        ],
                    ]
                }
            ]
        },
        {
            id: 252,
            name: "Red Guardian",
            team: 0,
            cards: [
                {
                    name: "Sleeper Agent",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/RedGuardian_2Common.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 85, text: "When Recruited" },
                            ": Send this ",
                            { keyword: 85, text: "Undercover" },
                            ".",
                        ],
                        [
                            "When you fight a Villain, you may ",
                            { keyword: 84 },
                            " this card from ",
                            { keyword: 60 },
                            ".",
                        ],
                        { divider: true },
                        [
                            { hc: 1 },
                            ": Draw a card.",
                        ],
                    ]
                },
                {
                    name: "Magnetic Shield",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/RedGuardian_3Common.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 85, text: "When Recruited" },
                            ": Send this ",
                            { keyword: 85, text: "Undercover" },
                            ".",
                        ],
                        [
                            "When you recruit another ",
                            { hc: 1 },
                            " Hero, you may ",
                            { keyword: 84 },
                            " this card from ",
                            { keyword: 60 },
                            ".",
                        ],
                        { divider: true },
                        [
                            { hc: 1 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Death Was Only a Ruse",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/RedGuardian_4Uncommon.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 85, text: "When Recruited" },
                            ": Send this ",
                            { keyword: 85, text: "Undercover" },
                            ".",
                        ],
                        [
                            "When a Master Strike is completed or any player fights the Mastermind, you may ",
                            { keyword: 84 },
                            " this card from ",
                            { keyword: 60 },
                            ".",
                        ],
                        { divider: true },
                        [
                            { hc: 1 },
                            ": you may send one of your other Heroes ",
                            { keyword: 60 },
                            ".",
                        ],
                    ]
                },
                {
                    name: "Champion of the Winter Guard",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/RedGuardian_1Rare.png",
                    hc: 1,
                    rarity: 3,
                    cost: 8,
                    attack: "4+",
                    abilities: [
                        [
                            { keyword: 69, text: " " },
                            { keyword: 85, text: "When Recruited" },
                            ": Send this ",
                            { keyword: 85, text: "Undercover" },
                            ".",
                        ],
                        [
                            "When a Scheme Twist is completed or you play your third ",
                            { hc: 1 },
                            " Hero in a turn, you may ",
                            { keyword: 84 },
                            " this card from ",
                            { keyword: 60 },
                            ".",
                        ],
                        { divider: true },
                        [
                            { hc: 1 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each other ",
                            { hc: 1 },
                            " Hero you played this turn.",
                        ],
                    ]
                }
            ]
        },
        {
            id: 253,
            name: "White Tiger",
            team: 6,
            cards: [
                {
                    name: "Amulets of the Tiger God",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WhiteTiger_3Common.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            "Reveal the top two cards of your deck. Draw one of them that costs 0 and discard the rest.",
                        ],
                    ]
                },
                {
                    name: "Dark Influence of the Hand",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WhiteTiger_2Common.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    abilities: [
                        { keyword: 10 },
                        { keyword: 58 },
                        [
                            "Once this turn, you might fight the top card of the Bystander Stack as if it were a ",
                            { bold: "3" },
                            { icon: 1 },
                            " “Hand Ninjas“ Henchman Villain with “",
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            ". Rescue this as a Bystander.“",
                        ],
                    ]
                },
                {
                    name: "Camouflaged Huntress",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WhiteTiger_4Uncommon.png",
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "3",
                    abilities: [
                        [
                            "Whenever you defeat a Henchman this turn, you may KO one of your cards.",
                        ],
                    ]
                },
                {
                    name: "Shadowed Resurrection",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WhiteTiger_1Rare.png",
                    hc: 2,
                    rarity: 3,
                    cost: 8,
                    attack: "3",
                    abilities: [
                        [
                            { keyword: 58 },
                            ", drawing that many cards instead of gaining ",
                            { icon: 1 },
                            ".",
                        ],
                    ]
                }
            ]
        },
        {
            id: 254,
            name: "Falcon & Winter Soldier",
            team: 1,
            cards: [
                {
                    name: "Attune",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FalconandWinterSoldier_2Common.png",
                    subtitle: "Falcon",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    recruit: "3",
                    divided: 1,
                    abilities: [
                        [
                            "To play this side, you must discard a card.",
                        ],
                    ]
                },
                {
                    name: "Atone",
                    subtitle: "Winter Soldier",
                    hc: 4,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    divided: 2,
                    abilities: [
                        { keyword: 58 }
                    ]
                },
                {
                    name: "Relocate",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FalconandWinterSoldier_3Common.png",
                    subtitle: "Falcon",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "2+",
                    divided: 1,
                    abilities: [
                        { keyword: 10 },
                        [
                            { hc: 2 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            ".",
                        ],
                    ]
                },
                {
                    name: "Reload",
                    subtitle: "Winter Soldier",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    divided: 2,
                    abilities: [
                        [
                            { hc: 5 },
                            ": Draw a card.",
                        ]
                    ]
                },
                {
                    name: "New Wings",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FalconandWinterSoldier_4Uncommon.png",
                    subtitle: "Falcon",
                    hc: 5,
                    rarity: 2,
                    cost: 5,
                    attack: "0+",
                    divided: 1,
                    abilities: [
                        [
                            "If you discarded any cards this turn, you get ",
                            { bold: "+4" },
                            { icon: 1 },
                            ".",
                        ],
                    ]
                },
                {
                    name: "New Plan",
                    subtitle: "Winter Soldier",
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    divided: 2,
                    abilities: [
                        [
                            "Draw two cards.",
                        ],
                    ]
                },
                {
                    name: "Captain America's Legacy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FalconandWinterSoldier_1Rare.png",
                    hc: 4,
                    rarity: 3,
                    cost: 7,
                    attack: "2+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Hero Class you have.",
                        ],
                        [
                            { team: 1 },
                            ": ",
                            { keyword: 58 },
                            ".",
                        ],
                    ]
                }
            ]
        },
    ],
    masterminds: [
        {
            id: 87,
            name: "Taskmaster",
            vp: 6,
            vAttack: "5",
            cards: [
                {
                    name: "Taskmaster",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/Taskmaster.png",
                    vAttack: "5+",
                    abilities: [
                        [
                            "Henchmen get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each “Henchman Training“ stacked here.",
                        ],
                        [
                            "During your turn, Taskmaster gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the highest cost Hero you played this turn.",
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Taskmaster's Thunderbolts"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Stack this Strike next to Taskmaster as “Henchman Training.“ If there are any Henchmen in the city, each player gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Epic Taskmaster",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/Taskmaster_Epic.png",
                    vAttack: "5+",
                    epic: true,
                    abilities: [
                        [
                            "Henchmen get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each “Henchman Training“ stacked here.",
                        ],
                        [
                            "During your turn, Taskmaster gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to double the highest cost Hero you played this turn.",
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Taskmaster's Thunderbolts"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Stack this Strike next to Taskmaster as “Henchman Training.“ If there are any Henchmen in the city, each player gains a Wound."
                        ]
                    ]
                },
                {
                    name: "S.H.I.E.L.D. Initiative Trainer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/TaskmasterTactic3.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose a Henchman from any player's Victory Pile to enter the city."
                        ],
                        [
                            "KO any number of S.H.I.E.L.D. Agents and/or Troopers. Gain that many S.H.I.E.L.D. Officers."
                        ],
                    ]
                },
                {
                    name: "Photographic Reflexes",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/TaskmasterTactic2.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose a Henchman from any player's Victory Pile to enter the city."
                        ],
                        [
                            "Play a copy of a Hero in the HQ that costs 6 or less."
                        ],
                    ]
                },
                {
                    name: "Teacher and Assassin",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/TaskmasterTactic4.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose a Henchman from any player's Victory Pile to enter the city."
                        ],
                        [
                            "Each other player reveals their hand and puts one of their non-grey Heroes on the bottom of the Hero Deck."
                        ],
                    ]
                },
                {
                    name: "Henchman Instructor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/TaskmasterTactic1.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Choose a Henchman from any player's Victory Pile to enter the city."
                        ],
                        [
                            "Then each other player discards a card for each Henchman in the city and/or Escape Pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 88,
            name: "Indestructible Man",
            vp: 6,
            vAttack: "0",
            cards: [
                {
                    name: "Indestructible Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/IndestructibleMan.png",
                    vAttackAsterisk: true,
                    vAttackHideValue: true,
                    abilities: [
                        [
                            "You can't use ",
                            { icon: 1 },
                            " to fight Indestructible Man.",
                        ],
                        [
                            "Once during each of your turns, you may shuffle two Elite Assassins from your Victory Pile into the Villain Deck. If you do, fight Indestructible Man.",
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Elite Assassins"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Shuffle an Elite Assassin from your Victory Pile into the Villain Deck. If you can't, each player gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Epic Indestructible Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/IndestructibleMan_Epic.png",
                    vAttackAsterisk: true,
                    vAttackHideValue: true,
                    epic: true,
                    abilities: [
                        [
                            "You can't use ",
                            { icon: 1 },
                            " to fight Indestructible Man.",
                        ],
                        [
                            "Once during each of your turns, you may shuffle three Elite Assassins from your Victory Pile into the Villain Deck. If you do, fight Indestructible Man.",
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Elite Assassins"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Each player shuffles an Elite Assassin from their Victory Pile into the Villain Deck. Each player that can't gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Manipulate Murderous Mad Monk",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/IndestructibleManTactic2.png",
                    tactic: true,
                    vAttack: "8",
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": If this is not the last Tactic, rescue four Bystanders and this Tactic enters the city as a “Molot Boga“ Villain whose abilities are:"
                        ],
                        [
                            "“",
                            { bold: "Ambush" },
                            ": Play two cards from the Villain Deck."
                        ],
                        [
                            { bold: "Fight" },
                            ": KO one of your Heroes."
                        ],
                        [
                            { bold: "Escape" },
                            ": Shuffle this back into Indestructible Man's Mastermind Tactics.“"
                        ],
                    ]
                },
                {
                    name: "Secrets of Indestructibility",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/IndestructibleManTactic3.png",
                    tactic: true,
                    vAttackAsterisk: true,
                    vAttackHideValue: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": KO up to two Wounds from your hand and/or discard pile."
                        ],
                        [
                            "If this is not the last Tactic, play two cards from the Villain Deck."
                        ],
                    ]
                },
                {
                    name: "International Arms Dealer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/IndestructibleManTactic1.png",
                    tactic: true,
                    vAttackAsterisk: true,
                    vAttackHideValue: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Gain a ",
                            { hc: 5 },
                            " Hero from the HQ. Each other player reveals a ",
                            { hc: 5 },
                            " Hero or gains a Wound.",
                        ],
                        [
                            "If this is not the last Tactic, play two cards from the Villain Deck."
                        ],
                    ]
                },
                {
                    name: "Unveil Project Four",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/IndestructibleManTactic4.png",
                    tactic: true,
                    vAttackAsterisk: true,
                    vAttackHideValue: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand and discards each card with a “4“ printed anywhere on it. ",
                            { italic: "(The copyright date line doesn't count.)" }
                        ],
                        [
                            "If this is not the last Tactic, play two cards from the Villain Deck."
                        ],
                    ]
                },
            ]
        },
    ],
    villains: [
        {
            id: 108,
            name: "Taskmaster's Thunderbolts",
            cards: [
                {
                    name: "Jester",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/TaskmastersThunderboltsJester.png",
                    qtd: 2,
                    vAttack: "2",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Jester captures a Bystander."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal the top four cards of the Villain Deck. Play all the Henchmen you find. Put the rest back in any order."
                        ]
                    ]
                },
                {
                    name: "Joystick",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/TaskmastersThunderboltsJoystick.png",
                    qtd: 2,
                    vAttack: "3",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Choose a Henchman from any player's Victory Pile to enter the city."
                        ],
                    ]
                },
                {
                    name: "Jack O'Lantern",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/TaskmastersThunderboltsJackOLantern.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": Choose a Henchman from any player's Victory Pile to enter the city."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player with fewer than two Henchmen in their Victory Pile gains a Wound."
                        ],
                    ]
                },
                {
                    name: "Bullseye",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/TaskmastersThunderboltsBullseye.png",
                    qtd: 2,
                    vAttack: "4+",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Choose ",
                            { icon: 2 },
                            " or ",
                            { icon: 1 },
                            ", then reveal the top card of the Hero Deck. If it has that icon, Bullseye captures it and gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to that Hero's cost.",
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": The player of your choice gains the captured Hero."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": KO that Hero."
                        ]
                    ]
                },
            ]
        },
        {
            id: 109,
            name: "Elite Assassins",
            cards: [
                {
                    name: "Blue Talon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/EliteAssassinsBlueTalon.png",
                    qtd: 2,
                    vAttack: "3+",
                    vp: "2",
                    abilities: [
                        { keyword: 58 },
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player reveals a ",
                            { hc: 3 },
                            " Hero or gains a Wound."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": You may send a Hero from your discard pile ",
                            { keyword: 60 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Iron Maiden",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/EliteAssassinsIronMaiden.png",
                    qtd: 2,
                    vAttack: "4+",
                    vp: "2",
                    abilities: [
                        { keyword: 58 },
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player must send one of their non-grey Heroes ",
                            { keyword: 60 },
                            "."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player may ",
                            { keyword: 84 },
                            " one of their Heroes from ",
                            { keyword: 60 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Snapdragon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/EliteAssassinsSnapdragon.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player discards a non-grey Hero. Then each player draws a card."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": You may send one of your Heroes ",
                            { keyword: 60 },
                            "."
                        ],
                    ]
                },
                {
                    name: "Black Lotus",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/EliteAssassinsBlackLotus.png",
                    qtd: 2,
                    vAttack: "6",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player discards a card that costs 0.",
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
            ]
        },
    ],
    schemes: [
        {
            id: 162,
            name: "Corrupt the Spy Agencies",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/CorruptTheSpyAgencies.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 7 Twists.",
                        ],
                        [
                            { bold: "Twist 1-6" },
                            ": Each player sends one of their non-grey Heroes ",
                            { keyword: 60 },
                            ". Then each player may ",
                            { keyword: 84 },
                            " a Hero from ",
                            { keyword: 60 },
                            " with a lower cost than the one that player just sent ",
                            { keyword: 60 },
                            ".",
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
            id: 163,
            name: "Train Black Widows in the Red Room",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/TrainBlackWidowsintheRedRoom.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists, minus 1 Twist per player. Add 8 S.H.I.E.L.D. Officers to the Villain Deck.",
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Officers in the Villain Deck and city are “Black Widow Initiate“ Villains with ",
                            { bold: "3+" },
                            { icon: 1 },
                            " and “",
                            { keyword: 58 },
                            ". ",
                            { bold: "Fight" },
                            ": Gain this as an Officer ",
                            { italic: "(without " },
                            { keyword: 58 },
                            { italic: ")" },
                            " or send it ",
                            { keyword: 60 },
                            ".“"
                        ],
                        [
                            { bold: "Twist" },
                            ": A Black Widow Initiate enters the city from the Officer Stack. Play another card from the Villain Deck.",
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there 3 Villains per player in the Escape Pile or the Villain Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 164,
            name: "Sniper Rifle Assassins",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/SniperRifleAssassins.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists, minus 1 Twist per player.",
                        ],
                        [
                            { bold: "Twist" },
                            ": Each player must ",
                            { keyword: 10 },
                            " with a Hero from their hand, revealing the card they drew. KO each non-grey Hero drawn this way."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are four non-grey Heroes per player in the KO Pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 165,
            name: "Frame Heroes for Murder",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/FrameHeroesforMurder.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 7 Twists. 6 Heroes.",
                        ],
                        [
                            { bold: "Twist 1-6" },
                            ": Stack a card from the HQ next to the scheme as “Incriminating Evidence“ that has a different cost than any card already in that stack."
                        ],
                        [
                            { bold: "Twist 7" },
                            ": Add any card from the HQ to the Incriminating Evidence."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When there are 5 pieces of Incriminating Evidence."
                        ],
                    ]
                },
            ]
        },
    ]
};
