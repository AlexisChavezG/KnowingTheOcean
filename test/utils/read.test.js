const Reader = require("../../libs/utils/read");

describe("Test for Reader", () => {
    test("Create a Reader object and verify that it isn't empty", () => {
        const animals = Reader.readJsonFile();
        expect(animals.length).not.toBe(0);
    });
});