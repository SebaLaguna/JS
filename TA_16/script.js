const toggleButton = document.getElementById("toggleButton");
const text = document.getElementById("text");

toggleButton.addEventListener("click", function() {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});
