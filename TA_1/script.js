function repeatString(texto, repeticiones) {
    const outputDiv = document.getElementById("output");
    
    for (let i = 0; i < repeticiones; i++) {
        const paragraph = document.createElement("p");
        paragraph.innerText = texto;
        outputDiv.appendChild(paragraph);
    }
}

repeatString("Hola Mundo", 5);
