/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Lorena",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 2,
        nombre: "Nicolas",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 3,
        nombre: "Cristian",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 4,
        nombre: "Jeronimo",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 5,
        nombre: "Lucia",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 6,
        nombre: "Ignacio",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 7,
        nombre: "Gaston",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 8,
        nombre: "Tomas",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 9,
        nombre: "Lucas",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 8,
        nombre: "Rodrigo",
        imagen: "./imagenes/gato-programador.webp",
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

//llamado a la funcion recorrer cartas
recorrerListado()


function crearCarta() {
    //pedir datos al usuario
    const nombre = prompt("Nombre del desarrollador")
    const imagen = prompt("Imagen del desarrollador")
    const descripcion = prompt("Identificate con 3 palabras")

    //creamos un objeto con los datos del usuario
    const carta = {nombre,imagen,descripcion}

    //añadir la carta al listado de cartas
    listadoCartas.push(carta)

    //llamado a la funcion recorrer cartas
    recorrerListado()
}