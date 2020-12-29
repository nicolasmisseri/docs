$botonMostrarMenu = document.querySelector("#main-menu");
menuPrincipal = document.querySelector("#menuPrincipal");
console.log(menuPrincipal.style);

$botonMostrarMenu.onclick = function () {
  menuPrincipal = document.querySelector("#menuPrincipal");
  menuPrincipal.style = "display:";
};

$botonCerrarMenu = document.querySelector("#cerrar-menu");
$botonCerrarMenu.onclick = function () {
  menuPrincipal = document.querySelector("#menuPrincipal");
  menuPrincipal.style = "display:none";
};
