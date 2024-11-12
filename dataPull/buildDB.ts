import { interceptors } from 'undici-types';
import * as AllData from './data/index';
import { heroClassesArray } from './data/metadata';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('Legendary.db');

class idCounter {
    counter;

    constructor() {
        this.counter = -1;
    }

    newID() {
        this.counter += 1;
        return this.counter;
    }
    
}

function query_result(err: any, rows: any) {
    if (err) {
        console.error("Error querying data:", err)
        return
    }

    //console.debug("Query results:", rows);
}

const id = new idCounter();

// TODO: I'm going to need to make an object for looking up sets, le sigh
// That or within the loop of inserting?

const id_lookup: string | any[] = [];

// This keeps track of inserted sets and their id by original author
// old id = index, new id = my_id
const id_conversion: string | any[] = [];

db.serialize(() => {

    //console.debug('Creating Tables');

    // Create a Table for card sets
    db.run('CREATE TABLE IF NOT EXISTS CardSet (\
    id INTEGER PRIMARY KEY,\
    value TEXT,\
    name TEXT,\
    initials TEXT);')

    // Create a Table for card types in set
    .run('CREATE TABLE IF NOT EXISTS CardSetCardType (\
    card_set_id INTEGER, \
    card_type TEXT,\
    FOREIGN KEY (card_set_id)\
    REFERENCES CardSet (id));')

    // Create Table for Keyword rules explanation
    .run('CREATE TABLE IF NOT EXISTS Keyword (\
    keyword TEXT PRIMARY KEY,\
    rules_text TEXT);')

    // Table for CardClasses
    .run('CREATE TABLE IF NOT EXISTS CardClass (\
    name TEXT PRIMARY KEY,\
    color TEXT,\
    picture TEXT);')

    // Create Tables for Heroes
    .run('CREATE TABLE IF NOT EXISTS HeroSet (\
    id INTEGER PRIMARY KEY,\
    name TEXT,\
    team TEXT,\
    set_id INTEGER,\
    FOREIGN KEY (set_id)\
    REFERENCES CardSet (id));')

    // Note divided can be Null and is a FK to this same Table
    // It is for the divided cards
    // When we insert heroes we will need to check if it's divided ->
    // store the id of the first card, put divided_id as NULL
    // when we add the next card we will reference the id and change the 
    .run('CREATE TABLE IF NOT EXISTS HeroCard (\
    id INTEGER PRIMARY KEY,\
    hero_set_id INTEGER,\
    name TEXT,\
    rule_text TEXT,\
    printed_fight TEXT,\
    printed_recruit TEXT,\
    printed_piercing_energy TEXT,\
    image_url TEXT,\
    divided_id INTEGER,\
    cost TEXT,\
    FOREIGN KEY (hero_set_id) REFERENCES HeroSet (id),\
    FOREIGN KEY (divided_id) REFERENCES HeroSet (id));')

    .run('CREATE TABLE IF NOT EXISTS HeroCard_Keyword (\
    card_id INTEGER,\
    keyword TEXT,\
    FOREIGN KEY (card_id)\
    REFERENCES HeroCard (id),\
    FOREIGN KEY (keyword)\
    REFERENCES Keyword (keyword));')
    
    .run('CREATE TABLE IF NOT EXISTS HeroCard_CardClass(\
    card_id INTEGER,\
    class text,\
    FOREIGN KEY (card_id)\
    REFERENCES HeroCard (id),\
    FOREIGN KEY (class)\
    REFERENCES CardClass (name));')

    // Create Tables for Villains

    .run('CREATE TABLE IF NOT EXISTS VillainSet (\
    id INTEGER PRIMARY KEY,\
    name TEXT,\
    set_id INTEGER,\
    FOREIGN KEY (set_id) REFERENCES CardSet (id));')

    .run('CREATE TABLE IF NOT EXISTS VillainCard (\
    id INTEGER PRIMARY KEY,\
    name TEXT,\
    villain_set INTEGER,\
    qty INTEGER,\
    rules_text TEXT,\
    fight_strength INTEGER,\
    picture TEXT,\
    FOREIGN KEY (villain_set) REFERENCES VillainSet (id));')

    .run('CREATE TABLE IF NOT EXISTS VillainCard_Keyword (\
    card_id INTEGER,\
    keyword TEXT,\
    FOREIGN KEY (card_id) REFERENCES VillainCard (id),\
    FOREIGN KEY (keyword) REFERENCES Keyword (name));')
    
    // Create tables for Masterminds

    .run('CREATE TABLE IF NOT EXISTS MastermindSet (\
    id INTEGER PRIMARY KEY,\
    name TEXT,\
    set_id INTEGER,\
    always_leads INTEGER,\
    FOREIGN KEY (set_id) REFERENCES CardSet (id),\
    FOREIGN KEY (always_leads) REFERENCES VillainSet (id));')

    .run('CREATE TABLE IF NOT EXISTS MastermindCard (\
    id INTEGER PRIMARY KEY,\
    name TEXT,\
    mastermind_set INTEGER,\
    epic NUMERIC,\
    transformed NUMERIC,\
    tactic NUMERIC,\
    fight_strength INTEGER,\
    rules_text TEXT,\
    picture TEXT,\
    vp INTEGER,\
    FOREIGN KEY (mastermind_set) REFERENCES MastermindSet (id));')

    .run('CREATE TABLE IF NOT EXISTS MastermindCard_Keyword (\
    card_id INTEGER,\
    keyword TEXT,\
    FOREIGN KEY (card_id) REFERENCES MastermindCard (id),\
    FOREIGN KEY (keyword) REFERENCES Keyword (name));')

    // Create Tables for Henchmen

    .run('CREATE TABLE IF NOT EXISTS HenchmenSet (\
    id INTEGER PRIMARY KEY,\
    name TEXT,\
    set_id INTEGER,\
    FOREIGN KEY (set_id) REFERENCES CardSet(id));')

    .run('CREATE TABLE IF NOT EXISTS HenchmenCard (\
    id INTEGER PRIMARY KEY,\
    henchmen_set INTEGER,\
    qty INTEGER,\
    vp INTEGER,\
    rules_text TEXT,\
    fight_strength INTEGER,\
    picture TEXT,\
    FOREIGN KEY (henchmen_set) REFERENCES HenchmenSet (id));')

    .run('CREATE TABLE IF NOT EXISTS HenchmenCard_Keyword(\
    card_id INTEGER,\
    keyword TEXT,\
    FOREIGN KEY (card_id) REFERENCES HenchmenCard (id),\
    FOREIGN KEY (keyword) REFERENCES Keyword (name));')

    // Create Tables for Bystanders

    .run('CREATE TABLE IF NOT EXISTS BystanderCard (\
    id INTEGER PRIMARY KEY,\
    name TEXT,\
    set_id INTEGER,\
    qty INTEGER,\
    hero NUMERIC,\
    rule_text TEXT,\
    FOREIGN KEY (set_id) REFERENCES CardSet(id));')
    
    .run('CREATE TABLE IF NOT EXISTS BystanderCard_Keyword (\
    card_id INTEGER,\
    keyword TEXT,\
    FOREIGN KEY (card_id) REFERENCES BystanderCard (id),\
    FOREIGN KEY (keyword) REFERENCES Keyword (name));')

    // Create Tables for Schemes

    .run('CREATE TABLE IF NOT EXISTS SchemeCard (\
    id INTEGER PRIMARY KEY,\
    set_id INTEGER,\
    name TEXT,\
    picture TEXT,\
    rules_text TEXT,\
    veiled NUMERIC,\
    unveiled NUMERIC,\
    FOREIGN KEY (set_id) REFERENCES CardSet (id));')

    .run('CREATE TABLE IF NOT EXISTS SchemeCard_Keyword (\
    card_id INTEGER,\
    keyword TEXT,\
    FOREIGN KEY (card_id) REFERENCES SchemeCard (id),\
    FOREIGN KEY (keyword) REFERENCES Keyword (name));')
    
    .serialize(() => {
        // Here we start a new string of things because I want to access and store some data with js
        const setArray = AllData.Metadata.setsArray;

        for (const setNum in setArray) {
            let setId = id.newID();

            let setValue = setArray[setNum].value; // Ex: "darkcity"
            let setLabel = setArray[setNum].label; // Ex: "Dark City"
            let setInitials = setArray[setNum].initials; // Ex: "DC"

            id_lookup[setId] = setValue; // Start adding to my id array for js lookups
            //console.debug('id: ', setId);
            //console.debug('setValue:', setLabel);
    
            // This will be for the CardSet-CardType Table
            let setCardTypes = setArray[setNum].cardTypes;
            
            // Insert into CardSet
            db.run("INSERT OR IGNORE INTO CardSet (id, value, name, initials) VALUES (?,?,?,?);", 
                [setId, setValue, setLabel, setInitials]);

            // Add the old id and new id to a lookup table - JS
            id_conversion[setArray[setNum].id] = setId;
    
            for (const cardTypeNum in setCardTypes ) {
    
                let cardType = setCardTypes[cardTypeNum];
                let cardTypeValue = '';
                switch(cardType) {
                    case 1:
                        cardTypeValue = "Hero";
                        break;
                    case 2:
                        cardTypeValue = "Mastermind";
                        break;
                    case 3:
                        cardTypeValue = "Henchmen";
                        break;
                    case 4:
                        cardTypeValue = "Villain";
                        break;
                    case 5:
                        cardTypeValue = "Scheme";
                        break;
                    case 6:
                        cardTypeValue = "Bystander";
                        break;
                }
                db.run("INSERT OR IGNORE INTO CardSetCardType (card_set_id, card_type) VALUES (?, ?);",
                    [setId, cardTypeValue]);
            };
        };
    })

    // INSERT INTO CardClass - hard coded here as I doubt they will add any
    .run("INSERT OR IGNORE INTO CardClass (name, color, picture) VALUES ('None', 'None', 'temp');")
    .run("INSERT OR IGNORE INTO CardClass (name, color, picture) VALUES ('Tech', 'grey', 'temp');")
    .run("INSERT OR IGNORE INTO CardClass (name, color, picture) VALUES ('Covert', 'red', 'temp');")
    .run("INSERT OR IGNORE INTO CardClass (name, color, picture) VALUES ('Ranged', 'blue', 'temp');")
    .run("INSERT OR IGNORE INTO CardClass (name, color, picture) VALUES ('Instinct', 'yellow', 'temp');")
    .run("INSERT OR IGNORE INTO CardClass (name, color, picture) VALUES ('Might', 'green', 'temp');")

    // More INSERTING
    .serialize(() => {
        Object.keys(AllData.SetDefinitions).forEach(function(key) {
            
            let setId = id_conversion[AllData.SetDefinitions[key].id];

            // Insert Heroes
            if (AllData.SetDefinitions[key].hasOwnProperty('heroes')) {

                //console.debug('Heroes:');

                for (let i = 0; i < AllData.SetDefinitions[key].heroes.length; i++) {

                    let heroId = id.newID();
                    //console.debug('id: ', heroId);

                    let heroName = AllData.SetDefinitions[key].heroes[i].name;
                    //console.debug('name: ', heroName);

                    //console.debug('set_id: ', setId)

                    let heroTeam = AllData.SetDefinitions[key].heroes[i].team;
                    //console.debug('team: ', heroTeam);

                    id_lookup[heroId] = heroName;
                    
                    // Looping through each heroes cards here

                    let cards = AllData.SetDefinitions[key].heroes[i].cards;

                    // dividedHeroCardId will be set as the id of any divided card we find
                    // so that we can link the heroes in the table
                    // if dividedHeroId is anything other than 0, we will link the new entry to it
                    // after doing so we reset it to 0

                    let dividedHeroCardId = 0;

                    //console.debug('Cards: ');
            
                    for (let j = 0; j < cards.length; j++) {

                        let heroCardId = id.newID();
                        //console.debug('id: ', heroCardId);

                        //console.debug('hero_id: ', heroId);

                        let heroCardName = cards[j].name;
                        //console.debug('name :', heroCardName);
                        
                        // Need to decipher and unpack this more
                        let ruleText = cards[j].abilities.toString();
                        //console.debug('rule_text:', ruleText);

                        let heroAttack = '';
                        if (cards[j].hasOwnProperty('attack')) {
                            heroAttack = cards[j].attack;
                        } else {
                            heroAttack = 'NULL';
                        };

                        //console.debug('printed_attack: ', heroAttack);

                        let heroRecruit = '';
                        if (cards[j].hasOwnProperty('recruit')) {
                            heroRecruit = cards[j].recruit;
                        } else {
                            heroRecruit = 'NULL';
                        };

                        //console.debug('printed_recruit: ', heroRecruit);

                        let heroPiercingEnergy = '';
                        if (cards[j].hasOwnProperty('piercing')) {
                            heroPiercingEnergy = cards[j].piercing;
                        } else {
                            heroPiercingEnergy = 'NULL';
                        };

                        //console.debug('printed_piercing_energy: ', heroPiercingEnergy);
                        
                        let imageUrl = cards[j].imageUrl;
                        //console.debug('imageUrl :', imageUrl);
                        
                        // translate the heroClass
                        // Recall this could be multiple so we need to insert into a seperate Table
                        let heroClass1 = heroClassesArray[cards[j].hc].label;
                        //console.debug('heroClass1: ', heroClass1);

                        // Insert into TABLE: HeroCard_CardClass
                        
                        if (cards[j].hasOwnProperty('hc2')) {
                            let heroClass2 = heroClassesArray[cards[j].hc2].label;
                            //console.debug('heroClass2: ', heroClass2);
                            // Insert into TABLE: HeroCard_CardClass
                        };

                        // Going to ignore rarity / qty for now
                        // //console.debug('rarity: ', cards[j].rarity);

                        let heroCardCost = cards[j].cost;
                        //console.debug('cost: ', heroCardCost);
                        
                        let dividedId = '';

                        if (dividedHeroCardId != 0) {

                            // The last entry into HeroCards Heroes was a divided card so we
                            // reference the old id
                            dividedId = dividedHeroCardId.toString();
                            //console.debug('dividedId: ', dividedId);

                            // Replace the line of dividedheroCardId with a foreign key to my
                            // my current card
                            //console.debug('card id : ', dividedId, ' attached to card id: ', heroCardId);

                            // reset the dividedHeroCard
                            dividedHeroCardId = 0;
                        } else {
                            // This case means we should input a NULL for the dividedHeroId column
                            dividedId = 'NULL';
                            //console.debug('dividedId: ', dividedId);
                        }

                        if (cards[j].hasOwnProperty('divided') && cards[j].divided == 1) {
                            dividedHeroCardId = heroCardId;
                        };

                    };
                };
            };

            // Villains Next
            if (AllData.SetDefinitions[key].hasOwnProperty('villains')) {
                for (let i = 0; i < AllData.SetDefinitions[key].villains.length; i++) {
                    // stuff
                };
            };

            // Masterminds
            // Always Leads is within the mastermind abilities - will need to start parsing that

            if (AllData.SetDefinitions[key].hasOwnProperty('masterminds')) {
                for (let i = 0; i < AllData.SetDefinitions[key].masterminds.length; i++) {
                    // stuff
                };
            };

            // Schemes
            if (AllData.SetDefinitions[key].hasOwnProperty('schemes')) {
                for (let i = 0; i < AllData.SetDefinitions[key].schemes.length; i++) {
                    // stuff
                };
            };

            // Henchmen
            if (AllData.SetDefinitions[key].hasOwnProperty('henchmen')) {
                for (let i = 0; i < AllData.SetDefinitions[key].henchmen.length; i++) {
                    // stuff
                };
            };

            // Bystanders
            if (AllData.SetDefinitions[key].hasOwnProperty('villains')) {
                for (let i = 0; i < AllData.SetDefinitions[key].villains.length; i++) {
                    // stuff
                };
            };

        });
    });

})

.close();