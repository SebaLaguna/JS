
const textInput = document.getElementById("textInput");

textInput.addEventListener("focus", function() {
    textInput.style.border = "2px solid darkgray";
});

textInput.addEventListener("blur", function() {
    textInput.style.border = "2px solid lightgray";
});
