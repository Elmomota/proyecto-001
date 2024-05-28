import { getZapatillas } from "./peticiones/obZapatillas.js";

const enviarDatos = (id, nombre, descripcion, precio, foto, disponible) => {
    const rutaArchivoHTML = "../zapatillas.html";

    fetch(rutaArchivoHTML)
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo HTML");
            }
            return response.text();
        })
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const imagePage = doc.getElementById("imagePage");
            imagePage.src = foto;
            imagePage.alt = `Nombre de imagen: ${nombre}`;

            const namePage = doc.getElementById("namePage");
            namePage.textContent = `Nombre: ${nombre}`;

            const descriptionPage = doc.getElementById("descriptionPage");
            descriptionPage.textContent = `Descripción: ${descripcion}`;

            const pricePage = doc.getElementById("pricePage");
            pricePage.textContent = `Precio: ${precio}`;

            const availablePage = doc.getElementById("availablePage");
            availablePage.textContent = `Disponible: ${disponible}`;

            const nuevoHTML = new XMLSerializer().serializeToString(doc);
            document.body.innerHTML = nuevoHTML;
        })
        .catch((error) => console.error(`Error al cargar el archivo HTML: ${error}`));
}

const crearCards = (results = []) => {
    let zapatillasRow = document.getElementById("zapatillasRow");

    results.forEach((result) => {
        const { id, nombre, descripcion, precio, foto, disponible } = result;

        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "col-xs-12", "mt-2", "mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = foto;
        img.alt = `Nombre de imagen: ${nombre}`;

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = `Nombre: ${nombre}`;

        const description = document.createElement("p");
        description.classList.add("card-text");
        description.textContent = `Descripción: ${descripcion}`;

        const price = document.createElement("p");
        price.classList.add("card-text");
        price.textContent = `Precio: ${precio}`;

        const availability = document.createElement("p");
        availability.classList.add("card-text");
        availability.textContent = `Disponible: ${disponible}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn", "btn-success");
        btnVer.textContent = "Ver detalles";

        btnVer.addEventListener("click", () => {
            enviarDatos(id, nombre, descripcion, precio, foto, disponible);
        });

        divBody.appendChild(title);
        divBody.appendChild(description);
        divBody.appendChild(price);
        divBody.appendChild(availability);
        divBody.appendChild(btnVer);

        card.appendChild(img);
        card.appendChild(divBody);

        divCol.appendChild(card);

        zapatillasRow.appendChild(divCol);
    });
}

getZapatillas()
    .then(data => crearCards(data))
    .catch(error => console.error(`Error al obtener los datos de las zapatillas: ${error}`));

