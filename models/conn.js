//Connecting to our database

const host = "lallah.db.elephantsql.com";
const database = "adakltcf";
const user = "adakltcf";
const password = "nZR52T-_PHQD2MYeF52bwgfw0LqEAoH2";

const pgp = require("pg-promise")({
    query: function (event) {
        console.log("QUERY:", event.query);
    } 
}); 

//pg promise: a way to interface with PostgreSQL in node that uses promises

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options); // Telling pg promise to talk to the database

module.exports = db;