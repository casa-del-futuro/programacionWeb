/* Renderizado generico */
window.onload = () => {
  document.querySelector("header").innerHTML = `
  <div class="header-escritorio">
    <a title="Conectar LAB" href="#top">
      <img class="header-logo" src="./imagenes/logo.png" alt="Logo de Conectar LAB" />
    </a>
    <nav class="header-nav" >
      <ul>
        <li><a href="#top">Inicio</a></li>
        <li><a href="#images">Imagenes</a></li>
        <li><a href="#info">Información</a></li>
      </ul>
    </nav>
    <button class="menu-hamburguesa" href="" onclick="precionarInterruptor()">
      <i class="menu-hamburguesa-icono fa-solid fa-bars"></i>
    </button>
  </div>
  <nav class="menu-hamburguesa-nav">
    <ul>
      <li><a href="#top">Inicio</a></li>
      <li><a href="#images">Imagenes</a></li>
      <li><a href="#info">Información</a></li>
    </ul>
  </nav>
  `;

  document.querySelector(".contacto").innerHTML =`
  <img class="img-contacto" src="./imagenes/mascara.png">
  <div class="contacto-info">
    <h1>¡Seguinos en nuestras redes sociales!</h1>

  </div>
  `;

  document.querySelector("footer").innerHTML = `
  <div>
  </div>
  <a title="Conectar LAB" href="#top">
    <img class="header-logo" src="./imagenes/logo.png"  >
  </a>
`;
};

function precionarInterruptor() {
  document.querySelector(".menu-hamburguesa-nav").classList.toggle("visible");
  document.querySelector(".menu-hamburguesa-icono").classList.toggle("fa-bars-staggered");
}
