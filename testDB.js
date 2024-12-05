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

// Tests - Sets
// Test there are currently 40 sets - change when new sets are out

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

// Testing HeroSets