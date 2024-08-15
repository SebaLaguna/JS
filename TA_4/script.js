function sumAll(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    document.getElementById('output').innerHTML = `<p>La suma de todos los números entre ${a} y ${b} es: ${sum}</p>`;
}
sumAll(1, 5); 
