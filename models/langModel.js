const db = require("./conn");

class TopicList {
    constructor (language, status_id) {
        this.language = language;
        this.status_id = status_id;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT language, rankings.rankings, rankings.numbers, topics.status_id FROM topics 
            INNER JOIN rankings 
            ON topics.status_id = rankings.id;`);
            return response;
        } catch (error) {
            return error.message;
        }
    } // This method populates the HTML
    
    static async getAllStatuses() {
        try {
            const response = await db.any(`SELECT * FROM rankings;`);
            return response;
        } catch (error) {
            return error;
        }
    }


    static async updateStatus(status_id, language) {
        try {
            const response = await db.result(`UPDATE topics SET status_id = $1 WHERE language = $2;`, [status_id, language]); // This saves us from a Bobby Tables situation, or 'sanitize' the inputs and make sure they get turned into strings
            return response;
        } catch (error) {
            console.error("ERROR:", error);
            return error;
        }
    } // This method updates the value to match
};

module.exports = TopicList;