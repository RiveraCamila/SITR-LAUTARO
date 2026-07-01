/* =========================
   STATE SITR
========================= */

const SITR = {
    moduloSeleccionado: null,
    registroBase: {},
    coordenadas: {
        lat: null,
        lon: null
    },
    mapaInicializado: false
};

/* =========================
   ROUTER / NAVEGACIÓN
========================= */

function mostrarPantalla(idPantalla) {
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(pantalla => {
        pantalla.classList.add("oculto");
    });

    document.getElementById(idPantalla).classList.remove("oculto");
}

function volverHome() {
    mostrarPantalla("home");
}

function volverHomeDesdeConfirmacion() {
    mostrarPantalla("home");
}

/* =========================
   HOME / SELECCIÓN MÓDULO
========================= */

function seleccionarModulo(modulo) {
    SITR.moduloSeleccionado = modulo;

    console.log("Módulo seleccionado:", modulo);

    mostrarPantalla("mbt");
}

/* =========================
   RTB (antes MBT)
========================= */

function guardarRTB() {
    SITR.registroBase = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        rut: document.getElementById("rut").value,
        telefono: document.getElementById("telefono").value,
        fecha: document.getElementById("fecha").value
    };

    console.log("RTB guardado:", SITR.registroBase);

    abrirModuloSeleccionado();
}

function abrirModuloSeleccionado() {
    switch (SITR.moduloSeleccionado) {
        case "catastro":
            mostrarPantalla("catastro");
            break;

        case "diagnostico":
            alert("Módulo Diagnóstico en construcción");
            break;

        case "ayudas":
            alert("Módulo Ayudas en construcción");
            break;

        case "emergencias":
            alert("Módulo Emergencias en construcción");
            break;

        case "infraestructura":
            alert("Módulo Infraestructura en construcción");
            break;

        case "social":
            alert("Módulo Social en construcción");
            break;

        case "visor":
            alert("Visor territorial en construcción");
            break;

        default:
            alert("No se seleccionó módulo");
    }
}

/* =========================
   CATASTRO
========================= */

function volverRTB() {
    mostrarPantalla("mbt");
}

function guardarRegistro() {
    mostrarPantalla("confirmacion");
}

/* =========================
   GIS
========================= */

function inicializarMapa() {
    if (SITR.mapaInicializado) return;

    console.log("Mapa listo para Leaflet");
    SITR.mapaInicializado = true;
}

function obtenerUbicacion() {
    console.log("GPS pendiente para v1.1");
}
