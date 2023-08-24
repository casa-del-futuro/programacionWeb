/*capturar datos necesarios para comentar */
// por nodos me refiero a etiquetas html // 
//const nombreVariable = "valor variable"
const boton = document.querySelector(".boton") //document es todo mi html
const input = document.querySelector(".input")
const comentarios = document.querySelector(".comentarios")
// console.log("boton", boton) ver en cosoloa el NODO
/* crear una funcion que se ejecute cuando le haga click al boton  */
function comentar() {
    //capturar el valor del input
    //console.log(input.value)
    /* capturar valor del input */
    /* Agregar un comentario al div con clase de comentarios  */
    comentarios.innerHTML += `<p>${input.value}</p>`
    
}
