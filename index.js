const express = require("express");
const cors = require("cors"); 
const app = express();
const port = 3002;

const { getZapatillas, getZapatillasById } = require("./controllers/getZapatillas");

// Permitir solicitudes CORS desde cualquier origen
// app.use(cors());

// Permitir solicitudes CORS solo desde http://127.0.0.1:5502
app.use(cors({
    origin: 'http://127.0.0.1:5502'
}));

app.get("/", getZapatillas);

app.get("/:id", getZapatillasById);

app.listen(port, () => {
    console.log(`Corriendo ok en el puerto : ${port}`);
});
