/* ==========================
   SITR-LAUTARO v0.1
========================== */

const app = document.getElementById("app");

/* Estado temporal */
let datosSITR = {
    usuario: {
        nombres: "",
        apellidos: "",
        rut: "",
        telefono: "",
        sector: ""
    },
    modulo: "",
    catastro: {},
    diagnostico: {},
    ayudas: {},
    emergencias: {}
};

/* Inicio */
window.onload = function () {
    renderHome();
};
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
function renderNuevoRegistro() {
    app.innerHTML = `
        <div class="card">
            <button class="btn-back" onclick="renderHome()">
                ← Atrás
            </button>

            <h2>Nuevo Registro</h2>

            <div class="form-group">
                <label>Nombres</label>
                <input id="nombres" value="${datosSITR.usuario.nombres}">
            </div>

            <div class="form-group">
                <label>Apellidos</label>
                <input id="apellidos" value="${datosSITR.usuario.apellidos}">
            </div>

            <div class="form-group">
                <label>RUT</label>
                <input id="rut" value="${datosSITR.usuario.rut}">
            </div>

            <div class="form-group">
                <label>Teléfono</label>
                <input id="telefono" value="${datosSITR.usuario.telefono}">
            </div>

            <div class="form-group">
                <label>Sector</label>
                <select id="sector">
                    <option value="">Seleccione</option>
                    <option ${datosSITR.usuario.sector==="Dollinco"?"selected":""}>Dollinco</option>
                    <option ${datosSITR.usuario.sector==="Muco"?"selected":""}>Muco</option>
                    <option ${datosSITR.usuario.sector==="Malpichahue"?"selected":""}>Malpichahue</option>
                    <option ${datosSITR.usuario.sector==="Vega Larga"?"selected":""}>Vega Larga</option>
                </select>
            </div>

            <button class="btn" onclick="guardarRegistroBase()">
                Siguiente
            </button>
        </div>
    `;
}
function guardarRegistroBase() {
    datosSITR.usuario.nombres =
        document.getElementById("nombres").value;

    datosSITR.usuario.apellidos =
        document.getElementById("apellidos").value;

    datosSITR.usuario.rut =
        document.getElementById("rut").value;

    datosSITR.usuario.telefono =
        document.getElementById("telefono").value;

    datosSITR.usuario.sector =
        document.getElementById("sector").value;

    renderTipoRegistro();
}
function renderTipoRegistro() {
    app.innerHTML = `
        <div class="card">
            <button class="btn-back" onclick="renderNuevoRegistro()">
                ← Atrás
            </button>

            <h2>Tipo de Registro</h2>

            <button class="btn" onclick="renderCatastroPredial()">
                Catastro Predial
            </button>

            <button class="btn" onclick="renderDiagnostico()">
                Diagnóstico Productivo
            </button>

            <button class="btn" onclick="renderAyudas()">
                Ayudas / Beneficios
            </button>

            <button class="btn" onclick="renderEmergencias()">
                Emergencias
            </button>
        </div>
    `;
}
function renderTipoRegistro() {
    app.innerHTML = `
        <div class="card">
            <button class="btn-back" onclick="renderNuevoRegistro()">
                ← Atrás
            </button>

            <h2>Tipo de Registro</h2>

            <button class="btn" onclick="renderCatastroPredial()">
                Catastro Predial
            </button>

            <button class="btn" onclick="renderDiagnostico()">
                Diagnóstico Productivo
            </button>

            <button class="btn" onclick="renderAyudas()">
                Ayudas / Beneficios
            </button>

            <button class="btn" onclick="renderEmergencias()">
                Emergencias
            </button>
        </div>
    `;
}
function buscarRegistro() {
    alert("Módulo Buscar Registro en construcción");
}

function abrirVisor() {
    alert("Visor Territorial en construcción");
}