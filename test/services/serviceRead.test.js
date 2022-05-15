const Reader = require("../../libs/utils/read");
const ServiceRead=require("../../libs/services/serviceRead");
describe("Test for ServiceRead", () => {
    test("Test for method of the class serviceRead", () => {
        const animals = Reader.readJsonFile();
        expect(ServiceRead.filtrarByName(animals,"Totoaba").length).not.toBe(0);
    });
});