/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Lorena",
        imagen: "./imagenes/patoloko.jpg",
        descripcion: "",
    },
    {
        id: 2,
        nombre: "Nicolas",
        imagen: "./imagenes/patoloko.jpg",
        descripcion: "",
    },
    {
        id: 3,
        nombre: "Cristian",
        imagen: "./imagenes/patoloko.jpg",
        descripcion: "",
    },
    {
        id: 4,
        nombre: "Jeronimo",
        imagen: "./imagenes/patoloko.jpg",
        descripcion: "",
    },
    {
        id: 5,
        nombre: "Lucia",
        imagen: "./imagenes/patoloko.jpg",
        descripcion: "",
    },
    {
        id: 6,
        nombre: "Ignacio",
        imagen: "./imagenes/patoloko.jpg",
        descripcion: "",
    },
    {
        id: 7,
        nombre: "Gaston",
        imagen: "./imagenes/patoloko.jpg",
        descripcion: "",
    },
    {
        id: 8,
        nombre: "Tomas",
        imagen: "./imagenes/patoloko.jpg",
        descripcion: "",
    },
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")

/* Función que recorre el listado de las cartas */
function recorrerListado() {
    contenedorCartas.innerHTML = ""
    listadoCartas.forEach(
        (carta) => contenedorCartas.innerHTML += `
            <article class="card">
                <img src=${carta.imagen} alt="Imagen del proyecto">
                <div class="info">
                    <h2>${carta.nombre}</h2>
                    <p>${carta.descripcion}</p>
                </div>
            </article>`
    )
}

recorrerListado()

function crearCarta() {
    const nombre = prompt("Nombre del desarrollador")
    const imagen = prompt("Imagen del desarrollador")
    const descripcion =prompt("indentificate con 3 palabras")

    const carta = {nombre, imagen, descripcion}
    listadoCartas.push(carta)

    recorrerListado()
}


