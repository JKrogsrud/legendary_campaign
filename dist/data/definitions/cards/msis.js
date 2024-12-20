"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSInfinitySaga = void 0;
exports.MSInfinitySaga = {
    id: 36,
    heroes: [
        {
            id: 255,
            name: "Doctor Strange",
            filterName: "Doctor Strange (MS IS)",
            team: 1,
            cards: [
                {
                    name: "Open Portals",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeIS_2Common.png",
                    hc: 3,
                    rarity: 1,
                    qtd: 3,
                    cost: 2,
                    recruit: "1+",
                    abilities: [
                        { keyword: 27 },
                        [
                            { hc: 3 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Defend this Dimension",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeIS_3Common.png",
                    hc: 2,
                    rarity: 1,
                    qtd: 3,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 2 },
                            ": Reveal the top card of the Villain Deck. If it's a Villain, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Sift Futures",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeIS_4Common.png",
                    hc: 2,
                    hc2: 3,
                    rarity: 1,
                    qtd: 3,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        { keyword: 27 },
                        "Choose a Hero Class. Reveal the top card of your deck. If it's the Hero Class you named, draw it."
                    ]
                },
                {
                    name: "Invoke the Time Stone",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeIS_5Uncommon.png",
                    hc: 3,
                    rarity: 2,
                    qtd: 2,
                    cost: 5,
                    recruit: "2",
                    abilities: [
                        { keyword: 27 },
                        [
                            { hc: 3 },
                            " ",
                            { keyword: 86 },
                            ": Take another turn after this one. Don't play a card from the Villain Deck at the start of that turn."
                        ]
                    ]
                },
                {
                    name: "Bind Evil",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeIS_6Uncommon.png",
                    hc: 2,
                    rarity: 2,
                    qtd: 2,
                    cost: 6,
                    attack: "4+",
                    abilities: [
                        [
                            { hc: 2 },
                            ": Reveal the top card of the Villain Deck. If it's a Master Strike, KO that Strike, you get ",
                            { bold: "+3" },
                            { icon: 1 },
                            ", and put a card from the Bystander Deck on top of the Villain Deck."
                        ]
                    ]
                },
                {
                    name: "1 in 14,000,065",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeIS_1Rare.png",
                    hc: 2,
                    rarity: 3,
                    qtd: 1,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        [
                            { hc: 2 },
                            " ",
                            { keyword: 86 },
                            ": Guess the name of the top card of the Villain Deck, then reveal it. If you guessed right, draw six cards."
                        ]
                    ]
                },
            ]
        },
        {
            id: 256,
            name: "Black Panther",
            filterName: "Black Panther (MS IS)",
            team: 1,
            cards: [
                {
                    name: "Avengers Reassembled",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackPantherIS_3Common.png",
                    hc: 2,
                    hc2: 1,
                    rarity: 1,
                    qtd: 3,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            "If you have all five Hero Classes, you get ",
                            { bold: "+3" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Great Many Lives Lost",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackPantherIS_4Common.png",
                    hc: 4,
                    hc2: 2,
                    rarity: 1,
                    qtd: 3,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { hc: 2 },
                            " ",
                            { keyword: 86 },
                            ": KO up to two cards from your hand and/or discard pile."
                        ]
                    ]
                },
                {
                    name: "Wakanda Forever",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackPantherIS_2Common.png",
                    hc: 1,
                    hc2: 5,
                    rarity: 1,
                    qtd: 3,
                    cost: 2,
                    attack: "1",
                    abilities: [
                        [
                            { hc: 1 },
                            ": Draw a card."
                        ]
                    ]
                },
                {
                    name: "Vibranium Nanites",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackPantherIS_6Uncommon.png",
                    hc: 5,
                    hc2: 3,
                    rarity: 2,
                    qtd: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            "Reveal the top card of your deck. If it's ",
                            { rule: 2, text: "multicolored" },
                            ", draw it. Otherwise, put it back or discard it."
                        ],
                        [
                            { hc: 5 },
                            ": You may KO that card."
                        ]
                    ]
                },
                {
                    name: "Council of War",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackPantherIS_5Uncommon.png",
                    hc: 4,
                    hc2: 1,
                    rarity: 2,
                    qtd: 2,
                    cost: 5,
                    attack: "0+",
                    recruit: "3+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each other ",
                            { rule: 2, text: "multicolored" },
                            " Hero you have."
                        ],
                        [
                            { hc: 4 },
                            ": You may have this card make all ",
                            { icon: 1 },
                            " instead of ",
                            { icon: 2 },
                            ".",
                        ]
                    ]
                },
                {
                    name: "Fateful Return",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BlackPantherIS_1Rare.png",
                    hc: 2,
                    hc2: 5,
                    rarity: 3,
                    qtd: 1,
                    cost: 8,
                    attack: "0+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each Hero Class you have."
                        ]
                    ]
                },
            ]
        },
        {
            id: 257,
            name: "Bruce Banner",
            filterName: "Bruce Banner (MS IS)",
            team: 1,
            cards: [
                {
                    name: "Burst of Rage",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BruceBannerIS_2Common.png",
                    hc: 4,
                    rarity: 1,
                    qtd: 3,
                    cost: 1,
                    attack: "1+",
                    abilities: [
                        [
                            { hc: 4 },
                            " ",
                            { keyword: 86 },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 1 },
                            ". You may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Hulkbuster Armor",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BruceBannerIS_4Common.png",
                    hc: 5,
                    rarity: 1,
                    qtd: 3,
                    cost: 4,
                    recruit: "2+",
                    abilities: [
                        [
                            "You may KO a Wound from your hand or discard pile. If you do, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Brains and Brawn",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BruceBannerIS_3Common.png",
                    hc: 4,
                    hc2: 5,
                    rarity: 1,
                    qtd: 3,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 5 },
                            { hc: 4 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Hulk Gets Smashed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BruceBannerIS_5Uncommon.png",
                    hc: 4,
                    rarity: 2,
                    qtd: 2,
                    cost: 5,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 4 },
                            ": You main gain a Wound. If you do, KO up to two other cards from your hand and/or discard pile."
                        ]
                    ]
                },
                {
                    name: "Crush Puny Weaklings",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BruceBannerIS_6Uncommon.png",
                    hc: 5,
                    rarity: 2,
                    qtd: 2,
                    cost: 6,
                    attack: "3+",
                    abilities: [
                        [
                            { hc: 5 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Henchman in your Victory Pile."
                        ]
                    ]
                },
                {
                    name: "Reverse the Snap",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BruceBannerIS_1Rare.png",
                    hc: 5,
                    rarity: 3,
                    qtd: 1,
                    cost: 7,
                    attack: "5",
                    abilities: [
                        [
                            { hc: 5 },
                            " ",
                            { keyword: 86 },
                            ": Gain up to one other Hero from the KO pile. Then combine you deck and discard pile. Put all those cards that cost 0 into your discard pile. Shuffle the rest into a new deck."
                        ]
                    ]
                },
            ]
        },
        {
            id: 258,
            name: "Captain Marvel",
            filterName: "Captain Marvel (MS IS)",
            team: 1,
            cards: [
                {
                    name: "Return from the Stars",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainMarvelIS_3Common.png",
                    hc: 4,
                    rarity: 1,
                    qtd: 3,
                    cost: 4,
                    attack: "0+",
                    recruit: "2+",
                    abilities: [
                        [
                            { hc: 4 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ],
                        [
                            { keyword: 87 },
                            ": This card makes all ",
                            { icon: 1 },
                            " instead of ",
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Turning Point",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainMarvelIS_4Common.png",
                    hc: 4,
                    hc2: 3,
                    rarity: 1,
                    qtd: 3,
                    cost: 5,
                    attack: "2+",
                    abilities: [
                        [
                            "For the rest of this turn, it is the ",
                            { keyword: 87 },
                            " for your Hero cards."
                        ],
                        [
                            "If it was already the ",
                            { keyword: 87 },
                            ", you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Infused by the Tesseract",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainMarvelIS_2Common.png",
                    hc: 3,
                    rarity: 1,
                    qtd: 3,
                    cost: 3,
                    attack: "0+",
                    recruit: "1",
                    abilities: [
                        "Draw a card.",
                        [
                            { keyword: 87 },
                            ": This card makes ",
                            { icon: 1 },
                            " instead of ",
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Moment of Destiny",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainMarvelIS_6Uncommon.png",
                    hc: 4,
                    rarity: 2,
                    qtd: 2,
                    cost: 6,
                    attack: "4+",
                    abilities: [
                        [
                            { hc: 3 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Dawning Hope",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainMarvelIS_5Uncommon.png",
                    hc: 3,
                    rarity: 2,
                    qtd: 2,
                    cost: 2,
                    abilities: [
                        "Draw a card.",
                        "If you had already drawn any cards this turn, draw two cards instead.",
                    ]
                },
                {
                    name: "Time to End It",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainMarvelIS_1Rare.png",
                    hc: 3,
                    rarity: 3,
                    qtd: 1,
                    cost: 8,
                    attack: "5+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other ",
                            { hc: 3 },
                            " and/or ",
                            { hc: 4 },
                            " card you played this turn."
                        ],
                        [
                            { keyword: 87 },
                            ": Instead, you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each."
                        ]
                    ]
                },
            ]
        },
        {
            id: 259,
            name: "Wanda & Vision",
            team: 1,
            cards: [
                {
                    name: "We Have to Destroy It",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WandaAndVision_2Common.png",
                    hc: 5,
                    rarity: 1,
                    qtd: 3,
                    cost: 1,
                    recruit: "1+",
                    abilities: [
                        { keyword: 27 },
                        [
                            { hc: 5 },
                            " ",
                            { keyword: 86 },
                            ": You get ",
                            { bold: "+3" },
                            { icon: 2 },
                            ". You may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Witchcraft",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WandaAndVision_3Common.png",
                    hc: 1,
                    rarity: 1,
                    qtd: 3,
                    cost: 3,
                    attack: "2",
                    abilities: [
                        [
                            "Reveal the top card of your deck. If it has an odd-numbered cost, draw it. ",
                            { italic: "( 0 is even.)" }
                        ],
                    ]
                },
                {
                    name: "Hold On",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WandaAndVision_4Common.png",
                    subtitle: "Wanda",
                    hc: 1,
                    rarity: 1,
                    qtd: 3,
                    cost: 3,
                    divided: 1,
                    attack: "1+",
                    abilities: [
                        [
                            { hc: 1 },
                            ": You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Let Go",
                    subtitle: "Vision",
                    hc: 3,
                    rarity: 1,
                    qtd: 3,
                    cost: 3,
                    divided: 2,
                    recruit: "2",
                    abilities: [
                        { keyword: 27 },
                        [
                            { hc: 3 },
                            " ",
                            { keyword: 86 },
                            ": Draw 3 cards. You may KO a card from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "Magic",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WandaAndVision_6Uncommon.png",
                    subtitle: "Wanda",
                    hc: 3,
                    rarity: 2,
                    qtd: 2,
                    cost: 5,
                    divided: 1,
                    attack: "1+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other Hero with an odd-numbered cost you played this turn."
                        ]
                    ]
                },
                {
                    name: "Science",
                    subtitle: "Vision",
                    hc: 5,
                    rarity: 2,
                    qtd: 2,
                    cost: 5,
                    divided: 2,
                    attack: "2+",
                    abilities: [
                        { keyword: 27 },
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
                    name: "Rage",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WandaAndVision_5Uncommon.png",
                    subtitle: "Wanda",
                    hc: 1,
                    rarity: 2,
                    qtd: 2,
                    cost: 5,
                    divided: 1,
                    attack: "2+",
                    abilities: [
                        [
                            "If a Hero was put into the KO pile this turn you get ",
                            { bold: "+2" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Grief",
                    subtitle: "Vision",
                    hc: 5,
                    rarity: 2,
                    qtd: 2,
                    cost: 5,
                    divided: 2,
                    recruit: "2+",
                    abilities: [
                        { keyword: 27 },
                        [
                            "If a Master Strike was completed this turn, you get ",
                            { bold: "+2" },
                            { icon: 2 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Odd Couple",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WandaAndVision_1Rare.png",
                    hc: 1,
                    hc2: 3,
                    rarity: 3,
                    qtd: 1,
                    cost: 7,
                    attack: "4",
                    abilities: [
                        { keyword: 27 },
                        [
                            { hc: 3 },
                            ": Reveal the top five cards of the Hero Deck. You may put one of them with an odd-numbered cost into your hand. You may KO one of them. Put the rest back in any order."
                        ],
                    ]
                },
            ]
        },
    ],
    masterminds: [
        {
            id: 89,
            name: "Thanos",
            filterName: "Thanos (MS IS)",
            vp: 7,
            vAttack: "11",
            cards: [
                {
                    name: "Thanos",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ThanosIS.png",
                    vAttack: "11+",
                    abilities: [
                        [
                            "Thanos get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Infinity Stone in the city and/or Escape Pile.",
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Infinity Stones"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": The leftmost Infinity Stone in the city escapes. Then an Infinity Stone worth 4VP or more enters the city from your Victory Pile. If you didn't have any, each player gains a Wound."
                        ],
                        [
                            { bold: "Thanos Wins" },
                            ": When 6 Infinity Stones escape."
                        ]
                    ]
                },
                {
                    name: "Epic Thanos",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ThanosIS_Epic.png",
                    vAttack: "13+",
                    epic: true,
                    abilities: [
                        [
                            "Thanos get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each Infinity Stone in the city and/or Escape Pile.",
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Infinity Stones"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": The lowest ",
                            { icon: 1 },
                            " Infinity Stone in the city escapes. Then an Infinity Stone worth 4VP or more enters the city from your Victory Pile. Each player that didn't have any gains a Wound."
                        ],
                        [
                            { bold: "Thanos Wins" },
                            ": When 6 Infinity Stones escape."
                        ]
                    ]
                },
                {
                    name: "The Snap",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ThanosISTactic3.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player discards half of their cards. Destroy half of the HQ spaces. ",
                            { italic: "(Round down the losses.)" },
                            " Turn the Heroes there face down to mark the destroyed spaces. Don't refill those spaces."
                        ],
                    ]
                },
                {
                    name: "Destiny Arrives All the Same",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ThanosISTactic1.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals a Hero that costs 7 or more or gains a Wound."
                        ],
                    ]
                },
                {
                    name: "Price to Pay",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ThanosISTactic2.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player discards cards equal to the number of Infinity Stones in the city and/or Escape Pile or gains a Wound."
                        ],
                    ]
                },
                {
                    name: "You Should Have Gone for the Head",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ThanosISTactic4.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": KO one of your Heroes."
                        ],
                        "If this is the last Mastermind Tactic: You do not win the game. Players must fight Thanos one more time to put the Mastermind card in their Victory Pile and win the game."
                    ]
                },
            ]
        },
        {
            id: 90,
            name: "Ebony Maw",
            vp: 6,
            vAttack: "8",
            cards: [
                {
                    name: "Ebony Maw",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/EbonyMaw.png",
                    vAttack: "8+",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+4" },
                            { icon: 1 },
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Children of Thanos"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": It is the ",
                            { keyword: 87 },
                            " this turn. Each player reveals their hand and discards their highest-cost Hero. If it was already the ",
                            { keyword: 87 },
                            ", KO those Heroes."
                        ],
                    ]
                },
                {
                    name: "Epic Ebony Maw",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/EbonyMaw_Epic.png",
                    vAttack: "10+",
                    epic: true,
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+5" },
                            { icon: 1 },
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Children of Thanos"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": It is the ",
                            { keyword: 87 },
                            " this turn. Each player reveals their hand and KOs their highest-cost Hero. If it was already the ",
                            { keyword: 87 },
                            ", play another card from the Villain Deck."
                        ],
                    ]
                },
                {
                    name: "Your Powers are Quaint",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/EbonyMawTactic4.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player chooses a Hero Class, then reveals their hand and discards all non-grey Heroes that aren't that Hero Class."
                        ],
                        [
                            { keyword: 87 },
                            ": Then they also discard all grey Heroes.",
                        ],
                    ]
                },
                {
                    name: "Hear Me and Rejoice",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/EbonyMawTactic1.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": When you draw a new hand of cards at the end of this turn, draw two extra cards."
                        ],
                        [
                            { keyword: 87 },
                            ": Same effect, but three cards instead.",
                        ],
                    ]
                },
                {
                    name: "Smile...Even in Death",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/EbonyMawTactic2.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": KO up to two of your Heroes."
                        ],
                        [
                            { keyword: 87 },
                            ": Then KO up to one Hero from your discard pile.",
                        ],
                    ]
                },
                {
                    name: "You May Think This is Suffering",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/EbonyMawTactic3.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals a ",
                            { hc: 1 },
                            " Hero or gains a Wound."
                        ],
                        [
                            { keyword: 87 },
                            ": Then each other player reveals a ",
                            { hc: 3 },
                            " Hero or gains a Wound."
                        ],
                    ]
                },
            ]
        },
    ],
    villains: [
        {
            id: 110,
            name: "Children of Thanos",
            cards: [
                {
                    name: "Endless Armies of Chitauri",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ChildrenOfThanosEndlessArmiesOfChitauri.png",
                    qtd: 1,
                    vAttack: "4+",
                    vp: "3",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+2" },
                            { icon: 1 },
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes. Then reveal the top card of the Villain Deck. If it's a Children of Thanos Villain, Endless Armies of Chitauri reenters the Sewers."
                        ]
                    ]
                },
                {
                    name: "Outriders",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ChildrenOfThanosOutriders.png",
                    qtd: 1,
                    vAttack: "4+",
                    vp: "3",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+2" },
                            { icon: 1 },
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": You may KO a card from your discard pile."
                        ],
                    ]
                },
                {
                    name: "Outrider Dropships",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ChildrenOfThanosOutriderDropships.png",
                    qtd: 1,
                    vAttack: "4+",
                    vp: "3",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+2" },
                            { icon: 1 },
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": A Villain worth ",
                            { bold: "2" },
                            "VP, ",
                            { bold: "3" },
                            "VP, or ",
                            { bold: "4" },
                            "VP from any player's Victory Pile enters the city.",
                        ],
                    ]
                },
                {
                    name: "Outrider Threshers",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ChildrenOfThanosOutriderThreshers.png",
                    qtd: 1,
                    vAttack: "5+",
                    vp: "4",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+2" },
                            { icon: 1 },
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes. Then choose any number of Heroes from the HQ. Put them on the bottom of the Hero Deck.",
                        ],
                    ]
                },
                {
                    name: "Cull Obsidian",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ChildrenOfThanosCullObsidian.png",
                    qtd: 1,
                    vAttack: "6+",
                    vp: "5",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+3" },
                            { icon: 1 },
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": It is the ",
                            { keyword: 87 },
                            " this turn. If it was already the ",
                            { keyword: 87 },
                            ", each player reveals a Hero that costs 6 or more or gains a Wound."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Same effect.",
                        ],
                    ]
                },
                {
                    name: "Corvus Glaive",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ChildrenOfThanosCorvusGlaive.png",
                    qtd: 1,
                    vAttack: "6+",
                    vp: "5",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+3" },
                            { icon: 1 },
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": It is the ",
                            { keyword: 87 },
                            " this turn. If it was already the ",
                            { keyword: 87 },
                            ", each player KOs a Bystander from their Victory Pile or gains a Wound."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Same effect.",
                        ],
                    ]
                },
                {
                    name: "Chitauri Gorilla",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ChildrenOfThanosChitauriGorilla.png",
                    qtd: 1,
                    vAttack: "5+",
                    vp: "4",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+2" },
                            { icon: 1 },
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Chitauri Gorilla captures a Bystander."
                        ],
                    ]
                },
                {
                    name: "Proxima Midnight",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ChildrenOfThanosProximaMidnight.png",
                    qtd: 1,
                    vAttack: "7+",
                    vp: "5",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+3" },
                            { icon: 1 },
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": It is the ",
                            { keyword: 87 },
                            " this turn. If it was already the ",
                            { keyword: 87 },
                            ", each player reveals an ",
                            { hc: 2 },
                            " Hero or gains a Wound."
                        ],
                        [
                            {
                                bold: "Escape"
                            },
                            ": Same effect.",
                        ],
                    ]
                },
            ]
        },
        {
            id: 111,
            name: "Infinity Stones",
            cards: [
                {
                    name: "The Power Stone",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/InfinityStonesThePowerStone.png",
                    qtd: 1,
                    vAttack: "6+",
                    vp: "5",
                    abilities: [
                        [
                            "The Power Stone gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other Infinity Stone in the city and/or Escape Pile."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player without an Infinity Stone in their Victory Pile gains a Wound."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO one of your Heroes. Then KO a Wound from your hand or discard pile."
                        ]
                    ]
                },
                {
                    name: "The Space Stone",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/InfinityStonesTheSpaceStone.png",
                    qtd: 1,
                    vAttack: "5+",
                    vp: "5",
                    abilities: [
                        [
                            "The Space Stone gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each empty space in the city."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": The Space Stone captures three Bystanders. Then move an Infinity Stone from any city space to the Bridge. If there's already a Villain there, swap them."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Move and/or swap any number of Villains to other city spaces."
                        ],
                    ]
                },
                {
                    name: "The Reality Stone",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/InfinityStonesTheRealityStone.png",
                    qtd: 1,
                    vAttack: "5+",
                    vp: "5",
                    abilities: [
                        [
                            "The Reality Stone gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Master Strike in the KO pile and/or stacked next to the Mastermind."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Reveal the top three cards of the Villain Deck. Play a Master Strike from among them. Put the rest back in any order.",
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Same effect, but KO the Master Strike instead of playing it. Then, whether you KO or not, put a card from the Bystander Deck on top of the Villain Deck."
                        ],
                    ]
                },
                {
                    name: "The Time Stone",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/InfinityStonesTheTimeStone.png",
                    qtd: 1,
                    vAttack: "5+",
                    vp: "5",
                    abilities: [
                        [
                            { keyword: 87 },
                            ": ",
                            { bold: "+4" },
                            { icon: 1 },
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Play another card from the Villain Deck.",
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Take another turn after this one. Don't play a card from the Villain Deck at the start of that turn.",
                        ],
                    ]
                },
                {
                    name: "The Soul Stone",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/InfinityStonesTheSoulStone.png",
                    qtd: 1,
                    vAttack: "5+",
                    vp: "5",
                    abilities: [
                        [
                            "The Soul Stone gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each other Villain in the city."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each player without an Infinity Stone in their Victory Pile KOs a non-grey Hero from their discard pile."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal the top two cards of your deck, KO one of them and draw the other.",
                        ],
                    ]
                },
                {
                    name: "The Mind Stone",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/InfinityStonesTheMindStone.png",
                    qtd: 1,
                    vAttack: "1+",
                    vp: "5",
                    abilities: [
                        [
                            "The Mind Stone gets ",
                            { bold: "+" },
                            { icon: 1 },
                            " equal to the highest cost of Hero in the HQ."
                        ],
                        [
                            {
                                bold: "Ambush"
                            },
                            ": All Heroes currently in the HQ cost 2 more this turn."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Gain a Hero from the HQ.",
                        ],
                    ]
                },
                {
                    name: "Nebula, Stone Seeker",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/InfinityStonesNebulaStoneSeeker.png",
                    qtd: 1,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Nebula captures a Hero from the Officer Deck or HQ that costs 4 or less."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Either KO that Hero or choose a player to gain it.",
                        ],
                        { italic: "(This card counts as ”an Infinity Stone.”)" }
                    ]
                },
                {
                    name: "Stonekeeper",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/InfinityStonesStonekeeper.png",
                    qtd: 1,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": If the Soul Stone is in the city or Escape Pile, each player discards a card. If it's in a player's Victory Pile, that player draws two cards."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each player KOs one of their Heroes.",
                        ],
                        { italic: "(This card counts as ”an Infinity Stone.”)" }
                    ]
                },
            ]
        },
    ],
    schemes: [
        {
            id: 166,
            name: "Sacrifice for the Soul Stone",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/SacrificefortheSoulStone.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": Twists equal to the number of players plus 4.",
                        ],
                        [
                            { bold: "Twist" },
                            ": You may KO one of your non-grey Heroes and one of your grey Heroes to ”Sacrifice for the Soul Stone.” If you do, draw three cards, shuffle this Twist back into Villain Deck, then play another card from the Villain Deck. If you don't, stack a Hero from the HQ next to the Mastermind, ”Sacrificed for the Soul Stone.”",
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the Mastermind has sacrificed 5 Heroes for the Soul Stone."
                        ],
                    ]
                },
            ]
        },
        {
            id: 167,
            name: "Halve All Life in the Universe",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/HalveAllLifeintheUniverse.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 5 Twists",
                        ],
                        [
                            { bold: "Twist 1,3,5" },
                            ": Choose 3 Heroes from the HQ and KO them.",
                        ],
                        [
                            { bold: "Twist 2,4" },
                            ": Deal the Hero Deck into two facedown piles ",
                            { italic: "(as equally as possible)" },
                            ". KO one of them."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When the Hero Deck or Villain Deck runs out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 168,
            name: "Warp Reality into a TV Show",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/WarpRealityIntoaTVShow.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists. The rightmost city space represents a TV show from ”the 50s.” The space on its left is ”the 60s,” then ”the 70s.” The city is only those 3 spaces. The HQ is only the 3 spaces beneath those. Move the Mastermind & Officer Deck to mark the city's left edge.",
                        ],
                        [
                            { bold: "Twist 1-4" },
                            ": Another TV show (city space) appears on the left side of the city, representing the 80s, 90s, 2000s, & 2010s. Another HQ space appears beneath it.",
                        ],
                        [
                            { bold: "Twist 5-11" },
                            ": Destroy the rightmost TV show and the HQ space beneath it. KO any Hero in that HQ space. Push forward any Villain there. Move the Villain Deck & Hero Deck to mark the city's right edge."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When all TV is destroyed."
                        ],
                    ]
                },
            ]
        },
        {
            id: 169,
            name: "The Time Heist",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/TheTimeHeist.png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 11 Twists. Use 4 Heroes in the Hero Deck, plus 4 other Heroes to make a ”Past Hero Deck.” Above the board, make room for an alternate city called ”The Past.” It has the normal 5 spaces, from Sewers to Bridge. The Past has its own ”Past HQ” filled by the ”Past Hero Deck.” To start, play as if ”The Past” city, HQ, and Hero Deck don't exist.",
                        ],
                        [
                            { bold: "Twist 1,3,5,7,9" },
                            ": Until the next Twist, move the Villain Deck next to ”The Past,” and play as if ”The Past” city, HQ, and Hero Deck exist, while the normal city, HQ, and Hero Deck don't exist. ",
                            { italic: "(Use the normal decks and spaces for everything except the city, HQ, and Hero Deck.)" }
                        ],
                        [
                            { bold: "Twist 10" },
                            ": Evil wins!"
                        ],
                    ]
                },
            ]
        },
    ]
};
