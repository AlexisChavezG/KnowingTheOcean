const AnimalsController = require("./controllers/animalsControllers");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/js", express.static('./src/js/'));
app.use("/css",express.static('./src/css/'));
app.use("/img",express.static('./src/img/'))

app.get("/", (request, response) => {
    response.render("index");
});
app.get("/infoDex", (request, response) => {
    response.render("infoDex");
});
app.get("/oceandex", (request, response) => {
    response.render("oceandex");
});
app.get("/contacto",(request,response)=>{
    response.render("contacto");
});
app.get("/animalByName/:name", (request, response) => {
    const animalName = request.params.name;
    const animalsByName = AnimalsController.filterByNameAnimal(animalName);
    console.log(animalsByName)
    response.json(animalsByName);

});
app.listen(port, () => {
    console.log(`Aplicación funcionando en el puerto:${port}`);
});

