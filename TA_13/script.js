const button = document.getElementById("Boton");
const text = document.getElementById("Texto");

button.addEventListener("click", function() {
    text.textContent = "Texto cambiado";
});