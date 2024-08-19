const sizeElement = document.getElementById("size");

function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    sizeElement.textContent = `${width}px x ${height}px`;
}

updateWindowSize();

window.addEventListener("resize", updateWindowSize);
