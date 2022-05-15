const Reader = require("../../libs/utils/read");

describe("Test for Reader", () => {
    test("Create a Reader object and verify that it isn't empty", () => {
        const explorers = Reader.readJsonFile();
        expect(explorers.length).not.toBe(0);
    });
});