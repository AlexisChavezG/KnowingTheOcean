const fs = require("fs");

class Reader{
    static readJsonFile(){
        const rawdata = fs.readFileSync("endangered_species.json");
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;
