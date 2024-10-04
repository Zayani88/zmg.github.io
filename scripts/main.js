let miImage = document.querySelector("img");
miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/ajolote-mexicano.jpg") {
        miImage.setAttribute("src", "images/ajolotes.jpg");
    } else {
        miImage.setAttribute("src", "images/ajolote-mexicano.jpg");
    }
};
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Los ajolotes son geniales, " + miNombre;
}
if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Los ajolotes son geniales, " + nombreAlmacenado;
}
miBoton.onclick = function () {
    estableceNombreUsuario();
};
