"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deadpool = void 0;
exports.Deadpool = {
    id: 14,
    heroes: [
        {
            id: 122,
            name: "Bob, Agent of HYDRA",
            team: 13,
            cards: [
                {
                    name: "Bullets Flying, Bob Hiding",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bob-04.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    recruit: "2½ ",
                    abilities: [
                        [
                            { keyword: 30 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "HYDRA Half-Wit",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bob-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    attack: "1½ ",
                    abilities: [
                        [
                            "Reveal the top card of your deck. If it's ",
                            { team: 13 },
                            " or ",
                            { team: 2 },
                            ", draw it."
                        ]
                    ]
                },
                {
                    name: "How Do I Get Out of Here??",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bob-02.png",
                    hc: 1,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        [
                            { hc: 1 },
                            ": Look at the top card of another player's deck. Ask them a yes or no question about it. If they guess right, then they draw that card. If not, then you draw a card."
                        ]
                    ]
                },
                {
                    name: "Epic Middle Manager",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/bob-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 8,
                    attack: "5",
                    abilities: [
                        [
                            { keyword: 30 },
                            ": KO up to two ",
                            { team: 13 },
                            " and/or ",
                            { team: 2 },
                            " Heroes from your discard pile. Draw a card for each Hero KO'd this way."
                        ]
                    ]
                }
            ]
        },
        {
            id: 123,
            name: "Deadpool",
            team: 17,
            cards: [
                {
                    name: "Nighttime Is the Right Time",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deadpool-03-1.png",
                    hc: 5,
                    rarity: 1,
                    cost: 3,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            "If it's between 8 p.m. and midnight, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            ". Otherwise, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ],
                        [
                            { hc: 5 },
                            ": Screw it, just take both!"
                        ]
                    ]
                },
                {
                    name: "It'll Grow Back",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deadpool-04-1.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "2½+",
                    abilities: [
                        [
                            "If you have a Wound in your hand or discard pile, KO it and you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            ". Otherwise, gain a Wound. These days, getting wounded mostly just pisses me off."
                        ]
                    ]
                },
                {
                    name: "Running Commentary",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deadpool-02-1.png",
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    attack: "3½+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1/2" },
                            { icon: 1 },
                            " for each other card with flavor text you played this turn. Now maybe you'll stop telling me to shut up."
                        ]
                    ]
                },
                {
                    name: "Deadpool Rage!",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deadpool-01-1.png",
                    hc: 4,
                    rarity: 3,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        [
                            { keyword: 30 },
                            ": Take another turn after this one. But don't use this ability more than once per game — trilogies are stupid."
                        ]
                    ]
                }
            ]
        },
        {
            id: 124,
            name: "Slapstick",
            team: 17,
            cards: [
                {
                    name: "Napoleon Complex",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/slapstick-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 4,
                    recruit: "2+",
                    abilities: [
                        [
                            { hc: 3 },
                            ": If any other players are taller than you, draw a card. If any other players are shorter than you, you get ",
                            { bold: "+1" },
                            { icon: 2 },
                            ". If both, get both!"
                        ]
                    ]
                },
                {
                    name: "Saturday Morning Harpoons",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/slapstick-03.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "2½ ",
                    abilities: [
                        [
                            { keyword: 30 },
                            ": Rescue a Bystander."
                        ]
                    ]
                },
                {
                    name: "Surprise Chainsaw",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/slapstick-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "4½ ",
                    abilities: [
                        [
                            { keyword: 30 },
                            ": When you have a new hand of cards at the end of this turn, draw an extra card."
                        ]
                    ]
                },
                {
                    name: "Electroplasmic Insanity",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/slapstick-01.png",
                    hc: 3,
                    rarity: 3,
                    cost: 8,
                    attack: "5",
                    abilities: [
                        [
                            { keyword: 30 },
                            ": Recruit a Hero from the HQ for free. Then, you may shuffle your discard pile into your deck."
                        ]
                    ]
                }
            ]
        },
        {
            id: 125,
            name: "Solo",
            team: 17,
            cards: [
                {
                    name: "Half-Cocked",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/solo-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    attack: "1½ ",
                    recruit: "1½ ",
                    abilities: []
                },
                {
                    name: "Merc's Gotta Get Paid",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/solo-04.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "2½ ",
                    recruit: "0+",
                    abilities: [
                        [
                            { keyword: 30 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Guns on My Guns",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/solo-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 5,
                    attack: "3½ ",
                    abilities: [
                        [
                            { hc: 5 },
                            ": Does the top card of your deck have a gun in the art? If so, draw that gun!"
                        ]
                    ]
                },
                {
                    name: "Cut in Half",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/solo-01.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "2½ ",
                    abilities: [
                        [
                            "Choose a Villain. Cut its ",
                            { icon: 1 },
                            " in half this turn."
                        ],
                        [
                            { team: 17 },
                            ": Cut the Mastermind's ",
                            { icon: 1 },
                            " in half for one fight this turn."
                        ]
                    ]
                }
            ]
        },
        {
            id: 126,
            name: "Stingray",
            team: 17,
            cards: [
                {
                    name: "Deck Chairs on the Titanic",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stingray-04.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    attack: "1½ ",
                    abilities: [
                        [
                            "Draw a card."
                        ],
                        [
                            "You may move a Villain to an adjacent city space. If another Villain is already there, swap them."
                        ]
                    ]
                },
                {
                    name: "Superpowered Swimsuit",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stingray-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    attack: "½+",
                    abilities: [
                        [
                            "Draw a card."
                        ],
                        [
                            { hc: 5 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            ", usable only against Villains in the Sewers or Bridge or the Mastermind."
                        ]
                    ]
                },
                {
                    name: "Sting of the Stingray's Sting",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stingray-02.png",
                    hc: 3,
                    rarity: 2,
                    cost: 5,
                    recruit: "3",
                    abilities: [
                        [
                            { keyword: 30 },
                            ": You may KO one of your cards or a card from your discard pile."
                        ]
                    ]
                },
                {
                    name: "PhD in Oceanography",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stingray-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 8,
                    attack: "4+",
                    abilities: [
                        "You may KO a card from your hand or discard pile.",
                        [
                            { team: 17 },
                            ": You get ",
                            { bold: "+1/2" },
                            { icon: 1 },
                            " for each Hero in the KO pile."
                        ]
                    ]
                }
            ]
        }
    ],
    masterminds: [
        {
            id: 36,
            name: "Evil Deadpool",
            vAttack: "11",
            vp: 6,
            cards: [
                {
                    name: "Evil Deadpool",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/evil-deadpool-01.png",
                    vAttack: "11+",
                    abilities: [
                        { keyword: 31, text: "Revenge for Mastermind Tactics" },
                        [
                            { bold: "Always Leads" },
                            ": Evil Deadpool Corpse"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Without talking, each player simultaneously discards a card. Whoever discards the lowest-costing card ",
                            { italic: "(or tied for lowest)" },
                            " gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Evil Even Oddball",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/evil-deadpool-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals their hand. Whoever has the fewest cards with odd-numbered costs ",
                            { italic: "(or tied for fewest)" },
                            " gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Hyper-Insane Healing Factor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/evil-deadpool-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": If this is not the final Tactic, you get ",
                            { bold: "+6" },
                            { icon: 2 },
                            " and shuffle this Tactic back into the other Tactics."
                        ]
                    ]
                },
                {
                    name: "Of Course it's Corpse",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/evil-deadpool-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": The other player with the fewest Evil Deadpool Corpse Villains in their Victory Pile ",
                            { italic: "(or tied for fewest)" },
                            " gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Stitched from Dead (Pool) Parts",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/evil-deadpool-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player discards the top card of their deck. Whoever discards the lowest-costing card ",
                            { italic: "(or tied for lowest)" },
                            " gains a Wound."
                        ]
                    ]
                }
            ]
        },
        {
            id: 37,
            name: "Macho Gomez",
            vAttack: "9",
            vp: 6,
            cards: [
                {
                    name: "Macho Gomez",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/macho-gomez-01.png",
                    vAttack: "9+",
                    abilities: [
                        { keyword: 31, text: "Revenge for Deadpool's “Friends“" },
                        [
                            { bold: "Always Leads" },
                            ": Deadpool's “Friends“"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Put this Strike in front of you as a “Bounty on Your Head.“ Then, each player gains a Wound for each Bounty on them. Any number of times during your turn, you may pay 1",
                            { icon: 2 },
                            " to move a Bounty from you to the player on your left."
                        ]
                    ]
                },
                {
                    name: "Bounty Payout",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/macho-gomez-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each “Bounty on Your Head“ on other players."
                        ]
                    ]
                },
                {
                    name: "Interstellar Assassin",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/macho-gomez-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player with at least one “Bounty on Your Head“ discards down to 4 cards."
                        ]
                    ]
                },
                {
                    name: "Renegotiate the Contract",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/macho-gomez-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Redistribute the “Bounty on Your Head“ cards among any number of players."
                        ]
                    ]
                },
                {
                    name: "Super Macho Man",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/macho-gomez-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Rescue a Bystander for each “Bounty on Your Head“ on other players."
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 49,
            name: "Deadpool's “Friends“",
            cards: [
                {
                    name: "Blind Al and Deuce",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/deadpools-friends-04.png",
                    qtd: 2,
                    vAttack: "2+",
                    vp: "3",
                    abilities: [
                        { keyword: 31, text: "Revenge for Deadpool's “Friends“" },
                        [
                            "To fight Blind Al, you also gotta drop a Deuce ",
                            { italic: "(discard a card with a “2“ printed anywhere on it)" },
                            ". Deuce is her dog, obviously."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Everybody drop a Deuce."
                        ]
                    ]
                },
                {
                    name: "Sluggo",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/deadpools-friends-02.png",
                    qtd: 2,
                    vAttack: "5+",
                    vp: "4",
                    abilities: [
                        { keyword: 31, text: "Revenge for Deadpool's “Friends“" },
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 30 },
                            ": Gain the Hero from the HQ with the lowest cost (or tied for lowest)."
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
                    name: "Taskmaster",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/deadpools-friends-01.png",
                    qtd: 2,
                    vAttack: "3+",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Taskmaster captures a Bystander."
                        ],
                        [
                            "During your turn, Taskmaster gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the cost of the highest cost Hero you played this turn."
                        ],
                    ]
                },
                {
                    name: "Weasel",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/deadpools-friends-03.png",
                    qtd: 2,
                    vAttack: "4+",
                    vp: "3",
                    abilities: [
                        { keyword: 31, text: "Revenge for Deadpool's “Friends“" },
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player simultaneously passes a card from their hand to the player on their left."
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
            id: 50,
            name: "Evil Deadpool Corpse",
            cards: [
                {
                    name: "D.E.A.D.P.O.O.L.",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/evil-deadpool-corpse-02.png",
                    qtd: 2,
                    vAttack: "4+",
                    vp: "3",
                    abilities: [
                        { keyword: 31, text: "Revenge for Evil Deadpool Corpse" },
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 30 },
                            ": KO one of your Heroes. Remind them that if they were better at hero-ing, these accidents wouldn't happen."
                        ]
                    ]
                },
                {
                    name: "The Deadpool Kid",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/evil-deadpool-corpse-01.png",
                    qtd: 2,
                    vAttack: "5+",
                    vp: "4",
                    abilities: [
                        { keyword: 31, text: "Revenge for Evil Deadpool Corpse" },
                        [
                            {
                                bold: "Escape"
                            },
                            ": Old West Shootout. Each player reveals the top card of their deck. KO the card with the highest cost ",
                            { italic: "(or tied for highest)" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Ultimate Deadpool",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/evil-deadpool-corpse-04.png",
                    qtd: 2,
                    vAttack: "5+",
                    vp: "4",
                    abilities: [
                        { keyword: 31, text: "Revenge for Evil Deadpool Corpse" },
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 30 },
                            ": Draw a card for each “Ultimate“ in the HQ. You know, those totally kickass cards that cost 7 or more."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": KO all Ultimates from the HQ."
                        ]
                    ]
                },
                {
                    name: "Wolverinepool",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/evil-deadpool-corpse-03.png",
                    qtd: 2,
                    vAttack: "7+",
                    vp: "6",
                    abilities: [
                        { keyword: 31, text: "Revenge for Evil Deadpool Corpse" },
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player reveals a card with an odd-numbered cost or gains a Wound. Ya know, the number 0 is pretty weird, but it's not odd."
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
                            ": Same effect. Then, shuffle me back into the Villain Deck so I can kick your ass again!"
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 68,
            name: "Deadpool Kills the Marvel Universe",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/60Scheme(13).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": Use Deadpool as one of the Heroes. 2 players: Use 4 Heroes total. 1-3 players: 6 Twists. 4-5 Players: 5 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": Reveal cards from the Hero Deck until you reveal a Deadpool card. KO all the cards you revealed."
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
            id: 69,
            name: "Deadpool Wants a Chimichanga",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/61Scheme(79).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 6 Twists. 12 total Bystanders in the Villain Deck. All Bystanders represent “Chimichangas.“ ",
                            { italic: "(They're Bystanders too.)" },
                            " 3-5 players: Add a Villain Group."
                        ],
                        [
                            { bold: "Nobody Eats Just One Chimichanga!" },
                            " Whenever you play a Chimichanga from the Villain Deck, play another card from the Villain Deck."
                        ],
                        [
                            { bold: "Twist" },
                            ": Put each Chimichanga from the city into the Escape Pile. Then, each player shuffles a Chimichanga from their Victory Pile back into the Villain Deck. Any player who cannot do so gains a Wound."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 6 Chimichangas are in the Escape Pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 70,
            name: "Deadpool Writes a Scheme",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/62Scheme(80).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": Hey, writing these doesn't seem so tough. Use the best Hero in the game: Deadpool! Add 6 Twists of Lemon, shake vigorously, and I'll make it up as I go."
                        ],
                        [
                            { bold: "Twist 1" },
                            ": Everybody draw 1 card. Wait, are these supposed to be bad?"
                        ],
                        [
                            { bold: "Twist 2" },
                            ": Anyone without a Deadpool in hand is doing it wrong -- discard 2 cards."
                        ],
                        [
                            { bold: "Twist 3" },
                            ": Play 3 cards from the Villain Deck. That sounds pretty bad, right?"
                        ],
                        [
                            { bold: "Twist 4" },
                            ": Each Villain captures 4 Bystanders. Hey, I'm not a balance expert."
                        ],
                        [
                            { bold: "Twist 5" },
                            ": Each player gains 5 Wounds. Is that a good number?"
                        ],
                        [
                            { bold: "Twist 6" },
                            ": Deadpool wins 6 times! Wow, I'm way better at this game than you."
                        ],
                    ]
                },
            ]
        },
        {
            id: 71,
            name: "Everybody Hates Deadpool",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/63Scheme(81).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 6 Twists. Use at least 1",
                            { team: 17 },
                            " Hero."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": All Villains have ",
                            { keyword: 31 },
                            " for their own Villain Groups. ",
                            { italic: "(If they already have Revenge, double it.)" }
                        ],
                        [
                            { bold: "Twist" },
                            ": Everyone reveals their hand. Whoever reveals the fewest ",
                            { team: 17 },
                            " cards ",
                            { italic: "(or tied for fewest)" },
                            " gains a Wound."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 3 Villains per player have escaped."
                        ],
                    ]
                },
            ]
        },
    ]
};
