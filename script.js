/* ===== SITR v2.1 Beta ===== */

let contadorFTI = 1;

/* =========================
   NAVEGACIÓN ENTRE PANTALLAS
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

/* =========================
   BÚSQUEDA FTI
========================= */

function buscarFTI() {
    const input = document.getElementById("busquedaFTI").value.trim();
    const resultados = document.getElementById("resultadosFTI");

    if (input === "") {
        resultados.innerHTML = `
            <div class="info-box">
                Ingrese un criterio de búsqueda
            </div>
        `;
        return;
    }

    // Mock temporal
    if (
        input.toLowerCase().includes("camila") ||
        input.includes("000001") ||
        input.includes("123")
    ) {
        resultados.innerHTML = `
            <div class="card" onclick="abrirFTIExistente()">
                FTI-000001<br>
                Camila Rivera Polanco<br>
                Tipo: Persona<br>
                Sector: Chumil
            </div>
        `;
    } else {
        resultados.innerHTML = `
            <div class="info-box">
                No se encontraron resultados
            </div>
        `;
    }
}

function abrirFTIExistente() {
    document.getElementById("tituloFTI").innerText = "FTI-000001";
    document.getElementById("nombreFTI").innerText = "Camila Rivera Polanco";
    document.getElementById("tipoFTI").innerText = "Persona";

    mostrarPantalla("perfilFTI");
    mostrarTab("resumen");
}

/* =========================
   CREACIÓN NUEVA FTI
========================= */

function abrirPerfilFTI(tipo) {
    contadorFTI++;

    let id = "FTI-" + String(contadorFTI).padStart(6, "0");

    document.getElementById("tituloFTI").innerText = id;
    document.getElementById("nombreFTI").innerText = "Nueva FTI";
    document.getElementById("tipoFTI").innerText = tipo;

    mostrarPantalla("perfilFTI");
    mostrarTab("resumen");
}

/* =========================
   TABS FTI
========================= */

function mostrarTab(tab) {
    const tabs = document.querySelectorAll(".tab-content");

    tabs.forEach(t => {
        t.classList.add("oculto");
    });

    document.getElementById("tab-" + tab).classList.remove("oculto");
}

/* =========================
   FUTURO SITR
========================= */

/*
Próximas versiones:

v2.2
- localStorage
- CRUD real frontend

v2.3
- Leaflet
- GPS
- coordenadas

v3.0
- backend
- usuarios
- autenticación
- base de datos
*/
