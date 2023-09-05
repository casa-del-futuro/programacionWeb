//Guardar en una variable el valor del contador
var contador = 0

//Mostrar el valor del contenador en el HTML
function mostrar(){
    //capturar el html del contador
    document.querySelector(".contador")
    //actualizar el valor del contador
    .innerHTML = contador

}

//Declara funcion sumar
function sumar() {
    contador = contador + 1
    mostrar()
}

//Declarar funcion restar
function restar() {
    contador = contador - 1
    mostrar()
}

//Reiniciar el contador
function reiniciar(){
    contador = 0
    mostrar()
}
