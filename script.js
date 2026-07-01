function abrirMBT() {
    document.getElementById("home").style.display = "none";
    document.getElementById("mbt").style.display = "block";
}

function volverHome() {
    document.getElementById("mbt").style.display = "none";
    document.getElementById("home").style.display = "block";
}

function abrirCatastro() {
    document.getElementById("mbt").style.display = "none";
    document.getElementById("catastro").style.display = "block";
}

function volverMBT() {
    document.getElementById("catastro").style.display = "none";
    document.getElementById("mbt").style.display = "block";
}

function guardarRegistro() {
    document.getElementById("catastro").style.display = "none";
    document.getElementById("confirmacion").style.display = "block";
}

function volverHomeDesdeConfirmacion() {
    document.getElementById("confirmacion").style.display = "none";
    document.getElementById("home").style.display = "block";
}
