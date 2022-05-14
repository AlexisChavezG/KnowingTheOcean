const readService = require("../services/serviceRead");
const readerOp = require("../utils/read");
const example = require('../../src/js/app');
class AnimalsControllers{
    static filterByNameAnimal(name){
        const animals = readerOp.readJsonFile();
        const result = readService.filtrarByName(animals,name);
        return result;
    }
}
module.exports = AnimalsControllers