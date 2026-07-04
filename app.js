/* =========================
   SITR-LAUTARO v0.1
========================= */

const app = document.getElementById("app");

/* ---------- ESTADO TEMPORAL ---------- */
let registroActual = {
    nombres: "",
    apellidos: "",
    rut: "",
    telefono: "",
    sector: ""
};

/* ---------- INICIO ---------- */
window.onload = () => {
    renderHome();
};

/* ---------- HOME ---------- */
function renderHome() {
    app.innerHTML = `
        <div class="card">
            <button class="btn" onclick="renderNuevoRegistro()">
                + Nuevo Registro
            </button>

            <button class="btn" onclick="buscarRegistro()">
                🔍 Buscar Registro
            </button>

            <button class="btn" onclick="abrirVisor()">
                🗺 Visor Territorial
            </button>
        </div>
    `;
}

/* ---------- NUEVO REGISTRO ---------- */
function renderNuevoRegistro() {
    app.innerHTML = `
        <div class="card">
            <h2>Nuevo Registro</h2>
            <br>

            <div class="form-group">
                <label>Nombres</label>
                <input id="nombres">
            </div>

            <div class="form-group">
                <label>Apellidos</label>
                <input id="apellidos">
            </div>

            <div class="form-group">
                <label>RUT</label>
                <input id="rut">
            </div>

            <div class="form-group">
                <label>Teléfono</label>
                <input id="telefono">
            </div>

            <div class="form-group">
                <label>Sector</label>
                <select id="sector">
                    <option value="">Seleccione</option>
                    <option>Dollinco</option>
                    <option>Muco</option>
                    <option>Malpichahue</option>
                    <option>Vega Larga</option>
                </select>
            </div>

            <button class="btn" onclick="guardarRegistroBase()">
                Siguiente
            </button>

            <button class="btn" onclick="renderHome()">
                Volver
            </button>
        </div>
    `;
}

/* ---------- GUARDAR BASE ---------- */
function guardarRegistroBase() {
    registroActual.nombres = document.getElementById("nombres").value;
    registroActual.apellidos = document.getElementById("apellidos").value;
    registroActual.rut = document.getElementById("rut").value;
    registroActual.telefono = document.getElementById("telefono").value;
    registroActual.sector = document.getElementById("sector").value;

    renderTipoRegistro();
}

/* ---------- TIPO REGISTRO ---------- */
function renderTipoRegistro() {
    app.innerHTML = `
        <div class="card">
            <h2>Tipo de Registro</h2>
            <br>

            <button class="btn" onclick="alert('Catastro Predial')">
                Catastro Predial
            </button>

            <button class="btn" onclick="alert('Diagnóstico Productivo')">
                Diagnóstico Productivo
            </button>

            <button class="btn" onclick="alert('Ayudas / Beneficios')">
                Ayudas / Beneficios
            </button>

            <button class="btn" onclick="alert('Emergencias')">
                Emergencias
            </button>
        </div>
    `;
}

/* ---------- FUNCIONES TEMPORALES ---------- */
function buscarRegistro() {
    alert("Módulo en construcción");
}

function abrirVisor() {
    alert("Visor territorial en construcción");
}