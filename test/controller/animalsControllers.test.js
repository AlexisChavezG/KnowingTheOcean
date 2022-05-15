const animalsControllers = require("./../../libs/controllers/animalsControllers");

describe("Unit tests for animals Controllers", () => {
    test("Verify that it isn't empty", () => {
        expect(animalsControllers.filterByNameAnimal("Totoaba")).not.toBe(0);

    });
    test("Use of animalsControler",()=>{
        expect(animalsControllers.filterByNameAnimal("Totoaba")[0]).toHaveProperty('causasExtincion');
        expect(animalsControllers.filterByNameAnimal("Totoaba")[0]).toHaveProperty('nombreCientifico',"Totoaba macdonaldi");
    })
});