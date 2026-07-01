function mostrarPantalla(idPantalla) {
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(pantalla => {
        pantalla.classList.add("oculto");
    });

    document.getElementById(idPantalla).classList.remove("oculto");
}

function abrirMBT() {
    mostrarPantalla("mbt");
}

function volverHome() {
    mostrarPantalla("home");
}

function abrirCatastro() {
    mostrarPantalla("catastro");
}

function volverMBT() {
    mostrarPantalla("mbt");
}

function guardarRegistro() {
    mostrarPantalla("confirmacion");
}

function volverHomeDesdeConfirmacion() {
    mostrarPantalla("home");
}

/* ===== Preparado para SITR v1.1 (Leaflet) ===== */

let mapaInicializado = false;
let coordenadas = {
    lat: null,
    lon: null
};

function inicializarMapa() {
    if (mapaInicializado) return;

    console.log("Mapa listo para Leaflet");
    mapaInicializado = true;
}

function obtenerUbicacion() {
    console.log("GPS pendiente para v1.1");
}
