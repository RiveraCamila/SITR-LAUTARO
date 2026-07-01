/* =========================
   SITR v2.0 Beta
   Autora: Camila Rivera Polanco
========================= */

const SITR = {
    moduloSeleccionado: null,
    registroBase: {},
    personas: [
        {
            rut: "18.700.436-9",
            nombres: "Camila Fernanda",
            apellidos: "Rivera Polanco",
            telefono: "987654321"
        }
    ]
};

/* =========================
   NAVEGACIÓN
========================= */

function mostrarPantalla(idPantalla) {
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(p => {
        p.classList.add("oculto");
    });

    document.getElementById(idPantalla).classList.remove("oculto");
}

function volverHome() {
    mostrarPantalla("home");
}

/* =========================
   SELECCIÓN DE MÓDULO
========================= */

function seleccionarModulo(modulo) {
    SITR.moduloSeleccionado = modulo;
    mostrarPantalla("rtb");
}

/* =========================
   RTB
========================= */

function guardarRTB() {
    SITR.registroBase = {
        rut: document.getElementById("rut").value,
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        telefono: document.getElementById("telefono").value,
        fecha: document.getElementById("fecha").value,
        profesional: document.getElementById("profesional").value
    };

    abrirModuloSeleccionado();
}

function abrirModuloSeleccionado() {
    if (!SITR.moduloSeleccionado) {
        alert("No hay módulo seleccionado");
        return;
    }

    mostrarPantalla(SITR.moduloSeleccionado);
}

/* =========================
   GUARDADO FINAL
========================= */

function guardarRegistro() {
    mostrarPantalla("confirmacion");
}

/* =========================
   BÚSQUEDA AUTOMÁTICA RUT
========================= */

document.addEventListener("DOMContentLoaded", function () {
    const rutInput = document.getElementById("rut");

    if (rutInput) {
        rutInput.addEventListener("input", buscarRutAutomatico);
    }
});

function buscarRutAutomatico() {
    const rut = document.getElementById("rut").value.trim();

    if (rut.length < 11) return;

    const persona = SITR.personas.find(p => p.rut === rut);
    const estado = document.getElementById("rutEstado");

    if (persona) {
        document.getElementById("nombres").value = persona.nombres;
        document.getElementById("apellidos").value = persona.apellidos;
        document.getElementById("telefono").value = persona.telefono;

        estado.innerHTML =
            "✓ Persona encontrada. Datos autocompletados.";
    } else {
        document.getElementById("nombres").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("telefono").value = "";

        estado.innerHTML =
            "Nuevo registro territorial.";
    }
}
