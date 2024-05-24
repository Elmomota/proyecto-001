const express = require("express");
const app = express();
const port = 3002;

const { getZapatillas , getZapatillasById } = require("./controllers/getZapatillas");


app.get("/", getZapatillas);

app.get("/:id", getZapatillasById);



app.listen(port , ()=> {    
    console.log(`Corriendo ok en el puerto : ${port}`);
});