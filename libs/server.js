const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (request, response) => {
    //response.json({message: "Bienvenido a KnowingTheOcean"});
    response.render("index", { titulo: "inicio EJS", mensagge : 'Este es un mensaje de prueba' });
});

app.listen(port, () => {
    console.log(`Aplicación funcionando en el puerto:${port}`);
});

