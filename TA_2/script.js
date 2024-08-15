function reverseString(texto) {
    const reversedText = texto.split('').reverse().join('');
    document.getElementById('output').innerText = reversedText;
}

reverseString("Hola Mundo");
