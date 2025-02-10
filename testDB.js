const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('Legendary.db');

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function query_result(err, rows) {
    if (err) {
        console.error("Error querying data:", err)
        return err;
    }

    console.log("Query results:", rows);
    return rows;
}

// Tests

// CardSet
db.all("SELECT COUNT(*) FROM CardSet;",
    (err, rows) => assert((
        rows[0]['COUNT(*)'] == 40
    ), "Missing sets, expected 40")
);

// Test a certain set is entered - Dark City
db.all("SELECT id FROM CardSet WHERE name='Dark City';",
    (err, rows) => assert((
        rows[0]['id'] == 2
    ), "Dark City id expected to be 2")
);

// Test a later set like Messiah Complex
db.all("SELECT initials FROM CardSet WHERE name='Messiah Complex'",
    (err,rows) => assert((
        rows[0]['initials'] == 'MC'
    ), "Messiah Complex expected MC as initials")
);

// Test CardSet_CardType
// Test for type of card in given set: Noir has Schemes

db.all("SELECT COUNT(*) FROM CardSet\
    INNER JOIN CardSet_CardType on CardSet_CardType.card_set_id = CardSet.id\
    WHERE CardSet.name = 'Noir'\
    AND CardSet_CardType.card_type = 'Scheme';",
    (err, rows) => assert((
        rows[0]['COUNT(*)'] == 1
    ), "Expected Noir to contain the Scheme card type")
);

// Testing HeroSet
db.all("SELECT id, name, set_id, team FROM HeroSet WHERE name='Spider-Man 2099'",
    (err, rows) => assert((
        rows[0]['team'] == 'Spider Friends'
    ), "Expected 'Spider Friends' as team for Spider-Man 2099")
);

// Testing HeroCard

db.all("SELECT hero_id FROM HeroCard WHERE name='Retractable Talons'",
    (err, rows) => assert((
        rows[0]['hero_id'] == 40
    ), "Expected 'Retractable Talons' to have hero_id ")
);

// Piercing Energy Test

// Divided Cards

db.all("SELECT hc2.name\
        FROM HeroCard as hc2\
        INNER JOIN HeroCard as hc1\
        ON hc1.divided_id = hc2.id\
        WHERE hc1.name = 'Reliable'",
    (err,rows) => assert((
        rows[0].name == 'Unpredictable'
    ), "Expected the name of the divided card paired with 'Reliable' to be 'Unpredictable'")
);

// Testing HeroCard_CardClass

db.all("SELECT HeroCard_CardClass.class\
        FROM HeroCard\
        INNER JOIN HeroCard_CardClass\
        ON HeroCard.id = HeroCard_CardClass.card_id\
        WHERE HeroCard.name = 'Retractable Talons'",
    (err, rows) => assert((
        rows[0]['class'] == 'Covert'
    ), "Expected 'Retractable Talons' to have class 'Covert'")
);

// Testing HeroCard_Keyword

db.all("SELECT hc_k.keyword\
        FROM HeroCard_Keyword as hc_k\
        INNER JOIN HeroCard as hc\
        ON hc.id = hc_k.card_id\
        WHERE hc.name = 'Furry Fury'",
    (err,rows) => 
        assert((
        rows.length == 2
    ), "Expected 'Furry Fury' to have exactly 2 keywords")
);

// Testing VillainSet
db.all("SELECT id, name, set_id FROM VillainSet WHERE name='Alchemax Enforcers'",
    (err, rows) => assert((
        rows[0].id == 70
    ), "Expected set_id of Alchemax Enforcers to be 70")
);

// Testing VillainCard

db.all("SELECT name FROM VillainCard WHERE name='Heimdall 2099'",
    (err, rows) => assert((
        rows[0].name == 'Heimdall 2099'
    ), "Expected 'Heimdall 2099' to be a VillainCard")
);

// Testing VillainCard_Keyword

db.all("SELECT vc_k.keyword\
    FROM VillainCard_Keyword as vc_k\
    INNER JOIN VillainCard as vc\
    ON vc.id = vc_k.card_id\
    WHERE vc.name = 'Jigsaw 2099'",
(err,rows) => 
    assert((
    rows.length == 1
    ), "Expected 'Jigsaw 2099' to have exactly 1 keywords")
);

db.all("SELECT vc_k.keyword\
    FROM VillainCard_Keyword as vc_k\
    INNER JOIN VillainCard as vc\
    ON vc.id = vc_k.card_id\
    WHERE vc.name = 'Venture'",
(err,rows) => 
    assert((
    rows[0]['keyword'] == 'Cyber-Mod'
    ), "Expected 'Venture' to have keyword 'Cyber-Mod'")
);

// Testing MastermindSet

db.all("SELECT cs.name\
        FROM CardSet as cs\
        INNER JOIN MastermindSet as ms\
        ON cs.id = ms.set_id\
        WHERE ms.name = 'Red Skull'",
    (err, rows) => assert((
        rows[0]['name'] == 'Core Set'
    ), "Expected 'Red Skull' to be in the Core Set")   
);

// Testing MastermindSet always_leads

db.all("SELECT vs.name FROM VillainSet AS vs\
        INNER JOIN MastermindSet AS ms\
        ON vs.id = ms.always_leads\
        WHERE ms.name = 'Killmonger'",
    (err, rows) => assert((
        rows[0]['name'] == "Killmonger's League"
    ), "Expected 'Killmonger' to always lead 'Killmonger\'s League'")
);

// Testing MastermindCard


// Testing MastermindCard_Keyword

// HenchmenSet

// HenchmenCard

// HenchmenCard_Keyword

// BystanderCard

// BystnderCard_Keyword

// SchemeCard

// SchemeCard_Keyword