/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Pingüino",
        imagen: "./imagenes/pinguino-volando-globo.avif",
        descripcion: "Hay distintas formas de volar.",
    },
    {
        id: 2,
        nombre: "Ajolote",
        imagen: "./imagenes/axolotl-concepto-amor.avif",
        descripcion: "¡Cuídame porque me extingo!",
    },
    {
        id: 3,
        nombre: "Elefante",
        imagen: "./imagenes/elefante-sentado-agitando-man.avif",
        descripcion: "Nunca olvido algo.",
    },
    {
        id: 4,
        nombre: "Gato",
        imagen: "./imagenes/gato-montando-bicicleta.avif",
        descripcion: "Primero te robo el corazón, luego la cama, el sofá y la comida.",
    },
    {
        id: 5,
        nombre: "Hipopotamo",
        imagen: "./imagenes/hipopotamo-agitando-mano.avif",
        descripcion: "¡Me gusta mucho el agua!",
    },
    {
        id: 6,
        nombre: "Koala",
        imagen: "./imagenes/koala-sentado.avif",
        descripcion:"Dormir, comer, dormir."
    },
    {
        id: 7,
        nombre: "Mono",
        imagen: "./imagenes/mono-lindo-que-juega.avif",
        descripcion:"No me gustan las banana."
    },
    {
        id: 8,
        nombre: "Perro",
        imagen: "./imagenes/perro-beber-leche-.avif",
        descripcion:"Eres mi mejor amigo."
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

//llamada a la funcion
recorrerListado()

function crearCarta() {
    //pedir datos al usario
    const nombre = prompt("Nombre del Animal")
    const imagen = prompt("Imagen del Animal")
    const descripcion = prompt("Descripción breve")

    //creamos un objeto con los datos del usario
    const carta = {nombre,imagen,descripcion}

    //añadir la carta al listado de cartas
    listadoCartas.push(carta)

    //llamado a la funcion recorrer carta
    recorrerListado()
}


