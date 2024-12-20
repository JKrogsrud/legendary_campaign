"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Noir = void 0;
exports.Noir = {
    id: 15,
    heroes: [
        {
            id: 127,
            name: "Angel Noir",
            team: 4,
            cards: [
                {
                    name: "Impetuous Dive",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/angel-noir-03.png",
                    hc: 2,
                    rarity: 1,
                    cost: 3,
                    attack: "2+",
                    abilities: [
                        [
                            { hc: 2 },
                            ": You get ",
                            { bold: "+1" },
                            { icon: 1 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Multitalented",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/angel-noir-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    attack: "1",
                    recruit: "1",
                    abilities: [
                        [
                            "Choose a Hero Class. ",
                            { keyword: 32 },
                            " for a card of that Hero Class."
                        ]
                    ]
                },
                {
                    name: "Identical Twin Brother",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/angel-noir-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 5,
                    attack: "0+",
                    recruit: "0+",
                    abilities: [
                        [
                            "You get the printed ",
                            { icon: 2 },
                            " and ",
                            { icon: 1 },
                            " of a Hero in the HQ. Then put that Hero on the bottom of the Hero Deck."
                        ]
                    ]
                },
                {
                    name: "Missing Person Case",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/angel-noir-01.png",
                    hc: 1,
                    rarity: 3,
                    cost: 8,
                    attack: "3",
                    abilities: [
                        [
                            { keyword: 32 },
                            " the Hero Deck for any card and put that card in your hand."
                        ]
                    ]
                },
            ]
        },
        {
            id: 128,
            name: "Daredevil Noir",
            team: 6,
            cards: [
                {
                    name: "Balancing Act",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-04-2.png",
                    hc: 1,
                    rarity: 1,
                    cost: 3,
                    attack: "1",
                    recruit: "1",
                    abilities: [
                        [
                            "The next Hero you recruit this turn goes on top of your deck."
                        ]
                    ]
                },
                {
                    name: "Listen for Heartbeats",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-03-2.png",
                    hc: 2,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            "Choose a number 1 or more. ",
                            { keyword: 32 },
                            " for a card of that cost."
                        ]
                    ]
                },
                {
                    name: "Discover the Bodies",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-02-2.png",
                    hc: 1,
                    rarity: 2,
                    cost: 5,
                    recruit: "3",
                    abilities: [
                        [
                            { hc: 1 },
                            ": ",
                            { keyword: 32 },
                            " for a card that costs 0. KO that card."
                        ]
                    ]
                },
                {
                    name: "Hitting Rock Bottom",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-01-2.png",
                    hc: 2,
                    rarity: 3,
                    cost: 7,
                    attack: "3+",
                    abilities: [
                        [
                            "Discard a card from the top or bottom of your deck. If it costs 0, you get ",
                            { bold: "+1" },
                            { icon: 1 },
                            " and repeat this process. If your deck runs out, stop."
                        ]
                    ]
                },
            ]
        },
        {
            id: 129,
            name: "Iron Man Noir",
            team: 1,
            cards: [
                {
                    name: "Steam-Powered Arsenal",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-man-noir-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 3,
                    attack: "3",
                    abilities: [
                        [
                            "To play this, you must put another card from your hand on top of your deck."
                        ]
                    ]
                },
                {
                    name: "Mechanized Plate-Mail",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-man-noir-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 4,
                    recruit: "2",
                    abilities: [
                        [
                            { keyword: 32 },
                            " for a ",
                            { hc: 5 },
                            " card."
                        ]
                    ]
                },
                {
                    name: "Learn from Enemies",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-man-noir-02.png",
                    hc: 5,
                    rarity: 2,
                    cost: 6,
                    attack: "3",
                    abilities: [
                        [
                            { hc: 5 },
                            ": You may use the “Fight“ ability of a Villain worth 1",
                            { icon: 4 },
                            " in your Victory Pile."
                        ]
                    ]
                },
                {
                    name: "Adventurers Assemble!",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-man-noir-01.png",
                    hc: 5,
                    rarity: 3,
                    cost: 7,
                    attack: "4",
                    abilities: [
                        [
                            "Whenever you ",
                            { keyword: 32 },
                            " this turn, look at three cards instead of two."
                        ],
                        [
                            "Choose ",
                            { icon: 2 },
                            " or ",
                            { icon: 1 },
                            ". ",
                            { keyword: 32 },
                            " for a card with that icon."
                        ]
                    ]
                },
            ]
        },
        {
            id: 130,
            name: "Luke Cage Noir",
            team: 6,
            cards: [
                {
                    name: "Follow Big Leads",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/luke-cage-noir-04.png",
                    hc: 4,
                    rarity: 1,
                    cost: 4,
                    recruit: "2+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+1" },
                            { icon: 2 },
                            " for each other card you played this turn that costs 4 or more."
                        ]
                    ]
                },
                {
                    name: "Private Investigations",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/luke-cage-noir-03.png",
                    hc: 1,
                    rarity: 1,
                    cost: 4,
                    attack: "2",
                    abilities: [
                        [
                            { keyword: 32 },
                            " for a card that costs 4 or more."
                        ]
                    ]
                },
                {
                    name: "Unbreakable Cage",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/luke-cage-noir-02.png",
                    hc: 4,
                    rarity: 2,
                    cost: 6,
                    attack: "4",
                    abilities: [
                        [
                            "Once per turn, if a player would gain a Wound, you may reveal this card and ",
                            { keyword: 32 },
                            " for any card instead."
                        ]
                    ]
                },
                {
                    name: "Weight of the World",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/luke-cage-noir-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 8,
                    attack: "5+",
                    abilities: [
                        [
                            "You get ",
                            { bold: "+2" },
                            { icon: 1 },
                            " for each other card you played this turn that costs 4 or more."
                        ]
                    ]
                },
            ]
        },
        {
            id: 131,
            name: "Spider-Man Noir",
            team: 3,
            cards: [
                {
                    name: "Gumshoe's Revolver",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/spider-man-noir-03.png",
                    hc: 5,
                    rarity: 1,
                    cost: 2,
                    attack: "1",
                    abilities: [
                        [
                            { keyword: 32 },
                            " for a card that costs 2 or less."
                        ]
                    ]
                },
                {
                    name: "Webs of Darkness",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/spider-man-noir-04.png",
                    hc: 3,
                    rarity: 1,
                    cost: 2,
                    attack: "1+",
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
                    name: "Solve the Crime",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/spider-man-noir-02.png",
                    hc: 2,
                    rarity: 2,
                    cost: 2,
                    attack: "2",
                    abilities: [
                        [
                            { hc: 2 },
                            ": ",
                            { keyword: 32 },
                            " the Bystander Stack for a Bystander and rescue it."
                        ]
                    ]
                },
                {
                    name: "Spider-Totem's Chosen",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/spider-man-noir-01.png",
                    hc: 4,
                    rarity: 3,
                    cost: 2,
                    attack: "1",
                    abilities: [
                        [
                            { team: 3 },
                            ": ",
                            { keyword: 32 },
                            " each player's deck for a card that costs 2 or less, play a copy of that card, then put it into their discard pile."
                        ]
                    ]
                },
            ]
        },
    ],
    masterminds: [
        {
            id: 38,
            name: "Charles Xavier, Professor of Crime",
            tacticName: "Charles Xavier",
            vAttack: "8",
            vp: 6,
            cards: [
                {
                    name: "Charles Xavier, Professor of Crime",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/charles-xavier-01.png",
                    vAttack: "8+",
                    abilities: [
                        [
                            "Charles Xavier gets ",
                            { bold: "+1" },
                            { icon: 1 },
                            " for each Bystander in the HQ and city."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": X-Men Noir"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Four Heroes in the HQ capture ",
                            { keyword: 33 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Commit to the Asylum",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/charles-xavier-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player ",
                            { keyword: 32, text: "Investigates" },
                            " their deck for a card with an ",
                            { icon: 1 },
                            " icon and KOs it. Players reveal all the cards they ",
                            { keyword: 32, text: "Investigated" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Master Manipulator",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/charles-xavier-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 32 },
                            " the Hero Deck for an ",
                            { team: 4 },
                            " card and put it into your discard pile."
                        ]
                    ]
                },
                {
                    name: "Corrupt Weak Minds",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/charles-xavier-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player puts a random Bystander from their Victory Pile onto a Hero in the HQ as a ",
                            { keyword: 33 },
                            "."
                        ]
                    ]
                },
                {
                    name: "X-Con Men",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/charles-xavier-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals an ",
                            { team: 4 },
                            " Hero or gains a Wound."
                        ]
                    ]
                }
            ]
        },
        {
            id: 39,
            name: "The Goblin, Underworld Boss",
            tacticName: "The Goblin",
            vAttack: "10",
            vp: 6,
            cards: [
                {
                    name: "The Goblin, Underworld Boss",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/goblin-underworld-boss-01.png",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            { bold: "Start of Game" },
                            ": The Goblin captures 2 ",
                            { keyword: 33 },
                            "."
                        ],
                        [
                            { bold: "Always Leads" },
                            ": Goblin's Freak Show"
                        ],
                        [
                            { bold: "Master Strike" },
                            ": Two random Bystanders from each player's Victory Pile become ",
                            { keyword: 33 },
                            " held by The Goblin. Any player who didn't have two Bystanders gains a Wound instead."
                        ]
                    ]
                },
                {
                    name: "Sinister Dreams",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/goblin-underworld-boss-05.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": Each other player reveals a ",
                            { team: 9 },
                            " or ",
                            { team: 3 },
                            " Hero or gains a Wound."
                        ]
                    ]
                },
                {
                    name: "Blackmail the Judges",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/goblin-underworld-boss-02.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": For each Goblin's Freak Show Villain in the city, The Goblin captures 2 ",
                            { keyword: 33 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Carnival of Carnage",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/goblin-underworld-boss-04.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": For each Goblin's Freak Show Villain in the city, each other player discards a card."
                        ]
                    ]
                },
                {
                    name: "Blind Loyalty",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/goblin-underworld-boss-03.png",
                    tactic: true,
                    abilities: [
                        [
                            { bold: "Fight" },
                            ": ",
                            { keyword: 32 },
                            " the Villain Deck for a Goblin's Freak Show Villain and put it into your Victory Pile."
                        ]
                    ]
                }
            ]
        },
    ],
    villains: [
        {
            id: 51,
            name: "Goblin's Freak Show",
            cards: [
                {
                    name: "Vulture, Carnival Cannibal",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/goblins-freak-show-06.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": The Vulture captures 2 ",
                            { keyword: 33, text: "Hidden Witnesses" },
                            "."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Each other player KOs a Bystander from their Victory Pile or gains a Wound."
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
                    name: "The Chameleon",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/goblins-freak-show-04.png",
                    qtd: 2,
                    vAttack: "4",
                    vp: "2",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Chameleon captures a ",
                            { keyword: 33 },
                            "."
                        ],
                        [
                            {
                                bold: "Fight"
                            },
                            ": Reveal the top card of the Villain Deck. If it's a Villain, it enters the city space where The Chameleon was."
                        ]
                    ]
                },
                {
                    name: "Kraven, Animal Trainer",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/goblins-freak-show-01.png",
                    qtd: 1,
                    vAttack: "",
                    vp: "4",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": For each Hero in the HQ that costs 7 or more, Kraven captures a ",
                            { keyword: 33 },
                            ". Kraven's ",
                            { icon: 1 },
                            " is equal to the cost of the highest-cost card in the HQ."
                        ]
                    ]
                },
                {
                    name: "Ox",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/goblins-freak-show-03.png",
                    qtd: 1,
                    vAttack: "5",
                    vp: "3",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each other player reveals a ",
                            { hc: 4 },
                            " Hero or Ox captures a random Bystander from their Victory Pile as a ",
                            { keyword: 33 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Montana",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/goblins-freak-show-02.png",
                    qtd: 1,
                    vAttack: "4",
                    vp: "2",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Each Goblin's Freak Show Villain captures a ",
                            { keyword: 33 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Fancy Dan",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/goblins-freak-show-05.png",
                    qtd: 1,
                    vAttack: "1",
                    vp: "2",
                    vAttackAsterisk: true,
                    abilities: [
                        [
                            {
                                bold: "Ambush"
                            },
                            ": Fancy Dan captures 3 ",
                            { keyword: 33, text: "Hidden Witnesses" },
                            "."
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
            id: 52,
            name: "X-Men Noir",
            cards: [
                {
                    name: "Bobby “Iceman“ Drake",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/x-men-noir-07.png",
                    qtd: 1,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 32 },
                            " for a card with a ",
                            { icon: 2 },
                            " icon."
                        ]
                    ]
                },
                {
                    name: "Comrade Rasputin, Steel Wall",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/x-men-noir-06.png",
                    qtd: 2,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 32 },
                            " for a Hero that costs 0 and KO it."
                        ]
                    ]
                },
                {
                    name: "Henry “Beast“ McCoy",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/x-men-noir-05.png",
                    qtd: 1,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": ",
                            { keyword: 32 },
                            " for any card that's ",
                            { hc: 5 },
                            " or ",
                            { hc: 4 },
                            "."
                        ]
                    ]
                },
                {
                    name: "Jean Grey Noir",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/x-men-noir-01.png",
                    qtd: 1,
                    vAttack: "5",
                    vp: "3",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": When you draw a new hand of cards at the end of your turn, ",
                            { keyword: 32 },
                            " for an extra card."
                        ]
                    ]
                },
                {
                    name: "Scott “Cyclops“ Summers",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/x-men-noir-03.png",
                    qtd: 1,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Escape"
                            },
                            ": Each player ",
                            { keyword: 32, text: "Investigates" },
                            " their deck for a card that costs 1 or more and KOs it. Players reveal the cards they ",
                            { keyword: 32, text: "Investigated" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Warden Emma Frost",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/x-men-noir-04.png",
                    qtd: 1,
                    vAttack: "6",
                    vp: "4",
                    abilities: [
                        [
                            {
                                bold: "Escape"
                            },
                            ": ",
                            { keyword: 32 },
                            " the Villain Deck for a Scheme Twist and play it. Reveal all the cards you ",
                            { keyword: 32, text: "Investigated" },
                            "."
                        ]
                    ]
                },
                {
                    name: "Ororo Munroe, Storm-Tossed",
                    imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/x-men-noir-02.png",
                    qtd: 1,
                    vAttack: "4",
                    vp: "2",
                    abilities: [
                        [
                            {
                                bold: "Fight"
                            },
                            ": KO a Hero from the HQ. ",
                            { keyword: 32 },
                            " the Hero Deck for a card to put in that emptied HQ space."
                        ]
                    ]
                }
            ]
        }
    ],
    schemes: [
        {
            id: 72,
            name: "Find the Split Personality Killer",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/75Scheme(92).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists."
                        ],
                        [
                            { bold: "Twist 1-5" },
                            ": Shuffle 3 Bystanders from the Bystander Stack and the top card of the Hero Deck face down next to this Scheme as a deck of “Murder Suspects.“"
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Whenever you defeat a Villain, you may pay ",
                            { bold: "1" },
                            { icon: 1 },
                            " extra to ",
                            { keyword: 32 },
                            " the Murder Suspects for a Bystander and rescue it."
                        ],
                        [
                            { bold: "Twist 6" },
                            ": Each player writes down their guess for which Hero Name is the Split Personality Killer. Reveal the entire Murder Suspects Deck. The Hero Name with the most cards in the Murder Suspect Deck ",
                            { italic: "(or tied for most)" },
                            " is the Split Personality Killer. Each player who guessed right wins. All other players lose."
                        ],
                    ]
                },
            ]
        },
        {
            id: 73,
            name: "Silence the Witnesses",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/72Scheme(89).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 6 Twists."
                        ],
                        [
                            { bold: "Twist" },
                            ": This Scheme captures 3 ",
                            { keyword: 33, text: "Hidden Witnesses" },
                            ". If it already had any ",
                            { keyword: 33, text: "Hidden Witnesses" },
                            ", put those into the Escape Pile."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 6 Bystanders are in the Escape Pile."
                        ],
                    ]
                },
            ]
        },
        {
            id: 74,
            name: "Five Families of Crime",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/74Scheme(91).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Add two extra Villain Groups. Split the Villain Deck into 5 shuffled decks, one above each city space."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": Each Villain Deck uses its own city of one city space. Each turn, you choose which Villain Deck plays a card."
                        ],
                        [
                            { bold: "Twist" },
                            ": Play two cards from a Villain Deck."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 8 Villains escape or all Villain Decks run out."
                        ],
                    ]
                },
            ]
        },
        {
            id: 75,
            name: "Hidden Heart of Darkness",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/73Scheme(90).png",
            cards: [
                {
                    abilities: [
                        [
                            { bold: "Setup" },
                            ": 8 Twists. Shuffle the Mastermind Tactics into the Villain Deck as Villains."
                        ],
                        [
                            { bold: "Special Rules" },
                            ": If there are no Tactics in the city, you can win the game by fighting the Mastermind card."
                        ],
                        [
                            { bold: "Twist" },
                            ": Each player shuffles a Tactic from their Victory Pile into the Villain Deck. Any player who did so draws two cards. Then, ",
                            { keyword: 32 },
                            " the Villain Deck for a Tactic and that Tactic enters the city. Reveal all the cards you ",
                            { keyword: 32, text: "Investigated" },
                            "."
                        ],
                        [
                            { bold: "Evil Wins" },
                            ": When 2 Tactics escape."
                        ],
                    ]
                },
            ]
        },
    ],
    bystanders: [
        {
            id: 21,
            name: "Detective Wolverine",
            imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-detective-wolverine.png",
            vp: 1,
            cards: [
                {
                    qtd: 1,
                    abilities: [
                        [
                            "When you rescue this Bystander, ",
                            { keyword: 32 },
                            " the Villain Deck for a Villain worth 1",
                            { icon: 4 },
                            " and put it in your Victory Pile."
                        ]
                    ]
                }
            ]
        },
    ],
};
